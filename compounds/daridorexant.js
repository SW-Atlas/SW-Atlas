{
  const label=source(L('QUVIVIQ · 美国说明书（2024-09）','QUVIVIQ · US label (2024-09)'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a2d1503-b816-40c9-9fac-7e03c5a3bcef');
  const review=article('Treiber et al. · JPET 2017','28663311');
  const registration=fda('Quviviq','214985');
  const design=L('研究 1 为 3 个月随机双盲安慰剂对照试验。下表摘录 WASO。','Study 1 was a 3-month randomized double-blind placebo-controlled trial. The table shows selected WASO results.');
  registerCompound({
    molecule:record('dar','molecules','Daridorexant',L('达利雷生 · Quviviq','Quviviq · ACT-541468'),USApproved,
      L('双重食欲素受体拮抗剂。收录人 OX1R 复合物和两种受体亚型的药理依据。','A dual orexin receptor antagonist with a human OX1R complex and pharmacology for both receptor subtypes.'),
      [],[pubchem(91801202),ccd('NS2'),label,review,registration,pdb('6TP3'),
        source(L('FDA 审评 · 游离碱身份','FDA review · Free base identity'),'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2022/214985Orig1s000OtherR.pdf')],['ox1','ox2','orexin','6TP3']),
    profile:{keyReferences: [{"citation": "Treiber A, de Kanter R, Roch C, Gatfield J, Boss C, von Raumer M, et al. The Use of Physiology-Based Pharmacokinetic and Pharmacodynamic Modeling in the Discovery of the Dual Orexin Receptor Antagonist ACT-541468. J Pharmacol Exp Ther. 2017;362(3):489-503.", "pmid": "28663311", "url": "https://doi.org/10.1124/jpet.117.241596"}, {"citation": "Mignot E, Mayleben D, Fietze I, Leger D, Zammit G, Bassetti CLA, et al. Safety and efficacy of daridorexant in patients with insomnia disorder: results from two multicentre, randomised, double-blind, placebo-controlled, phase 3 trials. Lancet Neurol. 2022;21(2):125-139.", "pmid": "35065036", "url": "https://doi.org/10.1016/S1474-4422(21)00436-1"}],

      chemistry:chemistry('ns2',91801202,'NS2','1505484-82-1','C₂₃H₂₃ClN₆O₂','450.93','NBGABHGMJVIVBW-QHCPKHFHSA-N',
        'COc1ccc(n2nccn2)c(c1)C(=O)N3CCC[C@@]3(C)c4[nH]c5c(C)c(Cl)ccc5n4',
        {"iupac": "[(2S)-2-(5-chloro-4-methyl-1H-benzimidazol-2-yl)-2-methylpyrrolidin-1-yl]-[5-methoxy-2-(triazol-2-yl)phenyl]methanone", "synonyms": "Nemorexant · Daridorexant", "kegg": "D11886", "links": [{"label": "ChEMBL CHEMBL4297590", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297590/"}, {"label": "KEGG D11886", "url": "https://www.kegg.jp/entry/D11886"}]}),
      regulatory:usMarket(2022,onsetMaintenance,L('口服片剂 · 25 mg、50 mg，规格以达利雷生计','Oral tablets · 25 and 50 mg, expressed as daridorexant'),label,registration),
      pk:section(L('人体药代','Human pharmacokinetics'),[
        [L('终末半衰期','Terminal half-life'),L('约 8 h','Approximately 8 h')],
        [L('代谢','Metabolism'),L('CYP3A4 为主要代谢途径。','CYP3A4 is the primary metabolic pathway.')]
      ],[label]),
      clinical:[trialRecord(L('研究 1 · PSG','Study 1 · PSG'),design,[
        [waso,month1,'50 mg',L('−23 分钟','−23 min'),'95% CI −28 to −18'],
        [waso,month3,'50 mg',L('−18 分钟','−18 min'),'95% CI −24 to −13'],
        [waso,month1,'25 mg',L('−12 分钟','−12 min'),'95% CI −17 to −7'],
        [waso,month3,'25 mg',L('−12 分钟','−12 min'),'95% CI −17 to −6']
      ],L('说明书表 4。各剂量组及安慰剂组均为 310 人。效应量是相对于安慰剂的最小二乘均值差。','Label Table 4. Each dose group and the placebo group included 310 participants. Effects are least-squares mean differences versus placebo.'),[label,trial('NCT03545191')])],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('常见不良反应','Common adverse reactions'),L('说明书 §6.1 列出头痛及嗜睡或疲劳。','The label lists headache and somnolence or fatigue in §6.1.')],
        [L('相互作用','Interactions'),L('CYP3A4 抑制剂或诱导剂可改变药物暴露。具体条件见说明书 §7.1。','CYP3A4 inhibitors or inducers may affect exposure. See label §7.1 for specific conditions.')]
      ],[label])
    },
    complexes:[structure('6TP3','OX1R · Daridorexant',xray,'3.04',antagonistBound,'ox1','dar','NS2','A',
      L('人 OX1R 工程构建。本条目注释作者链 A 的 NS2 实例。','Engineered human OX1R. This record annotates the NS2 instance in author chain A.'))],
    assays:[
      {molecule:'dar',target:'ox1',action:antagonist,method:L('细胞内钙释放拮抗','Antagonism in a cellular calcium-release assay'),result:'Apparent Kᵦ 0.5 nM',system:L('重组人 OX1R','Recombinant human OX1R'),sources:[review]},
      {molecule:'dar',target:'ox2',action:antagonist,method:L('细胞内钙释放拮抗','Antagonism in a cellular calcium-release assay'),result:'Apparent Kᵦ 0.8 nM',system:L('重组人 OX2R','Recombinant human OX2R'),sources:[review]}
    ],
    effect:{direction:'sleep',ref:label}
  });
}
