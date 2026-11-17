const approvalStageOptions = {
  approved:L('已收录相关适应证获批','Indexed indication approval'),
  'approved-fda':L('美国 FDA 获批记录','US FDA approval record'),
  'approved-other':L('其他地区获批记录','Approval record outside the US'),
  'other-indication':L('其他适应证已获批','Approved for a different indication')
};

function indexedApproval(r) {
  if (!isApprovedMolecule(r)) return '';
  return (r.approval?.jurisdiction || (r.tag === USApproved ? 'US' : '')) === 'US' ? 'approved-fda' : 'approved-other';
}

function matchesClinicalStage(r, phase) {
  if (!phase) return true;
  const approval = indexedApproval(r);
  if (phase === 'approved') return !!approval;
  if (phase === 'approved-fda' || phase === 'approved-other') return approval === phase;
  if (phase === 'other-indication') return !!clinicalCandidates[r.id]?.otherIndication;
  return clinicalCandidates[r.id]?.phase === phase;
}

const targetClassLabels = {
  a:L('A 类 GPCR','Class A GPCR'),
  b:L('B 类 GPCR','Class B GPCR'),
  c:L('C 类 GPCR','Class C GPCR')
};
const targetAssemblyLabels = {
  multimer:L('指定异源多亚基靶标','Defined heteromeric target'),
  component:L('亚基或分离结构域','Subunit or isolated domain'),
  family:L('靶标家族汇总','Target family overview')
};
const targetAssemblies = {
  gaba:'multimer','gabaa-a1b3g2':'multimer','glyr-a1b':'multimer',gabab:'multimer',amy1r:'multimer',
  cacna2d1:'component','rabbit-cacna2d1':'component','rat-glun1-lbd':'component','gabaa-family':'family'
};

function targetGpcrClass(r) {
  if (targetFamily(r) !== 'gpcr') return '';
  const classMatch = r.tag.en.match(/Class ([ABC])/i);
  return classMatch ? classMatch[1].toLowerCase() : r.id === 'htr2a' ? 'a' : '';
}

function targetCoverage(r) {
  return {
    indexed:targetStructures(r.id).length > 0,
    reference:!!r.structureReferences?.length || Object.values(structureGallery.entries).some(s=>s.target===r.id && s.category==='reference'),
    pocket:targetSites(r.id).some(s=>!s.candidate)
  };
}

const PIE_COLORS=['#1a4f8b','#4a90a4','#2f7d6d','#e8891f','#8a6fc4','#c25b7c','#5a6bd1','#b08a3e','#7a9a5c','#c07a3e','#5c8ac2','#a44a6c'];

function pieSlices(bins,total){
  const r=40,cx=50,cy=50; let cum=0; const out=[];
  bins.forEach((bin,i)=>{
    if(!bin.count) return;
    const a0=cum/total*2*Math.PI-Math.PI/2; cum+=bin.count;
    const a1=cum/total*2*Math.PI-Math.PI/2;
    const x1=cx+r*Math.cos(a0),y1=cy+r*Math.sin(a0),x2=cx+r*Math.cos(a1),y2=cy+r*Math.sin(a1);
    const large=a1-a0>Math.PI?1:0;
    const color=bin.color||PIE_COLORS[i%PIE_COLORS.length];
    out.push('<path d="M '+cx+' '+cy+' L '+x1.toFixed(2)+' '+y1.toFixed(2)+' A '+r+' '+r+' 0 '+large+' 1 '+x2.toFixed(2)+' '+y2.toFixed(2)+' Z" fill="'+color+'" stroke="#fff" stroke-width="1.2"/>');
  });
  return out.join('');
}

