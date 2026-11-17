/* Visible evidence summaries and a PDB library for the regulation workspace. */
function atlasReferenceChips(sources){
  return '<div class="atlas-reference-chips">'+atlasUnique(sources).map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.pmid?'PMID '+s.pmid:s.doi?'DOI '+s.doi:s.label||s.title||'Source')+' ↗</a>').join('')+'</div>';
}
function atlasVisibleObservation(edge){
  if(edge.statement)return paragraph(edge.statement,'atlas-visible-observation');
  if(edge.pharmacology)return '<div class="atlas-visible-observation">'+edge.pairs.map(p=>p.assays.slice(0,2).map(a=>'<p>'+esc(a.action)+(a.result?' · '+esc(a.result):'')+'<small>'+esc(a.system||a.assay||'')+'</small></p>').join('')).join('')+'</div>';
  return paragraph(edge.scope||edge.relation,'atlas-visible-observation');
}
function atlasFlowCards(graph){
  if(graph.lens==='cross')return '';
  const ix=Object.fromEntries(graph.nodes.map(n=>[n.id,n]));
  const ordered=[...graph.edges].sort((a,b)=>Number(!!(b.pharmacology||b.drugAction))-Number(!!(a.pharmacology||a.drugAction)));
  return '<div class="atlas-summary-heading"><strong>'+say('逐条研究摘要','Research at a glance')+'</strong><span>'+say('核心结论直接可读 · 完整依据可继续展开','Core findings are visible · Open details for the complete evidence')+'</span></div><div class="atlas-flow-cards">'+ordered.map(e=>'<article class="atlas-flow-card sign-'+e.sign+(e.pharmacology||e.drugAction?' is-pharmacology '+effectClass(graph.selectedDrug):'')+'"><span class="atlas-flow-number">'+e.number+'</span><div class="atlas-flow-content"><div class="atlas-flow-route"><strong>'+esc(ix[e.from].title)+'</strong><i>'+(e.sign==='inhibition'?'⊣':e.sign==='activation'?'→':'┄')+'</i><strong>'+esc(ix[e.to].title)+'</strong></div><h4 class="atlas-flow-relation">'+esc(e.relation)+'</h4>'+atlasVisibleObservation(e)+(e.scope?'<small class="atlas-context-line">'+esc(e.scope)+'</small>':'')+atlasReferenceChips(e.sources)+'<button class="atlas-read-more" data-at-edge="'+e.id+'">'+say('实验条件与结论边界','Experimental context & interpretation')+' ↗</button></div></article>').join('')+'</div>';
}
function atlasConnectionCards(system){
  const pairs=pathwayAtlas.crossConnections.filter(e=>e.from===system.id||e.to===system.id);
  return '<div class="atlas-connection-briefs">'+pairs.map((pair,i)=>{
    const other=systems.find(s=>s.id===(pair.from===system.id?pair.to:pair.from));
    return '<article class="atlas-connection-brief"><header><span>'+String(i+1).padStart(2,'0')+'</span><div><h4>'+esc(system.title)+' <i>·</i> '+esc(other.title)+'</h4><p>'+pair.evidence.length+' '+say('条独立研究关系；方向见各项实验',pair.evidence.length===1?'research relation; direction follows the experiment':'separate research relations; direction follows each experiment')+'</p></div></header><div class="atlas-connection-evidence">'+pair.evidence.map(ref=>{
      const spec=atlasSpec(ref.system),e=spec.edges.find(e=>e.id===ref.edge),a=spec.nodes.find(n=>n.id===e.from),b=spec.nodes.find(n=>n.id===e.to);
      return '<section><div class="atlas-connection-route"><strong>'+esc(a.title)+'</strong><b>'+(e.sign==='inhibition'?'⊣':e.sign==='activation'?'→':'┄')+'</b><strong>'+esc(b.title)+'</strong></div><h5>'+esc(e.relation)+'</h5>'+paragraph(e.statement,'atlas-visible-observation')+'<p class="atlas-context-line">'+esc(e.scope)+'</p>'+atlasReferenceChips(e.sources)+'<button class="atlas-read-more" data-at-cross-evidence="'+ref.system+'/'+ref.edge+'">'+say('查看完整证据与解释范围','Full evidence & interpretation')+' ↗</button></section>';
    }).join('')+'</div><footer><button data-at-connection="'+pair.id+'">'+say('汇总此连接的依据','Connection evidence index')+' ↗</button>'+link(L('进入关联系统','Open related system'),'regulation/'+other.id)+'</footer></article>';
  }).join('')+'</div>';
}
function atlasStructureEntries(system){return (structureGallery.systems[system.id]||[]).map(id=>structureGallery.entries[id]);}
function atlasResolution(entry){return Number.isFinite(Number(entry.resolution))?Number(entry.resolution).toFixed(2):entry.resolution;}
function atlasPdbLinks(entry){
  return '<a href="https://www.rcsb.org/structure/'+entry.id+'" target="_blank" rel="noopener noreferrer">RCSB ↗</a><a href="https://www.rcsb.org/3d-view/'+entry.id+'" target="_blank" rel="noopener noreferrer">RCSB 3D ↗</a><a href="https://files.rcsb.org/download/'+entry.id+'.cif" target="_blank" rel="noopener noreferrer">mmCIF ↓</a>';
}
function atlasStructureSection(system){
  const entries=atlasStructureEntries(system),edges=atlasEdges(system,'structural');
  return '<section class="atlas-layer-section atlas-structure-section" data-at-section="structural" id="atlas-section-structural"><header class="atlas-layer-heading"><div><span class="eyebrow">04 / PDB STRUCTURE LIBRARY</span><h3>'+say('实验结构 · PDB 图库','Experimental structures · PDB library')+'</h3><p>'+say('直接浏览相关靶标的实验结构。选择结构可在本页旋转查看，也可进入 RCSB 或下载坐标用于 PyMOL。','Browse experimental structures for the relevant targets. Rotate a structure on this page, open RCSB, or download coordinates for PyMOL.')+'</p></div><span class="atlas-layer-count">'+entries.length+' PDB</span></header><div class="atlas-structure-toolbar"><div role="group" aria-label="'+say('结构显示方式','Structure display')+'"><button data-at-library-view="gallery" aria-pressed="true">'+say('结构图库','Gallery')+'</button><button data-at-library-view="table" aria-pressed="false">'+say('PDB 清单','PDB list')+'</button></div><button data-at-pdb-export>'+say('导出清单 TSV ↓','Export list TSV ↓')+'</button></div><div class="atlas-pdb-gallery">'+entries.map(r=>{
    const target=byId[r.target],ligand=r.ligand||L('见 PDB 条目','See PDB entry'),citation=r.citation;
    return '<article class="atlas-pdb-card"><button class="atlas-pdb-preview" data-at-pdb="'+r.id+'" aria-label="'+say('查看 ','View ')+r.id+' 3D"><img src="'+r.image+'" alt="'+esc(r.id+' · '+local(target.name)+' · '+local(ligand))+'" loading="lazy" width="420" height="280"><span class="atlas-pdb-id">'+r.id+'</span><span class="atlas-pdb-rotate">'+say('旋转查看 3D','Explore in 3D')+' ↗</span></button><div class="atlas-pdb-content"><div class="atlas-pdb-tags"><span>'+esc(r.method)+'</span><span>'+esc(atlasResolution(r))+' Å</span><span>'+say(r.category==='indexed'?'已收录复合物':'靶标结构参照',r.category==='indexed'?'Indexed complex':'Target reference')+'</span></div><h4>'+esc(target.name)+' <span>·</span> '+esc(ligand)+'</h4>'+((['4S0V','4ZJ8'].includes(r.id)||doraEntryForPdb(r.id))?'<button class="sp-card-entry" data-at-pdb="'+r.id+'">'+say('药物口袋 + 二维互作','Drug pocket + 2D contacts')+' ↗</button>':'')+'<p class="atlas-pdb-state">'+esc(r.state)+'</p><p class="atlas-pdb-note">'+esc(r.construct)+'</p><div class="atlas-pdb-links">'+atlasPdbLinks(r)+(citation?.pdbx_database_id_PubMed?'<a href="https://pubmed.ncbi.nlm.nih.gov/'+citation.pdbx_database_id_PubMed+'/" target="_blank" rel="noopener noreferrer">'+say('原始论文','Primary paper')+' ↗</a>':'')+'</div></div></article>';
  }).join('')+'</div><div class="atlas-pdb-table-wrap" hidden><table class="atlas-pdb-table"><thead><tr>'+[L('PDB / 3D','PDB / 3D'),L('靶标','Target'),L('结构中的配体','Ligand in structure'),L('方法 / 分辨率','Method / resolution'),L('结构状态','Structural state'),L('资源','Resources')].map(t=>'<th>'+esc(t)+'</th>').join('')+'</tr></thead><tbody>'+entries.map(r=>'<tr><td><button data-at-pdb="'+r.id+'">'+r.id+' ↗</button></td><td>'+esc(byId[r.target].name)+'</td><td>'+esc(r.ligand||L('见条目','See entry'))+'</td><td>'+esc(r.method)+'<br>'+esc(atlasResolution(r))+' Å</td><td>'+esc(r.state)+'</td><td><div class="atlas-pdb-links">'+atlasPdbLinks(r)+'</div></td></tr>').join('')+'</tbody></table></div><p class="atlas-pdb-credit">'+say('结构图：RCSB PDB 生物组装体预览；元数据核对日期 ','Images: RCSB PDB biological assembly previews; metadata checked ')+structureGallery.reviewed+' · '+say('参照结构中的配体以卡片标注为准，不代表该靶标下所有药物均有对应复合物。','The ligand shown is specific to each entry; target references do not imply a solved complex for every associated drug.')+'</p>'+(edges.length?'<div class="atlas-structure-interpretation"><h4>'+say('这些结构支持哪些结论','What these structures establish')+'</h4>'+edges.map(e=>'<article><strong>'+esc(e.relation)+'</strong>'+paragraph(e.statement)+'<button class="atlas-read-more" data-at-cross-evidence="'+system.id+'/'+e.id+'">'+say('构建信息与解释范围','Construct details & interpretation')+' ↗</button></article>').join('')+'</div>':'')+'<dialog id="atlas-structure-dialog" class="atlas-structure-dialog" aria-label="'+say('PDB 三维结构','PDB 3D structure')+'"><header><div id="atlas-structure-heading"></div><button data-at-pdb-close aria-label="'+say('关闭三维结构','Close 3D structure')+'">×</button></header><div id="atlas-structure-player"></div><footer id="atlas-structure-footer"></footer></dialog></section>';
}
function mountAtlasLibrary(root,system,state){
  const dialog=document.getElementById('atlas-structure-dialog'),player=document.getElementById('atlas-structure-player');let focus=null,releasePocket=null;
  function display(){const section=root.querySelector('[data-at-section="structural"]'),table=state.libraryView==='table';section.querySelector('.atlas-pdb-gallery').hidden=table;section.querySelector('.atlas-pdb-table-wrap').hidden=!table;section.querySelectorAll('[data-at-library-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.atLibraryView===(table?'table':'gallery'))));}
  function close(){releasePocket?.();releasePocket=null;player.innerHTML='';if(dialog.close)dialog.close();else dialog.removeAttribute('open');focus?.focus?.();}
  root.addEventListener('click',event=>{const el=event.target.closest('[data-at-pdb],[data-at-pdb-close],[data-at-library-view],[data-at-pdb-export]');if(!el)return;
    if(el.hasAttribute('data-at-pdb-close')){close();return;}
    if(el.dataset.atLibraryView){state.libraryView=el.dataset.atLibraryView;display();return;}
    if(el.hasAttribute('data-at-pdb-export')){
      const lines=[['PDB','Target','Ligand','Method','Resolution_A','State','RCSB','Coordinates'],...atlasStructureEntries(system).map(r=>[r.id,local(byId[r.target].name),local(r.ligand||''),local(r.method),r.resolution,local(r.state),'https://www.rcsb.org/structure/'+r.id,'https://files.rcsb.org/download/'+r.id+'.cif'])];
      const url=URL.createObjectURL(new Blob(['\uFEFF'+lines.map(row=>row.map(x=>String(x).replace(/[\t\r\n]/g,' ')).join('\t')).join('\n')],{type:'text/tab-separated-values;charset=utf-8'}));Object.assign(document.createElement('a'),{href:url,download:'SW_Atlas_'+system.id+'_PDB.tsv'}).click();setTimeout(()=>URL.revokeObjectURL(url),1000);return;
    }
    const r=structureGallery.entries[el.dataset.atPdb];if(!r)return;focus=document.activeElement;
    const pocketEntry=spEntry(r.id)||doraEntryForPdb(r.id);
    if(pocketEntry){
      releasePocket?.();
      document.getElementById('atlas-structure-heading').innerHTML='<span>PDB '+r.id+' · '+say('药物与结合口袋','Drug & binding pocket')+'</span><h3>'+(pocketEntry.compound||'Suvorexant')+' · '+pocketEntry.target+'</h3>';
      player.innerHTML=pocketEntry.drugId?renderDoraPocket(pocketEntry.drugId,pocketEntry.key):renderSuvorexantPocket(r.id);document.getElementById('atlas-structure-footer').innerHTML='';
      if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');
      if(typeof document.createElement==='function')releasePocket=mountSuvorexantPocket(player.querySelector('[data-sp-root]'));
      return;
    }
    document.getElementById('atlas-structure-heading').innerHTML='<span>PDB '+r.id+' · Mol*</span><h3>'+esc(byId[r.target].name)+' · '+esc(r.ligand||r.rcsbTitle)+'</h3>';
    player.innerHTML='<iframe title="Mol* · PDB '+r.id+'" src="https://molstar.org/viewer/?pdb='+r.id.toLowerCase()+'&amp;pdb-provider=rcsb&amp;hide-controls=1&amp;collapse-left-panel=1" allow="fullscreen" allowfullscreen></iframe>';
    document.getElementById('atlas-structure-footer').innerHTML='<p>'+say('拖动旋转，滚轮缩放。三维视图需要联网；若加载较慢，可直接打开 RCSB 3D。','Drag to rotate and scroll to zoom. The 3D viewer requires an internet connection; open RCSB 3D if loading is slow.')+'</p><div class="atlas-pdb-links">'+atlasPdbLinks(r)+'</div>';
    if(dialog.showModal)dialog.showModal();else dialog.setAttribute('open','');
  });
  dialog.addEventListener('cancel',()=>{releasePocket?.();releasePocket=null;player.innerHTML='';focus?.focus?.();});display();
}
