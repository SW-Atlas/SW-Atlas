{
  const identity=pubchem(155801560);
  const pharmacology=article('Whiteside et al. · J Clin Invest 2024','37883189');
  const first=article('Phase I insomnia crossover · Br J Clin Pharmacol','40865537');
  const phase2=source('ClinicalTrials.gov · NCT04035200 · Results','https://clinicaltrials.gov/study/NCT04035200?tab=results');
  const native=pdb('8F7X');
  records.push({
    ...record('oprl1','targets','NOP (OPRL1)',L('伤害感受素受体 · 人','Nociceptin receptor · Human'),classA,
      L('内源性配体 nociceptin/orphanin FQ 的受体。Sunobinop 的部分激动证据与内源性肽的复合物结构分开记录。',
        'Receptor for endogenous nociceptin/orphanin FQ. Evidence for sunobinop partial agonism is indexed separately from the native peptide complex.'),
      [['UniProt','P41146']],[uniprot('P41146'),native,pharmacology],[]),
    structureReferences:[{id:'8F7X',ligand:'Nociceptin (N/OFQ)',state:L('内源性肽–NOP–Gi 复合物','Native peptide–NOP–Gi complex'),method:cryo,resolution:'3.28'}]
  });
  registerClinicalCandidate({
  "keyReferences": [{"citation": "Whiteside GT, Kyle DJ, Kapil RP, Cipriano A, He E, Zhou M, et al. The nociceptin/orphanin FQ receptor partial agonist sunobinop promotes non-REM sleep in rodents and patients with insomnia. J Clin Invest. 2024;134(1).", "pmid": "37883189", "url": "https://doi.org/10.1172/JCI171172"}, {"citation": "Whiteside GT, He E, Shet MS, Zhou M, Ahmad M, Harris SC. Efficacy and safety of a selective partial agonist for nociception/orphanin-FQ peptide (NOP) receptors in patients with insomnia disorder. Br J Clin Pharmacol. 2026;92(1):172-185.", "pmid": "40865537", "url": "https://doi.org/10.1002/bcp.70193"}],
    id:'sunobinop',name:'Sunobinop',aliases:'V117957 / IMB-115 / S-117957',kind:'single',
    category:'insomnia',phase:'II',status:'COMPLETED',reviewed:'2026-11-06',
    condition:L('失眠；II 期登记针对酒精使用障碍恢复期的失眠','Insomnia; Phase II registration in insomnia during recovery from alcohol use disorder'),
    summary:L('NOP 受体部分激动剂。失眠 I 期有同行评议结果，酒精使用障碍恢复期失眠 II 期已完成并发布登记结果。',
      'A NOP receptor partial agonist. Phase I insomnia findings were peer reviewed; the Phase II insomnia trial during recovery from alcohol use disorder is complete with posted results.'),
    otherIndication:false,identity,
    chemistry:{depiction:'assets/chem/clinical-155801560.png',depictionSource:identity,sources:[identity],fields:[
      ['PubChem CID','155801560'],['CAS','1126793-40-5'],
      [L('IUPAC 名称','IUPAC name'),"4-[(1R,5S)-9-[(1S,5S)-3-bicyclo[3.3.1]nonanyl]-9-azabicyclo[3.3.1]nonan-3-yl]-3-oxoquinoxaline-2-carboxylic acid"],
      [L('同义词','Synonyms'),"Sunobinop · Sunobinop [INN]"],
      ['UNII','I1X86U5474'], ['PharmGKB ID','PA166330981'],['InChIKey','COTYYZPYDJKKIS-MCXOOUIESA-N'],
      [L('分子式','Molecular formula'),'C₂₆H₃₃N₃O₃'],[L('分子量','Molecular weight'),'435.6 g/mol'],
      [L('化学表示','Chemical representation'),L('按所引 PubChem 条目显示；其 InChI 含一个未指定的立体标记。','As deposited in PubChem; its InChI contains one unspecified stereochemical marker.')],
      ['SMILES',"C1C[C@H]2C[C@H](C1)CC(C2)N3[C@@H]4CCC[C@H]3CC(C4)N5C6=CC=CC=C6N=C(C5=O)C(=O)O"]
    ],links:[{label:'ChEMBL CHEMBL5095040',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5095040/'}]},
    targets:['oprl1'],
    references:[pharmacology,first,phase2,native],
    structureEvidence:{
      title:L('NOP 受体的实验结构参照','Experimental structure reference for NOP'),
      summary:L('8F7X 的实际配体为内源性 nociceptin 肽，分辨率 3.28 Å。本站以此作为同靶标结构参照；Sunobinop 的直接结合构象和位点待确认。',
        'The ligand modeled in 8F7X is endogenous nociceptin at 3.28 Å. This is a structural reference for the same target. Sunobinop’s directly observed binding pose and contacts await verification.'),
      sources:[native,source('8F7X · Mol*','https://www.rcsb.org/3d-view/8F7X')]
    },
    effect:{direction:'sleep',qualifier:L('失眠 I 期 PSG','Phase I insomnia PSG'),
      context:L('小样本交叉试验报告睡眠效率和维持改善。','A small crossover study reported improved sleep efficiency and maintenance.'),ref:first},
    studies:[{
      id:'NCT04035200',title:'Safety, Tolerability and Efficacy Study of V117957 in Subjects With Insomnia Associated With Alcohol Cessation',
      phase:'II',status:'COMPLETED',updated:'2023-09-18',protocol:'OAG2002',focus:'index',
      sponsor:'Imbrium Therapeutics',allocation:'RANDOMIZED',masking:'TRIPLE',
      designNote:L('登记的掩蔽字段为三方设盲；方案标题描述为双盲。','The registry masking field lists three masked roles; the protocol title describes the design as double-blind.'),
      age:[],enrollment:{count:114,type:'ACTUAL'},conditions:['Insomnia associated with alcohol cessation'],
      interventions:['Sunobinop 1 mg','Sunobinop 2 mg','Placebo'],
      primaryOutcomes:[{measure:'Change in polysomnographic wake after sleep onset (WASO)',timeFrame:'Baseline, nights 1/2 and nights 20/21'}],
      hasResults:true,reference:trial('NCT04035200')
    }],
    evidenceSections:[
      {chapter:'pharmacology',title:L('NOP 部分激动及证据','NOP partial agonism and evidence'),fields:[
        [L('靶标','Target'),'NOP / OPRL1'],
        [L('功能与动物证据','Functional and animal evidence'),L('体外功能研究报告部分激动；大鼠 EEG 促 NREM 效应在 NOP 敲除动物中显著减弱。',
          'Functional experiments support partial agonism. EEG changes associated with increased NREM sleep were markedly attenuated in NOP-knockout rats.')]
      ],sources:[pharmacology,source('In vitro pharmacology · Biochem Pharmacol','https://doi.org/10.1016/j.bcp.2025.116972')]},
      {chapter:'clinical',title:L('I 期 · DSM-5 失眠','Phase I · DSM-5 insomnia'),fields:[
        [L('设计','Design'),L('随机、双盲、重复给药交叉研究，30 人随机，29 人完成。剂量 0.5、1、3、6 mg 和安慰剂。',
          'Randomized, double-blind, repeat-dose crossover. Thirty randomized, 29 completed. Doses were 0.5, 1, 3 or 6 mg and placebo.')],
        [L('多导睡眠监测','Polysomnography'),L('论文报告各剂量的睡眠效率改善和睡后觉醒时间缩短。结果限于短期交叉研究。',
          'The paper reports improved sleep efficiency and reduced wake after sleep onset across tested doses. The study was short-term.')]
      ],sources:[first]},
      {chapter:'clinical',title:L('II 期 · 恢复期失眠的登记结果','Phase II · Posted results in insomnia during recovery'),fields:[
        [L('人群','Population'),L('酒精使用障碍恢复期失眠，114 人随机。','Insomnia during recovery from alcohol use disorder, 114 randomized.')],
        [L('测量','Measurement'),L('多导睡眠监测的睡后觉醒时间（WASO），单位为分钟。','Polysomnographic wake after sleep onset (WASO), in minutes.')]
      ],table:{
        columns:[L('试验组','Trial arm'),L('基线均值（n）','Baseline mean (n)'),L('第 1/2 夜均值（n）','Nights 1/2 mean (n)'),L('第 20/21 夜均值（n）','Nights 20/21 mean (n)')],
        rows:[['1 mg','100.88 (38)','48.64 (38)','50.56 (36)'],['2 mg','99.70 (37)','42.44 (37)','46.17 (31)'],
          [L('安慰剂','Placebo'),'103.51 (38)','63.00 (38)','64.43 (32)']]
      },note:L('表列登记报告的观察均值及各时点人数。主要终点定义为相对基线变化。','The table shows posted observed means and sample sizes. The primary endpoint is defined as change from baseline.'),sources:[phase2]},
      {chapter:'safety',title:L('II 期 · 登记安全性','Phase II · Registered safety'),fields:[
        [L('嗜睡','Somnolence'),L('1 mg 组 2/38，2 mg 组 10/38，安慰剂组 0/38。','2/38 at 1 mg, 10/38 at 2 mg and 0/38 on placebo.')],
        [L('严重不良事件','Serious adverse events'),L('三个组各为 0/38。','0/38 in each arm.')]
      ],sources:[phase2]}
    ]
  });
}
