{
const paper=article('Randomized crossover study · Table 1 and abstract','39589391');
const disclosure=source('Incannex · RePOSA Phase II topline · 2025-07-30',
  'https://ir.incannex.com/news-releases/news-release-details/incannex-reports-positive-topline-results-reposa-phase-2-trial');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Walsh J, Rankin T, Mehra S, Naughton MT, Roebuck T, McDermott E, et al. A randomized dose finding study of combination dronabinol and acetazolamide for the treatment of obstructive sleep apnea. Sleep. 2025;48(4).", "pmid": "39589391", "url": "https://doi.org/10.1093/sleep/zsae276"}],
  "id": "ihl-42x",
  "name": "IHL-42X",
  "aliases": "dronabinol + acetazolamide",
  "kind": "combination",
  "condition": {
    "zh": "阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea"
  },
  "category": "breathing",
  "phase": "II",
  "status": "RECRUITING",
  "summary": {
    "zh": "早期随机交叉试验已有论文，RePOSA II 期已有申办方披露。DReAMzz 继续确认剂量。",
    "en": "An early randomized crossover trial is published and RePOSA Phase II has sponsor-reported results. DReAMzz continues dose confirmation."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": {
        "zh": "申办方资料或机构文件",
        "en": "Sponsor disclosure or agency document"
      },
      "url": "https://incannex.com/pipeline/ihl-42x-obstructive-sleep-apnea/"
    }
  ],
  "studies": [
    {
      "id": "NCT07635563",
      "focus": "dose-confirmation",
      "title": "DReAMzz- Dronabinol and Acetazolamide Medication for Sleep Apnea (ZZ). Dose Confirmation Crossover Study for IHL-42X in Subjects With Obstructive Sleep Apnea.",
      "phase": "II",
      "status": "RECRUITING",
      "updated": "2026-10-13",
      "started": {
        "date": "2026-07-21",
        "type": "ACTUAL"
      },
      "sponsor": "Incannex Healthcare Ltd",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 120,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "65 Years"
      ],
      "conditions": [
        "Obstructive Sleep Apnea (OSA)"
      ],
      "interventions": [
        "IHL-42X: 2.5 mg dronabinol + 125 mg acetazolamide",
        "IHL-42X: 5 mg dronabinol + 125 mg acetazolamide",
        "IHL-42X: 7.5 mg dronabinol + 125 mg acetazolamide",
        "IHL-42X: 2.5 mg dronabinol + 250 mg acetazolamide",
        "IHL-42X: 5 mg dronabinol + 250 mg acetazolamide",
        "IHL-42X: 7.5 mg dronabinol + 250 mg acetazolamide",
        "IHL-42X: 2.5 mg dronabinol + 375 mg acetazolamide",
        "IHL-42X: 5 mg dronabinol + 375 mg acetazolamide",
        "IHL-42X: 7.5 mg dronabinol + 375 mg acetazolamide",
        "Placebo: Negative control"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change in AHI4 at the end of each treatment period compared to baseline",
          "timeFrame": "Each treatment period (28 days)"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07635563",
        "url": "https://clinicaltrials.gov/study/NCT07635563"
      }
    },
    {
      id:'NCT06146101',focus:'additional',title:'RePOSA · Phase II portion',phase:'II/III',status:'COMPLETED',
      updated:'2026-07-27',started:{date:'2024-05-02',type:'ACTUAL'},
      sponsor:'Incannex Healthcare',sponsorType:'INDUSTRY',enrollment:{count:121,type:'ACTUAL'},
      allocation:'RANDOMIZED',masking:'QUADRUPLE',age:['18 Years',''],
      conditions:['Obstructive sleep apnea'],interventions:['Low-dose IHL-42X','High-dose IHL-42X','Placebo'],
      primaryOutcomes:[{measure:'Change in apnea–hypopnea index · Phase II',timeFrame:'4 weeks'}],
      sleepOutcomes:[],hasResults:false,reference:trial('NCT06146101')
    }
  ],
  "identity": null,
  "chemistry": null,
  "targets": [],
  "system": null,
  "publishedResult": null,
  evidenceSections:[
    {chapter:'clinical',title:L('早期随机交叉试验 · 同行评议论文','Early randomized crossover trial · peer-reviewed paper'),fields:[
      [L('设计与分析范围','Design and analysis'),L('11 人随机分组，每个剂量及安慰剂各用 1 周，中间洗脱 1 周。摘要称 10 人完成至少一个治疗期最后一晚，正文说明排除 1 人后 9 人进入分析，8 人完成全部剂量。','Eleven participants were randomized. Each dose and placebo was given for one week, separated by one-week washouts. The abstract counts 10 with at least one end-of-period assessment. The Results section reports nine analyzed after one exclusion, and eight completing all doses.')],
      [L('表 1 · AHI 自基线变化，均值 ± SD','Table 1 · AHI change from baseline, mean ± SD'),L('低、中、高剂量依次为 −19.4 ± 27.3（n=8）、−17.8 ± 23.6（n=9）、−18.2 ± 24.8（n=8），安慰剂 −4.6 ± 21.5（n=9）次/小时。正文和表 1 标注各剂量对安慰剂 P<0.001。','Low, medium and high dose: −19.4 ± 27.3 (n=8), −17.8 ± 23.6 (n=9), and −18.2 ± 24.8 (n=8), versus −4.6 ± 21.5 (n=9) events/hour on placebo. The Results section and Table 1 report P<0.001 versus placebo for each dose.')],
      [L('摘要 · 单独保留的 AHI 数值','Abstract · separately reported AHI values'),L('摘要依次报告 −19.7 ± 27.1、−17.5 ± 23.3、−16.4 ± 23.8，安慰剂 −2.8 ± 21.0 次/小时，各 P<0.05。摘要和表 1 的分析人群表述与数值均有差异，论文未明确解释数值差异。','The abstract reports −19.7 ± 27.1, −17.5 ± 23.3, and −16.4 ± 23.8, versus −2.8 ± 21.0 events/hour on placebo (each P<0.05). The population descriptions and values differ between the abstract and Table 1. The article does not explicitly explain the numerical discrepancy.')],
      [L('阴性结果','Null findings'),L('各剂量的 ESS、SSS、情绪及生活质量均未见显著组间差异。ODI3% 仅中剂量较安慰剂显著改善。','ESS, SSS, mood and quality of life did not differ significantly versus placebo at any dose. Only the medium dose significantly improved ODI3% versus placebo.')]
    ],sources:[paper]},
    {chapter:'clinical',title:L('RePOSA II 期 · 申办方披露','RePOSA Phase II · sponsor disclosure'),fields:[
      [L('第 4 周 AHI','Week 4 AHI'),L('登记入组 121 人。申办方报告低、高剂量 AHI 百分比变化均优于安慰剂（P<0.05）。AHI 较基线下降超过 30% 的比例为 33.3% 和 41.2%。','The registry records 121 enrolled. The sponsor reports that percent change in AHI favored both low and high doses versus placebo (P<0.05). Respective proportions with a greater than 30% AHI reduction from baseline were 33.3% and 41.2%.')],
      [L('披露范围','Disclosure scope'),L('79% 和 83% 为低、高剂量组个体最大降幅。披露未给出组均值或安慰剂调整效应量。申办方报告治疗期无严重不良事件。','The 79% and 83% values are maximum individual reductions in the low- and high-dose arms. The disclosure does not provide arm means or placebo-adjusted effect sizes. The sponsor reported no serious adverse events during treatment.')]
    ],sources:[trial('NCT06146101'),disclosure]},
    {chapter:'safety',title:L('早期交叉试验 · 表 2','Early crossover trial · Table 2'),fields:[
      [L('研究者判定与治疗可能相关或相关的事件','Events considered possibly, probably or definitely treatment-related'),L('表 2 按安慰剂、低、中、高剂量分别列 5、4、16、10 件。摘要对 35 件的归属表述与分组表不同，本处按表 2 列事件数。论文报告无严重不良事件。','Table 2 lists 5, 4, 16 and 10 events for placebo, low, medium and high dose, respectively. The abstract describes the 35 events differently. Counts here follow Table 2. The paper reports no serious adverse events.')]
    ],sources:[paper]}
  ]
});
}
