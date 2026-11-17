{
  const irLabel=source(L('XYREM · 美国说明书','XYREM · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=926eb076-a4a8-45e4-91ef-411f0aa4f3ca');
  const erLabel=source(L('LUMRYZ · 美国说明书','LUMRYZ · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=10e5e40c-52f3-4c73-8a34-2c29c690a934');
  const irRegistration=fda('Xyrem','021196');
  const erRegistration=fda('Lumryz','214755');
  const restOn=article('Kushida et al. · Sleep 2022 · REST-ON','34358324');
  const cataplexy=L('每周猝倒发作次数','Weekly cataplexy episodes');
  const ess=L('Epworth 嗜睡量表（ESS）','Epworth Sleepiness Scale (ESS)');
  const week4=L('第 4 周','Week 4');
  const week8=L('第 8 周','Week 8');
  const week13=L('第 13 周','Week 13');
  const dose6=L('6 g/夜','6 g/night');
  const dose9=L('9 g/夜','9 g/night');
  registerCompound({
    molecule:record('oxyb','molecules','Sodium Oxybate',L('羟丁酸钠 · Xyrem / Lumryz','Xyrem / Lumryz · Sodium γ-hydroxybutyrate'),USApproved,
      L('用于发作性睡病相关猝倒或日间过度嗜睡。档案按即释和缓释制剂分别记录临床证据。','Used for cataplexy or excessive daytime sleepiness associated with narcolepsy. Clinical evidence is presented separately for immediate- and extended-release formulations.'),
      [[L('化学身份','Chemical identity'),L('γ-羟基丁酸（GHB）的钠盐。','Sodium salt of γ-hydroxybutyric acid (GHB).')],[L('GHB 母体标识','GHB parent identifier'),'PubChem CID 10413']],
      [pubchem(23663870),pubchem(10413),irLabel,erLabel,irRegistration,erRegistration],['gabab','camk2a','gabab-signal']),
    profile:{keyReferences: [{"citation": "Leurs U, Klein AB, McSpadden ED, Griem-Krey N, Solbak SMØ, Houlton J, et al. GHB analogs confer neuroprotection through specific interaction with the CaMKIIα hub domain. Proc Natl Acad Sci U S A. 2021;118(31).", "pmid": "34330837", "url": "https://doi.org/10.1073/pnas.2108079118"}, {"citation": "Lingenhoehl K, Brom R, Heid J, Beck P, Froestl W, Kaupmann K, et al. Gamma-hydroxybutyrate is a weak agonist at recombinant GABA(B) receptors. Neuropharmacology. 1999;38(11):1667-1673.", "pmid": "10587082", "url": "https://doi.org/10.1016/s0028-3908(99)00131-8"}, {"citation": "Kushida CA, Shapiro CM, Roth T, Thorpy MJ, Corser BC, Ajayi AO, et al. Once-nightly sodium oxybate (FT218) demonstrated improvement of symptoms in a phase 3 randomized clinical trial in patients with narcolepsy. Sleep. 2022;45(6).", "pmid": "34358324", "url": "https://doi.org/10.1093/sleep/zsab200"}],

      chemistry:chemistry('oxyb',23663870,null,'502-85-2','C₄H₇NaO₃','126.09','XYGBKMMCQDZQOZ-UHFFFAOYSA-M',
        'C(CC(=O)[O-])CO.[Na+]',
        {"iupac": "sodium 4-hydroxybutanoate", "synonyms": "Sodium oxybate · Oxybate sodium", "kegg": "D05866", pharmgkb:'PA166236501', "links": [{"label": "ChEMBL CHEMBL1200682", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200682/"}, {"label": "KEGG D05866", "url": "https://www.kegg.jp/entry/D05866"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('首次批准','Initial US approval'),L('2002 年，Xyrem。','2002, Xyrem.')],
        [L('缓释制剂首次批准','Initial extended-release approval'),L('2023 年，Lumryz。','2023, Lumryz.')],
        [L('适应证摘要','Indication summary'),L('两种说明书均列 ≥7 岁发作性睡病患者的猝倒或日间过度嗜睡。','Both labels cover cataplexy or excessive daytime sleepiness in patients age ≥7 with narcolepsy.')],
        [L('XYREM · 即释口服溶液','XYREM · Immediate-release oral solution'),
          L('500 mg/mL。成人说明书起始总量 4.5 g/夜，分两次。','500 mg/mL. The labeled adult starting total is 4.5 g/night in two doses.')],
        [L('LUMRYZ · 缓释口服混悬用制剂','LUMRYZ · Extended-release formulation for oral suspension'),
          L('每袋 4.5、6、7.5 或 9 g。成人说明书起始量 4.5 g，每夜一次。','Packets of 4.5, 6, 7.5 or 9 g. The labeled adult starting dose is 4.5 g once nightly.')],
        [L('儿科剂量范围','Pediatric dosing scope'),L('按产品说明书和体重分列。','Specified by product and body weight in the labels.')]
      ],[irLabel,erLabel,irRegistration,erRegistration]),
      structureEvidence:{
        title:L('结构证据状态','Structure evidence status'),
        summary:L('GHB 的直接靶标复合物待核验。7C7Q 是 GABA_B 受体与巴氯芬、BHFF 的结构。7REC 为 5-HDC 结合的工程化 CaMKIIα hub 结构。','Direct target complexes with GHB are pending verification. 7C7Q contains GABA_B with baclofen and BHFF. 7REC contains the engineered CaMKIIα hub with 5-HDC.'),
        sources:[pdb('7C7Q'),pdb('7REC'),oxybateHubStudy]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        [L('Xyrem · GHB 达峰','Xyrem · GHB peak timing'),L('说明书平均 Tₘₐₓ 范围 0.5–1.25 h。','Label reports an average Tₘₐₓ range of 0.5–1.25 h.')],
        [L('Xyrem · GHB 消除半衰期','Xyrem · GHB elimination half-life'),'0.5–1 h'],
        [L('Lumryz · GHB 达峰','Lumryz · GHB peak timing'),L('单次 6 g 后，Tₘₐₓ 为 1.5 h。','Tₘₐₓ was 1.5 h after a single 6 g dose.')]
      ],[irLabel,erLabel]),
      preclinical:[animalRecord(L('体外 · 两种靶标证据','In vitro · Evidence at two targets'),
        L('GHB 对重组 GABA_B 受体的作用采用电生理方法研究；其对纯化 CaMKIIα hub 的热稳定作用采用差示扫描荧光法研究。','GHB was studied using electrophysiology at recombinant GABA_B receptors and differential scanning fluorometry with purified CaMKIIα hub.'),
        L('美国说明书提出 GABA_B 受体作用是可能的治疗机制。CaMKIIα hub 热稳定性的结果属于体外研究，临床相关性待验证。','The US label proposes GABA_B receptor activity as a possible therapeutic mechanism. Thermal stabilization of the CaMKIIα hub is an in vitro finding with clinical relevance to be established.'),
        [irLabel,oxybateGababStudy,oxybateHubStudy])],
      clinical:[
        trialRecord(L('Xyrem · 成人猝倒 · N1','Xyrem · Adult cataplexy · N1'),
          L('即释制剂随机双盲对照研究，摘录说明书表 5 的 6 g 和 9 g 组。','Randomized double-blind trial of immediate-release sodium oxybate. The 6 g and 9 g arms are from label Table 5.'),[
            [cataplexy,week4,dose6,L('−10 对 −4 次/周','−10 vs −4 per week'),'p = 0.0451'],
            [cataplexy,week4,dose9,L('−16 对 −4 次/周','−16 vs −4 per week'),'p = 0.0016']
          ],L('数值为药物组和安慰剂组各自相对基线的中位变化。所列剂量组和安慰剂组的分析人数分别为 31、33、33。','Values are median within-arm changes from baseline in drug and placebo groups. The listed dose groups and placebo included 31, 33 and 33 participants, respectively.'),[irLabel]),
        trialRecord(L('Xyrem · 成人日间嗜睡 · N3','Xyrem · Adult daytime sleepiness · N3'),
          L('即释制剂对照研究，摘录说明书表 6。','Controlled trial of immediate-release sodium oxybate. Values are from label Table 6.'),[
            [ess,week8,dose6,L('−2.0 对 −0.5 分','−2.0 vs −0.5 points'),'p < 0.001'],
            [ess,week8,dose9,L('−5.0 对 −0.5 分','−5.0 vs −0.5 points'),'p < 0.001']
          ],L('数值为各组相对基线的中位变化。所列剂量组和安慰剂组的分析人数分别为 58、47、59。','Values are median within-arm changes from baseline. The listed dose groups and placebo included 58, 47 and 59 participants, respectively.'),[irLabel]),
        trialRecord(L('Lumryz · 每夜一次 · REST-ON','Lumryz · Once nightly · REST-ON'),
          L('13 周随机双盲试验比较缓释制剂与安慰剂。摘录第 13 周的 9 g 剂量结果。','A 13-week randomized double-blind trial compared the extended-release formulation with placebo. Rows show 9 g results at Week 13.'),[
            [L('维持觉醒试验（MWT）','Maintenance of Wakefulness Test (MWT)'),week13,dose9,L('+6.13 分钟','+6.13 min'),'95% CI 3.52 to 8.75'],
            [cataplexy,week13,dose9,L('−6.65 次/周','−6.65 per week'),'95% CI −9.32 to −3.98']
          ],L('数值为相对安慰剂的最小二乘均值变化差。猝倒终点限发作性睡病 1 型受试者。','Values are least-squares mean differences in change versus placebo. Cataplexy was assessed in participants with narcolepsy type 1.'),[erLabel,restOn,trial('NCT02720744')])
      ],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('黑框警告','Boxed warnings'),L('两种说明书均有中枢神经抑制及滥用、误用的警告。中枢抑制可伴呼吸抑制。','Both labels carry warnings for CNS depression and abuse or misuse. CNS depression can include respiratory depression.')],
        [L('禁忌与管控','Contraindications and access controls'),L('与酒精或镇静催眠药合用列为禁忌。两种制剂均通过各自的 REMS 限制分发。','Use with alcohol or sedative hypnotics is contraindicated. Both formulations have restricted distribution through their respective REMS programs.')],
        [L('常见不良反应','Common adverse reactions'),L('说明书报告恶心、头晕等。发生率按制剂和试验人群分别查阅。','The labels report nausea and dizziness among other reactions. Rates are listed separately by formulation and study population.')]
      ],[irLabel,erLabel])
    },
    assays:[
      {molecule:'oxyb',target:'gabab',action:L('弱部分激动 · GHB','Weak partial agonism · GHB'),
        method:L('卵母细胞电生理 · Kir3 电流','Oocyte electrophysiology · Kir3 current'),
        result:L('EC₅₀ 约 5 mM，最大效应为 L-巴氯芬的 69%','EC₅₀ about 5 mM, maximal effect 69% of L-baclofen'),
        system:L('非洲爪蟾卵母细胞共表达重组 GABA_B R1/R2 与 Kir3','Recombinant GABA_B R1/R2 and Kir3 coexpressed in Xenopus oocytes'),sources:[oxybateGababStudy]},
      {molecule:'oxyb',target:'camk2a',action:L('hub 热稳定性变化 · GHB','Hub thermal stabilization · GHB'),
        method:L('差示扫描荧光 · 图 3','Differential scanning fluorometry · Figure 3'),
        result:L('饱和条件下最大 Tₘ 升高 13 °C','Maximum Tₘ increase of 13 °C under saturating conditions'),
        system:L('纯化野生型 CaMKIIα hub 结构域','Purified wild-type CaMKIIα hub domain'),sources:[oxybateHubStudy]}
    ]
  });
}
