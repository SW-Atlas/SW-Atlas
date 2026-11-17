{
const inn=source('WHO · Ecnoglutide · recommended INN 88','https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-%28inn%29/rl88.pdf');
const discovery=article('Guo et al. · Molecular Metabolism 2023 · GLP-1R assays and human PK','37364710');
const slimmer=article('Ji et al. · Lancet Diabetes Endocrinol 2025 · SLIMMER','40555243');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Ji L, Gao L, Xue H, Tian J, Wang K, Jiang H, et al. Efficacy and safety of a biased GLP-1 receptor agonist ecnoglutide in adults with overweight or obesity: a multicentre, randomised, double-blind, placebo-controlled, phase 3 trial. Lancet Diabetes Endocrinol. 2025;13(9):777-789.", "pmid": "40555243", "url": "https://doi.org/10.1016/S2213-8587(25)00141-X"}, {"citation": "Guo W, Xu Z, Zou H, Li F, Li Y, Feng J, et al. Discovery of ecnoglutide - A novel, long-acting, cAMP-biased glucagon-like peptide-1 (GLP-1) analog. Mol Metab. 2023;75:101762.", "pmid": "37364710", "url": "https://doi.org/10.1016/j.molmet.2023.101762"}],
  "id": "ecnoglutide",
  "name": "Ecnoglutide",
  "aliases": "XW003 / 埃诺格鲁肽",
  "kind": "single",
  "condition": {
    "zh": "肥胖伴阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea with obesity"
  },
  "category": "breathing",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "另有 NCT07434050；此处按 OSA 分期",
    "en": "The phase refers to OSA. Two relevant trial registrations are indexed here."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": {
        "zh": "申办方资料或机构文件",
        "en": "Sponsor disclosure or agency document"
      },
      "url": "https://www.sciwindbio.com/portal/index/pipeline/category_id/3.html"
    }
  ],
  "studies": [
    {
      "id": "NCT07387094",
      "focus": "index",
      "title": "A Study of XW003 in Obese Participants With Obstructive Sleep Apnea But Not Receive Positive Airway Pressure Therapy",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2026-08-28",
      "started": {
        "date": "2026-02-09",
        "type": "ACTUAL"
      },
      "sponsor": "Hangzhou Sciwind Biosciences Co., Ltd.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 140,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "DOUBLE",
      "age": [
        "18 Years",
        "75 Years"
      ],
      "conditions": [
        "OSA - Obstructive Sleep Apnea",
        "Obesity"
      ],
      "interventions": [
        "XW003 injection",
        "placebo with matching volume"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change from baseline in Apnea-Hypopnea Index (AHI)",
          "timeFrame": "at week 48"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07387094",
        "url": "https://clinicaltrials.gov/study/NCT07387094"
      }
    },
    {
      "id": "NCT07434050",
      "focus": "additional",
      "title": "A Study of XW003 in Obese Participants With Obstructive Sleep Apnea Receiving Positive Airway Pressure Therapy",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2026-08-28",
      "started": {
        "date": "2026-03-02",
        "type": "ACTUAL"
      },
      "sponsor": "Hangzhou Sciwind Biosciences Co., Ltd.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 140,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "DOUBLE",
      "age": [
        "18 Years",
        "75 Years"
      ],
      "conditions": [
        "OSA - Obstructive Sleep Apnea",
        "Obesity"
      ],
      "interventions": [
        "XW003 injection",
        "placebo with matching volume"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change from baseline in Apnea-Hypopnea Index (AHI)",
          "timeFrame": "at week 48"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07434050",
        "url": "https://clinicaltrials.gov/study/NCT07434050"
      }
    }
  ],
  identity:inn,
  identityFields:[[L('肽长与脂化','Peptide length and acylation'),L('31 个残基，Lys24 连接 (AEEA)₂–γGlu–C18 二酸。','31 residues with a Lys24-linked (AEEA)₂–γGlu–C18 diacid.')]],
  "chemistry": null,
  "targets": [
    "glp1r"
  ],
  "system": "incretin-osa",
  publishedResult:null,
  evidenceSections:[
    {chapter:'clinical',title:L('OSA 结果状态与独立体重研究','OSA results status and separate weight trial'),fields:[
      [L('两项 OSA III 期','Two Phase III OSA trials'),L('截至 2026-11-06，两项登记均在招募，均未贴 AHI 结果。','As of 2026-11-06 both registry entries list recruitment and neither has posted AHI results.')],
      [L('SLIMMER · 第 40 周体重','SLIMMER · body weight at week 40'),L('独立肥胖或超重研究随机 664 人。治疗策略估计的组内体重变化，1.2、1.8、2.4 mg 及安慰剂分别为 −9.1%、−10.9%、−13.2%、+0.1%。','The separate overweight or obesity trial randomized 664. Treatment-policy within-arm weight changes were −9.1%, −10.9%, −13.2% and +0.1% at 1.2, 1.8 and 2.4 mg and placebo, respectively.')]
    ],sources:[trial('NCT07387094'),trial('NCT07434050'),slimmer]},
    {chapter:'pharmacology',title:L('人 GLP-1R 功能读数','Human GLP-1R functional assays'),fields:[
      [L('cAMP / 内化','cAMP / internalization'),L('重组人 GLP-1R 体系测得 cAMP EC₅₀ 0.018 nM（CHO-K1），受体内化 EC₅₀ >10 μM（U2OS）。读数与细胞体系分别保留。','Recombinant human GLP-1R assays gave a cAMP EC₅₀ of 0.018 nM in CHO-K1 and internalization EC₅₀ >10 μM in U2OS. Assay endpoints and cell systems are reported separately.')]
    ],sources:[discovery]},
    {chapter:'preclinical',title:L('人体药代','Human pharmacokinetics'),fields:[
      [L('稳态半衰期','Steady-state half-life'),'124–138 h · NCT04389775']
    ],sources:[discovery,trial('NCT04389775')]},
    {chapter:'safety',title:L('SLIMMER 安全性','SLIMMER safety'),fields:[
      [L('任一 TEAE','Any TEAE'),L('1.2 mg 155/166，1.8 mg 154/166，2.4 mg 156/167，安慰剂 139/165。','1.2 mg 155/166, 1.8 mg 154/166, 2.4 mg 156/167 and placebo 139/165.')]
    ],sources:[slimmer]}
  ],
  structureEvidence:{title:L('同靶标参照','Same-target reference'),summary:L(
    '按 Ecnoglutide 与 XW003 检索，未核到公开直接实验复合物。7KI0 为人 GLP-1R 与 Semaglutide 的参照结构。',
    'The ecnoglutide and XW003 searches yielded no verified public direct complex. 7KI0 is a human GLP-1R–semaglutide reference.'),
    sources:[pdb('7KI0')]}
});
}
