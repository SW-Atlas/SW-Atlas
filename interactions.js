function contactMap(site, diagram) {
  const xs=diagram.atoms.map(atom=>atom[2]);
  const ys=diagram.atoms.map(atom=>atom[3]);
  const bounds=[Math.min(...xs),Math.max(...xs),Math.min(...ys),Math.max(...ys)];
  const scale=Math.min(196/(bounds[1]-bounds[0]),151/(bounds[3]-bounds[2]));
  const atoms=diagram.atoms.map(([name,element,x,y])=>({
    name,element,x:200+(x-(bounds[0]+bounds[1])/2)*scale,y:128+(y-(bounds[2]+bounds[3])/2)*scale
  }));
  const positions=Object.fromEntries(atoms.map(atom=>[atom.name,atom]));
  const contacts=site.contacts.slice(0,6).map((row,index)=>({row,index,atom:positions[row[5]]}));
  contacts.sort((a,b)=>a.atom.x-b.atom.x);
  const columns=[contacts.slice(0,3),contacts.slice(3)];
  const line=(x1,y1,x2,y2,cls)=>'<line class="'+cls+'" x1="'+x1.toFixed(2)+'" y1="'+y1.toFixed(2)+
    '" x2="'+x2.toFixed(2)+'" y2="'+y2.toFixed(2)+'"/>';
  const labels=columns.map((column,side)=>column.sort((a,b)=>a.atom.y-b.atom.y).map(({row,index,atom},i)=>{
    const x=side?318:8, y=49+i*79, anchor=side?x:x+74;
    return '<g class="map-contact'+(index===0?' is-selected':'')+'" data-map-contact="'+index+'">'+
      line(anchor,y+16,atom.x,atom.y,'map-contact-line')+
      '<circle cx="'+atom.x+'" cy="'+atom.y+'" r="6" class="map-contact-point"/>'+
      '<rect x="'+x+'" y="'+y+'" width="74" height="32" rx="7"/>'+
      '<text x="'+(x+37)+'" y="'+(y+14)+'" class="map-residue">'+esc(row[2]+' '+row[1])+'</text>'+
      '<text x="'+(x+37)+'" y="'+(y+26)+'" class="map-distance">'+row[3].toFixed(2)+' Å</text></g>';
  }).join('')).join('');
  const bonds=diagram.bonds.map(([a,b,order])=>{
    const p=atoms[a], q=atoms[b];
    const d=Math.hypot(q.x-p.x,q.y-p.y);
    const dx=(q.y-p.y)/d*2, dy=(p.x-q.x)/d*2;
    const offsets=order===1?[0]:order===2?[-1,1]:[-1.6,0,1.6];
    return offsets.map(k=>line(p.x+k*dx,p.y+k*dy,q.x+k*dx,q.y+k*dy,'map-bond')).join('');
  }).join('');
  return '<svg class="contact-map" viewBox="0 0 400 260" role="img" aria-label="'+
    esc(site.pdb+' · '+say('配体骨架与最近邻残基','Ligand diagram with nearest residues'))+'">'+labels+bonds+
    atoms.filter(a=>a.element!=='C').map(a=>'<text class="map-element element-'+a.element+'" x="'+a.x+'" y="'+a.y+
      '">'+esc(a.element)+'</text>').join('')+'</svg>';
}

function contactDetail(row) {
  const [chain,num,res,distance,receptorAtom,ligandAtom]=row;
  return '<strong>'+esc(res+num)+' <small>'+esc(say('链 ','Chain ')+chain)+'</small></strong><span>'+
    esc(receptorAtom)+' ↔ '+esc(ligandAtom)+'</span><b>'+distance.toFixed(2)+' Å</b>';
}

