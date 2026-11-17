{
const identity=source('FDA GSRS · Z24U3U73HN','https://precision.fda.gov/uniisearch/srs/unii/Z24U3U73HN');
const pharmacology=source('Véniant et al. · Nature Metabolism · AMG133 assays','https://doi.org/10.1038/s42255-023-00966-w');
const phase2=source('Jastreboff et al. · NEJM · MariTide Phase II obesity trial','https://doi.org/10.1056/NEJMoa2504214');
const sponsor=source('Amgen · 2026-11-03 · enrollment update','https://investors.amgen.com/news-releases/news-release-details/amgen-reports-third-quarter-2026-financial-results');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Véniant MM, Lu SC, Atangan L, Komorowski R, Stanislaus S, Cheng Y, et al. A GIPR antagonist conjugated to GLP-1 analogues promotes weight loss with improved metabolic parameters in preclinical and phase 1 settings. Nat Metab. 2024;6(2):290-303.", "pmid": "38316982", "url": "https://doi.org/10.1038/s42255-023-00966-w"}],
  "id": "maridebart-cafraglutide",
  "name": "Maridebart cafraglutide",
  "aliases": "MariTide / AMG 133",
  "kind": "single",
  "condition": {
    "zh": "阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea"
  },
  "category": "breathing",
  "phase": "III",
  "status": "ACTIVE_NOT_RECRUITING",
  "summary": {
    "zh": "单一抗体-肽偶联活性成分；另有 NCT07225686",
    "en": "One antibody–peptide conjugate active substance. Two Phase III trials are indexed here."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [],
  "studies": [
    {
      "id": "NCT07226765",
      "focus": "index",
      "title": "Maridebart Cafraglutide Versus Placebo in Adult Participants With Obstructive Sleep Apnea Not on Positive Airway Pressure (PAP) Therapy",
      "phase": "III",
      "status": "ACTIVE_NOT_RECRUITING",
      "updated": "2026-09-29",
      "started": {
        "date": "2025-11-25",
        "type": "ACTUAL"
      },
      "sponsor": "Amgen",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 250,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "DOUBLE",
      "age": [
        "18 Years",
        "99 Years"
      ],
      "conditions": [
        "Obstructive Sleep Apnea"
      ],
      "interventions": [
        "Maridebart cafraglutide",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change in Apnea-hypopnea Index (AHI) from baseline at Week 52",
          "timeFrame": "At Week 52"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07226765",
        "url": "https://clinicaltrials.gov/study/NCT07226765"
      }
    },
    {
      "id": "NCT07225686",
      "focus": "additional",
      "title": "Maridebart Cafraglutide Versus Placebo in Adult Participants With Obstructive Sleep Apnea on Positive Airway Pressure Therapy",
      "phase": "III",
      "status": "ACTIVE_NOT_RECRUITING",
      "updated": "2026-10-06",
      "started": {
        "date": "2025-12-19",
        "type": "ACTUAL"
      },
      "sponsor": "Amgen",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 250,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "DOUBLE",
      "age": [
        "18 Years",
        "99 Years"
      ],
      "conditions": [
        "Obesity",
        "Obstructive Sleep Apnea"
      ],
      "interventions": [
        "Maridebart cafraglutide",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change in Apnea-Hypopnea Index (AHI) from baseline at week 52",
          "timeFrame": "At week 52"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07225686",
        "url": "https://clinicaltrials.gov/study/NCT07225686"
      }
    }
  ],
  identity,
  identityFields:[['UNII','Z24U3U73HN'],['CAS','2760218-55-9'],
    [L('偶联组成','Conjugate composition'),L('抗人 GIPR 的 IgG1κ，偶联两个相同的 GLP-1 类似肽。','An anti-human GIPR IgG1κ conjugated to two identical GLP-1 analogue peptides.')]],
  "chemistry": null,
  "targets": ["glp1r","gipr"],
  "system": null,
  publishedResult:null,
  evidenceSections:[
    {chapter:'clinical',title:L('MARITIME-OSA 与独立 II 期肥胖队列','MARITIME-OSA and separate Phase II obesity cohort'),fields:[
      [L('两项 OSA III 期','Two Phase III OSA trials'),L('OSA-1 为继续 PAP 人群，OSA-2 为未用 PAP 人群。两项均已停止招募、研究仍在进行，截至 2026-11-06 未贴 AHI 结果。','OSA-1 enrolls participants on PAP and OSA-2 participants not on PAP. Both have completed enrollment and remain ongoing. Neither posted AHI results as of 2026-11-06.')],
      [L('独立肥胖合并 T2D 队列','Separate obesity and type 2 diabetes cohort'),L('127 人。第 52 周治疗策略估计的组内体重变化，各剂量为 −8.4% 至 −12.3%，安慰剂 −1.7%。','In 127 participants, week 52 treatment-policy within-arm weight changes ranged from −8.4% to −12.3% across dose arms, versus −1.7% with placebo.')]
    ],sources:[trial('NCT07225686'),trial('NCT07226765'),sponsor,phase2]},
    {chapter:'pharmacology',title:L('两种受体作用方向','Distinct receptor effects'),fields:[
      [L('功能实验','Functional assays'),L('偶联肽组分激动 GLP-1R，抗体组分拮抗 GIPR。原研究在人受体细胞体系中分别测量了 cAMP 刺激与 GIP 刺激的抑制。','The peptide moieties activate GLP-1R and the antibody moiety antagonizes GIPR. The primary study measured cAMP stimulation and inhibition of GIP-stimulated cAMP in separate human-receptor cell assays.')]
    ],sources:[identity,pharmacology]}
  ],
  structureEvidence:{title:L('结构证据范围','Scope of structural evidence'),summary:L(
    '按全名、MariTide 和 AMG133 检索，未核到偶联物直接受体复合物坐标。原始论文的偶联物示意图展示分子设计。',
    'Searches by the full name, MariTide and AMG133 yielded no verified receptor complex coordinates for the conjugate. The primary paper’s schematic depicts the molecular design.'),
    sources:[identity,pharmacology]}
});
}