function distribution(title, bins, total, note) {
  const nonEmpty=bins.filter(b=>b.count>0);
  const legend=nonEmpty.map(({label,count,field,value,color},i)=>{
    const pct=total?((count/total)*100).toFixed(1):'0';
    const c=color||PIE_COLORS[i%PIE_COLORS.length];
    const row='<span class="dist-swatch" style="background:'+c+'"></span>'+
      '<span class="dist-label">'+esc(label)+'</span><strong>'+count+'</strong><span class="dist-pct">'+pct+'%</span>';
    return '<li>'+(field?'<button type="button" data-catalog-field="'+esc(field)+'" data-catalog-value="'+esc(value)+'" aria-pressed="false">'+row+'</button>':
      '<div class="dist-row">'+row+'</div>')+'</li>';
  }).join('');
  return panel(title,
    '<div class="atlas-pie">'+
      '<svg class="atlas-pie-chart" viewBox="0 0 100 100" role="img" aria-label="'+esc(title)+'">'+pieSlices(nonEmpty,total)+'</svg>'+
      '<ul class="atlas-distribution atlas-pie-legend">'+legend+'</ul>'+
    '</div>'+paragraph(note,'catalog-note'),'atlas-distribution-panel','h3');
}

const indicationLabels = {
  insomnia:L('失眠','Insomnia'),
  breathing:L('睡眠呼吸暂停','Sleep apnea'),
  narcolepsy:L('发作性睡病/嗜睡','Narcolepsy / hypersomnia'),
  rls:L('不宁腿综合征','Restless legs syndrome'),
  circadian:L('昼夜节律','Circadian rhythm'),
  sedative:L('镇静/抗焦虑','Sedative / anxiolytic'),
  other:L('其他/未标注','Other / unannotated')
};
function moleculeIndication(r) {
  if (clinicalCandidates[r.id]) return clinicalCandidates[r.id].category;
  const p = moleculeProfiles[r.id] || {};
  let txt = '';
  if (p.regulatory?.fields) for (const [k,v] of p.regulatory.fields)
    txt += ' ' + (typeof k==='object'?(k.zh+' '+k.en):String(k)) + ' ' + (typeof v==='object'?(v.zh+' '+v.en):String(v));
  txt += ' ' + (r.description?.zh || '') + ' ' + (r.subtitle?.zh || '');
  txt = txt.toLowerCase();
  if (/呼吸暂停|apnea|breathing|打鼾|打呼/.test(txt)) return 'breathing';
  if (/发作性睡病|narcolepsy|猝倒|cataplexy/.test(txt)) return 'narcolepsy';
  if (/不宁腿|restless legs|restless leg/.test(txt)) return 'rls';
  if (/昼夜节律|circadian|non-24|非24|smith|时差|轮班|jet lag|shift work/.test(txt)) return 'circadian';
  if (/失眠|insomnia|入睡|睡眠维持|sleep onset|sleep maintenance|催眠|hypnotic/.test(txt)) return 'insomnia';
  if (/嗜睡|hypersomnia|sleepiness|促醒|促觉醒|wake-promoting|alertness/.test(txt)) return 'narcolepsy';
  if (/焦虑|anxiety|镇静|sedation|sedative|安神/.test(txt)) return 'sedative';
  return 'other';
}

