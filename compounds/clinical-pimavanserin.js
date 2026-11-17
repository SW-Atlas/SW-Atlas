records.push(record('htr2a','targets','5-HT₂A',L('人 5-HT₂A 受体 · P28223','Human 5-HT₂A receptor · P28223'),
  L('血清素 GPCR','Serotonin GPCR'),
  L('HTR2A 编码的血清素受体。Pimavanserin 体外结合及功能证据来自美国标签。','Serotonin receptor encoded by HTR2A. Pimavanserin binding and functional data are reported in the US label.'),
  [['UniProt','P28223']],[uniprot('P28223'),pdb('6A93')],[]));
registerClinicalCandidate({
  "keyReferences": [{"citation": "Tariot PN, Cummings JL, Soto-Martin ME, Ballard C, Erten-Lyons D, Sultzer DL, et al. Trial of Pimavanserin in Dementia-Related Psychosis. N Engl J Med. 2021;385(4):309-319.", "pmid": "34289275", "url": "https://doi.org/10.1056/NEJMoa2034634"}],
  "id": "pimavanserin",
  "name": "Pimavanserin",
  "aliases": "",
  "kind": "single",
  "condition": {
    "zh": "创伤后应激障碍伴失眠",
    "en": "Insomnia in post-traumatic stress disorder"
  },
  "category": "insomnia",
  "phase": "II",
  "status": "RECRUITING",
  "summary": {
    "zh": "研究者发起；已有其他适应证",
    "en": "Investigator-initiated study. Pimavanserin has an approval for a different indication."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": "NUPLAZID · US label",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e6bea44-57d6-4bac-9328-46e1ee59f83b"
    },
    {
      "label": "PTSD insomnia open-label pilot",
      "url": "https://www.psychiatrist.com/jcp/pimavanserin-for-insomnia-veterans-with-ptsd/"
    }
  ],
  "studies": [
    {
      "id": "NCT05441280",
      "focus": "index",
      "title": "Pimavanserin for Insomnia in Veterans With PTSD",
      "phase": "II",
      "status": "RECRUITING",
      "updated": "2026-05-04",
      "started": {
        "date": "2023-12-28",
        "type": "ACTUAL"
      },
      "sponsor": "VA Office of Research and Development",
      "sponsorType": "FED",
      "enrollment": {
        "count": 60,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "64 Years"
      ],
      "conditions": [
        "Post-traumatic Stress Disorder",
        "Insomnia"
      ],
      "interventions": [
        "pimavanserin",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Insomnia Severity Index (ISI)",
          "timeFrame": "8 weeks post-randomization"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT05441280",
        "url": "https://clinicaltrials.gov/study/NCT05441280"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 10071196",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10071196"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-10071196.png",
    "depictionSource": {
      "label": "PubChem CID 10071196",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10071196"
    },
    "links": [{"label": "ChEMBL CHEMBL2111101", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2111101/"}, {"label": "KEGG D08969", "url": "https://www.kegg.jp/entry/D08969"}],
      "sources": [
      {
        "label": "PubChem CID 10071196",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10071196"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"1-[(4-fluorophenyl)methyl]-1-(1-methylpiperidin-4-yl)-3-[[4-(2-methylpropoxy)phenyl]methyl]urea"],
        [{"zh":"同义词","en":"Synonyms"},"Pimavanserin · ACP-103"],
        ["KEGG ID","D08969"], ["PharmGKB ID","PA166428901"],
        
      [
        "PubChem CID",
        "10071196"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C25H34FN3O2"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "427.6"
      ],
      [
        "InChIKey",
        "RKEWSXXUOLRFBX-UHFFFAOYSA-N"
      ],
      [
        "SMILES",
        "CC(C)COC1=CC=C(C=C1)CNC(=O)N(CC2=CC=C(C=C2)F)C3CCN(CC3)C"
      ]
    ]
  },
  "targets": [],
  "system": null,
  "publishedResult": null,
  "evidenceSections": [
    {
      "chapter": "pharmacology",
      "title": {
        "zh": "标签体外药理",
        "en": "In vitro pharmacology from the label"
      },
      "fields": [
        [
          "5-HT₂A",
          {
            "zh": "反向激动及拮抗活性，Kᵢ 0.087 nM。",
            "en": "Inverse agonist and antagonist activity, Kᵢ 0.087 nM."
          }
        ],
        [
          "5-HT₂C",
          {
            "zh": "标签报告较低结合亲和力，Kᵢ 0.44 nM。",
            "en": "Lower binding affinity in the label, Kᵢ 0.44 nM."
          }
        ]
      ],
      "sources": [
        {
          "label": "NUPLAZID · US label",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e6bea44-57d6-4bac-9328-46e1ee59f83b"
        }
      ]
    },
    {
      "chapter": "clinical",
      "title": {
        "zh": "PTSD 相关失眠的早期证据",
        "en": "Early evidence in PTSD-associated insomnia"
      },
      "fields": [
        [
          {
            "zh": "开放标签研究",
            "en": "Open-label study"
          },
          {
            "zh": "6 例退伍军人接受睡前 34 mg。小样本无对照，随机试验 NCT05441280 单列。",
            "en": "Six veterans received 34 mg at bedtime in an uncontrolled pilot. The randomized trial NCT05441280 is indexed separately."
          }
        ]
      ],
      "sources": [
        {
          "label": "PTSD insomnia open-label pilot",
          "url": "https://www.psychiatrist.com/jcp/pimavanserin-for-insomnia-veterans-with-ptsd/"
        }
      ]
    },
    {
      "chapter": "safety",
      "title": {
        "zh": "标签安全性",
        "en": "Label safety"
      },
      "fields": [
        [
          {
            "zh": "QT 间期",
            "en": "QT interval"
          },
          {
            "zh": "美国标签列出 QT 延长风险。标签适应证为帕金森病精神病性症状。",
            "en": "The US label warns about QT prolongation. Its indication concerns Parkinson's disease psychosis."
          }
        ]
      ],
      "sources": [
        {
          "label": "NUPLAZID · US label",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e6bea44-57d6-4bac-9328-46e1ee59f83b"
        }
      ]
    }
  ]
});