function interactionCard(s,site,diagram) {
  const target=byId[s.target];
  const ligand=s.ligandInstances?.[site.instance] || s.ligands?.[site.code];
  const map=diagram?'<div class="interaction-2d">'+contactMap(site,diagram)+'</div>':'';
  const asymId=ligand?.asymId || (s.code==='SUV'||s.id==='3RFM'||s.id==='6ME2'?'B':'');
  const molstar='https://www.rcsb.org/3d-view/'+s.id+
    (asymId?'?label_asym_id='+asymId+'&preset=ligandInteraction':'');
  return '<article class="complex-card"><div class="complex-title"><div><span class="eyebrow">'+esc(s.id)+'</span>'+
    '<h3>'+esc(target.name)+(ligand?' · '+esc(ligand.label):'')+'</h3></div><span class="complex-resolution">'+esc(s.resolution)+' Å</span></div>'+
    '<div class="complex-meta">'+esc(s.method)+' · '+esc(site.code)+' '+esc(site.instance)+'</div>'+
    '<div class="complex-visual"><div class="interaction-3d">'+(typeof structurePDB!=='undefined' && structurePDB[s.id]?molScene(s.id,s.code):viewer(s.id,site.id,false))+'</div>'+map+'</div>'+
    '<label class="contact-choice">'+say('查看最近邻残基','Inspect a nearest residue')+
    '<select data-contact-site="'+site.id+'">'+site.contacts.slice(0,6).map(([chain,num,res,distance],i)=>
      '<option value="'+i+'">'+esc(res+num+' · '+chain+' · '+distance.toFixed(2)+' Å')+'</option>').join('')+'</select></label>'+
    '<div class="contact-detail" aria-live="polite">'+contactDetail(site.contacts[0])+'</div>'+
    '<div class="complex-links">'+link(L('全部 '+site.contacts.length+' 个邻近残基','All '+site.contacts.length+' nearby residues'),recordPath(byId[site.id]))+
    ext(source(L('RCSB Mol* 全原子视图','RCSB Mol* full-atom view'),molstar))+'</div></article>';
}

function interactionExplorer(complexes) {
  const examples=complexes.flatMap(s=>activePockets.filter(p=>p.pdb===s.id)
    .slice(0,s.ligands || s.ligandInstances?undefined:1).map(site=>[s,site,ligandDiagrams[site.code]]));
  if (!examples.length) return '';
  return '<div class="interaction-explorer" id="interaction-explorer">'+
    '<div class="interaction-intro">'+paragraph(L('每个结构使用相同的 4.0 Å 重原子距离阈值。左列为受体整体结构，右列为二维接触图，展示最近的 6 个残基，下拉选择可定位到对应原子。','Each structure uses the same 4.0 Å heavy-atom cutoff. The left panel shows the overall receptor and the right panel the 2D contact map of the six nearest residues; the dropdown locates each atom pair.'))+
    '</div><div class="complex-grid'+(examples.length===1?' single':'')+'">'+examples.map(args=>interactionCard(...args)).join('')+'</div>'+
    paragraph(L('二维图采用统一的配体骨架。虚线表示最短重原子距离，几何邻近与氢键等相互作用类型分别判断。各图保留原 PDB 残基编号。','The 2D maps use a common ligand layout. Dashed lines represent minimum heavy-atom distances. Proximity and interaction types such as hydrogen bonds require separate interpretation. Residue numbers follow each PDB entry.'),'interaction-note')+'</div>';
}

function molScene(pdb, code, siteId) {
  return '<div class="mol-scene" data-mol-pdb="'+esc(pdb)+'" data-mol-code="'+esc(code)+'"'+(siteId?' data-mol-site="'+esc(siteId)+'"':'')+' role="img" aria-label="'+esc(pdb)+' · '+esc(say('可旋转三维结构','Rotatable 3D structure'))+'"></div>';
}

