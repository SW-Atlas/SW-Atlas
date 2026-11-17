const version = '1.0.0';
const structureById = Object.fromEntries(structures.map(s => [s.id,s]));
const activePockets = pockets.filter(p=>structureById[p.pdb]);
const pocketById = Object.fromEntries(activePockets.map(s => [s.id,s]));
for (const s of structures) {
  records.push({
    ...record(s.id,'structures',s.id,s.subtitle,s.method,s.construct,
      [[L('靶标物种','Target species'),s.species || L('人','Human')],[L('分辨率','Resolution'),s.resolution+' Å'],
       [L('结构状态','Conformational state'),s.state],[L('受体作者链','Receptor author chains'),s.chain],
       [L('索引配体','Indexed ligand'),s.code],
       ...(s.modeledLigand?[[L('坐标中的配体','Modeled ligand'),s.modeledLigand]]:[])], [pdb(s.id)],
      [s.target,s.molecule,...activePockets.filter(p => p.pdb===s.id).map(p => p.id)]),
    target:s.target
  });
}
for (const site of activePockets) {
  const molecule = records.find(r => r.id===site.molecule);
  const modeledLigand = structureById[site.pdb].modeledLigand;
  records.push({
    ...record(site.id,'sites',site.id,modeledLigand || molecule.name+' · '+site.code,measuredSite,
      L('根据公开实验坐标计算该配体实例的邻近残基。距离为所用模型中的几何距离。','Residues near this ligand instance are calculated from public experimental coordinates. Distances are geometric measurements in the deposited model.'),
      [[L('配体实例（作者编号）','Ligand instance (author numbering)'),site.instance],
       [L('重原子距离阈值','Heavy-atom distance cutoff'),'≤ 4.0 Å'],
       [L('邻近残基','Nearby residues'),site.contacts.length]],
      [pdb(site.pdb)], [site.pdb,site.target,site.molecule]),
    target:site.target
  });
}
const byId = Object.fromEntries(records.map(r => [r.id,r]));
const app = document.getElementById('app');
const nav = document.getElementById('nav');
const language = document.getElementById('language');
const masthead = document.getElementById('masthead');
const categoryOf = {
  molecules:'molecules', targets:'targets', structures:'targets', sites:'targets',
  pathways:'regulation', circuits:'regulation'
};
let locale = 'zh';
const local = value => value && typeof value==='object' ? value[locale] : value;
const say = (zh,en) => locale==='en' ? en : zh;
const esc = value => String(local(value) ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href = (path,lang=locale) => '#'+(lang==='en'?'en/':'')+path;
const link = (name,path,cls='',current=false) =>
  '<a class="'+cls+'" href="'+esc(href(path))+'"'+(current?' aria-current="page"':'')+'>'+esc(name)+'</a>';
const ext = ({label,url,pmid}) => '<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>'+
  (pmid?' <a class="muted" href="https://pubmed.ncbi.nlm.nih.gov/'+esc(pmid)+'/" target="_blank" rel="noopener noreferrer">[PMID '+esc(pmid)+']</a>':'');
const sourceList = list => '<ul class="sources">'+[...new Map(list.map(ref=>[ref.url,ref])).values()].map(ref=>'<li>'+ext(ref)+'</li>').join('')+'</ul>';
const refline = list => '<p class="refline">'+list.map(ext).join('<span aria-hidden="true"> · </span>')+'</p>';
const identifierLinks = {
  'PubChem CID': v => 'https://pubchem.ncbi.nlm.nih.gov/compound/'+v,
  'CAS': v => 'https://commonchemistry.cas.org/detail?cas_rn='+encodeURIComponent(v),
  'InChIKey': v => 'https://pubchem.ncbi.nlm.nih.gov/#query='+encodeURIComponent(v),
  'KEGG ID': v => 'https://www.kegg.jp/entry/'+v,
  'PharmGKB ID': v => 'https://www.pharmgkb.org/chemical/'+v,
  'ChEBI ID': v => 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId='+v
};
const identifierValue = (key,value) => {
  const k=local(key), v=String(value);
  const fn=identifierLinks[k];
  return fn ? '<a href="'+fn(v)+'" target="_blank" rel="noopener noreferrer">'+esc(v)+' ↗</a>' : esc(v);
};
const chemistryFields = rows => '<dl class="pairs">'+rows.map(([key,value])=>'<dt>'+esc(key)+'</dt><dd>'+identifierValue(key,value)+'</dd>').join('')+'</dl>';
const chemistryLinks = links => links && links.length ?
  '<div class="chem-links">'+links.map(l=>'<a class="pill" href="'+esc(l.url)+'" target="_blank" rel="noopener noreferrer">'+esc(l.label)+' ↗</a>').join('')+'</div>' : '';
const gtoLigandPill = id => {
  const m = (typeof gtoLigandMap !== 'undefined' ? gtoLigandMap[id] : null);
  return m ? '<div class="chem-links"><a class="pill" href="https://www.guidetopharmacology.org/GRAC/LigandDisplayForward?ligandId='+esc(m.ligandId)+'" target="_blank" rel="noopener noreferrer">GtoPdb · '+esc(m.name)+' · ligand '+esc(m.ligandId)+' ↗</a></div>' : '';
};
const gtoRefsFor = id => {
  if (typeof gtoRefs === 'undefined') return [];
  for (const v of Object.values(gtoRefs)) { if (v.mols && v.mols.includes(id)) return v.refs || []; }
  return [];
};
const refYear = r => r.year || ((r.citation && String(r.citation).match(/(\d{4})/)) || [])[1] || 0;
function gtoClinicalPanel(id){
  if (typeof gtoClinical === 'undefined') return '';
  let b = null;
  for (const v of Object.values(gtoClinical)) { if (v.mols && v.mols.includes(id)) { b = v; break; } }
  if (!b || !b.trials || !b.trials.length) return '';
  return panel(say('GtoPdb 临床试验登记','GtoPdb clinical trial registrations'),
    paragraph(say('IUPHAR/BPS GtoPdb 收录的该分子临床试验登记，链接至 ClinicalTrials.gov。','Clinical trial registrations for this molecule as indexed by IUPHAR/BPS GtoPdb, linking to ClinicalTrials.gov.'),'muted')+
    '<div class="activity-table">'+table([say('登记号','Trial ID'),say('标题','Title'),say('类型','Type'),say('来源','Source')],
      b.trials.map(t=>[t.url?'<a href="'+esc(t.url)+'" target="_blank" rel="noopener noreferrer">'+esc(t.nct)+' ↗</a>':esc(t.nct),esc(t.title),esc(t.type),esc(t.source)]))+'</div>'+
    refline([source('IUPHAR/BPS GtoPdb · ligand '+b.ligandId,'https://www.guidetopharmacology.org/GRAC/LigandDisplayForward?tab=clinical&ligandId='+b.ligandId)]),
    '','h3');
}
const keyReferencesPanel = refs => refs && refs.length ?
  '<ol class="key-refs">'+
  refs.map(r=>'<li>'+esc(r.citation)+(r.pmid?' <a class="muted" href="https://pubmed.ncbi.nlm.nih.gov/'+esc(r.pmid)+'/" target="_blank" rel="noopener noreferrer">PMID '+esc(r.pmid)+'</a>':'')+(r.url?' <a class="muted" href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+say('原文','Full text')+' ↗</a>':'')+'</li>').join('')+'</ol>' : '';
const systemFor = id => systems.find(s=>s.pathway===id || s.circuits.includes(id));

function recordPath(r) {
  if (r.group==='molecules') return 'drug/'+r.id;
  if (r.group==='targets') return 'target/'+r.id;
  if (r.target) return 'target/'+r.target+'/'+r.group+'/'+r.id;
  const system = systemFor(r.id);
  return 'regulation/'+system.id+(r.group==='circuits'?'/'+r.id:'');
}
const recLink = (id,cls='') => link(byId[id].name,recordPath(byId[id]),cls);
const targetRefCell = id => {
  const t = byId[id];
  if (!t) {
    const oid = (typeof gtoTargetOid !== 'undefined' ? gtoTargetOid[id] : null);
    return oid ? '<a href="https://www.guidetopharmacology.org/GRAC/ObjectDisplayForward?objectId='+esc(oid)+'" target="_blank" rel="noopener noreferrer">'+esc(id)+' ↗</a>' : esc(id);
  }
  const up = t.fields?.find(([k])=>String(k)==='UniProt')?.[1];
  const full = local(t.subtitle).split(' · ')[0];
  return recLink(id) + '<small class="t-ref">'+esc(full)+'</small>' + (up?'<small class="t-ref t-up">'+esc(up)+'</small>':'');
};
const fields = rows => '<dl class="pairs">'+rows.map(([key,value])=>'<dt>'+esc(key)+'</dt><dd>'+esc(value)+'</dd>').join('')+'</dl>';
const panel = (title,body,cls='',heading='h2') =>
  '<section class="panel '+cls+'"><'+heading+'>'+esc(title)+'</'+heading+'>'+body+'</section>';
const table = (head,rows) => '<div class="scroller"><table class="tbl"><thead><tr>'+head.map(x=>'<th scope="col">'+esc(x)+'</th>').join('')+
  '</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const paragraph = (body,cls='') => '<p class="'+cls+'">'+esc(body)+'</p>';
const pill = (label,kind='') => '<span class="pill '+kind+'">'+esc(label)+'</span>';
const effectText = effect => local(effect.label || effectLabels[effect.direction])+
  (effect.qualifier?' · '+local(effect.qualifier):'');
const effectClass = id => sleepWakeEffects[id]?' effect-'+sleepWakeEffects[id].direction:'';
const effectChip = (direction,label) => '<span class="effect-chip effect-'+direction+'">'+esc(label)+'</span>';
const effectBadge = id => {
  const effect=sleepWakeEffects[id];
  return effect?effectChip(effect.direction,effectText(effect)):'';
};
const effectLegend = (interactive) => '<div class="effect-legend"><span>'+say(interactive?'作用方向 · 点击筛选':'作用方向','Effect direction'+(interactive?' · select to filter':''))+'</span>'+
  (interactive
    ? '<button type="button" class="effect-chip effect-wake" data-catalog-field="direction" data-catalog-value="wake" aria-pressed="false">'+esc(effectLabels.wake)+'</button>'+
      '<button type="button" class="effect-chip effect-sleep" data-catalog-field="direction" data-catalog-value="sleep" aria-pressed="false">'+esc(effectLabels.sleep)+'</button>'
    : effectChip('wake',effectLabels.wake)+effectChip('sleep',effectLabels.sleep))+'</div>';
const related = ids => '<div class="related">'+[...new Set(ids)].map(id=>recLink(id,'button')).join('')+'</div>';
const header = (title,description,crumb='',eyebrow='SW ATLAS') => '<header class="pagehead">'+
  (crumb?'<div class="crumb">'+crumb+'</div>':'<div class="eyebrow">'+esc(eyebrow)+'</div>')+
  '<h1>'+esc(title)+'</h1>'+paragraph(description)+'</header>';
const recordHeader = (r,crumb) => '<header class="pagehead record-head'+effectClass(r.id)+'"><div class="crumb">'+crumb+'</div><div class="title-row"><h1>'+esc(r.name)+'</h1>'+
  pill(r.tag,r.candidate?'candidate':'')+effectBadge(r.id)+'</div><div class="subtitle">'+esc(r.subtitle)+'</div>'+paragraph(r.description)+'</header>';
const tabs = (label,items,active) => '<nav class="tabs" aria-label="'+esc(label)+'">'+items.map(([id,title,path])=>link(title,path,'tab',id===active)).join('')+'</nav>';
const split = (main,sidebar) => '<div class="detail"><div>'+main+'</div><aside>'+sidebar+'</aside></div>';
const sectionPanel = (section,heading='h2') => panel(section.title,fields(section.fields)+refline(section.sources),'',heading);
const targetStructures = id => structures.filter(s=>s.target===id);
const targetSites = id => records.filter(r=>r.group==='sites' && r.target===id);
const moleculeStructures = id => structures.filter(s=>s.molecule===id);
const groupLabel = r => sections[r.group]?.title || ({
  structures:L('实验结构','Experimental structure'), sites:L('作用位点','Binding site'),
  pathways:L('分子通路','Molecular pathway'), circuits:L('神经环路','Neural circuit')
})[r.group];

function viewer(pdbId,siteId,closeUp=false) {
  return '<div class="viewer" data-model="'+pdbId+'" data-site="'+siteId+'"'+(closeUp?' data-close-up="true"':'')+'><canvas tabindex="0" aria-label="'+
    esc(say('结构坐标简图，拖动或使用方向键旋转','Structure coordinate preview. Drag or use the arrow keys to rotate.'))+
    '"></canvas><div class="viewbar"><button type="button" data-view="focus" aria-pressed="'+closeUp+'">'+say('切换位点视角','Toggle site view')+
    '</button><button type="button" data-view="reset">'+say('复位','Reset')+'</button><span>'+say('受体 Cα 轨迹','Receptor Cα trace')+
    ' · <b>'+say('配体重原子','Ligand heavy atoms')+'</b></span></div></div>';
}
const structureLinks = id => '<div class="actions structure-links">'+
  ext(source(L('RCSB Mol* 全原子视图','RCSB Mol* full-atom view'),'https://www.rcsb.org/3d-view/'+id))+
  ext(source(L('原始 mmCIF 坐标','Original mmCIF coordinates'),'https://files.rcsb.org/download/'+id+'.cif'))+
  ext(source(L('结构验证报告','Structure validation report'),'https://files.rcsb.org/validation/view/'+id.toLowerCase()+'_full_validation.pdf'))+'</div>';

function card(r,includeType=false) {
  const isTarget = r.group==='targets';
  const depiction = moleculeProfiles[r.id]?.chemistry;
  const clinical = clinicalCandidates[r.id];
  const details = clinical ? clinicalCardDetails(clinical) : isTarget ?
    '<div class="card-meta"><span>'+targetStructures(r.id).length+' '+say('个站内结构','indexed structures')+'</span><span>'+
    targetSites(r.id).filter(s=>!s.candidate).length+' '+say('个位点注释','site annotations')+'</span></div>' : '';
  return '<article class="card'+effectClass(r.id)+'">'+(includeType?'<div class="eyebrow">'+esc(groupLabel(r))+'</div>':'')+
    '<div class="card-labels">'+(r.candidate?'':pill(r.tag))+effectBadge(r.id)+(isTarget&&targetAssemblies[r.id]?pill(targetAssemblyLabels[targetAssemblies[r.id]]):'')+'</div><h3>'+recLink(r.id)+'</h3><div class="subtitle">'+esc(r.subtitle)+'</div>'+
    (depiction?'<img class="card-chem" loading="lazy" src="'+esc(depiction.depiction)+'" alt="'+esc(say('二维化学结构','2D chemical structure')+' · '+r.name)+'">':'')+
    paragraph(r.description)+details+link(L('查看记录 →','View record →'),recordPath(r),'next')+'</article>';
}

function home() {
  app.innerHTML = '<section class="hero"><div class="hero-copy"><div class="eyebrow">'+say('SW ATLAS / 课题 4','SW ATLAS / PROJECT 4')+
    '</div><h1>'+say('睡眠–觉醒<br>靶标结构数据库','Sleep–wake<br>target structure atlas')+'</h1>'+
    paragraph(L('查询药物与靶标，比较实验结构和作用位点，沿证据追溯睡眠–觉醒调控。','Explore drugs and targets, compare structures and binding sites, and trace evidence across sleep–wake systems.'))+
    '<div class="actions">'+link(L('浏览结构总览','Browse structures'),'browse/structures','primary')+
    link(L('按研究问题导航','Browse by research question'),'research','button')+
    '</div></div><div class="hero-visual">'+viewer('4S0V','4S0V-A2001')+
    '<div class="hero-caption">'+link(L('4S0V · 人 OX2R–Suvorexant · 2.50 Å →','4S0V · Human OX2R–Suvorexant · 2.50 Å →'),recordPath(byId['4S0V']))+
    '</div></div></section>'+
    '<form class="searchbox" id="search"><input name="query" type="search" aria-label="'+say('全库检索','Search all records')+
    '" placeholder="'+say('检索分子、靶标、PDB 或脑区，例如 7XRR、OX2R、蓝斑','Search molecules, targets, PDB IDs or brain regions')+
    '"><button class="primary">'+say('检索','Search')+'</button></form>'+
    homeModules()+homeExample();
  document.getElementById('search').addEventListener('submit',e=>{
    e.preventDefault();
    location.hash=href('search/'+encodeURIComponent(e.currentTarget.elements.query.value.trim()));
  });
}

function searchable(r) {
  const assayTerms = activities.filter(a=>a.molecule===r.id||a.target===r.id)
    .flatMap(a=>[a.action,a.method,a.system,a.result]);
  const relationIds = [...r.links];
  if (r.group==='targets') relationIds.push(...targetStructures(r.id).map(s=>s.id),...targetSites(r.id).map(s=>s.id));
  const relatedTerms = relationIds.flatMap(id=>[id,byId[id].name,byId[id].subtitle]);
  const effect=sleepWakeEffects[r.id];
  const development=clinicalCandidates[r.id];
  const clinicalTerms=development?[development.aliases,development.condition,development.externalRegistryId,
    clinicalPhases[development.phase],clinicalStates[development.status],
    ...development.studies.flatMap(s=>[s.id,s.sponsor,...s.conditions])]:[];
  const registryTerms = r.sources.flatMap(({url}) =>
    url.match(/^https:\/\/(?:www\.)?clinicaltrials\.gov\/(?:study\/|ct2\/show\/)(NCT\d{8})(?=[/?#]|$)/i)?.slice(1) || []);
  const terms = [...clinicalTerms,...registryTerms,r.id,r.name,r.subtitle,r.tag,r.description,groupLabel(r),...r.fields.flat(),
    ...(effect?[effectLabels[effect.direction],effect.label,effect.qualifier]:[]),
    ...(r.structureReferences?.flatMap(s=>[s.id,s.ligand,s.state]) || []),
    ...(moleculeProfiles[r.id]?.chemistry?.fields.flat() || []),...assayTerms,...relatedTerms];
  if (pocketById[r.id]) terms.push(...pocketById[r.id].contacts.map(([,num,name])=>name+num));
  return terms.map(v=>v && typeof v==='object' ? v.zh+' '+v.en : v).join(' ').normalize('NFKC').toLowerCase();
}
const searchIndex = Object.fromEntries(records.map(r=>[r.id,searchable(r)]));

function activityPanel(id,showTarget,heading='h2') {
  const matching = activities.filter(a=>a.molecule===id || a.target===id);
  if (!matching.length) return '';
  const keyOf = a => showTarget ? a.target : a.molecule;
  const labelOf = a => {
    const t = byId[keyOf(a)];
    return (t ? String(local(t.name)) : String(keyOf(a))).toLowerCase();
  };
  matching.sort((a,b)=>{ const x=labelOf(a), y=labelOf(b); return x<y ? -1 : x>y ? 1 : 0; });
  return panel(L('靶标药理与实验结果','Target pharmacology and assay results'),
    paragraph(L('结合实验与功能实验分列。每个数值对应其指标、实验体系及来源。','Binding and functional assays are listed separately. Each result retains its metric, experimental system and source.'),'muted')+
    '<div class="activity-table">'+table([showTarget?L('靶标','Target'):L('分子','Molecule'),L('作用','Action'),L('实验','Assay'),L('结果','Result'),L('实验体系','Experimental system'),L('来源','Source')],
      matching.map(a=>[(showTarget?targetRefCell(a.target):recLink(a.molecule)),esc(a.action),esc(a.method),esc(a.result || '—'),esc(a.system),a.sources.map(ext).join('<br>')]))+'</div>','',heading);
}

function structureTable(list,includeTarget=false) {
  return table([L('结构','Structure'),...(includeTarget?[L('靶标','Target')]:[]),L('配体与状态','Ligand and state'),L('方法','Method'),L('分辨率','Resolution')],
    list.map(s=>[recLink(s.id),...(includeTarget?[recLink(s.target)]:[]),
      (s.modeledLigand?link(s.modeledLigand,recordPath(byId[s.molecule])):recLink(s.molecule))+
        '<br><span class="muted">'+esc(s.state)+'</span>',esc(s.method),esc(s.resolution)+' Å']));
}
function structureEvidenceTable(list){
  return '<div class="se-struct-table">'+table([L('结构','Structure'),L('复合物','Complex'),L('靶蛋白','Target protein'),L('方法','Method'),L('分辨率','Resolution')],
    list.map(s=>[recLink(s.id),esc(s.subtitle||'—'),targetRefCell(s.target),esc(s.method),esc(s.resolution)+' Å']))+'</div>';
}

function targetReferencePanel(references) {
  return panel(L('同靶标的结构参照','Structural references for this target'),
    paragraph(L('以下结构的配体在表中单独标明。','The ligand modeled in each structure is specified below.'),'muted')+
    table(['PDB',L('结构配体','Structure ligand'),L('构象或构建','State or construct'),L('方法','Method'),L('分辨率','Resolution')],
      references.map(s=>[ext(pdb(s.id)),esc(s.ligand),esc(s.state),esc(s.method),esc(s.resolution)+' Å'])));
}

function profileSources(r,p) {
  return [...r.sources,...(p.chemistry?.sources || []),...(p.regulatory?.sources || []),...(p.pk?.sources || []),
    ...(p.preclinical || []).flatMap(s=>s.sources),...(p.clinical || []).flatMap(s=>s.sources),...(p.safety?.sources || []),
    ...(p.structureEvidence?.sources || []),
    ...activities.filter(a=>a.molecule===r.id).flatMap(a=>a.sources),
    ...(sleepWakeEffects[r.id]?.ref?[sleepWakeEffects[r.id].ref]:[])];
}
function drug(r,section) {
  const p = moleculeProfiles[r.id] || {};
  const root = 'drug/'+r.id;
  const profilePanel = (title,body) => panel(title,body,'','h3');
  const effect=sleepWakeEffects[r.id];
  const development=p.development;
  const dossier=development && clinicalDossier(development);
  const chemistry=p.chemistry ? profilePanel(L('分子标识与二维结构','Molecular identifiers and 2D structure'),
    '<div class="chem-grid"><figure class="chem-figure"><a class="chem-enlarge" href="'+esc(p.chemistry.depiction)+'" target="_blank" rel="noopener" aria-label="'+esc(L('打开二维结构原图','Open full-size 2D structure'))+'"><img src="'+esc(p.chemistry.depiction)+'" alt="'+esc(say('二维化学结构','2D chemical structure')+' · '+r.name)+
    '"></a><figcaption>'+esc(L('点击图像查看原图','Select the image to open the original'))+' · '+ext(p.chemistry.depictionSource)+'</figcaption></figure>'+
    '<div>'+chemistryFields([...r.fields,...p.chemistry.fields])+chemistryLinks(p.chemistry.links)+gtoLigandPill(r.id)+refline(p.chemistry.sources)+'</div></div>') :
    profilePanel(L('分子标识','Molecular identifiers'),fields(r.fields)+gtoLigandPill(r.id)+
      (development?(development.identityFields?.length?'':paragraph(L('当前档案提供已核名称、别名或开发代号。二维结构及立体化学按独立的结构来源补录。',
        'This profile indexes verified names, aliases or development codes. Chemical depictions and stereochemistry are curated from separate structural sources.'),'muted'))+
        (development.identity?refline([development.identity]):''):refline(r.sources)));
  const candidatePanels=chapter=>development?clinicalEvidencePanels(development,chapter):'';
  const overview=(dossier?profilePanel(L('临床开发概况','Clinical development overview'),dossier.info):'')+chemistry+candidatePanels('overview')+(p.regulatory?sectionPanel(p.regulatory,'h3'):'')+
    (effect?.context?profilePanel(L('睡眠–觉醒效应','Sleep–wake effect'),paragraph(effect.context)+refline([effect.ref])):'');
  const targetIds = r.links.filter(id=>byId[id].group==='targets');
  const pathways = r.links.filter(id=>byId[id].group==='pathways');
  const complexes = moleculeStructures(r.id);
  const clinicalSystem=development?.system && systems.find(s=>s.id===development.system);
  const pharmacology=development?
    (targetIds.length || clinicalSystem?profilePanel(L('研究靶标与通路背景','Research targets and pathway context'),related(targetIds)+
      paragraph(L('靶标链接以本档案所引药理或申办方资料为依据。临床终点的变化需要按试验解释。',
        'Target links follow the cited pharmacology or sponsor sources. Clinical endpoints require study-specific interpretation.'),'muted')+
      (clinicalSystem?link(clinicalSystem.title,'regulation/'+clinicalSystem.id,'button'):'')+
      refline(development.references)):''):
    activityPanel(r.id,true,'h3');
  const preclinical=(p.pk?sectionPanel(p.pk,'h3'):'')+(p.preclinical?profilePanel(L('临床前研究','Preclinical studies'),p.preclinical.map(s=>
    '<article class="evidence"><h4>'+esc(s.species)+'</h4>'+fields([[L('研究设计','Study design'),s.design],[L('结果','Result'),s.result]])+
    refline(s.sources)+'</article>').join('')):'');
  const clinical=dossier?profilePanel(L('临床试验登记','Clinical trial registrations'),dossier.studies)+
    (evidenceTables.ahi.rows.some(row=>row.topic===r.name)?
      '<div class="actions">'+link(L('查看 AHI 终点证据表','Browse AHI evidence table'),
        'evidence/ahi?topic='+encodeURIComponent(r.name),'button')+'</div>':''):
    p.clinical?profilePanel(L('临床研究与终点','Clinical studies and endpoints'),
    (p.clinicalNote?paragraph(p.clinicalNote,'muted'):'')+p.clinical.map(s=>'<article class="evidence"><h4>'+esc(s.title)+'</h4>'+
    paragraph(s.summary)+table([L('终点','Endpoint'),L('时点','Time point'),L('研究剂量','Study dose'),s.effectHeading || L('相对安慰剂的效应','Effect vs placebo'),L('统计信息','Statistics')],s.rows.map(row=>row.map(esc)))+
    paragraph(s.note,'muted')+refline(s.sources)+'</article>').join('')):'';
  const safety=p.safety?profilePanel(L('说明书摘要','Label summary'),fields(p.safety.fields)+refline(p.safety.sources)):'';
  const chapters=[
    ['overview',L('分子与临床信息','Molecular & clinical information'),overview],
    ['pharmacology',L('靶标与药理','Pharmacological actions'),candidatePanels('pharmacology')+pharmacology],
    ['clinical',L('临床证据','Clinical evidence'),candidatePanels('clinical')+clinical+gtoClinicalPanel(r.id)],
    ['interactions',L('结构证据','Structural insight'),candidatePanels('structure')+
      (r.id==='suv'?profilePanel(L('收录的 Suvorexant 复合物','Indexed suvorexant complexes'),structureTable(complexes,false)+paragraph(L('四套复合物均可点开查看三维结构与坐标位点；下方口袋图详列 4S0V/4ZJ8 的残基接触。','All four complexes open to their 3D structure and coordinate sites; the pocket explorer below details residue contacts for 4S0V/4ZJ8.'),'muted'))+renderSuvorexantPocket():doraPocketData[r.id]?renderDoraPocket(r.id):
       r.id==='retatrutide'?renderStructureEvidence(complexes,p.structureEvidence)+renderRetatrutideComparison():renderStructureEvidence(complexes,p.structureEvidence))],
    ['preclinical',(p.preclinical&&p.preclinical.length?L('临床前研究','Preclinical evidence'):L('药代动力学','Pharmacokinetics')),candidatePanels('preclinical')+preclinical],
    ['safety',L('安全性与用法用量','Safety & dosing'),candidatePanels('safety')+safety],
    ['sources',L('参考来源','References'),profilePanel(L('代表文献','Key references'),keyReferencesPanel([...(p.keyReferences||[]),...gtoRefsFor(r.id)].sort((a,b)=>refYear(a)-refYear(b))))+profilePanel(L('来源与可追溯性','Sources and provenance'),sourceList(profileSources(r,p)))]
  ].filter(([, ,body])=>body);
  const pathFor = id => id==='overview'?root:root+'/'+id;
  const tocSlot=document.getElementById('profile-toc');
  if (tocSlot) tocSlot.innerHTML=
    '<a class="toc-compound" href="'+href(root)+'">'+esc(r.name)+'</a>'+
    '<span class="sidebar-toc-title">'+say('本页导航','On this page')+'</span><ol>'+
    chapters.map(([id,title],i)=>'<li><a id="profile-link-'+id+'" href="'+href(pathFor(id))+'"><span aria-hidden="true">'+String(i+1).padStart(2,'0')+
      '</span>'+esc(title)+'</a></li>').join('')+
    '</ol><div class="profile-mobile-nav" id="profile-mobile-nav"><label for="profile-jump">'+say('跳转到','Jump to')+'</label><select id="profile-jump">'+
    chapters.map(([id,title])=>'<option value="'+id+'">'+esc(title)+'</option>').join('')+'</select></div>';
  app.innerHTML=recordHeader(r,link(sections.molecules.title,'browse/molecules'))+
    '<div class="profile-body">'+chapters.map(([id,title,body],i)=>'<section class="profile-section" aria-labelledby="profile-heading-'+id+'" id="profile-section-'+id+
    '"><header class="profile-section-title"><span aria-hidden="true">'+String(i+1).padStart(2,'0')+'</span>'+
    '<h2 id="profile-heading-'+id+'" tabindex="-1">'+esc(title)+'</h2></header>'+body+'</section>').join('')+'</div>';
  mountStructureEvidence(document.getElementById('structure-evidence'));
  mountMolViewers(document.getElementById('app'));
  if((r.id==='suv'||doraPocketData[r.id]) && typeof document.createElement==='function')mountSuvorexantPocket(document.querySelector('[data-sp-root]'));
  return mountDrugProfile(r.id,chapters,pathFor,section);
}

function mountDrugProfile(id,chapters,pathFor,initial) {
  const dropdown=document.getElementById('profile-jump');
  const mobileNav=document.getElementById('profile-mobile-nav');
  const parts=chapters.map(([section])=>({
    section, link:document.getElementById('profile-link-'+section),
    element:document.getElementById('profile-section-'+section)
  }));
  let activeSection;
  let jumpPosition;
  let frame;
  function setCurrent(section) {
    if (activeSection===section) return;
    activeSection=section;
    for (const part of parts) {
      if (part.section===section) part.link.setAttribute('aria-current','location');
      else part.link.removeAttribute('aria-current');
    }
    dropdown.value=section;
    updateLanguageLink(pathFor(section));
  }
  function jump(section,focus=true) {
    const part=parts.find(part=>part.section===section) || parts[0];
    setCurrent(part.section);
    if (part===parts[0]) window.scrollTo(0,0);
    else {
      part.element.scrollIntoView({block:'start'});
      if (focus) document.getElementById('profile-heading-'+part.section).focus({preventScroll:true});
    }
    jumpPosition=window.scrollY;
  }
  function syncCurrent() {
    frame=undefined;
    // Keep a selected heading active when the end of the page limits scrolling.
    if (jumpPosition!==undefined && Math.abs(window.scrollY-jumpPosition)<1) return;
    jumpPosition=undefined;
    const offset=masthead.offsetHeight+mobileNav.offsetHeight+28;
    let part=parts[0];
    for (const candidate of parts) {
      if (candidate.element.getBoundingClientRect().top <= offset) part=candidate;
    }
    const pageHeight=document.documentElement.scrollHeight;
    if (window.scrollY > 0 && window.scrollY+window.innerHeight >= pageHeight-4) part=parts.at(-1);
    setCurrent(part.section);
  }
  function queueSync() {
    if (frame===undefined) frame=requestAnimationFrame(syncCurrent);
  }
  function updateLayout() {
    app.style.setProperty('--profile-masthead',masthead.offsetHeight+'px');
    app.style.setProperty('--profile-dock',mobileNav.offsetHeight+'px');
  }
  function resize() {
    updateLayout();
    queueSync();
  }
  for (const part of parts) {
    part.link.addEventListener('click',e=>{
      if (location.hash===href(pathFor(part.section)) && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        jump(part.section);
      }
    });
  }
  dropdown.addEventListener('change',()=>{
    const next=href(pathFor(dropdown.value));
    if (location.hash===next) jump(dropdown.value);
    else location.hash=next;
  });
  updateLayout();
  jump(initial,false);
  window.addEventListener('scroll',queueSync,{passive:true});
  window.addEventListener('resize',resize);
  return {id,locale,jump,dispose() {
    window.removeEventListener('scroll',queueSync);
    window.removeEventListener('resize',resize);
    if (frame!==undefined) cancelAnimationFrame(frame);
  }};
}

function siteTable(list) {
  return table([L('位点记录','Site record'),L('结构与配体','Structure and ligand'),L('配体实例','Ligand instance'),L('邻近残基','Nearby residues')],
    list.map(r=>{
      const s=pocketById[r.id];
      return [recLink(r.id),recLink(s.pdb)+' · '+recLink(s.molecule),esc(s.instance),s.contacts.length];
    }));
}
function targetOverview(r,complexes,observed,candidates) {
  const first = complexes[0];
  const site = activePockets.find(p=>p.pdb===first?.id);
  return '<div class="target-facts">'+[
    [complexes.length,L('实验结构','Experimental structures'),'structures'],
    [observed.length,L('坐标位点注释','Coordinate-based annotations'),'sites']
  ].map(([count,label,tab])=>'<a class="metric" href="'+href('target/'+r.id+'/'+tab)+'"><strong>'+count+'</strong>'+esc(label)+'</a>').join('')+'</div>'+
    (site?panel(L('代表性复合物','Representative complex'),viewer(first.id,site.id)+
      '<div class="actions structure-links">'+recLink(first.id,'button')+'<span>'+esc(first.subtitle)+' · '+esc(first.resolution)+' Å</span></div>'):'')+
    gtoTargetPanel(r)+
    activityPanel(r.id,false);
}

const gtoTypeLabel = t => ({
  gpcr: L('G 蛋白偶联受体','G protein-coupled receptor'),
  enzyme: L('酶','Enzyme'),
  transporter: L('转运体','Transporter'),
  vgic: L('电压门控离子通道','Voltage-gated ion channel'),
  lgic: L('配体门控离子通道','Ligand-gated ion channel'),
  kinase: L('激酶','Kinase')
})[t] || t;

function gtoTargetPanel(r) {
  const g = (typeof gtoTargets !== 'undefined') ? gtoTargets[r.id] : null;
  if (!g) return '';
  const gtoSrc = source('IUPHAR/BPS GtoPdb · ' + g.name,
    'https://www.guidetopharmacology.org/GRAC/ObjectDisplayForward?objectId=' + g.gtid);
  const rows = [[L('受体家族','Receptor family'), g.family || '—']];
  if (g.type) rows.push([L('分类','Class'), gtoTypeLabel(g.type)]);
  if (g.geneSymbol) rows.push([L('基因','Gene'), g.geneSymbol + (g.geneName ? ' · ' + g.geneName : '')]);
  if (g.endogenous && g.endogenous.length) rows.push([L('内源配体','Endogenous ligands'), g.endogenous.join(' · ')]);
  const ligandTable = g.ligands && g.ligands.length
    ? '<div class="activity-table">'+table([L('配体','Ligand'), L('作用','Action'), L('亲和力','Affinity')],
      g.ligands.map(l => [esc(l.name), esc(l.action || '—'), esc(l.affinity || '—')]))+'</div>'
    : '';
  return panel(L('GtoPdb 靶标背景','GtoPdb target background'),
    fields(rows) + ligandTable + refline([gtoSrc]));
}
function targetStructure(r) {
  const list=records.filter(s=>s.group==='sites' && pocketById[s.id]?.pdb===r.id);
  const preview=list.length ? viewer(r.id,list[0].id) :
    paragraph(L('站内位点注释待补。可在 PDB 查看原始结构坐标。','Site annotations are pending. Deposited coordinates are available at the PDB.'),'muted');
  const s=structureById[r.id];
  const jumps='<div class="actions record-shortcuts">'+recLink(s.target,'button')+
    link(L('关联分子档案','Related molecule profile'),recordPath(byId[s.molecule]),'button')+
    structureIndexLink(L('查看同靶标结构总览','Compare structures for this target'),'target',s.target)+'</div>';
  const main=jumps+panel(L('结构坐标','Structure coordinates'),preview+structureLinks(r.id))+
    (list.length ? panel(L('该结构的配体位点','Ligand sites in this structure'),siteTable(list)) : '');
  return [main,panel(L('结构信息','Structure details'),fields(r.fields)+refline(r.sources))];
}
function targetSite(r) {
  const site=pocketById[r.id];
  if (!site) return [
    panel(L('候选区域与验证计划','Candidate region and validation plan'),fields(r.fields)+refline(r.sources)),
    panel(L('参照结构','Reference structure'),related(r.links.filter(id=>byId[id].group==='structures')))
  ];
  const main=panel(L('位点坐标简图','Site coordinate preview'),viewer(site.pdb,site.id)+structureLinks(site.pdb))+
    panel(L('配体邻近残基','Residues near the ligand'),
      paragraph(L('按模型中最短重原子距离排列，采用 PDB 作者链和编号。几何邻近与结合贡献分别记录。','Rows are sorted by minimum heavy-atom distance and use PDB author chain and residue numbers. Geometric proximity and binding contribution are recorded separately.'),'muted')+
      table([L('链','Chain'),L('作者编号','Author residue no.'),L('残基','Residue'),L('最短距离（Å）','Minimum distance (Å)'),L('受体原子','Receptor atom'),L('配体原子','Ligand atom')],
        site.contacts.map(row=>row.map(esc))));
  return [main,panel(L('位点信息','Site details'),fields(r.fields)+refline(r.sources))+
    panel(L('对应结构与配体','Structure and ligand'),related([site.pdb,site.molecule]))];
}

function targetComparison() {
  const a = pocketById['4S0V-A2001'];
  const b = pocketById['7XRR-A1001'];
  const residue = r => r[1]+r[2];
  const aMap = new Map(a.contacts.map(r=>[residue(r),r[3]]));
  const bMap = new Map(b.contacts.map(r=>[residue(r),r[3]]));
  const keys = [...new Set([...aMap.keys(),...bMap.keys()])].sort((x,y)=>parseInt(x,10)-parseInt(y,10));
  const shared = keys.filter(k=>aMap.has(k)&&bMap.has(k));
  const label = k => k.replace(/^(.*)([A-Z]{3})$/,(match,num,code)=>code[0]+code.slice(1).toLowerCase()+num);
  const sensitivity = ['3.5','4.0','4.5'].map(cut=>{
    const x=a.thresholdResidues[cut], y=b.thresholdResidues[cut];
    return [cut,x.length,y.length,x.filter(r=>y.includes(r)).length];
  });
  const priority = a.thresholdResidues['3.5'].filter(r=>b.thresholdResidues['3.5'].includes(r)).map(label).join(', ');
  return '<div class="target-facts">'+[
    [shared.length,L('共享邻近残基','Shared nearby residues')],
    [a.contacts.length-shared.length,L('仅 4S0V 达阈值','Within cutoff only in 4S0V')],
    [b.contacts.length-shared.length,L('仅 7XRR 达阈值','Within cutoff only in 7XRR')]
  ].map(([count,label])=>'<div class="metric"><strong>'+count+'</strong>'+esc(label)+'</div>').join('')+'</div>'+
    panel(L('OX2R 拮抗剂位点比较','OX2R antagonist site comparison'),
      paragraph(L('两套人 OX2R 结构均取作者链 A，以 4.0 Å 重原子距离为统一阈值。残基按编号与氨基酸匹配。“—”表示该模型中该残基未列入阈值内。','Both human OX2R structures use author chain A and a 4.0 Å heavy-atom cutoff. Residues are matched by number and amino acid. A dash indicates that the residue did not enter the set for that model.'),'muted')+
      table([L('残基','Residue'),'4S0V · Suvorexant (Å)','7XRR · Lemborexant (Å)',L('几何归类','Geometric classification')],
        keys.map(k=>[label(k),aMap.get(k)?.toFixed(2)??'—',bMap.get(k)?.toFixed(2)??'—',
          say(shared.includes(k)?'共享':'单模型达阈值',shared.includes(k)?'Shared':'Within cutoff in one model')]))+
      '<p class="related">'+recLink(a.id,'button')+recLink(b.id,'button')+'</p>')+
    panel(L('距离阈值敏感性','Sensitivity to the distance cutoff'),table([L('阈值（Å）','Cutoff (Å)'),'4S0V','7XRR',L('共享','Shared')],sensitivity))+
    panel(L('实验设计参考','Experimental follow-up'),
      '<ol class="steps">'+[
        L('优先复核 3.5 Å 下仍共享的残基 '+priority+'。对仅在一个模型中达到阈值的残基，核对局部密度、侧链完整性和构建差异。',
          'Review residues shared at 3.5 Å first: '+priority+'. For residues within the cutoff in only one model, check local density, side-chain completeness and construct differences.'),
        L('在统一实验条件下测量两种拮抗剂对突变体的结合或拮抗，同时检查受体表面表达和内源性激动剂响应。',
          'Measure binding or antagonism for both compounds in the mutants under matched conditions. Check surface expression and responses to the endogenous agonist in parallel.'),
        L('将构建、突变、测量方法、重复数和结果回填到相应的配体–位点证据。','Record constructs, mutations, methods, replicates and results against each ligand–site relationship.')
      ].map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol>'+refline([pdb(a.pdb),pdb(b.pdb),uniprot('O43614')]));
}

function target(r,tab,childId) {
  const root='target/'+r.id;
  const complexes=targetStructures(r.id);
  const sites=targetSites(r.id);
  const observed=sites.filter(s=>!s.candidate);
  const pathwayIds=r.links.filter(id=>byId[id].group==='pathways');
  const summary=panel(L('靶标标识','Target identifiers'),fields(r.fields)+refline(r.sources))+
    panel(L('关联分子','Associated molecules'),related([
      ...r.links.filter(id=>byId[id].group==='molecules'),
      ...activities.filter(a=>a.target===r.id).map(a=>a.molecule)
    ]))+
    (pathwayIds.length?panel(L('调控系统','Regulation system'),related(pathwayIds)):'');
  if (childId) {
    const child=byId[childId];
    if (child && child.target===r.id && (child.group==='structures'||child.group==='sites')) {
      const [main,supplement]=child.group==='sites' ? targetSite(child) : targetStructure(child);
      app.innerHTML=recordHeader(r,link(L('靶标总览','Target overview'),'browse/targets')+' · '+link(r.name,root)+' / '+esc(child.name))+
        split(main,supplement+summary);
      return;
    }
  }
  let structuresBody='';
  if (complexes.length) structuresBody+=panel(L('该靶标的实验结构','Experimental structures for this target'),structureTable(complexes));
  if (r.structureReferences?.length) structuresBody+=targetReferencePanel(r.structureReferences);
  if (!structuresBody) structuresBody=panel(L('该靶标的实验结构','Experimental structures for this target'),
    paragraph(L('结构记录待收录。','Structure records are pending curation.'),'empty'));
  if (complexes.length || r.structureReferences?.length ||
      Object.values(structureGallery.entries).some(s=>s.target===r.id && s.category==='reference')) {
    structuresBody+='<div class="actions">'+link(L('在结构总览中筛选该靶标','Filter the structure index to this target'),
      'browse/structures?target='+encodeURIComponent(r.id),'button')+'</div>';
  }
  const sitesBody=panel(L('实验坐标注释','Experimental-coordinate annotations'),observed.length?
    paragraph(L('每条记录对应一个 PDB 配体实例。打开记录可查看残基、距离和坐标。','Each record corresponds to one PDB ligand instance. Open it for residue, distance and coordinate details.'),'muted')+siteTable(observed):
    paragraph(L('坐标位点待收录。','Coordinate-based sites are pending curation.'),'empty'));
  let overviewBody=summary+targetOverview(r,complexes,observed,[]);
  const clinicalLinks=Object.values(clinicalCandidates).filter(d=>d.targets.includes(r.id)).map(d=>d.id);
  if (clinicalLinks.length) overviewBody+=panel(L('关联临床单方','Linked clinical single substances'),related(clinicalLinks)+
    paragraph(L('各分子的研究适应证、试验阶段和状态见对应档案。','Each candidate profile lists its research indication, trial phase and status.'),'muted'));
  const chapters=[
    ['overview',L('靶标概况','Target overview'),overviewBody],
    ['structures',L('实验结构','Experimental structures'),structuresBody],
    ['sites',L('作用位点','Binding sites'),sitesBody],
    ...(r.id==='ox2'?[['compare',L('位点比较','Site comparison'),targetComparison()]]:[])
  ];
  const pathFor=id=>id==='overview'?root:root+'/'+id;
  const tocSlot=document.getElementById('profile-toc');
  if (tocSlot) tocSlot.innerHTML=
    '<a class="toc-compound" href="'+href(root)+'">'+esc(r.name)+'</a>'+
    '<span class="sidebar-toc-title">'+say('本页导航','On this page')+'</span><ol>'+
    chapters.map(([id,title],i)=>'<li><a id="profile-link-'+id+'" href="'+href(pathFor(id))+'"><span aria-hidden="true">'+String(i+1).padStart(2,'0')+
    '</span>'+esc(title)+'</a></li>').join('')+
    '</ol><div class="profile-mobile-nav" id="profile-mobile-nav"><label for="profile-jump">'+say('跳转到','Jump to')+'</label><select id="profile-jump">'+
    chapters.map(([id,title])=>'<option value="'+id+'">'+esc(title)+'</option>').join('')+'</select></div>';
  app.innerHTML=recordHeader(r,link(sections.targets.title,'browse/targets')+' · '+structureIndexLink(L('结构总览','Structure index'),'target',r.id,''))+
    '<div class="profile-body">'+chapters.map(([id,title,body],i)=>'<section class="profile-section" aria-labelledby="profile-heading-'+id+'" id="profile-section-'+id+
    '"><header class="profile-section-title"><span aria-hidden="true">'+String(i+1).padStart(2,'0')+'</span>'+
    '<h2 id="profile-heading-'+id+'" tabindex="-1">'+esc(title)+'</h2></header>'+body+'</section>').join('')+'</div>';
  return mountDrugProfile(r.id,chapters,pathFor,tab);
}

function regulation(key,selected) {
  const system = systems.find(s=>s.id===key) || systems[0];
  const pathway = byId[system.pathway];
  const evidence = system.circuits.map(id=>byId[id]);
  const linkSection = (title,group) => {
    const ids=[...new Set([...pathway.links.filter(id=>byId[id].group===group),
      ...records.filter(r=>r.group===group && r.links.includes(pathway.id)).map(r=>r.id)])];
    if (!ids.length) return '';
    const links=group==='molecules' ? '<div class="related">'+ids.map(id=>{
      const effect=sleepWakeEffects[id];
      const name=local(byId[id].name);
      return link(effect?name+' · '+effectText(effect):name,recordPath(byId[id]),'button'+effectClass(id));
    }).join('')+'</div>' : related(ids);
    return '<h4>'+esc(title)+'</h4>'+links;
  };
  const targets=records.filter(r=>r.group==='targets' &&
    (pathway.links.includes(r.id) || r.links.includes(pathway.id)));
  const structuralTargets=targets.filter(r=>{
    const coverage=targetCoverage(r);
    return coverage.indexed || coverage.reference;
  });
  const structureShortcuts=structuralTargets.length?'<div class="actions record-shortcuts">'+
    structuralTargets.map(r=>structureIndexLink(say('结构表：','Structure index: ')+local(r.name),'target',r.id)).join('')+'</div>':'';
  const pathwayEffect=sleepWakeEffects[pathway.id];
  const pathwaySources=pathwayEffect?[...pathway.sources,pathwayEffect.ref]:pathway.sources;
  const molecular=panel(L('分子通路','Molecular pathway'),
    '<article class="evidence"><div class="signal-row"><span class="signal">'+esc(pathway.subtitle)+'</span>'+effectBadge(pathway.id)+'</div><h3>'+esc(pathway.name)+'</h3>'+
    paragraph(pathway.description)+fields(pathway.fields)+
    linkSection(L('关联靶标','Associated targets'),'targets')+linkSection(L('关联分子','Associated molecules'),'molecules')+
    linkSection(L('靶标页中的结构','Structures in target profiles'),'structures')+refline(pathwaySources)+'</article>','reg-panel');
  const circuits=panel(L('神经环路与区域干预','Neural circuits and regional perturbations'),
    evidence.length ? evidence.map(r=>'<article id="evidence-'+r.id+'" class="evidence circuit'+effectClass(r.id)+(r.id===selected?' highlight':'')+'">'+
      '<div class="card-labels">'+pill(r.tag)+effectBadge(r.id)+'</div><h3>'+link(r.name,recordPath(r))+'</h3><div class="subtitle">'+esc(r.subtitle)+'</div>'+
      paragraph(r.description)+fields(r.fields)+refline(r.sources)+'</article>').join('') :
      paragraph(L('这一系统的环路证据待收录。当前可查看分子通路、靶标和结构资料。','Circuit evidence for this system is pending curation. Molecular pathway, target and structure records are available.'),'empty'),'reg-panel');
  const clinicalLinks=Object.values(clinicalCandidates).filter(d=>d.system===system.id).map(d=>d.id);
  const clinical=clinicalLinks.length?panel(L('相关临床管线','Related clinical pipeline'),
    paragraph(L('分子档案列出相关试验阶段、终点和进展。','The molecule profiles provide trial phases, outcomes and development status.'),'muted')+
    related(clinicalLinks)):'';
  app.innerHTML=header(sections.regulation.title,sections.regulation.description,'',sections.regulation.eyebrow)+
    '<div class="actions">'+link(L('← 通路与环路总览','← Pathway & circuit overview'),'regulation','button')+
    (system.id==='melatonin'?link(L('查看时相证据表','Browse phase evidence table'),'evidence/circadian','button'):'')+'</div>'+
    '<div class="reg-layout"><aside class="reg-system-nav">'+atlasNav(system.id)+'</aside><div class="reg-content">'+
    structureShortcuts+brainOverview(system)+
    (atlasSpec(system)?pathwayExplorer(system):regulationExplorer(system))+
    '<h2 class="reg-text-heading">'+say('通路与环路的证据记录','Pathway and circuit evidence records')+'</h2>'+
    effectLegend()+'<div class="reg-grid">'+molecular+circuits+'</div>'+clinical+
    '</div></div>';
  if(atlasSpec(system))mountPathwayExplorer(system);else mountRegulation(system);
}

function exportData() {
  return {version,records,structures,activities,clinicalCandidates,registryAudit,pockets:activePockets,systems,moleculeProfiles,
    sleepWakeEffects,regulationMaps,pathwayAtlas,structureGallery,suvorexantPocketData,doraPocketData,retatrutideComparison};
}
function download() {
  const blob = new Blob([JSON.stringify(exportData(),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=Object.assign(document.createElement('a'),{href:url,download:'SW_Atlas_v'+version+'.json'});
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function methods() {
  app.innerHTML=header(L('数据字典与收录说明','Data dictionary and curation guide'),
    L('v'+version+' · 双语审阅版','v'+version+' · Bilingual review build'),'','SW ATLAS / DATA GUIDE')+
    dataDictionary.map(([id,rows])=>panel(sections[id].title,table([L('字段组','Field group'),L('建议收录内容','Recommended content')],rows.map(row=>row.map(esc))))).join('')+
    panel(L('坐标位点注释','Coordinate-based site annotation'),
      paragraph(L('采用 RCSB legacy PDB 的首个坐标模型，默认使用空白或 A 替代构象，排除氢、氘和溶剂。3RZE 的 5EH 与 D7V 分别使用配体 alt A 和 alt B。按作者链与编号筛选受体，排除工程融合片段。逐个配体实例统计与任一配体重原子距离 ≤4.0 Å 的受体残基。7L1U 使用作者链 L 的肽坐标。',
        'Annotations use the first model in each RCSB legacy PDB file. Blank or A alternate locations are the default, excluding hydrogen, deuterium and solvent. The 3RZE ligands 5EH and D7V use alt A and alt B, respectively. Receptor atoms are selected by author chain and residue number to exclude engineered fusion segments. For each ligand instance, receptor residues within 4.0 Å of a ligand heavy atom are listed. The 7L1U peptide is taken from author chain L.'))+
      paragraph(L('站内显示坐标简图。全原子视图、坐标文件及验证报告通过结构条目访问。','The site shows a coordinate preview. Each structure entry links to full-atom visualization, coordinates and validation.')))+
    panel(L('化合物页的互作视图','Contact views in compound profiles'),
      paragraph(L('二维配体骨架由 RDKit 根据 PDB 化学组分字典生成，并以原子名映射至复合物。各结构标注最近的 6 个残基，3D 视图高亮所选原子对。完整的 4.0 Å 邻近残基与全原子视图可通过相应结构访问。','RDKit lays out each ligand from the PDB Chemical Component Dictionary. Atoms are mapped by name to the complex. The six nearest residues are annotated, and the 3D preview highlights the selected atom pair. Each structure links to the full 4.0 Å contact set and a full-atom view.')))+
    panel(L('作用方向标记','Effect direction labels'),effectLegend()+
      paragraph(L('按相应的说明书用途或实验表型标记方向。动物实验标注物种与具体情境。','Labels reflect the relevant prescribing indication or experimental phenotype. Animal observations retain their species and context.')))+
    panel(L('通路图的关系证据','Evidence behind pathway relations'),
      paragraph(L('调控目录收录 '+systems.length+' 个系统，其中 8 个有逐条复核的关系图谱，共 89 条关系、56 篇去重的原始研究。关系条目记录方向、观察结果、物种、实验条件、解释边界及 PMID 或 DOI。分子药理、神经环路、跨系统联系及复合物结构可分别查看。虚线表示关联、解剖或特定干预情境。',
        'The regulatory catalog indexes '+systems.length+' systems. Eight have individually reviewed evidence maps covering 89 relations and 56 distinct primary studies. Each relation records its direction, observation, species, experimental context, interpretation limits and PMID or DOI. Pharmacology, circuits, cross-system links and structures can be viewed separately. Dashed lines denote association, anatomy or intervention context.'))+
      paragraph(L('跨系统图汇总已有来源支持的 12 组系统联系；详细方向以各条研究为准。SVG 导出保留证据元数据，JSON 可用于继续整理。现有图谱为有边界的研究入口，不是完整的全脑因果模型。','The systems map groups 12 pairs of evidence-supported connections; direction is defined by each underlying study. SVG exports retain evidence metadata, and JSON supports further curation. The atlas is a bounded research resource, not a complete causal model of the brain.'))+
      paragraph(L('方法工具：使用 scientific-critical-thinking 工作流辅助区分测量、解释与因果证据。下列方法文献不计入生物学关系来源。','Methodological tool: the scientific-critical-thinking workflow helped distinguish measurement, interpretation and causal evidence. The following methods reference is not counted as biological evidence.'))+
      sourceList([source('Kassis et al. (2026) · Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents · arXiv preprint','https://arxiv.org/abs/2609.00065')]))+
    panel(L('2026-11-06 科学复核','Scientific review · 6 November 2026'),
      paragraph(L('已逐条复核 8 个系统原有的 85 条关系，另补充 4 条有来源关系。重点修正亚型分辨率、原药与代谢物、结构与功能分层，以及实验条件和结论范围；并非对全部药物剂量、安全性和监管状态的完整重审。','All 85 existing relations across eight systems were reviewed, and four sourced relations were added. Corrections address subtype resolution, parent drugs versus metabolites, structural versus functional evidence, and experimental scope. This is not a complete re-audit of dosing, safety or regulatory status for every drug.'))+
      paragraph(L('来源核查深度按条目记录：全文方法与结果、原始摘要，或可获取的原文片段。动物与细胞实验不直接等同于人体疗效。','Source-access depth is recorded per relation: full-text methods/results, primary abstracts or available original excerpts. Animal and cell experiments are not equated with clinical efficacy.'))+
      '<div class="actions"><a class="button" href="scientific-audit.json" download>'+say('下载逐条核查记录 JSON','Download relation review JSON')+'</a></div>')+
    panel(L('Suvorexant 口袋模板','Suvorexant pocket template'),
      paragraph(L('4S0V（OX2R）与 4ZJ8（OX1R）采用原始 mmCIF 坐标和 CCD SUV 化学定义，三维口袋与二维图联动。主图显示 8 个代表性残基，各条目完整列出 19 个 ≤4.0 Å 接触残基。文献报道的 Asn–羰基氢键与 4S0V 的水 4025 桥单独标识；其他距离接触不自动指定相互作用类型。', '4S0V (OX2R) and 4ZJ8 (OX1R) use deposited mmCIF coordinates and CCD SUV chemistry in linked 3D and 2D views. Eight representative residues are highlighted, with all 19 residues within 4.0 Å listed for each entry. The literature-assigned Asn–carbonyl hydrogen bond and water 4025 bridge in 4S0V are identified separately; other proximity contacts are not automatically assigned an interaction type.'))+
      sourceList([source('Yin et al. · Nature 2015','https://pubmed.ncbi.nlm.nih.gov/25533960/'),source('Yin et al. · NSMB 2016','https://pubmed.ncbi.nlm.nih.gov/26950369/'),source('RCSB CCD SUV','https://www.rcsb.org/ligand/SUV'),source('3Dmol.js · BSD license','https://3dmol.org/')]))+
    panel(L('PDB 图库与三维结构','PDB library and 3D structures'),
      paragraph(L('8 个系统展示 32 个去重 PDB 条目。结构元数据和生物组装体缩略图来自 RCSB PDB；卡片明确标示靶标、配体、分辨率和工程构建。Mol* 在线视图按需加载，原始 mmCIF 坐标可下载后用于 PyMOL。','The eight systems display 32 distinct PDB entries. Structure metadata and biological assembly thumbnails come from RCSB PDB. Cards identify the target, ligand, resolution and engineered construct. The Mol* online viewer loads on demand; original mmCIF coordinates can be downloaded for PyMOL.'))+
      sourceList([source('RCSB PDB Data API','https://data.rcsb.org/'),source('Mol* Viewer · Query parameters','https://molstar.org/viewer-docs/query-parameters/')]))+
    panel(L('临床管线收录规则','Clinical pipeline inclusion'),
      paragraph(L('临床单方与复方项目独立计数。阶段按本库核对的最高相关试验或申报记录归类。试验设计、登记终点、已发布结果和获批适应证分别记录。登记为尚未招募的试验保留该状态，申办方披露与登记冲突时同时列出。',
        'Single substances and combination programs are counted separately. Stage follows the highest relevant trial or application indexed here. Study design, registered outcomes, posted results and approved indications are recorded separately. Registered studies not yet recruiting retain that status, and sponsor reports are shown alongside differing registry statuses.')))+
    panel(L('数据导出','Data export'),
      paragraph(L('JSON 含双语记录、药物档案、药理、调控系统与位点注释。','JSON contains bilingual records, drug profiles, pharmacology, regulation systems and site annotations.'))+
      '<button type="button" class="primary" id="download">'+say('下载 JSON','Download JSON')+'</button>')+
    panel(L('外部资源','External resources'),sourceList([
      source('RCSB PDB','https://www.rcsb.org/'),source('UniProt','https://www.uniprot.org/'),source('PubChem','https://pubchem.ncbi.nlm.nih.gov/'),
      gtop,source('ChEMBL','https://www.ebi.ac.uk/chembl/'),source('GPCRdb','https://docs.gpcrdb.org/'),
      source('Allen Mouse Brain Connectivity Atlas','https://connectivity.brain-map.org/'),source('Reactome','https://reactome.org/'),
      source('National Sleep Research Resource','https://sleepdata.org/about')]));
  document.getElementById('download').addEventListener('click',download);
}

function route(raw) {
  const [page,key='',tab='',child='']=raw.split('/');
  if (page==='record' && byId[key]) return recordPath(byId[key]);
  if (page==='compare') return 'target/ox2/compare';
  if (page==='browse') {
    if (key==='structures') return 'browse/structures'+(tab?'/'+tab:'');
    if (key==='sites') return 'browse/targets'+(tab?'/'+tab:'');
    if (key==='pathways'||key==='circuits'||key==='regulation') return 'regulation'+(tab?'/'+tab:'');
    if (key==='all') return 'search/'+tab;
    if (key==='molecules'||key==='targets') return 'browse/'+key+(tab?'/'+tab:'');
  }
  if (page==='drug' && byId[key]?.group==='molecules') return ['drug',key,tab].filter(Boolean).join('/');
  if (page==='target' && byId[key]?.group==='targets') return ['target',key,tab,child].filter(Boolean).join('/');
  if (page==='regulation'||page==='methods'||page==='search'||page==='research') return raw;
  if (page==='evidence' && Object.hasOwn(evidenceTables,key)) return 'evidence/'+key;
  return 'home';
}
function updateLanguageLink(path) {
  language.textContent=say('English','简体中文');
  language.lang=say('en','zh-CN');
  language.href=href(path,say('en','zh'));
  language.setAttribute('aria-label',say('Switch to English','切换至简体中文'));
}
function decoded(value) {
  try { return decodeURIComponent(value); }
  catch { return value; }
}
let releaseViewers=[];
let profileView;
function render() {
  const hash=location.hash.slice(1);
  const nextLocale=hash.startsWith('en/')||hash==='en'?'en':'zh';
  const [rawPath,queryString] = hash.replace(/^(?:en|zh)(?:\/|$)/,'').split('?',2);
  const params = new URLSearchParams(queryString);
  const path=route(rawPath);
  const [page,key='',tab='',child='']=path.split('/');
  if ((page==='drug'||page==='target') && profileView?.id===key && profileView.locale===nextLocale) {
    profileView.jump(tab);
    return;
  }
  cleanupSuvorexantPockets();
  cleanupGenericExplorers();
  releaseViewers.forEach(dispose=>dispose());
  profileView?.dispose();
  profileView=undefined;
  locale=nextLocale;
  document.getElementById('home-funding').hidden=page!=='home';
  document.documentElement.lang=say('zh-CN','en');
  document.title=(page==='drug'||page==='target')&&byId[key]?local(byId[key].name)+' · SW Atlas':say('睡眠–觉醒靶标结构数据库 | SW Atlas','Sleep–wake Target Structure Atlas | SW Atlas');
  document.getElementById('brand-text').textContent=say('睡眠–觉醒靶标结构数据库','Sleep–wake Target Structure Atlas');
  document.getElementById('footer-label').textContent=say('SW ATLAS / 课题 4 · 睡眠–觉醒研究','SW ATLAS / PROJECT 4 · SLEEP–WAKE RESEARCH');
  document.getElementById('footer-guide').textContent=say('数据字典与来源','Data guide and sources');
  document.getElementById('footer-guide').href=href('methods');
  document.getElementById('brand').href=href('home');
  masthead.classList.toggle('profile-masthead',page==='drug'||page==='target');
  nav.setAttribute('aria-label',say('主导航','Main navigation'));
  const active=page==='browse'?(key==='structures'?'targets':key):({drug:'molecules',target:'targets',regulation:'regulation'})[page];
  nav.innerHTML=workspaceLinks.map(([id,url,label])=>link(label,url,'nav-item',id===active)).join('');
  const tools=document.getElementById('workspace-tools');
  if (tools) {
    tools.setAttribute('aria-label',say('常用证据入口','Evidence shortcuts'));
    tools.innerHTML=workspaceTools(page,key);
  }
  updateLanguageLink(path);
  const tocSlot=document.getElementById('profile-toc');
  if (tocSlot) tocSlot.innerHTML='';
  if (page==='browse' && key==='structures') browseStructures(decoded(tab),params);
  else if (page==='browse') browse(key,decoded(tab),params);
  else if (page==='search') browse('all',decoded(key),params);
  else if (page==='drug') profileView=drug(byId[key],tab);
  else if (page==='target') profileView=target(byId[key],tab,child);
  else if (page==='regulation') {
    if (key) regulation(key,tab);
    else regulationOverview(params);
  }
  else if (page==='methods') methods();
  else if (page==='research') researchGuide();
  else if (page==='evidence') evidenceTable(key,params);
  else home();
  releaseViewers=[...document.querySelectorAll('[data-model]')].map(drawViewer);
  if (profileView) return;
  const selected=page==='regulation' && tab ? document.getElementById('evidence-'+tab) : null;
  if (selected) selected.scrollIntoView({block:'nearest'});
  else window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);
render();
