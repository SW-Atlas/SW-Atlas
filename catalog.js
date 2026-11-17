function isApprovedMolecule(r) {
  return r.approval?.status === 'approved' || r.tag === USApproved;
}
function moleculeCategory(r) {
  if (clinicalCandidates[r.id]) return clinicalCandidates[r.id].kind === 'combination' ? 'combination' : 'clinical';
  if (isApprovedMolecule(r)) return 'approved';
  if (r.tag === toolCompound) return 'tool';
  if (r.tag === endogenous) return 'endogenous';
  return 'research';
}
const moleculeCategories = {
  approved:L('获批药物','Approved drugs'),
  clinical:L('临床制剂','Clinical agents'),
  combination:L('临床复方','Combination programs'),
  tool:L('工具化合物','Tool compounds'),
  endogenous:L('内源性配体','Endogenous ligands'),
  research:L('其他研究分子','Other research molecules')
};
const targetFamilies = {
  gpcr:L('G 蛋白偶联受体','G protein-coupled receptors'),
  channel:L('离子通道、亚基及相关构建','Ion channels, subunits & constructs'),
  transporter:L('转运体','Transporters'),
  enzyme:L('酶','Enzymes'),
  other:L('其他靶标','Other targets')
};
function targetFamily(r) {
  const tag = r.tag.en;
  if (tag.includes('GPCR')) return 'gpcr';
  if (/channel|ionotropic/i.test(tag)) return 'channel';
  if (/transporter/i.test(tag)) return 'transporter';
  if (/enzyme|kinase|oxygenase|hydroxylase|decarboxylase/i.test(tag) || r.id==='chicken-tph1') return 'enzyme';
  return 'other';
}
function includesTerms(text, query) {
  return query.normalize('NFKC').toLowerCase().trim().split(/\s+/).every(term => text.includes(term));
}
function facet(id, label, options) {
  return '<label class="catalog-filter"><span>'+esc(label)+'</span><select id="'+id+'"><option value="">'+
    say('不限','Any')+'</option>'+Object.entries(options).map(([value,name])=>
    '<option value="'+esc(value)+'">'+esc(name)+'</option>').join('')+'</select></label>';
}
function searchFacet(query, placeholder) {
  return '<label class="catalog-filter catalog-search"><span>'+say('关键词','Keywords')+'</span>'+
    '<input id="filter" type="search" placeholder="'+esc(placeholder)+'" value="'+esc(query)+'"></label>';
}
function catalogBar(controls, summary='') {
  return '<div class="catalog-controls">'+controls+'<button type="button" class="button catalog-reset" id="catalog-reset">'+
    say('重置','Reset')+'</button></div>'+summary+'<p id="count" class="catalog-count muted" aria-live="polite"></p>';
}
function catalogStats(items) {
  return '<div class="catalog-stats">'+items.map(({label,count,filter})=>
    (filter?'<button type="button" class="catalog-stat" data-catalog-category="'+esc(filter)+'" aria-pressed="false">':'<div class="catalog-stat">')+
    '<strong>'+count+'</strong><span>'+esc(label)+'</span>'+(filter?'</button>':'</div>')).join('')+'</div>';
}
function bindCatalog(base, params, update, queryInPath=false) {
  const input = document.getElementById('filter');
  const selects = [...app.querySelectorAll('.catalog-filter select')];
  for (const select of selects) {
    const value = params.get(select.id);
    if (value && [...select.options].some(option => option.value === value)) select.value = value;
  }
  const buttons = [...app.querySelectorAll('[data-catalog-category]')];
  const chartButtons = [...app.querySelectorAll('[data-catalog-field]')];
  const refresh = () => {
    const filters = Object.fromEntries(selects.map(s => [s.id,s.value || '']));
    const search = input.value.trim();
    update(search,filters);
    for (const button of buttons) button.setAttribute('aria-pressed',String(button.dataset.catalogCategory === filters.category));
    for (const button of chartButtons) button.setAttribute('aria-pressed',String(filters[button.dataset.catalogField]===button.dataset.catalogValue));
    const next = new URLSearchParams(selects.filter(s => s.value).map(s => [s.id,s.value]));
    if (!queryInPath && search) next.set('q',search);
    const queryPath = queryInPath && search ? '/'+encodeURIComponent(search) : '';
    const path = base+queryPath+(next.size ? '?'+next.toString() : '');
    updateLanguageLink(path);
    if (window.history && location.hash !== href(path)) window.history.replaceState(null,'',href(path));
  };
  input.addEventListener('input',refresh);
  for (const select of selects) select.addEventListener('change',refresh);
  for (const button of buttons) button.addEventListener('click',() => {
    const category = document.getElementById('category');
    const next = category.value === button.dataset.catalogCategory ? '' : button.dataset.catalogCategory;
    for (const select of selects) select.value = '';
    category.value = next;
    refresh();
  });
  for (const button of chartButtons) button.addEventListener('click',() => {
    const {catalogField,catalogValue}=button.dataset;
    const select=document.getElementById(catalogField);
    select.value=select.value===catalogValue ? '' : catalogValue;
    if (catalogField==='family' && select.value!=='gpcr') document.getElementById('gpcr').value='';
    if (catalogField==='gpcr' && select.value) document.getElementById('family').value='gpcr';
    if (catalogField==='phase' || catalogField==='category') document.getElementById(catalogField==='phase'?'category':'phase').value='';
    refresh();
  });
  document.getElementById('catalog-reset').addEventListener('click',() => {
    input.value = '';
    for (const select of selects) select.value = '';
    refresh();
    input.focus();
  });
  refresh();
}
function catalogList(matches, total, render, noun) {
  document.getElementById('count').textContent = say('显示 '+matches.length+' / '+total+' '+noun.zh, 'Showing '+matches.length+' of '+total+' '+noun.en);
  document.getElementById('list').innerHTML = matches.length ? matches.map(render).join('') :
    paragraph(L('没有匹配记录。可调整关键词或筛选条件。','No matching records. Change the search or filters.'),'empty');
}

