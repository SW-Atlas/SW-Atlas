const evidenceTables = {};
const evidenceSourceTypes = {
  paper:L('同行评议论文','Peer-reviewed paper'),
  registry:L('试验登记','Trial registry'),
  sponsor:L('申办方披露','Sponsor disclosure'),
  abstract:L('会议摘要','Conference abstract')
};
const evidenceResultTypes = {
  reported:L('报告结果','Reported result'),
  null:L('未达显著','Not statistically significant'),
  noeffect:L('未观察到效应','No effect observed'),
  partial:L('部分披露','Partially disclosed'),
  unavailable:L('登记未贴结果','No posted registry results')
};

function evidenceCsv(columns,rows) {
  const cell = value => '"'+String(local(value) ?? '').replaceAll('"','""')+'"';
  return '\uFEFF'+[columns,...rows].map(row=>row.map(cell).join(',')).join('\r\n')+'\r\n';
}

function evidenceTable(id,params) {
  const spec = evidenceTables[id];
  let visible = [];
  const type = r => evidenceSourceTypes[r.type];
  const status = r => evidenceResultTypes[r.status];
  const options = Object.fromEntries(spec.rows.map(r=>[r.topic,r.topicLabel || r.topic]));
  const sourceOptions = Object.fromEntries([...new Set(spec.rows.map(r=>r.type))].map(key=>[key,evidenceSourceTypes[key]]));
  const statusOptions = Object.fromEntries([...new Set(spec.rows.map(r=>r.status))].map(key=>[key,evidenceResultTypes[key]]));
  const csvValues = r => [...spec.columns.map(([key])=>r[key]),type(r),status(r),r.locator,r.note,r.source.url];
  const index = spec.rows.map(r=>[r,csvValues(r).flatMap(v=>v && typeof v==='object'?[v.zh,v.en]:[v])
    .join(' ').normalize('NFKC').toLowerCase()]);
  const sourceLabel = L('来源和取值位置','Source and location');
  const resultLabel = L('结果状态','Result status');
  app.innerHTML = header(spec.title,spec.description,link(L('研究导航','Research guide'),'research'))+
    '<div class="actions">'+spec.links.map(([path,label])=>link(label,path,'button')).join('')+'</div>'+
    catalogBar(searchFacet(params.get('q') || '',spec.searchLabel || L('试验、终点或分析人群','Study, outcome or analysis population'))+
      facet('topic',spec.topicLabel,options)+facet('source',L('来源类型','Source type'),sourceOptions)+
      facet('status',resultLabel,statusOptions))+
    '<div class="actions"><button class="primary" id="download-evidence" type="button">'+
    say('下载当前结果 CSV','Download filtered CSV')+'</button></div>'+
    paragraph(L('手机上可横向滑动表格。下载包含当前筛选结果及原始来源网址。',
      'Swipe horizontally on smaller screens. Downloads contain the filtered rows and original source URLs.'),'muted')+
    '<div id="list"></div>'+panel(L('结构证据覆盖','Structure evidence coverage'),
      paragraph(spec.structureNote)+refline(spec.structureSources));
  bindCatalog('evidence/'+id,params,(search,choice)=>{
    visible = index.filter(([r,terms])=>includesTerms(terms,search) &&
      (!choice.topic || r.topic===choice.topic) && (!choice.source || r.type===choice.source) &&
      (!choice.status || r.status===choice.status)).map(([r])=>r);
    document.getElementById('count').textContent = say('显示 '+visible.length+' / '+spec.rows.length+' 条',
      'Showing '+visible.length+' of '+spec.rows.length+' rows');
    document.getElementById('download-evidence').disabled = !visible.length;
    document.getElementById('list').innerHTML = visible.length ?
      table([...spec.columns.map(([,label])=>label),resultLabel,sourceLabel,L('解读范围','Interpretation')],
        visible.map(r=>[...spec.columns.map(([key])=>esc(r[key] || '—')),esc(status(r)),
          esc(type(r))+'<br>'+esc(r.locator)+'<br>'+ext(r.source),esc(r.note || '—')])) :
      paragraph(L('没有匹配证据。','No matching evidence.'),'empty');
  });
  document.getElementById('download-evidence').addEventListener('click',()=>{
    const columns = [...spec.columns.map(([,label])=>label),L('来源类型','Source type'),resultLabel,
      L('取值位置','Source location'),L('解读范围','Interpretation'),L('来源网址','Source URL')];
    const url = URL.createObjectURL(new Blob([evidenceCsv(columns,visible.map(csvValues))],{type:'text/csv;charset=utf-8'}));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SW_Atlas_'+id+'_'+locale+'_'+version+'.csv';
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
}
