{
  const label=source(L('扎来普隆 · 美国说明书','Zaleplon · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1277ef5-6072-43ff-a6ce-0a7cea58b7cb');
  const registration=fda('Sonata','020859');
  const electrophysiology=source('Richter et al. · Front Neurosci 2020, Table 1','https://pmc.ncbi.nlm.nih.gov/articles/PMC7710685/');
  const study=article('Walsh et al. · Sleep Med 2000','10733619');
  registerCompound({
    molecule:record('zale','molecules','Zaleplon',L('扎来普隆 · Sonata','Sonata'),USApproved,
      L('用于失眠短期治疗的 Z 类药物。收录 GABAₐ 受体亚型功能实验和睡眠起始终点。','A Z-drug for short-term insomnia treatment, with GABAₐ subtype functional evidence and sleep-onset outcomes.'),
      [],[pubchem(5719),label,registration,electrophysiology],['gaba','gaba-signal']),
    profile:{keyReferences: [{"citation": "Walsh JK, Vogel GW, Scharf M, Erman M, William Erwin C, Schweitzer PK, et al. A five week, polysomnographic assessment of zaleplon 10 mg for the treatment of primary insomnia. Sleep Med. 2000;1(1):41-49.", "pmid": "10733619", "url": "https://doi.org/10.1016/s1389-9457(99)00006-4"}, {"citation": "Hedner J, Yaeche R, Emilien G, Farr I, Salinas E. Zaleplon shortens subjective sleep latency and improves subjective sleep quality in elderly patients with insomnia. The Zaleplon Clinical Investigator Study Group. Int J Geriatr Psychiatry. 2000;15(8):704-712.", "pmid": "10960882", "url": "https://doi.org/10.1002/1099-1166(200008)15:8<704::aid-gps183>3.0.co;2-s"}],

      chemistry:chemistry('zale',5719,null,'151319-34-5','C₁₇H₁₅N₅O','305.33','HUNXMJYCHXQEGX-UHFFFAOYSA-N',
        'CCN(C1=CC=CC(=C1)C2=CC=NC3=C(C=NN23)C#N)C(=O)C',
        {"iupac": "N-[3-(3-cyanopyrazolo[1,5-a]pyrimidin-7-yl)phenyl]-N-ethylacetamide", "synonyms": "zaleplon · Sonata", "kegg": "D00530", pharmgkb:'PA451952', "links": [{"label": "ChEMBL CHEMBL1521", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1521/"}, {"label": "KEGG D00530", "url": "https://www.kegg.jp/entry/D00530"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('首次批准','Initial US approval'),'1999-08-13'],
        [L('适应证摘要','Indication summary'),L('失眠的短期治疗。说明书支持缩短入睡时间。','Short-term treatment of insomnia. The label documents a reduction in time to sleep onset.')],
        [L('说明书列示规格','Labeled strengths'),L('口服胶囊 5、10 mg。','Oral capsules, 5 and 10 mg.')],
        [L('说明书剂量摘要','Label dosage summary'),L('多数非老年成人的推荐剂量为 10 mg，老年人推荐剂量为 5 mg。','The label lists 10 mg for most non-elderly adults and 5 mg for older adults.')]
      ],[label,registration]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('扎来普隆与人 GABAₐ 受体的直接复合物待核验。8DD2 是人 α1β2γ2 受体与 GABA、唑吡坦结合的参照结构。','A direct human GABAₐ receptor complex with zaleplon is pending verification. The human α1β2γ2 complex with GABA and zolpidem (8DD2) provides a reference.'),
        sources:[pdb('8DD2'),electrophysiology]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('口服约 1 h。','Approximately 1 h after oral administration.')],
        [L('消除半衰期','Elimination half-life'),L('约 1 h。','Approximately 1 h.')],
        [L('代谢','Metabolism'),L('以醛氧化酶为主，CYP3A4 次之。','Mainly aldehyde oxidase, with a smaller contribution from CYP3A4.')]
      ],[label]),
      preclinical:[animalRecord(L('体外 · 重组人 GABAₐ 受体','In vitro · Recombinant human GABAₐ receptors'),
        L('在非洲爪蟾卵母细胞中表达串联五聚体，采用双电极电压钳比较 γ 亚型。','Concatenated pentamers expressed in Xenopus laevis oocytes were compared using two-electrode voltage clamp.'),
        L('原文表 1 在 GABA EC₁₀ 条件下报告 α1β2γ2 的调节 EC₅₀ 为 203 nM（n = 6），α1β2γ3 为 56 nM（n = 8）。','Table 1 reports modulation EC₅₀ values at GABA EC₁₀ of 203 nM for α1β2γ2 (n = 6) and 56 nM for α1β2γ3 (n = 8).'),
        [electrophysiology])],
      clinical:[trialRecord(L('成人原发性失眠 · 35 夜 PSG 研究','Adult primary insomnia · 35-night PSG study'),
        L('双盲、平行组、安慰剂对照研究纳入 113 名 18–65 岁受试者，比较 10 mg 与安慰剂。','A double-blind, parallel-group, placebo-controlled study in 113 participants aged 18–65 compared 10 mg with placebo.'),[
          [lps,earlyNights,'10 mg',L('较安慰剂缩短','Shorter than placebo'),L('说明书报告达到统计显著','Statistically significant in the label')]
        ],L('第 29、30 夜为说明书列出的主要评价时点。原研究报告总睡眠时间的结果在各时点不一致。','Nights 29 and 30 are the primary assessment in the label. The trial reported inconsistent effects on total sleep time across assessments.'),[label,study])],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('黑框警告','Boxed warning'),L('复杂睡眠行为包括梦游、睡眠驾驶，可导致严重伤害。','Complex sleep behaviors include sleepwalking and sleep-driving and can cause serious injury.')],
        [L('临床试验不良反应','Clinical trial adverse events'),L('说明书表 1 记录头晕、嗜睡和遗忘等。','Label Table 1 lists dizziness, somnolence and amnesia among other events.')],
        [L('相互作用','Interactions'),L('说明书记载西咪替丁可升高暴露，其他中枢抑制剂可增加中枢抑制作用。','The label reports increased exposure with cimetidine and additive CNS depression with other CNS depressants.')]
      ],[label])
    },
    assays:[{molecule:'zale',target:'gaba',action:L('正变构调节','Positive allosteric modulation'),
      method:L('双电极电压钳 · GABA EC₁₀ 下的电流增强','Two-electrode voltage clamp · Potentiation at GABA EC₁₀'),
      result:'EC₅₀ 203 nM · n = 6',
      system:L('非洲爪蟾卵母细胞表达的人 α1β2γ2 串联五聚体','Concatenated human α1β2γ2 pentamer expressed in Xenopus laevis oocytes'),sources:[electrophysiology]}],
    effect:{direction:'sleep',qualifier:L('入睡','Sleep onset'),ref:label}
  });
}