const researchSections = {
  molecules:'browse/molecules',
  targets:'browse/targets',
  regulation:'regulation'
};
function researchNavigation(current) {
  const links = Object.entries(researchSections).filter(([id])=>id!==current)
    .map(([id,path])=>link(sections[id].title,path,'button')).join('');
  return '<div class="actions">'+link(L('按研究问题导航','Browse by research question'),'research','primary')+links+'</div>';
}

function researchGuide() {
  const cases = [
    {
      title:L('昼夜节律与睡眠时相','Circadian rhythm and sleep phase'),
      question:L('区分相位移动、SCN 放电变化和入睡潜伏期。核对给药或干预的昼夜时点、物种与读出，再决定采用哪个实验终点。',
        'Distinguish phase shifts, SCN firing and sleep-onset latency. Check circadian timing, species and readout before choosing an endpoint.'),
      links:[['evidence/circadian',L('褪黑素–SCN 时相证据表','Melatonin–SCN phase evidence table')],
        ['regulation/melatonin',L('SCN 与相位证据','SCN and phase evidence')],['target/mt1',L('MT1','MT1')],['target/mt2',L('MT2','MT2')],
        ['drug/mela',L('褪黑素','Melatonin')],['drug/ram',L('雷美替胺','Ramelteon')],['drug/tas',L('他司美琼','Tasimelteon')]]
    },
    {
      title:L('促眠与促醒药物','Sleep-promoting and wake-promoting drugs'),
      question:L('沿食欲素通路比较拮抗与激动。先核受体亚型和功能读出，再分别看实验复合物、睡眠连续性和维持觉醒终点。',
        'Trace antagonism and agonism through the orexin system. Check receptor subtype and functional readout, then examine complexes, sleep continuity and maintenance of wakefulness separately.'),
      links:[['regulation/orexin',L('食欲素通路','Orexin pathway')],['drug/suv/clinical',L('Suvorexant 睡眠终点','Suvorexant sleep endpoints')],
        ['drug/ove/clinical',L('Oveporexton 临床证据','Oveporexton clinical evidence')],['target/ox2/compare',L('OX2R 位点比较','OX2R site comparison')]]
    },
    {
      title:L('睡眠呼吸暂停与药物机制','Sleep apnea and drug mechanisms'),
      question:L('将体重相关干预与其他药物机制分开。比较 AHI 前先核对低通气定义、基线严重程度、PAP 使用、随访时长和分析人群。',
        'Separate weight-related interventions from other drug mechanisms. Before comparing AHI, check the hypopnea definition, baseline severity, PAP use, follow-up and analysis population.'),
      links:[['evidence/ahi',L('AHI 终点证据表','AHI evidence table')],
        ['regulation/incretin-osa',L('肠促胰素与 OSA','Incretins and OSA')],['regulation/ventilation-control',L('通气控制','Ventilatory control')],
        ['drug/retatrutide/clinical',L('Retatrutide 研究','Retatrutide studies')],['drug/ad109/clinical',L('AD109 研究','AD109 studies')],
        ['drug/ihl-42x/clinical',L('IHL-42X 研究','IHL-42X studies')]]
    },
    {
      title:L('新靶标与新药研发线索','Starting points for target and drug discovery'),
      question:L('从有药理数据但站内缺位点注释的靶标筛出候选。核对作用方向、物种、表型与干预证据，再选有来源的配体或同靶标结构作为对照。位点距离可帮助选突变，功能实验用于验证作用。',
        'Shortlist targets with pharmacology data and a gap in atlas site coverage. Check action, species, phenotype and perturbation evidence, then select a sourced ligand or same-target structure as a control. Use contact distances to guide mutagenesis and functional assays to test the effect.'),
      links:[['browse/targets?evidence=assay',L('筛选有药理实验的靶标','Find targets with indexed pharmacology')],
        ['browse/structures',L('找实验结构与参照','Find structures and references')],
        ['browse/molecules?evidence=structure',L('找有实验复合物的分子','Find molecules with experimental complexes')],
        ['methods',L('查证据与坐标口径','Check evidence and coordinate methods')]]
    }
  ];
  app.innerHTML = header(L('研究导航','Research guide'),
    L('从研究问题进入药物、靶标和调控档案。每条路径提供可核对的实验读出和对照线索。',
      'Start with a research question and follow it across molecules, targets and regulatory systems. Each path points to readouts and potential controls you can verify.'))+
    '<div class="actions">'+Object.entries(researchSections).map(([id,path])=>link(sections[id].title,path,'button')).join('')+'</div>'+
    '<div class="research-grid">'+cases.map(({title,question,links})=>
      panel(title,paragraph(question)+'<div class="related">'+links.map(([path,label])=>link(label,path,'button')).join('')+'</div>')).join('')+'</div>';
}

