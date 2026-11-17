{
  const arousal=article('Lazarus et al. · J Neurosci 2011','21734299');
  const human=article('Drake et al. · J Clin Sleep Med 2013','24235903');
  registerCompound({
    molecule:record('caf','molecules','Caffeine',L('咖啡因 · 外源性甲基黄嘌呤','Exogenous methylxanthine'),USApproved,
      L('腺苷受体拮抗剂，广泛使用的非处方促觉醒药物。收录人 A₂AR 共晶、伏隔核 A₂AR 机制研究及人体睡眠研究证据。','An adenosine receptor antagonist and widely used over-the-counter wake-promoting drug, with a human A₂AR co-crystal, nucleus accumbens A₂AR mechanism studies and human sleep studies.'),
      [],[pubchem(2519),ccd('CFF'),pdb('3RFM'),arousal],['a2a','adenosine-signal','3RFM']),
    profile:{keyReferences: [{"citation": "Lazarus M, Shen HY, Cherasse Y, Qu WM, Huang ZL, Bass CE, et al. Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens. J Neurosci. 2011;31(27):10067-10075.", "pmid": "21734299", "url": "https://doi.org/10.1523/JNEUROSCI.6730-10.2011"}, {"citation": "Drake C, Roehrs T, Shambroom J, Roth T. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med. 2013;9(11):1195-1200.", "pmid": "24235903", "url": "https://doi.org/10.5664/jcsm.3170"}],

      chemistry:chemistry('cff',2519,'CFF','58-08-2','C₈H₁₀N₄O₂','194.19','RYYVLZVUVIJVGH-UHFFFAOYSA-N','CN1C=NC2=C1C(=O)N(C(=O)N2C)C',
  {"iupac": "1,3,7-trimethylpurine-2,6-dione", "synonyms": "caffeine · Guaranine", "kegg": "D00528", pharmgkb:'PA448710', "links": [{"label": "ChEMBL CHEMBL113", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL113/"}, {"label": "KEGG D00528", "url": "https://www.kegg.jp/entry/D00528"}]}),
      regulatory:section(L('监管与制剂','Regulatory status and formulation'),[
        [L('监管地区','Jurisdiction'),L('美国 · FDA 非处方（OTC）','United States · FDA OTC')],
        [L('适应证摘要','Indication summary'),L('作为非处方助醒剂，用于暂时缓解困倦或疲劳。','OTC alertness aid for the temporary relief of drowsiness or fatigue.')],
        [L('制剂与规格','Formulation and strengths'),L('口服片剂 · 100–200 mg（常见 OTC 规格）','Oral tablets · 100–200 mg (common OTC strengths)')]
      ],[source('FDA · OTC 兴奋剂专论 21 CFR 340','https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-340')]),
      preclinical:[animalRecord(L('小鼠与大鼠 · 伏隔核干预','Mouse and rat · Nucleus accumbens perturbation'),
        L('小鼠条件性基因删除与大鼠局部 RNA 干扰。','Conditional gene deletion in mice and focal RNA interference in rats.'),
        L('研究支持伏隔核壳部 A₂AR 参与咖啡因诱发的觉醒。','The study supports a role for A₂AR in the nucleus accumbens shell in caffeine-induced wakefulness.'),[arousal])],
      clinical:[trialRecord(L('人体睡眠干预实验','Human sleep intervention study'),
        L('比较固定剂量咖啡因与安慰剂。测量时点为习惯就寝前 0、3 或 6 h。','Fixed-dose caffeine was compared with placebo when administered 0, 3 or 6 h before habitual bedtime.'),[
          [L('居家睡眠记录','Home sleep measures'),L('给药当夜','Night of administration'),'400 mg',
            L('各给药时点均出现睡眠扰动','Sleep disruption was observed at each administration time'),L('原文结果摘要','Primary-study summary')]
        ],L('该剂量为研究条件。','The dose is a study condition.'),[human])],
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('口服后约 30–60 分钟达峰','Peak at about 30–60 min after oral administration')],
        ['t½',L('成人约 3–7 小时，均值约 5 小时','About 3–7 h in adults, with a mean of about 5 h')],
        [L('代谢','Metabolism'),L('主要经 CYP1A2 代谢为副黄嘌呤、可可碱与茶碱。','Metabolized mainly by CYP1A2 to paraxanthine, theobromine and theophylline.')]
      ],[source('Fredholm BB, Bättig K, Holmén J, Nehlig A, Zvartau EE. Actions of caffeine in the brain with special reference to factors that contribute to its widespread use. Pharmacol Rev. 1999;51(1):83-133.','https://pubmed.ncbi.nlm.nih.gov/10049999/')]),
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('对睡眠的影响','Effects on sleep'),L('睡前数小时内摄入可延长入睡潜伏期、缩短总睡眠时间并降低睡眠效率。','Intake within hours of bedtime can prolong sleep latency, shorten total sleep time and reduce sleep efficiency.')],
        [L('常见不良反应','Common adverse reactions'),L('失眠、焦虑、心悸或心动过速、震颤。','Insomnia, anxiety, palpitations or tachycardia, and tremor.')],
        [L('耐受与戒断','Tolerance and withdrawal'),L('规律摄入可产生耐受；骤停可致头痛、疲乏等戒断症状。','Regular intake can produce tolerance; abrupt cessation can cause withdrawal symptoms such as headache and fatigue.')]
      ],[source('Nehlig A. Are we dependent upon coffee and caffeine? A review on human and animal data. Neurosci Biobehav Rev. 1999;23(4):563-576.','https://pubmed.ncbi.nlm.nih.gov/10073894/')])
    },
    complexes:[structure('3RFM','A₂AR · Caffeine',xray,'3.60',antagonistBound,'a2a','caf','CFF','A',
      L('人 A₂AR 热稳定工程构建。','Thermostabilized engineered human A₂AR construct.'))],
    assays:[evidence('caf','a2a',antagonist,L('实验复合物与原始结构研究','Experimental complex and primary structure study'),L('人 A₂AR','Human A₂AR'),pdb('3RFM'))],
    effect:{direction:'wake',ref:human}
  });
}
