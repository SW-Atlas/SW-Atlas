/* Visual annotations are separate from compound, target and circuit records. */
const regulationMaps = {
  version:'1.0', reviewed:'2026-11-06',
  orexin:{
    scope:L('选择性证据图。人受体药理与小鼠环路实验分层呈现，线路不代表排他性解剖连接。',
      'Selected evidence map. Human receptor pharmacology and mouse circuit studies occupy separate layers. Routes do not imply exclusive anatomical connections.'),
    nodes:[
      {id:'hcrt-neurons',x:28,y:110,w:170,h:82,kind:'signal',title:L('食欲素神经元','Orexin neurons'),sub:L('外侧 / 穹隆周下丘脑','Lateral / perifornical LH'),
        body:L('HCRT 前体产生食欲素肽。本图选择与睡眠–觉醒相关的两条实验支路。','The HCRT precursor gives rise to orexin peptides. This map selects two experimentally studied sleep–wake branches.'),
        sources:[article('Sakurai et al. · Cell 1998','9491897')],scope:L('基础分子研究','Foundational molecular study')},
      {id:'orexin-peptides',x:28,y:270,w:170,h:82,kind:'signal',title:'Orexin-A / -B',sub:L('内源性神经肽','Endogenous peptides'),
        body:L('两种食欲素均可激活食欲素受体，亚型效力随配体与实验系统而变化。图中的箭头不表示两种肽对两种受体效力相同。',
          'Both orexins can activate orexin receptors; relative potency depends on peptide and assay. Arrows do not imply equal potency at both subtypes.'),
        sources:[article('Sakurai et al. · Cell 1998','9491897'),pdb('7L1U')],record:'orb',scope:L('配体–受体药理','Ligand–receptor pharmacology')},
      {id:'ox1',x:300,y:110,w:148,h:82,kind:'target',title:'OX1R',sub:'HCRTR1',record:'ox1'},
      {id:'ox2',x:300,y:270,w:148,h:82,kind:'target',title:'OX2R',sub:'HCRTR2',record:'ox2'},
      {id:'lc',x:566,y:110,w:182,h:82,kind:'circuit',title:L('蓝斑 · LC','Locus coeruleus'),sub:L('去甲肾上腺素能神经元','Noradrenergic neurons'),record:'lh-lc',
        scope:L('小鼠 · 光遗传与局部药理','Mouse · Optogenetics / local drug'),
        body:L('在小鼠休息期，同步双侧 LC 光抑制，或预先在 LC 区域双侧注射 SB-334867，消除 Hcrt 神经元光刺激缩短 NREM–觉醒潜伏期的效应。','During the mouse inactive period, concurrent bilateral LC photoinhibition or prior bilateral SB-334867 injection into the LC region abolished Hcrt-photostimulation-induced shortening of NREM-to-wake latency.'),
        sources:[article('Carter et al. · PNAS 2012','22955882')]},
      {id:'tmn',x:566,y:270,w:182,h:82,kind:'circuit',title:L('后下丘脑','Posterior hypothalamus'),sub:L('TMN 及邻近区域','TMN and adjacent regions'),record:'tmn-rescue',
        scope:L('小鼠 · 区域 OX2R 恢复','Mouse · Regional OX2R rescue'),
        body:L('在 OX2R 转录受抑制的小鼠中进行区域 AAV-Cre 恢复。覆盖区域包含 TMN 及邻近组织，因此不能将结果仅归于组胺神经元。',
          'Regional AAV-Cre rescue in mice with disrupted OX2R transcription covered TMN and neighboring tissue. The result cannot be assigned exclusively to histamine neurons.'),
        sources:[article('Mochizuki et al. · PNAS 2011','21368172')]},
      {id:'transition',x:824,y:110,w:162,h:82,kind:'wake',title:L('NREM → 觉醒','NREM → wake'),sub:L('刺激诱发的状态转换','Stimulation-induced transition'),
        body:L('该实验测量状态转换潜伏期，不等同于整夜觉醒总量或人体药物疗效。','The measured endpoint was transition latency, distinct from total wake time or clinical drug efficacy.'),
        sources:[article('Carter et al. · PNAS 2012','22955882')],scope:L('小鼠 · EEG / EMG','Mouse · EEG / EMG')},
      {id:'consolidation',x:824,y:270,w:162,h:82,kind:'wake',title:L('觉醒维持','Wake consolidation'),sub:L('觉醒时段延长','Longer wake bouts'),
        body:L('区域 OX2R 恢复改善觉醒维持，但未纠正睡眠碎片化。','Regional OX2R rescue improved wake consolidation but did not correct fragmented sleep.'),
        sources:[article('Mochizuki et al. · PNAS 2011','21368172')],scope:L('小鼠 · EEG / EMG','Mouse · EEG / EMG')},
      {id:'dora',x:300,y:428,w:448,h:66,kind:'sleep',title:L('DORA · 双食欲素受体拮抗','DORA · Dual orexin receptor antagonism'),sub:L('下方药物共同作用于 OX1R 与 OX2R','The drugs below antagonize OX1R and OX2R'),
        body:L('药物作用于分子受体。本图不把全身给药的疗效归因于某一条小鼠神经环路。逐个药物的剂量、临床终点与安全性请进入档案。',
          'Drugs act at molecular receptors. Clinical effects of systemic treatment are not assigned to one mouse circuit. Dossiers retain drug-specific doses, clinical endpoints and safety.'),sources:[suvLabel,lemLabel],scope:L('人受体药理 / 人体临床','Human receptor pharmacology / clinical data')},
      {id:'insomnia',x:824,y:428,w:162,h:66,kind:'sleep',title:L('失眠治疗','Insomnia treatment'),sub:L('人体证据','Human evidence'),
        body:L('图示临床端点以已收录药物的说明书和试验为依据。药物间的适应证、剂量与获批地区需逐项查看。','Clinical context comes from indexed drug labels and trials. Indications, doses and approval jurisdictions remain drug-specific.'),
        sources:[suvLabel,lemLabel],scope:L('说明书 / 临床研究','Prescribing information / clinical studies')}
    ],
    edges:[
      {id:'synthesis',from:'hcrt-neurons',to:'orexin-peptides',type:'activation',path:'M113 192 V268',label:L('产生','Produces'),lx:151,ly:235,
        text:L('HCRT 前体加工形成食欲素肽。','Processing of HCRT yields orexin peptides.'),sources:[article('Sakurai et al. · Cell 1998','9491897')],context:L('分子身份','Molecular identity')},
      {id:'activate-ox1',from:'orexin-peptides',to:'ox1',type:'activation',path:'M198 293 H230 V151 H298',
        text:L('食欲素激活 OX1R。两种肽的相对效力不同，详见原始药理。','Orexins activate OX1R. The peptides differ in relative potency; consult the primary pharmacology.'),sources:[article('Sakurai et al. · Cell 1998','9491897')],context:L('受体药理','Receptor pharmacology')},
      {id:'activate-ox2',from:'orexin-peptides',to:'ox2',type:'activation',path:'M198 329 H248 V311 H298',
        text:L('食欲素激活 OX2R。7L1U 提供 Orexin-B 结合的活化态结构参照。','Orexins activate OX2R. 7L1U provides an Orexin-B-bound active-state structural reference.'),sources:[article('Sakurai et al. · Cell 1998','9491897'),pdb('7L1U')],context:L('受体药理 / 实验结构','Receptor pharmacology / experimental structure')},
      {id:'ox1-lc',from:'ox1',to:'lc',type:'context',path:'M448 151 H564',label:L('局部干预','Local intervention'),lx:506,ly:138,
        text:L('连线关联受体与小鼠 LC 干预证据。局部 SB-334867 实验支持 LC 食欲素信号参与诱发觉醒，不说明 OX1R 仅存在于 LC。',
          'This link connects receptor identity to mouse LC perturbation evidence. Local SB-334867 supports LC orexin signaling in induced arousal; it does not imply OX1R is restricted to LC.'),sources:[article('Carter et al. · PNAS 2012','22955882')],context:L('跨层关联 · 小鼠实验','Cross-level context · Mouse experiment')},
      {id:'lc-transition',from:'lc',to:'transition',type:'functional',path:'M748 151 H822',
        text:L('在小鼠休息期，同步双侧 LC 光抑制，或预先在 LC 区域双侧注射 SB-334867，消除 Hcrt 神经元光刺激缩短 NREM–觉醒潜伏期的效应。','During the mouse inactive period, concurrent bilateral LC photoinhibition or prior bilateral SB-334867 injection into the LC region abolished Hcrt-photostimulation-induced shortening of NREM-to-wake latency.'),sources:[article('Carter et al. · PNAS 2012','22955882')],context:L('功能干预 · 小鼠','Functional perturbation · Mouse')},
      {id:'ox2-tmn',from:'ox2',to:'tmn',type:'context',path:'M448 311 H564',label:L('区域恢复','Regional rescue'),lx:506,ly:298,
        text:L('在 OX2R 转录受抑制的小鼠中恢复后下丘脑受体表达。该链接保留区域和遗传模型条件。','Posterior hypothalamic receptor restoration in mice with disrupted OX2R transcription. The association is conditional on region and genetic model.'),sources:[article('Mochizuki et al. · PNAS 2011','21368172')],context:L('跨层关联 · 区域救援','Cross-level context · Regional rescue')},
      {id:'tmn-consolidation',from:'tmn',to:'consolidation',type:'functional',path:'M748 311 H822',
        text:L('区域恢复改善觉醒维持，睡眠碎片化仍存在。','Regional restoration improved wake consolidation while sleep fragmentation persisted.'),sources:[article('Mochizuki et al. · PNAS 2011','21368172')],context:L('功能恢复 · 小鼠','Functional rescue · Mouse')},
      {id:'dora-ox1',from:'dora',to:'ox1',type:'inhibition',path:'M322 428 V396 H270 V170 H297',
        text:L('所列 DORA 在 OX1R 上具有拮抗药理。每种药物的指标及实验系统可从药物–靶标视图查看。','The indexed DORAs antagonize OX1R. Drug-specific metrics and assay systems are available in the drug–target view.'),sources:[suvLabel,lemLabel],context:L('药物–受体拮抗','Drug–receptor antagonism')},
      {id:'dora-ox2',from:'dora',to:'ox2',type:'inhibition',path:'M374 428 V355',label:L('拮抗','Antagonism'),lx:423,ly:393,
        text:L('所列 DORA 在 OX2R 上具有拮抗药理。效力数值来自不同实验，不能直接据此排名。','The indexed DORAs antagonize OX2R. Potency measurements from different assays do not support a direct ranking.'),sources:[suvLabel,lemLabel],context:L('药物–受体拮抗','Drug–receptor antagonism')},
      {id:'dora-insomnia',from:'dora',to:'insomnia',type:'clinical',path:'M748 461 H822',
        text:L('临床治疗关联。动物线路不直接推定药物在人体中的作用核团。','Clinical treatment association. Animal circuit findings do not identify the brain region mediating a drug’s human clinical effect.'),sources:[suvLabel,lemLabel],context:L('人体临床 / 说明书','Human clinical evidence / prescribing information')}
    ]
  }
};

