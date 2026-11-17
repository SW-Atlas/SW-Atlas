{
const paper=article('García-Borreguero et al. · Mov Disord 2021 · Table 2','34137476');
const eudra=source('EU Clinical Trials Register · 2017-004580-12','https://www.clinicaltrialsregister.eu/ctr-search/trial/2017-004580-12/ES');
const binding=article('Human ENT1 · radioligand competition and kinetics','26428002');
const cellBinding=source('Human U-2 OS membranes · ENT1 competition · Table S1','https://pmc.ncbi.nlm.nih.gov/articles/PMC6760145/');
const ae1Paper=article('Capper et al. · Nat Struct Mol Biol 2023 · AE1 cryo-EM','37679563');
const transporter=L('膜转运体','Membrane transporter');
records.push({
  ...record('ent1','targets','ENT1',L('平衡型核苷转运体 1 · SLC29A1 · 人','Equilibrative nucleoside transporter 1 · SLC29A1 · human'),transporter,
    L('双嘧达莫的人 ENT1 结合已通过放射性配体实验测得。','Human ENT1 binding of dipyridamole has been measured by radioligand assays.'),
    [['UniProt','Q99808']],[uniprot('Q99808'),binding,cellBinding],[]),
  structureReferences:[{id:'6OB7',ligand:'Dilazep · CCD 8DZ',state:L('同靶标抑制剂参照','Same-target inhibitor reference'),method:xray,resolution:'2.30'}]
},record('ae1','targets','AE1',L('阴离子交换体 1 · SLC4A1 · 人','Anion exchanger 1 · SLC4A1 · human'),transporter,
  L('8T6U 解析了人 AE1 与双嘧达莫的直接复合物。其与不宁腿综合征临床效应的关系尚待检验。','8T6U resolves a direct human AE1–dipyridamole complex. Its relationship to clinical effects in restless legs syndrome remains untested.'),
  [['UniProt','P02730']],[uniprot('P02730'),ae1Paper,pdb('8T6U')],[]));
registerClinicalCandidate({
  "keyReferences": [{"citation": "Garcia-Borreguero D, Garcia-Malo C, Granizo JJ, Ferré S. A Randomized, Placebo-Controlled Crossover Study with Dipyridamole for Restless Legs Syndrome. Mov Disord. 2021;36(10):2387-2392.", "pmid": "34137476", "url": "https://doi.org/10.1002/mds.28668"}, {"citation": "Rehan S, Ashok Y, Nanekar R, Jaakola VP. Thermodynamics and kinetics of inhibitor binding to human equilibrative nucleoside transporter subtype-1. Biochem Pharmacol. 2015;98(4):681-689.", "pmid": "26428002", "url": "https://doi.org/10.1016/j.bcp.2015.09.019"}, {"citation": "Capper MJ, Yang S, Stone AC, Vatansever S, Zilberg G, Mathiharan YK, et al. Substrate binding and inhibition of the anion exchanger 1 transporter. Nat Struct Mol Biol. 2023;30(10):1495-1504.", "pmid": "37679563", "url": "https://doi.org/10.1038/s41594-023-01085-6"}],
  "id": "dipyridamole",
  "name": "Dipyridamole",
  "aliases": "双嘧达莫",
  "kind": "single",
  "condition": {
    "zh": "特发性和尿毒症相关不宁腿综合征",
    "en": "Idiopathic and uremia-associated restless legs syndrome"
  },
  "category": "rls",
  "phase": "II/III",
  "status": "RECRUITING",
  "summary": {
    "zh": "特发性不宁腿综合征已有随机交叉试验。尿毒症相关人群的自身对照研究另列。",
    "en": "A randomized crossover trial studied idiopathic restless legs syndrome. The within-participant study in uremia is indexed separately."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[paper,eudra,binding,cellBinding,ae1Paper,pdb('8T6U')],
  "studies": [
    {
      "id": "NCT07199504",
      "focus": "index",
      "title": "A Self-Controlled Study on the Treatment of Restless Legs Syndrome in Uremia With Dipyridamole",
      "phase": "II/III",
      "status": "RECRUITING",
      "updated": "2026-04-22",
      "started": {
        "date": "2025-09-20",
        "type": "ACTUAL"
      },
      "sponsor": "Yunfeng Xia",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 80,
        "type": "ESTIMATED"
      },
      "allocation": "NA",
      "masking": "NONE",
      "age": [
        "18 Years",
        "75 Years"
      ],
      "conditions": [
        "Restless Leg Syndrome Due to Uraemia"
      ],
      "interventions": [
        "Dipyridamole 50mg tid"
      ],
      "primaryOutcomes": [
        {
          "measure": "International Restless Legs Syndrome Study Group rating scale",
          "timeFrame": "From enrollment to the end of treatment at 12 weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07199504",
        "url": "https://clinicaltrials.gov/study/NCT07199504"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 3108",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3108"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-3108.png",
    "depictionSource": {
      "label": "PubChem CID 3108",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3108"
    },
    "links": [{"label": "ChEMBL CHEMBL932", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL932/"}, {"label": "KEGG D00302", "url": "https://www.kegg.jp/entry/D00302"}],
      "sources": [
      {
        "label": "PubChem CID 3108",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3108"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"2-[[2-[bis(2-hydroxyethyl)amino]-4,8-di(piperidin-1-yl)pyrimido[5,4-d]pyrimidin-6-yl]-(2-hydroxyethyl)amino]ethanol"],
        [{"zh":"同义词","en":"Synonyms"},"dipyridamole · Persantin"],
        ["KEGG ID","D00302"], ["PharmGKB ID","PA449367"],
        
      [
        "PubChem CID",
        "3108"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C24H40N8O4"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "504.6"
      ],
      [
        "InChIKey",
        "IZEKFCXSFNUWAM-UHFFFAOYSA-N"
      ],
      [
        "SMILES",
        "C1CCN(CC1)C2=NC(=NC3=C2N=C(N=C3N4CCCCC4)N(CCO)CCO)N(CCO)CCO"
      ]
    ]
  },
  "targets": ["ent1","ae1"],
  "system": null,
  publishedResult:{study:'EudraCT 2017-004580-12',summary:L(
    '28 名未治疗的特发性不宁腿综合征患者完成交叉试验。各两周疗程末，IRLS 为双嘧达莫 11.1 ± 2.3 分、安慰剂 18.7 ± 3.2 分，基线至疗程末变化的组间比较 P<0.001。',
    'Twenty-eight previously untreated participants with idiopathic restless legs syndrome completed the crossover. At the end of each two-week period, IRLS was 11.1 ± 2.3 with dipyridamole and 18.7 ± 3.2 with placebo. The between-condition change comparison gave P<0.001.'),
    reference:paper},
  evidenceSections:[
    {chapter:'clinical',title:L('特发性不宁腿综合征 · 两周交叉试验','Idiopathic RLS · two-week crossover trial'),fields:[
      [L('设计与剂量','Design and dose'),L('随机双盲交叉，两疗程间洗脱 1 周。100 mg/日起始，最高 300 mg/日。药物疗程末平均剂量 217.8 ± 33.1 mg/日。','Randomized, double-blind crossover with a one-week washout. Dosing started at 100 mg/day and could rise to 300 mg/day. Mean dose at the end of the active period was 217.8 ± 33.1 mg/day.')],
      [L('阴性读数','Negative readouts'),L('日间嗜睡在 MOS 和 ESS 量表均无显著差异。','Daytime sleepiness did not differ significantly on either MOS or ESS.')]
    ],table:{columns:[L('PSG · 疗程末','PSG at end of period'),L('双嘧达莫','Dipyridamole'),L('安慰剂','Placebo'),'P'],rows:[
      [L('总睡眠时间（分钟）','Total sleep time (min)'),'382.2 ± 45.1','351.1 ± 56.3','0.014'],
      [L('入睡潜伏期（分钟）','Sleep latency (min)'),'20.3 ± 8.1','27.5 ± 11.1','0.007'],
      [L('入睡后觉醒（分钟）','Wake after sleep onset (min)'),'59.8 ± 22.9','74.3 ± 30.3','0.018'],
      [L('REM 睡眠（分钟）','REM sleep (min)'),'58.0 ± 30.0','54.0 ± 28.5','0.559']
    ]},note:L('表列均值 ± SD。尿毒症相关研究 NCT07199504 仍在招募。','Table shows means ± SD. The uremia-associated study NCT07199504 remains in recruitment.'),sources:[paper,eudra]},
    {chapter:'pharmacology',title:L('ENT1 结合与 AE1 结构证据','ENT1 binding and AE1 structural evidence'),fields:[
      [L('人 ENT1 结合','Human ENT1 binding'),L('U-2 OS 细胞膜放射性配体竞争实验报告 pKᵢ 7.2 ± 0.1（表 S1）。','Radioligand competition in human U-2 OS membranes gave a pKᵢ of 7.2 ± 0.1 (Table S1).')],
      [L('靶标范围','Target scope'),L('ENT1 结合支持腺苷转运相关药理。AE1 实验复合物来自独立的阴离子转运研究。','ENT1 binding supports adenosine-transporter pharmacology. The AE1 complex comes from a separate study of anion transport.')]
    ],sources:[binding,cellBinding,ae1Paper]},
    {chapter:'safety',title:L('两周交叉期不良事件','Adverse events during the two-week periods'),fields:[
      [L('药物 / 安慰剂','Active / placebo'),L('各条件 28 人。腹胀 18% / 7%，头晕 10.7% / 7.1%，腹泻及乏力各 7.1% / 3.6%。论文报告这些事件程度轻，无人因此退出。','Each condition included 28 participants. Abdominal distension was reported in 18% vs 7%, dizziness in 10.7% vs 7.1%, and diarrhea and asthenia each in 7.1% vs 3.6%. These events were mild and caused no discontinuations in the report.')]
    ],sources:[paper]}
  ],
  structureEvidence:{title:L('直接 AE1 复合物及 ENT1 参照','Direct AE1 complex and ENT1 reference'),
    summary:L('8T6U 的两处 H9F 实例为 A2204 与 B2203。两条 AE1 链中各配体 4.0 Å 内分别有 19 与 17 个残基。A2204 的最近重原子对为 Phe532 O–O4（3.00 Å），B2203 为 Ser856 OG–O4（2.73 Å）。ENT1 的 6OB7 实际配体为 Dilazep。H9F 还见于 8I4A（ABCC4）、7DMC（Hsp90α）及 9T0H（NCS-1），这些条目作为其他靶标的外部结构证据列出。',
      '8T6U has two H9F instances, A2204 and B2203. Across the two AE1 chains they have 19 and 17 proximal residues within 4.0 Å, respectively. The nearest heavy-atom pairs are Phe532 O–O4 (3.00 Å) for A2204 and Ser856 OG–O4 (2.73 Å) for B2203. ENT1 entry 6OB7 contains dilazep. H9F also occurs in 8I4A (ABCC4), 7DMC (Hsp90α) and 9T0H (NCS-1), listed as external structures at other targets.'),
    sources:[ae1Paper,pdb('8T6U'),ccd('H9F'),pdb('6OB7'),pdb('8I4A'),pdb('7DMC'),pdb('9T0H')]}
},[{id:'8T6U',target:'ae1',molecule:'dipyridamole',method:cryo,resolution:'3.13',
  chain:'A / B',code:'H9F',subtitle:'AE1–dipyridamole',
  state:L('抑制剂结合态','Inhibitor-bound state'),
  construct:L('人 AE1 膜结构域二聚体，作者链 A / B','Human AE1 membrane-domain dimer, author chains A / B'),
  ligandInstances:{A2204:{label:'Dipyridamole A2204',asymId:'H'},B2203:{label:'Dipyridamole B2203',asymId:'N'}}}]);
}
