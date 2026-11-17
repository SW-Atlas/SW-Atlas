records.push({
  ...record('ms4a1','targets','CD20',L('B 淋巴细胞抗原 CD20 · P11836','B-lymphocyte antigen CD20 · P11836'),
    L('B 细胞表面蛋白','B-cell surface protein'),
    L('MS4A1 编码的抗体靶标。6Y92 解析了人 CD20 与 Ofatumumab Fab 的复合物。','Antibody target encoded by MS4A1. 6Y92 resolves human CD20 with ofatumumab Fab.'),
    [['UniProt','P11836']],[uniprot('P11836'),pdb('6Y92')],[]),
  structureReferences:[{id:'6Y92',ligand:'Ofatumumab Fab',state:L('抗体片段结合态','Antibody fragment-bound state'),method:cryo,resolution:'4.73'}]
});
registerClinicalCandidate({
  "keyReferences": [{"citation": "Wang X, Zhang X, Yuan N, Liu Y. Ofatumumab treatment in new-onset narcolepsy type 1 following SARS-CoV-2 infection. Ann Clin Transl Neurol. 2025;12(3):666-669.", "pmid": "39729629", "url": "https://doi.org/10.1002/acn3.52284"}],
  "id": "ofatumumab",
  "name": "Ofatumumab",
  "aliases": "",
  "kind": "single",
  "condition": {
    "zh": "难治性1型发作性睡病",
    "en": "Refractory narcolepsy type 1"
  },
  "category": "narcolepsy",
  "phase": "I/II",
  "status": "RECRUITING",
  "summary": {
    "zh": "研究者发起；已有其他适应证",
    "en": "Investigator-initiated study. Ofatumumab has approvals for other indications."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": "RCSB · 6Y92",
      "url": "https://www.rcsb.org/structure/6Y92"
    },
    {
      "label": "Kumar et al. · Science",
      "url": "https://doi.org/10.1126/science.abb8008"
    },
    {
      "label": "NT1 case report",
      "url": "https://pubmed.ncbi.nlm.nih.gov/39729629/"
    }
  ],
  "studies": [
    {
      "id": "NCT07871006",
      "focus": "index",
      "title": "Ofatumumab in Treatment-Refractory¬ Narcolepsy Type 1",
      "phase": "I/II",
      "status": "RECRUITING",
      "updated": "2026-10-13",
      "started": {
        "date": "2025-10-01",
        "type": "ACTUAL"
      },
      "sponsor": "Xijing Hospital",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 20,
        "type": "ESTIMATED"
      },
      "allocation": "NA",
      "masking": "NONE",
      "age": [
        "10 Years",
        "60 Years"
      ],
      "conditions": [
        "Narcolepsy Type 1 (NT1)"
      ],
      "interventions": [
        "ofatumumab 20mg"
      ],
      "primaryOutcomes": [
        {
          "measure": "the Epworth Sleepiness Scale （ESS ：0-24）",
          "timeFrame": "one month"
        },
        {
          "measure": "cataplexy rate",
          "timeFrame": "one month"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07871006",
        "url": "https://clinicaltrials.gov/study/NCT07871006"
      }
    }
  ],
  "identity": null,
  "chemistry": null,
  "targets": [],
  "system": null,
  "publishedResult": null,
  "evidenceSections": [
    {
      "chapter": "clinical",
      "title": {
        "zh": "NT1 个案与正式临床研究分开记录",
        "en": "NT1 case evidence and formal study"
      },
      "fields": [
        [
          {
            "zh": "已发表病例",
            "en": "Published case"
          },
          {
            "zh": "一例 SARS‑CoV‑2 感染后新发 NT1。接受 Ofatumumab 后观察到 B 细胞计数下降。该病例为无对照观察。",
            "en": "A single case of new-onset NT1 after SARS‑CoV‑2 infection showed reduced B-cell counts after ofatumumab. This was an uncontrolled observation."
          }
        ],
        [
          {
            "zh": "登记试验",
            "en": "Registered trial"
          },
          {
            "zh": "NCT07871006 针对难治性 NT1，登记暂无结果。",
            "en": "NCT07871006 studies refractory NT1. The registry has not posted results."
          }
        ]
      ],
      "sources": [
        {
          "label": "NT1 case report",
          "url": "https://pubmed.ncbi.nlm.nih.gov/39729629/"
        },
        {
          "label": "ClinicalTrials.gov NCT07871006",
          "url": "https://clinicaltrials.gov/study/NCT07871006"
        }
      ]
    }
  ]
});
