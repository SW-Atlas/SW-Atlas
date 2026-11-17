const chemistry = (id, cid, code, cas, formula, mass, inchikey, smiles, extra) => ({
  depiction:'assets/'+id+'.svg', depictionSource:code ? ccd(code) : pubchem(cid),
  fields:[
    ['PubChem CID',String(cid)], ['CAS',cas],
    ...(extra?.iupac ? [[L('IUPAC 名称','IUPAC name'),extra.iupac]] : []),
    ...(extra?.synonyms ? [[L('同义词','Synonyms'),extra.synonyms]] : []),
    [L('分子式','Molecular formula'),formula],
    [L('摩尔质量','Molar mass'),mass+' g/mol'],
    ...(extra?.kegg ? [['KEGG ID',extra.kegg]] : []),
    ...(extra?.pharmgkb ? [['PharmGKB ID',extra.pharmgkb]] : []),
    ...(code ? [['PDB CCD',code]] : []), ['InChIKey',inchikey], ['SMILES',smiles]
  ],
  links:[...(extra?.links||[])],
  sources:[pubchem(cid),...(code ? [ccd(code)] : [])]
});
const section = (title, fields, refs) => ({ title, fields, sources:refs });
const usMarket = (year, indication, form, ref, reg) => section(L('美国监管与制剂','US regulatory status and formulation'),[
  [L('首次批准','Initial US approval'),String(year)],
  [L('适应证摘要','Indication summary'),indication],
  [L('说明书列示规格','Labeled strengths'),form]
],[ref,reg]);
const trialRecord = (title, summary, rows, note, sources) => ({title,summary,rows,note,sources});
const animalRecord = (species, design, result, sources) => ({species,design,result,sources});
const onsetMaintenance = L('以入睡困难、睡眠维持困难或两者兼有为特征的失眠。','Insomnia involving difficulty initiating sleep, maintaining sleep, or both.');
const elderlyDoses = L('15 mg（≥65 岁）或 20 mg（18–64 岁）','15 mg (≥65 years) or 20 mg (18–64 years)');
const month1 = L('第 1 个月','Month 1');
const month3 = L('第 3 个月','Month 3');
const month6 = L('第 6 个月','Month 6');
const sleepOnset = L('PSG · 入睡潜伏期','PSG · Sleep onset latency');
const lps = L('PSG · 持续入睡潜伏期（LPS）','PSG · Latency to persistent sleep (LPS)');
const waso = L('PSG · 入睡后觉醒时间（WASO）','PSG · Wake after sleep onset (WASO)');
const earlyNights = L('第 29/30 夜','Nights 29/30');
const suvPsgNote = L('数值为基于估计均值的组间差（药物组减安慰剂组）。保留各研究及各时点，包括第 3 个月研究 2 的入睡潜伏期差值 0 分钟。','Values are differences in estimated means (drug minus placebo). Results are listed by study and time point, including the 0-minute sleep latency difference at Month 3 in Study 2.');
const insomniaDesign = L('3 个月随机、双盲、平行组试验。此处显示对应年龄层的 15/20 mg 组与安慰剂组的 PSG 结果。','A 3-month randomized, double-blind, parallel-group trial. These PSG data compare the age-stratified 15/20 mg group with placebo.');
const suvPreclinical = article('Winrow et al. · J Neurogenet 2011','21473737');
const lemPreclinical = article('Beuckmann et al. · Sleep 2019','30923834');

