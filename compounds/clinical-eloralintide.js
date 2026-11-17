{
const discovery=article('Briere et al. · Mol Metab 2025 · human receptor assays','41109426');
const phase2=article('Billings et al. · Lancet 2025 · Figure 2 and Table 3','41207310');
const identity=source('FDA GSRS · 73G3354J8W','https://precision.fda.gov/uniisearch/srs/unii/73G3354J8W');
records.push(record('amy1r','targets','AMY1R',L('胰淀素 1 型受体 · CALCR + RAMP1 · 人','Amylin type 1 receptor · CALCR + RAMP1 · human'),L('B 类 GPCR 复合物','Class B GPCR complex'),
  L('降钙素受体与 RAMP1 组成的复合物。','Complex of the calcitonin receptor and RAMP1.'),
  [['CALCR','P30988'],['RAMP1','O60894']],[uniprot('P30988'),uniprot('O60894'),discovery,pdb('9UWQ')],[]));
registerClinicalCandidate({
  "keyReferences": [{"citation": "Briere DA, Qu H, Lansu K, He MM, Moyers JS, Coskun T, et al. Eloralintide (LY3841136), a novel amylin receptor agonist for the treatment of obesity: From discovery to clinical proof of concept. Mol Metab. 2025;102:102271.", "pmid": "41109426", "url": "https://doi.org/10.1016/j.molmet.2025.102271"}, {"citation": "Billings LK, Hsia S, Bays H, Tidemann-Miller B, O'Hagan J, Tham LS, et al. Eloralintide, a selective amylin receptor agonist for the treatment of obesity: a 48-week phase 2, multicentre, double-blind, randomised, placebo-controlled trial. Lancet. 2025;406(10520):2631-2643.", "pmid": "41207310", "url": "https://doi.org/10.1016/S0140-6736(25)02155-5"}],
  "id": "eloralintide",
  "name": "Eloralintide",
  "aliases": "LY3841136",
  "kind": "single",
  "condition": {
    "zh": "肥胖或超重伴阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea with obesity or overweight"
  },
  "category": "breathing",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "共同主要终点包括 AHI 和体重",
    "en": "Co-primary endpoints include apnea–hypopnea index and body weight."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[discovery,phase2,identity],
  "studies": [
    {
      "id": "NCT07369011",
      "focus": "index",
      "title": "A Study of Eloralintide (LY3841136) in Participants With Obstructive Sleep Apnea and Obesity or Overweight",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2026-11-04",
      "started": {
        "date": "2026-02-10",
        "type": "ACTUAL"
      },
      "sponsor": "Eli Lilly and Company",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 800,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "DOUBLE",
      "age": [
        "18 Years",
        ""
      ],
      "conditions": [
        "Sleep Apnea, Obstructive",
        "Obesity",
        "Overweight"
      ],
      "interventions": [
        "Eloralintide",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Percent Change from Baseline in Body Weight",
          "timeFrame": "Baseline, Week 64"
        },
        {
          "measure": "Change from Baseline in Apnea-Hypopnea Index (AHI)",
          "timeFrame": "Baseline, Week 64"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07369011",
        "url": "https://clinicaltrials.gov/study/NCT07369011"
      }
    }
  ],
  "identity": null,
  "chemistry": null,
  targets:['amy1r'],
  "system": null,
  publishedResult:null,
  identityFields:[
    ['UNII','73G3354J8W'],
    [L('已核肽修饰','Verified peptide modifications'),L('37 残基，C 端酰胺化，Cys2–Cys7 亚甲基硫缩醛桥，Lys26–(γGlu)₂–C20 二酸。','37 residues with C-terminal amidation, a Cys2–Cys7 methylene thioacetal bridge, and Lys26–(γGlu)₂–C20 diacid.')]
  ],
  evidenceSections:[
    {chapter:'clinical',title:L('OSA III 期与独立肥胖 II 期','Phase III OSA and separate Phase II obesity trial'),fields:[
      [L('OSA 登记','OSA registration'),L('NCT07369011 正在招募，截至 2026-11-06 未贴第 64 周 AHI 或体重结果。','NCT07369011 is recruiting. Week 64 AHI and body-weight results had yet to be posted as of 2026-11-06.')],
      [L('独立肥胖试验','Separate obesity trial'),L('263 人随机分组。第 48 周体重变化（疗效估计）为 −9.5% 至 −20.1%，安慰剂 −0.4%。治疗方案估计中，1 mg 对安慰剂差值 −5.00 个百分点（95% CI −11.0 至 1.0）。','263 participants were randomized. At week 48, weight change ranged from −9.5% to −20.1% versus −0.4% with placebo (efficacy estimand). Under the treatment-regimen estimand, the 1 mg difference versus placebo was −5.00 percentage points (95% CI −11.0 to 1.0).')]
    ],sources:[trial('NCT07369011'),trial('NCT06230523'),phase2]},
    {chapter:'pharmacology',title:L('人 AMY1R 结合与功能','Human AMY1R binding and function'),fields:[
      [L('体外 cAMP','In vitro cAMP'),L('人 AMY1R、AMY3R、CTR 的 EC₅₀ 分别为 23.9、253.8、291.0 pM。','EC₅₀ at human AMY1R, AMY3R and CTR was 23.9, 253.8 and 291.0 pM, respectively.')],
      [L('竞争结合','Competition binding'),'AMY1R Kᵢ 478.1 pM · AMY3R Kᵢ 3608.9 pM · CTR Kᵢ 3896.1 pM']
    ],sources:[discovery]},
    {chapter:'safety',title:L('肥胖 II 期常见不良事件','Common adverse events in Phase II obesity trial'),fields:[
      [L('9 mg 对安慰剂','9 mg versus placebo'),L('恶心 33% 对 14%，疲劳 43% 对 12%。','Nausea 33% versus 14%, fatigue 43% versus 12%.')]
    ],sources:[phase2]}
  ],
  structureEvidence:{title:L('同靶标参照结构','Same-target reference structure'),summary:L(
    '未核到 eloralintide 或 LY3841136 的直接实验复合物。9UWQ 是 cagrilintide–AMY1R–Gs 的冷冻电镜复合物。',
    'No direct experimental complex was verified for eloralintide or LY3841136. 9UWQ is a cryo-EM complex of cagrilintide–AMY1R–Gs.'),sources:[pdb('9UWQ'),discovery]}
});
}
