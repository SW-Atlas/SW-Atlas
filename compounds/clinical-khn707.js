registerClinicalCandidate({
  "id": "khn707",
  "name": "KHN707",
  "aliases": "",
  "kind": "single",
  "condition": {
    "zh": "失眠",
    "en": "Insomnia"
  },
  "category": "insomnia",
  "phase": "I",
  "status": "NOT_YET_RECRUITING",
  "summary": {
    "zh": "康弘药业开发的选择性 OX2R 拮抗剂，拟用于失眠。已登记健康成人 I 期单次口服递增剂量研究。",
    "en": "A selective OX2R antagonist developed by Kanghong for insomnia, with a registered Phase I single ascending oral dose study in healthy adults."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "CTR20261811",
  "keyReferences": [{"citation": "成都康弘药业集团股份有限公司. KHN707 安全性、耐受性与药代动力学研究相关披露. 深圳证券交易所公告文件. 2026.", "url": "https://disc.static.szse.cn/disc/disk03/finalpage/2026-08-26/db1d80b9-55d4-4946-ad5c-faa87b4bbaac.PDF"}, {"citation": "药物临床试验登记与信息公示平台. CTR20261811: KHN707 安全性、耐受性和药代动力学试验. 2026.", "url": "https://trial.medpath.com/clinical-trial/ae1d08b5e9cd7700/ctr20261811-khn707-safety-tolerability-pharmacokinetics-trial"}],
  "references": [
    {
      "label": {
        "zh": "申办方资料或机构文件",
        "en": "Sponsor disclosure or agency document"
      },
      "url": "https://disc.static.szse.cn/disc/disk03/finalpage/2026-08-26/db1d80b9-55d4-4946-ad5c-faa87b4bbaac.PDF"
    },
    {
      "label": {
        "zh": "公开登记镜像 · CTR20261811",
        "en": "Public registration mirror · CTR20261811"
      },
      "url": "https://trial.medpath.com/clinical-trial/ae1d08b5e9cd7700/ctr20261811-khn707-safety-tolerability-pharmacokinetics-trial"
    }
  ],
  "studies": [{
    id:'NCT07557537',focus:'index',title:'A Phase 1 Study of KHN707 Tablets in Healthy Participants',
    phase:'I',status:'NOT_YET_RECRUITING',updated:'2026-04-29',started:{date:'2026-05',type:'ESTIMATED'},
    sponsor:'Chengdu Kanghong Pharmaceutical Group Co., Ltd.',sponsorType:'INDUSTRY',
    enrollment:{count:38,type:'ESTIMATED'},allocation:'RANDOMIZED',masking:'DOUBLE',age:['18 Years','45 Years'],
    conditions:['Healthy participants'],interventions:['KHN707','Placebo'],
    primaryOutcomes:[{measure:'Pharmacokinetics and adverse events',timeFrame:'Single-dose Phase I'}],sleepOutcomes:[],
    hasResults:false,reference:trial('NCT07557537')
  }],
  "identity": null,
  "chemistry": null,
  "targets": ["ox2"],
  "system": "orexin",
  "publishedResult": null,
  "evidenceSections": [
    {chapter:"overview",title:L("分子身份与临床试验许可","Molecular identity and trial authorization"),fields:[
      [L("申办方与剂型","Sponsor and formulation"),L("成都康弘药业，口服片剂","Chengdu Kanghong Pharmaceutical Group, oral tablet")],
      [L("中国临床试验许可","Chinese trial authorization"),L("2026 年 2 月披露获准开展失眠临床试验；受理号 CXHL2501386、CXHL2501387。","Permission to conduct insomnia trials was disclosed in February 2026; application IDs CXHL2501386 and CXHL2501387.")],
      [L("化学身份","Chemical identity"),L("开发代号已核；确切结构、立体化学及本分子复合物待可靠公开来源确认。","Development code verified. Exact structure, stereochemistry and a compound-bound complex await a reliable public source.")]
    ],sources:[source("Kanghong · 2026-005","https://static.cninfo.com.cn/finalpage/2026-02-26/1224984375.PDF")]},
    {chapter:"pharmacology",title:L("OX2R 拮抗药理","OX2R antagonism"),fields:[
      [L("靶标与作用方式","Target and action"),L("选择性 OX2R 拮抗剂。康弘作者的会议摘要采用钙动员功能实验评估 OX2R 拮抗及相对 OX1R 的选择性。","Selective OX2R antagonist. A sponsor-authored conference abstract used calcium mobilization assays to assess OX2R antagonism and selectivity over OX1R.")],
      [L("证据类型","Evidence type"),L("体外功能实验摘要；定量活性与完整实验条件待核。","Abstract-level in vitro functional evidence. Quantitative activity and full experimental conditions await verification.")]
    ],sources:[source("Chen et al. · J Sleep Res conference abstract","https://doi.org/10.1111/jsr.70435")]},
    {chapter:"preclinical",title:L("动物睡眠与药代 · 会议摘要","Animal sleep and PK · conference abstract"),fields:[
      [L("睡眠表型","Sleep phenotype"),L("SD 大鼠重复给药 7 天后用 EEG 评价睡眠；作者报告促睡眠效应。","Sleep was assessed by EEG in Sprague–Dawley rats after seven days of repeat dosing. The authors reported sleep promotion.")],
      [L("半衰期","Half-life"),L("大鼠 1.20 小时，比格犬 1.91 小时；同摘要中 Seltorexant 对照分别为 0.77 和 0.96 小时。","1.20 h in rats and 1.91 h in beagles. The same abstract reported 0.77 h and 0.96 h for seltorexant, respectively.")],
      [L("大鼠脑暴露","Rat brain exposure"),L("给药后 0.5 小时，KHN707 与 seltorexant 的脑/血比分别为 0.33 和 0.23，脑浓度分别为 109.0 和 84.3 ng/g。","At 0.5 h after dosing, brain-to-blood ratios were 0.33 and 0.23 and brain concentrations were 109.0 and 84.3 ng/g for KHN707 and seltorexant, respectively.")]
    ],note:L("动物数据用于理解实验条件下的药代差异。人体半衰期和临床疗效待人体研究。","These animal data describe PK under the study conditions. Human half-life and clinical efficacy await human studies."),
      sources:[source("Chen et al. · J Sleep Res conference abstract","https://doi.org/10.1111/jsr.70435")]},
    {chapter:"clinical",title:L("CTR20261811 · 健康成人 I 期","CTR20261811 · Phase I in healthy adults"),fields:[
      [L("设计","Design"),L("随机、双盲、安慰剂对照；单次口服递增剂量。","Randomized, double-blind, placebo-controlled, single ascending oral dose study.")],
      [L("计划主要指标","Planned primary measures"),"AUC₀–∞ · AUC₀–t · Cmax · Tmax · t½ · AE · SAE"],
      [L("补充监测","Additional monitoring"),L("生命体征、体检、实验室检查和心电图。","Vital signs, physical examinations, laboratory tests and ECG.")],
      [L("状态来源","Status source"),L("公司半年报列为中国 I 期。NCT07557537 登记仍显示尚未招募、未贴结果。","The sponsor lists China Phase I. NCT07557537 is still listed as not yet recruiting, with no results posted.")]
    ],sources:[source("CTR20261811 · Public registry mirror","https://trial.medpath.com/clinical-trial/ae1d08b5e9cd7700/ctr20261811-khn707-safety-tolerability-pharmacokinetics-trial")]},
    {chapter:"safety",title:L("安全性证据范围","Scope of safety evidence"),fields:[
      [L("人体安全性","Human safety"),L("现有来源支持评价计划；人体不良事件发生率尚待公开。","Current sources document the assessment plan. Human adverse-event rates await disclosure.")]
    ],sources:[source("CTR20261811 · Public registry mirror","https://trial.medpath.com/clinical-trial/ae1d08b5e9cd7700/ctr20261811-khn707-safety-tolerability-pharmacokinetics-trial")]}
  ]
});
