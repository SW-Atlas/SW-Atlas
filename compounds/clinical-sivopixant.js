records.push(record('p2rx3','targets','P2X3',L('人嘌呤能受体 P2X3 · P56373','Human P2X purinoceptor 3 · P56373'),
  L('ATP 门控阳离子通道','ATP-gated cation channel'),
  L('P2RX3 编码的 ATP 门控通道。21FG 记录了 Sivopixant 与 ATP 共结合的关闭态。','ATP-gated channel encoded by P2RX3. 21FG captures the closed state with both sivopixant and ATP.'),
  [['UniProt','P56373']],[uniprot('P56373'),pdb('21FG'),pdb('21DX')],[]));
registerClinicalCandidate({
  "keyReferences": [{"citation": "Yamamoto S, Horita N, Hara J, Sasamoto M, Kanemitsu Y, Hara Y, et al. Benefit-Risk Profile of P2X3 Receptor Antagonists for Treatment of Chronic Cough: Dose-Response Model-Based Network Meta-Analysis. Chest. 2024;166(5):1124-1140.", "pmid": "38857780", "url": "https://doi.org/10.1016/j.chest.2024.05.015"}, {"citation": "Zhao Z, Wang DP, Zhang X, Gao Y, Xu H, Teng X, et al. Structure of the human P2X3 receptor reveals the basis for subtype-selective inhibition by sivopixant. PLoS Biol. 2026;24(4):e3003777.", "pmid": "42018567", "url": "https://doi.org/10.1371/journal.pbio.3003777"}],
  "id": "sivopixant",
  "name": "Sivopixant",
  "aliases": "S-600918",
  "kind": "single",
  "condition": {
    "zh": "含中枢性成分的睡眠呼吸暂停",
    "en": "Sleep apnea with a central component"
  },
  "category": "breathing",
  "phase": "II",
  "status": "ACTIVE_NOT_RECRUITING",
  "summary": {
    "zh": "单药研究臂；SASS-001 是另行记录的复方项目",
    "en": "The Phase II registration includes a sivopixant monotherapy arm. SASS-001 is indexed separately as a combination program."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": "Shionogi · Sivopixant and SASS-001",
      "url": "https://www.shionogi.com/global/en/news/2026/03/20260324.html"
    },
    {
      "label": "RCSB · 21FG",
      "url": "https://www.rcsb.org/structure/21FG"
    },
    {
      "label": "Zhao et al. · PLOS Biology 2026",
      "url": "https://doi.org/10.1371/journal.pbio.3003777"
    }
  ],
  "studies": [
    {
      "id": "NCT06776432",
      "focus": "index",
      "title": "Safety and Efficacy Study of Sivopixant, Acetazolamide and SASS-001 in Sleep Apnea",
      "phase": "II",
      "status": "ACTIVE_NOT_RECRUITING",
      "updated": "2026-05-06",
      "started": {
        "date": "2025-04-02",
        "type": "ACTUAL"
      },
      "sponsor": "Shionogi",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 60,
        "type": "ACTUAL"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "85 Years"
      ],
      "conditions": [
        "Sleep Apnea"
      ],
      "interventions": [
        "Sivopixant",
        "Placebo",
        "Acetazolamide",
        "SASS-001"
      ],
      "primaryOutcomes": [
        {
          "measure": "Primary Endpoint - Change in apnea-hypopnea index (SASS-001 arm vs baseline at Visit 7 polysomnography). Scale is minimum -60 to max 60. Lower scores mean improvement from baseline.",
          "timeFrame": "up to 6 weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06776432",
        "url": "https://clinicaltrials.gov/study/NCT06776432"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 117752163",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/117752163"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-117752163.png",
    "depictionSource": {
      "label": "PubChem CID 117752163",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/117752163"
    },
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"(2S)-3-[3-[(4-chlorophenyl)methyl]-2,6-dioxo-4-(4-pyridin-2-yloxyanilino)-1,3,5-triazin-1-yl]-2-methylpropanoic acid"],
        [{"zh":"同义词","en":"Synonyms"},"Sivopixant · S0N1VEG94I"],
        ["KEGG ID","D12355"],
        
      [
        "PubChem CID",
        "117752163"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C25H22ClN5O5"
      ],
      [
        {
          "zh": "分子量",
          "en": "Molecular weight"
        },
        "507.9 g/mol"
      ],
      [
        "InChIKey",
        "SKZQFKBIJUXXCG-INIZCTEOSA-N"
      ],
      [
        "SMILES",
        "C[C@@H](CN1C(=O)N=C(N(C1=O)CC2=CC=C(C=C2)Cl)NC3=CC=C(C=C3)OC4=CC=CC=N4)C(=O)O"
      ]
    ],
    "links": [{"label": "ChEMBL CHEMBL5084939", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5084939/"}, {"label": "KEGG D12355", "url": "https://www.kegg.jp/entry/D12355"}],
      "sources": [
      {
        "label": "PubChem CID 117752163",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/117752163"
      }
    ]
  },
  "targets": [],
  "system": null,
  "publishedResult": null,
  "evidenceSections": [
    {chapter:'clinical',title:L('日本单药交叉试验 · 阴性主要终点','Japanese monotherapy crossover · negative primary outcome'),
      fields:[
        [L('设计','Design'),L('Sivopixant 300 mg 与安慰剂交叉比较，主要终点为第 7 天 AHI 较基线的变化。','Crossover comparison of sivopixant 300 mg and placebo. The primary endpoint was change in AHI from baseline at day 7.')],
        [L('主要结果','Primary result'),L('调整后组间差 −0.89 次/小时（95% CI −5.18 至 3.39，P = 0.6711）。此为单药试验。','Adjusted between-treatment difference −0.89 events/hour (95% CI −5.18 to 3.39; P = 0.6711). This was a monotherapy study.')]
      ],sources:[source('Japan Registry of Clinical Trials · jRCT2080225317','https://jrct.mhlw.go.jp/en-latest-detail/jRCT2080225317')]},
    {chapter:'safety',title:L('日本单药交叉试验 · 安全性','Japanese monotherapy crossover · safety'),
      fields:[[L('治疗相关事件','Treatment-related events'),L('登记列出 Sivopixant 组的味觉异常，以及安慰剂组的头痛和血小板计数下降。','The registry lists dysgeusia with sivopixant, and headache and decreased platelet count with placebo.')]],
      sources:[source('Japan Registry of Clinical Trials · jRCT2080225317','https://jrct.mhlw.go.jp/en-latest-detail/jRCT2080225317')]},
    {
      "chapter": "pharmacology",
      "title": {
        "zh": "靶标与作用位点",
        "en": "Target and site of action"
      },
      "fields": [
        [
          {
            "zh": "作用方式",
            "en": "Mode of action"
          },
          {
            "zh": "Sivopixant 是 P2X3 负别构调节剂，结合在胞外结构域中央腔入口。原始研究用全细胞膜片钳和定点突变检验抑制机制。",
            "en": "Sivopixant is a negative allosteric modulator of P2X3 that binds at the extracellular central-pocket portal. Whole-cell patch clamp and mutagenesis were used to test inhibition."
          }
        ]
      ],
      "sources": [
        {
          "label": "Zhao et al. · PLOS Biology 2026",
          "url": "https://doi.org/10.1371/journal.pbio.3003777"
        }
      ]
    }
  ]
}, [{id:'21FG',target:'p2rx3',molecule:'sivopixant',method:cryo,resolution:'3.34',chain:'A',code:'A1E2N',
  subtitle:'P2X3–sivopixant–ATP',state:L('共结合关闭态','Co-bound closed state'),
  construct:L('人 P2X3 同源三聚体 · 配体 A401','Human P2X3 homotrimer · ligand A401'),
  ligandInstances:{A401:{label:'Sivopixant',asymId:'D'}}
}]);
