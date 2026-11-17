{
  const label=source(L('WAKIX · 美国说明书（2026-02）','WAKIX · US prescribing information (2026-02)'),
    'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8daa5562-824e-476c-9652-26ceef3d4b0e');
  const registration=fda('Wakix','211150');
  const pediatricCataplexy=source(L('FDA · 儿童猝倒适应证增补批准','FDA · Pediatric cataplexy supplement approval'),
    'https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2026/211150Orig1s006ltr.pdf');
  const inVivo=article('Ligneau et al. · JPET 2007','17005916');
  const ess=L('Epworth 嗜睡量表（ESS）','Epworth Sleepiness Scale (ESS)');
  const week8=L('第 8 周','Week 8');
  const inverse=L('反向激动','Inverse agonist');
  const h3System=L('重组人 H₃ 受体','Recombinant human H₃ receptor');
  registerCompound({
    molecule:record('pit','molecules','Pitolisant',L('匹托利生 · Wakix','Wakix · BF2.649'),USApproved,
      L('组胺 H₃ 受体拮抗剂及反向激动剂。收录发作性睡病的日间过度嗜睡及猝倒终点。','A histamine H₃ receptor antagonist and inverse agonist. The dossier covers excessive daytime sleepiness and cataplexy endpoints in narcolepsy.'),
      [[L('化学身份','Chemical identity'),L('游离碱，WAKIX 片剂为盐酸盐。','Free base. WAKIX tablets contain the hydrochloride salt.')]],
      [pubchem(9948102),label,registration,inVivo],['hrh3','histamine-signal']),
    profile:{keyReferences: [{"citation": "Ligneau X, Perrin D, Landais L, Camelin JC, Calmels TP, Berrebi-Bertrand I, et al. BF2.649 [1-{3-[3-(4-Chlorophenyl)propoxy]propyl}piperidine, hydrochloride], a nonimidazole inverse agonist/antagonist at the human histamine H3 receptor: Preclinical pharmacology. J Pharmacol Exp Ther. 2007;320(1):365-375.", "pmid": "17005916", "url": "https://doi.org/10.1124/jpet.106.111039"}, {"citation": "Dauvilliers Y, Bassetti C, Lammers GJ, Arnulf I, Mayer G, Rodenbeck A, et al. Pitolisant versus placebo or modafinil in patients with narcolepsy: a double-blind, randomised trial. Lancet Neurol. 2013;12(11):1068-1075.", "pmid": "24107292", "url": "https://doi.org/10.1016/S1474-4422(13)70225-4"}],

      chemistry:chemistry('pit',9948102,null,'362665-56-3','C₁₇H₂₆ClNO','295.8','NNACHAUCXXVJSP-UHFFFAOYSA-N',
        'C1CCN(CC1)CCCOCCCC2=CC=C(C=C2)Cl',
        {"iupac": "1-[3-[3-(4-chlorophenyl)propoxy]propyl]piperidine", "synonyms": "Pitolisant · TIPROLISANT", "kegg": "D10749", pharmgkb:'PA166185163', "links": [{"label": "ChEMBL CHEMBL462605", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL462605/"}, {"label": "KEGG D10749", "url": "https://www.kegg.jp/entry/D10749"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('首次批准','Initial US approval'),L('2019-08-14，成人发作性睡病的日间过度嗜睡。','2019-08-14, excessive daytime sleepiness in adults with narcolepsy.')],
        [L('2026-02 说明书适应证','Indication in the 2026-02 label'),
          L('≥6 岁发作性睡病患者的日间过度嗜睡或猝倒。','Excessive daytime sleepiness or cataplexy in patients age ≥6 with narcolepsy.')],
        [L('说明书列示规格','Labeled strengths'),
          L('口服盐酸盐片，按匹托利生计 4.45、17.8 mg。','Oral hydrochloride tablets, 4.45 or 17.8 mg expressed as pitolisant.')],
        [L('说明书剂量摘要','Label dosage summary'),
          L('§2.2 列示成人起始剂量 8.9 mg/日、成人推荐范围 17.8–35.6 mg/日。儿科及特殊人群剂量另列。','Section 2.2 lists an 8.9 mg/day adult starting dose and 17.8–35.6 mg/day recommended adult range. Pediatric and special-population schedules are listed separately.')]
      ],[label,registration,pediatricCataplexy]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('匹托利生–人 H₃ 受体直接复合物待核验。PDB 7F61 是同一受体与拮抗剂 PF-03654746 的晶体结构，可作为靶标参照。','A direct human H₃ receptor complex with pitolisant is pending verification. PDB 7F61, a crystal structure with antagonist PF-03654746, provides a target reference.'),
        sources:[pdb('7F61')]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        [L('半衰期','Half-life'),L('单次 35.6 mg 后中位数约 20 h（7.5–24.2 h）。','Median approximately 20 h after a single 35.6 mg dose (7.5–24.2 h).')],
        [L('代谢','Metabolism'),L('主要经 CYP2D6，CYP3A4 也参与。','Mainly CYP2D6, with contribution from CYP3A4.')]
      ],[label]),
      preclinical:[
        animalRecord(L('小鼠','Mouse'),L('口服 BF2.649，测脑内 tele-甲基组胺。','Oral BF2.649 followed by measurement of brain tele-methylhistamine.'),
          L('该组胺能神经元活动指标升高，ED₅₀ 为 1.6 mg/kg。','This marker of histaminergic neuronal activity increased, with an ED₅₀ of 1.6 mg/kg.'),[inVivo]),
        animalRecord(L('猫','Cat'),L('BF2.649 给药后的睡眠–觉醒与脑电记录。','Sleep–wake and EEG recordings after BF2.649 administration.'),
          L('研究报告觉醒增加，并伴随快速皮层脑电活动增强。','The study reported more wakefulness and increased fast cortical EEG activity.'),[inVivo])
      ],
      clinical:[
        trialRecord(L('成人发作性睡病 · 嗜睡研究 1 与 2','Adult narcolepsy · Sleepiness Studies 1 and 2'),
          L('两项多中心随机双盲研究。分别列示第 8 周 ESS 的最小二乘均值组间差。','Two multicenter randomized double-blind trials. Rows show the Week 8 least-squares mean differences in ESS.'),[
            [ess,week8,L('研究 1 · 最大 35.6 mg','Study 1 · Max 35.6 mg'),L('−3.1 分','−3.1 points'),'95% CI −5.73 to −0.46'],
            [ess,week8,L('研究 2 · 最大 17.8 mg','Study 2 · Max 17.8 mg'),L('−2.2 分','−2.2 points'),'95% CI −4.17 to −0.22']
          ],L('摘自说明书表 3。研究 1 药物/安慰剂分析人数为 31/30，研究 2 为 66/32。','From label Table 3. The analyzed drug/placebo groups were 31/30 in Study 1 and 66/32 in Study 2.'),[label,trial('NCT01067222'),trial('NCT01638403')]),
        trialRecord(L('成人发作性睡病 · 猝倒研究 3','Adult narcolepsy · Cataplexy Study 3'),
          L('摘录成人随机对照研究中稳定给药期间的每周猝倒发作率。','Weekly cataplexy rate during stable dosing in a randomized controlled adult trial.'),[
            [L('每周猝倒发作率','Weekly cataplexy rate'),L('4 周稳定给药期','4-week stable dosing period'),
              L('最大 35.6 mg','Max 35.6 mg'),L('率比 0.51','Rate ratio 0.51'),'95% CI 0.44 to 0.60']
          ],L('摘自说明书表 4。药物组 54 人，安慰剂组 51 人。','From label Table 4. The drug and placebo arms included 54 and 51 participants, respectively.'),[label])
      ],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('QT 风险','QT risk'),L('说明书 §5.1 记录 QT 间期延长风险。','Section 5.1 describes the risk of QT prolongation.')],
        [L('常见不良反应','Common adverse reactions'),L('成人安慰剂对照研究中包括失眠（6%）、恶心（6%）和焦虑（5%）。','In adult placebo-controlled trials, common reactions included insomnia (6%), nausea (6%) and anxiety (5%).')],
        [L('相互作用','Interactions'),L('强 CYP2D6 抑制剂增加暴露，强 CYP3A4 诱导剂降低暴露。详见 §7。','Strong CYP2D6 inhibitors increase exposure, and strong CYP3A4 inducers decrease it. See §7.')]
      ],[label])
    },
    assays:[
      {molecule:'pit',target:'hrh3',action:L('拮抗 / 反向激动','Antagonist / inverse agonist'),
        method:L('受体结合亲和力','Receptor binding affinity'),result:'Kᵢ 1 nM',
        system:L('H₃ 受体 · 美国说明书 §12.2','H₃ receptor · US label §12.2'),sources:[label]},
      {molecule:'pit',target:'hrh3',action:inverse,method:L('基础 [³⁵S]GTPγS 结合功能实验','Functional readout of basal [³⁵S]GTPγS binding'),
        result:'EC₅₀ 1.5 nM',system:h3System,sources:[inVivo]}
    ],
    effect:{direction:'wake',qualifier:L('日间过度嗜睡','Excessive daytime sleepiness'),ref:label,
      context:L('说明书记录发作性睡病的嗜睡改善，并将 H₃ 受体拮抗或反向激动列为可能的作用机制。','The label documents improvement in narcolepsy-related sleepiness and identifies H₃ antagonism or inverse agonism as a possible mechanism.')}
  });
}
