/* SW Atlas — unified structure-evidence explorer.
   Renders every molecule's section-04 "结构证据" in the same suvorexant-pocket
   card layout (.sp-explorer): topline + PDB switch + meta + 3D/2D panels
   (口袋近景 / 受体全景 / 口袋表面) + residue inspector + full contact table +
   methods + resources. Overrides renderStructureEvidence/mountStructureEvidence
   from interactions.js (this file is loaded after it, before app.js). */

const genericPocketMounts = new Map();
function cleanupGenericExplorers(){ for(const d of [...genericPocketMounts.values()]) d(); }

const geResLabel = c => (c.res ? c.res[0] + c.res.slice(1).toLowerCase() : '') + (c.num || '');
const geLoc = v => (v && typeof v === 'object') ? local(v) : (v == null ? '' : String(v));

/* ---- 2D ligand diagram: scale RDKit coordinates into the 800x545 contact-map space ---- */
function geDiagram(diagram){
  if(!diagram || !diagram.atoms || !diagram.atoms.length) return null;
  const xs = diagram.atoms.map(a => a[2]), ys = diagram.atoms.map(a => a[3]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const w = Math.max(1e-3, maxX - minX), h = Math.max(1e-3, maxY - minY);
  const scale = Math.min(300 / w, 250 / h);
  const cx = 400, cy = 250;
  const atoms = diagram.atoms.map(a => ({ name:a[0], el:a[1], xy:[cx + (a[2] - (minX+maxX)/2) * scale, cy + (a[3] - (minY+maxY)/2) * scale] }));
  const bonds = (diagram.bonds || []).map(([ai, bi]) => atoms[ai] && atoms[bi] ? [atoms[ai].xy, atoms[bi].xy] : null).filter(Boolean);
  const atom2D = {}; for (const a of atoms) atom2D[a.name] = a.xy;
  return { atoms, bonds, atom2D };
}
function geLigandSVG(d){
  if(!d) return '';
  let s = '';
  for (const [p, q] of d.bonds) s += '<line class="ge-bond" x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'"/>';
  for (const a of d.atoms) {
    if (a.el === 'C') s += '<circle class="ge-cdot" cx="'+a.xy[0].toFixed(1)+'" cy="'+a.xy[1].toFixed(1)+'" r="1.7"/>';
    else s += '<text class="ge-element element-'+esc(a.el)+'" x="'+a.xy[0].toFixed(1)+'" y="'+a.xy[1].toFixed(1)+'">'+esc(a.el)+'</text>';
  }
  return s;
}

/* ---- 2D contact map (suvorexant .sp-contact-map style) ---- */
function geContactMap(entry, selected){
  const d = entry.diagram2D;
  if(!d) return '<div class="sp-loading">'+say('该配体暂无二维骨架图；接触残基见下方检视器与完整列表。','No 2D skeleton is available for this ligand; contact residues appear in the inspector and full list below.')+'</div>';
  const pick = entry.contacts.filter(c => d.atom2D[c.ligandAtom]).slice(0, 8);
  if(!pick.length) return '<div class="sp-loading">'+say('当前结构暂无可绘制的重原子接触。','No heavy-atom contacts are available to draw for this structure.')+'</div>';
  const sorted = [...pick].sort((a,b) => d.atom2D[a.ligandAtom][0] - d.atom2D[b.ligandAtom][0]);
  const sides = [sorted.slice(0,4), sorted.slice(4)];
  let strokes = '', labels = '';
  sides.forEach((list, side) => list.sort((a,b) => d.atom2D[a.ligandAtom][1] - d.atom2D[b.ligandAtom][1]).forEach((c, i) => {
    const p = d.atom2D[c.ligandAtom], x = side ? 644 : 12, y = 38 + i * 132, active = c.id === selected;
    strokes += '<path class="sp-contact-line'+(active?' is-active':'')+'" d="M'+(side?x:x+144)+','+(y+31)+' L'+p[0].toFixed(1)+','+p[1].toFixed(1)+'"/>';
    labels += '<g role="button" tabindex="0" data-sp-residue="'+esc(c.id)+'" aria-pressed="'+active+'" class="sp-map-residue'+(active?' is-active':'')+'"><title>'+esc(geResLabel(c)+' · '+c.receptorAtom+'–'+c.ligandAtom)+'</title><rect x="'+x+'" y="'+y+'" width="144" height="64" rx="10"/><text x="'+(x+72)+'" y="'+(y+23)+'" class="sp-map-name">'+esc(geResLabel(c))+'</text><text x="'+(x+72)+'" y="'+(y+42)+'" class="sp-map-distance">'+esc(c.chain+' · '+spDistance(c.distance))+'</text><text x="'+(x+72)+'" y="'+(y+57)+'" class="sp-map-kind">'+say('重原子接触','Heavy-atom contact')+'</text></g>';
  }));
  const sel = entry.contacts.find(c => c.id === selected);
  const hp = (sel && d.atom2D[sel.ligandAtom]) || [400, 250];
  return '<svg class="sp-contact-map" viewBox="0 0 800 545" role="group" aria-label="'+esc(entry.pdb+' · '+entry.code+' '+say('二维接触图','2D contact map'))+'"><title>'+esc(entry.pdb+' · '+entry.code)+'</title>'+strokes+'<circle class="sp-ligand-halo" cx="'+hp[0].toFixed(1)+'" cy="'+hp[1].toFixed(1)+'" r="12"/>'+entry.ligandSVG+labels+'<text class="sp-map-caption" x="400" y="532">'+esc(entry.code)+' · '+say('二维排布不代表三维距离','2D layout is not spatial distance')+'</text></svg>';
}

/* ---- selected residue detail ---- */
function geSelectedDetail(entry, selected){
  const c = entry.contacts.find(c => c.id === selected);
  if(!c) return '<p>'+say('选择一个接触残基查看原子对与距离。','Select a contact residue to inspect its atom pair and distance.')+'</p>';
  return '<div class="sp-selected-heading"><span>'+say('当前选择','SELECTED CONTACT')+'</span><strong>'+esc(geResLabel(c))+' <small>'+say('链 ','chain ')+esc(c.chain)+'</small></strong><b>'+spDistance(c.distance)+'</b></div>'+
    '<p class="sp-atom-pair">'+esc(c.chain+' '+geResLabel(c)+' '+c.receptorAtom+' · '+entry.code+' '+c.ligandAtom)+'</p>'+
    '<p>'+say('由所选实验结构坐标计算的最近重原子接触。未仅凭距离指定氢键、卤键或 π 相互作用，也不将距离作为结合能或亲和力排序。','Nearest heavy-atom contact calculated from the selected experimental structure. Distance alone is not used to assign hydrogen, halogen or π interactions, or to rank binding energy or affinity.')+'</p>';
}

/* ---- build entries for one molecule's structures (one entry per ligand pocket) ---- */
function geMakeEntry(s, site, instanceLabel){
  const code = s.code || (s.ligands ? Object.keys(s.ligands)[0] : null) || (site && site.code);
  const diagram = code ? (typeof ligandDiagrams !== 'undefined' ? ligandDiagrams[code] : null) : null;
  const d2 = diagram ? geDiagram(diagram) : null;
  const contacts = site && site.contacts ? site.contacts.map(c => {
    const [chain, num, res, distance, receptorAtom, ligandAtom] = c;
    return { id: chain + num, chain, num, res, distance, receptorAtom, ligandAtom };
  }) : [];
  const ligandInfo = s.ligands ? s.ligands[code] : (s.ligandInstances && site ? s.ligandInstances[site.instance] : null);
  const ligandAsym = ligandInfo ? ligandInfo.asymId : '';
  const instance = site ? site.instance : '';
  return {
    key: instanceLabel ? (s.id + '-' + instanceLabel) : s.id,
    pdb: s.id, code: code || '', molecule: s.molecule, target: s.target,
    targetName: geLoc(byId[s.target] && byId[s.target].name),
    compound: geLoc(byId[s.molecule] && byId[s.molecule].name),
    method: geLoc(s.method), resolution: String(s.resolution || '—'), state: geLoc(s.state),
    construct: geLoc(s.construct), chain: s.chain || '', ligandAsym, ligandInstance: instance,
    viewLabel: instanceLabel || '', contacts, diagram2D: d2, ligandSVG: d2 ? geLigandSVG(d2) : '',
    pdbText: (typeof structurePDB !== 'undefined' ? structurePDB[s.id] : null) || null,
    siteId: site ? site.id : (s.id + '-none'),
    hasModel: !!(typeof models !== 'undefined' && models[s.id])
  };
}
function geBuildEntries(complexes){
  const out = [];
  for (const s of complexes) {
    const pkts = (typeof activePockets !== 'undefined' ? activePockets : []).filter(p => p.pdb === s.id);
    if (!pkts.length) { out.push(geMakeEntry(s, null, '')); continue; }
    const multi = pkts.length > 1;
    for (const site of pkts) out.push(geMakeEntry(s, site, multi ? (site.instance || site.id) : ''));
  }
  return out;
}

/* ---- one entry's card body (inner content of .sp-explorer) ---- */
function geBody(entry, selected){
  const hasContacts = entry.contacts.length > 0;
  const has2D = hasContacts && !!entry.ligandSVG;
  const has3D = !!entry.pdbText;
  const switchBtn = e => '<button data-ge-pdb="'+esc(e.key)+'" aria-pressed="'+(e.key===entry.key)+'"><strong>'+esc(e.targetName||e.target||e.pdb)+'</strong><span>'+esc(e.pdb+(e.viewLabel?' · '+e.viewLabel:''))+'</span><span>'+esc(e.resolution)+' Å</span></button>';
  const top = '<div class="sp-topline"><div><span class="eyebrow">'+esc((entry.compound||entry.pdb).toUpperCase())+' / BINDING POCKET</span><h3>'+say('看见药物如何嵌入受体','See how the drug fits its receptor')+'</h3><p>'+say('真实实验坐标 · 三维口袋与二维接触联动 · 每条距离可追溯','Experimental coordinates · Linked 3D and 2D views · Traceable distances')+'</p></div><div class="sp-pdb-switch" role="group" aria-label="'+esc(entry.compound+' '+say('实验复合物','experimental complexes'))+'">'+entry._siblings.map(switchBtn).join('')+'</div></div>';
  const meta = '<div class="sp-meta">'+(entry.construct?'<span>'+esc(entry.construct)+'</span>':'')+(entry.method?'<span>'+esc(entry.method)+'</span>':'')+(entry.code?'<span>'+say('配体 ','Ligand ')+esc(entry.code+' '+entry.ligandInstance)+'</span>':'')+(hasContacts?'<span>'+entry.contacts.length+' '+say('个接触残基 ≤ 4.0 Å','contact residues ≤ 4.0 Å')+'</span>':'')+'</div>';
  const summary = entry._summary ? '<p class="sp-copy-context">'+esc(entry._summary)+'</p>' : '';

  if(!hasContacts){
    const note = say('该结构暂无站内坐标接触注释；实验坐标可在 RCSB 查看。','No coordinate-contact annotation is indexed for this structure; deposited coordinates are available at RCSB.');
    return top + meta + summary + '<p class="sp-copy-context">'+esc(note)+'</p>' +
      '<div class="sp-reading"><article><span>01</span><h4>'+say('结构身份','Structure identity')+'</h4><p>'+esc((entry.construct||'')+' · '+(entry.method||'')+' · '+entry.resolution+' Å')+'</p></article><article><span>02</span><h4>'+say('构象或状态','State')+'</h4><p>'+esc(entry.state||'—')+'</p></article><article><span>03</span><h4>'+say('坐标来源','Coordinates')+'</h4><p>'+say('原始坐标与验证报告见下方 RCSB 链接。','Deposited coordinates and the validation report are linked below.')+'</p></article></div>' +
      '<div class="sp-resources">'+geResources(entry)+'</div>';
  }

  const scene = has3D
    ? '<div class="sp-scene" data-ge-scene role="img" aria-label="'+esc(entry.pdb+' · '+say('可旋转的结合口袋','Rotatable binding pocket'))+'"><p class="sp-loading" role="status">'+say('正在准备实验结构…','Preparing experimental structure…')+'</p></div>'
    : (entry.hasModel && typeof viewer === 'function' ? '<div class="sp-scene sp-scene-ca">'+viewer(entry.pdb, entry.siteId)+'</div>' : '<div class="sp-scene"><p class="sp-fallback">'+say('该结构暂无站内三维模型。','No in-site 3D model is available for this structure.')+'</p></div>');
  const controls = has3D
    ? '<div class="sp-view-controls" role="group" aria-label="'+say('三维观察模式','3D view mode')+'"><button data-ge-mode="pocket" aria-pressed="true">'+say('口袋近景','Pocket')+'</button><button data-ge-mode="receptor" aria-pressed="false">'+say('受体全景','Receptor')+'</button><button data-ge-surface aria-pressed="true">'+say('口袋表面','Pocket surface')+'</button><button data-ge-reset>'+say('复位','Reset')+'</button></div>'
    : '';
  const three = '<section class="sp-panel sp-three"><header><span>01 / 3D</span><h4>'+say('药物与结合口袋','Drug & binding pocket')+'</h4></header>'+controls+scene+'<div class="sp-scene-key"><span><i class="sp-blue"></i>'+esc(entry.compound||entry.code)+'</span><span><i class="sp-green"></i>'+say('口袋残基','Pocket residues')+'</span><span><i class="sp-purple"></i>'+say('所选残基','Selected residue')+'</span></div><p class="sp-control-hint">'+say('拖动旋转 · 滚轮或双指缩放 · 点击残基可联动选择','Drag to rotate · Scroll or pinch to zoom · Click a residue to select')+'</p></section>';
  const two = '<section class="sp-panel sp-two"><header><span>02 / 2D</span><h4>'+say('代表性残基与相互作用','Selected residues & interactions')+'</h4></header><div class="sp-map-host">'+geContactMap(entry, selected)+'</div><div class="sp-map-key"><span>'+say('灰虚线：重原子接触','Gray dashes: heavy-atom contact')+'</span></div><p class="sp-control-hint">'+say('点击图中残基查看原子对；主图展示最多 8 个代表位点，完整清单见下方。','Select a residue to inspect its atom pair. Up to eight representative sites are shown; the full list is below.')+'</p></section>';
  const inspection = '<div class="sp-inspection"><label>'+say('定位接触残基','Inspect a contact residue')+'<select data-ge-select>'+[...entry.contacts].sort((a,b) => a.chain.localeCompare(b.chain) || Number(a.num) - Number(b.num)).map(c => '<option value="'+esc(c.id)+'"'+(c.id===selected?' selected':'')+'>'+esc(geResLabel(c)+' · '+c.chain+' · '+spDistance(c.distance))+'</option>').join('')+'</select></label><div class="sp-selected" aria-live="polite">'+geSelectedDetail(entry, selected)+'</div></div>';
  const reading = '<div class="sp-reading"><article><span>01</span><h4>'+say('结合口袋中的配体','Ligand in the binding pocket')+'</h4><p>'+say('该配体占据实验复合物中的结合口袋；结合姿态与其药理一致，但静态结构本身不测量信号抑制或临床疗效。','The ligand occupies the pocket of the experimental complex. The bound pose is consistent with its pharmacology, but the static structure does not itself measure signaling or clinical efficacy.')+'</p></article><article><span>02</span><h4>'+say('可追溯的重原子接触','Traceable heavy-atom contacts')+'</h4><p>'+say('每个受体残基取与配体所有重原子的最小欧氏距离，≤ 4.0 Å 纳入清单。距离不单独用于指定氢键、卤键或芳香相互作用。','Each receptor residue enters the list at the minimum Euclidean heavy-atom distance ≤ 4.0 Å to the ligand. Distance alone is not used to assign hydrogen, halogen or aromatic interactions.')+'</p></article><article><span>03</span><h4>'+say('证据边界','Evidence boundary')+'</h4><p>'+say('未进行对接、坐标优化、缺失原子补建或晶体对称扩展。距离不代表亲和力、结合能或功能重要性。','No docking, coordinate minimization, atom rebuilding or crystal-symmetry expansion is applied. Distance is not affinity, binding energy or functional importance.')+'</p></article></div>';
  const allContacts = '<details class="sp-all-contacts"><summary>'+say('查看全部 '+entry.contacts.length+' 个接触残基与原子距离','All '+entry.contacts.length+' contact residues & atom distances')+'</summary><div class="sp-table-scroll"><table><thead><tr><th>'+say('残基 · 作者链','Residue · author chain')+'</th><th>'+say('受体原子','Receptor atom')+'</th><th>'+esc(entry.code)+' '+say('原子','atom')+'</th><th>'+say('最短距离','Minimum distance')+'</th><th>'+say('证据','Evidence')+'</th></tr></thead><tbody>'+entry.contacts.map(c => '<tr><td><button data-sp-residue="'+esc(c.id)+'">'+esc(geResLabel(c)+' · '+c.chain)+'</button></td><td>'+esc(c.receptorAtom)+'</td><td>'+esc(c.ligandAtom)+'</td><td>'+spDistance(c.distance)+'</td><td><a href="https://www.rcsb.org/structure/'+esc(entry.pdb)+'" target="_blank" rel="noopener">'+say('实验坐标邻近','Coordinate proximity')+'</a></td></tr>').join('')+'</tbody></table></div></details>';
  const methods = '<details class="sp-methods"><summary>'+say('计算方法、结构构建与证据边界','Methods, construct & interpretation')+'</summary><p>'+say('使用已存档模型 1 的重原子坐标，逐残基计算与所选配体的最短欧氏距离，≤ 4.0 Å 纳入接触清单；三维表面覆盖含 5.0 Å 邻近原子的残基。保留 PDB 作者链与残基编号，未进行对接、坐标优化、缺失原子补建或晶体对称扩展。','Uses deposited model-1 heavy-atom coordinates. Residues enter the contact list at a minimum Euclidean distance ≤ 4.0 Å to the selected ligand; the 3D surface covers residues with atoms within 5.0 Å. PDB author chains and residue numbers are retained. No docking, minimization, atom rebuilding or crystal-symmetry expansion is applied.')+'</p>'+(entry.construct?'<p>'+esc(entry.construct)+'</p>':'')+'<p>'+say('二维化学骨架依据 PDB 化学组分（CCD）；三维姿态依据实验复合物。','The 2D chemistry follows the PDB chemical component (CCD); the 3D pose follows the experimental complex.')+'</p></details>';
  return top + meta + summary + '<div class="sp-panels">'+three+two+'</div>'+inspection+reading+allContacts+methods+'<div class="sp-resources">'+geResources(entry)+'</div>';
}

function geResources(entry){
  const rcsb = entry.ligandAsym ? 'https://www.rcsb.org/3d-view/'+entry.pdb+'?label_asym_id='+encodeURIComponent(entry.ligandAsym)+'&preset=ligandInteraction' : 'https://www.rcsb.org/3d-view/'+entry.pdb;
  return '<a href="'+rcsb+'" target="_blank" rel="noopener">RCSB · '+say('配体视图','Ligand view')+' ↗</a><a href="https://files.rcsb.org/download/'+entry.pdb+'.cif" target="_blank" rel="noopener">mmCIF ↓</a><button data-ge-export="tsv">'+say('接触清单 TSV ↓','Contact list TSV ↓')+'</button><button data-ge-export="svg">'+say('二维图 SVG ↓','2D map SVG ↓')+'</button>';
}

function geExport(entry, kind, root){
  const name = entry.pdb + '-' + (entry.compound || entry.code || 'structure');
  let text, type, filename;
  if (kind === 'tsv') {
    text = '﻿PDB\tAuthor_chain\tResidue\tReceptor_atom\tLigand_atom\tMin_heavy_atom_distance_A\n' + entry.contacts.map(c => [entry.pdb, c.chain, c.res + c.num, c.receptorAtom, c.ligandAtom, c.distance.toFixed(3)].join('\t')).join('\n');
    type = 'text/tab-separated-values;charset=utf-8'; filename = name + '-contacts.tsv';
  } else if (kind === 'svg') {
    const svg = root.querySelector('.sp-contact-map');
    if (!svg) return;
    const clone = svg.cloneNode(true); clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    text = new XMLSerializer().serializeToString(clone); type = 'image/svg+xml'; filename = name + '-contacts.svg';
  } else return;
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ---- 3Dmol scene (structurePDB entries) ---- */
function gePaint(entry, sv){
  const viewer = sv.viewer;
  viewer.setStyle({}, {}); viewer.removeAllLabels(); viewer.removeAllShapes();
  if (sv.mode === 'receptor') viewer.setStyle({ hetflag:false }, { cartoon:{ color:'#9fb8c8', opacity:.8 } });
  const colorScheme = { C:'#2978bf', N:'#4058c6', O:'#d94f55', S:'#d4b45c', Cl:'#44a36b', F:'#61a981' };
  viewer.setStyle({ resn: entry.code }, { stick:{ radius:.24, colorscheme:colorScheme }, sphere:{ scale:.22, colorscheme:colorScheme } });
  if (entry.contacts.length) {
    viewer.setStyle(sv.shellSel, { stick:{ radius:.14, colorscheme:{ C:'#87aaa0', N:'#667fb8', O:'#c77976', S:'#d4b45c' } } });
    if (sv.selected) {
      const c = entry.contacts.find(c => c.id === sv.selected);
      if (c) viewer.setStyle({ chain:c.chain, resi:Number(c.num), hetflag:false }, { stick:{ radius:.22, colorscheme:{ C:'#8a5bc2', N:'#5d64cc', O:'#d75f83' } } });
    }
    viewer.setClickable(sv.shellSel, true, a => sv.onSelect && sv.onSelect(a.chain + a.resi));
  }
  viewer.removeAllSurfaces();
  if (sv.surface && entry.contacts.length) viewer.addSurface('VDW', { opacity:.22, color:'#8fcbb8' }, sv.shellSel, { hetflag:false });
  if (sv.mode === 'receptor') { viewer.zoomTo({ hetflag:false }); viewer.zoom(.9); }
  else { viewer.zoomTo({ resn: entry.code }); viewer.zoom(.72); }
  viewer.render();
}
function geMount3D(root, entry, state, onSelect){
  const scene = root.querySelector('[data-ge-scene]');
  if (!scene || !entry.pdbText) return;
  const lib = window.$3Dmol || window['3Dmol'];
  if (!lib) { scene.innerHTML = '<div class="sp-fallback">'+say('当前浏览器未能启动 WebGL 三维视图。二维图与原子距离仍可使用，也可打开 RCSB 配体视图。','This browser could not initialize the WebGL view. The 2D diagram and atom distances remain available; the RCSB ligand view is linked below.')+'</div>'; return; }
  try {
    const viewer = lib.createViewer(scene, { id:'ge3d-' + entry.key + '-' + Date.now(), backgroundColor:'#fbfcfd', antialias:true, orthographic:true });
    viewer.addModel(entry.pdbText, 'pdb');
    viewer.setCameraParameters({ orthographic:true });
    const sv = { viewer, mode:'pocket', surface:true, selected:null, onSelect, shellSel:{ or: entry.contacts.map(c => ({ chain:c.chain, resi:Number(c.num), hetflag:false })) } };
    sv.paint = () => gePaint(entry, sv);
    sv.paint();
    viewer.rotate(25, 'y'); viewer.rotate(-18, 'x'); viewer.render();
    sv.home = viewer.getView().slice(4);
    const ro = new ResizeObserver(() => { viewer.resize(); viewer.render(); });
    ro.observe(scene);
    scene.dataset.geReady = '1';
    state._geState = sv; state._geRO = ro; state._geScene = scene;
  } catch (e) {
    scene.innerHTML = '<div class="sp-fallback">'+say('三维视图未能启动。','3D view could not start.')+'</div>';
  }
}

/* ---- render (top-level, replaces old renderStructureEvidence) ---- */
let geSeq = 0;
const geRegistry = new Map();

function renderStructureEvidence(complexes, se){
  const entries = geBuildEntries(complexes || []);
  if (!entries.length) {
    const summary = (se && se.summary) ? se.summary : say('本档案未收录该分子的实验复合物。相关受体资料可在对应靶标页查看。','No experimental complex of this molecule is indexed in this dossier. See the target page for related receptor records.');
    return '<div class="structure-evidence" id="structure-evidence"><div class="se-intro"><p>'+esc(summary)+'</p>'+(se && se.sources && se.sources.length ? refline(se.sources) : '')+'</div></div>';
  }
  const withContacts = entries.filter(e => e.contacts.length > 0);
  const summary = (se && se.summary) ? se.summary : '';
  let out = '<div class="structure-evidence" id="structure-evidence">';
  if (summary) out += '<p class="sp-copy-context">'+esc(summary)+'</p>';
  // 口袋 explorer 只对有坐标接触的结构（置顶，凸显「看见药物如何嵌入受体」）
  if (withContacts.length) {
    for (const e of withContacts) { e._siblings = withContacts; e._summary = summary; }
    const key = 'ge' + (++geSeq);
    geRegistry.set(key, withContacts);
    const entry = withContacts[0];
    const selected = entry.contacts[0] ? entry.contacts[0].id : null;
    out += '<section class="sp-explorer sp-generic" data-ge-root data-ge-key="'+key+'">'+geBody(entry, selected)+'</section>';
  }
  // 完整结构表（全部结构，含复合物名称与靶蛋白）
  out += '<h3 class="se-struct-list-title">'+say('已收录实验结构','Indexed experimental structures')+'</h3>'+structureEvidenceTable(complexes);
  if (se && se.sources && se.sources.length) out += '<p class="se-note">'+refline(se.sources)+'</p>';
  out += '</div>';
  return out;
}

/* ---- mount (replaces old mountStructureEvidence) ---- */
function mountStructureEvidence(rootEl){
  if (!rootEl) return;
  const root = rootEl.querySelector('[data-ge-root]');
  if (!root || root.dataset.geMounted) return;
  root.dataset.geMounted = '1';
  const key = root.dataset.geKey;
  const entries = geRegistry.get(key) || [];
  const byKey = Object.fromEntries(entries.map(e => [e.key, e]));
  let current = entries[0] || null;
  let selected = current && current.contacts[0] ? current.contacts[0].id : null;
  const st = {};

  function teardown3D(){
    if (st._geRO) { try { st._geRO.disconnect(); } catch {} st._geRO = null; }
    if (st._geState && st._geState.viewer) { try { st._geState.viewer.clear(); } catch {} }
    st._geState = null; st._geScene = null;
  }
  function onSelect(id){ setSelected(id); }
  function initScene(entry, manual){
    teardown3D();
    if (entry.pdbText) geMount3D(root, entry, st, onSelect);
    else if (manual) { const v = root.querySelector('[data-model]'); if (v && typeof drawViewer === 'function') drawViewer(v); }
  }
  function setSelected(id){
    selected = id;
    const sel = root.querySelector('[data-ge-select]'); if (sel) sel.value = id;
    const host = root.querySelector('.sp-map-host'); if (host) host.innerHTML = geContactMap(current, selected);
    const det = root.querySelector('.sp-selected'); if (det) det.innerHTML = geSelectedDetail(current, selected);
    const sv = st._geState;
    if (sv) { sv.selected = id; sv.paint(); }
  }
  function updateModeAria(){
    const sv = st._geState;
    root.querySelectorAll('[data-ge-mode]').forEach(b => b.setAttribute('aria-pressed', String(!!sv && b.dataset.geMode === sv.mode)));
    const sf = root.querySelector('[data-ge-surface]');
    if (sf) sf.setAttribute('aria-pressed', String(!!sv && sv.surface));
  }
  function rebuild(eKey){
    const entry = byKey[eKey];
    if (!entry) return;
    current = entry;
    selected = entry.contacts[0] ? entry.contacts[0].id : null;
    root.innerHTML = geBody(entry, selected);
    if (current.contacts.length) initScene(current, true);
  }

  root.addEventListener('click', e => {
    const el = e.target.closest('[data-ge-pdb],[data-ge-mode],[data-ge-surface],[data-ge-reset],[data-sp-residue],[data-ge-export]');
    if (!el || !root.contains(el)) return;
    if (el.dataset.gePdb) { rebuild(el.dataset.gePdb); return; }
    if (el.dataset.geMode) { const sv = st._geState; if (sv) { sv.mode = el.dataset.geMode; sv.paint(); } updateModeAria(); return; }
    if (el.hasAttribute('data-ge-surface')) { const sv = st._geState; if (sv) { sv.surface = !sv.surface; sv.paint(); } updateModeAria(); return; }
    if (el.hasAttribute('data-ge-reset')) { const sv = st._geState; if (sv && sv.viewer) { const v = sv.viewer.getView(); if (sv.home) v.splice(4, 4, ...sv.home); sv.paint(); } return; }
    if (el.dataset.spResidue) { setSelected(el.dataset.spResidue); return; }
    if (el.dataset.geExport) { geExport(current, el.dataset.geExport, root); return; }
  });
  root.addEventListener('change', e => { if (e.target.matches('[data-ge-select]')) setSelected(e.target.value); });

  if (current && current.contacts.length) initScene(current, false);
  const dispose = () => { teardown3D(); genericPocketMounts.delete(root); };
  genericPocketMounts.set(root, dispose);
}
