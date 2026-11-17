{
const pubchem=source('PubChem CID 171548344','https://pubchem.ncbi.nlm.nih.gov/compound/171548344');
const gsrs=source('FDA GSRS · NE3ZS9HSP2','https://precision.fda.gov/uniisearch/srs/unii/NE3ZS9HSP2');
const inn=source('WHO proposed INN · List 134','https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-%28inn%29/pl134.pdf?download=true&sfvrsn=87a89aba_3');
const aliasDisclosure=source('Takeda R&D president · September 2026 conference transcript',
  'https://stockanalysis.com/quote/tyo/4502/transcripts/749821-morgan-stanley-24th-annual-global-healthcare-conference/');
const patent=source('Takeda patent WO2024095133A1 · Example 77',
  'https://patents.google.com/patent/WO2024095133A1/en');
registerClinicalCandidate({
  "id": "tak-360",
  "name": "TAK-360",
  "aliases": "Balumorexton",
  "kind": "single",
  "condition": {
    "zh": "发作性睡病及特发性嗜睡",
    "en": "Narcolepsy and idiopathic hypersomnia"
  },
  "category": "narcolepsy",
  "phase": "II/III",
  "status": "RECRUITING",
  "summary": {
    "zh": "武田口服 OX2R 激动剂。三项 II 期试验及一项长期延伸研究已登记，临床结果待公开。",
    "en": "Takeda oral OX2R agonist. Three Phase II trials and a long-term extension are registered. Clinical results await disclosure."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "keyReferences": [{"citation": "Takeda Pharmaceutical Company Limited. WO2024095133A1: Orexin receptor agonists (Example 77, TAK-360 / balumorexton). Patent. 2024.", "url": "https://patents.google.com/patent/WO2024095133A1/en"}, {"citation": "Takeda Pharmaceutical Company Limited. Balumorexton (TAK-360) alias disclosure. Morgan Stanley 24th Annual Global Healthcare Conference transcript. 2026.", "url": "https://stockanalysis.com/quote/tyo/4502/transcripts/749821-morgan-stanley-24th-annual-global-healthcare-conference/"}],
  "references": [
    aliasDisclosure,
    {
      "label": "Takeda · OX2R agonist program",
      "url": "https://assets-dam.takeda.com/image/upload/v1717400991/Global/Investor/events/2024/tak-861-investor-call-en.pdf"
    }
  ],
  "studies": [
    {
      "id": "NCT07646678",
      "focus": "index",
      "title": "A Study of TAK-360 in People With Narcolepsy or Idiopathic Hypersomnia",
      "phase": "II/III",
      "status": "RECRUITING",
      "updated": "2026-11-05",
      "started": {
        "date": "2026-06-11",
        "type": "ACTUAL"
      },
      "sponsor": "Takeda",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 500,
        "type": "ESTIMATED"
      },
      "allocation": "NA",
      "masking": "NONE",
      "age": [
        "18 Years",
        "71 Years"
      ],
      "conditions": [
        "Idiopathic Hypersomnia",
        "Narcolepsy Type 1",
        "Narcolepsy Type 2"
      ],
      "interventions": [
        "TAK-360",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Number of Participants With at Least 1 Treatment-Emergent Adverse Event (TEAE)",
          "timeFrame": "Up to approximately 5 years"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07646678",
        "url": "https://clinicaltrials.gov/study/NCT07646678"
      }
    },
    {
      "id": "NCT06952699",
      "focus": "additional",
      "title": "A Study of TAK-360 in Adults With Narcolepsy Without Cataplexy (NT2)",
      "phase": "II",
      "status": "RECRUITING",
      "updated": "2026-10-08",
      "started": {
        "date": "2025-05-06",
        "type": "ACTUAL"
      },
      "sponsor": "Takeda",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 88,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        "70 Years"
      ],
      "conditions": [
        "Narcolepsy Type 2"
      ],
      "interventions": [
        "TAK-360",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Number of Participants With at Least One Treatment-emergent Adverse Event (TEAE)",
          "timeFrame": "Up to 15 Weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06952699",
        "url": "https://clinicaltrials.gov/study/NCT06952699"
      }
    }
  ],
  identity:pubchem,
  chemistry:{
    depiction:'assets/chem/clinical-171548344.png',
    depictionSource:pubchem,
    fields:[
      ['PubChem CID','171548344'],
      [L('IUPAC 名称','IUPAC name'),"N-[(6R)-7,7-difluoro-2-[5-fluoro-4-(2,4,6-trifluorophenyl)-1,2-benzoxazol-3-yl]-3-oxo-5,6-dihydropyrrolo[1,2-c]imidazol-6-yl]methanesulfonamide"],
      [L('同义词','Synonyms'),"Balumorexton · NE3ZS9HSP2"],
      ['CAS','3037907-48-2'],
      ['UNII','NE3ZS9HSP2'],
      [L('分子式','Molecular formula'),'C20H12F6N4O4S'],
      [L('分子量','Molecular weight'),'518.4 g/mol'],
      [L('立体构型','Stereochemistry'),'6R'],
      ['InChIKey','QYIMOBVUEGPQSO-CYBMUJFWSA-N'],
      ['SMILES','CS(=O)(=O)N[C@@H]1CN2C(=CN(C2=O)C3=NOC4=C3C(=C(C=C4)F)C5=C(C=C(C=C5F)F)F)C1(F)F']
    ],
    links:[{label:'ChEMBL CHEMBL3348923',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3348923/'}],
    sources:[pubchem,gsrs,inn,aliasDisclosure,patent]
  },
  "targets": [
    "ox2"
  ],
  "system": "orexin",
  "publishedResult": null,
  evidenceSections:[
    {chapter:'clinical',title:L("TAK-360 四项登记与读出","Four TAK-360 registrations and results status"),fields:[
      [L("各人群单列","Study populations"),L("II 期分别为 NT1（NCT07633301）、NT2（NCT06952699）和特发性嗜睡（NCT06812078）。NCT07646678 为长期延伸安全性研究。2026-11-06 四项均在招募、未贴结果。","Phase II trials enroll NT1 (NCT07633301), NT2 (NCT06952699) and idiopathic hypersomnia (NCT06812078) separately. NCT07646678 is a long-term safety extension. All four were recruiting with no results posted on 2026-11-06.")],
      [L("预设终点","Prespecified endpoints"),L("长期延伸以治疗期间不良事件为主要终点。NT1 II 期另评第 6 周 MWT 平均入睡潜伏期。","The extension has a primary endpoint of treatment-emergent adverse events. The Phase II NT1 study also assesses mean MWT sleep latency at week 6.")],
      [L("待公开结果","Results awaiting disclosure"),L("截至 2026-11-06 未核到分组疗效、安全性或定量人体药代结果。NT2 和特发性嗜睡试验的主要终点收集均预计于 2026-11-30 完成。","No arm-level efficacy, safety or quantitative human PK results were verified as of 2026-11-06. Estimated primary completion for the NT2 and idiopathic hypersomnia trials is 2026-11-30.")]
    ],sources:[source("NT1","https://clinicaltrials.gov/study/NCT07633301"),source("NT2","https://clinicaltrials.gov/study/NCT06952699"),source("Idiopathic hypersomnia","https://clinicaltrials.gov/study/NCT06812078"),source("Extension","https://clinicaltrials.gov/study/NCT07646678")]},
    {chapter:'pharmacology',title:L("申办方 OX2R 披露","Sponsor OX2R disclosure"),fields:[
      [L("作用方向","Action"),L("武田将 TAK-360 列为口服 OX2R 激动剂。研发负责人在公开会议上将 Balumorexton 与 TAK-360 对应。","Takeda identifies TAK-360 as an oral OX2R agonist. Its R&D president identified balumorexton as TAK-360 at a public conference.")]
    ],sources:[source("Takeda · orexin portfolio","https://assets-dam.takeda.com/image/upload/v1717400991/Global/Investor/events/2024/tak-861-investor-call-en.pdf"),aliasDisclosure]},
    {chapter:'preclinical',title:L('专利临床前证据 · 实例 77','Patent preclinical evidence · Example 77'),fields:[
      [L('人 OX2R 单浓度功能','Human OX2R single-concentration response'),L('在稳定表达人 OX2R 的 CHO-K1 细胞中，3 μM 的钙信号为 10 nM 人 orexin A 对照的 100%。EC₅₀、结合亲和力和对 OX1R 的选择性倍数待核。','In CHO-K1 cells stably expressing human OX2R, the calcium response at 3 μM was 100% of the 10 nM human orexin A reference. EC₅₀, binding affinity and fold selectivity over OX1R remain unverified.')],
      [L('食蟹猴清醒时间','Wakefulness in cynomolgus monkeys'),L('雄性食蟹猴单次口服 1 mg/kg，给药后 4 小时内的清醒时间均值为溶媒对照的 645.09%。专利表注 n=2–4。','After a single 1 mg/kg oral dose in male cynomolgus monkeys, mean wakefulness time over 4 hours was 645.09% of vehicle. The patent table gives n=2–4.')]
    ],sources:[patent,
      source('Patent · Table 2-2','https://patentimages.storage.googleapis.com/0f/e3/a6/c01b045fa500c3/imgf000232_0001.png'),
      source('Patent · Table 3','https://patentimages.storage.googleapis.com/54/f9/f8/6c1cd50894a7a9/imgf000242_0001.png')]}
  ],
  structureEvidence:{title:L('同靶标参照结构','Same-target reference structure'),summary:L(
    '按 Balumorexton、TAK-360 和精确化学结构检索，未核到该分子的公开实验复合物。7SQO 为 danavorexton（TAK-925）–OX2R 参照结构。',
    'No public experimental complex was verified by name, code or exact chemical structure. 7SQO is a same-target reference for danavorexton (TAK-925) bound to OX2R.'),
    sources:[pdb('7SQO')]}
});
}
