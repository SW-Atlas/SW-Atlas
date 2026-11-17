/* A coordinate-grounded Suvorexant template. Shared by the drug dossier and PDB library. */
const suvPocketMounts = new Map();
let suvPocketLibraryPromise;
let suvPocketSelection={pdb:"4S0V",selected:324};
const spResidue = c => c.resn[0]+c.resn.slice(1).toLowerCase()+c.resi;
const spPoint = p => ({x:p[0],y:p[1],z:p[2]});
const spDistance = d => Number(d).toFixed(2)+' Å';

function spContactDiagram(entry,selected){
  if(entry.multiChain)return bpDiagram(entry,selected);
  if(entry.drugId)return doraContactDiagram(entry,selected);
  const points=suvorexantPocketData.atom2D;
  const template=suvorexantPocketData.entries['4S0V'];
  const chosen=template.featured.map(n=>template.contacts.find(c=>c.resi===n));
  // Keep homologous labels in the same positions when switching receptor subtype.
  const sorted=[...chosen].sort((a,b)=>points[a.ligandAtom][0]-points[b.ligandAtom][0]);
  const sides=[sorted.slice(0,4),sorted.slice(4)];
  let strokes='',labels='';
  sides.forEach((list,side)=>list.sort((a,b)=>points[a.ligandAtom][1]-points[b.ligandAtom][1]).forEach((base,i)=>{
    const c=entry.contacts.find(c=>c.resi===entry.featured[template.featured.indexOf(base.resi)]);
    const polar=c.resi===entry.polar.resi, water=entry.waterBridge?.resi===c.resi;
    const p=points[polar||water?'O2':c.ligandAtom], x=side?644:12, y=38+i*132;
    const sx=side?x:x+144,sy=y+31, active=c.resi===selected;
    const cls=(polar?' sp-hbond':water?' sp-water':'')+(active?' is-active':'');
    if(water){
      const wx=(sx+p[0])/2,wy=sy+(p[1]-sy)*.35;
      strokes+='<path class="sp-contact-line'+cls+'" d="M'+sx+','+sy+' L'+wx+','+wy+' L'+p[0]+','+p[1]+'"/><circle class="sp-water-dot" cx="'+wx+'" cy="'+wy+'" r="13"/><text class="sp-water-text" x="'+wx+'" y="'+(wy+4)+'">W</text>';
    }else strokes+='<path class="sp-contact-line'+cls+'" d="M'+sx+','+sy+' L'+p[0]+','+p[1]+'"/>';
    labels+='<g role="button" tabindex="0" aria-label="'+spResidue(c)+' '+say('结构接触','structural contact')+'" aria-pressed="'+active+'" data-sp-residue="'+c.resi+'" class="sp-map-residue'+cls+'"><rect x="'+x+'" y="'+y+'" width="144" height="64" rx="10"/><text x="'+(x+72)+'" y="'+(y+23)+'" class="sp-map-name">'+spResidue(c)+'</text><text x="'+(x+72)+'" y="'+(y+42)+'" class="sp-map-distance">'+(water?'2.72 / 2.88 Å':spDistance(polar?entry.polar.distance:c.distance))+'</text><text x="'+(x+72)+'" y="'+(y+57)+'" class="sp-map-kind">'+(polar?say('文献氢键','Reported H bond'):water?say('经水 4025','Via water 4025'):say('重原子接触','Heavy-atom contact'))+'</text></g>';
  }));
  const contact=entry.contacts.find(c=>c.resi===selected),p=points[contact.resi===entry.polar.resi||entry.waterBridge?.resi===contact.resi?'O2':contact.ligandAtom];
  return '<svg class="sp-contact-map" viewBox="0 0 800 545" role="group" aria-label="'+entry.pdb+' · '+say('Suvorexant 二维相互作用图','Suvorexant 2D interaction diagram')+'"><title>'+entry.pdb+' · Suvorexant · '+say('实验坐标衍生接触图','Coordinate-derived contact map')+'</title>'+strokes+'<circle class="sp-ligand-halo" cx="'+p[0]+'" cy="'+p[1]+'" r="12"/>'+suvorexantPocketData.ligandSVG+labels+'<text class="sp-map-caption" x="400" y="532">SUV · '+say('保留 R 构型；二维排布不表示三维距离','R stereochemistry retained; 2D layout is not spatial distance')+'</text></svg>';
}

