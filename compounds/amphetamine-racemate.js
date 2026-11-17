records.push(
  record('slc18a2','targets','VMAT2',L('囊泡单胺转运体 2 · SLC18A2 · 人','Vesicular monoamine transporter 2 · SLC18A2 · Human'),L('转运体','Transporter'),
    L('安非他明进入突触囊泡并置换单胺的转运体。人 VMAT2 有安非他明结合的冷冻电镜结构。','The vesicular transporter through which amphetamine enters synaptic vesicles and displaces monoamines. Cryo-EM structures capture human VMAT2 bound to amphetamine.'),
    [['UniProt','Q05940']],[uniprot('Q05940'),pdb('9W8F')],[]),
  record('slc18a1','targets','VMAT1',L('囊泡单胺转运体 1 · SLC18A1 · 人','Vesicular monoamine transporter 1 · SLC18A1 · Human'),L('转运体','Transporter'),
    L('安非他明结合的 VMAT1 结构提供另一亚型参照。','An amphetamine-bound VMAT1 structure provides a reference for this subtype.'),
    [['UniProt','P54219']],[uniprot('P54219'),pdb('8TGH')],[])
);

registerCompound({
  "molecule": {
    "id": "amph",
    "group": "molecules",
    "name": "Amphetamine (racemate)",
    "subtitle": {
      "zh": "安非他明（外消旋） · Evekeo IR",
      "en": "Evekeo IR"
    },
    "tag": {
      "zh": "美国 FDA批准",
      "en": "US FDA approved"
    },
    "description": {
      "zh": "Evekeo 速释制剂含 1:1 的 d/l 安非他明硫酸盐。化学登记图为立体化学未指定的游离碱。",
      "en": "Evekeo immediate-release tablets contain 1:1 d/l amphetamine sulfate. The chemistry depiction is the free base with unspecified stereochemistry."
    },
    "fields": [],
    "sources": [
      {
        "label": "PubChem CID 3007",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3007"
      },
      {
        "label": "Evekeo oral tablets · DailyMed",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
      },
      {
        "label": "Drugs@FDA · Evekeo · ANDA 200166",
        "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=200166"
      }
    ],
    "links": [
      "dat",
      "net",
      "sert",
      "slc18a2",
      "slc18a1",
      "monoamine-reuptake"
    ],
    "approval": {
      "jurisdiction": "US",
      "status": "approved",
      "source": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=200166"
    }
  },
  "complexes": [
    structure('9W8F',L('人 VMAT2 · 安非他明','Human VMAT2 · Amphetamine'),cryo,'2.97',L('安非他明结合态','Amphetamine-bound'),'slc18a2','amph','AMPH','A',L('人 VMAT2 与安非他明。','Human VMAT2 bound to amphetamine.')),
    structure('8UCO',L('人 VMAT2 · 安非他明 · 融合构建','Human VMAT2 · Amphetamine · Fusion construct'),cryo,'3.25',L('安非他明结合态','Amphetamine-bound'),'slc18a2','amph','AMPH','A',L('人 VMAT2 与酵母细胞色素 c 氧化酶融合构建。','Human VMAT2 in a fusion construct with yeast cytochrome c oxidase.')),
    structure('8TGH',L('人 VMAT1 · 安非他明 · 利血平','Human VMAT1 · Amphetamine · Reserpine'),cryo,'3.50',L('安非他明结合态','Amphetamine-bound'),'slc18a1','amph','AMPH','A',L('人 VMAT1 二聚体与安非他明及利血平。','Human VMAT1 dimer bound to amphetamine and reserpine.'))
  ],
  "profile": {
    "keyReferences": [{"citation": "Childress AC, Brams M, Cutler AJ, Kollins SH, Northcutt J, Padilla A, et al. The Efficacy and Safety of Evekeo, Racemic Amphetamine Sulfate, for Treatment of Attention-Deficit/Hyperactivity Disorder Symptoms: A Multicenter, Dose-Optimized, Double-Blind, Randomized, Placebo-Controlled Crossover Laboratory Classroom Study. J Child Adolesc Psychopharmacol. 2015;25(5):402-414.", "pmid": "25692608", "url": "https://doi.org/10.1089/cap.2014.0176"}, {"citation": "Heal DJ, Smith SL, Gosden J, Nutt DJ. Amphetamine, past and present--a pharmacological and clinical perspective. J Psychopharmacol. 2013;27(6):479-496.", "pmid": "23539642", "url": "https://doi.org/10.1177/0269881113482532"}],
    
    "chemistry": {
      "depiction": "assets/amph.svg",
      "depictionSource": {
        "label": "PubChem CID 3007",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3007"
      },
      "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"1-phenylpropan-2-amine"],
        [{"zh":"同义词","en":"Synonyms"},"AMPHETAMINE · Amfetamine"],
        
        [
          "PubChem CID",
          "3007"
        ],
        [
          "CAS",
          "300-62-9"
        ],
        [
          {
            "zh": "分子式",
            "en": "Molecular formula"
          },
          "C₉H₁₃N"
        ],
        [
          {
            "zh": "摩尔质量",
            "en": "Molar mass"
          },
          "135.21 g/mol"
        ],
        [
          "KEGG ID",
          "D07445"
        ], ["PharmGKB ID","PA448408"],
        [
          "InChIKey",
          "KWTSXDURSIMDCE-UHFFFAOYSA-N"
        ],
        [
          "SMILES",
          "CC(CC1=CC=CC=C1)N"
        ]
      ],
      "links": [{"label": "ChEMBL CHEMBL405", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL405/"}, {"label": "KEGG D07445", "url": "https://www.kegg.jp/entry/D07445"}],
      "sources": [
        {
          "label": "PubChem CID 3007",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/3007"
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
            "zh": "美国 FDA",
            "en": "US FDA"
          }
        ],
        [
          {
            "zh": "批准或说明书记录",
            "en": "Approval or label record"
          },
          "2012-08-09 · ANDA 200166"
        ],
        [
          {
            "zh": "适应证摘要",
            "en": "Indication summary"
          },
          {
            "zh": "发作性睡病、ADHD，以及外源性肥胖的短期辅助治疗。",
            "en": "Narcolepsy, ADHD and short-term adjunctive treatment of exogenous obesity."
          }
        ],
        [
          {
            "zh": "制剂与规格",
            "en": "Formulation and strengths"
          },
          {
            "zh": "口服硫酸盐速释片 5、10 mg。",
            "en": "Immediate-release oral sulfate tablets, 5 and 10 mg."
          }
        ],
        [
          {
            "zh": "说明书剂量摘要",
            "en": "Label dosage summary"
          },
          {
            "zh": "发作性睡病说明书常用 5–60 mg/日，按反应分次给药。",
            "en": "For narcolepsy, the label lists a usual range of 5–60 mg/day in divided doses according to response."
          }
        ]
      ],
      "sources": [
        {
          "label": "Evekeo oral tablets · DailyMed",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
        },
        {
          "label": "Drugs@FDA · Evekeo · ANDA 200166",
          "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=200166"
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
            "zh": "健康成人 20 mg 速释平均达峰（d / l）",
            "en": "Mean Tmax after 20 mg immediate-release in healthy adults (d / l)"
          },
          "2.51 / 2.72 h"
        ],
        [
          {
            "zh": "平均半衰期（d / l）",
            "en": "Mean half-life (d / l)"
          },
          "10.1 / 11.6 h"
        ]
      ],
      "sources": [
        {
          "label": "FDA clinical review · Study AR17.001, Table 2",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/209905Orig1s000MedR.pdf"
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
            "zh": "黑框警告",
            "en": "Boxed warning"
          },
          {
            "zh": "滥用、误用与成瘾。",
            "en": "Abuse, misuse and addiction."
          }
        ],
        [
          {
            "zh": "重点风险",
            "en": "Key risks"
          },
          {
            "zh": "心率及血压升高、失眠和食欲下降。",
            "en": "Increased heart rate and blood pressure, insomnia and reduced appetite."
          }
        ],
        [
          {
            "zh": "禁忌相互作用",
            "en": "Contraindicated interaction"
          },
          {
            "zh": "MAOI 同用或停用未满 14 日。",
            "en": "MAOIs during use and within 14 days of discontinuation."
          }
        ]
      ],
      "sources": [
        {
          "label": "Evekeo oral tablets · DailyMed",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
        }
      ]
    },
    "structureEvidence": {
      "title": {
        "zh": "结构证据状态",
        "en": "Structure evidence status"
      },
      "summary": {
        "zh": "人 VMAT2（9W8F、8UCO）与 VMAT1（8TGH）均有安非他明结合的冷冻电镜结构，直接对应其囊泡单胺置换机制；d 对映体另有果蝇 DAT 结构 4XP9 参照。",
        "en": "Cryo-EM structures capture human VMAT2 (9W8F, 8UCO) and VMAT1 (8TGH) bound to amphetamine, matching its vesicular monoamine-displacing mechanism; the d enantiomer also has the fly DAT reference 4XP9."
      },
      "sources": [
        {
          "label": "RCSB PDB 4XP9",
          "url": "https://www.rcsb.org/structure/4XP9"
        }
      ]
    },
    "clinical": [
      {
        "title": {
          "zh": "发作性睡病 · 适应证记录",
          "en": "Narcolepsy · Label indication"
        },
        "summary": {
          "zh": "美国速释片说明书列出发作性睡病。",
          "en": "The US immediate-release label lists narcolepsy."
        },
        "rows": [
          [
            {
              "zh": "发作性睡病疗效",
              "en": "Narcolepsy efficacy"
            },
            {
              "zh": "标签适应证",
              "en": "Label indication"
            },
            {
              "zh": "Evekeo 速释片",
              "en": "Evekeo immediate-release"
            },
            {
              "zh": "定量终点待补",
              "en": "Quantitative endpoint pending"
            },
            "—"
          ]
        ],
        "effectHeading": {
          "zh": "研究结果",
          "en": "Study result"
        },
        "note": {
          "zh": "该适应证的制剂特异性对照试验效应量有待补充。",
          "en": "A formulation-specific controlled effect estimate for this indication is pending."
        },
        "sources": [
          {
            "label": "Evekeo oral tablets · DailyMed",
            "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
          }
        ]
      },
      {
        "title": {
          "zh": "儿科 ADHD · 速释片交叉试验",
          "en": "Pediatric ADHD · Immediate-release crossover study"
        },
        "summary": {
          "zh": "6–12 岁儿童经剂量优化后进入双盲、安慰剂对照交叉阶段。",
          "en": "Children aged 6–12 years entered a double-blind placebo-controlled crossover phase after dose optimization."
        },
        "rows": [
          [
            "SKAMP-Combined",
            {
              "zh": "给药后 2 h",
              "en": "2 h post-dose"
            },
            {
              "zh": "个体优化剂量",
              "en": "Individual optimized dose"
            },
            "−7.9",
            "95% CI −10.1 to −5.6"
          ]
        ],
        "effectHeading": {
          "zh": "相对安慰剂差值",
          "en": "Placebo-adjusted difference"
        },
        "note": {
          "zh": "SKAMP 评估课堂 ADHD 症状。",
          "en": "SKAMP measures ADHD symptoms in the classroom."
        },
        "sources": [
          {
            "label": "Childress et al. · PMID 25692608",
            "url": "https://pubmed.ncbi.nlm.nih.gov/25692608/"
          },
          {
            "label": "FDA label · Table 3 (Evekeo IR study)",
            "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/209905s004lbl.pdf"
          }
        ]
      }
    ]
  },
  "assays": [
    {
      "molecule": "amph",
      "target": "net",
      "action": {
        "zh": "促进释放",
        "en": "Releasing agent"
      },
      "method": {
        "zh": "放射性标记递质释放",
        "en": "Radiolabelled transmitter release"
      },
      "result": "EC₅₀ = 7.07 nM",
      "system": {
        "zh": "大鼠脑突触体 · [³H]去甲肾上腺素释放",
        "en": "Rat brain synaptosomes · [³H]norepinephrine release"
      },
      "sources": [
        {
          "label": "Rothman et al. · Synapse 2001",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11071707/"
        }
      ]
    },
    {
      "molecule": "amph",
      "target": "dat",
      "action": {
        "zh": "促进释放",
        "en": "Releasing agent"
      },
      "method": {
        "zh": "放射性标记递质释放",
        "en": "Radiolabelled transmitter release"
      },
      "result": "EC₅₀ = 24.8 nM",
      "system": {
        "zh": "大鼠脑突触体 · [³H]多巴胺释放",
        "en": "Rat brain synaptosomes · [³H]dopamine release"
      },
      "sources": [
        {
          "label": "Rothman et al. · Synapse 2001",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11071707/"
        }
      ]
    },
    {
      "molecule": "amph",
      "target": "sert",
      "action": {
        "zh": "促进释放",
        "en": "Releasing agent"
      },
      "method": {
        "zh": "放射性标记递质释放",
        "en": "Radiolabelled transmitter release"
      },
      "result": "EC₅₀ = 1765 nM",
      "system": {
        "zh": "大鼠脑突触体 · [³H]5-羟色胺释放",
        "en": "Rat brain synaptosomes · [³H]serotonin release"
      },
      "sources": [
        {
          "label": "Rothman et al. · Synapse 2001",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11071707/"
        }
      ]
    }
  ],
  "effect": {
    "direction": "wake",
    "qualifier": {
      "zh": "发作性睡病",
      "en": "Narcolepsy"
    },
    "ref": {
      "label": "Evekeo oral tablets · DailyMed",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
    }
  }
});