function moleculeOverviewStats(rows) {
  const clinical=rows.filter(r=>clinicalCandidates[r.id]);
  const count=(field,value)=>({field,value,label:field==='category'?moleculeCategories[value]:clinicalPhases[value],
    count:rows.filter(r=>field==='category'?moleculeCategory(r)===value:matchesClinicalStage(r,value)).length});
  const effectBins=[
    {field:'direction',value:'wake',label:effectLabels.wake,color:'#e8891f',count:rows.filter(r=>sleepWakeEffects[r.id]?.direction==='wake').length},
    {field:'direction',value:'sleep',label:effectLabels.sleep,color:'#5a6bd1',count:rows.filter(r=>sleepWakeEffects[r.id]?.direction==='sleep').length},
    {label:L('未标注','Unannotated'),color:'#c8cfda',count:rows.filter(r=>!sleepWakeEffects[r.id]).length}
  ];
  const effectTotal=rows.length;
  const indicationBins=Object.keys(indicationLabels).map(key=>({
    label:indicationLabels[key], count:rows.filter(r=>moleculeIndication(r)===key).length}));
  return '<section class="atlas-stat-section" aria-labelledby="molecule-stat-title"><h2 id="molecule-stat-title">'+say('全库分布','Collection distributions')+'</h2><div class="atlas-stat-grid atlas-stat-grid-4">'+
    distribution(L('效应方向','Effect direction'),effectBins,effectTotal,
      L('分母为全部 '+effectTotal+' 条分子记录。未标注效应方向的分子计入"未标注"。','Denominator: all '+effectTotal+' molecule records. Molecules without an annotated effect direction are counted as unannotated.'))+
    distribution(L('记录类型','Record types'),Object.keys(moleculeCategories).map(key=>count('category',key)),rows.length,
      L('分母为全部 '+rows.length+' 条记录，含独立统计的复方项目。','Denominator: '+rows.length+' records, including separate combination programs.'))+
    distribution(L('研发项目的最高收录阶段','Highest indexed development phase'),Object.keys(clinicalPhases).map(key=>count('phase',key)),clinical.length,
      L('分母为 '+clinical.length+' 个研发项目，含复方。','Denominator: '+clinical.length+' development programs, including combinations.'))+
    distribution(L('适应证','Indication'),indicationBins,rows.length,
      L('分母为全部 '+rows.length+' 条分子记录。获批药物按说明书适应证归类，临床项目按研发方向归类。','Denominator: all '+rows.length+' molecule records. Approved drugs are classified by labeled indication; clinical programs by research direction.'))+
    '</div></section>';
}

function targetOverviewStats(rows) {
  const coverage=rows.map(targetCoverage);
  const count=(field,value,label,match)=>({field,value,label,count:rows.filter(match).length});
  const gpcr=rows.filter(r=>targetFamily(r)==='gpcr').length;
  const indexed=coverage.filter(c=>c.indexed).length;
  const referenceOnly=coverage.filter(c=>c.reference&&!c.indexed).length;
  return catalogStats([
    {label:L('靶标档案','Target profiles'),count:rows.length},
    {label:L('有站内结构的靶标','Targets with indexed structures'),count:indexed},
    {label:L('仅有参考结构的靶标','Targets with references only'),count:referenceOnly},
    {label:L('有坐标位点的靶标','Targets with coordinate-based sites'),count:coverage.filter(c=>c.pocket).length}
  ])+'<section class="atlas-stat-section" aria-labelledby="target-stat-title"><h2 id="target-stat-title">'+say('靶标分类','Target classification')+'</h2><div class="atlas-stat-grid">'+
    distribution(L('分子家族','Molecular families'),Object.entries(targetFamilies).map(([key,label])=>count('family',key,label,r=>targetFamily(r)===key)),rows.length,
      L('按靶标档案计数。同一蛋白的不同物种或构建可有独立档案。','Counts target profiles. Different species or constructs of a protein may have distinct profiles.'))+
    distribution(L('GPCR 亚类','GPCR classes'),Object.entries(targetClassLabels).map(([key,label])=>count('gpcr',key,label,r=>targetGpcrClass(r)===key)),gpcr,
      L('分母为 '+gpcr+' 条 GPCR 档案。点击柱条可查看对应受体。','Denominator: '+gpcr+' GPCR profiles. Select a bar to list the corresponding receptors.'))+
    distribution(L('靶标组成与范围','Target composition and scope'),Object.entries(targetAssemblyLabels).map(([key,label])=>count('assembly',key,label,r=>targetAssemblies[r.id]===key)),rows.length,
      L('独立标注靶标本身的组成。配体或 G 蛋白结合的实验结构另见结构总览。','Describes the target itself. Ligand- or G protein-bound structures are indexed separately.'))+
    distribution(L('结构证据覆盖','Structural evidence coverage'),[
      {label:L('有站内实验结构','Indexed experimental structure'),count:indexed,field:'evidence',value:'complex'},
      {label:L('仅有参考结构','Structure references only'),count:referenceOnly,field:'evidence',value:'reference'},
      {label:L('结构待收录','Structure coverage pending'),count:rows.length-indexed-referenceOnly,field:'evidence',value:'structure-gap'}
    ],rows.length,L('按靶标档案计数，每条只归入一个分组。','Each target profile appears in one group.'))+
    '</div></section>';
}

