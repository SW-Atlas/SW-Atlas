{
  const mcarthur = source('McArthur et al. · 1997','https://doi.org/10.1210/endo.138.2.4925');
  const hunt = source('Hunt et al. · 2001','https://doi.org/10.1152/ajpcell.2001.280.1.C110');
  const liu = source('Liu et al. · 1997','https://doi.org/10.1016/S0896-6273(00)80350-5');
  const dubocovich = source('Dubocovich et al. · 2005','https://doi.org/10.1111/j.1600-079X.2005.00230.x');
  const burgess2008 = source('Burgess et al. · 2008','https://doi.org/10.1113/jphysiol.2007.143180');
  const burgess2010 = source('Burgess et al. · 2010','https://doi.org/10.1210/jc.2009-2590');
  const scnLabel = L('离体 SCN','Ex vivo SCN');
  const animalLabel = L('整动物活动节律','In vivo activity rhythm');
  const humanLabel = L('人体 DLMO','Human DLMO');
  const firingPhase = L('SCN 放电节律峰值相位','Phase of peak SCN firing rhythm');
  const activityPhase = L('活动起始相位','Activity-onset phase');
  const pkc = L('PKC 磷酸转移酶活性','PKC phosphotransferase activity');
  const abstract = L('原始论文摘要','Primary article abstract');
  const timeUnknown = L('摘要未列精确 CT','Exact CT not specified in abstract');
  const exVivo = {topic:'scn',topicLabel:scnLabel,type:'paper',locator:abstract};
  const animal = {topic:'animal',topicLabel:animalLabel,type:'paper',locator:abstract,source:dubocovich,
    timing:L('CT10 给药，CT12 为活动起始参考','Dosed at CT10, with activity onset at CT12'),
    intervention:L('褪黑素 90 μg/只，皮下注射；对照为溶媒','Melatonin 90 μg/mouse subcutaneously vs vehicle'),
    outcome:activityPhase};
  const human = {topic:'human',topicLabel:humanLabel,type:'paper',status:'reported',
    outcome:L('安慰剂校正的唾液 DLMO 相移','Placebo-corrected salivary DLMO shift'),
    locator:L('原始论文摘要，Results','Primary article abstract, Results')};
  const rat = L('大鼠 SCN 脑切片','Rat SCN brain slices');
  const ratHunt = L('近交 Long–Evans 大鼠 SCN 切片','Inbred Long–Evans rat SCN slices');
  const antagonist = L('luzindole 或 4P-PDOT（1 nM–1 μM）','Luzindole or 4P-PDOT (1 nM–1 μM)');
  const ctDuskDawn = L('CT10 主观黄昏；CT23 主观黎明','CT10 subjective dusk and CT23 subjective dawn');
  const acute = L('SCN 神经元急性放电抑制','Acute inhibition of SCN neuronal firing');
  const oral = dose=>L('口服褪黑素 '+dose+' mg，每日一次，连续 3 天；安慰剂交叉对照',
    'Oral melatonin '+dose+' mg once daily for three days, placebo-controlled crossover');
  evidenceTables.circadian = {
    title:L('褪黑素–SCN 时相证据表','Melatonin–SCN circadian phase evidence'),
    description:L('按模型分列离体 SCN、整动物行为和人体 DLMO。CT 为实验昼夜时相。DLMO 为昏暗光线下褪黑素分泌起始；以各研究自己的时相基准解读。',
      'Ex vivo SCN, in vivo behavior and human DLMO are indexed separately. CT denotes experimental circadian time. DLMO is dim-light melatonin onset. Interpret timing against each study’s own reference.'),
    topicLabel:L('模型与读出层级','Model and readout level'),
    searchLabel:L('模型、时点或读出','Model, timing or readout'),
    columns:[
      ['topicLabel',L('证据层级','Evidence level')],['study',L('研究','Study')],['population',L('对象 / 条件','Model or participants')],
      ['timing',L('干预时相及基准','Intervention timing and reference')],['intervention',L('干预 / 对照','Intervention or comparator')],
      ['outcome',L('读出','Readout')],['estimate',L('结果','Result')]
    ],
    rows:[
      {...exVivo,study:'McArthur et al., 1997',source:mcarthur,status:'reported',population:rat,
        timing:L('CT10–14（开灯后 10–14 h）及 CT23–0','CT10–14 (10–14 h after lights on) and CT23–0'),
        intervention:L('褪黑素处理；摘要未列浓度','Melatonin treatment; concentration not specified in abstract'),
        outcome:firingPhase,estimate:L('处理后第 2、3 天放电峰值提前超过 3 h','Peak firing advanced by >3 h on days 2 and 3 after treatment'),
        note:L('两个敏感窗口为主观黄昏与黎明。','The sensitive windows correspond to subjective dusk and dawn.')},
      {...exVivo,study:'McArthur et al., 1997',source:mcarthur,status:'noeffect',population:rat,timing:'CT6',
        intervention:L('褪黑素处理','Melatonin treatment'),outcome:pkc,
        estimate:L('CT6 未观察到 PKC 活性升高；CT10、CT23 短时升至约 200%',
          'No PKC increase at CT6; activity transiently reached about 200% at CT10 and CT23'),
        note:L('该行记录生化读出。','This row reports a biochemical readout.')},
      {...exVivo,study:'Hunt et al., 2001',source:hunt,status:'reported',population:ratHunt,timing:ctDuskDawn,
        intervention:L('褪黑素 3 pM；加入 luzindole 或 4P-PDOT 检验阻断','Melatonin 3 pM; blockade tested with luzindole or 4P-PDOT'),
        outcome:firingPhase,estimate:L('相位提前约 4 h；两种拮抗剂均阻断','Phase advanced by about 4 h; both antagonists blocked the effect'),
        note:L('MT2 归属依据拮抗剂药理。','MT2 attribution comes from antagonist pharmacology.')},
      {...exVivo,study:'Hunt et al., 2001',source:hunt,status:'noeffect',population:ratHunt,timing:ctDuskDawn,
        intervention:antagonist,outcome:firingPhase,
        estimate:L('拮抗剂单独处理未观察到相移','No phase shift observed with antagonists alone'),
        note:L('作为阻断实验的单药对照。','Antagonist-only controls for the blockade experiment.')},
      {...exVivo,study:'Liu et al., 1997',source:liu,status:'noeffect',
        population:L('MT1（Mel1a）敲除小鼠，SCN 电生理','MT1 (Mel1a) knockout mice, SCN electrophysiology'),
        timing:timeUnknown,intervention:L('褪黑素，比较受体敲除与对照','Melatonin in receptor knockout and control mice'),
        outcome:acute,estimate:L('MT1 缺失后急性抑制消失','Acute inhibition was lost after MT1 deletion'),
        note:L('与放电节律的相位移动分列。','Acute firing is indexed separately from rhythm phase shifts.')},
      {...exVivo,study:'Liu et al., 1997',source:liu,status:'reported',
        population:L('MT1（Mel1a）敲除小鼠，SCN 电生理','MT1 (Mel1a) knockout mice, SCN electrophysiology'),
        timing:timeUnknown,intervention:L('褪黑素；另用百日咳毒素检验阻断','Melatonin; pertussis toxin tested separately'),
        outcome:firingPhase,estimate:L('敲除后相移仅轻度改变；百日咳毒素仍可阻断','Phase shifts were only modestly altered in knockouts and remained sensitive to pertussis toxin'),
        note:L('原文提出 MT2 可能参与相移。','The authors implicate MT2 in the phase response.')},
      {...animal,study:'Dubocovich et al., 2005',status:'reported',
        population:L('C57BL/6 野生型小鼠','Wild-type C57BL/6 mice'),
        estimate:L('褪黑素 +0.60 ± 0.09 h（n=41）；溶媒 −0.02 ± 0.07 h（n=28），P < 0.001',
          'Melatonin +0.60 ± 0.09 h (n=41); vehicle −0.02 ± 0.07 h (n=28), P < 0.001'),
        note:L('正值表示相位提前。','Positive values denote phase advances.')},
      {...animal,study:'Dubocovich et al., 2005',status:'noeffect',
        population:L('C57BL/6 MT1 敲除小鼠','C57BL/6 MT1 knockout mice'),
        estimate:L('褪黑素 −0.10 ± 0.12 h（n=42）；溶媒 −0.12 ± 0.07 h（n=43）；未观察到相移',
          'Melatonin −0.10 ± 0.12 h (n=42); vehicle −0.12 ± 0.07 h (n=43); no phase shift observed'),
        note:L('在同一研究中另有离体 SCN 结果。','Ex vivo SCN results from the same study are listed separately.')},
      {...exVivo,study:'Dubocovich et al., 2005',source:dubocovich,status:'reported',
        population:L('C57BL/6 野生型及 MT1 敲除小鼠 SCN 切片','SCN slices from C57BL/6 wild-type and MT1 knockout mice'),
        timing:timeUnknown,intervention:L('褪黑素 3 或 10 pM；以下为 10 pM','Melatonin 3 or 10 pM; values shown at 10 pM'),outcome:firingPhase,
        estimate:L('野生型提前 3.61 ± 0.38 h（n=3）；敲除型提前 3.45 ± 0.11 h（n=4）',
          'Advance of 3.61 ± 0.38 h in wild type (n=3) and 3.45 ± 0.11 h in knockout (n=4)'),
        note:L('两组仍有相位提前。与整动物活动起始读出分开。','Advances persisted in both groups. This is separate from whole-animal activity onset.')},
      {...human,study:'Burgess et al., 2008',source:burgess2008,
        population:L('27 名健康年轻成人；超日昏暗光–暗循环（<150 lux）','27 healthy young adults; ultradian dim-light–dark cycle (<150 lux)'),
        timing:L('相对基线 DLMO：提前峰约 −5 h，延迟峰约 +11 h','Relative to baseline DLMO: advance peak about −5 h and delay peak about +11 h'),
        intervention:oral('3'),estimate:L('拟合最大提前 1.8 h，最大延迟 1.3 h','Fitted maximum advance 1.8 h and maximum delay 1.3 h'),
        note:L('人体节律标记，保留实验室光照与给药方案。','Human phase marker under the stated laboratory lighting and dosing schedule.')},
      {...human,study:'Burgess et al., 2010',source:burgess2010,
        population:L('34 名健康成人，18–42 岁；实验室超日昏暗光–暗循环','34 healthy adults, 18–42 years; laboratory ultradian dim-light–dark cycle'),
        timing:L('最大提前出现在基线 DLMO 前 2–4 h；延迟拟合峰在起床后不久',
          'Greatest advance 2–4 h before baseline DLMO; fitted delay peak soon after wake time'),
        intervention:oral('0.5'),estimate:L('报告相位提前与延迟窗口；延迟峰时点较不明确','Advance and delay windows reported; delay peak timing was less distinct'),
        note:L('论文与既往同方案的 3 mg 曲线比较。','The paper compares with a previously published 3 mg curve using the same protocol.')}
    ],
    links:[['regulation/melatonin',L('褪黑素–SCN 通路','Melatonin–SCN pathway')],
      ['target/mt1/structures','MT1'],['target/mt2/structures','MT2'],['browse/structures',L('结构总览','Structure overview')]],
    structureNote:L('以 RCSB 的褪黑素精确 CCD ML1 检索到 9 条，靶标均非 MT1/MT2。6ME2 和 7VH0 的配体为雷美替胺，7VGY 为 2-碘褪黑素，可作受体结构参照；4QOG 含原配体褪黑素，靶标为 NQO2。',
      'RCSB’s exact melatonin CCD ML1 search returned nine entries, all with targets other than MT1/MT2. 6ME2 and 7VH0 contain ramelteon, and 7VGY contains 2-iodomelatonin. These are receptor references. 4QOG contains melatonin bound to NQO2.'),
    structureSources:[source('RCSB CCD · ML1','https://www.rcsb.org/ligand/ML1'),
      source('6ME2 · Ramelteon–MT1','https://www.rcsb.org/structure/6ME2'),
      source('7VH0 · Ramelteon–MT2','https://www.rcsb.org/structure/7VH0'),
      source('7VGY · 2-Iodomelatonin–MT1','https://www.rcsb.org/structure/7VGY'),
      source('4QOG · Melatonin–NQO2','https://www.rcsb.org/structure/4QOG')]
  };
}