function spSelectedDetail(entry,resi){
  if(entry.multiChain)return bpDetail(entry,resi);
  if(entry.drugId)return doraSelectedDetail(entry,resi);
  const c=entry.contacts.find(c=>c.resi===resi),polar=resi===entry.polar.resi,bridge=entry.waterBridge?.resi===resi;
  let text=polar?say('原始结构研究报道的 Asn–羰基氢键。此处显示 N···O 重原子距离；未将氢原子位置作为实验观测。','The structural study assigns an Asn–carbonyl hydrogen bond. The measurement is an N···O heavy-atom distance; hydrogen positions are not treated as experimentally resolved.'):
    bridge?say('结构中已建模的水 4025 连接药物羰基与 His350，原始论文图示了这条水介导极性联系。','Modeled water 4025 connects the drug carbonyl with His350, consistent with the water-mediated polar contact illustrated in the original paper.'):
    say('当前复合物坐标中的最近重原子接触。未仅凭距离指定氢键、卤键或 π 相互作用，也不将距离作为结合能排名。','Nearest heavy-atom contact in this complex. Distance alone is not used to assign hydrogen, halogen or π interactions, or to rank binding energy.');
  const pair=bridge?'SUV O2 · HOH 4025 · His350 NE2':c.receptorAtom+' · SUV '+c.ligandAtom;
  const value=bridge?spDistance(entry.waterBridge.ligandWaterDistance)+' / '+spDistance(entry.waterBridge.waterReceptorDistance):spDistance(c.distance);
  return '<div class="sp-selected-heading"><span>'+say('当前选择','SELECTED CONTACT')+'</span><strong>'+spResidue(c)+' <small>'+say('链 A','chain A')+'</small></strong><b>'+value+'</b></div><p class="sp-atom-pair">'+pair+'</p><p>'+text+'</p>'+(bridge?'<small>'+say('另有直接最近接触：','Additional nearest direct contact: ')+c.receptorAtom+' · SUV '+c.ligandAtom+' · '+spDistance(c.distance)+'</small>':'');
}