function mountMolViewers(root) {
  const lib = window.$3Dmol || window['3Dmol'];
  if (!root || !lib) return;
  root.querySelectorAll('.mol-scene').forEach(el=>{
    if (el.dataset.molReady) return;
    const pdb = structurePDB[el.dataset.molPdb];
    if (!pdb) return;
    el.dataset.molReady = 'true';
    try {
      const viewer = lib.createViewer(el, {backgroundColor:'#fbfcfd', antialias:true, orthographic:true});
      viewer.addModel(pdb, 'pdb');
      viewer.setCameraParameters({orthographic:true});
      viewer.setStyle({hetflag:false}, {cartoon:{color:'#9fb8c8', opacity:.8}});
      viewer.setStyle({resn:el.dataset.molCode}, {stick:{radius:.22, colorscheme:{C:'#2978bf',N:'#4058c6',O:'#d94f55',S:'#d4b45c'}}, sphere:{scale:.22, colorscheme:{C:'#2978bf',N:'#4058c6',O:'#d94f55',S:'#d4b45c'}}});
      viewer.setStyle({resn:'ZN'}, {sphere:{radius:.5, color:'#8a8f98'}});
      const site = el.dataset.molSite ? pocketById[el.dataset.molSite] : null;
      if (site && site.contacts && site.contacts.length) {
        viewer.setStyle({or: site.contacts.map(c=>({chain:c[0], resi:Number(c[1]), hetflag:false}))}, {stick:{radius:.14, colorscheme:{C:'#87aaa0',N:'#667fb8',O:'#c77976',S:'#d4b45c'}}});
      }
      viewer.zoomTo({hetflag:false}); viewer.zoom(0.9); viewer.render();
    } catch(e) {
      el.classList.add('mol-fallback');
      el.textContent = say('WebGL 三维视图未能启动，可打开下方 RCSB Mol* 全原子视图。','WebGL view unavailable; open the RCSB Mol* view below.');
    }
  });
}

function mountInteractionExplorer(root) {
  if (!root) return;
  for (const select of root.querySelectorAll('[data-contact-site]')) {
    select.addEventListener('change',()=>{
      const index=Number(select.value);
      const card=select.closest('.complex-card');
      const site=pocketById[select.dataset.contactSite];
      card.querySelector('.contact-detail').innerHTML=contactDetail(site.contacts[index]);
      for (const mark of card.querySelectorAll('[data-map-contact]')) mark.classList.toggle('is-selected',Number(mark.dataset.mapContact)===index);
      card.querySelector('.viewer').dispatchEvent(new CustomEvent('contact-change',{detail:index}));
    });
  }
}

function structurePanel(s, site, diagram) {
  const ligand = s.ligandInstances?.[site.instance] || s.ligands?.[site.code];
  const asymId = ligand?.asymId || (s.code==='SUV'||s.id==='3RFM'||s.id==='6ME2'?'B':'');
  const molstar = 'https://www.rcsb.org/3d-view/'+s.id+(asymId?'?label_asym_id='+asymId+'&preset=ligandInteraction':'');
  return '<div class="se-visual">'+
    '<div class="se-3d"><p class="se-caption">'+esc(say('三维结构 · 拖动旋转、滚轮缩放','3D structure · drag to rotate, scroll to zoom'))+'</p>'+
    (typeof structurePDB!=='undefined' && structurePDB[s.id] ? molScene(s.id, s.code, site.id) : viewer(s.id, site.id, false))+'</div>'+
    (diagram ? '<div class="se-2d"><p class="se-caption">'+esc(say('二维接触图 · 最近 6 个残基','2D contact map · six nearest residues'))+'</p><div class="interaction-2d">'+contactMap(site, diagram)+'</div></div>' : '')+
    '</div>'+
    '<label class="contact-choice">'+say('查看最近邻残基','Inspect a nearest residue')+
    '<select data-contact-site="'+site.id+'">'+site.contacts.slice(0,6).map(([chain,num,res,distance],i)=>
      '<option value="'+i+'">'+esc(res+num+' · '+chain+' · '+distance.toFixed(2)+' Å')+'</option>').join('')+'</select></label>'+
    '<div class="contact-detail se-callout" aria-live="polite">'+contactDetail(site.contacts[0])+'</div>'+
    '<div class="se-actions">'+link(L('全部 '+site.contacts.length+' 个邻近残基','All '+site.contacts.length+' nearby residues'),recordPath(byId[site.id]),'se-more')+
    ext(source(L('RCSB Mol* 全原子视图','RCSB Mol* full-atom view'),molstar))+'</div>';
}