function browse(group,query,params) {
  const all = group === 'all';
  const molecule = group === 'molecules';
  const info = sections[group];
  const rows = records.filter(r => all || r.group === group);
  const description = info?.description || L('分子、PDB、作用位点和脑区可用中英文同时检索。','Search molecules, PDB IDs, binding sites and brain regions in Chinese or English.');
  const title = all ? L('全库检索','Search the atlas') : molecule ? L('分子总览','Molecule overview') : L('靶标总览','Target overview');
  let controls = searchFacet(query,L('名称、别名或标识','Name, alias or identifier'));
  let stats = '';
  if (molecule) {
    stats = moleculeOverviewStats(rows);
    controls += facet('category',L('收录类型','Record type'),moleculeCategories)+
      facet('phase',L('临床阶段 / 获批','Clinical phase / approval'),{...approvalStageOptions,...clinicalPhases})+
      facet('status',L('临床进展','Clinical status'),clinicalStates)+
      facet('condition',L('临床研究方向','Clinical indication'),clinicalConditions)+
      facet('direction',L('已标注效应','Annotated effect'),effectLabels)+
      facet('evidence',L('证据覆盖','Evidence coverage'),{
        chemistry:L('有二维化学结构','2D chemical structure'),
        structure:L('有站内实验复合物','Indexed experimental complex'),
        results:L('所收录登记已贴结果','Posted results in indexed registries')
      });
  } else if (all) {
    controls += facet('category',L('板块','Section'),Object.fromEntries(Object.entries(sections).map(([id,s])=>[id,s.title])));
  } else {
    stats = targetOverviewStats(rows);
    controls += facet('family',L('靶标家族','Target family'),targetFamilies)+
      facet('gpcr',L('GPCR 亚类','GPCR class'),targetClassLabels)+
      facet('assembly',L('靶标组成','Target composition'),targetAssemblyLabels)+
      facet('evidence',L('证据覆盖','Evidence coverage'),{
        structure:L('实验复合物或参考结构','Experimental complex or structure reference'),
        complex:L('有站内实验结构','Indexed experimental structure'),
        reference:L('仅参考结构','Structure references only'),
        pocket:L('坐标作用位点','Coordinate-based binding site'),
        assay:L('已收录药理实验','Indexed pharmacology assay'),
        clinical:L('关联临床单方','Linked clinical single substance')
      })+facet('system',L('关联调控系统','Related regulatory system'),Object.fromEntries(systems.map(s=>[s.id,s.title])));
  }
  app.innerHTML = header(title,description,'',info?.eyebrow || 'SW ATLAS / SEARCH')+
    (group==='targets'?'<div class="actions">'+link(L('浏览结构总览','Browse structures'),'browse/structures','button')+'</div>'+
      paragraph(L('证据覆盖按站内记录统计。位点待补的筛选可用于安排后续核查。','Coverage reflects atlas records. The site-gap filter can help prioritize follow-up curation.'),'catalog-note'):'')+
    (molecule?paragraph(L('临床阶段按相关研究登记或申报记录归类，招募状态按下列档案所引试验核对。复方项目独立计数。','Clinical phase follows the indexed study or application. Recruitment follows the cited trials. Combination programs are counted separately.'),'catalog-note'):'')+
    stats+catalogBar(controls)+(molecule?effectLegend(true):'')+'<div class="grid" id="list"></div>';
  bindCatalog(all?'search':'browse/'+group,params,(search,choice) => {
    const system = choice.system && systems.find(s=>s.id===choice.system);
    const matches = rows.filter(r => {
      if (!includesTerms(searchIndex[r.id],search)) return false;
      if (all) return !choice.category || categoryOf[r.group] === choice.category;
      if (molecule) {
        const d = clinicalCandidates[r.id];
        if (choice.evidence==='chemistry' && !moleculeProfiles[r.id]?.chemistry?.depiction) return false;
        if (choice.evidence==='structure' && !moleculeStructures(r.id).length) return false;
        if (choice.evidence==='results' && !d?.studies.some(s=>registryAudit[s.id]?.hasResults ?? s.hasResults)) return false;
        return (!choice.category || moleculeCategory(r) === choice.category) &&
          matchesClinicalStage(r,choice.phase) && (!choice.status || d?.status === choice.status) &&
          (!choice.condition || d?.category === choice.condition) &&
          (!choice.direction || sleepWakeEffects[r.id]?.direction === choice.direction);
      }
      if (choice.family && targetFamily(r) !== choice.family) return false;
      if (choice.gpcr && targetGpcrClass(r) !== choice.gpcr) return false;
      if (choice.assembly && targetAssemblies[r.id] !== choice.assembly) return false;
      if (system && !r.links.includes(system.pathway) && !byId[system.pathway].links.includes(r.id)) return false;
      if (choice.evidence === 'structure' || choice.evidence === 'complex' || choice.evidence === 'reference' || choice.evidence === 'structure-gap') {
        const {indexed,reference}=targetCoverage(r);
        if (choice.evidence === 'complex') return indexed;
        if (choice.evidence === 'reference') return reference && !indexed;
        if (choice.evidence === 'structure-gap') return !indexed && !reference;
        return indexed || reference;
      }
      if (choice.evidence === 'pocket') return targetSites(r.id).some(s=>!s.candidate);
      if (choice.evidence === 'assay') return activities.some(a=>a.target===r.id);
      if (choice.evidence === 'site-gap') return activities.some(a=>a.target===r.id) && !targetSites(r.id).some(s=>!s.candidate);
      if (choice.evidence === 'clinical') return Object.values(clinicalCandidates).some(d=>d.kind!=='combination' && d.targets.includes(r.id));
      return true;
    });
    if (molecule) matches.sort((a,b)=>{
      const rank={approved:0,clinical:1,combination:2,endogenous:3,tool:4,research:5};
      const d=(rank[moleculeCategory(a)]??9)-(rank[moleculeCategory(b)]??9);
      return d || String(local(a.name)).localeCompare(String(local(b.name)),'en',{numeric:true,sensitivity:'base'});
    });
    catalogList(matches,rows.length,r=>card(r,all),L('条记录','records'));
  },true);
}

