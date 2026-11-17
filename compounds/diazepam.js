registerCompound({
  "molecule": {
    "id": "diaz",
    "group": "molecules",
    "name": "Diazepam",
    "subtitle": {
      "zh": "地西泮 · Diazepam 2 mg",
      "en": "Diazepam 2 mg"
    },
    "tag": {
      "zh": "英国 MHRA批准",
      "en": "UK MHRA approved"
    },
    "description": {
      "zh": "长效苯二氮䓬类药物。此条按英国片剂标签归档焦虑伴失眠用法。",
      "en": "Long-acting benzodiazepine. This dossier covers anxiety-associated insomnia under the UK tablet label."
    },
    "fields": [],
    "sources": [
      {
        "label": "PubChem CID 3016",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3016"
      },
      {
        "label": "Diazepam 2 mg · UK SmPC",
        "url": "https://www.medicines.org.uk/emc/product/101911/smpc"
      },
      {
        "label": "RCSB PDB 6X3X",
        "url": "https://www.rcsb.org/structure/6X3X"
      }
    ],
    "links": [
      "gaba",
      "gabaa-family",
      "gaba-signal",
      "cyp3a4",
      "6X3X"
    ],
    "approval": {
      "jurisdiction": "GB",
      "status": "approved",
      "source": "https://www.medicines.org.uk/emc/product/101911/smpc"
    }
  },
  "profile": {
    "keyReferences": [{"citation": "Kim JJ, Gharpure A, Teng J, Zhuang Y, Howard RJ, Zhu S, et al. Shared structural mechanisms of general anaesthetics and benzodiazepines. Nature. 2020;585(7824):303-308.", "pmid": "32879488", "url": "https://doi.org/10.1038/s41586-020-2654-5"}, {"citation": "Kales A, Soldatos CR, Bixler EO, Kales JD, Vela-Bueno A. Diazepam: effects on sleep and withdrawal phenomena. J Clin Psychopharmacol. 1988;8(5):340-346.", "pmid": "3183072", "url": "https://pubmed.ncbi.nlm.nih.gov/3183072/"}],
    
    "chemistry": {
      "depiction": "assets/diaz.svg",
      "depictionSource": {
        "label": "PubChem CID 3016",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3016"
      },
      "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"7-chloro-1-methyl-5-phenyl-3H-1,4-benzodiazepin-2-one"],
        [{"zh":"同义词","en":"Synonyms"},"diazepam · Valium"],
        ["KEGG ID","D00293"], ["PharmGKB ID","PA449283"],
        
        [
          "PubChem CID",
          "3016"
        ],
        [
          {
            "zh": "分子式",
            "en": "Molecular formula"
          },
          "C₁₆H₁₃ClN₂O"
        ],
        [
          {
            "zh": "摩尔质量",
            "en": "Molar mass"
          },
          "284.74 g/mol"
        ],
        [
          "InChIKey",
          "AAOVKJBEBIDNHE-UHFFFAOYSA-N"
        ],
        [
          "SMILES",
          "CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3"
        ]
      ],
      "links": [{"label": "ChEMBL CHEMBL12", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL12/"}, {"label": "KEGG D00293", "url": "https://www.kegg.jp/entry/D00293"}],
      "sources": [
        {
          "label": "PubChem CID 3016",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3016"
        }
      ]
    },
    "regulatory": {
      "title": {
        "zh": "监管与制剂",
        "en": "Regulatory status and formulation"
      },
      "fields": [
        [
          {
            "zh": "监管地区",
            "en": "Jurisdiction"
          },
          {
            "zh": "英国 MHRA",
            "en": "UK MHRA"
          }
        ],
        [
          {
            "zh": "批准或说明书记录",
            "en": "Approval or label record"
          },
          "PL 06464/1400"
        ],
        [
          {
            "zh": "适应证摘要",
            "en": "Indication summary"
          },
          {
            "zh": "严重焦虑，包括伴失眠者的短期治疗。",
            "en": "Short-term treatment of severe anxiety, including when associated with insomnia."
          }
        ],
        [
          {
            "zh": "制剂与规格",
            "en": "Formulation and strengths"
          },
          {
            "zh": "所引产品为 2 mg 口服片。",
            "en": "The cited product is a 2 mg oral tablet."
          }
        ]
      ],
      "sources": [
        {
          "label": "Diazepam 2 mg · UK SmPC",
          "url": "https://www.medicines.org.uk/emc/product/101911/smpc"
        }
      ]
    },
    "pk": {
      "title": {
        "zh": "人体药代",
        "en": "Human pharmacokinetics"
      },
      "fields": [
        [
          {
            "zh": "口服血浆达峰",
            "en": "Oral plasma Tmax"
          },
          "30–90 min"
        ],
        [
          {
            "zh": "主要活性代谢物",
            "en": "Major active metabolite"
          },
          {
            "zh": "去甲地西泮。",
            "en": "Desmethyldiazepam."
          }
        ]
      ],
      "sources": [
        {
          "label": "Diazepam 2 mg · UK SmPC",
          "url": "https://www.medicines.org.uk/emc/product/101911/smpc"
        }
      ]
    },
    "safety": {
      "title": {
        "zh": "安全性与相互作用",
        "en": "Safety and interactions"
      },
      "fields": [
        [
          {
            "zh": "重点风险",
            "en": "Key risks"
          },
          {
            "zh": "镇静、精神运动能力受损、依赖及停药反跳。",
            "en": "Sedation, psychomotor impairment, dependence and rebound on withdrawal."
          }
        ],
        [
          {
            "zh": "相互作用",
            "en": "Interactions"
          },
          {
            "zh": "阿片类增加呼吸抑制风险。抑制 CYP3A4 或 CYP2C19 可延长暴露。",
            "en": "Opioids increase the risk of respiratory depression. CYP3A4 or CYP2C19 inhibition can prolong exposure."
          }
        ]
      ],
      "sources": [
        {
          "label": "Diazepam 2 mg · UK SmPC",
          "url": "https://www.medicines.org.uk/emc/product/101911/smpc"
        }
      ]
    },
    "structureEvidence": {
      "title": {
        "zh": "结构证据状态",
        "en": "Structure evidence status"
      },
      "summary": {
        "zh": "6X3X 的四个地西泮实例分别定位。D404 位于胞外 α₁/γ₂ 界面，另三个在跨膜区。接触图使用 PDB 作者编号。",
        "en": "The four diazepam instances in 6X3X are indexed separately. D404 is at the extracellular α₁/γ₂ interface and three others are in the transmembrane region. Contacts use PDB author numbering."
      },
      "sources": [
        {
          "label": "PMID 32879488",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32879488/"
        }
      ]
    },
    "clinical": [
      {
        "title": {
          "zh": "失眠 · 睡眠实验室序列研究",
          "en": "Insomnia · Sequential sleep laboratory study"
        },
        "summary": {
          "zh": "6 人依次经历安慰剂基线、地西泮 10 mg 和安慰剂停药阶段。",
          "en": "Six participants underwent placebo baseline, diazepam 10 mg, then placebo withdrawal."
        },
        "rows": [
          [
            {
              "zh": "睡眠改善",
              "en": "Sleep improvement"
            },
            {
              "zh": "初期治疗",
              "en": "Initial treatment"
            },
            "10 mg",
            {
              "zh": "原文报告显著改善。",
              "en": "Improvement reported as significant."
            },
            "—"
          ]
        ],
        "effectHeading": {
          "zh": "研究结果",
          "en": "Study result"
        },
        "note": {
          "zh": "小样本序列设计。撤药结果与治疗期分开评价。",
          "en": "Small sequential study. Withdrawal was assessed separately from treatment."
        },
        "sources": [
          {
            "label": "PMID 3183072",
            "url": "https://pubmed.ncbi.nlm.nih.gov/3183072/"
          }
        ]
      }
    ]
  },
  "assays": [
    {
      "molecule": "diaz",
      "target": "gaba",
      "action": {
        "zh": "正向别构调节",
        "en": "Positive allosteric modulation"
      },
      "method": {"zh": "放射性配体竞争结合", "en": "Radioligand competition binding"},
      "result": "Kᵢ = 1.53 nM",
      "system": {"zh": "苯二氮卓受体 · [³H]氟马西尼置换", "en": "Benzodiazepine receptor · [³H]flumazenil displacement"},
      "sources": [
        {
          "label": "PMID 25564376",
          "url": "https://pubmed.ncbi.nlm.nih.gov/25564376/"
        }
      ]
    }
  ],
  "effect": {
    "direction": "sleep",
    "qualifier": {
      "zh": "严重焦虑相关失眠",
      "en": "Insomnia associated with severe anxiety"
    },
    "ref": {
      "label": "Diazepam 2 mg · UK SmPC",
      "url": "https://www.medicines.org.uk/emc/product/101911/smpc"
    }
  },
  "complexes": [
    {
      "id": "6X3X",
      "subtitle": {
        "zh": "人 GABAₐ α₁β₂γ₂–GABA–地西泮",
        "en": "Human GABAₐ α₁β₂γ₂–GABA–diazepam"
      },
      "method": {
        "zh": "冷冻电镜",
        "en": "Cryo-EM"
      },
      "resolution": "2.92",
      "state": {
        "zh": "GABA 与地西泮共同结合",
        "en": "GABA and diazepam bound"
      },
      "target": "gaba",
      "molecule": "diaz",
      "code": "DZP",
      "chain": "ABCDE",
      "construct": {
        "zh": "人 α₁β₂γ₂ 实验构建体",
        "en": "Human α₁β₂γ₂ experimental construct"
      },
      "ligandInstances": {
        "D404": {
          "asymId": "U",
          "label": {
            "zh": "胞外位点 D404",
            "en": "Extracellular site D404"
          }
        },
        "A406": {
          "asymId": "Q",
          "label": {
            "zh": "跨膜位点 A406",
            "en": "Transmembrane site A406"
          }
        },
        "C406": {
          "asymId": "T",
          "label": {
            "zh": "跨膜位点 C406",
            "en": "Transmembrane site C406"
          }
        },
        "E403": {
          "asymId": "V",
          "label": {
            "zh": "跨膜位点 E403",
            "en": "Transmembrane site E403"
          }
        }
      }
    }
  ]
});
