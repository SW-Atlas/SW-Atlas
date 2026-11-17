{
const inn=source('WHO · Proposed INN List 126 · Mazdutide','https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-%28inn%29/pl126.pdf');
const glory=article('Gao et al. · JAMA 2026 · GLORY-2 · Tables 2–3','42251595');
const patent=source('WO2024252367A2 · receptor cAMP assays · Table 14','https://patents.google.com/patent/WO2024252367A2/en');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Zhu D, Zhao J, Cai H, Chu X, Xiu S, Song C, et al. Mazdutide versus placebo in Chinese adults with type 2 diabetes. Nature. 2026;652(8108):174-180.", "pmid": "41407859", "url": "https://doi.org/10.1038/s41586-025-10026-w"}, {"citation": "Gao L, Jiang H, Cai H, Tian J, Shi B, Qiu W, et al. Treatment With 9-mg Mazdutide for Weight Reduction in Chinese Adults With Obesity: The GLORY-2 Randomized Clinical Trial. JAMA. 2026;336(5):377-388.", "pmid": "42251595", "url": "https://doi.org/10.1001/jama.2026.8142"}],
  "id": "mazdutide",
  "name": "Mazdutide",
  "aliases": "玛仕度肽 / IBI362 / LY3305677",
  "kind": "single",
  "condition": {
    "zh": "肥胖伴阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea with obesity"
  },
  "category": "breathing",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "药物已有其他适应证；此处按 OSA 分期",
    "en": "Mazdutide has approvals for other indications. This phase refers to OSA."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": "DREAMS-3 · randomized Phase III T2D",
      "url": "https://pubmed.ncbi.nlm.nih.gov/41407859/"
    },
    {
      "label": "Innovent · GLORY-OSA",
      "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0428/2026042805171.pdf"
    }
  ],
  "studies": [
    {
      "id": "NCT06931028",
      "focus": "index",
      "title": "A Study of IBI362 in Chinese Subjects With Obstructive Sleep Apnea and BMI≥28 kg/m2",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2025-06-29",
      "started": {
        "date": "2025-06-12",
        "type": "ACTUAL"
      },
      "sponsor": "Innovent Biologics (Suzhou) Co. Ltd.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 260,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "TRIPLE",
      "age": [
        "18 Years",
        ""
      ],
      "conditions": [
        "Sleep Apnea",
        "Obstructive",
        "Obesity"
      ],
      "interventions": [
        "placebo",
        "IBI362"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change from Baseline in Apnea-Hypopnea Index (AHI)",
          "timeFrame": "Week 48"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06931028",
        "url": "https://clinicaltrials.gov/study/NCT06931028"
      }
    }
  ],
  identity:inn,
  identityFields:[
    [L('母体字母序列','Parent-letter sequence'),'HAQGTFTSDYSKYLDEKKAKEFVEWLLEGGPSSG'],
    [L('已核修饰','Verified modifications'),'Aib2 · Lys20–(OEG)₂–γGlu–C20 diacid · Gly34–NH₂']
  ],
  "chemistry": null,
  "targets": ["glp1r","gcgr"],
  "system": "incretin-osa",
  "publishedResult": null,
  "evidenceSections": [
    {chapter:'clinical',title:L('OSA 结果状态与独立肥胖试验','OSA results status and separate obesity trial'),fields:[
      [L('GLORY-OSA · NCT06931028','GLORY-OSA · NCT06931028'),L('截至 2026-11-06，登记仍在招募，未贴 AHI 结果。','As of 2026-11-06 the registry lists recruitment and has no posted AHI results.')],
      [L('GLORY-2 · 体重终点','GLORY-2 · weight outcome'),L('独立肥胖试验的治疗策略估计中，9 mg 每周皮下注射 60 周的体重变化为 −16.65%，安慰剂 −1.50%，组间差 −15.15 个百分点（95% CI −17.22 至 −13.09）。','In the separate obesity trial, treatment-policy estimates at week 60 were −16.65% for 9 mg weekly subcutaneous mazdutide and −1.50% for placebo, a difference of −15.15 percentage points (95% CI −17.22 to −13.09).')]
    ],sources:[trial('NCT06931028'),glory]},
    {chapter:'safety',title:L('GLORY-2 肥胖试验安全性','GLORY-2 obesity trial safety'),fields:[
      [L('9 mg / 安慰剂','9 mg / placebo'),L('安全性组分母 307 / 154。呕吐 53.1% / 1.3%，恶心 46.9% / 3.2%，腹泻 39.4% / 6.5%。','Safety denominators were 307 and 154. Vomiting occurred in 53.1% vs 1.3%, nausea in 46.9% vs 3.2%, and diarrhea in 39.4% vs 6.5%.')]
    ],sources:[glory]},
    {chapter:'pharmacology',title:L('双受体细胞功能证据','Cellular evidence of dual receptor agonism'),fields:[
      [L('专利原始数据','Primary patent data'),L('表 14 的细胞 cAMP 测定中，Mazdutide 的 EC₅₀ 为 GLP-1R 11.15 pM、GCGR 21.11 pM。','In the cellular cAMP assays in Table 14, mazdutide EC₅₀ was 11.15 pM at GLP-1R and 21.11 pM at GCGR.')]
    ],sources:[patent,inn]},
    {
      "chapter": "pharmacology",
      "title": {
        "zh": "双受体激动",
        "en": "Dual receptor agonism"
      },
      "fields": [
        [
          "GLP-1R / GCGR",
          {
            "zh": "Mazdutide 为 GLP‑1R 和 GCGR 双受体激动剂。中国 III 期 GLORY‑OSA 对肥胖合并 OSA 人群单独评价。",
            "en": "Mazdutide activates GLP-1R and GCGR. GLORY-OSA separately studies Chinese participants with obesity and OSA."
          }
        ]
      ],
      "sources": [
        {
          "label": "DREAMS-3 · randomized Phase III T2D",
          "url": "https://pubmed.ncbi.nlm.nih.gov/41407859/"
        },
        {
          "label": "Innovent · GLORY-OSA",
          "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0428/2026042805171.pdf"
        }
      ]
    }
  ],
  structureEvidence:{title:L('同靶标结构参照','Same-target structure references'),summary:L(
    '按 Mazdutide 及开发代号未核到可归属的公开直接实验复合物。8JIP 与 8JIT 是 Cotadutide 在人 GLP-1R 与 GCGR 的参照复合物。',
    'Searches by mazdutide and development codes yielded no verified public direct complex. 8JIP and 8JIT are human GLP-1R and GCGR reference complexes with cotadutide.'),
    sources:[pdb('8JIP'),pdb('8JIT')]}
});
}
