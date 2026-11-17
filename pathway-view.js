const atlasTypes={clinical:L('临床终点','CLINICAL ENDPOINT'),signal:L('内源性配体','ENDOGENOUS LIGAND'),target:L('分子靶标','MOLECULAR TARGET'),effector:L('细胞信号 / 功能','CELLULAR SIGNAL / FUNCTION'),circuit:L('神经环路 / 干预','CIRCUIT / INTERVENTION'),sleep:L('促睡眠相关','SLEEP RELATED'),wake:L('促觉醒相关','WAKE RELATED'),drug:L('药物','DRUG'),system:L('调控系统','REGULATORY SYSTEM'),structure:L('结构证据','STRUCTURAL EVIDENCE'),'system-focus':L('当前调控系统','SELECTED SYSTEM')};
const atlasLayers={molecular:L('分子药理与信号转导','Molecular pharmacology & signaling'),circuit:L('神经环路调控','Neural circuit regulation'),cross:L('跨系统联系','Cross-system connections'),structural:L('受体复合物结构','Receptor complex structures')};
const atlasSigns={activation:L('激活 / 增强','Activation / enhancement'),inhibition:L('抑制 / 拮抗','Inhibition / antagonism'),context:L('关联 / 干预情境','Association / intervention context')};
const atlasUnique=xs=>[...new Map(xs.map(s=>[s.pmid||s.doi||s.url,s])).values()];
const atlasSpec=system=>pathwayAtlas.systems[typeof system==='string'?system:system.id];
function atlasWrap(text,width,size=16){
  const measure=s=>[...s].reduce((n,c)=>n+(/[\u2e80-\uffef]/.test(c)?size:size*.53),0);
  let best=regWrap(text,width,size),score=Math.max(...best.map(measure))-Math.min(...best.map(measure));
  for(let w=width-4;w>=width*.7;w-=4){const lines=regWrap(text,w,size),spread=Math.max(...lines.map(measure))-Math.min(...lines.map(measure));if(lines.length===best.length&&spread<score){best=lines;score=spread;}}
  return best;
}
function atlasNav(selected) {
  return '<nav class="atlas-system-nav" aria-label="'+say('选择调控系统','Choose a regulatory system')+'">'+systems.map((s,i)=>{
    const spec=atlasSpec(s);return '<a href="'+href('regulation/'+s.id)+'" class="atlas-system-link'+(spec?'':' atlas-clinical-link')+'"'+(s.id===selected?' aria-current="page"':'')+'><span class="atlas-system-num">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+esc(s.title)+'</strong><small>'+(spec?spec.edges.length+' '+say('条关系','relations')+' · '+atlasUnique(spec.edges.flatMap(e=>e.sources)).length+' '+say('项来源','sources'):say('临床关联 · 药物与靶标资料','Clinical association · Drugs & targets'))+'</small></span><span class="atlas-nav-arrow">↗</span></a>';
  }).join('')+'</nav>';
}
function atlasEdges(system,lens) {
  return atlasSpec(system).edges.filter(e=>lens==='all'||(lens==='molecular'?['molecular','drug','exploratory'].includes(e.layer):lens==='structural'?e.layer==='structural':lens==='cross'?e.layer==='cross':!['molecular','drug','exploratory','structural'].includes(e.layer)));
}
function atlasLayout(system,lens='molecular',extra={nodes:[],edges:[]}) {
  const spec=atlasSpec(system),edges=[...atlasEdges(system,lens),...extra.edges].map(e=>({...e}));
  const used=new Set(edges.flatMap(e=>[e.from,e.to]));
  const sourceNodes=[...spec.nodes,...extra.nodes].filter(n=>used.has(n.id)).map(n=>({...n}));
  const ranks=Object.fromEntries(sourceNodes.map(n=>[n.id,0]));
  // Longest forward rank in a DAG. Back/feedback edges are routed independently.
  const remaining=new Set(sourceNodes.map(n=>n.id));const ordered=[];
  while(remaining.size){let candidates=[...remaining].filter(id=>!edges.some(e=>e.to===id&&remaining.has(e.from)&&e.from!==id));
    if(!candidates.length)candidates=[[...remaining][0]];
    for(const id of candidates){remaining.delete(id);ordered.push(id);const parents=edges.filter(e=>e.to===id&&ordered.includes(e.from));ranks[id]=parents.length?Math.min(4,Math.max(...parents.map(e=>ranks[e.from]+1))):0;}
  }
  const maxRank=Math.max(...Object.values(ranks),1),cols=Array.from({length:maxRank+1},()=>[]);
  sourceNodes.forEach(n=>cols[ranks[n.id]].push(n));
  const rowH=150,top=90,baseHeight=Math.max(430,top+Math.max(...cols.map(c=>c.length))*rowH+45);
  const skips=edges.filter(e=>ranks[e.to]-ranks[e.from]>1);const height=baseHeight+skips.length*28;
  const step=350,width=Math.max(940,60+maxRank*step+220);
  const actualStep=(width-280)/maxRank;
  const nodes=cols.flatMap((col,i)=>col.map((n,j)=>{
    const titleLines=atlasWrap(n.title,188,16).slice(0,4),h=Math.max(96,52+titleLines.length*19+(n.systemLink?14:0));
    const total=col.length*rowH;
    return {...n,kind:n.kind||'effector',x:30+i*actualStep,y:top+(baseHeight-top-35-total)/2+j*rowH,w:220,h,titleLines};
  }));
  const index=Object.fromEntries(nodes.map(n=>[n.id,n]));
  edges.forEach((e,i)=>{
    const a=index[e.from],b=index[e.to],forward=b.x>a.x;
    const out=edges.filter(x=>x.from===e.from).indexOf(e),outs=edges.filter(x=>x.from===e.from).length;
    const inc=edges.filter(x=>x.to===e.to).indexOf(e),incs=edges.filter(x=>x.to===e.to).length;
    const ay=a.y+a.h*(out+1)/(outs+1),by=b.y+b.h*(inc+1)/(incs+1);
    if(skips.includes(e)){
      const ax=a.x+a.w,bx=b.x,x1=ax+14,x2=bx-18,rail=baseHeight+skips.indexOf(e)*28;
      e.path=`M${ax} ${ay} H${x1-5} Q${x1} ${ay} ${x1} ${ay+6} V${rail-8} Q${x1} ${rail} ${x1+8} ${rail} H${x2-8} Q${x2} ${rail} ${x2} ${rail-8} V${by+6} Q${x2} ${by} ${x2+5} ${by} H${bx-3}`;
      e.mx=(x1+x2)/2;e.my=rail;
    }else if(forward){const ax=a.x+a.w,bx=b.x,mid=(ax+bx)/2;e.path=`M${ax} ${ay} C${mid} ${ay} ${mid} ${by} ${bx-3} ${by}`;e.geom=[ax,ay,mid,ay,mid,by,bx-3,by];e.mx=mid;e.my=(ay+by)/2;}
    else{const ax=a.x+a.w,bx=b.x+b.w,rail=Math.max(ax,bx)+22+(i%3)*12;e.path=`M${ax} ${ay} C${rail} ${ay} ${rail} ${by} ${bx+3} ${by}`;e.mx=rail-2;e.my=(ay+by)/2;}
    e.number=e.pharmacology?'P'+(extra.edges.findIndex(x=>x.id===e.id)+1):String(spec.edges.findIndex(x=>x.id===e.id)+1).padStart(2,'0');
  });
  const labels=[],point=(g,t)=>{const [x0,y0,x1,y1,x2,y2,x3,y3]=g,u=1-t;return [u*u*u*x0+3*u*u*t*x1+3*u*t*t*x2+t*t*t*x3,u*u*u*y0+3*u*u*t*y1+3*u*t*t*y2+t*t*t*y3];};
  for(const e of edges){if(e.geom){const otherPoints=edges.filter(x=>x!==e&&x.geom).flatMap(x=>Array.from({length:51},(_,i)=>point(x.geom,i/50)));const candidates=[.5,.32,.68,.22,.78,.14,.86].map(t=>point(e.geom,t));const chosen=candidates.find(([x,y])=>labels.every(([a,b])=>Math.hypot(x-a,y-b)>26)&&otherPoints.every(([a,b])=>Math.hypot(x-a,y-b)>14));if(chosen)[e.mx,e.my]=chosen;}labels.push([e.mx,e.my]);}
  for(const e of edges.filter(e=>e.pharmacology&&e.geom)){[e.mx,e.my]=point(e.geom,.5);}
  return {nodes,edges,width:width+32,height,scope:spec.scope,title:spec.title,lens,system:system.id};
}
const atlasSvgCSS=`.at-paper{fill:#fcfdfc}.at-grid-dot{fill:#dce7e4}.at-node{cursor:pointer;outline:none}.at-node .at-card{fill:#fff;stroke:#cadbd7;stroke-width:1.25;filter:url(#at-shadow)}.at-node.kind-system-focus .at-card,.at-node.kind-target .at-card{fill:#173c42;stroke:#173c42}.at-node.kind-signal .at-card{fill:#edf8f2;stroke:#95bca9}.at-node.kind-circuit .at-card{fill:#f3f1fa;stroke:#c5bbdb}.at-node.kind-effector .at-card{fill:#f6f8fa;stroke:#cad4dd}.at-node.kind-sleep .at-card{fill:#edf4ff;stroke:#85a9e0}.at-node.kind-wake .at-card{fill:#fff1e2;stroke:#efaa64}.at-node.kind-structure .at-card{fill:#f6f1e8;stroke:#c9b68c}.at-node.kind-drug .at-card{fill:#f5f7f8;stroke:#9cb1ba}.at-node text{font-family:'Segoe UI','Microsoft YaHei',sans-serif;fill:#16363d;pointer-events:none}.at-node .at-kind{font-size:9px;font-weight:700;letter-spacing:.8px;fill:#617b80}.at-node .at-name{font-size:16px;font-weight:650}.at-node.kind-system-focus text,.at-node.kind-target text{fill:#fff}.at-node.kind-system-focus .at-kind,.at-node.kind-target .at-kind{fill:#b3d4d2}.at-node .at-cross{fill:#7b639c;font-size:10px}.at-node .at-dot{fill:#a8bdb6}.at-node.kind-target .at-dot{fill:#8bc9b9}.at-node:hover .at-card,.at-node:focus .at-card,.at-node.is-active .at-card{stroke:#198578;stroke-width:3}.at-edge{cursor:pointer;outline:none}.at-edge .at-line{stroke:#688d82;stroke-width:1.8;fill:none}.at-edge.sign-inhibition .at-line{stroke:#58778f}.at-edge.sign-context .at-line{stroke:#9a9da8;stroke-dasharray:5 4}.at-pharmacology .at-line{stroke-width:3!important}.at-pharmacology circle{fill:#e8f1fb;stroke:#7995b6}.at-edge .at-action-bg{fill:#fff;stroke:#d3dfdc}.at-edge .at-action{font-size:10px;fill:#244f59}.at-edge .at-hit{stroke:transparent;stroke-width:18;fill:none}.at-edge circle{fill:#fff;stroke:#c6d8d2;stroke-width:1}.at-edge text{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:9px;font-weight:700;fill:#476c63;pointer-events:none}.at-edge:hover .at-line,.at-edge:focus .at-line,.at-edge.is-active .at-line{stroke:#138678;stroke-width:3.2}.at-edge.is-active circle{fill:#d6f0e7;stroke:#198578}.at-dim{opacity:.18}.at-node.is-active{opacity:1}.at-figlabel{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:11px;font-weight:600;letter-spacing:1px;fill:#668078}.at-caption{font-family:'Segoe UI','Microsoft YaHei',sans-serif;font-size:10px;fill:#607a75}`;
function atlasActionLabel(e){const t=e.actionLabel||e.relation;return ({'Positive allosteric modulation':'PAM','Positive allosteric modulation (PAM)':'PAM','Receptor antagonism':'Antagonist','Receptor agonism':'Agonist'})[local(t)]||t;}
function atlasActionTag(e){const lines=atlasWrap(atlasActionLabel(e),100,10),height=lines.length*12+12,top=e.my-16-height;return '<rect class="at-action-bg" x="'+(e.mx-55)+'" y="'+top+'" width="110" height="'+height+'" rx="6"/>'+lines.map((line,i)=>'<text class="at-action" x="'+e.mx+'" y="'+(top+14+i*12)+'" text-anchor="middle">'+esc(line)+'</text>').join('');}
function atlasSvg(graph) {
  const ix=Object.fromEntries(graph.nodes.map(n=>[n.id,n]));
  const nodes=graph.nodes.map(n=>{
    const lines=n.titleLines||atlasWrap(n.title,n.w-30,16).slice(0,4),start=n.y+48;
    return '<g class="at-node kind-'+n.kind+'" data-at-node="'+n.id+'" role="button" tabindex="0" aria-label="'+esc(n.title)+'"><title>'+esc(n.title)+'</title><rect class="at-card" x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="13"/><circle class="at-dot" cx="'+(n.x+17)+'" cy="'+(n.y+18)+'" r="3"/><text class="at-kind" x="'+(n.x+27)+'" y="'+(n.y+21)+'">'+esc(atlasTypes[n.kind]||atlasTypes.effector)+'</text>'+lines.map((line,i)=>'<text class="at-name" x="'+(n.x+16)+'" y="'+(start+i*19)+'">'+esc(line)+'</text>').join('')+(n.systemLink?'<text class="at-cross" x="'+(n.x+16)+'" y="'+(n.y+n.h-12)+'">↗ '+esc(systems.find(s=>s.id===n.systemLink)?.title||'')+'</text>':'')+'</g>';
  }).join('');
  const edges=graph.edges.map(e=>'<g class="at-edge sign-'+e.sign+(e.pharmacology||e.drugAction?' at-pharmacology':'')+'" data-at-edge="'+e.id+'" tabindex="0" role="button" aria-label="'+esc(local(ix[e.from].title)+(e.sign==='inhibition'?' ⊣ ':e.sign==='context'?' ┄ ':' → ')+local(ix[e.to].title)+': '+local(e.relation))+'"><title>'+esc(e.relation)+'</title><path class="at-hit" d="'+e.path+'"/><path class="at-line" d="'+e.path+'"'+(e.sign==='context'?'':' marker-end="url(#at-'+(e.sign==='inhibition'?'bar':'arrow')+')"')+'/><circle cx="'+e.mx+'" cy="'+e.my+'" r="10"/><text x="'+e.mx+'" y="'+(e.my+3.2)+'" text-anchor="middle">'+e.number+'</text>'+(e.pharmacology||e.drugAction?atlasActionTag(e):'')+'</g>').join('');
  const markup='<svg xmlns="http://www.w3.org/2000/svg" class="atlas-svg" width="'+graph.width+'" height="'+graph.height+'" viewBox="0 0 '+graph.width+' '+graph.height+'" role="group" aria-labelledby="at-title at-description"><title id="at-title">'+esc(graph.title)+'</title><desc id="at-description">'+esc(graph.scope)+'</desc><style>'+atlasSvgCSS+'</style><defs><filter id="at-shadow" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#1c4439" flood-opacity=".045"/></filter><pattern id="at-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle class="at-grid-dot" cx="1" cy="1" r=".6"/></pattern><marker id="at-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#688d82"/></marker><marker id="at-bar" viewBox="0 0 8 16" refX="4" refY="8" markerWidth="5" markerHeight="10" orient="auto"><path d="M4 0 V16" stroke="#58778f" stroke-width="2"/></marker></defs><rect class="at-paper" width="100%" height="100%"/><rect fill="url(#at-grid)" width="100%" height="100%"/><text class="at-figlabel" x="30" y="31">'+esc(graph.title)+' / '+esc(atlasLayers[graph.lens]||L('系统连接','System connections'))+'</text><text class="at-caption" x="30" y="53">'+say('点击编号查看原始依据 · 实验结果与机制解释分别列示','Select an edge number for its source · Experimental findings and mechanistic interpretation are distinguished')+'</text>'+edges+nodes+'</svg>';
  const prefix='at-'+(graph.system||'systems')+'-'+graph.lens;
  // Inline SVG styles share the document cascade. Avoid cross-figure filter
  // references: a hidden sibling's filter can hide visible node cards.
  return markup.replace('filter:url(#at-shadow)','filter:none').replaceAll('id="at-','id="'+prefix+'-').replaceAll('url(#at-','url(#'+prefix+'-').replace('aria-labelledby="at-title at-description"','aria-labelledby="'+prefix+'-title '+prefix+'-description"');
}
function atlasCrossGraph(system) {
  const links=pathwayAtlas.crossConnections.filter(e=>e.from===system.id||e.to===system.id);
  const neighbors=[...new Set(links.flatMap(e=>[e.from,e.to]))].filter(id=>id!==system.id);
  const center={id:system.id,title:system.title,kind:'system-focus',x:370,y:352,w:220,h:96};
  const nodes=[center,...neighbors.map((id,i)=>{const angle=i/neighbors.length*Math.PI*2-Math.PI/2;return {id,title:systems.find(s=>s.id===id).title,kind:'system',x:480+Math.cos(angle)*330-110,y:400+Math.sin(angle)*265-48,w:220,h:96};})];
  const ix=Object.fromEntries(nodes.map(n=>[n.id,n]));
  function boundary(a,b){const dx=(b.x+b.w/2)-(a.x+a.w/2),dy=(b.y+b.h/2)-(a.y+a.h/2),t=1/Math.max(Math.abs(dx)/(a.w/2+5),Math.abs(dy)/(a.h/2+5));return [a.x+a.w/2+dx*t,a.y+a.h/2+dy*t];}
  const edges=links.map((e,i)=>{const a=ix[e.from],b=ix[e.to],start=boundary(a,b),end=boundary(b,a);return {...e,sign:'context',path:`M${start[0]} ${start[1]} L${end[0]} ${end[1]}`,mx:(start[0]+end[0])/2,my:(start[1]+end[1])/2,number:String(i+1).padStart(2,'0'),relation:L('跨系统研究关联','Cross-system research association'),scope:L(e.evidence.length+' 条原始研究关系 · 查看方向与实验条件',e.evidence.length+' primary research relations · Inspect direction and experimental context')};});
  return {nodes,edges,width:960,height:800,lens:'cross',system:system.id,title:system.title,scope:L('以当前系统为中心展示有原始研究支持的联系；每条关系的作用方向在证据详情中分别解释。','Connections around the selected system are supported by primary research; the direction of each relation is specified in its evidence detail.'),selected:system.id};
}
function atlasStats(spec) {
  return '<div class="atlas-stats"><span><b>'+spec.edges.length+'</b>'+say('有来源关系','sourced relations')+'</span><span><b>'+atlasUnique(spec.edges.flatMap(e=>e.sources)).length+'</b>'+say('原始来源','primary sources')+'</span><span><b>'+spec.nodes.filter(n=>n.systemLink).length+'</b>'+say('跨系统节点','cross-system nodes')+'</span></div>';
}
function atlasOverview(system) {
  const spec=atlasSpec(system);
  return '<div class="atlas-inspector-intro"><span class="eyebrow">'+say('证据导航','EVIDENCE NAVIGATOR')+'</span><h3>'+esc(spec.title)+'</h3>'+paragraph(spec.lead)+atlasStats(spec)+'</div><div class="atlas-read-key"><p><b>→</b>'+say('激活或增强','Activation or enhancement')+'</p><p><b>⊣</b>'+say('抑制或拮抗','Inhibition or antagonism')+'</p><p><b>┄</b>'+say('关联、解剖或干预情境','Association, anatomy or intervention context')+'</p></div><p class="atlas-inspector-hint">'+say('点选编号查看关系证据；点选节点可进入靶标、药物或相关系统。','Select an edge number for evidence; select a node to open targets, drugs or a related system.')+'</p><div class="atlas-question"><span>'+say('待验证的研究问题','RESEARCH QUESTION TO TEST')+'</span><p>'+esc(spec.question)+'</p></div>';
}
function atlasEvidence(edge,system) {
  const spec=atlasSpec(system),a=spec.nodes.find(n=>n.id===edge.from),b=spec.nodes.find(n=>n.id===edge.to);
  return '<span class="eyebrow">'+say('关系证据','RELATION EVIDENCE')+' / '+esc(edge.id)+'</span><h3>'+esc(edge.relation)+'</h3><p class="atlas-evidence-route">'+esc(a?.title||edge.from)+' '+(edge.sign==='inhibition'?'⊣':edge.sign==='context'?'┄':'→')+' '+esc(b?.title||edge.to)+'</p><div class="atlas-evidence-result"><h4>'+say('研究观察','Observation')+'</h4>'+paragraph(edge.statement)+'</div><dl class="atlas-evidence-facts"><dt>'+say('物种与实验条件','Species & experimental context')+'</dt><dd>'+esc(edge.scope)+'</dd><dt>'+say('关系性质','Relation semantics')+'</dt><dd>'+esc(atlasSigns[edge.sign])+'</dd></dl><div class="atlas-boundary"><h4>'+say('结论边界','Interpretation boundary')+'</h4>'+paragraph(edge.limitation)+'</div><h4>'+say('原始依据','Primary evidence')+'</h4>'+atlasSourceList(edge.sources);
}
function atlasSourceList(sources) {
  return '<ol class="atlas-source-list">'+atlasUnique(sources).map(s=>'<li>'+ext({label:s.fullTitle||s.title||s.label,url:s.url})+(s.pmid?'<small>PMID '+esc(s.pmid)+'</small>':'')+(s.doi?'<small>DOI '+esc(s.doi)+'</small>':'')+'</li>').join('')+'</ol>';
}
function atlasNodeInfo(node,system) {
  const spec=atlasSpec(system),selected=atlasPageState.get(system.id)?.drug;
  const edges=[...new Map([...spec.edges,...(selected?atlasMolecularGraph(system,selected).edges:[])].map(e=>[e.id,e])).values()].filter(e=>e.from===node.id||e.to===node.id);
  const r=node.records?.length?null:byId[node.record];
  let out='<span class="eyebrow">'+esc(atlasTypes[node.kind]||atlasTypes.effector)+'</span><h3>'+esc(node.title)+'</h3>';
  if(node.description)out+=paragraph(node.description);
  if(r){out+=paragraph(r.description)+'<div class="actions">'+link(L('完整档案','Full record'),recordPath(r),'button');
    if(r.group==='targets')out+=link(L('结构与位点','Structures & sites'),'target/'+r.id+'/structures','button');
    out+='</div>';
    if(r.group==='targets')out+='<h4>'+say('已收录药物 / 配体','Indexed drugs / ligands')+'</h4><div class="atlas-linked-drugs">'+regPairs(system).filter(p=>p.to===r.id).map(p=>'<button data-at-drug="'+p.from+'" class="'+effectClass(p.from)+'">'+esc(byId[p.from].name)+'</button>').join('')+'</div>';
  }
  if(node.records?.length)out+='<div class="actions">'+node.records.filter(id=>byId[id]).map(id=>recLink(id,'button')).join('')+'</div>';
  if(node.systemLink)out+='<div class="atlas-system-hop">'+link(L('进入关联系统 →','Open related system →'),'regulation/'+node.systemLink,'button')+'</div>';
  out+='<h4>'+say('与该节点相连的证据','Evidence connected to this node')+'</h4><div class="atlas-related-edges">'+edges.map(e=>'<button type="button" data-at-edge="'+e.id+'"><span>'+esc(e.relation)+'</span><small>'+esc(e.scope)+'</small></button>').join('')+'</div>';
  return out;
}
function atlasCrossInfo(edge) {
  return '<span class="eyebrow">'+say('跨系统连接','CROSS-SYSTEM CONNECTION')+'</span><h3>'+esc(systems.find(s=>s.id===edge.from).title)+' · '+esc(systems.find(s=>s.id===edge.to).title)+'</h3>'+paragraph(L('以下为支持这两个系统关联的独立研究关系。请逐条查看方向、物种和干预条件。','These separate research relationships connect the two systems. Inspect each for direction, species and intervention.'))+'<div class="atlas-related-edges">'+edge.evidence.map(ref=>{const e=atlasSpec(ref.system).edges.find(e=>e.id===ref.edge);return '<button type="button" data-at-cross-evidence="'+ref.system+'/'+ref.edge+'"><span>'+esc(e.relation)+'</span><small>'+esc(e.scope)+'</small></button>';}).join('')+'</div><div class="actions">'+link(systems.find(s=>s.id===edge.from).title,'regulation/'+edge.from,'button')+link(systems.find(s=>s.id===edge.to).title,'regulation/'+edge.to,'button')+'</div>';
}
function atlasLedger(system) {
  const spec=atlasSpec(system);
  return '<details class="atlas-ledger"><summary><span>'+say('逐条关系与文献依据','Relation-by-relation evidence ledger')+'</span><b>'+spec.edges.length+' '+say('条','relations')+'</b></summary><div class="atlas-ledger-body">'+spec.edges.map((e,i)=>'<article><span class="atlas-ledger-number">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+esc(e.relation)+'</h3><p class="atlas-ledger-flow">'+esc(spec.nodes.find(n=>n.id===e.from).title)+' '+(e.sign==='inhibition'?'⊣':e.sign==='context'?'┄':'→')+' '+esc(spec.nodes.find(n=>n.id===e.to).title)+'</p>'+paragraph(e.statement)+'<p class="atlas-ledger-scope">'+esc(e.scope)+'</p><p class="atlas-ledger-limit">'+say('解释范围','Interpretation')+' · '+esc(e.limitation)+'</p>'+atlasSourceList(e.sources)+'</div></article>').join('')+'</div></details>';
}
const atlasPageState=new Map();
const atlasModeNames={all:L('同页总览','Overview'),molecular:L('分子药理','Pharmacology'),circuit:L('神经环路','Circuits'),cross:L('跨系统联系','Connections'),structural:L('PDB 结构','PDB structures'),matrix:L('药理矩阵','Assay matrix')};
const atlasLayerDescriptions={molecular:L('从所选药物的靶标作用，查看受体介导的细胞信号。','Trace the selected molecule’s target activity alongside receptor-mediated cellular signaling.'),circuit:L('按细胞类型、投射与干预条件查看睡眠–觉醒调控。','Explore sleep–wake regulation by cell type, projection and experimental intervention.'),cross:L('查看已有原始研究支持的系统联系，并逐条核对实验方向。','Explore connections supported by primary studies, with direction defined by each experiment.'),structural:L('复合物结构说明配体识别或受体耦联构象，独立于功能实验展示。','Complex structures describe ligand recognition or coupling conformations and are shown separately from functional assays.')};
function atlasAssayAction(assay){
  const a=((assay.action?.en||assay.action||'')+' '+(assay.action?.zh||'')).toLowerCase();
  const result=(zh,en,sign='context')=>({label:L(zh,en),sign});
  if(assay.sources?.length&&assay.sources.every(s=>/rcsb\.org\/structure\//.test(s.url)))return result('结构中结合','Binding in structure');
  if(/inverse agon|反向激动/.test(a))return result('反向激动','Inverse agonism','inhibition');
  if(/antagon|拮抗/.test(a))return result('受体拮抗','Receptor antagonism','inhibition');
  if(/direct.*activ|直接激活/.test(a))return result('电流增强及直接激活','Potentiation / direct activation','activation');
  if(/enhancement of gaba binding|增强 GABA 结合/i.test(a))return result('增强 GABA 结合','Enhanced GABA binding');
  if(/partial positive allosteric|部分正向/.test(a))return result('部分正向变构调节','Partial PAM','activation');
  if(/positive allosteric|正变构|正向[变别]构|\bpam\b/.test(a)||assay.sources?.some(s=>/35285894/.test(s.url)))return result('正向变构调节','Positive allosteric modulation','activation');
  if(/partial agon|部分激动/.test(a))return result('部分激动','Partial agonism','activation');
  if(/agonis|激动/.test(a))return result('受体激动','Receptor agonism','activation');
  if(/stimulates.*release|促进.*释放/.test(a))return result('促进递质释放','Promotes transmitter release');
  if(/occupancy|占有/.test(a))return result('靶标占有','Target occupancy');
  if(/bind|结合|ligand competition|配体竞争/.test(a))return result('结合证据','Binding evidence');
  if(/inhibit|block|抑制酶|抑制再摄取|再摄取抑制|摄取抑制|阻断/.test(a)&&!/inhibitory synaptic currents|synaptic inhibition/.test(a))return result('抑制作用','Inhibition','inhibition');
  if(/substrate|底物/.test(a))return result('酶 / 代谢底物','Enzyme / metabolic substrate');
  if(/potentiat|positive modulation|增强|正向调节|正调节/.test(a))return result('增强功能反应','Functional enhancement','activation');
  if(/thermal stabil|热稳定/.test(a))return result('蛋白热稳定性变化','Protein thermal stabilization');
  if(/prolongation|延长/.test(a))return result('抑制性电流延长','Prolonged inhibitory currents','activation');
  return result('药理关联','Pharmacological association');
}
function atlasAction(pair){
  if(!pair.assays.length&&pair.complexes?.length)return {label:L('结构中结合','Binding in structure'),sign:'context',metabolite:false};
  const actions=pair.assays.map(atlasAssayAction),functional=actions.filter(x=>x.sign!=='context'),chosen=functional.length?functional:actions;
  const unique=[...new Map(chosen.map(x=>[x.label.en,x])).values()];
  const action=unique.length===1?unique[0]:{label:L('多类实验证据','Multiple assay types'),sign:'context'};
  const metabolite=pair.assays.some(x=>/active[- ]metabolite|活性代谢物/i.test(JSON.stringify(x.action)));
  return {...action,metabolite};
}
function atlasPairDetail(pair){
  const action=atlasAction(pair);
  const note=action.metabolite?L('受试分子为活性代谢物；实验效价或结合数值不能直接赋予原药。','The tested entity is an active metabolite; assay potency or binding values cannot be assigned directly to the parent drug.'):L('箭头按照本组合中有功能证据的实验标注；结合、靶标占有和复合物结构本身不等同于功能激活。','An action arrow requires functional evidence in this pair. Binding, target occupancy and complex structures alone do not establish functional activation.');
  return '<div class="atlas-boundary">'+paragraph(note)+'</div>'+regEdgeDetail(pair);
}
function atlasPharmacologyPairs(system){return regPairs(system).filter(p=>p.assays.length||p.complexes.length);}
function atlasDrugChoices(system){const pairs=atlasPharmacologyPairs(system);return regEntities(system).molecules.filter(m=>pairs.some(p=>p.from===m.id));}
function atlasMolecularGraph(system,drug){
  const spec=atlasSpec(system),extra={nodes:[],edges:[]};
  if(!drug||!byId[drug])return atlasLayout(system,'molecular');
  const r=byId[drug],existing=spec.nodes.find(n=>n.record===drug),from=existing?.id||'drug-'+drug;
  if(!existing)extra.nodes.push({id:from,record:drug,title:r.name,kind:sleepWakeEffects[drug]?.direction||'drug',selectedDrug:true});
  const groups=new Map();
  for(const p of atlasPharmacologyPairs(system).filter(p=>p.from===drug)){
    let to=spec.nodes.find(n=>n.kind==='target'&&n.record===p.to&&!n.records?.length);
    if(!to){to={id:'target-'+p.to,record:p.to,title:byId[p.to].name,kind:'target'};if(!extra.nodes.some(n=>n.id===to.id))extra.nodes.push(to);}
    // A curated relation for the same molecule and target already carries its own evidence.
    if(existing&&atlasEdges(system,'molecular').some(e=>e.from===from&&e.to===to.id))continue;
    const g=groups.get(to.id)||[];g.push(p);groups.set(to.id,g);
  }
  for(const [to,pairs] of groups){const actions=pairs.map(atlasAction),same=actions.every(a=>a.sign===actions[0].sign&&local(a.label)===local(actions[0].label));
    let tested=from;
    if(actions.some(a=>a.metabolite)){
      tested='metabolite-'+drug;
      if(!extra.nodes.some(n=>n.id===tested)){
        const title=['chloral','triclofos'].includes(drug)?L('三氯乙醇（活性代谢物）','Trichloroethanol (active metabolite)'):L('受试活性代谢物','Tested active metabolite');
        extra.nodes.push({id:tested,title,kind:'drug',description:L('本节点表示实验实际测试的代谢物，不代表原药具有相同的直接靶标活性。','This node represents the metabolite actually tested, not equivalent direct target activity of the parent drug.')});
        extra.edges.push({id:'metabolism-'+drug,from,to:tested,pharmacology:true,pairs,relation:L('经活性代谢物','Via active metabolite'),sign:'context',sources:atlasUnique(pairs.flatMap(p=>p.sources)),layer:'drug'});
      }
    }
    extra.edges.push({id:'pharm-'+drug+'-'+to,from:tested,to,pharmacology:true,pairs,relation:same?actions[0].label:L('多类实验证据','Multiple assay types'),sign:same?actions[0].sign:'context',sources:atlasUnique(pairs.flatMap(p=>p.sources)),layer:'drug'});}
  const graph=atlasLayout(system,'molecular',extra);graph.selectedDrug=drug;
  for(const e of graph.edges.filter(e=>e.from===from&&!e.pharmacology)){e.drugAction=true;e.actionLabel=e.relation;}
  return graph;
}
function atlasDrugSummary(system,drug){
  if(!drug)return '<p class="atlas-no-drug">'+say('当前模块尚无已收录的药物–靶标药理关系。','No drug–target pharmacology is indexed for this module yet.')+'</p>';
  const r=byId[drug],pairs=atlasPharmacologyPairs(system).filter(p=>p.from===drug);
  return '<div class="atlas-selected-drug '+effectClass(drug)+'"><div><span class="eyebrow">'+say('当前分子','SELECTED MOLECULE')+'</span><h3>'+esc(r.name)+'</h3>'+effectBadge(drug)+'<div class="atlas-drug-actions">'+pairs.map(p=>{const a=atlasAction(p);return '<button data-at-pair="'+p.id+'"><span>'+esc(a.label)+(a.metabolite?' · '+say('活性代谢物','active metabolite'):'')+'</span><b>'+(a.sign==='inhibition'?'⊣':a.sign==='activation'?'→':'┄')+'</b><strong>'+esc(byId[p.to].name)+'</strong></button>';}).join('')+'</div></div><button class="atlas-record-button" data-at-drug="'+drug+'">'+say('药理与来源 ↗','Pharmacology & sources ↗')+'</button></div>';
}
function atlasFigure(graph,lens){
  if(!graph.edges.length)return '<p class="atlas-empty">'+say('本模块尚无独立归类的结构关系，可通过靶标档案继续查看实验结构。','No separately annotated structural relations are available in this module. Experimental structures remain accessible through target records.')+'</p>';
  return '<div class="atlas-figure-controls"><div class="atlas-display-switch" role="group" aria-label="'+say('图示或列表','Diagram or list')+'"><button data-at-display="graph">'+say('通路图 + 摘要','Diagram + findings')+'</button><button data-at-display="cards">'+say('仅看摘要','Findings only')+'</button></div><span class="atlas-figure-hint">'+say('点选连线或编号查看证据','Select an edge or number for evidence')+'</span><div class="atlas-figure-tools"><button data-at-tool="minus" aria-label="'+say('缩小','Zoom out')+'">−</button><output>100%</output><button data-at-tool="plus" aria-label="'+say('放大','Zoom in')+'">+</button><button data-at-tool="reset">'+say('重置','Reset')+'</button><button data-at-tool="svg">SVG ↓</button></div></div><div class="atlas-plot" tabindex="0" aria-label="'+esc(atlasLayers[lens])+'">'+atlasSvg(graph)+'</div>'+atlasFlowCards(graph);
}
function atlasSection(system,lens,graph,content=''){
  if(lens==='structural')return atlasStructureSection(system);
  const count=lens==='cross'?pathwayAtlas.crossConnections.filter(e=>e.from===system.id||e.to===system.id).length:graph.edges.length;
  return '<section class="atlas-layer-section" data-at-section="'+lens+'" id="atlas-section-'+lens+'"><header class="atlas-layer-heading"><div><span class="eyebrow">'+({molecular:'01 / PHARMACOLOGY',circuit:'02 / NEURAL CIRCUITS',cross:'03 / SYSTEM CONNECTIONS',structural:'04 / STRUCTURAL EVIDENCE'})[lens]+'</span><h3>'+esc(atlasLayers[lens])+'</h3><p>'+esc(atlasLayerDescriptions[lens])+'</p></div><span class="atlas-layer-count">'+count+' '+say(lens==='cross'?'组联系':'条关系',lens==='cross'?'connections':'relations')+'</span></header>'+content+(lens==='cross'?'<details class="atlas-network-overview"><summary>'+say('系统联系总览图','System-connection overview diagram')+'</summary><div class="atlas-figure" data-at-figure="cross">'+atlasFigure(graph,lens)+'</div></details>'+atlasConnectionCards(system):'<div class="atlas-figure" data-at-figure="'+lens+'">'+atlasFigure(graph,lens)+'</div>')+(lens==='structural'?'<div class="atlas-target-links">'+regEntities(system).targets.map(t=>link(local(t.name)+' · '+say('结构','Structures'),'target/'+t.id+'/structures','button')).join('')+'</div>':'')+'</section>';
}
function pathwayExplorer(system){
  const choices=atlasDrugChoices(system);let state=atlasPageState.get(system.id);
  if(!state){state={mode:'all',drug:choices[0]?.id||'',display:null};atlasPageState.set(system.id,state);}
  const spec=atlasSpec(system),selector='<div class="atlas-drug-picker"><label for="atlas-drug-select">'+say('选择药物或内源性配体','Choose a drug or endogenous ligand')+'</label><select id="atlas-drug-select">'+choices.map(m=>'<option value="'+m.id+'"'+(m.id===state.drug?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select><span>'+say('作用方式以所列实验为准；家族概览不代表药物作用于全部亚型','Actions reflect the indexed assay; target-family summaries do not imply activity at every subtype')+'</span></div><div id="atlas-drug-summary">'+atlasDrugSummary(system,state.drug)+'</div>';
  return '<section id="pathway-explorer" class="pathway-explorer atlas-workspace"><header class="atlas-feature-head"><div><span class="eyebrow">PHARMACOLOGY · CIRCUITS · STRUCTURES</span><h2>'+esc(system.title)+'</h2>'+paragraph(spec.lead)+'</div><div class="atlas-feature-number">'+String(systems.indexOf(system)+1).padStart(2,'0')+'<small>SW ATLAS</small></div></header><nav class="atlas-section-nav" aria-label="'+say('同页内容切换','Page sections')+'">'+Object.entries(atlasModeNames).map(([id,t])=>'<button data-at-mode="'+id+'" aria-pressed="'+(state.mode===id)+'">'+esc(t)+'</button>').join('')+'</nav><div class="atlas-overview-legend"><span><i class="atlas-swatch wake"></i>'+say('促觉醒相关','Wake related')+'</span><span><i class="atlas-swatch sleep"></i>'+say('促睡眠相关','Sleep related')+'</span><span><b>→</b>'+say('激活 / 增强','Activation / enhancement')+'</span><span><b>⊣</b>'+say('抑制 / 拮抗','Inhibition / antagonism')+'</span><span><b>┄</b>'+say('关联 / 实验条件','Association / experimental context')+'</span></div>'+atlasSection(system,'molecular',atlasMolecularGraph(system,state.drug),selector)+atlasSection(system,'circuit',atlasLayout(system,'circuit'))+atlasSection(system,'cross',atlasCrossGraph(system))+atlasSection(system,'structural',atlasLayout(system,'structural'))+'<section class="atlas-layer-section" data-at-section="matrix" hidden><header class="atlas-layer-heading"><div><span class="eyebrow">ASSAY-LEVEL EVIDENCE</span><h3>'+say('药物–靶标药理矩阵','Drug–target assay matrix')+'</h3><p>'+say('结合、功能与结构证据分别核对；不同实验条件下的活性数值不能直接排序。','Inspect binding, function and structure separately; activities measured under different conditions do not establish a direct ranking.')+'</p></div></header><div class="atlas-matrix-scroll">'+regMatrix(system)+'</div></section><div class="atlas-scope-note">'+esc(spec.scope)+'</div><div class="atlas-download-row"><span>'+say('细胞信号、环路干预与人体疗效按证据分别解释。','Cell signaling, circuit interventions and clinical efficacy retain their own evidence context.')+'</span><button data-at-tool="json">'+say('下载系统证据 JSON ↓','Download evidence JSON ↓')+'</button></div><dialog class="atlas-detail-dialog" id="atlas-detail-dialog" aria-label="'+say('药理与研究证据','Pharmacology and research evidence')+'"><header><span>SW ATLAS / '+say('研究证据','EVIDENCE')+'</span><button data-at-close aria-label="'+say('关闭详情','Close details')+'">×</button></header><div id="atlas-inspector" class="atlas-inspector"></div></dialog><div id="atlas-status" class="atlas-sr" aria-live="polite"></div></section>'+atlasLedger(system);
}
function mountPathwayExplorer(system){
  const root=document.getElementById('pathway-explorer');if(!root)return;
  const state=atlasPageState.get(system.id),dialog=document.getElementById('atlas-detail-dialog'),inspector=document.getElementById('atlas-inspector');
  const graphs={molecular:atlasMolecularGraph(system,state.drug),circuit:atlasLayout(system,'circuit'),cross:atlasCrossGraph(system),structural:atlasLayout(system,'structural')};
  let lastFocus=null;
  function modes(){root.querySelectorAll('[data-at-section]').forEach(el=>{el.hidden=state.mode==='all'?el.dataset.atSection==='matrix':el.dataset.atSection!==state.mode;});root.querySelectorAll('[data-at-mode]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.atMode===state.mode)));}
  function displays(){const compact=window.matchMedia?.('(max-width: 700px)').matches;const display=state.display||(compact?'cards':'graph');root.dataset.display=display;root.querySelectorAll('[data-at-display]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.atDisplay===display)));}
  function show(html,label){lastFocus=document.activeElement;inspector.innerHTML=html;inspector.scrollTop=0;if(!dialog.open){if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');}document.getElementById('atlas-status').textContent=say('已选择 ','Selected ')+local(label);}
  function close(){if(dialog.close)dialog.close();else dialog.removeAttribute('open');lastFocus?.focus?.();}
  function highlight(id,edge=false){root.querySelectorAll('g.at-node,g.at-edge').forEach(el=>el.classList.remove('is-active','at-dim'));for(const [lens,g] of Object.entries(graphs)){const figure=root.querySelector('[data-at-figure="'+lens+'"]');if(!figure)continue;const e=g.edges.find(e=>e.id===id);const ids=new Set(edge&&e?[e.from,e.to]:[id]);if(!edge)g.edges.filter(e=>e.from===id||e.to===id).forEach(e=>{ids.add(e.from);ids.add(e.to);});if(!e&&!g.nodes.some(n=>n.id===id))continue;figure.querySelectorAll('g[data-at-node]').forEach(el=>{el.classList.toggle('is-active',el.dataset.atNode===id);el.classList.toggle('at-dim',!ids.has(el.dataset.atNode));});figure.querySelectorAll('g[data-at-edge]').forEach(el=>{const e=g.edges.find(e=>e.id===el.dataset.atEdge);const active=edge?e?.id===id:e&&(e.from===id||e.to===id);el.classList.toggle('is-active',!!active);el.classList.toggle('at-dim',!active);});}}
  function openEdge(id,lens){
    if(lens==='cross'){const e=pathwayAtlas.crossConnections.find(e=>e.id===id);if(e){show(atlasCrossInfo(e),e.id);highlight(e.id,true);}return;}
    const e=Object.values(graphs).flatMap(g=>g.edges).find(e=>e.id===id)||atlasSpec(system).edges.find(e=>e.id===id);if(!e)return;
    show(e.pharmacology?e.pairs.map(atlasPairDetail).join('<hr>'):atlasEvidence(e,system),e.relation);highlight(e.id,true);
  }
  function drugChange(){state.drug=document.getElementById('atlas-drug-select').value;graphs.molecular=atlasMolecularGraph(system,state.drug);root.querySelector('[data-at-figure="molecular"]').innerHTML=atlasFigure(graphs.molecular,'molecular');document.getElementById('atlas-drug-summary').innerHTML=atlasDrugSummary(system,state.drug);root.querySelector('[data-at-section="molecular"] .atlas-layer-count').textContent=graphs.molecular.edges.length+' '+say('条关系','relations');displays();}
  function save(type,lens){let content,name,mime;if(type==='json'){content=JSON.stringify({version:pathwayAtlas.version,reviewed:pathwayAtlas.reviewed,system:atlasSpec(system)},null,2);name=system.id+'-evidence.json';mime='application/json';}else{const g=graphs[lens];if(!g)return;content=atlasSvg(g).replace('</svg>','<metadata>'+esc(JSON.stringify({system:system.id,layer:lens,drug:state.drug,reviewed:pathwayAtlas.reviewed,scope:g.scope,edges:g.edges}))+'</metadata></svg>');name=system.id+'-'+lens+'-'+locale+'.svg';mime='image/svg+xml';}const url=URL.createObjectURL(new Blob([content],{type:mime}));Object.assign(document.createElement('a'),{href:url,download:'SW_Atlas_'+name}).click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  root.addEventListener('click',event=>{const el=event.target.closest('[data-at-mode],[data-at-display],[data-at-edge],[data-at-node],[data-at-drug],[data-at-pair],[data-reg-pair],[data-at-connection],[data-at-cross-evidence],[data-at-tool],[data-at-close]');if(!el)return;
    if(el.hasAttribute('data-at-close')){close();return;}
    if(el.dataset.atMode){state.mode=el.dataset.atMode;modes();}
    else if(el.dataset.atDisplay){state.display=el.dataset.atDisplay;displays();}
    else if(el.dataset.atEdge)openEdge(el.dataset.atEdge,el.closest('[data-at-figure]')?.dataset.atFigure);
    else if(el.dataset.atConnection)openEdge(el.dataset.atConnection,'cross');
    else if(el.dataset.atCrossEvidence){const [sid,id]=el.dataset.atCrossEvidence.split('/'),sys=systems.find(s=>s.id===sid),e=atlasSpec(sys).edges.find(e=>e.id===id);show(atlasEvidence(e,sys),e.relation);}
    else if(el.dataset.atNode){const lens=el.closest('[data-at-figure]')?.dataset.atFigure,g=graphs[lens],n=g?.nodes.find(n=>n.id===el.dataset.atNode);if(n){if(lens==='cross')show(atlasOverview(systems.find(s=>s.id===n.id))+'<div class="actions">'+link(L('进入此系统','Open system'),'regulation/'+n.id,'button')+'</div>',n.title);else show(atlasNodeInfo(n,system),n.title);highlight(n.id);}}
    else if(el.dataset.atDrug){const r=byId[el.dataset.atDrug];show(regNodeDetail({id:r.id,record:r.id,title:r.name,sub:r.subtitle},system),r.name);}
    else if(el.dataset.atPair||el.dataset.regPair){const p=regPairs(system).find(p=>p.id===(el.dataset.atPair||el.dataset.regPair));if(p)show(atlasPairDetail(p),p.title);}
    else if(el.dataset.atTool){const figure=el.closest('[data-at-figure]'),lens=figure?.dataset.atFigure,action=el.dataset.atTool;if(action==='svg'||action==='json')save(action,lens);else if(figure){const svg=figure.querySelector('svg'),out=figure.querySelector('output'),old=parseInt(out.textContent)||100,z=action==='reset'?100:Math.max(60,Math.min(200,old+(action==='plus'?20:-20)));svg.style.width=z+'%';svg.style.minWidth=z<100?'0':'900px';out.textContent=z+'%';if(action==='reset')root.querySelectorAll('.is-active,.at-dim').forEach(el=>el.classList.remove('is-active','at-dim'));}}
  });
  root.addEventListener('keydown',event=>{const el=event.target.closest('g[data-at-node],g[data-at-edge]');if(el&&(event.key==='Enter'||event.key===' ')){event.preventDefault();el.dispatchEvent(new Event('click',{bubbles:true}));}});
  document.getElementById('atlas-drug-select').addEventListener('change',drugChange);dialog.addEventListener('cancel',()=>lastFocus?.focus?.());
  modes();displays();mountAtlasLibrary(root,system,state);
}
