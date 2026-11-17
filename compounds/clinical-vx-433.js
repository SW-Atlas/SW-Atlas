registerClinicalCandidate({
  "id": "vx-433",
  "name": "VX-433",
  "aliases": "",
  "kind": "single",
  "condition": {
    "zh": "1型发作性睡病",
    "en": "Narcolepsy type 1"
  },
  "category": "narcolepsy",
  "phase": "I",
  "status": "RECRUITING",
  "summary": {
    "zh": "Vertex 开发的口服候选药。登记关联 1 型发作性睡病；所列首次人体试验招募健康成人。",
    "en": "An oral investigational candidate from Vertex. The registry lists narcolepsy type 1; this first-in-human study enrolls healthy adults."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "keyReferences": [{"citation": "Vertex Pharmaceuticals. A Phase 1, first-in-human study of VX-433. ClinicalTrials.gov NCT07584434. 2025.", "url": "https://clinicaltrials.gov/study/NCT07584434"}],
  "references": [],
  "studies": [
    {
      "id": "NCT07584434",
      "focus": "index",
      "title": "A Phase 1, First-in-human Study of VX-433",
      "phase": "I",
      "protocol": "VX25-433-001",
      "primaryCompletion": "2027-03-05",
      "designNote": L("登记整体为随机、四方设盲；C 部分为开放标签的药物相互作用研究。",
        "The overall registry lists randomization and quadruple masking. Part C is an open-label drug interaction study."),
      "parts": [
        ["A",L("健康成人","Healthy adults"),L("VX-433 单次递增剂量，对照为匹配安慰剂","Single ascending doses of VX-433 versus matched placebo")],
        ["B",L("健康成人","Healthy adults"),L("VX-433 多次递增剂量，对照为匹配安慰剂","Multiple ascending doses of VX-433 versus matched placebo")],
        ["C",L("健康成人","Healthy adults"),L("比较给予 VX-433 前后咪达唑仑、安非他酮及羟基安非他酮的药代","Assesses midazolam, bupropion and hydroxybupropion PK with and without VX-433")]
      ],
      "status": "RECRUITING",
      "updated": "2026-06-08",
      "started": {
        "date": "2026-05-21",
        "type": "ACTUAL"
      },
      "sponsor": "Vertex Pharmaceuticals Incorporated",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 118,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "55 Years"
      ],
      "conditions": [
        "Narcolepsy Type 1 (NT1)"
      ],
      "interventions": [
        "VX-433",
        "Placebo",
        "Midazolam",
        "Bupropion"
      ],
      "primaryOutcomes": [
        {
          "measure": "Part A: Safety and Tolerability as Assessed by Number of Participants With Adverse Events (AEs) and Serious Adverse Events (SAEs)",
          "timeFrame": "From Day 1 up to Day 6"
        },
        {
          "measure": "Part B: Safety and Tolerability as Assessed by Number of Participants With Adverse Events (AEs) and Serious Adverse Events (SAEs)",
          "timeFrame": "From Day 1 up to Day 18"
        },
        {
          "measure": "Part C: Maximum Observed Plasma Concentration (Cmax) of Midazolam in the Absence and Presence of VX-433",
          "timeFrame": "From Day 1 up to Day 22"
        },
        {
          "measure": "Part C: Maximum Observed Plasma Concentration (Cmax) of Bupropion and Hydroxybupropion in the Absence and Presence of VX-433",
          "timeFrame": "From Day 1 up to Day 22"
        },
        {
          "measure": "Part C: Area Under the Concentration Versus Time Curve (AUC) of Midazolam in the Absence and Presence of VX-433",
          "timeFrame": "From Day 1 up to Day 22"
        },
        {
          "measure": "Part C: Area Under the Concentration Versus Time Curve (AUC) of Bupropion and Hydroxybupropion in the Absence and Presence of VX-433",
          "timeFrame": "From Day 1 up to Day 22"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07584434",
        "url": "https://clinicaltrials.gov/study/NCT07584434"
      }
    }
  ],
  "identity": null,
  "chemistry": null,
  "targets": [],
  "system": null,
  "publishedResult": null,
  "evidenceSections": [
    {chapter:"overview",title:L("分子身份与剂型","Molecular identity and formulation"),fields:[
      [L("已登记剂型","Registered formulation"),L("口服混悬剂","Oral suspension")],
      [L("待核实","Awaiting verification"),L("确切化学结构、直接靶标和结合位点待可靠公开资料确认。","Exact chemical structure, direct target and binding site await reliable public evidence.")]
    ],sources:[trial("NCT07584434")]},
    {chapter:"preclinical",title:L("计划评价的人体药代指标","Planned human PK measures"),fields:[
      [L("单次和多次给药","Single and multiple doses"),"Cmax · AUC · t½ · CLr"],
      [L("结果状态","Results status"),L("2026-11-06 复核，NCT07584434 仍招募健康成人，预计 2027-03-05 完成主要终点收集。登记未贴结果，公开资料未核到可归于 VX-433 的临床结果。","On 2026-11-06, NCT07584434 was still recruiting healthy adults, with primary completion estimated for 2027-03-05. No results were posted and no publicly reported outcome attributable to VX-433 was verified.")]
    ],sources:[trial("NCT07584434")]},
    {chapter:"safety",title:L("安全性与相互作用设计","Safety and interaction design"),fields:[
      [L("安全性评价","Safety assessment"),L("记录不良事件和严重不良事件；C 部分观察至第 29 天。","Adverse events and serious adverse events are tracked, through day 29 in Part C.")],
      [L("相互作用","Drug interactions"),L("咪达唑仑与安非他酮用于药代相互作用评价。相互作用方向和幅度待实测结果。","Midazolam and bupropion are used for PK interaction assessment. The direction and magnitude await observed results.")]
    ],sources:[trial("NCT07584434")]}
  ]
});
