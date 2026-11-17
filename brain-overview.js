// Selected regions in indexed experiments, drawn on an original sagittal orientation schematic.
const brainRegions = {
  bf:{label:L('基底前脑','Basal forebrain'),short:'BF',point:[132,138],labelAt:[77,175]},
  nac:{label:L('伏隔核','Nucleus accumbens'),short:'NAc',point:[114,112],labelAt:[57,117]},
  vp:{label:L('腹侧苍白球','Ventral pallidum'),short:'VP',point:[153,123],labelAt:[133,190]},
  poa:{label:L('视前区','Preoptic area'),short:'POA',point:[179,139],labelAt:[178,202]},
  vlpo:{label:L('腹外侧视前区','Ventrolateral preoptic area'),short:'VLPO',point:[188,149],labelAt:[213,193]},
  scn:{label:L('视交叉上核','Suprachiasmatic nucleus'),short:'SCN',point:[205,145],labelAt:[240,214]},
  lh:{label:L('下丘脑外侧区','Lateral hypothalamus'),short:'LH',point:[227,124],labelAt:[214,91]},
  dmh:{label:L('下丘脑背内侧核','Dorsomedial hypothalamus'),short:'DMH',point:[245,113],labelAt:[258,82]},
  tmn:{label:L('结节乳头核','Tuberomammillary nucleus'),short:'TMN',point:[263,141],labelAt:[280,188]},
  vta:{label:L('腹侧被盖区','Ventral tegmental area'),short:'VTA',point:[284,135],labelAt:[327,178]},
  lc:{label:L('蓝斑','Locus coeruleus'),short:'LC',point:[339,115],labelAt:[383,149]}
};
const brainEvidenceIndex = {
  orexin:{lh:'orx-lc-context',lc:'orx-lc-context',tmn:'orx-tmn'},
  adenosine:{nac:'ad-marker',vp:'ad-nac-vp'},
  gaba:{poa:'ga-poa-tmn',lh:'ga-poa-orexin',tmn:'ga-poa-tmn',vlpo:'ga-local-inhibition'},
  melatonin:{scn:'mt1-scn',dmh:'scn-dmh',lh:'dmh-orexin',vlpo:'dmh-vlpo'},
  histamine:{bf:'hrh1-bf',tmn:'ox2-tmn-hist'},
  monoamines:{lc:'mono-lc-wake'},
  gabab:{lh:'gb-orexin-edge'},
  'dopamine-receptor-system':{vta:'dop-vta-wake',nac:'dop-vta-wake'}
};

function brainSchematic(keys) {
  return '<svg class="brain-map" viewBox="0 0 450 234" role="img" aria-label="'+esc(L('小鼠脑矢状方位示意','Mouse brain sagittal orientation schematic'))+'">'+
    '<g fill="#e6ebf3" stroke="#5f7fa8" stroke-width="2">'+
    '<path d="M28 110 C36 92 52 84 77 82 C105 45 164 24 225 30 C274 31 317 44 337 67 C360 73 379 88 380 108 C382 118 395 129 417 142 L406 159 C378 153 356 145 331 151 C303 158 279 148 261 155 C232 170 208 163 177 165 C147 165 124 153 107 144 C81 150 65 137 51 135 C37 134 22 124 28 110Z"/>'+
    '<path fill="#d1e1ed" d="M327 68 C341 61 357 63 369 69 C379 65 392 74 394 84 C405 90 401 105 394 111 C382 121 364 120 351 114 C339 107 338 91 327 68Z"/>'+
    '<path fill="none" stroke="#8ba1bd" d="M96 99 C142 69 188 57 226 63 C269 69 299 78 319 100 M338 77 C357 82 371 81 384 76 M348 89 C370 96 383 94 394 88 M353 103 C368 110 380 107 392 102"/>'+
    '</g>'+keys.map(key=>{
      const {short,point:[x,y],labelAt:[tx,ty]}=brainRegions[key];
      return '<g class="brain-point"><path d="M'+x+' '+y+' L'+tx+' '+(ty-4)+'"/><circle cx="'+x+'" cy="'+y+'" r="4.8"/><text x="'+tx+'" y="'+ty+'">'+short+'</text></g>';
    }).join('')+
    '<text class="brain-orientation" x="23" y="28">'+say('前','Rostral')+'</text><text class="brain-orientation" x="425" y="28" text-anchor="end">'+say('后','Caudal')+'</text></svg>';
}

function brainEvidenceContent(systemId='') {
  const selected=systems.filter(s=>!systemId || s.id===systemId);
  const regions=[...new Set(selected.flatMap(s=>Object.keys(brainEvidenceIndex[s.id]||{})))];
  const detail=selected.map(s=>{
    const regionEdges=Object.entries(brainEvidenceIndex[s.id]||{});
    if (!regionEdges.length) return '';
    const intro=systemId?'<div class="brain-evidence-item">':'<details class="brain-evidence-item"><summary>'+esc(s.title)+'</summary>';
    const outro=systemId?'</div>':link(L('查看系统证据 →','Explore system evidence →'),'regulation/'+s.id,'brain-system-link')+'</details>';
    return intro+
      '<ul>'+regionEdges.map(([key,edgeId])=>{
        const region=brainRegions[key];
        const edge=atlasSpec(s).edges.find(e=>e.id===edgeId);
        return '<li><strong>'+esc(region.label)+' · '+region.short+'</strong><span>'+esc(edge.scope)+'</span>'+
          (edge.sources?.[0]?ext(edge.sources[0]):'')+'</li>';
      }).join('')+'</ul>'+outro;
  }).join('');
  return '<div class="brain-layout"><figure>'+brainSchematic(regions)+'<figcaption>'+
    esc(L('小鼠脑方位示意，标记为近似投影，涉及不同切面。各项保留原研究物种和实验条件。','Mouse orientation schematic with approximate projections across planes. Each item retains the original species and experimental context.'))+
    ' '+ext(source('Allen Mouse Brain Reference Atlas','https://mouse.brain-map.org/static/atlas/'))+'</figcaption></figure>'+
    '<div class="brain-evidence">'+(detail || paragraph(L('当前系统尚无映射到本图的脑区证据。可继续查看分子或临床记录。','This system has no regional evidence mapped here. Molecular or clinical records are available below.'),'muted'))+'</div></div>';
}

function brainOverview(system) {
  const selector=system?'':'<label class="brain-selector" for="brain-system">'+say('选择系统','Select a system')+
    '<select id="brain-system"><option value="">'+say('全部系统','All systems')+'</option>'+systems.map(s=>'<option value="'+esc(s.id)+'">'+esc(s.title)+'</option>').join('')+'</select></label>';
  return panel(L('脑区与系统证据','Brain regions and system evidence'),selector+
    '<div id="brain-content">'+brainEvidenceContent(system?.id)+'</div>','brain-overview');
}

function mountBrainOverview() {
  const selector=document.getElementById('brain-system');
  if (!selector) return;
  selector.addEventListener('change',()=> {
    const content=brainEvidenceContent(selector.value);
    const system=systems.find(s=>s.id===selector.value);
    document.getElementById('brain-content').innerHTML=content+(system?link(L('查看系统证据 →','Explore system evidence →'),'regulation/'+system.id,'button'):'');
  });
}

