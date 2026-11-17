{
const readout=source('Centessa · SEC exhibit · CRYSTAL-1 initial cohorts',
  'https://www.sec.gov/Archives/edgar/data/1847903/000184790325000154/cntapr-q32025.htm');
const assays=source('Centessa · World Sleep 2023 · slide 4, human receptor assays',
  'https://www.sec.gov/Archives/edgar/data/1847903/000184790323000182/worldsleep2023orx7501025.htm');
registerClinicalCandidate({
  "id": "cleminorexton",
  "name": "Cleminorexton",
  "aliases": "ORX750",
  "kind": "single",
  "condition": {
    "zh": "1型和2型发作性睡病",
    "en": "Narcolepsy types 1 and 2"
  },
  "category": "narcolepsy",
  "phase": "II/III",
  "status": "RECRUITING",
  "summary": {
    "zh": "口服 OX2R 激动剂。CRYSTAL-1 的早期交叉队列已有申办方读出，完整试验仍在进行。SAPPHIRE II/III 期单列。",
    "en": "Oral OX2R agonist. The sponsor has reported early CRYSTAL-1 crossover cohorts and the full trial is ongoing. Phase II/III SAPPHIRE is indexed separately."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "keyReferences": [{"citation": "Centessa Pharmaceuticals. CRYSTAL-1 initial cohorts (ORX750 / cleminorexton). SEC exhibit, Q3 2025. 2025.", "url": "https://www.sec.gov/Archives/edgar/data/1847903/000184790325000154/cntapr-q32025.htm"}, {"citation": "Centessa Pharmaceuticals. ORX750 human receptor assays, slide 4. World Sleep 2023. 2023.", "url": "https://www.sec.gov/Archives/edgar/data/1847903/000184790323000182/worldsleep2023orx7501025.htm"}],
  "references": [
    {
      "label": "Centessa · ORX750 · OX2R agonism",
      "url": "https://centessa.com/orexin-agonist-orx750/"
    },
    readout, assays
  ],
  "studies": [
    {
      "id": "NCT07598708",
      "focus": "index",
      "title": "A Study to Investigate the Effects of Cleminorexton Compared With Placebo in the Treatment of Participants With Central Disorders of Hypersomnolence",
      "phase": "II/III",
      "status": "RECRUITING",
      "updated": "2026-11-03",
      "started": {
        "date": "2026-05-29",
        "type": "ACTUAL"
      },
      "sponsor": "Centessa Pharmaceuticals (UK) Limited",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 222,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "70 Years"
      ],
      "conditions": [
        "Narcolepsy Type 1",
        "Narcolepsy Type 2"
      ],
      "interventions": [
        "cleminorexton",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change from baseline in mean sleep latency (average of the first 4 trials) on the Maintenance of Wakefulness Test (MWT)",
          "timeFrame": "Baseline to week 12"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07598708",
        "url": "https://clinicaltrials.gov/study/NCT07598708"
      }
    },
    {
      "id": "NCT06752668",
      "focus": "additional",
      "title": "A Study of ORX750 in Participants With Narcolepsy and Idiopathic Hypersomnia",
      "phase": "II",
      "status": "RECRUITING",
      "updated": "2026-04-27",
      "started": {
        "date": "2024-12-23",
        "type": "ACTUAL"
      },
      "sponsor": "Centessa Pharmaceuticals (UK) Limited",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 248,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "65 Years"
      ],
      "conditions": [
        "Narcolepsy Type 1",
        "Narcolepsy Type 2",
        "Idiopathic Hypersomnia"
      ],
      "interventions": [
        "ORX750",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Number of Participants With Treatment Emergent Adverse Events (TEAEs) and Serious TEAEs",
          "timeFrame": "Up to Day 35"
        },
        {
          "measure": "Number of Participants With Abnormal Changes From Baseline in Laboratory Tests",
          "timeFrame": "Up to Day 35"
        },
        {
          "measure": "Number of Participants With Abnormal Change From Baseline in Vital Signs",
          "timeFrame": "Up to Day 35"
        },
        {
          "measure": "Number of Participants With Abnormal Change From Baseline in Electrocardiograms (ECG)",
          "timeFrame": "Up to Day 35"
        },
        {
          "measure": "Number of Participants With Suicidal Ideation or Suicidal Behavior as Measured Using Columbia-Suicide Severity Rating Scale (C-SSRS)",
          "timeFrame": "Up to Day 35"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06752668",
        "url": "https://clinicaltrials.gov/study/NCT06752668"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 176507653",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/176507653"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-176507653.png",
    "depictionSource": {
      "label": "PubChem CID 176507653",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/176507653"
    },
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"1-fluoro-N-[(16S,17S)-4,6,23-trifluoro-11-oxo-8-oxa-12-azatetracyclo[17.3.1.02,7.012,17]tricosa-1(22),2(7),3,5,19(23),20-hexaen-16-yl]cyclopropane-1-sulfonamide"],
        [{"zh":"同义词","en":"Synonyms"},"Cleminorexton · AL84E4VK26"],
        ["KEGG ID","D13371"],
        
      [
        "PubChem CID",
        "176507653"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C24H24F4N2O4S"
      ],
      [
        {
          "zh": "分子量",
          "en": "Molecular weight"
        },
        "512.5 g/mol"
      ],
      [
        "InChIKey",
        "XGXKCWFIUAZZRS-PMACEKPBSA-N"
      ],
      [
        "SMILES",
        "C1C[C@@H]([C@@H]2CC3=C(C(=CC=C3)C4=C(C(=CC(=C4)F)F)OCCC(=O)N2C1)F)NS(=O)(=O)C5(CC5)F"
      ]
    ],
    "links": [{"label": "KEGG D13371", "url": "https://www.kegg.jp/entry/D13371"}],
      "sources": [
      {
        "label": "PubChem CID 176507653",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/176507653"
      }
    ]
  },
  "targets": [
    "ox2"
  ],
  "system": "orexin",
  evidenceSections:[
    {chapter:'clinical',title:L('CRYSTAL-1 初始交叉队列 · 申办方阶段性披露','CRYSTAL-1 initial crossover cohorts · sponsor interim disclosure'),fields:[
      [L('分析范围','Analysis scope'),L('截至 2025-09-23，55 人完成初始两周交叉队列给药。表中比较为第 2 周；不同终点的人数按披露分列。登记的主要终点为安全性及耐受性，MWT 和 ESS 是药效指标。','As of 2025-09-23, 55 participants completed dosing in the initial two-week crossover cohorts. Comparisons are at week 2 with endpoint-specific denominators. Registered primary outcomes address safety and tolerability. MWT and ESS are pharmacodynamic measures.')]
    ],table:{columns:[L('人群 / 每日剂量','Population / daily dose'),L('MWT 入睡潜伏期','MWT sleep latency'),L('ESS 治疗 / 安慰剂','ESS active / placebo'),L('每周猝倒率','Weekly cataplexy rate')],rows:[
      ['NT1 · 1.5 mg',L('较安慰剂 >20 分钟（n=6，P=0.0026）','>20 min vs placebo (n=6, P=0.0026)'),'5.1 / 18.7 (n=7, P=0.0001)','IRR 0.13 (n=7, P=0.0025)'],
      ['NT2 · 4 mg',L('较安慰剂 >10 分钟（n=10，P=0.0193）','>10 min vs placebo (n=10, P=0.0193)'),'8.1 / 15.9 (n=10, P=0.0023)','—'],
      ['IH · 2 mg',L('较安慰剂 P=0.0213（n=17），本披露未给出效应值','P=0.0213 vs placebo (n=17); effect size unavailable in this disclosure'),L('本披露未给出组间数值','No arm-level figures in this disclosure'),'—']
    ]},sources:[readout,trial('NCT06752668')]},
    {chapter:'pharmacology',title:L('人 OX2R 功能实验','Human OX2R functional assay'),fields:[
      [L('重组受体钙读数','Recombinant receptor calcium readout'),L('CHO 细胞表达重组人受体，FLIPR 功能 EC₅₀ 为 OX2R 0.11 nM、OX1R 1,100 nM（会议披露，幻灯片 4）。','In CHO cells expressing recombinant human receptors, FLIPR functional EC₅₀ was 0.11 nM at OX2R and 1,100 nM at OX1R (conference disclosure, slide 4).')]
    ],sources:[assays]},
    {chapter:'safety',title:L('初始队列的安全性披露','Safety in the initial cohorts'),fields:[
      [L('合并披露','Pooled disclosure'),L('申办方汇总报告尿频 51%、失眠 22%、头晕 13%、头痛 11%。NT2 队列 1 人因尿急停止治疗。该披露未按剂量和对照列出分母。','The sponsor reported pooled frequencies of pollakiuria (51%), insomnia (22%), dizziness (13%) and headache (11%). One NT2 participant discontinued for urinary urgency. Arm-specific denominators were unavailable in this disclosure.')]
    ],sources:[readout]}
  ],
  structureEvidence:{title:L('直接复合物核验','Direct-complex search'),summary:L(
    '申办方报告采用结构辅助设计。按 Cleminorexton、ORX750 和已核对的 InChIKey 检索，未核到可归属的公开实验复合物坐标。',
    'The sponsor reported structure-guided design. Searches by cleminorexton, ORX750 and the verified InChIKey yielded no public experimental complex that could be attributed to the compound.'),
    sources:[assays,source('RCSB PDB','https://www.rcsb.org/')]}
});
}
