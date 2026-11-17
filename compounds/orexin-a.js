{
  const discovery=article('Sakurai et al. · Cell 1998','9491897');
  const arousal=article('Hagan et al. · PNAS 1999','10485925');
  const sleep=article('Piper et al. · Eur J Neurosci 2000','10712652');
  const human=article('Baier et al. · Intranasal hypocretin-1','22036605');
  const models=[pdb('1R02'),pdb('1WSO')];
  const molstar=['1R02','1WSO'].map(id=>source(id+' · Mol*','https://www.rcsb.org/3d-view/'+id));
  registerCompound({
    molecule:record('orexin-a','molecules','Orexin-A',L('食欲素 A · Hypocretin-1','Hypocretin-1 · OXA'),endogenous,
      L('HCRT 前体产生的 33 残基神经肽，可激活 OX1R 与 OX2R。收录游离肽溶液 NMR 结构。',
        'A 33-residue neuropeptide from the HCRT precursor that activates OX1R and OX2R. Free-peptide solution NMR structures are indexed.'),
      [[L('前体','Precursor'),'HCRT · UniProt O43612 · 34–66'],
       [L('母体字母序列','Parent-letter sequence'),'QPLPDCCRQKTCSCRLYELLHGAGNHAAGILTL'],
       [L('成熟肽修饰','Mature peptide modifications'),'pGlu1 · Cys6–Cys12 · Cys7–Cys14 · Leu33–NH₂']],
      [uniprot('O43612'),discovery,arousal,sleep,human,...models],['ox1','ox2','orexin','orb']),
    profile:{keyReferences: [{"citation": "Piper DC, Upton N, Smith MI, Hunter AJ. The novel brain neuropeptide, orexin-A, modulates the sleep-wake cycle of rats. Eur J Neurosci. 2000;12(2):726-730.", "pmid": "10712652", "url": "https://doi.org/10.1046/j.1460-9568.2000.00919.x"}, {"citation": "Hagan JJ, Leslie RA, Patel S, Evans ML, Wattam TA, Holmes S, et al. Orexin A activates locus coeruleus cell firing and increases arousal in the rat. Proc Natl Acad Sci U S A. 1999;96(19):10911-10916.", "pmid": "10485925", "url": "https://doi.org/10.1073/pnas.96.19.10911"}, {"citation": "Baier PC, Hallschmid M, Seeck-Hirschner M, Weinhold SL, Burkert S, Diessner N, et al. Effects of intranasal hypocretin-1 (orexin A) on sleep in narcolepsy with cataplexy. Sleep Med. 2011;12(10):941-946.", "pmid": "22036605", "url": "https://doi.org/10.1016/j.sleep.2011.06.015"}],

      structureEvidence:{
        title:L('游离肽溶液结构','Free-peptide solution structures'),
        summary:L('1WSO 为 30 个 NMR 构象，坐标标明 N 端 PCA 和 C 端 NH₂，并记录两对二硫键。1R02 为单一提交构象，沉积坐标将第 1 位标为 GLN，未单列 C 端 NH₂。7L1U 中结合 OX2R 的配体是 Orexin-B，可从关联分子进入。',
          '1WSO contains 30 submitted NMR conformers and annotates N-terminal PCA, C-terminal NH₂ and the two disulfides. 1R02 has one submitted conformer, labels position 1 GLN and has no separate terminal NH₂ group. The OX2R-bound ligand in 7L1U is orexin-B, accessible from the related record.'),
        sources:[...models,...molstar]
      },
      preclinical:[{species:L('大鼠','Rat'),
        design:L('正常睡眠期开始时脑室内给予 Orexin-A（1、10 或 30 μg/只）；另有蓝斑神经元电生理实验。',
          'Orexin-A (1, 10 or 30 μg per rat) was given intracerebroventricularly at the start of the normal sleep period. A separate experiment assessed locus coeruleus neuron firing.'),
        result:L('给药后第 2–3 小时的觉醒时间随剂量增加；蓝斑实验观察到放电增加。',
          'Wake time increased dose-dependently in hours 2–3 after dosing; the locus coeruleus experiment showed increased firing.'),
        sources:[sleep,arousal]}],
      clinical:[{title:L('鼻内给药探索性人体研究','Exploratory intranasal human study'),
        summary:L('发作性睡病伴猝倒人群的小样本随机交叉研究。','Small randomized crossover study in participants with narcolepsy with cataplexy.'),
        rows:[[L('夜间睡眠结构','Nocturnal sleep architecture'),L('单次给药后','After single dosing'),
          L('鼻内 Orexin-A','Intranasal orexin-A'),L('研究报告 REM 睡眠减少','The study reported reduced REM sleep'),L('见原文','See original study')]],
        note:L('探索性生理研究。结果限于所试人群、给药途径和睡眠指标。','Exploratory physiology study. Interpret within the studied population, administration route and sleep measures.'),
        sources:[human]}]
    },
    effect:{direction:'wake',qualifier:L('大鼠脑室内给药','Rat intracerebroventricular dosing'),
      context:L('大鼠给药研究显示促觉醒。','An arousal effect was observed after administration in rats.'),ref:sleep}
  });
}
