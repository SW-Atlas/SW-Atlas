const clinicalMasking = {
  NONE:L('开放标签','Open label'), SINGLE:L('单盲','Single masking'), DOUBLE:L('双盲','Double masking'),
  TRIPLE:L('三盲','Triple masking'), QUADRUPLE:L('四盲','Quadruple masking')
};
const clinicalAllocation = {
  RANDOMIZED:L('随机','Randomized'), NON_RANDOMIZED:L('非随机','Nonrandomized'), NA:L('单组或不适用','Single arm or not applicable')
};
const clinicalFocus = {
  index:L('代表性登记','Index registration'), additional:L('补充登记','Additional registration'),
  'dose-confirmation':L('剂量确认登记','Dose-confirmation registration')
};
const clinicalPhase = phase => clinicalPhases[phase] || phase;
const clinicalState = state => clinicalStates[state] || state;
const clinicalList = entries => '<ul>'+entries.map(entry=>'<li>'+esc(entry)+'</li>').join('')+'</ul>';
const clinicalAge = text => say(text.replace(/Years?/i,'岁').replace(/Months?/i,'月').replace(/Weeks?/i,'周').replace(/Days?/i,'天'),text);

function clinicalCardDetails(entry) {
  return '<div class="card-meta">'+(entry.kind==='combination'?'<span>'+esc(clinicalPhase(entry.phase))+'</span>':'')+
    '<span>'+esc(clinicalState(entry.status))+'</span></div>';
}
function registrationPanel(study,entry) {
  const audit=registryAudit[study.id];
  const rows = [
    [L('试验阶段','Trial phase'),clinicalPhase(study.phase)],
    [L('登记状态','Registry status'),clinicalState(audit?.status || study.status)],
    [L('登记更新日期','Registry update'),audit?.updated || study.updated],
    [L('牵头申办方','Lead sponsor'),study.sponsor],
  ];
  if (audit?.end?.type==='ACTUAL') rows.push([L('实际完成日期','Actual study completion'),audit.end.date]);
  if (study.started) rows.push([L('试验开始','Trial start'),study.started.date+' · '+
    (study.started.type==='ACTUAL'?say('实际','Actual'):say('登记预计','Registry estimate'))]);
  if (study.protocol) rows.push([L('申办方方案号','Sponsor protocol ID'),study.protocol]);
  if (study.primaryCompletion) rows.push([L('预计主要完成日期','Estimated primary completion'),study.primaryCompletion]);
  if (study.enrollment) rows.push([L('入组人数','Enrollment'),study.enrollment.count+' · '+
    (study.enrollment.type==='ACTUAL'?say('实际','Actual'):say('预计','Estimated'))]);
  if (study.age.some(Boolean)) {
    const [min,max]=study.age.map(clinicalAge);
    rows.push([L('年龄范围','Age range'),min&&max?min+' – '+max:min?min+' +':say('至 ','Up to ')+max]);
  }
  if (study.allocation) rows.push([L('分组','Allocation'),clinicalAllocation[study.allocation] || study.allocation]);
  if (study.masking) rows.push([L('盲法','Masking'),clinicalMasking[study.masking] || study.masking]);
  const endpointTable = (heading,endpoints) => endpoints?.length ?
    '<h5>'+esc(heading)+'</h5>'+table([L('指标（登记原文）','Measure (registry text)'),L('评估时间','Time frame')],
      endpoints.map(e=>[esc(e.measure),esc(e.timeFrame)])):'';
  const shared = entry.id==='sivopixant' || entry.id==='sass-001';
  return '<article class="evidence clinical-study" id="study-'+esc(study.id)+'"><div class="card-labels">'+
    pill(clinicalFocus[study.focus])+pill(study.id)+'</div><h4 lang="en">'+esc(study.title)+'</h4>'+
    fields(rows)+(study.designNote?paragraph(study.designNote,'muted'):'')+
    (study.parts?.length?table([L('阶段','Part'),L('人群','Population'),L('给药与对照','Dosing and comparator')],study.parts.map(row=>row.map(esc))):'')+
    (shared?paragraph(L('同一登记包含多个干预臂。以下指标按整个方案列出，需按原登记核对比较组和对应干预臂。',
    'This registration contains several intervention arms. The measures below describe the full protocol. Check the registry for each comparison and intervention arm.'),'muted'):'')+
    '<details class="clinical-protocol" open><summary>'+say('登记终点与干预组','Registered outcomes and intervention groups')+'</summary>'+
    endpointTable(L('登记的主要终点','Registered primary outcomes'),study.primaryOutcomes)+
    endpointTable(L('选录的睡眠或呼吸次要终点','Selected sleep or breathing secondary outcomes'),study.sleepOutcomes)+
    (study.interventions.length?'<h5>'+say('登记干预（原文）','Registered interventions (original text)')+'</h5>'+clinicalList(study.interventions):'')+'</details>'+
    (audit?registryAuditPanels(audit):'')+
    '<div class="actions">'+ext(study.reference)+((audit?.hasResults ?? study.hasResults)?
      ext(source(L('查看登记结果','View posted registry results'),study.reference.url+'?tab=results')):'')+'</div></article>';
}
function registryAuditPanels(audit) {
  const protocol=audit.arms.length?'<details class="clinical-protocol"><summary>'+
    say('试验分组与给药说明（登记原文）','Study arms and dosing (registry text)')+'</summary>'+
    table([L('组别','Arm'),L('说明','Description')],audit.arms.map(row=>row.map(esc)))+'</details>':'';
  if (!audit.hasResults) return protocol;
  const results=audit.primary.map(o=>'<h5>'+esc(o.title)+'</h5>'+
    paragraph([o.unit,o.measure,o.dispersion].filter(Boolean).join(' · '),'muted')+
    table([L('时点或类别','Time or category'),L('组别','Group'),L('登记数值','Registry value'),L('离散度','Dispersion')],o.rows.map(row=>row.map(esc)))).join('');
  const safety=audit.serious.length?'<h5>'+say('严重不良事件（登记）','Serious adverse events (registry)')+'</h5>'+
    table([L('组别','Group'),L('人数／分母','Participants / denominator')],audit.serious.map(row=>row.map(esc))):'';
  return protocol+((results || safety)?'<details class="clinical-protocol"><summary>'+
    say('查看登记发布的主要结果与安全性','View posted primary results and safety')+'</summary>'+
    paragraph(L('按整个登记方案摘录主要终点和严重不良事件。不同人群、时点和组别保留登记原文；完整比较见登记结果页。',
      'Primary outcome and serious adverse event data are shown for the registered protocol. Populations, time points and groups retain registry wording. See the results record for full comparisons.'),'muted')+
    results+safety+'</details>':'');
}
function clinicalEvidencePanels(entry,chapter) {
  return (entry.evidenceSections || []).filter(s=>s.chapter===chapter).map(s=>
    panel(s.title,fields(s.fields)+(s.table?table(s.table.columns,s.table.rows.map(row=>row.map(esc))):'')+
      (s.note?paragraph(s.note,'muted'):'')+refline(s.sources),'','h3')).join('');
}
function clinicalDossier(entry) {
  const {phase,status,condition,category,reviewed,studies,externalRegistryId,otherIndication} = entry;
  const rows = [
    [L('睡眠相关研究适应证','Sleep-related research indication'),condition],
    [L('研究方向','Research area'),clinicalConditions[category]],
    [L('所引最高相关阶段','Highest indexed relevant stage'),clinicalPhase(phase)],
    [L('已核进展','Indexed development status'),clinicalState(status)],
    [L('核对日期','Checked on'),reviewed]
  ];
  if (externalRegistryId) rows.push([L('外部登记号','External registration ID'),externalRegistryId]);
  const info = fields(rows)+
    (otherIndication?paragraph(L('该成分已有其他适应证的批准。所列临床阶段对应本页的睡眠或觉醒研究方向。',
      'This ingredient has approval for a different indication. The phase shown refers to the sleep or wake indication studied here.'),'catalog-note'):'')+
    (entry.references.length?refline(entry.references):'');
  const result = entry.publishedResult;
  return {
    info,
    studies:(result?'<article class="evidence clinical-study"><h4>'+say('已发表结果','Published result')+' · '+esc(result.study)+'</h4>'+
      paragraph(result.summary)+refline([result.reference])+'</article>':'')+
      (studies.length?paragraph(L('以下为登记的研究设计、干预及评价指标。各研究的登记状态单独保留，已发布的登记结果可从相应链接进入。',
        'Below are the registered designs, interventions and outcomes. Each study retains its own registry status and links to registry results where posted.'),'catalog-note')+
        studies.map(study=>registrationPanel(study,entry)).join(''):entry.evidenceSections?.some(s=>s.chapter==='clinical')?'':
        paragraph(L('临床进度来自本页所引的申办方披露或登记镜像。','The development stage comes from the sponsor disclosure or registry mirror linked here.'))+
        refline(entry.references))
  };
}
