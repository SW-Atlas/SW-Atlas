const structureSortOptions = {
  target:L('靶标 → 配体 → PDB','Target → ligand → PDB'),
  ligand:L('配体名称','Ligand name'),
  pdb:L('PDB 编号','PDB ID'),
  resolution:L('分辨率从小到大','Resolution, low to high'),
  'resolution-desc':L('分辨率从大到小','Resolution, high to low')
};
const structureSourceIds = record => [...new Set([
  ...record.sources,...(moleculeProfiles[record.id]?.structureEvidence?.sources || [])
].flatMap(({url})=>{
  const match=url.match(/^https:\/\/www\.rcsb\.org\/(?:structure|3d-view)\/([0-9][a-z0-9]{3})(?=[/?#]|$)/i);
  return match ? [match[1].toUpperCase()] : [];
}))];

function structureIndexLink(label,field,id,cls='button') {
  return link(label,'browse/structures?'+new URLSearchParams({[field]:id}).toString(),cls);
}

function compareStructures(order) {
  const text = value => typeof value==='object' ? value.en || value.zh : value;
  const compare = (a,b) => a && b ? a.localeCompare(b,'en',{numeric:true,sensitivity:'base'}) : a ? -1 : b ? 1 : 0;
  const byTarget=(a,b)=>compare(text(byId[a.target]?.name),text(byId[b.target]?.name));
  const byLigand=(a,b)=>compare(text(a.ligand),text(b.ligand));
  const byPdb=(a,b)=>compare(a.id,b.id);
  const byResolution=(a,b)=>{
    const aRes=parseFloat(a.resolution), bRes=parseFloat(b.resolution);
    if (!Number.isFinite(aRes)) return Number.isFinite(bRes) ? 1 : 0;
    if (!Number.isFinite(bRes)) return -1;
    return order==='resolution-desc' ? bRes-aRes : aRes-bRes;
  };
  return (a,b)=>{
    if (order==='pdb') return byPdb(a,b);
    if (order==='ligand') return byLigand(a,b)||byTarget(a,b)||byPdb(a,b);
    if (order.startsWith('resolution')) return byResolution(a,b)||byTarget(a,b)||byLigand(a,b)||byPdb(a,b);
    return byTarget(a,b)||byLigand(a,b)||byPdb(a,b);
  };
}

function structureLigandCell(s) {
  const displayed=s.ligand || s.modeledLigand || byId[s.molecule]?.name;
  if (!s.molecule) return esc(displayed || '—');
  const record=byId[s.molecule];
  if (s.modeledLigand) return esc(displayed)+'<small>'+link(L('关联分子档案','Related molecule profile'),recordPath(record))+'</small>';
  return link(displayed,recordPath(record));
}

function renderStructureIndex(rows,categories,order) {
  const heading=(title,key)=>{
    if (!key) return '<th scope="col">'+esc(title)+'</th>';
    const active=key===order || (key==='resolution' && order==='resolution-desc');
    const direction=order==='resolution-desc'?'descending':'ascending';
    return '<th scope="col"'+(active?' aria-sort="'+direction+'"':'')+'><button type="button" data-structure-sort="'+key+'">'+
      esc(title)+'<span aria-hidden="true">'+(active?(direction==='descending'?' ↓':' ↑'):' ↕')+'</span></button></th>';
  };
  const headings=[
    [L('靶标','Target'),'target'],[L('结构配体','Structure ligand'),'ligand'],['PDB','pdb'],
    [L('分辨率','Resolution'),'resolution'],[L('实验方法','Method')],[L('构象 / 构建','State / construct')],
    [L('证据层级','Evidence')],[L('关联档案','Related profiles')]
  ];
  return '<div class="scroller structure-scroll" role="region" tabindex="0" aria-label="'+esc(L('结构记录表，可横向滚动','Structure records, horizontally scrollable'))+
    '"><table class="tbl structure-index"><thead><tr>'+headings.map(([title,key])=>heading(title,key)).join('')+'</tr></thead><tbody>'+
    rows.map(s=>'<tr data-pdb="'+esc(s.id)+'"><td>'+(s.target?recLink(s.target):'—')+'</td><td>'+structureLigandCell(s)+'</td><td>'+
      (byId[s.id]?.group==='structures'?recLink(s.id):ext(source(s.id,pdb(s.id).url)))+'</td><td class="structure-resolution">'+
      (Number.isFinite(parseFloat(s.resolution))?esc(s.resolution)+' Å':'—')+'</td><td>'+esc(s.method||'—')+'</td><td>'+
      esc(s.state||'—')+'</td><td><span class="ev-tier ev-'+esc(s.category)+'">'+esc(categories[s.category])+'</span></td><td>'+
      (s.profiles.filter(id=>id!==s.target&&id!==s.molecule).map(id=>recLink(id)).join(' · ')||'—')+'</td></tr>').join('')+'</tbody></table></div>';
}

const workspaceLinks = [
  ['molecules','browse/molecules',L('药物与分子','Drugs & molecules')],
  ['targets','browse/targets',L('靶标','Targets')],
  ['regulation','regulation',L('通路与脑区','Pathways & brain regions')]
];
function workspaceTools(page,key) {
  const items=[
    ['browse/structures',L('结构总览','Structure index'),page==='browse'&&key==='structures'],
    ['evidence/ahi',L('OSA · AHI 终点','OSA · AHI endpoints'),page==='evidence'&&key==='ahi'],
    ['evidence/circadian',L('褪黑素 · 时相证据','Melatonin · phase evidence'),page==='evidence'&&key==='circadian'],
    ['methods',L('数据字典','Data guide'),page==='methods']
  ];
  return items.map(([path,label,current])=>link(label,path,'workspace-tool',current)).join('');
}
function homeModules() {
  const stats=[
    [[records.filter(r=>r.group==='molecules'&&clinicalCandidates[r.id]?.kind!=='combination').length,L('分子','molecules')]],
    [[records.filter(r=>r.group==='targets').length,L('靶标','targets')],[structures.length,L('站内实验结构','indexed structures')]],
    [[systems.length,L('调控系统','systems')],[Object.keys(brainRegions).length,L('脑区','brain regions')]]
  ];
  const quick=[
    [['browse/molecules?phase=approved-fda',L('FDA 获批档案','FDA approval records')]],
    [['browse/structures',L('打开结构表','Open structure index')]],
    [['regulation',L('查看脑区总览','View brain overview')]]
  ];
  return '<section class="workspace-modules" aria-labelledby="workspace-modules-title"><h2 id="workspace-modules-title">'+
    say('浏览数据库','Browse the atlas')+'</h2><div class="catalog-grid">'+
    workspaceLinks.map(([id,path,label],index)=>'<article class="catalog workspace-module"><div class="eyebrow">'+sections[id].number+
      '</div><h3>'+link(label,path)+'</h3>'+paragraph(sections[id].short)+'<div class="workspace-module-stats">'+
      stats[index].map(([n,caption])=>'<span><strong>'+n+'</strong> '+esc(caption)+'</span>').join('')+'</div>'+
      quick[index].map(([url,name])=>link(name,url,'next')).join('')+'</article>').join('')+'</div></section>';
}
function homeExample() {
  const recordsInOrder=[
    ['drug/suv',L('药物档案','Drug profile'),'Suvorexant'],
    ['target/ox2',L('靶标档案','Target profile'),'OX2R'],
    ['target/ox2/structures/4S0V',L('实验结构','Experimental structure'),'4S0V'],
    ['regulation/orexin',L('通路与脑区','Pathway and regions'),L('食欲素系统','Orexin system')]
  ];
  return panel(L('沿同一条证据线浏览','Follow a connected evidence trail'),
    paragraph(L('以苏沃雷生为例，从分子档案进入人 OX2R 靶标，再查看实验复合物及食欲素系统的脑区证据。','Start with suvorexant, open the human OX2R profile, then follow the experimental complex and regional evidence for the orexin system.'))+
    '<ol class="workspace-trail">'+recordsInOrder.map(([path,label,name])=>'<li><span>'+esc(label)+'</span>'+link(name,path)+'</li>').join('')+
    '</ol>','workspace-example');
}

