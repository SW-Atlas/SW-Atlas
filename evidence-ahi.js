{
  const paper = source('SLEEP · zsae276','https://doi.org/10.1093/sleep/zsae276');
  const reposaRegistry = trial('NCT06146101');
  const reposaSponsor = source('Incannex · 2025-07-30',
    'https://ir.incannex.com/news-releases/news-release-details/incannex-reports-positive-topline-results-reposa-phase-2-trial');
  const placebo = L('安慰剂','Placebo');
  const ahiChange = L('AHI 基线变化（次/小时）','AHI change from baseline (events/h)');
  const crossover = {
    topic:'IHL-42X',study:L('早期随机交叉试验','Early randomized crossover trial'),
    type:'paper',source:paper,time:L('每期第 7 晚','Night 7 of each period'),comparator:placebo
  };
  const table1 = L('正文 Results、图 2 与表 1','Results, Figure 2 and Table 1');
  const paperPopulation = L('正文分析 9 人，8 人完成全部剂量','Results analysis: 9 participants, 8 completed all doses');
  const abstractPopulation = L('11 人随机，10 人完成至少一个治疗期的末晚评估；摘要未列各组 n',
    '11 randomized, 10 had at least one end-of-period assessment; arm n not given in abstract');
  const doses = [
    {arm:L('低剂量，屈大麻酚 2.5 mg＋乙酰唑胺 125 mg','Low: dronabinol 2.5 mg + acetazolamide 125 mg'),n:8,main:'−19.4 ± 27.3',abstract:'−19.7 ± 27.1'},
    {arm:L('中剂量，屈大麻酚 5 mg＋乙酰唑胺 250 mg','Medium: dronabinol 5 mg + acetazolamide 250 mg'),n:9,main:'−17.8 ± 23.6',abstract:'−17.5 ± 23.3'},
    {arm:L('高剂量，屈大麻酚 10 mg＋乙酰唑胺 500 mg','High: dronabinol 10 mg + acetazolamide 500 mg'),n:8,main:'−18.2 ± 24.8',abstract:'−16.4 ± 23.8'}
  ];
  const rows = [
    ...doses.map(({arm,n,main})=>({...crossover,arm,status:'reported',outcome:ahiChange,
      population:paperPopulation,estimate:main+' (n='+n+')',comparator:'−4.6 ± 21.5 (n=9)',inference:'P < 0.001',
      locator:table1,note:L('各期基线变化为均值 ± SD；P 值来自与安慰剂的比较。','Within-period changes are means ± SD. P values compare with placebo.')})),
    ...doses.map(({arm,abstract})=>({...crossover,arm,status:'reported',outcome:ahiChange,
      population:abstractPopulation,estimate:abstract,comparator:'−2.8 ± 21.0',inference:'P < 0.05',
      locator:L('论文摘要 Results','Article abstract, Results'),
      note:L('同一试验的另一套报告值。摘要与表 1 数值不同，论文未明确解释差异。','Alternate values from the same trial. The paper does not reconcile the difference from Table 1.')})),
    ...doses.map(({arm},i)=>({...crossover,arm,status:i===1?'reported':'null',population:paperPopulation,
      outcome:L('ODI3% 基线变化（次/小时）','ODI3% change from baseline (events/h)'),
      estimate:['−15.1 ± 25.0','−15.5 ± 19.0','−11.6 ± 13.7'][i],comparator:'−5.4 ± 22.0',
      inference:i===1?'P < 0.05':L('未见显著差异','No significant difference'),
      locator:table1,note:L('辅助终点，取表 1 的均值 ± SD。','Additional outcome. Means ± SD from Table 1.')})),
    ...[
      L('Epworth 嗜睡量表（ESS）','Epworth Sleepiness Scale (ESS)'),
      L('Stanford 嗜睡量表（SSS）','Stanford Sleepiness Scale (SSS)'),
      L('情绪（POMS-2）','Mood (POMS-2)'),
      L('生活质量','Quality of life')
    ].map(outcome=>({...crossover,status:'null',outcome,population:paperPopulation,
      arm:L('低、中、高剂量','Low, medium and high doses'),estimate:'—',comparator:placebo,
      inference:L('未见显著差异','No significant difference'),locator:L('正文 Results 与 Discussion','Results and Discussion'),
      note:L('辅助终点，与 AHI 分开解读。','Additional outcome, interpreted separately from AHI.')})),
    {topic:'IHL-42X',study:'RePOSA II · NCT06146101',type:'registry',status:'unavailable',
      time:L('4 周','4 weeks'),outcome:L('AHI 基线变化','AHI change from baseline'),
      population:L('登记实际入组 121 人','Registry enrollment: 121'),arm:L('低剂量、高剂量','Low and high doses'),
      comparator:placebo,estimate:'—',inference:'—',source:reposaRegistry,
      locator:L('登记方案 Primary Outcome Measures','Protocol, Primary Outcome Measures'),
      note:L('截至 2026-11-07，登记方案列出终点，未贴结果。','Protocol defines the endpoint. No registry results were posted as of 2026-11-07.')},
    ...[
      {arm:L('低剂量','Low dose'),r30:'33.3%',r50:'13.9%',max:'79%'},
      {arm:L('高剂量','High dose'),r30:'41.2%',r50:'14.7%',max:'83%'}
    ].map(({arm,r30,r50,max})=>({topic:'IHL-42X',study:'RePOSA II · NCT06146101',type:'sponsor',status:'partial',
      time:L('28 天','28 days'),outcome:L('AHI 百分比变化及响应者比例','AHI percent change and responder rates'),
      population:L('随机入组 121 人；披露未列分析集及各组分母','121 randomized; analysis set and arm denominators not given'),
      arm,comparator:placebo,
      estimate:L('降幅 >30%：'+r30+'；降幅 >50%：'+r50+'；个体最大降幅 '+max,
        '>30% reduction: '+r30+'; >50% reduction: '+r50+'; maximum individual reduction '+max),
      inference:L('主要 AHI 百分比变化 P < 0.05','Primary AHI percent change P < 0.05'),source:reposaSponsor,
      locator:L('Compelling Clinical Efficacy，AHI 段','Compelling Clinical Efficacy, AHI paragraph'),
      note:L('披露未列组均值或安慰剂调整效应量。个体最大降幅单独标注。','Disclosure omits arm means and placebo-adjusted effect sizes. Individual maxima are labeled separately.')}))
  ];
  evidenceTables.ahi = {
    title:L('OSA 的 AHI 终点证据表','AHI evidence in obstructive sleep apnea'),
    description:L('按试验、分析人群和来源记录 AHI，保留关联的阴性终点。绝对变化、百分比变化和响应率分别呈现。',
      'AHI records retain study, analysis population and source, with relevant null outcomes. Absolute changes, percentages and responder rates retain their own scales.'),
    topicLabel:L('药物项目','Drug program'),rows,
    columns:[
      ['topic',L('项目','Program')],['study',L('研究','Study')],['outcome',L('终点','Outcome')],['time',L('时点','Time')],
      ['population',L('分析人群','Population')],['arm',L('干预','Intervention')],['estimate',L('干预结果','Intervention result')],
      ['comparator',L('对照或对照结果','Comparator or result')],['inference',L('组间比较','Between-arm comparison')]
    ],
    links:[['drug/ihl-42x/clinical','IHL-42X'],['drug/ad109/clinical','AD109'],
      ['browse/structures',L('结构总览','Structure overview')]],
    structureNote:L('3HS4 对应 IHL-42X 的乙酰唑胺组分，8ZP2 对应 AD109 的托莫西汀组分。屈大麻酚和 aroxybutynin 的确切配体–靶标结构另待核对。',
      '3HS4 covers acetazolamide, an IHL-42X component. 8ZP2 covers atomoxetine, an AD109 component. Exact ligand–target structures for dronabinol and aroxybutynin remain to be verified.'),
    structureSources:[source('3HS4 · Acetazolamide–CA II','https://www.rcsb.org/structure/3HS4'),
      source('8ZP2 · Atomoxetine–NET','https://www.rcsb.org/structure/8ZP2')]
  };
}