const regKinds={activation:L('激活 / 产生','Activation / production'),inhibition:L('拮抗','Antagonism'),
  functional:L('功能干预支持','Supported by perturbation'),context:L('实验情境关联','Experimental context'),
  clinical:L('临床关联','Clinical association'),association:L('已归档关联','Indexed association')};
function regEntities(system) {
  const p=byId[system.pathway];
  const targets=records.filter(r=>r.group==='targets' && (p.links.includes(r.id)||r.links.includes(p.id)));
  const molecules=records.filter(r=>r.group==='molecules' && (p.links.includes(r.id)||r.links.includes(p.id)||targets.some(t=>r.links.includes(t.id))));
  return {pathway:p,targets,molecules};
}
function regPairs(system) {
  const {targets,molecules}=regEntities(system);
  return molecules.flatMap(m=>targets.flatMap(t=>{
    const assays=activities.filter(a=>a.molecule===m.id && a.target===t.id);
    const complexes=structures.filter(s=>s.molecule===m.id && s.target===t.id);
    if (!m.links.includes(t.id) && !assays.length && !complexes.length) return [];
    const actions=[...new Set(assays.map(a=>local(a.action)).filter(Boolean))];
    return [{id:m.id+'--'+t.id,from:m.id,to:t.id,type:'association',assays,complexes,
      title:local(m.name)+' → '+local(t.name),action:actions.join(' / '),
      text:L('药物与靶标的已归档关系。结合实验、功能实验与复合物结构分别列出。','An indexed molecule–target relation. Binding assays, functional assays and complex structures are listed separately.'),
      sources:assays.length?assays.flatMap(a=>a.sources):m.sources,context:L('原始药理 / 结构记录','Source pharmacology / structure records')}];
  }));
}
function orexinGraph() {
  const base=regulationMaps.orexin;
  const ds=regEntities(systems.find(s=>s.id==='orexin')).molecules.filter(r=>
    ['ox1','ox2'].every(t=>activities.some(a=>a.molecule===r.id&&a.target===t&&/antagon/i.test(a.action?.en))));
  const nodes=base.nodes.map(n=>({...n}));
  const edges=base.edges.map(e=>({...e}));
  ds.forEach((r,i)=>{
    const x=28+(i%5)*194,y=545+Math.floor(i/5)*96;
    nodes.push({id:r.id,record:r.id,x,y,w:182,h:72,kind:'sleep',title:r.name,sub:r.tag,group:'dora-drug'});
  });
  for(const edge of edges.filter(e=>e.from==='dora'&&e.type==='inhibition')){
    edge.sources=activities.filter(a=>ds.some(m=>m.id===a.molecule)&&a.target===edge.to).flatMap(a=>a.sources);
  }
  return {nodes,edges,width:1014,height:Math.max(650,550+Math.ceil(ds.length/5)*96),dora:ds.map(r=>r.id),scope:base.scope};
}
function moleculeGraph(system,filter='all',query='') {
  const entity=regEntities(system);
  const q=query.trim().toLowerCase();
  const mols=entity.molecules.filter(m=>(filter==='all'||m.links.includes(filter)||activities.some(a=>a.molecule===m.id&&a.target===filter)) &&
    (!q||JSON.stringify([m.name,m.subtitle]).toLowerCase().includes(q)));
  const pairs=regPairs(system).filter(p=>mols.some(m=>m.id===p.from)&&(filter==='all'||p.to===filter));
  const targets=entity.targets.filter(t=>(filter==='all'||t.id===filter)&&(!q||pairs.some(p=>p.to===t.id)));
  const height=Math.max(400,112+Math.max(mols.length,targets.length)*84);
  const spread=(count,i)=>count===1?height/2-38:88+i*(height-166)/(Math.max(count-1,1));
  const nodes=[...mols.map((m,i)=>({id:m.id,record:m.id,x:30,y:spread(mols.length,i),w:238,h:66,kind:sleepWakeEffects[m.id]?.direction||'molecule',title:m.name,sub:m.tag})),
    ...targets.map((t,i)=>({id:t.id,record:t.id,x:476,y:spread(targets.length,i),w:204,h:74,kind:'target',title:t.name,sub:L('分子靶标','Molecular target')})),
    {id:entity.pathway.id,record:entity.pathway.id,x:816,y:height/2-42,w:180,h:84,kind:'signal',title:system.title,sub:L('通路记录','Pathway record')}];
  const nodeMap=Object.fromEntries(nodes.map(n=>[n.id,n]));
  const edges=pairs.map(p=>{const a=nodeMap[p.from],b=nodeMap[p.to];return {...p,path:`M${a.x+a.w} ${a.y+a.h/2} C366 ${a.y+a.h/2} 378 ${b.y+b.h/2} ${b.x-2} ${b.y+b.h/2}`};});
  targets.forEach(t=>{const a=nodeMap[t.id],b=nodeMap[entity.pathway.id];edges.push({id:t.id+'--system',from:t.id,to:b.id,type:'context',path:`M${a.x+a.w} ${a.y+a.h/2} C750 ${a.y+a.h/2} 750 ${b.y+b.h/2} ${b.x-2} ${b.y+b.h/2}`,
    text:L('该靶标被归入此调控系统。此线表示数据库归类，不表示单一细胞内的线性通路。','This target is indexed in this regulatory system. The line denotes database membership, not a linear pathway within a single cell.'),sources:entity.pathway.sources,context:L('数据库归类','Database membership')});});
  return {nodes,edges,width:1024,height,empty:!mols.length,scope:L('此图显示已收录的分子–靶标关系。虚线表示归档关联，点选连线可区分结合、功能和结构证据。未连接不等于已证实无活性。',
    'Indexed molecule–target relationships. Dashed lines denote recorded associations; select a line to distinguish binding, function and structure evidence. An absent line is not evidence of inactivity.')};
}
const regSvgStyle=`.rg-bg{fill:#fbfcfd}.rg-band{fill:#f0f5f5}.rg-label{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:11px;font-weight:600;fill:#536c74;letter-spacing:1px}.rg-node{cursor:pointer;outline:none}.rg-node rect{fill:white;stroke:#c4d4d9;stroke-width:1.5}.rg-node.kind-signal rect{fill:#e9f6f0;stroke:#86b7a6}.rg-node.kind-wake rect{fill:#fff2e5;stroke:#e99037}.rg-node.kind-sleep rect{fill:#ecf3ff;stroke:#7b9fd7}.rg-node.kind-circuit rect{fill:#f0f1fb;stroke:#b1aed7}.rg-node.kind-target rect{fill:#183b43;stroke:#183b43}.rg-node text{fill:#17333d;font-family:'Segoe UI','Microsoft YaHei',sans-serif;pointer-events:none}.rg-node .rg-title{font-size:15px;font-weight:650}.rg-node .rg-sub{font-size:10.5px;fill:#526b76}.rg-node.kind-target text{fill:#fff}.rg-node.kind-target .rg-sub{fill:#b9d3d9}.rg-node:focus rect,.rg-node:hover rect,.rg-node.is-active rect{stroke:#087b73;stroke-width:3.5}.rg-edge{cursor:pointer;outline:none}.rg-line{fill:none;stroke:#8a9ca3;stroke-width:1.7}.rg-edge.type-activation .rg-line{stroke:#397f69}.rg-edge.type-inhibition .rg-line{stroke:#4679bf;stroke-width:2}.rg-edge.type-functional .rg-line{stroke:#df812c;stroke-width:2}.rg-edge.type-context .rg-line,.rg-edge.type-clinical .rg-line,.rg-edge.type-association .rg-line{stroke-dasharray:5 4}.rg-hit{fill:none;stroke:transparent;stroke-width:16}.rg-edge:focus .rg-line,.rg-edge:hover .rg-line,.rg-edge.is-active .rg-line{stroke-width:3.5;stroke:#147d77}.rg-edge text{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:10px;fill:#536c74;paint-order:stroke;stroke:#fbfcfd;stroke-width:5px;stroke-linejoin:round}.rg-dim{opacity:.23}.rg-node.is-active{opacity:1}.rg-note{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:11px;fill:#526b76}`;
function regWrap(text,width,size=15) {
  const lines=[];let row='',measure=0;
  const estimate=s=>[...s].reduce((n,c)=>n+(/[\u2e80-\uffef]/.test(c)?size:size*.53),0);
  const tokens=String(local(text)||'').match(/[\u2e80-\uffef]|[^\s\u2e80-\uffef]+|\s+/gu)||[];
  for(const token of tokens){const step=estimate(token);if(measure+step>width&&row){lines.push(row.trim());row='';measure=0;}if(!row&&!token.trim())continue;row+=token;measure+=step;}
  if(row)lines.push(row.trim());return lines;
}
function regSvg(graph,physiology=false) {
  const defs='<defs><marker id="rg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#397f69"/></marker><marker id="rg-functional" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#df812c"/></marker><marker id="rg-bar" viewBox="0 0 8 16" refX="4" refY="8" markerWidth="5" markerHeight="10" orient="auto"><path d="M4 0 V16" stroke="#4679bf" stroke-width="2"/></marker></defs>';
  const headings=physiology?[[28,L('信号来源','SIGNAL SOURCE')],[300,L('分子靶标','MOLECULAR TARGETS')],[566,L('小鼠环路证据','MOUSE CIRCUIT EVIDENCE')],[824,L('实验终点','MEASURED OUTCOME')]]:
    [[30,L('药物与内源性分子','DRUGS & ENDOGENOUS LIGANDS')],[476,L('分子靶标','MOLECULAR TARGETS')],[816,L('调控系统','REGULATORY SYSTEM')]];
  const bands=physiology?'<rect class="rg-band" x="548" y="62" width="452" height="320" rx="16"/><text class="rg-note" x="566" y="83">'+say('实验模型与受体档案的物种需分别查看','Model species and target-record species are distinct')+'</text>':'';
  const edges=graph.edges.map(e=>'<g class="rg-edge type-'+e.type+'" data-reg-edge="'+e.id+'" tabindex="0" role="button" aria-label="'+esc((local(graph.nodes.find(n=>n.id===e.from)?.title)||e.from)+' → '+(local(graph.nodes.find(n=>n.id===e.to)?.title)||e.to)+' · '+local(regKinds[e.type]))+'"><title>'+esc(e.text)+'</title><path class="rg-hit" d="'+e.path+'"/><path class="rg-line" d="'+e.path+'"'+({activation:' marker-end="url(#rg-arrow)"',functional:' marker-end="url(#rg-functional)"',inhibition:' marker-end="url(#rg-bar)"'}[e.type]||'')+'/>'+
    (e.label?'<text x="'+e.lx+'" y="'+e.ly+'" text-anchor="middle">'+esc(e.label)+'</text>':'')+'</g>').join('');
  const nodes=graph.nodes.map(n=>{
    const lines=regWrap(n.title,n.w-22,15).slice(0,3),sub=regWrap(n.sub,n.w-18,10.5).slice(0,2);
    const start=n.y+(n.h-(lines.length*18+sub.length*14+6))/2+14;
    return '<g class="rg-node kind-'+n.kind+'" data-reg-node="'+n.id+'" role="button" tabindex="0" aria-label="'+esc(n.title)+'"><title>'+esc(n.title)+' · '+esc(n.sub)+'</title><rect x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="12"/>'+lines.map((t,i)=>'<text class="rg-title" x="'+(n.x+n.w/2)+'" y="'+(start+i*18)+'" text-anchor="middle">'+esc(t)+'</text>').join('')+sub.map((t,i)=>'<text class="rg-sub" x="'+(n.x+n.w/2)+'" y="'+(start+lines.length*18+4+i*14)+'" text-anchor="middle">'+esc(t)+'</text>').join('')+'</g>';
  }).join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" class="reg-svg" viewBox="0 0 '+graph.width+' '+graph.height+'" width="'+graph.width+'" height="'+graph.height+'" role="group" aria-labelledby="rg-title rg-desc"><title id="rg-title">'+say('睡眠–觉醒调控交互图','Interactive sleep–wake regulation map')+'</title><desc id="rg-desc">'+esc(graph.scope)+'</desc><style>'+regSvgStyle+'</style>'+defs+'<rect class="rg-bg" width="100%" height="100%" rx="14"/>'+bands+headings.map(([x,t])=>'<text class="rg-label" x="'+x+'" y="37">'+esc(t)+'</text>').join('')+edges+nodes+(physiology?'<text class="rg-label" x="28" y="527">'+esc(L('已收录的双受体拮抗剂 · 点击查看靶标与结构','INDEXED DUAL ANTAGONISTS · SELECT A DRUG FOR TARGETS & STRUCTURES'))+'</text>':'')+'</svg>';
}
function regMatrix(system) {
  const {targets,molecules}=regEntities(system),pairs=regPairs(system);
  return '<div class="reg-matrix scroller"><table class="tbl"><caption>'+say('药物–靶标证据矩阵。横线表示本站尚未归档该组合，不能解释为无活性。','Molecule–target evidence matrix. A dash means this pair is not indexed here, not proven inactive.')+'</caption><thead><tr><th scope="col">'+say('分子','Molecule')+'</th>'+targets.map(t=>'<th scope="col">'+recLink(t.id)+'</th>').join('')+'</tr></thead><tbody>'+molecules.map(m=>'<tr><th scope="row">'+recLink(m.id)+effectBadge(m.id)+'</th>'+targets.map(t=>{
    const p=pairs.find(p=>p.from===m.id&&p.to===t.id);
    return '<td>'+(p?'<button class="reg-cell" type="button" data-reg-pair="'+p.id+'"><strong>'+esc(p.action||L('已归档关联','Indexed association'))+'</strong><span>'+p.assays.length+' '+say('条药理','assays')+' · '+p.complexes.length+' '+say('个复合物','complexes')+'</span></button>':'<span aria-label="'+say('未归档','Not indexed')+'">—</span>')+'</td>';
  }).join('')+'</tr>').join('')+'</tbody></table></div>';
}
function regOverview(system) {
  const entity=regEntities(system);
  return '<span class="eyebrow">'+say('浏览指引','EXPLORE THE EVIDENCE')+'</span><h3>'+esc(system.title)+'</h3><p>'+say('点击节点查看药物、靶标或实验终点。点击连线查看关系依据。','Select a node for a drug, target or endpoint. Select an edge for the supporting evidence.')+'</p><div class="reg-key"><div><b>→</b>'+say('产生、激活或功能效应','Production, activation or functional effect')+'</div><div><b class="sleep-ink">⊣</b>'+say('受体拮抗','Receptor antagonism')+'</div><div><b>┄</b>'+say('实验情境、归档或临床关联','Context, indexed or clinical association')+'</div></div><p class="reg-small">'+say('橙色为促觉醒，蓝色为促睡眠。分子作用方向与整个环路的效应分别判断。','Orange indicates wake promotion; blue indicates sleep promotion. Molecular action and whole-circuit effects are interpreted separately.')+'</p><div class="reg-counts"><b>'+entity.targets.length+'</b><span>'+say('个靶标','targets')+'</span><b>'+entity.molecules.length+'</b><span>'+say('个药物 / 分子','drugs / ligands')+'</span></div>'+
    (system.id==='orexin'?'<div class="reg-research"><strong>'+say('适合进一步研究的问题','A question for further research')+'</strong><p>'+say('同一 OX2R 的拮抗态与激动态结构差异，如何与受体功能实验及觉醒维持终点相互验证？','How can antagonist- versus agonist-bound OX2R structures be tested against receptor function and wake-consolidation endpoints?')+'</p>'+link(L('比较 OX2R 结构','Compare OX2R structures'),'target/ox2/compare','button')+'</div>':'<p class="reg-small">'+say('环路证据随独立策展逐步增加。','Circuit evidence will expand through independent curation.')+'</p>');
}
function regEdgeDetail(edge) {
  const title=edge.title||local(regKinds[edge.type]);
  let body='<span class="eyebrow">'+say('关系证据','RELATION EVIDENCE')+'</span><h3>'+esc(title)+'</h3>'+pill(edge.context)+paragraph(edge.text);
  if(edge.assays){body+='<h4>'+say('药理记录','Pharmacology records')+'</h4>'+(edge.assays.length?'<div class="reg-assays">'+edge.assays.map(a=>'<article><strong>'+esc(a.action)+'</strong> · '+esc(a.result||a.metric||a.type||'')+paragraph(a.system||a.assay||'', 'reg-small')+refline(a.sources)+'</article>').join('')+'</div>':paragraph(L('此组合尚无单列的定量药理记录。','No separately indexed quantitative assay for this pair.')));
    body+='<h4>'+say('关联的实验结构','Associated experimental structures')+'</h4>'+(edge.complexes.length?'<div class="related">'+edge.complexes.map(regComplexLink).join('')+'</div>':paragraph(L('本站尚未收录已核实的直接复合物。','No verified direct complex is indexed here.')));
    body+='<p class="reg-small">'+say('跨实验的 Kᵢ、IC₅₀、EC₅₀ 等指标不直接比较排序。','Kᵢ, IC₅₀ and EC₅₀ from different assays are not ranked together.')+'</p>';
  }
  return body+'<h4>'+say('来源','Sources')+'</h4>'+sourceList(edge.sources||[]);
}
function regComplexLink(s) {
  return link(s.id+(s.modeledLigand?' · '+local(s.modeledLigand):''),'target/'+s.target+'/structures/'+s.id,'button');
}
function regNodeDetail(node,system) {
  const r=byId[node.record];
  let body='<span class="eyebrow">'+say('节点档案','NODE PROFILE')+'</span><h3>'+esc(node.title)+'</h3>'+paragraph(node.sub,'reg-small');
  if(node.scope)body+=pill(node.scope);
  body+=paragraph(node.body||r?.description||'');
  if(r){body+=effectBadge(r.id)+'<div class="actions">'+link(L('打开完整档案','Open full record'),recordPath(r),'button')+'</div>';
    if(r.group==='targets'){
      const ss=targetStructures(r.id);body+='<h4>'+say('靶标结构与作用位点','Target structures and binding sites')+'</h4><div class="related">'+link(L('实验结构','Structures'),'target/'+r.id+'/structures','button')+link(L('作用位点','Binding sites'),'target/'+r.id+'/sites','button')+'</div>';
      body+='<p class="reg-small">'+ss.length+' '+say('个已收录的直接复合物；物种和构建信息见各结构记录。','indexed direct complexes; species and constructs are specified in each structure record.')+'</p>';
      body+='<h4>'+say('关联分子','Associated molecules')+'</h4><div class="reg-detail-drugs">'+regPairs(system).filter(p=>p.to===r.id).map(p=>'<button type="button" data-reg-pair="'+p.id+'">'+esc(byId[p.from].name)+' <span>'+esc(p.action||L('查看证据','Evidence'))+'</span></button>').join('')+'</div>';
    }else if(r.group==='molecules'){
      body+=pill(r.tag)+'<h4>'+say('点选靶标关系','Select a target relation')+'</h4><div class="reg-detail-drugs">'+regPairs(system).filter(p=>p.from===r.id).map(p=>'<button type="button" data-reg-pair="'+p.id+'">'+esc(byId[p.to].name)+' <span>'+esc(p.action||L('查看证据','Evidence'))+'</span></button>').join('')+'</div>';
      const ss=moleculeStructures(r.id);body+='<h4>'+say('关联的实验结构','Associated experimental structures')+'</h4>'+(ss.length?'<div class="related">'+ss.map(regComplexLink).join('')+'</div>':paragraph(L('尚无已归档的直接复合物。','No indexed direct complex.')));
    }
  }
  if(node.id==='tmn')body+='<p>'+link(L('继续浏览组胺系统','Explore the histamine system'),'regulation/histamine')+'</p>';
  return body+'<h4>'+say('来源','Sources')+'</h4>'+sourceList(node.sources||r?.sources||[]);
}
function regulationExplorer(system) {
  const physiology=system.id==='orexin';
  const graph=physiology?orexinGraph():moleculeGraph(system);
  const entity=regEntities(system);
  return '<section class="reg-explorer" id="reg-explorer" aria-label="'+say('调控系统可视化','Regulation explorer')+'"><header class="reg-heading"><div><span class="eyebrow">PATHWAY EXPLORER</span><h2>'+esc(system.title)+'</h2><p>'+say('沿线路理解机制，沿证据进入研究。','Follow the mechanism. Open the evidence.')+'</p></div><div class="reg-view-controls" role="group" aria-label="'+say('显示模式','View mode')+'">'+
    (physiology?'<button type="button" data-reg-view="pathway" aria-pressed="true">'+say('通路与环路','Pathway & circuits')+'</button>':'')+
    '<button type="button" data-reg-view="network" aria-pressed="'+!physiology+'">'+say('药物–靶标图','Drug–target map')+'</button><button type="button" data-reg-view="matrix" aria-pressed="false">'+say('证据矩阵','Evidence matrix')+'</button></div></header>'+
    '<div class="reg-toolbar"><div class="reg-network-filters" id="reg-network-filters"'+(physiology?' hidden':'')+'><label>'+say('靶标','Target')+' <select id="reg-target-filter"><option value="all">'+say('全部靶标','All targets')+'</option>'+entity.targets.map(t=>'<option value="'+t.id+'">'+esc(t.name)+'</option>').join('')+'</select></label><label>'+say('分子','Molecule')+' <input type="search" id="reg-molecule-filter" placeholder="'+say('输入药物名','Search a molecule')+'"></label></div><div class="reg-tools"><button type="button" id="reg-reset">'+say('取消选择','Clear selection')+'</button><button type="button" id="reg-expand" aria-pressed="false">'+say('展开画布','Expand canvas')+'</button><button type="button" id="reg-export">'+say('导出 SVG','Export SVG')+'</button></div></div>'+
    '<div class="reg-explorer-grid"><div class="reg-main"><div class="reg-canvas" id="reg-canvas" tabindex="0" role="region" aria-label="'+say('通路图，可横向及纵向滚动','Pathway map; scroll horizontally or vertically')+'">'+regSvg(graph,physiology)+'</div><p class="reg-scope" id="reg-scope">'+esc(graph.scope)+'</p></div><aside class="reg-inspector" id="reg-inspector" aria-label="'+say('所选节点或关系的证据','Evidence for the selected node or edge')+'" tabindex="-1">'+regOverview(system)+'</aside></div><p class="reg-mobile-hint">'+say('可滚动画布查看全图；使用 Tab 和 Enter 也可选择节点与连线。','Scroll the canvas to explore. Tab and Enter also select nodes and edges.')+'</p></section>';
}
function mountRegulation(system) {
  const root=document.getElementById('reg-explorer');if(!root)return;
  let view=system.id==='orexin'?'pathway':'network';
  let graph=view==='pathway'?orexinGraph():moleculeGraph(system);
  const canvas=document.getElementById('reg-canvas'),inspector=document.getElementById('reg-inspector');
  const target=document.getElementById('reg-target-filter'),query=document.getElementById('reg-molecule-filter');
  function highlight(id,edge=false) {
    const ids=new Set([id]);
    const selectedEdge=graph.edges.find(e=>e.id===id)||regPairs(system).find(e=>e.id===id);
    if(edge&&selectedEdge){ids.add(selectedEdge.from);ids.add(selectedEdge.to);}
    else if(!edge){graph.edges.filter(e=>e.from===id||e.to===id).forEach(e=>{ids.add(e.from);ids.add(e.to);});}
    if(graph.dora?.includes(id)){ids.add('dora');ids.add('ox1');ids.add('ox2');}
    if(edge&&selectedEdge&&graph.dora?.includes(selectedEdge.from))ids.add('dora');
    if(id==='dora'){graph.dora?.forEach(n=>ids.add(n));}
    root.querySelectorAll('[data-reg-node]').forEach(el=>{const active=ids.has(el.dataset.regNode);el.classList.toggle('rg-dim',!!id&&!active);el.classList.toggle('is-active',el.dataset.regNode===id);el.setAttribute('aria-pressed',String(el.dataset.regNode===id));});
    root.querySelectorAll('[data-reg-edge]').forEach(el=>{const e=graph.edges.find(e=>e.id===el.dataset.regEdge);const active=e&&(edge?(e.id===id||(ids.has('dora')&&e.from==='dora'&&e.to===selectedEdge?.to)):ids.has(e.from)&&ids.has(e.to));el.classList.toggle('rg-dim',!!id&&!active);el.classList.toggle('is-active',!!id&&!!active);});
  }
  function select(id,isEdge=false,pair=false) {
    const e=pair?regPairs(system).find(p=>p.id===id):graph.edges.find(p=>p.id===id);
    const n=graph.nodes.find(n=>n.id===id);
    if(isEdge&&e)inspector.innerHTML=regEdgeDetail(e);
    else if(n)inspector.innerHTML=regNodeDetail(n,system);
    else return;
    highlight(id,isEdge);inspector.scrollTop=0;
    if(window.matchMedia?.('(max-width: 1000px)').matches)inspector.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  function refresh() {
    graph=view==='pathway'?orexinGraph():moleculeGraph(system,target.value||'all',query.value||'');
    canvas.innerHTML=view==='matrix'?regMatrix(system):(graph.empty?'<p class="reg-empty">'+say('没有匹配的分子，请调整筛选条件。','No matching molecules. Adjust the filters.')+'</p>':'')+regSvg(graph,view==='pathway');
    canvas.classList.toggle('is-matrix',view==='matrix');
    document.getElementById('reg-scope').textContent=local(graph.scope);
    document.getElementById('reg-network-filters').hidden=view!=='network';
    document.getElementById('reg-export').hidden=view==='matrix';
    root.querySelectorAll('[data-reg-view]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.regView===view)));
    inspector.innerHTML=regOverview(system);
  }
  root.addEventListener('click',event=>{
    const item=event.target.closest('[data-reg-view],[data-reg-node],[data-reg-edge],[data-reg-pair]');if(!item)return;
    if(item.dataset.regView){view=item.dataset.regView;refresh();}
    else if(item.dataset.regNode)select(item.dataset.regNode);
    else if(item.dataset.regEdge)select(item.dataset.regEdge,true);
    else select(item.dataset.regPair,true,true);
  });
  root.addEventListener('keydown',event=>{const item=event.target.closest('[data-reg-node],[data-reg-edge]');if(item&&(event.key==='Enter'||event.key===' ')){event.preventDefault();select(item.dataset.regNode||item.dataset.regEdge,!!item.dataset.regEdge);}});
  target.addEventListener('change',refresh);query.addEventListener('input',refresh);
  document.getElementById('reg-reset').addEventListener('click',()=>{highlight('');inspector.innerHTML=regOverview(system);});
  document.getElementById('reg-expand').addEventListener('click',event=>{const active=root.classList.toggle('reg-expanded');event.currentTarget.setAttribute('aria-pressed',String(active));event.currentTarget.textContent=active?say('收起画布','Collapse canvas'):say('展开画布','Expand canvas');});
  document.getElementById('reg-export').addEventListener('click',()=>{
    const sources=[...new Map(graph.edges.flatMap(e=>e.sources||[]).map(s=>[s.url,s])).values()];
    const metadata=esc(JSON.stringify({system:system.id,reviewed:regulationMaps.reviewed,scope:graph.scope,sources}));
    const svg=regSvg(graph,view==='pathway').replace('</svg>','<metadata>'+metadata+'</metadata></svg>');
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'}));
    const a=Object.assign(document.createElement('a'),{href:url,download:'SW_Atlas_'+system.id+'_'+view+'_'+locale+'.svg'});a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
}
