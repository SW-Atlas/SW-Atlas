{
  const label=source(L('SUNOSI · 美国说明书','SUNOSI · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=362f206b-73e7-4009-8c34-5a9df55679ab');
  const registration=fda('Sunosi','211230');
  const ema=source(L('EMA · Sunosi 审评报告，主要药效学','EMA · Sunosi assessment report, primary pharmacodynamics'),
    'https://www.ema.europa.eu/en/documents/assessment-report/sunosi-epar-public-assessment-report_en.pdf');
  const exploratory=source(L('Neurology 2023 · 会议摘要 P4-13.005','Neurology 2023 · Conference abstract P4-13.005'),
    'https://www.neurology.org/doi/10.1212/WNL.0000000000204178');
  const mwt=L('维持觉醒试验（MWT）','Maintenance of Wakefulness Test (MWT)');
  const ess=L('Epworth 嗜睡量表（ESS）','Epworth Sleepiness Scale (ESS)');
  const week12=L('第 12 周','Week 12');
  const reuptake=L('再摄取抑制','Reuptake inhibition');
  const binding=L('放射性配体竞争结合','Radioligand competition binding');
  const uptake=L('体外再摄取抑制试验','In vitro reuptake inhibition assay');
  const system=L('美国说明书 §12.1 与 EMA 审评资料','US label §12.1 and EMA assessment');
  registerCompound({
    molecule:record('sol','molecules','Solriamfetol',L('索安非托 · Sunosi','Sunosi · JZP-110'),USApproved,
      L('多巴胺和去甲肾上腺素再摄取抑制剂。档案区分发作性睡病与阻塞性睡眠呼吸暂停相关的日间过度嗜睡。','A dopamine and norepinephrine reuptake inhibitor. The dossier distinguishes excessive daytime sleepiness associated with narcolepsy from that associated with obstructive sleep apnea.'),
      [[L('化学身份','Chemical identity'),L('(2R) 游离碱。SUNOSI 片剂为盐酸盐。','(2R) free base. SUNOSI tablets contain the hydrochloride salt.')]],
      [pubchem(10130337),label,registration,ema],['dat','net','monoamine-reuptake']),
    profile:{keyReferences: [{"citation": "Thorpy MJ, Shapiro C, Mayer G, Corser BC, Emsellem H, Plazzi G, et al. A randomized study of solriamfetol for excessive sleepiness in narcolepsy. Ann Neurol. 2019;85(3):359-370.", "pmid": "30694576", "url": "https://doi.org/10.1002/ana.25423"}, {"citation": "Hoy SM. Solriamfetol: A Review in Excessive Daytime Sleepiness Associated with Narcolepsy and Obstructive Sleep Apnoea. CNS Drugs. 2023;37(11):1009-1020.", "pmid": "37847434", "url": "https://doi.org/10.1007/s40263-023-01040-5"}],

      chemistry:chemistry('sol',10130337,null,'178429-62-4','C₁₀H₁₄N₂O₂','194.23','UCTRAOBQFUDCSR-SECBINFHSA-N',
        'C1=CC=C(C=C1)C[C@H](COC(=O)N)N',
        {"iupac": "[(2R)-2-amino-3-phenylpropyl] carbamate", "synonyms": "Solriamfetol · (2R)-2-amino-3-phenylpropyl carbamate", "kegg": "D11315", "links": [{"label": "ChEMBL CHEMBL4297620", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297620/"}, {"label": "KEGG D11315", "url": "https://www.kegg.jp/entry/D11315"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('首次批准','Initial US approval'),'2019'],
        [L('适应证摘要','Indication summary'),L('改善发作性睡病或阻塞性睡眠呼吸暂停（OSA）相关日间过度嗜睡成人的觉醒程度。','Improves wakefulness in adults with excessive daytime sleepiness associated with narcolepsy or obstructive sleep apnea (OSA).')],
        [L('OSA 适应证边界','OSA indication scope'),L('针对日间过度嗜睡，说明书要求维持针对气道梗阻的基础治疗。','Addresses daytime sleepiness. The label calls for continued treatment of the underlying airway obstruction.')],
        [L('说明书列示规格','Labeled strengths'),L('盐酸盐片剂，按索安非托计 75、150 mg。','Hydrochloride tablets, 75 and 150 mg expressed as solriamfetol.')],
        [L('说明书剂量摘要','Label dosage summary'),L('§2 列示成人起始量，发作性睡病 75 mg/日，OSA 37.5 mg/日。肾功能不全另列。','Section 2 lists adult starting doses of 75 mg/day for narcolepsy and 37.5 mg/day for OSA. Renal impairment is addressed separately.')]
      ],[label,registration]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('索安非托与 DAT 或 NET 的直接复合物待核验。靶标页列有其他配体结合的实验结构，并标明实际配体。','Direct complexes of solriamfetol with DAT or NET are pending verification. The target pages identify the ligands modeled in the experimental references.'),
        sources:[pdb('9EO4'),pdb('8ZP2')]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('空腹中位数 2 h（1.25–3.0 h）。','Fasted median 2 h (1.25–3.0 h).')],
        [L('表观平均消除半衰期','Apparent mean elimination half-life'),L('约 7.1 h。','Approximately 7.1 h.')],
        [L('消除','Elimination'),L('人体代谢较少。质量平衡研究约 95% 的给药量以原形从尿中回收。','Minimally metabolized in humans. About 95% of the dose was recovered unchanged in urine in a mass balance study.')]
      ],[label]),
      preclinical:[animalRecord(L('体外 · TAAR1 研究线索','In vitro · Exploratory TAAR1 finding'),
        L('会议摘要报告人、小鼠和大鼠 TAAR1 的体外功能试验。','A conference abstract reports in vitro functional testing at human, mouse and rat TAAR1.'),
        L('摘要报告人 TAAR1 激动 EC₅₀ 为 10–16 μM。该作用对人体促觉醒疗效的贡献待验证。','The abstract reports a human TAAR1 agonist EC₅₀ of 10–16 μM. Its contribution to wakefulness in patients remains to be established.'),
        [exploratory])],
      clinical:[
        trialRecord(L('研究 1 · 成人发作性睡病','Study 1 · Adult narcolepsy'),
          L('12 周双盲随机试验。两项共同主要终点为 MWT 和 ESS。','A 12-week randomized double-blind trial with MWT and ESS as co-primary endpoints.'),[
            [mwt,week12,'75 mg',L('+2.6 分钟','+2.6 min'),'95% CI −1.0 to 6.3'],
            [ess,week12,'75 mg',L('−2.2 分','−2.2 points'),'95% CI −4.0 to −0.3'],
            [mwt,week12,'150 mg',L('+7.7 分钟','+7.7 min'),'95% CI 4.0 to 11.3'],
            [ess,week12,'150 mg',L('−3.8 分','−3.8 points'),'95% CI −5.6 to −2.0']
          ],L('说明书表 6、7 的最小二乘均值变化组间差。75 mg、150 mg、安慰剂组分析人数分别为 59、55、58。表中 150 mg 在多重性校正后达到统计显著。','Least-squares mean differences in change from label Tables 6 and 7. The 75 mg, 150 mg and placebo groups included 59, 55 and 58 participants. The tables mark 150 mg as statistically significant after multiplicity adjustment.'),
          [label,trial('NCT02348593')]),
        trialRecord(L('研究 2 · 成人 OSA','Study 2 · Adult OSA'),
          L('12 周双盲随机试验，分别摘录说明书表 6、7 的 MWT 与 ESS。','A 12-week randomized double-blind trial. MWT and ESS values come from label Tables 6 and 7.'),[
            [mwt,week12,'37.5 mg',L('+4.5 分钟','+4.5 min'),'95% CI 1.2 to 7.9'],
            [ess,week12,'37.5 mg',L('−1.9 分','−1.9 points'),'95% CI −3.4 to −0.3'],
            [mwt,week12,'75 mg',L('+8.9 分钟','+8.9 min'),'95% CI 5.6 to 12.4'],
            [ess,week12,'75 mg',L('−1.7 分','−1.7 points'),'95% CI −3.2 to −0.2'],
            [mwt,week12,'150 mg',L('+10.7 分钟','+10.7 min'),'95% CI 8.1 to 13.4'],
            [ess,week12,'150 mg',L('−4.5 分','−4.5 points'),'95% CI −5.7 to −3.2']
          ],L('组间最小二乘均值变化差。所列剂量组分析人数依次为 56、58、116，安慰剂组为 114。','Between-group differences in least-squares mean change. The listed dose groups had 56, 58 and 116 participants, and the placebo group had 114.'),
          [label,trial('NCT02348606')])
      ],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('主要警示','Key warnings'),L('说明书记录剂量相关的血压和心率升高，并列出焦虑、失眠等精神症状。','The label describes dose-related increases in blood pressure and heart rate, and psychiatric symptoms such as anxiety and insomnia.')],
        [L('常见不良反应','Common adverse reactions'),L('包括头痛、恶心、食欲减退、失眠及焦虑。','Include headache, nausea, decreased appetite, insomnia and anxiety.')],
        [L('禁忌与相互作用','Contraindications and interactions'),L('说明书将同时使用单胺氧化酶抑制剂或停用后 14 天内列为禁忌。','The label contraindicates concomitant monoamine oxidase inhibitor use and use within 14 days of discontinuation.')]
      ],[label])
    },
    assays:[
      {molecule:'sol',target:'dat',action:L('结合','Binding'),method:binding,result:'Kᵢ 14.2 μM',system,sources:[label,ema]},
      {molecule:'sol',target:'dat',action:reuptake,method:uptake,result:'IC₅₀ 2.9 μM',system,sources:[label,ema]},
      {molecule:'sol',target:'net',action:L('结合','Binding'),method:binding,result:'Kᵢ 3.7 μM',system,sources:[label,ema]},
      {molecule:'sol',target:'net',action:reuptake,method:uptake,result:'IC₅₀ 4.4 μM',system,sources:[label,ema]}
    ],
    effect:{direction:'wake',qualifier:L('日间过度嗜睡','Excessive daytime sleepiness'),ref:label,
      context:L('说明书记录发作性睡病和 OSA 患者的促觉醒效果。DAT 和 NET 再摄取抑制是可能的作用机制。','The label documents improved wakefulness in narcolepsy and OSA. DAT and NET inhibition is a possible mechanism.')}
  });
}
