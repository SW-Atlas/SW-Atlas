{
const nt1 = article('Plazzi et al. · Lancet Neurology · Vibrance-1', '42636845');
const nt1Secondary = source('Alkermes · Vibrance-1 · prespecified analyses',
  'https://investor.alkermes.com/news-releases/news-release-details/alkermes-presents-detailed-positive-results-vibrance-1-phase-2/');
const nt2 = source('Vibrance-2 · SLEEP 2026 · slides 8–9 and safety table',
  'https://www.alkermesmedicalaffairs.com/resources/congresses/sleep-2026/vibrance-2-a-randomized-phase-2-study-evaluating-efficacy-and-safety-of-the-orexin-2-receptor-agonist-alixorexton-in-patients-with-narcolepsy-type-2/poster-pdf');
const preclinical = source('Alkermes · SLEEP 2025 · Figure 3',
  'https://www.alkermesmedicalaffairs.com/resources/congresses/sleep-2025/evaluation-of-the-novel-orexin-2-receptor-agonist-alks-2680-on-measures-of-arousal-circuit-activation-in-rodents/poster-pdf');
const completed = (id,title,updated,count,interventions,week,measures,condition) => ({
  id,title,phase:'II',status:'COMPLETED',updated,focus:'additional',sponsor:'Alkermes, Inc.',
  allocation:'RANDOMIZED',masking:'QUADRUPLE',age:['18 Years','70 Years'],
  enrollment:{count,type:'ACTUAL'},interventions,conditions:[condition],
  primaryOutcomes:measures.map(measure=>({measure,timeFrame:'Baseline to week '+week})),
  hasResults:false,reference:trial(id)
});
const mw = 'Change in mean sleep latency on the Maintenance of Wakefulness Test (MWT)';
const ess = 'Change in Epworth Sleepiness Scale (ESS) score';
registerClinicalCandidate({
  "keyReferences": [{"citation": "Plazzi G, Grunstein RR, Mignot E, Lammers GJ, Plante DT, Buntinx E, et al. Safety, tolerability, and efficacy of alixorexton, a selective orexin 2 receptor agonist for narcolepsy type 1 (Vibrance-1): a randomised, double-blind, placebo-controlled, phase 2 trial. Lancet Neurol. 2026;25(10):889-899.", "pmid": "42636845", "url": "https://doi.org/10.1016/S1474-4422(26)00278-4"}],
  "id": "alixorexton",
  "name": "Alixorexton",
  "aliases": "ALKS 2680",
  "kind": "single",
  "condition": {
    "zh": "发作性睡病",
    "en": "Narcolepsy"
  },
  "category": "narcolepsy",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "口服 OX2R 激动剂。两项已完成 II 期分别研究 1 型和 2 型发作性睡病，另有独立的 III 期项目和特发性嗜睡 II 期。",
    "en": "An oral OX2R agonist. Two completed Phase II trials studied narcolepsy types 1 and 2 separately. Phase III and a separate Phase II trial in idiopathic hypersomnia are also indexed."
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
      "url": "https://www.alkermes.com/research-and-development/pipeline"
    },
    {
      "label": "Alkermes · ALKS 2680 · OX2R agonism",
      "url": "https://investor.alkermes.com/static-files/3cefefd9-8d69-4593-9859-2709712cae0f"
    },
    nt1, nt1Secondary, nt2
  ],
  "studies": [
    {
      "id": "NCT07540897",
      "focus": "index",
      "title": "A Study to Evaluate the Efficacy, Safety and Tolerability of ALKS 2680 in Adults With Narcolepsy Type 1 (Brilliance NT1 - 304)",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2026-10-07",
      "started": {
        "date": "2026-08-13",
        "type": "ACTUAL"
      },
      "sponsor": "Alkermes, Inc.",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 150,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "TRIPLE",
      "age": [
        "18 Years",
        "70 Years"
      ],
      "conditions": [
        "Narcolepsy Type 1"
      ],
      "interventions": [
        "ALKS 2680 Dose 1",
        "ALKS 2680 Dose 2",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change in mean sleep latency (MSL) on Maintenance of Wakefulness Test (MWT) from baseline to Week 12 by dose level",
          "timeFrame": "Baseline to Week 12"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07540897",
        "url": "https://clinicaltrials.gov/study/NCT07540897"
      }
    },
    completed('NCT06358950','Vibrance-1 · Narcolepsy type 1','2026-06-10',92,
      ['Placebo','Alixorexton 4 mg','Alixorexton 6 mg','Alixorexton 8 mg'],6,[mw],'Narcolepsy type 1'),
    completed('NCT06555783','Vibrance-2 · Narcolepsy type 2','2026-02-27',93,
      ['Placebo','Alixorexton 10 mg','Alixorexton 14 mg','Alixorexton 18 mg'],8,[mw,ess],'Narcolepsy type 2'),
    {id:'NCT06843590',title:'Vibrance-3 · Idiopathic hypersomnia',phase:'II',
      status:'ACTIVE_NOT_RECRUITING',updated:'2026-09-25',focus:'additional',sponsor:'Alkermes, Inc.',
      age:['18 Years','70 Years'],allocation:'RANDOMIZED',masking:'DOUBLE',
      enrollment:{count:126,type:'ESTIMATED'},conditions:['Idiopathic hypersomnia'],
      interventions:['Alixorexton','Placebo'],primaryOutcomes:[{measure:ess,timeFrame:'Up to week 8'}],
      hasResults:false,reference:trial('NCT06843590')}
  ],
  "identity": {
    "label": "PubChem CID 156417714",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/156417714"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-156417714.png",
    "depictionSource": {
      "label": "PubChem CID 156417714",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/156417714"
    },
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"N-[(15S,16R)-10-oxo-8,18-dioxa-11-azatetracyclo[17.2.2.02,7.011,16]tricosa-2,4,6-trien-15-yl]methanesulfonamide"],
        [{"zh":"同义词","en":"Synonyms"},"Alixorexton · ALKS2680"],
        ["KEGG ID","D13336"],
        
      [
        "PubChem CID",
        "156417714"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C21H30N2O5S"
      ],
      [
        {
          "zh": "分子量",
          "en": "Molecular weight"
        },
        "422.5 g/mol"
      ],
      [
        "InChIKey",
        "IHNJMACFBQEKRJ-VHZYLWGESA-N"
      ],
      [
        "SMILES",
        "CS(=O)(=O)N[C@H]1CCCN2[C@H]1COC3CCC(CC3)C4=CC=CC=C4OCC2=O"
      ],
      [
        {
          "zh": "立体化学范围",
          "en": "Stereochemical scope"
        },
        {
          "zh": "采用公开条目的表示，未指定的立体中心仍待独立来源核验。",
          "en": "The public record is depicted as deposited. Unspecified stereocenters await independent verification."
        }
      ]
    ],
    "links": [{"label": "KEGG D13336", "url": "https://www.kegg.jp/entry/D13336"}],
      "sources": [
      {
        "label": "PubChem CID 156417714",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/156417714"
      }
    ]
  },
  "targets": [
    "ox2"
  ],
  "system": "orexin",
  publishedResult:{study:'Vibrance-1 · NCT06358950',summary:L(
    '92 名成人随机接受每日一次 4、6、8 mg 或安慰剂。第 6 周 MWT 平均入睡潜伏期相对基线的最小二乘均值变化，较安慰剂分别增加 22.2、24.1 和 26.0 分钟。',
    'Ninety-two adults were randomized to 4, 6 or 8 mg once daily or placebo. At week 6, the least-squares mean changes in MWT sleep latency exceeded placebo by 22.2, 24.1 and 26.0 minutes, respectively.'),
    reference:nt1},
  evidenceSections:[
    {chapter:'clinical',title:L('Vibrance-1 · NT1 第 6 周','Vibrance-1 · NT1 week 6'),fields:[
      [L('安慰剂组','Placebo arm'), 'n = 23'],
      [L('估计量','Effect estimate'),L('MWT、ESS 为相对安慰剂的最小二乘均值变化差（95% CI）。猝倒为第 5–6 周每周发作率比。P 值经多重性调整。','MWT and ESS are placebo-adjusted least-squares mean changes (95% CI). Cataplexy is the weekly rate ratio over weeks 5–6. P values are multiplicity-adjusted.')]
    ],table:{columns:[L('每日剂量','Daily dose'),L('MWT（分钟）','MWT (min)'),L('ESS（分）','ESS (points)'),L('猝倒率比','Cataplexy rate ratio')],
      rows:[
        ['4 mg (n=23)','+22.2 (17.2 to 27.2), P=0.0099','−6.4 (−9.6 to −3.3), P=0.01','0.49, P=0.169'],
        ['6 mg (n=22)','+24.1 (19.0 to 29.1), P<0.0001','−8.7 (−11.9 to −5.5), P<0.0001','0.31, P=0.01'],
        ['8 mg (n=24)','+26.0 (21.0 to 31.0), P<0.0001','−8.3 (−11.4 to −5.2), P<0.0001','0.64, P=0.452']
      ]},sources:[nt1,nt1Secondary,source('ASCP 2026 · Vibrance-1 · ESS and safety',
      'https://www.alkermesmedicalaffairs.com/resources/congresses/ascp-2026/safety-and-efficacy-results-from-the-phase-2-vibrance-1-study-of-the-orexin-2-receptor-agonist-alixorexton-in-patients-with-narcolepsy-type-1/poster-pdf/download')]},
    {chapter:'clinical',title:L('Vibrance-2 · NT2 第 8 周','Vibrance-2 · NT2 week 8'),fields:[
      [L('安慰剂组','Placebo arm'),'n = 24'],
      [L('共同主要终点','Co-primary endpoints'),L('表为相对安慰剂的最小二乘均值变化差（95% CI）及调整后 P 值。10 mg 的 MWT 未进入多重性控制下的显著性检验。18 mg 在两个终点均达到统计显著。','The table shows placebo-adjusted least-squares mean changes (95% CI) and adjusted P values. The testing hierarchy did not allow a formal MWT test at 10 mg. At 18 mg both endpoints reached statistical significance.')]
    ],table:{columns:[L('每日剂量','Daily dose'),L('MWT（分钟）','MWT (min)'),L('ESS（分）','ESS (points)')],
      rows:[
        ['10 mg (n=23)','+9.3 (3.3 to 15.2)','−2.1 (−5.3 to 1.1), P=0.195'],
        ['14 mg (n=22)','+6.7 (0.9 to 12.6), P=0.049','−3.2 (−6.3 to −0.1), P=0.077'],
        ['18 mg (n=24)','+6.7 (0.9 to 12.4), P=0.047','−3.6 (−6.7 to −0.5), P=0.046']
      ]},sources:[nt2]},
    {chapter:'safety',title:L('两项双盲期的治疗期间不良事件','Treatment-emergent adverse events during blinded dosing'),fields:[
      [L('Vibrance-1 尿频 / 失眠','Vibrance-1 pollakiuria / insomnia'),L('安慰剂 1/23、0/23；4 mg 15/23、4/23；6 mg 11/22、7/22；8 mg 12/24、8/24。','Placebo 1/23 and 0/23, 4 mg 15/23 and 4/23, 6 mg 11/22 and 7/22, 8 mg 12/24 and 8/24.')],
      [L('Vibrance-2 任一 TEAE','Vibrance-2 any TEAE'),L('安慰剂 16/24，10 mg 20/23，14 mg 22/22，18 mg 21/24。','Placebo 16/24, 10 mg 20/23, 14 mg 22/22, 18 mg 21/24.')],
      [L('严重 TEAE','Serious TEAEs'),L('两项研究的双盲期均报告 0 例严重 TEAE。','Both trials reported zero serious TEAEs in the double-blind period.')]
    ],sources:[nt1,nt1Secondary,nt2]},
    {chapter:'preclinical',title:L('OX2R 药理与小鼠脑片','OX2R pharmacology and mouse brain slices'),fields:[
      [L('脑片功能读数','Slice functional readout'),L('申办方会议图 3 报告小鼠结节乳头核组胺神经元膜去极化 EC₅₀ 38.5 nM。该读数属于脑片功能反应。','Sponsor conference Figure 3 reports a membrane-depolarization EC₅₀ of 38.5 nM in mouse tuberomammillary histamine neurons. This is a slice functional readout.')]
    ],sources:[preclinical]}
  ],
  structureEvidence:{title:L('直接复合物核验','Direct-complex search'),
    summary:L('按 alixorexton、ALKS 2680 和所列化学身份检索，未核到可归属的公开 OX2R 实验复合物或残基互作。','Searches by alixorexton, ALKS 2680 and the indexed chemical identity yielded no verified public OX2R experimental complex or residue contacts.'),
    sources:[source('RCSB PDB','https://www.rcsb.org/')]}
});
}