function renderStructureEvidence(complexes, se) {
  const sites = complexes.flatMap(s=>activePockets.filter(p=>p.pdb===s.id)
    .slice(0, s.ligands || s.ligandInstances ? undefined : 1)
    .map(site=>({s, site, diagram: ligandDiagrams[site.code]})));
  if (!sites.length) {
    const summary = (se && se.summary)
      ? se.summary
      : say('本档案未收录该分子的实验复合物。相关受体资料可在对应靶标页查看。','No experimental complex of this molecule is indexed in this dossier. See the target page for related receptor records.');
    const intro = '<div class="se-intro"><p>'+esc(summary)+'</p>'+(se && se.sources && se.sources.length ? refline(se.sources) : '')+'</div>';
    const list = complexes.length
      ? '<h3>'+say('已收录实验结构','Indexed experimental structures')+'</h3>'+structureTable(complexes,false)
      : '';
    return '<div class="structure-evidence" id="structure-evidence">'+intro+list+'</div>';
  }
  const tabs = '<nav class="se-tabs" role="tablist" aria-label="'+esc(say('选择实验结构','Select experimental structure'))+'">'+
    sites.map((x,i)=>'<button type="button" class="se-tab'+(i===0?' is-active':'')+'" data-se-pdb="'+esc(x.s.id)+'" role="tab" aria-selected="'+(i===0?'true':'false')+'"><strong>'+esc(x.s.id)+'</strong><span>'+esc(x.s.resolution)+' Å</span></button>').join('')+'</nav>';
  const intro = '<div class="se-intro">'+
    (se && se.title ? '<h3>'+esc(se.title)+'</h3>' : '')+
    (se && se.summary ? '<p>'+esc(se.summary)+'</p>' : '')+
    '<p class="se-count">'+say('收录 '+sites.length+' 个实验结构','Indexed experimental structures: '+sites.length)+'</p>'+
    (se && se.sources ? refline(se.sources) : '')+
    '</div>';
  const panels = sites.map((x,i)=>'<div class="se-panel'+(i!==0?' is-hidden':'')+'" data-se-panel="'+esc(x.s.id)+'">'+structurePanel(x.s, x.site, x.diagram)+'</div>').join('');
  return '<div class="structure-evidence" id="structure-evidence">'+tabs+intro+panels+'</div>';
}

function mountStructureEvidence(root) {
  if (!root) return;
  const tabs = root.querySelectorAll('.se-tab');
  const panels = root.querySelectorAll('.se-panel');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const pdb = tab.dataset.sePdb;
      tabs.forEach(t=>{const on=t===tab; t.classList.toggle('is-active',on); t.setAttribute('aria-selected',on?'true':'false');});
      panels.forEach(p=>p.classList.toggle('is-hidden', p.dataset.sePanel!==pdb));
      mountMolViewers(root);
    });
  });
  root.querySelectorAll('[data-contact-site]').forEach(select=>{
    select.addEventListener('change', ()=>{
      const index = Number(select.value);
      const panel = select.closest('.se-panel');
      const site = pocketById[select.dataset.contactSite];
      panel.querySelector('.contact-detail').innerHTML = contactDetail(site.contacts[index]);
      panel.querySelectorAll('[data-map-contact]').forEach(m=>m.classList.toggle('is-selected', Number(m.dataset.mapContact)===index));
    });
  });
  mountMolViewers(root);
}