function spBody(entry,selected=spDefaultResidue(entry)){
  if(entry.multiChain)return bpBody(entry,selected);
  if(entry.drugId)return doraBody(entry,selected);
  const construct=entry.pdb==='4S0V'?say('人 OX2R · PGS 融合与截短构建','Human OX2R · PGS fusion and truncation'):say('人 OX1R · PGS 融合构建 · V319I 突变','Human OX1R · PGS fusion · V319I mutation');
  return '<div class="sp-topline"><div><span class="eyebrow">SUVOREXANT / BINDING POCKET</span><h3>'+say('看见药物如何嵌入受体','See how the drug fits its receptor')+'</h3><p>'+say('三维口袋与二维接触图联动，所有距离均来自对应实验结构。','Linked 3D pockets and 2D contacts, with distances measured in the corresponding experimental structure.')+'</p></div><div class="sp-pdb-switch" role="group" aria-label="'+say('Suvorexant 复合物','Suvorexant complex')+'">'+Object.values(suvorexantPocketData.entries).map(e=>'<button data-sp-pdb="'+e.pdb+'" aria-pressed="'+(entry.pdb===e.pdb)+'"><strong>'+e.target+'</strong><span>'+e.pdb+' · '+e.resolution.toFixed(2)+' Å</span></button>').join('')+'</div></div><div class="sp-meta"><span>'+construct+'</span><span>'+say('X 射线衍射 · 配体 SUV A2001','X-ray diffraction · Ligand SUV A2001')+'</span><span>19 '+say('个接触残基 ≤ 4.0 Å','contact residues ≤ 4.0 Å')+'</span></div>'+
    '<div class="sp-panels"><section class="sp-panel sp-three"><header><span>01 / 3D</span><h4>'+say('药物与结合口袋','Drug & binding pocket')+'</h4></header><div class="sp-view-controls" role="group" aria-label="'+say('三维观察模式','3D view mode')+'"><button data-sp-mode="pocket" aria-pressed="true">'+say('口袋近景','Pocket')+'</button><button data-sp-mode="receptor" aria-pressed="false">'+say('受体全景','Receptor')+'</button><button data-sp-surface aria-pressed="true">'+say('口袋表面','Pocket surface')+'</button><button data-sp-reset>'+say('复位','Reset')+'</button></div><div class="sp-scene" data-sp-scene role="img" aria-label="'+entry.pdb+' · '+say('可旋转的 Suvorexant 结合口袋','Rotatable Suvorexant binding pocket')+'"><p class="sp-loading" role="status">'+say('正在准备实验结构…','Preparing experimental structure…')+'</p></div><div class="sp-scene-key"><span><i class="sp-blue"></i>Suvorexant</span><span><i class="sp-green"></i>'+say('口袋残基','Pocket residues')+'</span><span><i class="sp-purple"></i>'+say('所选残基','Selected residue')+'</span>'+(entry.waterBridge?'<span><i class="sp-water-key"></i>'+say('结构水','Modeled water')+'</span>':'')+'</div><p class="sp-control-hint">'+say('拖动旋转 · 滚轮或双指缩放 · 点击残基可联动选择','Drag to rotate · Scroll or pinch to zoom · Click a residue to select')+'</p></section>'+
    '<section class="sp-panel sp-two"><header><span>02 / 2D</span><h4>'+say('代表性残基与相互作用','Selected residues & interactions')+'</h4></header><div class="sp-map-host">'+spContactDiagram(entry,selected)+'</div><div class="sp-map-key"><span class="sp-hbond-key">'+say('蓝线：文献报道氢键','Blue: literature-assigned H bond')+'</span><span>'+say('灰虚线：重原子接触','Gray dashes: heavy-atom contact')+'</span>'+(entry.waterBridge?'<span class="sp-water-label">'+say('W：已建模水桥','W: modeled water bridge')+'</span>':'')+'</div><p class="sp-control-hint">'+say('点击图中残基；主图选取 8 个代表性位点，完整清单见下方。','Select a residue in the map; eight sites are shown, with the full list below.')+'</p></section></div>'+
    '<div class="sp-inspection"><label>'+say('定位接触残基','Inspect a contact residue')+'<select data-sp-select>'+[...entry.contacts].sort((a,b)=>a.resi-b.resi).map(c=>'<option value="'+c.resi+'"'+(c.resi===selected?' selected':'')+'>'+spResidue(c)+' · '+spDistance(c.distance)+'</option>').join('')+'</select></label><div class="sp-selected" aria-live="polite">'+spSelectedDetail(entry,selected)+'</div></div>'+
    '<div class="sp-reading"><article><span>01</span><h4>'+say('正构口袋中的拮抗剂','Antagonist in the orthosteric pocket')+'</h4><p>'+say('Suvorexant 占据食欲素受体的正构结合口袋。复合物中的结合姿态与其受体拮抗药理相一致；静态结构本身不测量信号抑制或临床疗效。','Suvorexant occupies the orexin receptor orthosteric pocket. The bound pose is consistent with its antagonist pharmacology; the static structure does not itself measure signaling inhibition or clinical efficacy.')+'</p></article><article><span>02</span><h4>'+say('可追溯的极性锚点','A traceable polar anchor')+'</h4><p>Asn'+entry.polar.resi+' ND2 · SUV O2 = '+spDistance(entry.polar.distance)+say('。','. ')+say('氢键解释来自结构文献，距离由本条目坐标重新计算。','The hydrogen-bond interpretation follows the structural literature; the distance is recalculated from this entry.')+'</p></article><article><span>03</span><h4>'+say('水分子按条目分别判断','Water is assessed entry by entry')+'</h4><p>'+(entry.waterBridge?say('4S0V 中水 4025 连接 SUV O2 与 His350 NE2，两段距离分别为 2.72 和 2.88 Å。','In 4S0V, water 4025 bridges SUV O2 and His350 NE2, at 2.72 and 2.88 Å, respectively.'):say('4ZJ8 未建模与 4S0V 相同的近邻水桥，因此此视图不绘制该水桥；这不等于排除溶液中的水合。','4ZJ8 does not model the corresponding nearby water bridge, so it is not drawn here. This does not establish absence of hydration in solution.'))+'</p></article></div>'+
    '<details class="sp-all-contacts"><summary>'+say('查看全部 19 个接触残基与原子距离','All 19 contact residues & atom distances')+'</summary><div class="sp-table-scroll"><table><thead><tr><th>'+say('残基 · 作者链','Residue · author chain')+'</th><th>'+say('受体原子','Receptor atom')+'</th><th>SUV '+say('原子','atom')+'</th><th>'+say('最短距离','Minimum distance')+'</th><th>'+say('证据','Evidence')+'</th></tr></thead><tbody>'+entry.contacts.map(c=>'<tr><td><button data-sp-residue="'+c.resi+'">'+spResidue(c)+' · A</button></td><td>'+c.receptorAtom+'</td><td>'+c.ligandAtom+'</td><td>'+spDistance(c.distance)+'</td><td>'+say('实验坐标邻近','Deposited-coordinate proximity')+'</td></tr>').join('')+'</tbody></table></div></details>'+
    '<details class="sp-methods"><summary>'+say('计算方法、结构构建与证据边界','Methods, construct & interpretation')+'</summary><p>'+say('使用 RCSB 当前 mmCIF 的模型 1；配体为 SUV，作者链 A、残基 2001（label_asym_id B），32 个重原子、占有率均为 1.00，无备选构象。保留 PDB 作者残基编号，选择受体序列，排除 PGS 融合、标签和非目标配体。','Uses model 1 of the current RCSB mmCIF. SUV is author chain A, residue 2001 (label_asym_id B), with 32 heavy atoms, all occupancy 1.00 and no alternate conformer. Author residue numbers are retained; fusion protein, tags and unrelated ligands are excluded from the receptor display.')+'</p><p>'+say('每个受体残基取与药物所有重原子的最小欧氏距离，≤4.0 Å 纳入接触清单。半透明表面表示含 5.0 Å 邻近原子的残基表面，不是口袋体积或结合能。没有进行对接、坐标优化、缺失原子补建或晶体对称扩展。','The contact list uses the minimum Euclidean heavy-atom distance per receptor residue, with a ≤4.0 Å cutoff. The translucent surface represents residues containing atoms within 5.0 Å; it is not pocket volume or binding energy. No docking, coordinate minimization, missing-atom reconstruction or crystal-symmetry expansion is applied.')+'</p><p>'+say('二维化学骨架由 CCD SUV 生成，保留 R 构型并核对 InChIKey；三维姿态来自实验复合物。所选 8 个位点是结构展示重点，未将其他配体的突变实验移作 Suvorexant 的功能证据。','The 2D chemistry is generated from CCD SUV with R stereochemistry and InChIKey verification; the 3D pose comes from the experimental complex. The eight highlighted sites are structural selections. Mutation experiments on other ligands are not assigned to Suvorexant.')+'</p><p>'+construct+' · '+say('核对日期','Checked')+' '+suvorexantPocketData.date+'</p><code>SHA-256 · '+entry.sha256+'</code></details>'+
    '<div class="sp-resources"><a href="https://www.rcsb.org/3d-view/'+entry.pdb+'?label_asym_id=B&amp;preset=ligandInteraction" target="_blank" rel="noopener">RCSB · '+say('配体视图','Ligand view')+' ↗</a><a href="https://pubmed.ncbi.nlm.nih.gov/'+entry.pmid+'/" target="_blank" rel="noopener">'+say('原始结构论文','Primary structure paper')+' ↗</a><a href="https://files.rcsb.org/download/'+entry.pdb+'.cif" target="_blank" rel="noopener">mmCIF ↓</a><button data-sp-export="tsv">'+say('接触清单 TSV ↓','Contact list TSV ↓')+'</button><button data-sp-export="svg">'+say('二维图 SVG ↓','2D map SVG ↓')+'</button><button data-sp-export="pymol">PyMOL .pml ↓</button></div>';
}