{
  const ahi4 = L('AHI4 基线变化（次/小时）','AHI4 change from baseline (events/h)');
  const week26 = L('第 26 周','Week 26');
  const ad = L('AD109（aroxybutynin 2.5 mg＋atomoxetine 75 mg）','AD109 (aroxybutynin 2.5 mg + atomoxetine 75 mg)');
  const registry = id=>source(id+' · Results','https://clinicaltrials.gov/study/'+id+'?tab=results');
  const syn = 'SynAIRgy · NCT05813275';
  const lunar = 'LunAIRo · NCT05811247';
  const mar = 'MARIPOSA · NCT05071612';
  const synPaper = source('AJRCCM · SynAIRgy','https://doi.org/10.1093/ajrccm/aamag215');
  const marPaper = source('AJRCCM · MARIPOSA','https://doi.org/10.1164/rccm.202306-1036OC');
  const lunarAbstract = source('Sleep Medicine Disruptors · 021','https://link.springer.com/article/10.1007/s44470-026-00114-7');
  const synItt = L('论文 ITT 615 人（302 / 313）','Paper ITT: 615 (302 / 313)');
  const synOn = L('治疗期间 556 人（260 / 296）','On-treatment: 556 (260 / 296)');
  const lunarOn = L('mITT，有治疗期间基线后 PSG（240 / 293）','mITT with postbaseline on-treatment PSG (240 / 293)');
  const synPFAS = L('登记 PFAS（302 / 313）','Registry PFAS (302 / 313)');
  const marPaperSet = L('预设疗效分析 181 人，含全部四组','Prespecified efficacy set: 181 across all four arms');
  const marTime = L('第 3–4 周','Weeks 3–4');
  const primary = L('Results · Primary Outcome Measure','Results · Primary Outcome Measure');
  const ci = L('组内为最小二乘均值（95% CI），组间差取原来源。','Within-arm values are LS means (95% CI). Between-arm differences follow the source.');
  const makeRow = (study,type,source,time,population,estimate,comparator,inference,locator,note,extra={})=>
    ({topic:'AD109',study,type,source,time,population,estimate,comparator,inference,locator,note,
      outcome:ahi4,arm:ad,status:'reported',...extra});
  const rows = [
    ...[
      {arm:'AD109 2.5/75 mg',estimate:'20.5 (12.3–27.2) → 10.8 (5.6–18.5)',delta:'−7.16 (95% CI −11.0 to −3.3), P < 0.001'},
      {arm:'AD109 5/75 mg',estimate:'19.4 (13.7–26.4) → 9.5 (6.1–19.3)',delta:'−7.20 (95% CI −10.97 to −3.4), P < 0.001'},
      {arm:L('托莫西汀 75 mg 单药','Atomoxetine 75 mg monotherapy'),estimate:'19.0 (11.8–28.8) → 11.8 (5.5–21.5)',
        delta:'−5.19 (95% CI −8.6 to −1.8), P < 0.01'}
    ].map(({arm,estimate,delta})=>makeRow(mar,'paper',marPaper,marTime,marPaperSet,estimate,
      '20.1 (11.9–25.9) → 16.3 (11.1–28.9)',delta,L('表 3，AHI4','Table 3, AHI4'),
      L('组内为基线至治疗期的中位数（IQR）；组间差为论文报告的安慰剂调整效应。',
        'Within-arm values are medians (IQR) from baseline to treatment. The contrast is the placebo-adjusted estimate reported in the paper.'),{arm})),
    makeRow(mar,'registry',registry('NCT05071612'),marTime,
      L('mITT，合并剂量组 n=69、安慰剂 n=62','mITT: pooled AD109 n=69, placebo n=62'),
      '−7.38 (−9.53 to −5.23)','−0.21 (−2.49 to 2.07)','−7.17 (95% CI −10.31 to −4.04), P < 0.0001',primary,
      L('登记按统计方案合并两剂量作为主要比较；论文表 3 分剂量列出。',
        'The registry pools dose arms for its prespecified primary comparison. Paper Table 3 gives dose-specific values.'),
      {arm:L('合并 AD109 两个剂量组','Both AD109 dose arms pooled')}),
    makeRow(syn,'paper',synPaper,week26,synItt,'−3.3 (−5.1 to −1.5)','+0.7 (−1.0 to +2.4)',
      '−4.0 (95% CI −6.4 to −1.6), P = 0.001',L('表 2，主要终点','Table 2, primary endpoint'),ci),
    makeRow(syn,'paper',synPaper,week26,synOn,'−6.1 (−7.8 to −4.4)','+0.4 (−1.2 to +2.0)',
      '−6.5 (95% CI −8.8 to −4.3), P < 0.0001',L('表 3，支持性分析','Table 3, supportive analysis'),ci),
    makeRow(syn,'paper',synPaper,week26,synItt,'78/302 (25.8%)','62/313 (19.8%)',
      '5.7 pp (95% CI −1.0 to 12.4), nominal P = 0.182',L('表 2，响应者','Table 2, responder outcome'),
      L('预设层级已在疲劳终点停止；报告名义 P 值。','The hierarchy had stopped at fatigue; this P value is nominal.'),
      {outcome:L('AHI 下降 ≥50%','AHI reduction ≥50%'),status:'null'}),
    makeRow(syn,'paper',synPaper,week26,synOn,'103/260 (39.6%)','66/296 (22.3%)',
      '17.3 pp (95% CI 9.6 to 25.0), P < 0.0001',L('表 3，响应者','Table 3, responder outcome'),
      L('治疗期间支持性分析；与 ITT 响应率分列。','Supportive on-treatment analysis, kept separate from ITT.'),
      {outcome:L('AHI 下降 ≥50%','AHI reduction ≥50%')}),
    makeRow(syn,'paper',synPaper,week26,synItt,'−7.4 (−8.3 to −6.5)','−6.2 (−7.1 to −5.3)',
      '−1.2 (95% CI −2.4 to 0.0), P = 0.059',L('表 2 与正文 Results','Table 2 and Results'),
      L('预设关键次要终点未达显著，后续层级检验停止。','The prespecified key secondary outcome missed significance, stopping hierarchical testing.'),
      {outcome:L('PROMIS 疲劳 T 分数变化','PROMIS Fatigue T-score change'),status:'null'}),
    makeRow(syn,'registry',registry('NCT05813275'),week26,synPFAS,'−3.28 (−5.05 to −1.51)','+0.71 (−1.01 to +2.44)',
      '−3.99 (95% CI −6.40 to −1.59), P = 0.001',primary,ci),
    makeRow(syn,'registry',registry('NCT05813275'),week26,synOn,'−6.11 (−7.80 to −4.41)','+0.44 (−1.15 to +2.02)',
      '−6.54 (95% CI −8.80 to −4.28), P < 0.0001',primary,ci),
    makeRow(lunar,'registry',registry('NCT05811247'),L('6 个月','6 months'),L('FAS 治疗策略（324 / 326）','FAS treatment policy (324 / 326)'),
      '−3.88 (−5.37 to −2.39)','+0.21 (−1.24 to +1.65)','−4.08 (95% CI −6.14 to −2.03), P < 0.001',primary,ci),
    makeRow(lunar,'registry',registry('NCT05811247'),L('6 个月','6 months'),lunarOn,
      '−5.83 (−7.51 to −4.15)','−0.02 (−1.55 to +1.50)','−5.81 (95% CI −8.07 to −3.55), P < 0.0001',primary,ci),
    ...[
      [week26,'46.8%','6.8%'],[L('第 51 周','Week 51'),'43.5%','13.2%']
    ].map(([time,estimate,comparator])=>makeRow(lunar,'abstract',lunarAbstract,time,lunarOn,estimate,comparator,'P < 0.001',
      L('摘要 021，Results','Abstract 021, Results'),
      L('百分比降幅按摘要取值。摘要中的 NCT 编号有误，本表采用登记号 NCT05811247。',
        'Percent reductions follow the abstract. Its NCT identifier is misprinted. The registry ID is NCT05811247.'),
      {outcome:L('AHI4 百分比下降','AHI4 percent reduction')}))
  ];
  evidenceTables.ahi.rows.push(...rows);
}