function browseStructures(query,params) {
  const categories = {
    sites:L('有坐标位点注释','With coordinate-based sites'),
    complex:L('已收录复合物','Indexed complex'),
    reference:L('参照结构','Reference structures'),
    source:L('PDB 来源链接','PDB source links')
  };
  const pdbWithSites = new Set(activePockets.map(s=>s.pdb));
  const entries = new Map(structures.map(s=>[s.id,{
    ...s, ligand:s.modeledLigand || byId[s.molecule].name,
    category:pdbWithSites.has(s.id)?'sites':'complex'
  }]));
  for (const r of records.filter(r=>r.group==='targets')) {
    for (const s of r.structureReferences || []) {
      if (!entries.has(s.id)) entries.set(s.id,{...s,target:r.id,category:'reference'});
    }
  }
  for (const s of Object.values(structureGallery.entries)) {
    if (s.category==='reference' && !entries.has(s.id)) entries.set(s.id,s);
  }
  const sourceProfiles = new Map();
  for (const record of records.filter(r=>r.group!=='structures'&&r.group!=='sites')) {
    for (const id of structureSourceIds(record)) {
      if (!entries.has(id)) entries.set(id,{id,category:'source'});
      if (!sourceProfiles.has(id)) sourceProfiles.set(id,new Set());
      sourceProfiles.get(id).add(record.id);
    }
  }
  const rows = [...entries.values()].map(s=>{
    const profiles = [...(sourceProfiles.get(s.id) || [])];
    const terms = [s.id,s.code,byId[s.target]?.name,byId[s.target]?.subtitle,s.ligand,s.method,s.state,
      ...[...new Set([s.molecule,...profiles].filter(Boolean))].map(id=>searchIndex[id])];
    return {...s,profiles,terms:terms.map(v=>typeof v==='object'?v.zh+' '+v.en:v).join(' ').normalize('NFKC').toLowerCase()};
  });
  const options = ids => Object.fromEntries([...new Set(ids.filter(Boolean))]
    .sort((a,b)=>String(local(byId[a].name)).localeCompare(String(local(byId[b].name))))
    .map(id=>[id,byId[id].name]));
  const indexedTargets=options(rows.map(s=>s.target));
  const relatedMolecules=options(rows.flatMap(s=>[s.molecule,...s.profiles]).filter(id=>byId[id]?.group==='molecules'));
  app.innerHTML = header(L('结构总览','Structure index'),
    L('默认按靶标、结构配体和 PDB 编号排列。可点击前四列表头切换排序。关联档案按引用关系展示。配体身份及结构证据见对应列。',
      'Entries are ordered by target, structure ligand and PDB ID by default. Select any of the first four column headers to sort. Related profiles are linked by citation. The ligand identity and evidence type appear in their own columns.'),
    link(L('靶标总览','Target overview'),'browse/targets'))+
    paragraph(L('「结构配体」为沉积坐标中的配体；当它与站内收录分子不同时（如前药、活性代谢物或工具化合物），在「关联分子档案」单独标注。',
      '"Structure ligand" is the ligand in the deposited coordinates; when it differs from an indexed molecule (a prodrug, active metabolite or tool compound), the related molecule profile is noted.'),'catalog-note')+
    catalogStats(Object.entries(categories).map(([filter,label])=>({filter,label,count:rows.filter(s=>s.category===filter).length})))+
    catalogBar(searchFacet(query,L('PDB、靶标或配体','PDB ID, target or ligand'))+
      facet('target',L('结构靶标','Structural target'),indexedTargets)+
      facet('molecule',L('关联分子档案','Related molecule profile'),relatedMolecules)+
      facet('category',L('结构证据','Structure evidence'),categories)+
      facet('sort',L('排序','Sort by'),Object.fromEntries(Object.entries(structureSortOptions).filter(([key])=>key!=='target'))))+
    '<div id="list"></div>';
  const list=document.getElementById('list');
  const sort=document.getElementById('sort');
  sort.options[0].textContent=local(structureSortOptions.target);
  bindCatalog('browse/structures',params,(search,choice)=>{
    const order=choice.sort || 'target';
    const matches = rows.filter(s=>includesTerms(s.terms,search) &&
      (!choice.target || s.target===choice.target) && (!choice.category || s.category===choice.category) &&
      (!choice.molecule || s.molecule===choice.molecule || s.profiles.includes(choice.molecule))).sort(compareStructures(order));
    document.getElementById('count').textContent = say('显示 '+matches.length+' / '+rows.length+' 个 PDB 条目',
      'Showing '+matches.length+' of '+rows.length+' PDB entries');
    list.innerHTML = matches.length ? renderStructureIndex(matches,categories,order) :
      paragraph(L('没有匹配的结构。','No matching structures.'),'empty');
  },true);
  list.addEventListener('click',event=>{
    const button=event.target.closest('[data-structure-sort]');
    if (!button) return;
    const key=button.dataset.structureSort;
    sort.value=key==='target' ? '' : key==='resolution' && sort.value==='resolution' ? 'resolution-desc' : key;
    sort.dispatchEvent(new Event('change'));
    list.querySelector('[data-structure-sort="'+key+'"]')?.focus({preventScroll:true});
  });
}

