{
  const identity=source('FDA GSRS · UNII KA8W5LDS6Z','https://precision.fda.gov/uniisearch/srs/unii/KA8W5LDS6Z');
  const paper=source('First-in-human PK/PD · Clin Transl Sci 2024','https://doi.org/10.1111/cts.70000');
  const results=source('Mineralys · Explore-OSA · SEC exhibit, March 2026','https://ir.mineralystx.com/sec-filings/all-sec-filings/content/0001933414-26-000048/mlys202603068kex991.htm');
  const final=source('Mineralys · Explore-OSA final update · SEC exhibit, November 2026','https://ir.mineralystx.com/sec-filings/all-sec-filings/content/0001933414-26-000142/mlys2026q38kex991.htm');
  const registry=trial('NCT06785454');
  const ref=pdb('4FDH');
  records.push({
    ...record('cyp11b2','targets','CYP11B2',L('人醛固酮合酶 · P19099','Human aldosterone synthase · P19099'),
      L('细胞色素 P450 酶','Cytochrome P450 enzyme'),
      L('参与醛固酮生物合成。本站将 CYP11B2 抑制药理与 OSA 试验 AHI 阴性结果分层保存。',
        'Catalyzes aldosterone biosynthesis. CYP11B2 inhibition and the negative AHI readout in OSA are indexed separately.'),
      [['UniProt','P19099']],[uniprot('P19099'),ref,paper],[]),
    structureReferences:[{id:'4FDH',ligand:'Fadrozole · CCD 0T3',state:L('血红素与抑制剂结合态','Heme and inhibitor-bound'),method:xray,resolution:'2.71'}]
  });
  registerClinicalCandidate({
  "keyReferences": [{"citation": "Laffin LJ, Rodman D, Luther JM, Vaidya A, Weir MR, Rajicic N, et al. Aldosterone Synthase Inhibition With Lorundrostat for Uncontrolled Hypertension: The Target-HTN Randomized Clinical Trial. JAMA. 2023;330(12):1140-1150.", "pmid": "37690061", "url": "https://doi.org/10.1001/jama.2023.16029"}, {"citation": "Saxena M, Laffin L, Borghi C, Fernandez Fernandez B, Ghali JK, Kopjar B, et al. Lorundrostat in Participants With Uncontrolled Hypertension and Treatment-Resistant Hypertension: The Launch-HTN Randomized Clinical Trial. JAMA. 2025;334(5):409-418.", "pmid": "40587141", "url": "https://doi.org/10.1001/jama.2025.9413"}, {"citation": "Shimizu H, Tortorici MA, Ohta Y, Ogawa K, Rahman SMA, Fujii A, et al. First-in-human study evaluating safety, pharmacokinetics, and pharmacodynamics of lorundrostat, a novel and highly selective aldosterone synthase inhibitor. Clin Transl Sci. 2024;17(8):e70000.", "pmid": "39152532", "url": "https://doi.org/10.1111/cts.70000"}, {"citation": "Laffin LJ, Kopjar B, Melgaard C, Wolski K, Ibbitson J, Bhikam S, et al. Lorundrostat Efficacy and Safety in Patients with Uncontrolled Hypertension. N Engl J Med. 2025;392(18):1813-1823.", "pmid": "40267417", "url": "https://doi.org/10.1056/NEJMoa2501440"}],
    id:'lorundrostat',name:'Lorundrostat',aliases:'MLS-101 / MT-4129',kind:'single',category:'breathing',
    phase:'II',status:'COMPLETED',reviewed:'2026-11-06',
    condition:L('中重度 OSA 合并高血压','Moderate-to-severe OSA with hypertension'),
    summary:L('醛固酮合酶 CYP11B2 抑制剂。Explore-OSA II 期主要终点 AHI 未见有临床意义的改善，血压结果另列。',
      'An aldosterone synthase CYP11B2 inhibitor. The Phase II Explore-OSA trial found no clinically meaningful improvement in the primary AHI outcome. Blood-pressure findings are indexed separately.'),
    identity,chemistry:{depiction:'assets/lorundrostat.svg',depictionSource:identity,sources:[identity],fields:[
      ['CAS','1820940-17-7'],['UNII','KA8W5LDS6Z'],['InChIKey','YHGVDZULVMINCJ-MEMLXQNLSA-N'],
      [L('分子式','Molecular formula'),'C₂₄H₃₃N₇O₂'],
      [L('化学表示','Chemical representation'),L('按 GSRS 的反式游离碱身份重绘。','Redrawn as the GSRS trans free base.')]
    ]},
    targets:['cyp11b2'],references:[results,final,paper,ref],
    structureEvidence:{title:L('CYP11B2 结构参照','CYP11B2 structural reference'),
      summary:L('4FDH 的实际配体为 Fadrozole（0T3），并含血红素。尚未核到 Lorundrostat 直接结合的实验复合物；此处保留为同靶标参照。',
        '4FDH contains fadrozole (0T3) and heme. A direct lorundrostat complex remains unverified; this entry provides a same-target reference.'),
      sources:[ref,source('4FDH · Mol*','https://www.rcsb.org/3d-view/4FDH')]},
    studies:[{
      id:'NCT06785454',title:'EXPLORE-OSA · Lorundrostat in OSA and hypertension',phase:'II',status:'COMPLETED',updated:'2026-08-21',focus:'index',
      sponsor:'Mineralys Therapeutics Inc.',allocation:'RANDOMIZED',masking:'DOUBLE',age:[],enrollment:{count:48,type:'ACTUAL'},
      conditions:['Obstructive Sleep Apnea','Hypertension'],
      designNote:L('随机、双盲、安慰剂交叉研究；2025-12-29 完成。','Randomized double-blind placebo-controlled crossover study, completed 2025-12-29.'),
      primaryOutcomes:[{measure:'Placebo-adjusted change from baseline in AHI',timeFrame:'Baseline to week 4'}],
      interventions:['Lorundrostat 50 mg orally in the evening','Placebo'],hasResults:false,reference:registry
    }],
    evidenceSections:[
      {chapter:'pharmacology',title:L('靶标与药理','Target and pharmacology'),fields:[
        [L('作用方式','Mode of action'),L('抑制 CYP11B2 催化的醛固酮合成；CYP11B1 为选择性比较对象。','Inhibits CYP11B2-dependent aldosterone synthesis; CYP11B1 is a selectivity comparator.')]
      ],sources:[paper,results]},
      {chapter:'preclinical',title:L('首次人体药代','First-in-human PK'),fields:[
        [L('研究人群','Population'),L('健康男性，单次和多次递增口服剂量研究。','Healthy male participants in single and multiple ascending oral dose cohorts.')],
        ['Tmax','1–3 h'],['t½','10–12 h']
      ],sources:[paper]},
      {chapter:'clinical',title:L('Explore-OSA 阴性主要终点','Explore-OSA negative primary outcome'),fields:[
        [L('基线','Baseline'),L('48 人，平均 AHI 48.5 次/小时。','48 participants, mean AHI 48.5 events/hour.')],
        [L('主要终点 AHI','Primary AHI outcome'),L('50 mg 与安慰剂相比，第 4 周未观察到有临床意义的差异。申办方披露未提供可摘录的 AHI 组间差值和置信区间。',
          'At week 4, 50 mg showed no clinically meaningful AHI difference versus placebo. The sponsor disclosures provide no extractable between-arm AHI estimate or confidence interval.')],
        [L('次要血压结果','Secondary blood pressure outcome'),L('首周期预设平行分析中，晨间收缩压下降 11.1 与 1.0 mmHg；交叉分析相对安慰剂下降 6.2 mmHg。',
          'Morning systolic blood pressure fell by 11.1 and 1.0 mmHg in the prespecified first-period parallel analysis. The crossover analysis reported a 6.2 mmHg placebo-adjusted reduction.')],
        [L('监管范围','Regulatory scope'),L('申办方披露的 FDA 审评申请对应高血压。','The FDA application described by the sponsor concerns hypertension.')]
      ],sources:[registry,results,final]},
      {chapter:'safety',title:L('Explore-OSA 安全性 · 申办方披露','Explore-OSA safety · sponsor disclosure'),fields:[
        [L('钾监测','Potassium monitoring'),L('初步披露未报告血钾超过 5.5 mmol/L，分组不良事件率仍待公开。','The initial report noted no serum potassium excursions above 5.5 mmol/L; arm-level adverse event rates remain to be verified.')]
      ],sources:[results,final]}
    ]
  });
}