const moleculeProfiles = {
  suv: {
    keyReferences: [{"citation": "Winrow CJ, Gotter AL, Cox CD, Doran SM, Tannenbaum PL, Breslin MJ, et al. Promotion of sleep by suvorexant-a novel dual orexin receptor antagonist. J Neurogenet. 2011;25(1-2):52-61.", "pmid": "21473737", "url": "https://doi.org/10.3109/01677063.2011.566953"}, {"citation": "Herring WJ, Connor KM, Ivgy-May N, Snyder E, Liu K, Snavely DB, et al. Suvorexant in Patients With Insomnia: Results From Two 3-Month Randomized Controlled Clinical Trials. Biol Psychiatry. 2016;79(2):136-148.", "pmid": "25526970", "url": "https://doi.org/10.1016/j.biopsych.2014.10.003"}],
    chemistry:chemistry('suv',24965990,'SUV','1030377-33-3','C₂₃H₂₃ClN₆O₂','450.9','JYTNQNCOQXFQPK-MRXNPFEDSA-N',
      'C[C@@H]1CCN(CCN1C(=O)C2=C(C=CC(=C2)C)N3N=CC=N3)C4=NC5=C(O4)C=CC(=C5)Cl',
      {iupac:'[(7R)-4-(5-chloro-1,3-benzoxazol-2-yl)-7-methyl-1,4-diazepan-1-yl]-[5-methyl-2-(triazol-2-yl)phenyl]methanone',
       synonyms:'MK-4305 · Belsomra', kegg:'D10082',
       links:[
         {label:'ChEMBL CHEMBL1083659',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1083659/'},
         {label:'DrugBank DB09034',url:'https://go.drugbank.com/drugs/DB09034'},
         {label:'KEGG D10082',url:'https://www.kegg.jp/entry/D10082'}
       ]}),
    regulatory:usMarket(2014,onsetMaintenance,L('口服片剂 · 5、10、15、20 mg','Oral tablets · 5, 10, 15 and 20 mg'),suvLabel,fda('Belsomra','204569')),
    pk:section(L('人体药代','Human pharmacokinetics'),[
      ['Tₘₐₓ',L('空腹中位数 2 h（范围 0.5–6 h）','Median 2 h fasted (range 0.5–6 h)')],
      ['t½',L('平均约 12 h（95% CI 12–13 h）','Mean approximately 12 h (95% CI 12–13 h)')],
      [L('绝对生物利用度','Absolute bioavailability'),L('10 mg 口服平均 82%','Mean 82% at 10 mg orally')],
      [L('代谢','Metabolism'),L('以 CYP3A 为主，CYP2C19 少量参与。','Mainly CYP3A, with a minor contribution from CYP2C19.')]
    ],[suvLabel]),
    preclinical:[
      animalRecord(L('大鼠、犬、恒河猴','Rat, dog and rhesus macaque'),
        L('口服给药。大鼠 10、30、100 mg/kg，犬 1、3 mg/kg，恒河猴 10 mg/kg。','Oral dosing. Rats received 10, 30 or 100 mg/kg, dogs 1 or 3 mg/kg, and rhesus macaques 10 mg/kg.'),
        L('原研究报告自发活动减少及睡眠增加。剂量与观察结果限于该动物实验。','The study reported reduced locomotor activity and increased sleep. Doses and observations apply to these animal experiments.'),[suvPreclinical])
    ],
    clinical:[
      trialRecord(L('研究 1 · PSG','Study 1 · PSG'),insomniaDesign,[
        [sleepOnset,month1,elderlyDoses,L('−10 分钟','−10 min'),'p < 0.001'],
        [sleepOnset,month3,elderlyDoses,L('−8 分钟','−8 min'),'p < 0.01'],
        [waso,month1,elderlyDoses,L('−26 分钟','−26 min'),'p < 0.001'],
        [waso,month3,elderlyDoses,L('−17 分钟','−17 min'),'p < 0.001']
      ],L('说明书表 3/5 的分析人数为药物组 193、安慰剂组 290。数值为基于估计均值的组间差（药物组减安慰剂组）。','Tables 3 and 5 list 193 participants in the drug group and 290 in the placebo group. Values are differences in estimated means (drug minus placebo).'),[suvLabel,trial('NCT01097616')]),
      trialRecord(L('研究 2 · PSG','Study 2 · PSG'),insomniaDesign,[
        [sleepOnset,month1,elderlyDoses,L('−8 分钟','−8 min'),'p < 0.05'],
        [sleepOnset,month3,elderlyDoses,L('0 分钟','0 min'),L('表中无显著性标记','No significance marker in table')],
        [waso,month1,elderlyDoses,L('−24 分钟','−24 min'),'p < 0.001'],
        [waso,month3,elderlyDoses,L('−31 分钟','−31 min'),'p < 0.001']
      ],L('说明书表 3/5 的分析人数为药物组 145、安慰剂组 286。','Tables 3 and 5 list 145 participants in the drug group and 286 in the placebo group.'),[suvLabel,trial('NCT01097629')])
    ],
    clinicalNote:suvPsgNote,
    safety:section(L('安全性与相互作用','Safety and interactions'),[
      [L('安全性','Safety'),L('美国说明书列出嗜睡、次日警觉性受损和复杂睡眠行为等。','The US label describes somnolence, next-day impairment and complex sleep behaviors.')],
      [L('相互作用','Interactions'),L('CYP3A 抑制剂可增加暴露，强 CYP3A 诱导剂可降低暴露。说明书第 7 节记录具体条件。','CYP3A inhibitors can increase exposure, and strong CYP3A inducers can decrease it. Section 7 of the label gives the specific conditions.')]
    ],[suvLabel])
  },
  lem: {
    keyReferences: [{"citation": "Beuckmann CT, Ueno T, Nakagawa M, Suzuki M, Akasofu S. Preclinical in vivo characterization of lemborexant (E2006), a novel dual orexin receptor antagonist for sleep/wake regulation. Sleep. 2019;42(6).", "pmid": "30923834", "url": "https://doi.org/10.1093/sleep/zsz076"}, {"citation": "Rosenberg R, Murphy P, Zammit G, Mayleben D, Kumar D, Dhadda S, et al. Comparison of Lemborexant With Placebo and Zolpidem Tartrate Extended Release for the Treatment of Older Adults With Insomnia Disorder: A Phase 3 Randomized Clinical Trial. JAMA Netw Open. 2019;2(12):e1918254.", "pmid": "31880796", "url": "https://doi.org/10.1001/jamanetworkopen.2019.18254"}],
    chemistry:chemistry('lem',56944144,'NRK','1369764-02-2','C₂₂H₂₀F₂N₄O₂','410.4','MUGXRYIUWFITCP-PGRDOPGGSA-N',
      'CC1=NC(=NC=C1OC[C@]2(C[C@H]2C(=O)NC3=NC=C(C=C3)F)C4=CC(=CC=C4)F)C',
      {iupac:'cis-(1R,2S)-2-[(2,4-dimethylpyrimidin-5-yl)oxymethyl]-2-(3-fluorophenyl)-N-(5-fluoro-2-pyridinyl)cyclopropane-1-carboxamide',
       synonyms:'E-2006 · Dayvigo', kegg:'D11022', pharmgkb:'PA166420121', pharmgkb:'PA166420121',
       links:[
         {label:'ChEMBL CHEMBL3545367',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545367/'},
         {label:'DrugBank DB11951',url:'https://go.drugbank.com/drugs/DB11951'},
         {label:'KEGG D11022',url:'https://www.kegg.jp/entry/D11022'}
       ]}),
    regulatory:usMarket(2019,L('成人失眠，表现为入睡困难、睡眠维持困难或两者兼有。','Insomnia in adults involving difficulty initiating sleep, maintaining sleep, or both.'),L('口服片剂 · 5、10 mg','Oral tablets · 5 and 10 mg'),lemLabel,fda('Dayvigo','212028')),
    pk:section(L('人体药代','Human pharmacokinetics'),[
      ['Tₘₐₓ',L('约 1–3 h','Approximately 1–3 h')],
      [L('有效半衰期','Effective half-life'),L('5 mg 为 17 h，10 mg 为 19 h','17 h at 5 mg and 19 h at 10 mg')],
      [L('代谢','Metabolism'),L('以 CYP3A4 为主，CYP3A5 次之。主要循环代谢物为 M10。','Predominantly CYP3A4 and, to a lesser extent, CYP3A5. M10 is the major circulating metabolite.')],
      [L('食物影响','Food effect'),L('高脂高热量餐后 Tₘₐₓ 延迟约 2 h，Cₘₐₓ 降低 23%，AUC₀–∞ 增加 18%。','A high-fat, high-calorie meal delayed Tₘₐₓ by about 2 h, reduced Cₘₐₓ by 23% and increased AUC₀–∞ by 18%.')]
    ],[lemLabel]),
    preclinical:[
      animalRecord(L('小鼠 · 野生型与食欲素神经元缺失模型','Mouse · Wild type and orexin neuron-deficient model'),
        L('单次口服 30 mg/kg 或载体。每种基因型每组 7 只，记录给药后 3 h 的累积睡眠时间。','Single oral 30 mg/kg dose or vehicle. Seven mice per group within each genotype, with cumulative sleep time recorded for 3 h after dosing.'),
        L('野生型小鼠的总睡眠时间增加。食欲素神经元缺失小鼠在该实验条件下未出现相同效应。','Total sleep time increased in wild-type mice. Orexin neuron-deficient mice did not show the same response under these conditions.'),[lemPreclinical])
    ],
    clinical:[
      trialRecord('SUNRISE 1 · PSG',L('1 个月随机、双盲试验，纳入 ≥55 岁女性和 ≥65 岁男性失眠患者。试验设安慰剂及活性对照。下表摘录安慰剂比较。','A 1-month randomized, double-blind trial in women aged ≥55 years and men aged ≥65 years with insomnia. The study included placebo and an active comparator. The table shows comparisons with placebo.'),[
        [lps,earlyNights,'5 mg',L('比值 0.8','Ratio 0.8'),'95% CI 0.7–0.9'],
        [lps,earlyNights,'10 mg',L('比值 0.7','Ratio 0.7'),'95% CI 0.6–0.8'],
        [waso,earlyNights,'5 mg',L('−24.0 分钟','−24.0 min'),'95% CI −30.0 to −18.0'],
        [waso,earlyNights,'10 mg',L('−25.3 分钟','−25.3 min'),'95% CI −31.4 to −19.3']
      ],L('美国说明书 Study 2 表 4。5 mg、10 mg 和安慰剂组的 ITT 分别为 266、269、208。LPS 为相对基线变化的药物/安慰剂比值，WASO 为组间分钟差。','US label Study 2, Table 4. The 5 mg, 10 mg and placebo groups had ITT counts of 266, 269 and 208, respectively. LPS is a drug-to-placebo ratio of relative change from baseline. WASO is a between-group difference in minutes.'),[lemLabel,trial('NCT02783729')]),
      trialRecord(L('SUNRISE 2 · 睡眠日记','SUNRISE 2 · Sleep diary'),L('成人失眠的随机双盲研究。下表为前 6 个月安慰剂对照阶段的主观终点。','Randomized, double-blind trial in adults with insomnia. The table reports subjective endpoints from the first 6 months, which were placebo controlled.'),[
        [L('日记 · 主观入睡潜伏期（sSOL）','Diary · Subjective sleep onset latency (sSOL)'),month6,'5 mg',L('比值 0.7','Ratio 0.7'),'95% CI 0.6–0.8'],
        [L('日记 · 主观入睡潜伏期（sSOL）','Diary · Subjective sleep onset latency (sSOL)'),month6,'10 mg',L('比值 0.7','Ratio 0.7'),'95% CI 0.6–0.8'],
        [L('日记 · 主观入睡后觉醒时间（sWASO）','Diary · Subjective wake after sleep onset (sWASO)'),month6,'5 mg',L('−17.5 分钟','−17.5 min'),'95% CI −27.3 to −7.6'],
        [L('日记 · 主观入睡后觉醒时间（sWASO）','Diary · Subjective wake after sleep onset (sWASO)'),month6,'10 mg',L('−12.7 分钟','−12.7 min'),'95% CI −22.4 to −3.0']
      ],L('美国说明书 Study 1 表 3。5 mg、10 mg 和安慰剂组的 ITT 分别为 316、315、318。比值和分钟差按各终点定义保留。','US label Study 1, Table 3. The 5 mg, 10 mg and placebo groups had ITT counts of 316, 315 and 318, respectively. Ratios and differences in minutes retain their endpoint-specific definitions.'),[lemLabel,trial('NCT02952820')])
    ],
    safety:section(L('安全性与相互作用','Safety and interactions'),[
      [L('安全性','Safety'),L('美国说明书中，嗜睡是最常见的不良反应。另记录次日警觉性受损和复杂睡眠行为等。','Somnolence is the most common adverse reaction in the US label, which also describes next-day impairment and complex sleep behaviors.')],
      [L('相互作用','Interactions'),L('说明书记录 CYP3A 抑制剂、诱导剂及 CYP2B6 底物的相互作用。具体条件见第 7 节。','The label records interactions with CYP3A inhibitors, CYP3A inducers and CYP2B6 substrates. See Section 7 for conditions.')]
    ],[lemLabel])
  },
  zol: {
    keyReferences: [{"citation": "Zhu S, Sridhar A, Teng J, Howard RJ, Lindahl E, Hibbs RE. Structural and dynamic mechanisms of GABA(A) receptor modulators with opposing activities. Nat Commun. 2022;13(1):4582.", "pmid": "35933426", "url": "https://doi.org/10.1038/s41467-022-32212-4"}, {"citation": "Greenblatt DJ, Roth T. Zolpidem for insomnia. Expert Opin Pharmacother. 2012;13(6):879-893.", "pmid": "22424586", "url": "https://doi.org/10.1517/14656566.2012.667074"}],
    chemistry:chemistry('zol',5732,'R5R','82626-48-0','C₁₉H₂₁N₃O','307.4','ZAFYATHCZYHLPB-UHFFFAOYSA-N',
      'CC1=CC=C(C=C1)C2=C(N3C=C(C=CC3=N2)C)CC(=O)N(C)C',
      {iupac:'N,N-dimethyl-2-[6-methyl-2-(4-methylphenyl)imidazo[1,2-a]pyridin-3-yl]acetamide',
       synonyms:'Zolpidemum · Sanval', kegg:'D08690', pharmgkb:'PA451976', pharmgkb:'PA451976',
       links:[
         {label:'ChEMBL CHEMBL911',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL911/'},
         {label:'DrugBank DB00425',url:'https://go.drugbank.com/drugs/DB00425'},
         {label:'KEGG D08690',url:'https://www.kegg.jp/entry/D08690'}
       ]}),
    regulatory:usMarket(1992,L('伴入睡困难的失眠的短期治疗。','Short-term treatment of insomnia involving difficulty initiating sleep.'),L('酒石酸唑吡坦口服片剂 · 5、10 mg','Zolpidem tartrate oral tablets · 5 and 10 mg'),zolLabel,fda('Ambien','019908')),
    pk:section(L('人体药代','Human pharmacokinetics'),[
      [L('研究条件','Study conditions'),L('45 名健康受试者，单剂量交叉研究，酒石酸唑吡坦 5 或 10 mg。','Single-dose crossover study in 45 healthy participants receiving 5 or 10 mg of zolpidem tartrate.')],
      ['Tₘₐₓ',L('两剂量组均值均为 1.6 h','Mean 1.6 h at both doses')],
      [L('消除半衰期','Elimination half-life'),L('5 mg 为 2.6 h，10 mg 为 2.5 h（均值）','Mean 2.6 h at 5 mg and 2.5 h at 10 mg')],
      [L('代谢与消除','Metabolism and elimination'),L('主要经 CYP3A4 代谢，CYP2C9、CYP1A2 亦有贡献；转化为无活性代谢物后主要经肾脏排出。','Metabolized mainly by CYP3A4, with contributions from CYP2C9 and CYP1A2, to inactive metabolites eliminated primarily in urine.')]
    ],[zolLabel]),
    clinical:[
      trialRecord(L('短暂性失眠 · 单夜 PSG 研究','Transient insomnia · Single-night PSG study'),
        L('462 名在睡眠实验室首夜出现短暂性失眠的成人参加双盲平行组研究，比较 7.5 mg、10 mg 与安慰剂。','A double-blind, parallel-group trial enrolled 462 adults with transient insomnia on their first night in a sleep laboratory and compared 7.5 mg and 10 mg with placebo.'),
        [[L('PSG · 入睡潜伏期、睡眠时长及觉醒次数','PSG · Sleep latency, sleep duration and number of awakenings'),L('单夜','Single night'),'7.5 mg / 10 mg',L('两组均优于安慰剂','Both arms favored over placebo'),L('说明书定性摘要','Qualitative label summary')]],
        L('来自美国说明书第 14.1 节。制剂为酒石酸盐，化学信息区展示游离分子。','US label Section 14.1. The formulation is the tartrate salt, while the chemistry section shows the free molecule.'),[zolLabel])
    ],
    safety:section(L('安全性与相互作用','Safety and interactions'),[
      [L('安全性','Safety'),L('美国说明书含复杂睡眠行为的黑框警告。','The US label carries a boxed warning for complex sleep behaviors.')],
      [L('相互作用','Interactions'),L('其他中枢神经抑制剂可增加中枢抑制作用。具体条件见说明书第 7 节。','Other central nervous system depressants can increase CNS depression. See Section 7 of the label for the conditions.')]
    ],[zolLabel])
  },
  ado: {
    keyReferences: [{"citation": "Fredholm BB, IJzerman AP, Jacobson KA, Klotz KN, Linden J. International Union of Pharmacology. XXV. Nomenclature and classification of adenosine receptors. Pharmacol Rev. 2001;53(4):527-552.", "pmid": "11734617", "url": "https://pubmed.ncbi.nlm.nih.gov/11734617/"}, {"citation": "Lebon G, Warne T, Edwards PC, Bennett K, Langmead CJ, Leslie AG, et al. Agonist-bound adenosine A2A receptor structures reveal common features of GPCR activation. Nature. 2011;474(7352):521-525.", "pmid": "21593763", "url": "https://doi.org/10.1038/nature10136"}],
    chemistry:chemistry('ado',60961,'ADN','58-61-7','C₁₀H₁₃N₅O₄','267.24','OIRDTQYFTABQOQ-KQYNXXCUSA-N',
      'C1=NC(=C2C(=N1)N(C=N2)[C@H]3[C@@H]([C@@H]([C@H](O3)CO)O)O)N',
      {"iupac": "(2R,3R,4S,5R)-2-(6-aminopurin-9-yl)-5-(hydroxymethyl)oxolane-3,4-diol", "synonyms": "adenosine · Adenocard", "kegg": "D00045", pharmgkb:'PA448049', "links": [{"label": "ChEMBL CHEMBL606298", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL606298/"}, {"label": "KEGG D00045", "url": "https://www.kegg.jp/entry/D00045"}]})
  },
  neca: {
    keyReferences: [{"citation": "Carpenter B, Nehmé R, Warne T, Leslie AG, Tate CG. Structure of the adenosine A(2A) receptor bound to an engineered G protein. Nature. 2016;536(7614):104-107.", "pmid": "27462812", "url": "https://doi.org/10.1038/nature18966"}, {"citation": "Fredholm BB, IJzerman AP, Jacobson KA, Klotz KN, Linden J. International Union of Pharmacology. XXV. Nomenclature and classification of adenosine receptors. Pharmacol Rev. 2001;53(4):527-552.", "pmid": "11734617", "url": "https://pubmed.ncbi.nlm.nih.gov/11734617/"}],
    chemistry:chemistry('neca',448222,null,'35920-39-9','C₁₂H₁₆N₆O₄','308.29','JADDQZYHOWSFJD-FLNNQWSLSA-N',
      'CCNC(=O)[C@@H]1[C@H]([C@H]([C@@H](O1)N2C=NC3=C(N=CN=C32)N)O)O',
      {"iupac": "(2S,3S,4R,5R)-5-(6-aminopurin-9-yl)-N-ethyl-3,4-dihydroxyoxolane-2-carboxamide", "synonyms": "NECA · N-ethyl-5'-carboxamidoadenosine", "kegg": "D08997", "links": [{"label": "ChEMBL CHEMBL464859", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL464859/"}, {"label": "KEGG D08997", "url": "https://www.kegg.jp/entry/D08997"}]})
  },
  'pf-03654746': {
    keyReferences: [{"citation": "Peng X, Yang L, Liu Z, Lou S, Mei S, Li M, et al. Structural basis for recognition of antihistamine drug by human histamine receptor. Nat Commun. 2022;13(1):6105.", "pmid": "36243875", "url": "https://doi.org/10.1038/s41467-022-33880-y"}],
    chemistry:chemistry('pf-03654746',16119086,null,'935840-31-6','C₁₈H₂₄F₂N₂O','322.4','SXMBKHYDZOCBMT-UHFFFAOYSA-N',
      'CCNC(=O)C1CC(C1)(C2=CC(=C(C=C2)CN3CCCC3)F)F',
      {"iupac": "N-ethyl-3-fluoro-3-[3-fluoro-4-(pyrrolidin-1-ylmethyl)phenyl]cyclobutane-1-carboxamide", "synonyms": "RefChem:927145 · PF-03654746", "links": [{"label": "ChEMBL CHEMBL2151197", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2151197/"}]})
  },
  bhff: {
    keyReferences: [{"citation": "Mao C, Shen C, Li C, Shen DD, Xu C, Zhang S, et al. Cryo-EM structures of inactive and active GABA(B) receptor. Cell Res. 2020;30(7):564-573.", "pmid": "32494023", "url": "https://doi.org/10.1038/s41422-020-0350-5"}],
    chemistry:chemistry('bhff',4332683,null,'123557-91-5','C₁₇H₂₁F₃O₃','330.34','RVNOANDLZIIFHB-UHFFFAOYSA-N',
      'CC(C)(C)C1=CC2=C(C(=C1)C(C)(C)C)OC(=O)C2(C(F)(F)F)O',
      {"iupac": "5,7-ditert-butyl-3-hydroxy-3-(trifluoromethyl)-1-benzofuran-2-one", "synonyms": "RefChem:528162 · RAC BHFF", "links": [{"label": "ChEMBL CHEMBL2322946", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2322946/"}]})
  },
  'sb-334867': {
    keyReferences: [{"citation": "Smart D, Sabido-David C, Brough SJ, Jewitt F, Johns A, Porter RA, et al. SB-334867-A: the first selective orexin-1 receptor antagonist. Br J Pharmacol. 2001;132(6):1179-1182.", "pmid": "11250867", "url": "https://doi.org/10.1038/sj.bjp.0703953"}, {"citation": "Carter ME, Brill J, Bonnavion P, Huguenard JR, Huerta R, de Lecea L. Mechanism for Hypocretin-mediated sleep-to-wake transitions. Proc Natl Acad Sci U S A. 2012;109(39):E2635-E2644.", "pmid": "22955882", "url": "https://doi.org/10.1073/pnas.1202526109"}],
    chemistry:chemistry('sb-334867',6604926,null,'792173-99-0','C₁₇H₁₃N₅O₂','319.32','AKMNUCBQGHFICM-UHFFFAOYSA-N',
      'CC1=NC2=C(O1)C=C(C=C2)NC(=O)NC3=C4C(=NC=C3)C=CC=N4',
      {"iupac": "1-(2-methyl-1,3-benzoxazol-6-yl)-3-(1,5-naphthyridin-4-yl)urea", "synonyms": "SB-334867 · RefChem:181575", "links": [{"label": "ChEMBL CHEMBL291536", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL291536/"}]})
  },
  m10032: {
    keyReferences: [{"citation": "Beuckmann CT, Suzuki M, Ueno T, Nagaoka K, Arai T, Higashiyama H. In Vitro and In Silico Characterization of Lemborexant (E2006), a Novel Dual Orexin Receptor Antagonist. J Pharmacol Exp Ther. 2017;362(2):287-295.", "pmid": "28559480", "url": "https://doi.org/10.1124/jpet.117.241422"}]
  },
  orb: {
    keyReferences: [{"citation": "Sakurai T, Amemiya A, Ishii M, Matsuzaki I, Chemelli RM, Tanaka H, et al. Orexins and orexin receptors: a family of hypothalamic neuropeptides and G protein-coupled receptors that regulate feeding behavior. Cell. 1998;92(4):573-585.", "pmid": "9491897", "url": "https://doi.org/10.1016/s0092-8674(00)80949-6"}]
  }
};

function registerCompound({molecule,profile,complexes=[],assays=[],effect}) {
  const {id,group}=molecule;
  if (group!=='molecules' || records.some(r=>r.id===id)) throw Error('Duplicate or invalid molecule: '+id);
  const ids=new Set(structures.map(s=>s.id));
  for (const s of complexes) {
    if (s.molecule!==id || ids.has(s.id) || !records.some(r=>r.id===s.target && r.group==='targets'))
      throw Error('Invalid structure ownership: '+s.id);
    ids.add(s.id);
  }
  if (assays.some(a=>a.molecule!==id || !records.some(r=>r.id===a.target && r.group==='targets')))
    throw Error('Invalid assay ownership: '+id);
  records.push(molecule);
  moleculeProfiles[id]=profile;
  structures.push(...complexes);
  activities.push(...assays);
  if (effect) sleepWakeEffects[id]=effect;
}
