{
const trialPaper=article('Jain et al. · Sleep Med 2020 · randomized crossover trial','32862007');
const result=source('ClinicalTrials.gov · NCT03148899 · results','https://clinicaltrials.gov/study/NCT03148899?tab=results');
const structuresPaper=[article('Meyerowitz et al. · Nat Struct Mol Biol 2022','35241813'),
  article('Waltenspühl et al. · Nat Commun 2022','35851571')];
const complexes=[
  ['7RYC','2.90','O','A','miniGq/i'],
  ['7QVM','3.25','R','D','mGoqi']
].map(([id,resolution,chain,asymId,construct])=>({
  id,resolution,chain,target:'oxtr',molecule:'oxytocin',code:'PEPTIDE',method:cryo,
  subtitle:'OXTR–oxytocin–'+construct,
  state:L('激动剂结合活化态','Active agonist-bound state'),
  construct:L('人 OXTR 作者链 '+chain+'；催产素作者链 L；'+construct,
    'Human OXTR author chain '+chain+'; oxytocin author chain L; '+construct),
  ligandInstances:{L:{label:'Oxytocin',asymId}}
}));
registerClinicalCandidate({
  "keyReferences": [{"citation": "Jain V, Kimbro S, Kowalik G, Milojevic I, Maritza Dowling N, Hunley AL, et al. Intranasal oxytocin increases respiratory rate and reduces obstructive event duration and oxygen desaturation in obstructive sleep apnea patients: a randomized double blinded placebo controlled study. Sleep Med. 2020;74:242-247.", "pmid": "32862007", "url": "https://doi.org/10.1016/j.sleep.2020.05.034"}, {"citation": "Meyerowitz JG, Robertson MJ, Barros-Álvarez X, Panova O, Nwokonko RM, Gao Y, et al. The oxytocin signaling complex reveals a molecular switch for cation dependence. Nat Struct Mol Biol. 2022;29(3):274-281.", "pmid": "35241813", "url": "https://doi.org/10.1038/s41594-022-00728-4"}, {"citation": "Waltenspühl Y, Ehrenmann J, Vacca S, Thom C, Medalia O, Plückthun A. Structural basis for the activation and ligand recognition of the human oxytocin receptor. Nat Commun. 2022;13(1):4153.", "pmid": "35851571", "url": "https://doi.org/10.1038/s41467-022-31325-0"}],
  "id": "oxytocin",
  "name": "Oxytocin",
  "aliases": "催产素",
  "kind": "single",
  "condition": {
    "zh": "阻塞性睡眠呼吸暂停",
    "en": "Obstructive sleep apnea"
  },
  "category": "breathing",
  "phase": "II",
  "status": "FOLLOW_UP",
  "summary": {
    "zh": "鼻内 40 IU 的 II 期短期交叉试验已完成并贴出结果。另一项研究评估联合 CPAP 时所需压力。",
    "en": "A short-term Phase II crossover trial of 40 IU intranasal oxytocin is complete and has posted results. A separate study evaluates pressure requirements during CPAP."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[trialPaper,result,...structuresPaper,pdb('7RYC'),pdb('7QVM')],
  "studies": [
    {id:'NCT03148899',focus:'index',title:'Impact of Oxytocin on Obstructive Sleep Apnea Induced Changes in Sleep',
      phase:'II',status:'COMPLETED',updated:'2023-01-31',sponsor:'George Washington University',
      age:['18 Years',''],allocation:'RANDOMIZED',masking:'TRIPLE',enrollment:{count:32,type:'ACTUAL'},
      conditions:['Obstructive sleep apnea'],interventions:['Oxytocin intranasal spray, 40 IU','Placebo intranasal spray'],
      primaryOutcomes:[{measure:'Duration of Obstructive Events',timeFrame:'Visit 1, day 1; visit 2, day 29'}],
      sleepOutcomes:['Respiratory Rate','Incidence Proportion of Bradycardia','O2 Minimum'].map(
        measure=>({measure,timeFrame:'Visit 1, day 1; visit 2, day 29'})),
      hasResults:true,reference:trial('NCT03148899')},
    {
      "id": "NCT03860233",
      "focus": "additional",
      "title": "Benefits of Oxytocin in Obstructive Sleep Apnea (OSA) Patients Using Continuous Positive Airway Pressure (CPAP) Machine",
      "phase": "I",
      "status": "RECRUITING",
      "updated": "2026-05-04",
      "started": {
        "date": "2019-03-04",
        "type": "ACTUAL"
      },
      "sponsor": "Vivek Jain",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 40,
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
        "Sleep Apnea, Obstructive"
      ],
      "interventions": [
        "Oxytocin",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Use of oxytocin will change pressure required to keep open airway during auto-CPAP use",
          "timeFrame": "5 weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT03860233",
        "url": "https://clinicaltrials.gov/study/NCT03860233"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 439302",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/439302"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-439302.png",
    "depictionSource": {
      "label": "PubChem CID 439302",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/439302"
    },
    "links": [{"label": "ChEMBL CHEMBL4303358", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4303358/"}, {"label": "KEGG D07228", "url": "https://www.kegg.jp/entry/D07228"}],
      "sources": [
      {
        "label": "PubChem CID 439302",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/439302"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"(2S)-1-[(4R,7S,10S,13S,16S,19R)-19-amino-7-(2-amino-2-oxoethyl)-10-(3-amino-3-oxopropyl)-13-[(2S)-butan-2-yl]-16-[(4-hydroxyphenyl)methyl]-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentazacycloicosane-4-carbonyl]-N-[(2S)-1-[(2-amino-2-oxoethyl)amino]-4-methyl-1-oxopentan-2-yl]pyrrolidine-2-carboxamide"],
        [{"zh":"同义词","en":"Synonyms"},"OXYTOCIN · Pitocin"],
        ["KEGG ID","D07228"], ["PharmGKB ID","PA450760"],
        
      [
        "PubChem CID",
        "439302"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C43H66N12O12S2"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "1007.2"
      ],
      [
        "InChIKey",
        "XNOPRXBHLZRZKH-DSZYJQQASA-N"
      ],
      [L('成熟肽及修饰','Mature peptide and modifications'),'CYIQNCPLG–NH₂ · Cys1–Cys6'],
      [
        "SMILES",
        "CC[C@H](C)[C@H]1C(=O)N[C@H](C(=O)N[C@H](C(=O)N[C@@H](CSSC[C@@H](C(=O)N[C@H](C(=O)N1)CC2=CC=C(C=C2)O)N)C(=O)N3CCC[C@H]3C(=O)N[C@@H](CC(C)C)C(=O)NCC(=O)N)CC(=O)N)CCC(=O)N"
      ]
    ]
  },
  "targets": [
    "oxtr"
  ],
  "system": null,
  publishedResult:{study:'NCT03148899',summary:L(
    '鼻内 40 IU 随机交叉比较中，19 名受试者的阻塞事件平均持续时间为催产素 22.72 秒、安慰剂 24.66 秒。论文报告睡眠结构无显著改变。',
    'In the randomized 40 IU intranasal crossover trial, mean obstructive-event duration in 19 analyzed participants was 22.72 s on oxytocin and 24.66 s on placebo. The paper reported no significant changes in sleep architecture.'),
    reference:trialPaper},
  structureEvidence:{title:L('两套人 OXTR–催产素坐标互作','Contacts in two human OXTR–oxytocin structures'),
    summary:L('两套坐标均核对到作者链 L 的 9 个催产素残基、Cys1–Cys6 二硫键和 Gly9 的 C 端酰胺。4.0 Å 内分别有 21（7RYC）和 20（7QVM）个 OXTR 残基。7RYC 中 Gln295 OE1 至配体 Gln4 NE2 为 2.97 Å。7QVM 中 Leu316 主链 O 至 Tyr2 OH 为 2.73 Å。距离按重原子坐标计算。7RYC 另建模 Mg²⁺，两套结构的离子与 G 蛋白构建条件分别记录。',
      'Both models contain nine oxytocin residues in author chain L with a Cys1–Cys6 disulfide and C-terminal Gly9 amidation. Within 4.0 Å there are 21 OXTR residues in 7RYC and 20 in 7QVM. Gln295 OE1 to peptide Gln4 NE2 measures 2.97 Å in 7RYC. Leu316 backbone O to Tyr2 OH measures 2.73 Å in 7QVM. Distances are calculated from heavy-atom coordinates. 7RYC also models Mg²⁺. The two structures use different G-protein constructs.'),
    sources:[...structuresPaper,pdb('7RYC'),pdb('7QVM')]},
  evidenceSections:[
    {chapter:'pharmacology',title:L('人 OXTR 激动活性','Agonist activity at human OXTR'),fields:[
      [L('靶标与功能','Target and function'),L('人 OXTR（P30559）与催产素的直接复合物及功能实验支持受体激动。Meyerowitz 等在人 OXTR 体系中测得 Mg²⁺ 对 Gq/G11 和 β-arrestin 响应的增强。','Direct human OXTR (P30559) structures and functional experiments support receptor agonism. Meyerowitz et al. measured Mg²⁺ potentiation of Gq/G11 and β-arrestin responses at human OXTR.')]
    ],sources:structuresPaper},
    {chapter:'clinical',title:L('NCT03148899 鼻内给药交叉比较','NCT03148899 intranasal crossover comparison'),fields:[
      [L('人群和观察窗','Participants and observation window'),L('登记入组 32 人，结果按两种条件均有数据的 19 人分析。论文分析入睡后 2 小时的 PSG。表值为登记的均值 ± SD。','The registry lists 32 enrolled and 19 analyzed in both conditions. The paper analyzed PSG in the two hours after sleep onset. The table gives registry means ± SD.')],
      [L('睡眠结构','Sleep architecture'),L('论文报告睡眠结构无显著变化。','The paper reported no significant change in sleep architecture.')]
    ],table:{columns:[L('终点','Endpoint'),L('催产素 40 IU','Oxytocin 40 IU'),L('安慰剂','Placebo')],rows:[
      [L('阻塞事件持续时间（秒）','Obstructive-event duration (s)'),'22.72 ± 4.59','24.66 ± 5.12'],
      [L('呼吸频率（次/分钟）','Respiratory rate (breaths/min)'),'17.39 ± 3.50','16.69 ± 3.24'],
      [L('事件伴心动过缓的比例','Proportion of events with bradycardia'),'0.08 ± 0.07','0.14 ± 0.07'],
      [L('最低血氧饱和度（%）','Minimum oxygen saturation (%)'),'94.31 ± 1.80','92.44 ± 4.24']
    ]},sources:[result,trialPaper]},
    {chapter:'safety',title:L('NCT03148899 登记安全性','NCT03148899 registry safety'),fields:[
      [L('严重及其他不良事件','Serious and other adverse events'),L('登记按两种条件分别报告，严重不良事件均为 0/32，其他不良事件均为 0/32。疗效分析人群为 19 人。','The registry reports 0/32 serious and 0/32 other adverse events under each condition. The efficacy analysis included 19 participants.')]
    ],sources:[result]}
  ]
},complexes);
}
