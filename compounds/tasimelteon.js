{
  const label=source(L('HETLIOZ / HETLIOZ LQ · 美国说明书','HETLIOZ / HETLIOZ LQ · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ca4a9b63-708e-49e9-8f9b-010625443b90');
  const registration=fda('Hetlioz','205677');
  const suspension=fda('Hetlioz LQ','214517');
  const set=article('Lockley et al. · Lancet 2015','26466871');
  const formulation=L('胶囊 20 mg 或按体重使用混悬液','20 mg capsules or weight-based suspension');
  const worstNights=L('每 4 周中指标最差的 50% 夜晚','Worst 50% of nights in each 4-week period');
  const binding=L('说明书受体结合亲和力','Receptor binding affinity in the label');
  registerCompound({
    molecule:record('tas','molecules','Tasimelteon',L('他司美琼 · Hetlioz','Hetlioz · VEC-162'),USApproved,
      L('MT₁/MT₂ 受体激动剂。档案按制剂记录昼夜节律障碍和 Smith–Magenis 综合征夜间睡眠障碍的获批范围。','An MT₁/MT₂ receptor agonist. The dossier distinguishes formulation-specific approvals for circadian rhythm disorder and nighttime sleep disturbances in Smith–Magenis syndrome.'),
      [[L('作用方向','Effect direction'),L('昼夜节律调节','Circadian rhythm regulation')]],
      [pubchem(10220503),label,registration,suspension],['mt1','mt2','melatonin-signal']),
    profile:{keyReferences: [{"citation": "Lockley SW, Dressman MA, Licamele L, Xiao C, Fisher DM, Flynn-Evans EE, et al. Tasimelteon for non-24-hour sleep-wake disorder in totally blind people (SET and RESET): two multicentre, randomised, double-masked, placebo-controlled phase 3 trials. Lancet. 2015;386(10005):1754-1764.", "pmid": "26466871", "url": "https://doi.org/10.1016/S0140-6736(15)60031-9"}, {"citation": "Rajaratnam SM, Polymeropoulos MH, Fisher DM, Roth T, Scott C, Birznieks G, et al. Melatonin agonist tasimelteon (VEC-162) for transient insomnia after sleep-time shift: two randomised controlled multicentre trials. Lancet. 2009;373(9662):482-491.", "pmid": "19054552", "url": "https://doi.org/10.1016/S0140-6736(08)61812-7"}],

      chemistry:chemistry('tas',10220503,null,'609799-22-6','C₁₅H₁₉NO₂','245.32','PTOIAAWZLUQTIO-GXFFZTMASA-N',
        'CCC(=O)NC[C@@H]1C[C@H]1C2=C3CCOC3=CC=C2',
        {"iupac": "N-[[(1R,2R)-2-(2,3-dihydro-1-benzofuran-4-yl)cyclopropyl]methyl]propanamide", "synonyms": "Tasimelteon · Hetlioz", "kegg": "D09388", pharmgkb:'PA166428241', "links": [{"label": "ChEMBL CHEMBL2103822", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103822/"}, {"label": "KEGG D09388", "url": "https://www.kegg.jp/entry/D09388"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('胶囊首次批准 · 成人 Non-24','Initial capsule approval · Adult Non-24'),'2014-01-31'],
        [L('混悬液首次批准 · 3–15 岁 SMS','Initial suspension approval · SMS ages 3–15'),'2020-12-01'],
        [L('HETLIOZ · 20 mg 胶囊','HETLIOZ · 20 mg capsules'),
          L('成人非 24 小时睡眠–觉醒障碍（Non-24）。另用于 ≥16 岁 Smith–Magenis 综合征（SMS）患者的夜间睡眠障碍。','Adults with non-24-hour sleep–wake disorder (Non-24). Also indicated for nighttime sleep disturbances in Smith–Magenis syndrome (SMS) at age ≥16.')],
        [L('HETLIOZ LQ · 4 mg/mL 口服混悬液','HETLIOZ LQ · 4 mg/mL oral suspension'),
          L('3–15 岁 SMS 患儿的夜间睡眠障碍，说明书 §2.3 按体重分列剂量。','Nighttime sleep disturbances in children ages 3–15 with SMS. Section 2.3 lists weight-based dosing.')]
      ],[label,registration,suspension]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('他司美琼与 MT₁/MT₂ 的直接复合物待核验。靶标页可查看雷美替胺结合的结构参照。','Direct tasimelteon complexes with MT₁ or MT₂ are pending verification. The target profiles provide ramelteon-bound structural references.'),
        sources:[pdb('6ME2'),pdb('7VH0')]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('空腹口服，胶囊约 0.5–3 h，混悬液约 15–30 min。两种制剂的药代未作直接比较。','After fasted oral administration, approximately 0.5–3 h for capsules and 15–30 min for suspension. The formulations were studied separately.')],
        [L('平均消除半衰期','Mean elimination half-life'),'1.3 ± 0.4 h'],
        [L('代谢','Metabolism'),L('CYP1A2 和 CYP3A4 为主要参与酶。','CYP1A2 and CYP3A4 are the main enzymes involved.')]
      ],[label]),
      clinical:[
        trialRecord(L('SET · 全盲成人 Non-24','SET · Non-24 in totally blind adults'),
          L('随机双盲对照试验比较每晚 20 mg 和安慰剂，评估内源性昼夜节律与 24 小时周期同步。','A randomized double-blind trial compared 20 mg nightly with placebo and assessed entrainment of endogenous rhythms to a 24-hour cycle.'),[
            [L('昼夜节律同步比例','Circadian entrainment rate'),month1,'20 mg',
              L('20%（8/40）对 3%（1/38），差 17 个百分点','20% (8/40) vs 3% (1/38), difference 17 percentage points'),
              L('95% CI 3.2–31.6 个百分点，p = 0.0171','95% CI 3.2–31.6 percentage points, p = 0.0171')]
          ],L('按原文第 1 个月主要分析，采用可评价的参与者。','The Month 1 primary analysis used evaluable participants as reported in the trial.'),[set]),
        trialRecord(L('研究 3 · Smith–Magenis 综合征','Study 3 · Smith–Magenis syndrome'),
          L('25 人随机交叉研究。两个治疗期各 4 周，中间洗脱 1 周。采用父母或监护人记录的睡眠日记。','A randomized crossover trial in 25 participants with two 4-week periods and a 1-week washout. Outcomes came from parent or caregiver diaries.'),[
            [L('夜间睡眠质量（1–5 分）','Nighttime sleep quality (1–5 scale)'),worstNights,formulation,
              L('+0.4 分','+0.4 points'),'95% CI 0.1 to 0.7'],
            [L('夜间总睡眠时间','Total nighttime sleep time'),worstNights,formulation,
              L('+0.3 小时','+0.3 h'),'95% CI −0.0 to 0.6']
          ],L('说明书表 4 的受试者内模型估计差。CI 未做多重性校正。校正后的睡眠质量结果达到统计显著，总睡眠时长为数值改善。','Within-participant model-estimated differences from label Table 4. CIs are unadjusted for multiplicity. The adjusted analysis supported a statistically significant sleep quality benefit, with a numerically favorable sleep-time result.'),[label,trial('NCT02231008')])
      ],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('常见不良反应','Common adverse reactions'),L('Non-24 试验中包括头痛、ALT 升高和异常梦境。','Non-24 trials reported headache, elevated ALT and abnormal dreams, among other reactions.')],
        [L('相互作用','Interactions'),L('强 CYP1A2 抑制剂可增加暴露，强 CYP3A4 诱导剂可降低暴露。详见 §7。','Strong CYP1A2 inhibitors can increase exposure, and strong CYP3A4 inducers can decrease it. See §7.')]
      ],[label])
    },
    assays:[
      {molecule:'tas',target:'mt1',action:agonist,method:binding,result:'Kᵢ 0.304 nM',
        system:L('MT₁ · 美国说明书 §12.2','MT₁ · US label §12.2'),sources:[label]},
      {molecule:'tas',target:'mt2',action:agonist,method:binding,result:'Kᵢ 0.07 nM',
        system:L('MT₂ · 美国说明书 §12.2','MT₂ · US label §12.2'),sources:[label]}
    ]
  });
}