function regulationOverview(params) {
  const items = systems.map(system => {
    const pathway = byId[system.pathway];
    const circuits = system.circuits.map(id=>byId[id]);
    const spec = atlasSpec(system);
    const edges = spec?.edges || [];
    const layers = {
      molecular: !!atlasEdgesForOverview(edges,'molecular'),
      circuit: !!(circuits.length || atlasEdgesForOverview(edges,'circuit')),
      structural: !!atlasEdgesForOverview(edges,'structural'),
      cross: pathwayAtlas.crossConnections.some(e=>e.from===system.id || e.to===system.id),
      clinical: ['incretin-osa','opioid-rls','ventilation-control'].includes(system.id)
    };
    const terms = [system.title.zh,system.title.en,searchIndex[pathway.id],...circuits.map(r=>searchIndex[r.id]),
      ...(spec?.nodes.flatMap(n=>[n.title.zh,n.title.en]) || []),
      ...edges.flatMap(e=>[e.statement?.zh,e.statement?.en])].join(' ').normalize('NFKC').toLowerCase();
    return {system,pathway,circuits,edges,layers,terms};
  });
  const layerLabels = {
    molecular:atlasLayers.molecular, circuit:atlasLayers.circuit,
    cross:atlasLayers.cross, structural:atlasLayers.structural,
    clinical:L('疾病相关调控条目','Disease-focused regulation entries')
  };
  app.innerHTML = header(L('通路与环路总览','Pathway & circuit overview'),
    L('按调控系统浏览分子信号、神经环路、跨系统联系及相关结构。点开系统可查实验条件和来源。',
      'Browse molecular signaling, neural circuits, cross-system links and relevant structures. Open a system to see experimental context and sources.'),
    '',sections.regulation.eyebrow)+researchNavigation('regulation')+
    catalogStats([
      {label:L('调控系统','Regulatory systems'),count:items.length},
      {label:L('带神经环路证据','Systems with circuit evidence'),count:items.filter(i=>i.layers.circuit).length},
      {label:L('已收录图谱关系','Indexed atlas relations'),count:items.reduce((sum,i)=>sum+i.edges.length,0)}
    ])+brainOverview()+
    catalogBar(searchFacet(params.get('q') || '',L('脑区、递质、靶标或疾病','Brain region, transmitter, target or condition'))+
      facet('layer',L('证据层','Evidence layer'),layerLabels)+
      facet('direction',L('通路已标注效应','Annotated pathway effect'),effectLabels))+
    effectLegend()+'<div class="grid" id="list"></div>';
  mountBrainOverview();
  bindCatalog('regulation',params,(search,choice) => {
    const matches = items.filter(i=>includesTerms(i.terms,search) && (!choice.layer || i.layers[choice.layer]) &&
      (!choice.direction || sleepWakeEffects[i.pathway.id]?.direction === choice.direction));
    catalogList(matches,items.length,({system,pathway,circuits,edges,layers}) =>
      '<article class="card'+effectClass(pathway.id)+'"><div class="card-labels">'+effectBadge(pathway.id)+'</div><h3>'+
      link(system.title,'regulation/'+system.id)+'</h3><div class="subtitle">'+esc(pathway.subtitle)+'</div>'+
      paragraph(pathway.description)+'<div class="card-meta">'+
      Object.entries(layers).filter(([,present])=>present).map(([id])=>'<span>'+esc(layerLabels[id])+'</span>').join('')+
      '</div><div class="catalog-card-detail">'+(edges.length?edges.length+' '+say('条图谱关系','atlas relations')+' · ':'')+
      circuits.length+' '+say('条独立环路档案','standalone circuit records')+'</div>'+
      link(L('查看系统证据 →','Explore system evidence →'),'regulation/'+system.id,'next')+'</article>',
      L('个系统','systems'));
  });
}

function atlasEdgesForOverview(edges,layer) {
  if (layer === 'molecular') return edges.some(e=>['molecular','drug','exploratory'].includes(e.layer));
  if (layer === 'circuit') return edges.some(e=>!['molecular','drug','exploratory','structural','cross'].includes(e.layer));
  return edges.some(e=>e.layer===layer);
}
