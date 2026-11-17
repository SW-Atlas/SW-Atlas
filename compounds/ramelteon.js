{
  const label=source(L('ROZEREM · 美国说明书（2026-04）','ROZEREM · US label (2026-04)'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9de82310-70e8-47b9-b1fc-6c6848b99455');
  const registration=fda('Rozerem','021782');
  const state=L('激动剂结合态','Agonist-bound');
  registerCompound({
    molecule:record('ram','molecules','Ramelteon',L('雷美替胺 · Rozerem','Rozerem · TAK-375'),USApproved,
      L('褪黑素受体激动剂。可并排浏览人 MT₁ 与 MT₂ 的雷美替胺结合结构。','A melatonin receptor agonist with ramelteon-bound structures for human MT₁ and MT₂.'),
      [],[pubchem(208902),ccd('JEV'),label,registration,pdb('6ME2'),pdb('7VH0')],['mt1','mt2','melatonin-signal','6ME2','7VH0']),
    profile:{keyReferences: [{"citation": "Kato K, Hirai K, Nishiyama K, Uchikawa O, Fukatsu K, Ohkawa S, et al. Neurochemical properties of ramelteon (TAK-375), a selective MT1/MT2 receptor agonist. Neuropharmacology. 2005;48(2):301-310.", "pmid": "15695169", "url": "https://doi.org/10.1016/j.neuropharm.2004.09.007"}, {"citation": "Erman M, Seiden D, Zammit G, Sainati S, Zhang J. An efficacy, safety, and dose-response study of Ramelteon in patients with chronic primary insomnia. Sleep Med. 2006;7(1):17-24.", "pmid": "16309958", "url": "https://doi.org/10.1016/j.sleep.2005.09.004"}],

      chemistry:chemistry('jev',208902,'JEV','196597-26-9','C₁₆H₂₁NO₂','259.34','YLXDSYKOBKBWJQ-LBPRGKRZSA-N','CCC(=O)NCC[C@@H]1CCC2=C1C3=C(C=C2)OCC3',
  {"iupac": "N-[2-[(8S)-2,6,7,8-tetrahydro-1H-cyclopenta[e][1]benzofuran-8-yl]ethyl]propanamide", "synonyms": "Ramelteon · Rozerem", "kegg": "D02689", pharmgkb:'PA164744896', "links": [{"label": "ChEMBL CHEMBL1218", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1218/"}, {"label": "KEGG D02689", "url": "https://www.kegg.jp/entry/D02689"}]}),
      regulatory:usMarket(2005,L('以入睡困难为特征的失眠。','Insomnia involving difficulty initiating sleep.'),L('口服片剂 · 8 mg','Oral tablets · 8 mg'),label,registration),
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('空腹口服中位数 0.75 h（0.5–1.5 h）','Fasted oral median 0.75 h (0.5–1.5 h)')],
        [L('绝对生物利用度','Absolute bioavailability'),'1.8%'],
        [L('代谢','Metabolism'),L('CYP1A2 为主要代谢途径。','CYP1A2 is the principal metabolic pathway.')]
      ],[label]),
      clinical:[trialRecord(L('成人慢性失眠 · 6 个月 PSG 研究','Adult chronic insomnia · 6-month PSG study'),
        L('成人慢性失眠的随机双盲对照研究。比较每夜 8 mg 与安慰剂。','Randomized double-blind controlled study in adults with chronic insomnia, comparing 8 mg nightly with placebo.'),[
          [lps,L('第 1 周及第 1、3、5、6 个月','Week 1 and Months 1, 3, 5 and 6'),'8 mg',L('所列时点入睡潜伏期较安慰剂缩短','Shorter latency versus placebo at the listed time points'),L('说明书定性摘要','Qualitative label summary')]
        ],L('摘自美国说明书 §14.1。','Source: US label §14.1.'),[label])],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('常见不良反应','Common adverse reactions'),L('说明书 §6.1 列出嗜睡、头晕等。','The label lists somnolence and dizziness among other reactions in §6.1.')],
        [L('相互作用','Interactions'),L('氟伏沙明可显著增加雷美替胺暴露。详见说明书 §7。','Fluvoxamine markedly increases ramelteon exposure. See label §7.')]
      ],[label])
    },
    complexes:[
      structure('6ME2','MT₁ · Ramelteon',L('XFEL 晶体学','XFEL crystallography'),'2.80',state,'mt1','ram','JEV','A',
        L('人 MT₁ 工程融合构建。','Engineered human MT₁ fusion construct.')),
      structure('7VH0','MT₂ · Ramelteon · Gᵢ',cryo,'3.46',L('激动剂及 G 蛋白结合态','Agonist- and G protein-bound'),'mt2','ram','JEV','A',
        L('人 MT₂–Gᵢ 复合物。','Human MT₂–Gᵢ complex.'))
    ],
    assays:[
      evidence('ram','mt1',agonist,L('说明书药理与实验结构','Label pharmacology and experimental structure'),L('人 MT₁','Human MT₁'),label),
      evidence('ram','mt2',agonist,L('说明书药理与实验结构','Label pharmacology and experimental structure'),L('人 MT₂','Human MT₂'),label)
    ],
    effect:{direction:'sleep',ref:label}
  });
}
