{
const gsrs=source('FDA GSRS · Poterepatide · QKT6XK4KHV','https://gsrs.ncats.nih.gov/ginas/app/ui/substances/ada6e4b7-d3a8-4539-a459-29d9c6b572f1');
const paper=article('Zhang et al. · J Med Chem 2026','42125916');
const tables=source('Zhang et al. · Tables S7, S9–S11','https://acs.figshare.com/articles/journal_contribution/32263156');
const structures=source('Zhang et al. · Supplementary structure CSV','https://acs.figshare.com/articles/journal_contribution/32263159');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Zhang N, Teng L, Yu X, Wang Z, Zhang Z, Dong Z, et al. Discovery of a High-Potency Balanced GLP-1/GIP Dual Agonist by Molecular Dynamics Evolution. J Med Chem. 2026;69(10):11672-11686.", "pmid": "42125916", "url": "https://doi.org/10.1021/acs.jmedchem.6c00466"}],
  "id": "hdm1005",
  "name": "HDM1005",
  "aliases": "",
  "kind": "single",
  "condition": {
    "zh": "肥胖伴阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea with obesity"
  },
  "category": "breathing",
  "phase": "III",
  "status": "NOT_YET_RECRUITING",
  "summary": {
    "zh": "另有 NCT07787260；两项登记尚未招募",
    "en": "The two indexed Phase III records show not yet recruiting."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [],
  "studies": [
    {
      "id": "NCT07794397",
      "focus": "index",
      "title": "A Phase III, Multicenter, Randomized, Double-Blind, Placebo-Controlled Clinical Study to Evaluate the Efficacy and Safety of HDM1005 Injection in Subjects With Obstructive Sleep Apnea (OSA) and Obesity Receiving Positive Airway Pressure (PAP) Therapy",
      "phase": "III",
      "status": "NOT_YET_RECRUITING",
      "updated": "2026-08-31",
      "started": {
        "date": "2026-09",
        "type": "ESTIMATED"
      },
      "sponsor": "Hangzhou Zhongmei Huadong Pharmaceutical Co., Ltd.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 200,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "75 Years"
      ],
      "conditions": [
        "Obstructive Sleep Apnea (OSA) and Obesity"
      ],
      "interventions": [
        "HDM1005",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Percentage change in body weight from baseline at week 52",
          "timeFrame": "52 week"
        },
        {
          "measure": "Change in AHI from baseline at week 52",
          "timeFrame": "52 week"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07794397",
        "url": "https://clinicaltrials.gov/study/NCT07794397"
      }
    },
    {
      "id": "NCT07787260",
      "focus": "additional",
      "title": "A Phase III, Multicenter, Randomized, Double-Blind, Placebo-Controlled Clinical Study to Evaluate the Efficacy and Safety of HDM1005 Injection in Subjects With Obstructive Sleep Apnea (OSA) and Obesity Not Receiving Positive Airway Pressure (PAP) Therapy",
      "phase": "III",
      "status": "NOT_YET_RECRUITING",
      "updated": "2026-08-26",
      "started": {
        "date": "2026-08",
        "type": "ESTIMATED"
      },
      "sponsor": "Hangzhou Zhongmei Huadong Pharmaceutical Co., Ltd.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 200,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "75 Years"
      ],
      "conditions": [
        "Obstructive Sleep Apnea (OSA) and Obesity"
      ],
      "interventions": [
        "HDM1005",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Percentage change in body weight from baseline at week 52",
          "timeFrame": "52 week"
        },
        {
          "measure": "Change in AHI from baseline at week 52",
          "timeFrame": "52 week"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07787260",
        "url": "https://clinicaltrials.gov/study/NCT07787260"
      }
    }
  ],
  identity:gsrs,
  chemistry:{
    depiction:'assets/chem/poterepatide.svg',depictionSource:gsrs,
    fields:[
      [L('图示方法','Depiction convention'),L('按 GSRS 绘制的二维缩合肽结构，标示 40 个残基、Lys24 脂化、6 位 (2S)-α-甲基苯丙氨酸及 C 端酰胺。','Condensed 2D peptide structure based on GSRS, showing 40 residues, Lys24 lipidation, (2S)-α-methylphenylalanine at position 6 and C-terminal amidation.')],
      [L('分子式','Molecular formula'),'C243H382N52O73']
    ],sources:[gsrs,paper,structures]
  },
  "targets": ["glp1r","gipr"],
  "system": null,
  "publishedResult": null,
  identityFields:[
    [L("通用名","Nonproprietary name"),"Poterepatide"],
    ["UNII","QKT6XK4KHV"],
    ["CAS","3058127-20-8"],
    [L("母体字母序列","Parent-letter sequence"),"YAEGTFTSDYAIALDKQAQAEFVKWLLKGGPSSGAPPPSK"],
    [L("肽修饰","Peptide modifications"),"Aib2/11/13 · α-MePhe6 · Lys24–(AEEA)₃–γGlu–C22 diacid · Lys40–NH₂"]
  ],
  evidenceSections:[
    {chapter:'clinical',title:L("两项 OSA III 期及独立减重试验","Two Phase III OSA studies and separate weight trial"),fields:[
      [L("OSA 两项登记","OSA registry entries"),L("NCT07794397（使用 PAP）及 NCT07787260（不使用 PAP）均登记第 52 周 AHI 与体重，状态尚未招募，均未贴结果。","NCT07794397 (on PAP) and NCT07787260 (off PAP) specify AHI and weight at week 52. Both are listed as not yet recruiting, with no results posted.")],
    [L("肥胖 II 期会议数据","Phase II obesity conference data"),L("243 人随机分组。第 22 周体重降幅 7.38%、9.61%、13.21%、13.32%，安慰剂 2.45%（治疗策略估计，各 P<0.0001）。","243 participants were randomized. Week 22 weight reductions were 7.38%, 9.61%, 13.21% and 13.32% versus 2.45% with placebo (treatment-policy estimand, each P<0.0001).")]
    ],sources:[source("PAP cohort","https://clinicaltrials.gov/study/NCT07794397"),source("Off-PAP cohort","https://clinicaltrials.gov/study/NCT07787260"),source("ADA 2026 · 1034-OR","https://diabetesjournals.org/diabetes/article/75/Supplement_1/1034-OR/167745/1034-OR-Efficacy-and-Safety-of-Dual-GLP-1-GIP")]},
    {chapter:'pharmacology',title:L("申办方靶标披露","Sponsor target disclosure"),fields:[
      [L("肽类双激动剂","Dual peptide agonist"),L("申办方将 HDM1005（poterepatide）列为 GLP-1R/GIPR 双激动剂。已核来源未提供可逐项归属该分子的受体效力参数。","The sponsor identifies HDM1005 (poterepatide) as a GLP-1R/GIPR dual agonist. The verified sources did not provide assignable receptor potency values.")]
    ],sources:[source("Huadong Medicine · 2025 Q3 report","https://disc.static.szse.cn/download/disc/disk03/finalpage/2025-12-04/d79ce293-ff30-4153-bfb5-8d37c16bf66c.PDF"),gsrs]},
    {chapter:'preclinical',title:L('原始论文 · 小鼠药代与药效','Primary publication · mouse PK and PD'),fields:[
      [L('小鼠药代 · 论文摘要','Mouse PK · published abstract'),L('论文摘要报告小鼠半衰期约 20.3–23.1 小时，tirzepatide 为 9.21 小时。补充表按候选物和给药途径分列。','The abstract reports a mouse half-life of about 20.3–23.1 h versus 9.21 h for tirzepatide. Supplementary tables list analogues and routes separately.')],
      [L('C57 小鼠 · P016 原表','C57 mice · P016 as labeled in the tables'),L('表 S10，单次皮下 30 nmol/kg，P016 与 tirzepatide 的半衰期分别为 23.0 和 9.21 小时，AUC₀–∞ 为 3494 和 4094 h·nM。表 S11，单次静脉 15 nmol/kg，半衰期分别为 20.2 和 10.5 小时。','Table S10, single subcutaneous 30 nmol/kg: half-lives for P016 and tirzepatide were 23.0 and 9.21 h, and AUC₀–∞ values were 3494 and 4094 h·nM. Table S11, single intravenous 15 nmol/kg: half-lives were 20.2 and 10.5 h.')],
      [L('小鼠葡萄糖负荷试验 · 表 S7','Mouse glucose challenge · Table S7'),L('30 nmol/kg 时，HDM1005 和 tirzepatide 的葡萄糖 AUC₀–₁₂₀ min 相对溶媒分别降低 50.31% 和 44.12%。表中 P 值均为各组与溶媒的比较。','At 30 nmol/kg, glucose AUC₀–₁₂₀ min was 50.31% and 44.12% lower than vehicle for HDM1005 and tirzepatide, respectively. Table P values compare each arm with vehicle.')],
      [L('饮食诱导肥胖小鼠 · 表 S9','Diet-induced obese mice · Table S9'),L('第 28 天，HDM1005 在 0.3、1、3、30 nmol/kg 组的减重幅度分别为 2.20%、16.68%、28.80%、38.76%。1、3、30 nmol/kg 各组对溶媒 P≤0.0001，1 nmol/kg 组对同剂量 tirzepatide P≤0.01。','On day 28, body-weight reductions at 0.3, 1, 3 and 30 nmol/kg HDM1005 were 2.20%, 16.68%, 28.80% and 38.76%. The 1, 3 and 30 nmol/kg arms had P≤0.0001 versus vehicle. The 1 nmol/kg arm had P≤0.01 versus dose-matched tirzepatide.')]
    ],note:L('P016 的原子连接与 GSRS 的 Poterepatide 一致。论文补充 CSV 将第 6 位 α-甲基苯丙氨酸编码为 R，GSRS 为 S。二维图采用 GSRS 构型，P016 药代数值按论文原编号呈现。','P016 connectivity matches the GSRS poterepatide record. The supplementary CSV encodes residue 6 α-methylphenylalanine as R, whereas GSRS specifies S. The depiction follows GSRS and the PK data retain the paper’s P016 identifier.'),
      sources:[paper,tables,structures,gsrs]}
  ],
  structureEvidence:{title:L('结构证据','Structural evidence'),summary:L("按 HDM1005、HDM-1005 和 poterepatide 检索，未核到公开直接复合物。","No public direct complex was verified under HDM1005, HDM-1005 or poterepatide."),sources:[source("RCSB PDB","https://www.rcsb.org/")]}
});
}
