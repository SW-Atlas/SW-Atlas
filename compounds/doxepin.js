{
  const label=source(L('SILENOR · 美国说明书','SILENOR · US prescribing information'),
    'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1bec1223-5239-4eb6-a9e8-62444106d2c0');
  const registration=fda('Silenor','022036');
  const crystal=article('Shimamura et al. · Nature 2011','21697825');
  const study=article('Krystal et al. · Sleep 2011, Table 2','21966075');
  const night1=L('第 1 夜','Night 1');
  const night15=L('第 15 夜','Night 15');
  const night29=L('第 29 夜','Night 29');
  registerCompound({
    molecule:record('dox','molecules','Doxepin',L('多塞平 · Silenor','Silenor · Low-dose doxepin'),USApproved,
      L('低剂量多塞平获批用于以睡眠维持困难为特征的失眠。人 H₁ 受体结构提供 E、Z 两种异构体的结合坐标。','Low-dose doxepin is approved for insomnia involving difficulty maintaining sleep. A human H₁ receptor structure provides binding coordinates for the E and Z isomers.'),
      [[L('化学身份','Chemical identity'),L('游离母体，双键立体构型未指定。','Free parent compound with unspecified double-bond geometry.')]],
      [label,registration,pubchem(3158),pdb('3RZE'),ccd('5EH'),ccd('D7V'),crystal],['hrh1','histamine-signal','3RZE']),
    profile:{keyReferences: [{"citation": "Shimamura T, Shiroishi M, Weyand S, Tsujimoto H, Winter G, Katritch V, et al. Structure of the human histamine H1 receptor complex with doxepin. Nature. 2011;475(7354):65-70.", "pmid": "21697825", "url": "https://doi.org/10.1038/nature10236"}, {"citation": "Krystal AD, Lankford A, Durrence HH, Ludington E, Jochelson P, Rogowski R, et al. Efficacy and safety of doxepin 3 and 6 mg in a 35-day sleep laboratory trial in adults with chronic primary insomnia. Sleep. 2011;34(10):1433-1442.", "pmid": "21966075", "url": "https://doi.org/10.5665/SLEEP.1294"}],

      chemistry:chemistry('dox',3158,null,'1668-19-5','C₁₉H₂₁NO','279.4','ODQWQRRAPPTVAG-UHFFFAOYSA-N',
        'CN(C)CC/C=C1/c2ccccc2COc2ccccc21',
        {"iupac": "3-(6H-benzo[c][1]benzoxepin-11-ylidene)-N,N-dimethylpropan-1-amine", "synonyms": "doxepin · Doxepina", "kegg": "D07875", pharmgkb:'PA449409', "links": [{"label": "ChEMBL CHEMBL1628227", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1628227/"}, {"label": "KEGG D07875", "url": "https://www.kegg.jp/entry/D07875"}]}),
      regulatory:section(L('美国监管与制剂','US regulatory status and formulation'),[
        [L('多塞平首次批准','Initial US approval of doxepin'),'1969'],
        [L('Silenor 失眠适应证获批','Silenor insomnia approval'),'2010-03-17'],
        [L('适应证摘要','Indication summary'),L('以睡眠维持困难为特征的失眠。','Insomnia involving difficulty maintaining sleep.')],
        [L('说明书列示规格','Labeled strengths'),L('盐酸多塞平片剂，按多塞平计 3、6 mg。','Doxepin hydrochloride tablets, 3 or 6 mg expressed as doxepin.')],
        [L('说明书剂量摘要','Label dosage summary'),L('§2 列示成人推荐剂量 6 mg/日，≥65 岁起始剂量 3 mg/日。','Section 2 lists 6 mg/day as the adult recommended dose and 3 mg/day as the starting dose at age ≥65.')]
      ],[label,registration]),
      structureEvidence:{
        title:L('3RZE 的两个异构体模型','Two isomer models in 3RZE'),
        summary:L('同一套 3.10 Å 衍射数据中，E 异构体 5EH（A1200，alt A）与 Z 异构体 D7V（A1201，alt B）以替代构象建模，各自的坐标占有率为 0.50。接触图分别计算两套配体与 H₁ 受体的最短重原子距离，受体选区排除 T4 溶菌酶融合片段。','The E isomer 5EH (A1200, alt A) and Z isomer D7V (A1201, alt B) are modeled as alternatives in one 3.10 Å diffraction dataset, each with a coordinate occupancy of 0.50. Contacts are computed separately against H₁ receptor atoms after excluding the T4 lysozyme fusion segment.'),
        sources:[pdb('3RZE'),crystal,ccd('5EH'),ccd('D7V')]
      },
      pk:section(L('人体药代','Human pharmacokinetics'),[
        ['Tₘₐₓ',L('健康受试者空腹单次 6 mg，中位数 3.5 h。','Median 3.5 h after a single 6 mg dose in fasted healthy subjects.')],
        [L('表观终末半衰期','Apparent terminal half-life'),L('多塞平 15.3 h，去甲多塞平 31 h。','15.3 h for doxepin and 31 h for nordoxepin.')],
        [L('代谢','Metabolism'),L('体外研究显示 CYP2C19、CYP2D6 为主要参与酶。','CYP2C19 and CYP2D6 were the main enzymes in vitro.')]
      ],[label]),
      clinical:[trialRecord(L('成人慢性原发性失眠 · 35 天研究','Adult chronic primary insomnia · 35-day study'),
        L('随机双盲安慰剂对照研究纳入 221 名成人。列示三次 PSG 的客观 WASO。','A randomized double-blind placebo-controlled trial enrolled 221 adults. The table shows objective WASO at three PSG visits.'),[
          [waso,night1,'3 mg',L('−25.4 分钟','−25.4 min'),'p < 0.0001'],
          [waso,night1,'6 mg',L('−30.5 分钟','−30.5 min'),'p < 0.0001'],
          [waso,night15,'3 mg',L('−15.8 分钟','−15.8 min'),'p = 0.0025'],
          [waso,night15,'6 mg',L('−18.8 分钟','−18.8 min'),'p = 0.0009'],
          [waso,night29,'3 mg',L('−13.3 分钟','−13.3 min'),'p = 0.0248'],
          [waso,night29,'6 mg',L('−19.8 分钟','−19.8 min'),'p = 0.0009']
        ],L('差值由原文表 2 的同夜组均值相减得到。p 值取自论文报告的组间检验。','Differences are calculated from same-night arm means in Table 2. P values are from the published between-group tests.'),[study,label])],
      safety:section(L('安全性与相互作用','Safety and interactions'),[
        [L('嗜睡或镇静','Somnolence or sedation'),L('说明书表 1 中，安慰剂、3 mg 与 6 mg 组分别为 4%、6% 和 9%。','Label Table 1 reports 4%, 6% and 9% for placebo, 3 mg and 6 mg, respectively.')],
        [L('相互作用','Interactions'),L('西咪替丁可增加多塞平暴露。与中枢抑制剂合用可能增加镇静。详见 §7。','Cimetidine increases doxepin exposure. CNS depressants may increase sedation. See §7.')]
      ],[label])
    },
    complexes:[{
      ...structure('3RZE','H₁R · Doxepin',xray,'3.10',antagonistBound,'hrh1','dox','5EH / D7V','A',
        L('人 H₁ 受体–T4 溶菌酶工程融合构建。E 与 Z 异构体在同一套坐标中作为替代构象建模。','Engineered human H₁ receptor–T4 lysozyme fusion. The E and Z isomers are modeled as alternatives in the same coordinate set.')),
      ligands:{'5EH':{asymId:'B',label:L('E 异构体','E isomer')},D7V:{asymId:'C',label:L('Z 异构体','Z isomer')}}
    }],
    assays:[{molecule:'dox',target:'hrh1',action:antagonist,
      method:L('受体结合亲和力','Receptor binding affinity'),result:'Kᵢ < 1 nM',
      system:L('美国说明书 §12.2 的 H₁ 受体数据','H₁ receptor data in US label §12.2'),sources:[label]}],
    effect:{direction:'sleep',qualifier:L('睡眠维持','Sleep maintenance'),ref:label,
      context:L('说明书报告了睡眠维持获益，并将 H₁ 受体拮抗列为可能的作用机制。','The label documents a sleep-maintenance benefit and identifies H₁ receptor antagonism as a possible mechanism.')}
  });
}