function renderSuvorexantPocket(pdb){
  const remembered=!pdb;pdb=pdb||suvPocketSelection.pdb;const entry=suvorexantPocketData.entries[pdb],selected=remembered?suvPocketSelection.selected:entry.polar.resi;
  return '<section class="sp-explorer" data-sp-root data-sp-pdb-id="'+pdb+'" data-sp-selected="'+selected+'">'+spBody(entry,selected)+'</section>';
}

function spLoadLibrary(){
  if(window.$3Dmol||window['3Dmol'])return Promise.resolve(window.$3Dmol||window['3Dmol']);
  if(!suvPocketLibraryPromise)suvPocketLibraryPromise=new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src='vendor/3Dmol-2.5.5.min.js';
    script.onload=()=>window.$3Dmol||window['3Dmol']?resolve(window.$3Dmol||window['3Dmol']):reject(new Error('3D library unavailable'));
    script.onerror=()=>{suvPocketLibraryPromise=null;reject(new Error('3D library could not load'));};document.head.appendChild(script);
  });
  return suvPocketLibraryPromise;
}

function spExport(entry,kind,root){
  let text,type,name=(entry.key||entry.pdb)+'-'+(entry.compound||'Suvorexant');
  if(entry.drugId && kind!=='svg'){({text,type,name}=entry.multiChain?bpExportText(entry,kind):doraExportText(entry,kind));}
  else if(kind==='tsv'){
    text='\uFEFFPDB\tAuthor_chain\tResidue\tReceptor_atom\tSUV_atom\tMin_heavy_atom_distance_A\n'+entry.contacts.map(c=>[entry.pdb,'A',c.resn+c.resi,c.receptorAtom,c.ligandAtom,c.distance.toFixed(6)].join('\t')).join('\n');type='text/tab-separated-values;charset=utf-8';name+='-contacts.tsv';
  }else if(kind==='svg'){
    const svg=root.querySelector('.sp-contact-map').cloneNode(true);svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    const styles=[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules].map(r=>r.cssText).filter(t=>/sp-(map|contact-line|water-dot|water-text|ligand-halo)/.test(t));}catch{return [];}}).join('\n');
    const style=document.createElementNS('http://www.w3.org/2000/svg','style');style.textContent=styles;svg.insertBefore(style,svg.firstChild);text=new XMLSerializer().serializeToString(svg);type='image/svg+xml';name+='-contacts.svg';
  }else{
    text='# SW Atlas · '+entry.pdb+' · original RCSB coordinates\nfetch '+entry.pdb.toLowerCase()+', async=0\nremove solvent and not (chain A and resi 4025)\nselect suv, resn SUV and chain A and resi 2001\nselect receptor, polymer.protein and chain A and resi 1-400\nselect pocket, byres (receptor within 5 of suv)\nhide everything\nshow cartoon, receptor\ncolor gray80, receptor\nshow sticks, pocket or suv\ncolor teal, pocket and elem C\ncolor marine, suv and elem C\nshow spheres, suv\nset sphere_scale, 0.22, suv\ndistance asn_carbonyl, chain A and resi '+entry.polar.resi+' and name ND2, suv and name O2\n'+(entry.waterBridge?'show spheres, resn HOH and chain A and resi 4025\ncolor red, resn HOH and chain A and resi 4025\ndistance ligand_water, suv and name O2, resn HOH and chain A and resi 4025\ndistance water_his, resn HOH and chain A and resi 4025, chain A and resi 350 and name NE2\n':'')+'bg_color white\nzoom suv, 7\n';type='text/plain';name+='.pml';
  }
  const url=URL.createObjectURL(new Blob([text],{type}));Object.assign(document.createElement('a'),{href:url,download:name}).click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function mountSuvorexantPocket(root){
  if(!root||typeof document.createElement!=='function')return ()=>{};
  let entry=spEntry(root.dataset.spPdbId),selected=(entry.multiChain?root.dataset.spSelected:Number(root.dataset.spSelected))||spDefaultResidue(entry),mode='pocket',surface=true;
  let viewer=null,resize=null,observer=null,generation=0,disposed=false,viewReady=false,homeRotation=null,expandedDialog=null,releaseExpanded=null;
  const colorScheme={C:'#2978bf',N:'#4058c6',O:'#d94f55',Cl:'#44a36b',F:'#61a981'};
  function label(text,pos,color='#684b9f',size=13,offset=0){viewer.addLabel(text,{position:spPoint(pos),screenOffset:{x:0,y:offset},fontColor:color,backgroundColor:'#ffffff',backgroundOpacity:.86,borderColor:'#e4e8ed',borderThickness:1,fontSize:size,showBackground:true,inFront:true});}
  function line(a,b,color){viewer.addLine({start:spPoint(a),end:spPoint(b),color,dashed:true,linewidth:2});}
  function select(resi){
    selected=entry.multiChain?String(resi):Number(resi);spRemember(entry,selected);root.dataset.spSelected=selected;root.querySelector('[data-sp-select]').value=selected;
    root.querySelector('.sp-map-host').innerHTML=spContactDiagram(entry,selected);
    root.querySelector('.sp-selected').innerHTML=spSelectedDetail(entry,selected);
    paint(false);
  }
  function focus(resetRotation=false){
    if(!viewer)return;viewer.zoomTo(mode==='receptor'?bpReceptorSelection(entry):{resn:entry.ligandCode});viewer.zoom(mode==='receptor'?(entry.multiChain?1.25:2.6):.72);
    if(resetRotation&&homeRotation){const view=viewer.getView();viewer.setView([...view.slice(0,4),...homeRotation]);}viewer.render();
  }
  function paint(reset=false){
    if(!viewer)return;
    viewer.setStyle({},{});viewer.removeAllLabels();viewer.removeAllShapes();
    if(mode==='receptor')viewer.setStyle(bpReceptorSelection(entry),{cartoon:{color:'#98b6ab',opacity:entry.multiChain ? 0.7 : 0.35}});
    viewer.addStyle(bpShellSelection(entry),{stick:{radius:.14,colorscheme:{C:'#87aaa0',N:'#667fb8',O:'#c77976',S:'#d4b45c'}}});
    viewer.setStyle({resn:entry.ligandCode},{stick:{radius:.24,colorscheme:colorScheme},sphere:{scale:.22,colorscheme:colorScheme}});
    viewer.addStyle(bpResidueSelection(entry,selected),{stick:{radius:.22,colorscheme:{C:'#8a5bc2',N:'#5d64cc',O:'#d75f83'}}});
    const c=entry.multiChain?bpContact(entry,selected):entry.contacts.find(c=>c.resi===selected);
    if(entry.waterBridge){viewer.setStyle({resn:'HOH',resi:4025},{sphere:{radius:.34,color:'#cf5784'}});}
    const polar=(entry.interactions||[entry.polar]).find(p=>entry.multiChain?p.id===selected:p.resi===selected);
    if(polar){const color=polar.kind==='coordinate-polar'?'#398b8f':'#347cc0';line(polar.receptorXYZ,polar.ligandXYZ,color);label(spDistance(polar.distance),polar.receptorXYZ.map((x,i)=>(x+polar.ligandXYZ[i])/2),color,12);}
    else if(selected===entry.waterBridge?.resi){const w=entry.waterBridge;line(w.receptorXYZ,w.waterXYZ,'#b75f91');line(w.waterXYZ,w.ligandXYZ,'#b75f91');label('W4025',w.waterXYZ,'#aa4779',12);}
    else {line(c.receptorXYZ,c.ligandXYZ,'#937eb5');label(spDistance(c.distance),c.receptorXYZ.map((x,i)=>(x+c.ligandXYZ[i])/2),'#715293',12);}
    const residueAtoms=viewer.selectedAtoms({...bpResidueSelection(entry,selected),atom:'CA'});
    const anchor=residueAtoms[0];label(entry.multiChain?bpName(c):spResidue(c),anchor?[anchor.x,anchor.y,anchor.z]:c.receptorXYZ,'#684b9f',13,entry.drugId?22:0);
    viewer.setClickable(bpShellSelection(entry),true,a=>select(entry.multiChain?a.chain+'_'+a.resi:a.resi));
    root.querySelector('[data-sp-surface]').setAttribute('aria-pressed',String(surface));
    root.querySelectorAll('[data-sp-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.spMode===mode)));
    if(reset)focus();else viewer.render();
  }
  async function updateSurface(){
    if(!viewer)return;const localViewer=viewer,ticket=generation;
    viewer.removeAllSurfaces();if(surface){await viewer.addSurface('VDW',{opacity:.22,color:'#8fcbb8'},bpShellSelection(entry,true),bpReceptorSelection(entry));}
    if(ticket===generation&&viewer===localViewer)viewer.render();
  }
  async function initialize(){
    if(disposed||viewReady)return;viewReady=true;const ticket=++generation;
    try{
      const library=await spLoadLibrary();if(disposed||ticket!==generation||!root.isConnected)return;
      const scene=root.querySelector('[data-sp-scene]');scene.innerHTML='';
      viewer=library.createViewer(scene,{backgroundColor:'#fbfcfd',antialias:true,orthographic:true});
      viewer.addModel(entry.pdbText,'pdb');viewer.setCameraParameters({orthographic:true});
      paint(true);viewer.rotate(25,'y');viewer.rotate(-18,'x');viewer.render();homeRotation=viewer.getView().slice(4);
      scene.dataset.loaded='true';resize=new ResizeObserver(()=>{if(viewer){viewer.resize();viewer.render();}});resize.observe(scene);
      updateSurface().catch(()=>{surface=false;paint();});
    }catch(e){viewReady=false;const scene=root.querySelector('[data-sp-scene]');scene.innerHTML='<div class="sp-fallback">'+say('当前浏览器未能启动 WebGL 三维视图。二维图与原子距离仍可使用，也可打开 RCSB 配体视图。','This browser could not initialize the WebGL view. The 2D diagram and atom distances remain available; the RCSB ligand view is linked below.')+'</div>';}
  }
  function disposeViewer(){generation++;resize?.disconnect();resize=null;if(viewer){viewer.clear();viewer=null;}viewReady=false;}
  function closeExpanded(sync=true){
    if(!expandedDialog)return;
    const child=expandedDialog.querySelector('[data-sp-root]'),key=child?.dataset.spPdbId,resi=spEntry(key)?.multiChain?child?.dataset.spSelected:Number(child?.dataset.spSelected);
    releaseExpanded?.();releaseExpanded=null;expandedDialog.close();expandedDialog.remove();expandedDialog=null;
    if(sync&&key&&!disposed){disposeViewer();entry=spEntry(key);selected=resi;root.dataset.spPdbId=key;root.dataset.spSelected=selected;root.classList.remove('sp-map-fit');root.innerHTML=spBody(entry,selected);initialize();root.querySelector('[data-sp-expand]')?.focus();}
  }
  function expand(){
    if(expandedDialog||root.closest('dialog'))return;
    expandedDialog=document.createElement('dialog');expandedDialog.className='sp-expanded-dialog';
    expandedDialog.setAttribute('aria-label',(entry.compound||'Suvorexant')+' '+say('口袋放大视图','expanded pocket view'));
    expandedDialog.innerHTML='<header><strong>'+(entry.compound||'Suvorexant')+' · '+say('药物结合口袋','Drug binding pocket')+'</strong><button data-sp-expanded-close aria-label="'+say('关闭放大视图','Close expanded view')+'">×</button></header><section class="sp-explorer sp-dora" data-sp-root data-sp-pdb-id="'+spEntryKey(entry)+'" data-sp-selected="'+selected+'">'+spBody(entry,selected)+'</section>';
    document.body.appendChild(expandedDialog);expandedDialog.showModal();releaseExpanded=mountSuvorexantPocket(expandedDialog.querySelector('[data-sp-root]'));
    expandedDialog.querySelector('[data-sp-expanded-close]').addEventListener('click',()=>closeExpanded());
    expandedDialog.addEventListener('cancel',e=>{e.preventDefault();closeExpanded();});
  }
  function onClick(event){
    const el=event.target.closest('[data-sp-pdb],[data-sp-residue],[data-sp-mode],[data-sp-surface],[data-sp-reset],[data-sp-export],[data-sp-expand],[data-sp-map-fit]');if(!el||!root.contains(el))return;
    if(el.dataset.spPdb){if(el.dataset.spPdb===spEntryKey(entry))return;disposeViewer();entry=spEntry(el.dataset.spPdb);selected=spDefaultResidue(entry);mode='pocket';surface=true;root.dataset.spPdbId=spEntryKey(entry);root.dataset.spSelected=selected;spRemember(entry,selected);root.classList.remove('sp-map-fit');root.innerHTML=spBody(entry,selected);initialize();}
    else if(el.hasAttribute('data-sp-map-fit')){const fit=el.dataset.spMapFit==='true';root.classList.toggle('sp-map-fit',fit);root.querySelectorAll('[data-sp-map-fit]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.spMapFit==='true')===fit)));}
    else if(el.dataset.spResidue)select(el.dataset.spResidue);
    else if(el.dataset.spMode){mode=el.dataset.spMode;paint(true);}
    else if(el.hasAttribute('data-sp-surface')){surface=!surface;paint();updateSurface().catch(()=>{});}
    else if(el.hasAttribute('data-sp-reset'))focus(true);
    else if(el.dataset.spExport)spExport(entry,el.dataset.spExport,root);
    else if(el.hasAttribute('data-sp-expand'))expand();
  }
  function onChange(e){if(e.target.matches('[data-sp-select]'))select(e.target.value);}
  function onKey(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-sp-residue]')){e.preventDefault();select(e.target.dataset.spResidue);}}
  root.addEventListener('click',onClick);root.addEventListener('change',onChange);root.addEventListener('keydown',onKey);
  if(typeof IntersectionObserver==='function'){observer=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){initialize();observer.disconnect();}},{rootMargin:'180px'});observer.observe(root);}else initialize();
  const dispose=()=>{disposed=true;closeExpanded(false);observer?.disconnect();disposeViewer();root.removeEventListener('click',onClick);root.removeEventListener('change',onChange);root.removeEventListener('keydown',onKey);suvPocketMounts.delete(root);};
  suvPocketMounts.set(root,dispose);return dispose;
}

function cleanupSuvorexantPockets(){for(const dispose of [...suvPocketMounts.values()])dispose();}
