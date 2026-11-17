{
  const label=source(L('LUNESTA · 美国说明书','LUNESTA · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3821f4b7-a3c8-4920-ba80-18aa96532c09');
  const registration=fda('Lunesta','021476');
  const electrophysiology=source('Richter et al. · Front Neurosci 2020, Table 1','https://pmc.ncbi.nlm.nih.gov/articles/PMC7710685/');
  const study=article('Zammit et al. · Curr Med Res Opin 2004','15701215');
  const week4=L('第 4 周','Week 4');
  const benefit=L('短于安慰剂组','Shorter than placebo');
  const qualitative=L('说明书定性摘要','Qualitative label summary');
  registerCompound({
    molecule:record('esz','molecules','Eszopiclone',L('右佐匹克隆 · Lunesta','Lunesta · S-zopiclone'),USApproved,
      L('用于失眠的非苯二氮䓬类药物。人 GABAₐ α1β2γ2 受体有定量功能证据。','A nonbenzodiazepine drug for insomnia with quantitative functional evidence at human GABAₐ α1β2γ2 receptors.'),
      [[L('立体化学','Stereochemistry'),L('佐匹克隆的 S 对映体。','The S enantiomer of zopiclone.')]],
      [pubchem(969472),label,registration,electrophysiology],['gaba','gaba-signal']),
    profile:{keyReferences: [{"citation": "Zammit GK, McNabb LJ, Caron J, Amato DA, Roth T. Efficacy and safety of eszopiclone across 6-weeks of treatment for primary insomnia. Curr Med Res Opin. 2004;20(12):1979-1991.", "pmid": "15701215", "url": "https://doi.org/10.1185/174234304x15174"}, {"citation": "Krystal AD, Walsh JK, Laska E, Caron J, Amato DA, Wessel TC, et al. Sustained efficacy of eszopiclone over 6 months of nightly treatment: results of a randomized, double-blind, placebo-controlled study in adults with chronic insomnia. Sleep. 2003;26(7):793-799.", "pmid": "14655910", "url": "https://doi.org/10.1093/sleep/26.7.793"}],

      chemistry:chemistry('esz',969472,null,'138729-47-2','C₁₇H₁₇ClN₆O₃','388.8','GBBSUAFBMRNDJC-INIZCTEOSA-N',
        'CN1CCN(CC1)C(=O)O[C@H]2C3=NC=CN=C3C(=O)N2C4=NC=C(C=C4)Cl',
        {"iupac": "[(7S)-6-(5-chloro-2-pyridinyl)-5-oxo-7H-pyrrolo[3,4-b]pyrazin-7-yl] 4-methylpiperazine-1-carboxylate", "synonyms": "Eszopiclone · Lunesta", "kegg": "D02624", pharmgkb:'PA162630444', "links": [{"label": "ChEMBL CHEMBL1522", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1522/"}, {"label": "KEGG D02624", "url": "https://www.kegg.jp/entry/D02624"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('首次批准','Initial US approval'),'2004-12-15'],
        [L('适应证摘要','Indication summary'),L('治疗失眠。说明书记录了入睡潜伏期缩短及睡眠维持改善。','Treatment of insomnia. The label describes shorter sleep latency and improved sleep maintenance.')],
        [L('说明书列示规格','Labeled strengths'),L('口服片剂 1、2、3 mg。','Oral tablets, 1, 2 and 3 mg.')],
        [L('说明书剂量摘要','Label dosage summary'),L('§2 列示成人起始剂量 1 mg，成人最大剂量 3 mg；老年和其他特殊人群另有规定。','Section 2 lists a 1 mg starting dose and a 3 mg maximum for adults, with separate limits for older adults and other populations.')]
      ],[label,registration]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('目前收录人 GABAₐ 受体的电生理证据，直接复合物待核验。PDB 4A97 是细菌 ELIC 通道，配体 ZPC 登记为 R-佐匹克隆。','Human GABAₐ receptor evidence in this dossier comes from electrophysiology, with a direct complex pending verification. PDB 4A97 contains a bacterial ELIC channel and the ligand ZPC is registered as R-zopiclone.'),
        sources:[electrophysiology,pdb('4A97'),ccd('ZPC')]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('健康受试者约 1 h。','Approximately 1 h in healthy subjects.')],
        [L('终末半衰期','Terminal half-life'),L('健康受试者约 6 h。','Approximately 6 h in healthy subjects.')],
        [L('代谢','Metabolism'),L('体外研究显示 CYP3A4 和 CYP2E1 参与。','CYP3A4 and CYP2E1 contribute in vitro.')]
      ],[label]),
      clinical:[trialRecord(L('成人慢性失眠 · 6 周试验','Adult chronic insomnia · 6-week trial'),
        L('308 名成人随机接受 2 mg、3 mg 或安慰剂，前 4 周收集 PSG 终点。','A total of 308 adults were randomized to 2 mg, 3 mg or placebo, with PSG endpoints collected over the first 4 weeks.'),[
          [lps,week4,'2 mg',benefit,qualitative],
          [lps,week4,'3 mg',benefit,qualitative],
          [waso,week4,'3 mg',benefit,qualitative]
        ],L('对应说明书 §14.2 的成人研究 1。第 4 周的 PSG 记录对应原研究第 29 夜。','Adult Study 1 in label §14.2. The Week 4 PSG recording corresponds to Night 29 in the trial.'),[label,study])],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('黑框警告','Boxed warning'),L('复杂睡眠行为，例如梦游或睡眠驾驶，可导致严重伤害。','Complex sleep behaviors, including sleepwalking or sleep-driving, can result in serious injury.')],
        [L('次日影响','Next-day effects'),L('说明书 §5.2 记录次日警觉性受损风险。','Section 5.2 describes next-day impairment.')],
        [L('不良反应与相互作用','Adverse reactions and interactions'),L('常见反应包括口中异味、头痛和嗜睡。中枢抑制剂及强 CYP3A4 抑制剂的相互作用见 §7。','Common reactions include unpleasant taste, headache and somnolence. Section 7 covers CNS depressants and strong CYP3A4 inhibitors.')]
      ],[label])
    },
    assays:[{molecule:'esz',target:'gaba',action:L('正变构调节','Positive allosteric modulation'),
      method:L('双电极电压钳 · GABA EC₁₀ 下的电流增强','Two-electrode voltage clamp · Potentiation at GABA EC₁₀'),
      result:'EC₅₀ 301 nM · n = 6',
      system:L('非洲爪蟾卵母细胞表达的人 α1β2γ2 受体','Human α1β2γ2 receptors expressed in Xenopus laevis oocytes'),sources:[electrophysiology]}],
    effect:{direction:'sleep',ref:label}
  });
}
