const L = (zh, en) => ({ zh, en });
const source = (label, url) => ({ label, url });
const pdb = id => source('RCSB PDB '+id, 'https://www.rcsb.org/structure/'+id);
const ccd = id => source(L('PDB 化学组分 '+id,'PDB chemical component '+id), 'https://www.rcsb.org/ligand/'+id);
const uniprot = id => source('UniProt '+id, 'https://www.uniprot.org/uniprotkb/'+id+'/entry');
const pubchem = id => source('PubChem CID '+id, 'https://pubchem.ncbi.nlm.nih.gov/compound/'+id);
const fda = (name, id) => source('Drugs@FDA · '+name+' · NDA '+id, 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo='+id);
const article = (label, pmid) => source(label, 'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/');
const trial = id => source('ClinicalTrials.gov · '+id, 'https://clinicaltrials.gov/study/'+id);
const gtop = source(L('IUPHAR/BPS · 食欲素受体','IUPHAR/BPS · Orexin receptors'), 'https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=51');
const suvLabel = source(L('BELSOMRA · 美国说明书（2025）','BELSOMRA · US prescribing information (2025)'), 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/204569s010lbl.pdf');
const lemLabel = source(L('DAYVIGO · 美国说明书（2025）','DAYVIGO · US prescribing information (2025)'), 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/212028s011lbl.pdf');
const zolLabel = source(L('AMBIEN · 美国说明书（DailyMed）','AMBIEN · US prescribing information (DailyMed)'), 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=747949c5-2c91-4909-8a07-71b6826f8e97&type=display');
const pmda = source(L('PMDA · Dayvigo 审评报告表 8','PMDA · Dayvigo review report, Table 8'), 'https://www.pmda.go.jp/files/000236878.pdf#page=13');
const lemFdaReview = source(L('FDA · Dayvigo 多学科审评，表 3','FDA · Dayvigo multidisciplinary review, Table 3'), 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/212028Orig1s000MultidisciplineR.pdf');
const inVitro = article('Beuckmann et al. · JPET 2017','28559480');
const record = (id, group, name, subtitle, tag, description, fields, sources, links) =>
  ({ id, group, name, subtitle, tag, description, fields, sources, links });
const USApproved = L('美国 FDA 批准','US FDA approved');
const endogenous = L('内源性配体','Endogenous ligand');
const classA = L('A 类 GPCR','Class A GPCR');
const pathway = L('分子通路','Molecular pathway');
const measuredSite = L('实验结构 · 坐标注释','Experimental structure · Coordinate annotation');
const candidate = L('待评估研究区域','Research region to assess');
const records = [
  record('suv','molecules','Suvorexant',L('苏沃雷生 · Belsomra','Belsomra · MK-4305'),USApproved,
    L('双重食欲素受体拮抗剂（DORA），具有两种人食欲素受体亚型的药物结合结构。','Dual orexin receptor antagonist (DORA) with drug-bound structures for both human orexin receptor subtypes.'),
    [], [pubchem(24965990),ccd('SUV'),suvLabel,fda('Belsomra','204569'),gtop], ['ox1','ox2','4ZJ8','4S0V','orexin']),
  record('lem','molecules','Lemborexant',L('莱博雷生 · Dayvigo','Dayvigo · E-2006'),USApproved,
    L('双重食欲素受体拮抗剂。两种受体亚型均有体外药理数据，人 OX2R 有莱博雷生共晶结构。','Dual orexin receptor antagonist with in vitro pharmacology for both subtypes and a human OX2R co-crystal structure.'),
    [], [pubchem(56944144),ccd('NRK'),lemLabel,fda('Dayvigo','212028'),inVitro], ['ox1','ox2','7XRR','orexin']),
  record('zol','molecules','Zolpidem',L('唑吡坦 · Ambien','Ambien · Zolpidem tartrate tablets'),USApproved,
    L('GABAₐ 受体正变构调节剂。人 α1β2γ2 复合物提供了多个唑吡坦结合实例。','A positive allosteric modulator of GABAₐ receptors. A human α1β2γ2 structure contains multiple instances of bound zolpidem.'),
    [], [pubchem(5732),ccd('R5R'),zolLabel,fda('Ambien','019908'),pdb('8DD2')], ['gaba','8DD2','gaba-signal']),
  record('orb','molecules','Orexin-B',L('食欲素 B · hypocretin-2','Hypocretin-2 · HCRT-derived peptide'),endogenous,
    L('由 HCRT 前体加工生成的内源性神经肽。与人 OX2R 和 G 蛋白的复合物提供激动构象参照。','An endogenous neuropeptide processed from the HCRT precursor. Its human OX2R–G protein complex provides an active-state reference.'),
    [[L('分子类型','Molecule type'),L('内源性神经肽','Endogenous neuropeptide')],[L('前体','Precursor'),'HCRT · O43612']],
    [uniprot('O43612'),pdb('7L1U')], ['ox2','7L1U','orexin']),
  record('ado','molecules','Adenosine',L('腺苷 · 内源性核苷','Endogenous nucleoside'),endogenous,
    L('课题原大纲的示范分子。腺苷结合的人 A₂A 受体结构可与腺苷信号及相关环路证据交叉浏览。','The example molecule from the original project outline. Its human A₂A receptor complex links to adenosine signaling and related circuit evidence.'),
    [[L('分子类型','Molecule type'),L('内源性核苷','Endogenous nucleoside')]],
    [pubchem(60961),ccd('ADN'),pdb('2YDO')], ['a2a','2YDO','adenosine-signal']),
  record('ox1','targets','OX1R',L('食欲素 1 型受体 · HCRTR1 · 人','Orexin receptor type 1 · HCRTR1 · Human'),classA,
    L('食欲素 1 型受体。可查看 Suvorexant 共晶与两种 DORA 的靶标药理证据。','Orexin receptor type 1, with a suvorexant co-crystal and pharmacology evidence for two DORAs.'),
    [['UniProt','O43613'],[L('实体类型','Entity type'),L('单蛋白','Single protein')]],
    [uniprot('O43613'),gtop], ['suv','lem','orexin']),
  record('ox2','targets','OX2R',L('食欲素 2 型受体 · HCRTR2 · 人','Orexin receptor type 2 · HCRTR2 · Human'),classA,
    L('可浏览小分子拮抗剂与内源性激动肽结合态，并比较两种 DORA 在同一受体上的邻近残基。','Browse small-molecule antagonist and endogenous peptide agonist complexes, and compare the residues near two DORAs in the same receptor.'),
    [['UniProt','O43614'],[L('实体类型','Entity type'),L('单蛋白','Single protein')]],
    [uniprot('O43614'),gtop], ['suv','lem','orb','orexin']),
  record('gaba','targets','GABAₐ α1β2γ2',L('GABRA1 · GABRB2 · GABRG2 · 人','GABRA1 · GABRB2 · GABRG2 · Human'),L('配体门控离子通道','Ligand-gated ion channel'),
    L('以 8DD2 对应的人异源五聚体为研究对象。链与亚基映射用于区分不同结合实例。','The human heteropentamer represented by 8DD2. Chain-to-subunit mapping distinguishes the individual binding instances.'),
    [['UniProt','α1 P14867 · β2 P47870 · γ2 P18507'],[L('组成','Stoichiometry'),'2 × α1 · 2 × β2 · 1 × γ2']],
    [pdb('8DD2'),uniprot('P14867'),uniprot('P47870'),uniprot('P18507')], ['zol','gaba-signal']),
  record('a2a','targets','A₂AR',L('腺苷 A₂A 受体 · ADORA2A · 人','Adenosine A₂A receptor · ADORA2A · Human'),classA,
    L('人 A₂A 受体和腺苷的共晶结构提供结合构象。小鼠细胞与环路实验另见调控页。','The human receptor co-crystal with adenosine provides a binding pose. Mouse cell and circuit studies are listed in the regulation section.'),
    [['UniProt','P29274'],[L('实体类型','Entity type'),L('单蛋白','Single protein')]],
    [uniprot('P29274'),pdb('2YDO')], ['ado','adenosine-signal']),
  record('orexin','pathways',L('食欲素受体信号','Orexin receptor signaling'),'Orexin → OX1R / OX2R',pathway,
    L('内源性食欲素激活食欲素受体，DORA 拮抗受体。受体介导的细胞信号按实验系统及测量方法逐条记录。','Endogenous orexins activate orexin receptors and DORAs antagonize them. Receptor-mediated cellular signaling is interpreted in the context of the assay and experimental system.'),
    [[L('内源性信号','Endogenous signal'),'Orexin-A / Orexin-B'],[L('受体','Receptors'),'OX1R / OX2R'],[L('结构参照','Structural reference'),'OX2R–Orexin-B · 7L1U']],
    [gtop,pdb('7L1U')], ['ox1','ox2','orb','suv','lem','7L1U']),
  record('gaba-signal','pathways',L('GABAₐ 介导的抑制性传递','GABAₐ-mediated inhibitory transmission'),L('GABA → GABAₐ 受体','GABA → GABAₐ receptors'),pathway,
    L('GABA 门控阴离子通道。人 α1β2γ2 结构中同时收录 GABA 正构配体和正变构调节剂 zolpidem。','GABA gates an anion channel. The human α1β2γ2 structure contains both the orthosteric agonist GABA and the positive allosteric modulator zolpidem.'),
    [[L('内源性信号','Endogenous signal'),'GABA'],[L('结构参照','Structural reference'),'α1β2γ2–GABA–Zolpidem · 8DD2']],
    [pdb('8DD2')], ['gaba','zol','8DD2']),
  record('adenosine-signal','pathways',L('腺苷 A₂A 受体信号','Adenosine A₂A receptor signaling'),'Adenosine → A₂AR',pathway,
    L('腺苷是 A₂AR 的内源性激动剂。人 A₂AR 工程构建的共晶结构提供结合构象参照。','Adenosine is an endogenous agonist of A₂AR. A co-crystal of an engineered human A₂AR construct provides a binding-pose reference.'),
    [[L('分子事件','Molecular event'),L('腺苷结合并激活 A₂AR','Adenosine binds and activates A₂AR')],[L('结构参照','Structural reference'),'2YDO']],
    [uniprot('P29274'),pdb('2YDO')], ['ado','a2a','2YDO']),
  record('lh-lc','circuits',L('食欲素神经元与蓝斑','Orexin neurons and the locus coeruleus'),L('下丘脑 Hcrt⁺ 神经元 · 蓝斑去甲肾上腺素能神经元','Hypothalamic Hcrt⁺ neurons · Noradrenergic locus coeruleus neurons'),L('小鼠 · 功能干预','Mouse · Functional perturbation'),
    L('小鼠休息期的同步双侧 LC 光抑制或局部 SB-334867 干预，消除 Hcrt 光刺激缩短 NREM–觉醒潜伏期的效应。','During the mouse inactive period, concurrent bilateral LC photoinhibition or local SB-334867 abolished Hcrt-stimulation-induced shortening of NREM-to-wake latency.'),
    [[L('物种','Species'),L('小鼠','Mouse')],[L('方法','Methods'),L('光遗传、局部药理干预','Optogenetics and local pharmacological perturbation')],[L('表型','Phenotype'),L('NREM → 觉醒转换','NREM-to-wake transition')]],
    [article('Carter et al. · PNAS 2012','22955882')], ['orexin']),
  record('tmn-rescue','circuits',L('后下丘脑 OX2R 恢复','OX2R rescue in the posterior hypothalamus'),L('结节乳头核（TMN）及邻近区域','Tuberomammillary nucleus (TMN) and neighboring regions'),L('小鼠 · 区域救援','Mouse · Regional rescue'),
    L('在 OX2R 转录受抑制的小鼠中，恢复 TMN 及邻近后下丘脑区域的 OX2R 表达改善觉醒维持。','In mice with disrupted OX2R transcription, restoring OX2R expression in the TMN and adjacent posterior hypothalamus improved wake consolidation.'),
    [[L('物种','Species'),L('小鼠','Mouse')],[L('方法','Methods'),L('区域 AAV-Cre 救援','Regional AAV-Cre rescue')],[L('表型','Phenotype'),L('觉醒时段的维持','Consolidation of wake bouts')],[L('空间范围','Spatial extent'),L('覆盖 TMN 及邻近区域','TMN and neighboring areas')]],
    [article('Mochizuki et al. · PNAS 2011','21368172')], ['orexin','ox2']),
  record('nac-vp','circuits',L('伏隔核核心区 → 腹侧苍白球','Nucleus accumbens core → Ventral pallidum'),L('NAc core Adora2a⁺ 神经元及其 VP 投射','NAc core Adora2a⁺ neurons and their VP projection'),L('小鼠 · 投射干预','Mouse · Projection perturbation'),
    L('刺激表达 Adora2a 的伏隔核核心区神经元及其在腹侧苍白球的末梢可诱导慢波睡眠。Adora2a 用于标记被操控的细胞群。','Stimulation of Adora2a-expressing neurons in the nucleus accumbens core and their terminals in the ventral pallidum induced slow-wave sleep. Adora2a served as a marker of the manipulated cell population.'),
    [[L('物种','Species'),L('小鼠','Mouse')],[L('方法','Methods'),L('化学遗传与光遗传','Chemogenetics and optogenetics')],[L('表型','Phenotype'),L('慢波睡眠','Slow-wave sleep')]],
    [article('Oishi et al. · Nature Communications 2017','28963505')], ['adenosine-signal']),
  { ...record('ox2-interface','sites',L('OX2R 胞内 G 蛋白界面','Intracellular G protein interface of OX2R'),
    L('以 7L1U 为结构参照','Structural reference: 7L1U'),candidate,
    L('登记为待评估研究区域，用于管理后续口袋搜索与功能验证。','A region registered for future pocket searches and functional validation.'),
    [[L('结构依据','Structural basis'),L('7L1U 中的受体–G 蛋白界面','Receptor–G protein interface in 7L1U')],
     [L('药物结合证据','Evidence of drug binding'),L('待验证','Pending validation')],
     [L('可成药性评估','Druggability assessment'),L('待开展','Pending assessment')],
     [L('入库升级条件','Criteria for updating the evidence status'),L('明确预测方法和残基范围，补充位点特异性结合或功能证据。','Define the prediction method and residue boundaries and add site-specific binding or functional evidence.')]],
    [pdb('7L1U')], ['ox2','7L1U']), target:'ox2', candidate:true }
];

const structure = (id, subtitle, method, resolution, state, target, molecule, code, chain, construct) =>
  ({ id, subtitle, method, resolution, state, target, molecule, code, chain, construct });
const xray = L('X 射线衍射','X-ray diffraction');
const cryo = L('冷冻电镜','Cryo-EM');
const antagonistBound = L('拮抗剂结合态','Antagonist-bound');
const structures = [
  structure('4S0V','OX2R · Suvorexant',xray,'2.50',antagonistBound,'ox2','suv','SUV','A',L('人 OX2R，含工程融合构建。','Human OX2R with an engineered fusion construct.')),
  structure('4ZJ8','OX1R · Suvorexant',xray,'2.75',antagonistBound,'ox1','suv','SUV','A',L('人 OX1R，含工程融合构建。','Human OX1R with an engineered fusion construct.')),
  structure('7XRR','OX2R · Lemborexant',xray,'2.89',antagonistBound,'ox2','lem','NRK','A',L('人 OX2R 工程构建。','Engineered human OX2R construct.')),
  structure('7L1U','OX2R · Orexin-B · G protein',cryo,'3.20',L('激动剂及 G 蛋白结合态','Agonist- and G protein-bound'),'ox2','orb','Orexin-B','R',
    L('人 OX2R 与 G 蛋白复合物，食欲素 B 位于作者链 L。','Human OX2R in complex with a G protein. Orexin-B is in author chain L.')),
  structure('8DD2','GABAₐ α1β2γ2 · GABA · Zolpidem',cryo,'2.90',L('激动剂及正变构调节剂结合态','Agonist- and positive allosteric modulator-bound'),'gaba','zol','R5R','A · B · C · D · E',
    L('人 GABAₐ 五聚体，α1 为 B/D，β2 为 A/C，γ2 为 E。本站的位点注释聚焦唑吡坦。','Human GABAₐ pentamer with α1 in B/D, β2 in A/C, and γ2 in E. The site annotations in this release focus on zolpidem.')),
  structure('2YDO','A₂AR · Adenosine',xray,'3.00',L('激动剂结合态','Agonist-bound'),'a2a','ado','ADN','A',L('人 A₂AR 热稳定工程构建。','Thermostabilized human A₂AR construct.'))
];

const systems = [
  { id:'orexin', title:L('食欲素系统','Orexin system'), pathway:'orexin', circuits:['lh-lc','tmn-rescue'] },
  { id:'adenosine', title:L('腺苷系统','Adenosine system'), pathway:'adenosine-signal', circuits:['nac-vp'] },
  { id:'gaba', title:L('GABA 能信号','GABAergic signaling'), pathway:'gaba-signal', circuits:[] }
];

const functionalAssay = L('细胞钙动员拮抗','Antagonism in a cellular calcium mobilization assay');
const antagonist = L('拮抗','Antagonist');
const agonist = L('激动','Agonist');
const doraAssays = (molecule, target, binding, functional) => [
  { molecule, target, action:antagonist, method:L('放射性配体竞争结合','Radioligand competition binding'),
    result:'Kᵢ = '+binding+' nM', system:L('CHO 膜 · 人受体 · [¹²⁵I]orexin-A · M10032','CHO membranes · Human receptor · [¹²⁵I]orexin-A · M10032'), sources:[lemFdaReview,pmda] },
  { molecule, target, action:antagonist, method:functionalAssay,
    result:'IC₅₀ = '+functional+' nM', system:L('HEK-293 · 稳转人受体 · M16023','HEK-293 · Stably expressed human receptor · M16023'), sources:[lemFdaReview,pmda] }
];
const evidence = (molecule, target, action, method, system, ref) =>
  ({ molecule, target, action, method, system, sources:[ref] });
const activities = [
  ...doraAssays('suv','ox1','8.8','1.4'),
  ...doraAssays('suv','ox2','12.0','2.2'),
  ...doraAssays('lem','ox1','6.1','8.1'),
  ...doraAssays('lem','ox2','2.6','0.48'),
  evidence('zol','gaba',L('正变构调节','Positive allosteric modulation'),L('结构与功能研究','Structural and functional study'),L('人 α1β2γ2 受体','Human α1β2γ2 receptor'),article('Zhu et al. · Nat Commun 2022','35933426')),
  evidence('orb','ox2',agonist,L('结构与功能研究','Structural and functional study'),L('人 OX2R','Human OX2R'),pdb('7L1U')),
  evidence('ado','a2a',L('正构位点结合（结构）','Orthosteric binding (structure)'),L('X 射线晶体学','X-ray crystallography'),L('人 A₂AR 工程构建体','Engineered human A₂AR construct'),pdb('2YDO'))
];

const effectLabels = {
  wake:L('促觉醒','Wake-promoting'),
  sleep:L('促睡眠','Sleep-promoting')
};
const orexinWakeStudy = article(L('大鼠食欲素给药研究 · Brain Res 2005','Orexin administration in rats · Brain Res 2005'),'15919057');
const adenosineSleepStudy = article(L('小鼠伏隔核腺苷研究 · Nat Commun 2024，图 1','Adenosine in the mouse nucleus accumbens · Nat Commun 2024, Fig. 1'),'38688901');
const sleepWakeEffects = {
  suv:{direction:'sleep',ref:suvLabel},
  lem:{direction:'sleep',ref:lemLabel},
  zol:{direction:'sleep',ref:zolLabel},
  orb:{direction:'wake',qualifier:L('大鼠实验','Rat study'),ref:orexinWakeStudy,
    context:L('在所引大鼠实验中，脑室内给予 Orexin-B 后觉醒时间增加。','Intracerebroventricular administration of Orexin-B increased time awake in the cited rat study.')},
  ado:{direction:'sleep',qualifier:L('小鼠实验','Mouse study'),ref:adenosineSleepStudy,
    context:L('在所引小鼠实验中，向伏隔核局部注射腺苷后，慢波睡眠时间增加。','Local administration of adenosine into the nucleus accumbens increased time in slow-wave sleep in the cited mouse study.')},
  orexin:{direction:'wake',qualifier:L('内源性食欲素','Endogenous orexins'),ref:orexinWakeStudy},
  'adenosine-signal':{direction:'sleep',qualifier:L('小鼠伏隔核','Mouse nucleus accumbens'),ref:adenosineSleepStudy},
  'lh-lc':{direction:'wake',label:L('NREM → 觉醒','NREM-to-wake transition'),ref:records.find(r=>r.id==='lh-lc').sources[0]},
  'tmn-rescue':{direction:'wake',label:L('维持觉醒','Wake consolidation'),ref:records.find(r=>r.id==='tmn-rescue').sources[0]},
  'nac-vp':{direction:'sleep',label:L('促进慢波睡眠','Promotes slow-wave sleep'),ref:records.find(r=>r.id==='nac-vp').sources[0]},
  acetazolamide:{direction:'sleep',label:L('改善睡眠呼吸暂停','Improves sleep apnea'),ref:article('Javaheri · Am J Respir Crit Care Med 2006','16239622'),
    context:L('碳酸酐酶抑制剂，通过改善中枢性睡眠呼吸暂停提升睡眠质量；作用机制不同于传统镇静催眠药。','A carbonic anhydrase inhibitor that improves central sleep apnea; its mechanism differs from conventional sedative-hypnotics.')}
};

records.push(
  {...record('mt1','targets','MT₁',L('褪黑素受体 1A · MTNR1A · 人','Melatonin receptor 1A · MTNR1A · Human'),classA,
    L('收录雷美替胺结合的人 MT₁ 工程受体 XFEL 结构。','Includes the XFEL structure of an engineered human MT₁ receptor bound to ramelteon.'),
    [['UniProt','P48039']],[uniprot('P48039'),pdb('6ME2'),pdb('7VGY')],['melatonin-signal']),
    structureReferences:[{id:'7VGY',ligand:L('2-碘褪黑素 · CCD ML2','2-Iodomelatonin · CCD ML2'),
      state:L('MT₁–Gᵢ 偶联态','MT₁–Gᵢ-coupled state'),method:cryo,resolution:'3.10'}]},
  record('mt2','targets','MT₂',L('褪黑素受体 1B · MTNR1B · 人','Melatonin receptor 1B · MTNR1B · Human'),classA,
    L('收录雷美替胺结合的人 MT₂–G 蛋白复合物。','Includes the human MT₂–G protein complex bound to ramelteon.'),
    [['UniProt','P49286']],[uniprot('P49286'),pdb('7VH0')],['melatonin-signal']),
  record('melatonin-signal','pathways',L('褪黑素受体信号','Melatonin receptor signaling'),'Melatonin → MT₁ / MT₂',pathway,
    L('褪黑素是内源性信号，雷美替胺是 MT₁/MT₂ 激动剂。结构记录展示配体结合与 G 蛋白复合物。','Melatonin is an endogenous signal and ramelteon is an MT₁/MT₂ agonist. Structure records show ligand binding and a G protein complex.'),
    [[L('结构参照','Structural references'),'6ME2 / 7VH0']],[pdb('6ME2'),pdb('7VH0')],['mt1','mt2'])
);
systems.push({id:'melatonin',title:L('褪黑素系统','Melatonin system'),pathway:'melatonin-signal',circuits:[]});

const histamineFeedback=article('Morisset et al. · Nature 2000','11130725');
const histamineWake=article('Takahashi et al. · J Neurosci 2006','17021184');
records.push(
  record('hrh1','targets','H₁R',L('组胺 H₁ 受体 · HRH1 · 人','Histamine H₁ receptor · HRH1 · Human'),classA,
    L('多塞平结合的人 H₁ 受体晶体结构包含两个几何异构体的坐标。','The crystal structure of human H₁ receptor bound to doxepin contains coordinates for two geometric isomers.'),
    [['UniProt','P35367']],[uniprot('P35367'),pdb('3RZE')],['histamine-signal']),
  record('hrh3','targets','H₃R',L('组胺 H₃ 受体 · HRH3 · 人','Histamine H₃ receptor · HRH3 · Human'),classA,
    L('H₃ 自受体参与组胺释放的反馈调节。PF-03654746 结合结构 7F61 提供该靶标的结构参照。','H₃ autoreceptors participate in feedback regulation of histamine release. The PF-03654746 complex 7F61 provides a structural reference for the target.'),
    [['UniProt','Q9Y5N1']],[uniprot('Q9Y5N1'),histamineFeedback,pdb('7F61')],['histamine-signal']),
  record('histamine-signal','pathways',L('组胺受体信号','Histamine receptor signaling'),'Histamine → H₁R / H₃R',pathway,
    L('组胺通过 H₁ 等受体传递信号，H₃ 自受体参与释放的负反馈。小鼠在体记录显示，结节乳头核组胺神经元的放电随睡眠–觉醒状态改变。','Histamine signals through receptors including H₁, while H₃ autoreceptors contribute to negative feedback on release. In vivo mouse recordings show that histaminergic tuberomammillary neurons change their firing across sleep and wake states.'),
    [[L('研究切入点','Research focus'),L('H₁ 受体拮抗与 H₃ 自受体反向激动','H₁ receptor antagonism and H₃ autoreceptor inverse agonism')]],
    [histamineFeedback,histamineWake,pdb('3RZE')],['hrh1','hrh3'])
);
systems.push({id:'histamine',title:L('组胺系统','Histamine system'),pathway:'histamine-signal',circuits:[]});

const incretinReceptor=L('B1 类 GPCR','Class B1 GPCR');
records.push({
  ...record('hrh2','targets','H₂R',L('组胺 H₂ 受体 · HRH2 · 人','Histamine H₂ receptor · HRH2 · Human'),classA,
    L('曲米帕明的重组受体结合和拮抗数据在此索引，其对临床睡眠终点的贡献待明确。','Recombinant binding and antagonism data for trimipramine are indexed here. The contribution of H₂R to clinical sleep endpoints remains unresolved.'),
    [['UniProt','P25021']],[uniprot('P25021'),pdb('7UL3')],[]),
  structureReferences:[{id:'7UL3',ligand:L('法莫替丁','Famotidine'),state:L('非活化态','Inactive state'),method:cryo,resolution:'3.00'}]
});
records.push({
  ...record('htr1a','targets','5-HT₁ₐ',L('5-羟色胺 1A 受体 · HTR1A · 人','Serotonin 1A receptor · HTR1A · Human'),classA,
    L('坦度螺酮的受体药理包括动物膜结合及功能实验。人受体的血清素结合结构提供比较参照。','Tandospirone pharmacology includes animal membrane binding and functional assays. The human serotonin-bound receptor provides a structural comparator.'),
    [['UniProt','P08908']],[uniprot('P08908'),pdb('7E2Y')],[]),
  structureReferences:[{id:'7E2Y',ligand:L('血清素','Serotonin'),state:L('Gᵢ 偶联态','Gᵢ-coupled'),method:cryo,resolution:'3.00'}]
});
records.push(
  {
    ...record('oprm1','targets','MOR',L('μ 阿片受体 · OPRM1 · 人','μ opioid receptor · OPRM1 · Human'),classA,
      L('羟考酮作用的阿片受体。受体层面的激动与不宁腿综合征的临床效应分别记录。','An opioid receptor activated by oxycodone. Receptor agonism and clinical effects in restless legs syndrome are recorded separately.'),
      [['UniProt','P35372']],[uniprot('P35372'),pdb('8EF6')],['opioid-rls']),
    structureReferences:[{id:'8EF6',ligand:L('吗啡','Morphine'),state:L('Gᵢ 偶联态','Gᵢ-coupled'),method:cryo,resolution:'3.20'}]
  },
  record('opioid-rls','pathways',L('阿片受体药理与不宁腿综合征','Opioid receptor pharmacology and restless legs syndrome'),
    'MOR · RLS',pathway,
    L('重度特发性不宁腿综合征的临床证据来自羟考酮／纳洛酮缓释复方。单独受体或神经环路对疗效的贡献尚未确定。',
      'Clinical evidence in severe idiopathic restless legs syndrome comes from prolonged-release oxycodone/naloxone. Contributions of individual receptors or circuits to efficacy remain unresolved.'),
    [],[article('RELOXYN · Lancet Neurol 2013','24140442')],['oprm1'])
);
records.push({
  ...record('ddc','targets','AADC',L('芳香族 L-氨基酸脱羧酶 · DDC · 人','Aromatic L-amino acid decarboxylase · DDC · Human'),
    L('代谢酶','Metabolic enzyme'),
    L('催化左旋多巴转化为多巴胺。苄丝肼用于限制外周脱羧。','Converts levodopa to dopamine. Benserazide limits peripheral decarboxylation.'),
    [['UniProt','P20711']],[uniprot('P20711'),pdb('8ORA')],['dopamine-receptors']),
  structureReferences:[{id:'8ORA',ligand:L('L-DOPA 甲酯与 PLP 的外醛亚胺','External aldimine of L-DOPA methyl ester and PLP'),
    state:L('底物类似物参照','Substrate analog reference'),method:xray,resolution:'2.40'}]
});
records.push(
  record('glp1r','targets','GLP-1R',L('胰高血糖素样肽-1 受体 · 人','Glucagon-like peptide-1 receptor · Human'),incretinReceptor,
    L('替尔泊肽的直接分子靶标之一，可与其 GIPR 复合物并列比较。','A direct molecular target of tirzepatide. Compare its complex with the corresponding GIPR complex.'),
    [['UniProt','P43220']],[uniprot('P43220'),pdb('7RGP')],['incretin-osa']),
  record('gipr','targets','GIPR',L('葡萄糖依赖性促胰岛素多肽受体 · 人','Glucose-dependent insulinotropic polypeptide receptor · Human'),incretinReceptor,
    L('替尔泊肽的直接分子靶标之一，已解析其与替尔泊肽及 Gₛ 的复合物。','A direct molecular target of tirzepatide with a deposited tirzepatide–Gₛ complex.'),
    [['UniProt','P48546']],[uniprot('P48546'),pdb('7RBT')],['incretin-osa']),
  record('incretin-osa','pathways',L('肠促胰素受体与肥胖相关睡眠呼吸暂停','Incretin receptors and obesity-related sleep apnea'),
    'GLP-1R / GIPR · OSA',pathway,
    L('替尔泊肽对两种受体的作用有分子药理和结构证据。肥胖成人阻塞性睡眠呼吸暂停的疗效来自临床试验，各受体对疗效的独立贡献尚未确定。',
      'Tirzepatide activation of both receptors has molecular pharmacology and structural support. Efficacy for obstructive sleep apnea in adults with obesity comes from clinical trials; individual receptor contributions remain unresolved.'),
    [],[source('SURMOUNT-OSA','https://doi.org/10.1056/NEJMoa2404881')],['glp1r','gipr'])
);
const monoamineTransporter=L('单胺转运体','Monoamine transporter');
records.push(
  record('sert','targets','SERT',L('血清素转运体 · SLC6A4 · 人','Serotonin transporter · SLC6A4 · Human'),monoamineTransporter,
    L('介导血清素再摄取。氯米帕明有单剂量人体 PET 占有证据。','Mediates serotonin reuptake. Clomipramine has single-dose human PET occupancy data.'),
    [['UniProt','P31645']],[uniprot('P31645'),article('Human SERT PET','12695316')],[]),
  record('leut','targets','LeuT',L('亮氨酸转运体 · Aquifex aeolicus','Leucine transporter · Aquifex aeolicus'),monoamineTransporter,
    L('细菌 NSS 转运体，可用作结构比较。氯米帕明复合物使用细菌残基编号。','Bacterial NSS transporter used for structural comparison. Clomipramine complex residues use bacterial numbering.'),
    [['UniProt','O67854']],[uniprot('O67854'),pdb('2Q6H')],[])
);
records.push(
  record('glyr-a1b','targets','GlyR α1β',L('甘氨酸受体 α1β · 人','Glycine receptor α1β · Human'),
    L('配体门控氯通道','Ligand-gated chloride channel'),
    L('甘氨酸激活的异五聚体氯通道。8DN5 模型包含四个 α1 和一个 β 亚基及五个甘氨酸实例。','A glycine-activated heteropentameric chloride channel. 8DN5 models four α1 subunits, one β subunit and five glycine instances.'),
    [['GLRA1','P23415'],['GLRB','P48167']],[uniprot('P23415'),uniprot('P48167'),pdb('8DN5')],[]),
  record('rat-glun1-lbd','targets','GluN1 (rat)',L('NMDA 受体 GluN1 配体结合域 · 大鼠','NMDA receptor GluN1 ligand-binding domain · Rat'),
    L('离子型谷氨酸受体亚基','Ionotropic glutamate receptor subunit'),
    L('甘氨酸结合 GluN1 共激动位点。1PB7 是孤立结合域，不能单独判定全长通道状态。','Glycine binds the GluN1 co-agonist site. 1PB7 is an isolated binding domain and does not establish a full-length channel state.'),
    [['GRIN1','P35439']],[uniprot('P35439'),pdb('1PB7')],[]),
  record('tph2','targets','TPH2',L('色氨酸羟化酶 2 · 人','Tryptophan hydroxylase 2 · Human'),
    L('血清素生物合成酶','Serotonin biosynthesis enzyme'),
    L('神经元型色氨酸羟化酶催化 L-色氨酸生成 5-羟色氨酸。人 TPH2 有底物动力学数据，鸡 TPH1 提供跨亚型结构参照。','The neuronal tryptophan hydroxylase converts L-tryptophan to 5-hydroxytryptophan. Human TPH2 has substrate kinetics, and chicken TPH1 provides a cross-isoform structural reference.'),
    [['UniProt','Q8IWU9']],[uniprot('Q8IWU9')],['chicken-tph1']),
  record('chicken-tph1','targets','TPH1 (chicken)',L('色氨酸羟化酶 1 · 鸡','Tryptophan hydroxylase 1 · Chicken'),
    L('底物识别结构参照','Structural reference for substrate recognition'),
    L('3E2T 捕获鸡 TPH1 催化结构域与 L-色氨酸的复合物，铁位点同时结合咪唑。','3E2T captures L-tryptophan in the chicken TPH1 catalytic domain, with imidazole coordinated at the iron site.'),
    [['UniProt','P70080']],[uniprot('P70080'),pdb('3E2T')],['tph2'])
);
records.push(record('sigmar1','targets','σ₁R',L('Sigma-1 受体 · SIGMAR1 · 人','Sigma-1 receptor · SIGMAR1 · Human'),
  L('内质网膜蛋白 · 探索性药理','ER membrane protein · Exploratory pharmacology'),
  L('5HK1 为 PD144418 结合的人 σ₁R 结构。小分子结合和动物抗焦虑实验提供药理线索，尚未确立其介导人类睡眠效应。','5HK1 is the human σ₁R structure bound to PD144418. Binding and animal anxiety experiments provide pharmacological evidence. Mediation of sleep effects in humans remains to be established.'),
  [['UniProt','Q99720']],[uniprot('Q99720'),pdb('5HK1')],[]));
records.push(record('cyp3a4','targets','CYP3A4',L('细胞色素 P450 3A4 · 人','Cytochrome P450 3A4 · Human'),
  L('药物代谢酶','Drug-metabolizing enzyme'),
  L('5TE8 显示咪达唑仑在 CYP3A4 催化口袋的结合。此结构用于研究代谢及相互作用。','5TE8 shows midazolam bound in the CYP3A4 catalytic pocket and supports studies of metabolism and interactions.'),
  [['UniProt','P08684']],[uniprot('P08684'),pdb('5TE8')],[]));
records.push(record('hnmt','targets','HNMT',L('组胺 N-甲基转移酶 · 人','Histamine N-methyltransferase · Human'),
  L('代谢酶 · 探索性药理','Metabolic enzyme · Exploratory pharmacology'),
  L('组胺代谢酶。苯海拉明结合结构与离体酶抑制属于次级药理证据。','Histamine-metabolizing enzyme. The diphenhydramine complex and in vitro enzyme inhibition provide secondary pharmacology evidence.'),
  [['UniProt','P50135']],[uniprot('P50135'),pdb('2AOT')],['histamine-signal']));
records.push(
  record('cacna2d1','targets','α₂δ-1',L('电压门控钙通道辅助亚基 · CACNA2D1 · 人','Voltage-gated calcium channel auxiliary subunit · CACNA2D1 · Human'),
    L('钙通道辅助亚基','Calcium channel auxiliary subunit'),
    L('可对照兔 α₂δ-1 同源体的加巴喷丁结合结构，位点编号按物种区分。','Compare the gabapentin-bound rabbit α₂δ-1 ortholog. Residue numbering is species-specific.'),
    [['UniProt','P54289']],[uniprot('P54289')],['rabbit-cacna2d1']),
  record('rabbit-cacna2d1','targets','α₂δ-1 (rabbit)',L('电压门控钙通道辅助亚基 · 家兔','Voltage-gated calcium channel auxiliary subunit · Rabbit'),
    L('钙通道辅助亚基','Calcium channel auxiliary subunit'),
    L('8FD7 的配体结合口袋位于家兔 α₂δ-1 链 D。复合物中成孔亚基 Caᵥ1.2 来自人。','The ligand pocket in 8FD7 is in rabbit α₂δ-1 chain D. The pore-forming Caᵥ1.2 subunit is human.'),
    [['UniProt','P13806']],[uniprot('P13806'),pdb('8FD7')],['cacna2d1'])
);
records.push(
  record('drd1','targets','D₁R',L('多巴胺 D₁ 受体 · DRD1 · 人','Dopamine D₁ receptor · DRD1 · Human'),classA,
    L('D₁ 样受体家族成员，罗替戈汀复合物捕获了 Gₛ 耦联状态。','A D₁-like receptor. The rotigotine complex captures a Gₛ-coupled state.'),
    [['UniProt','P21728']],[uniprot('P21728'),pdb('8IRR')],['dopamine-receptors']),
  record('drd2','targets','D₂R',L('多巴胺 D₂ 受体 · DRD2 · 人','Dopamine D₂ receptor · DRD2 · Human'),classA,
    L('D₂ 样受体家族成员，存在长、短剪接异构体。重组受体数据按异构体和实验系统记录。','A D₂-like receptor with long and short splice isoforms. Recombinant receptor data are indexed by isoform and assay system.'),
    [['UniProt','P14416']],[uniprot('P14416'),article('Coldwell et al. · Br J Pharmacol 1999','10455328')],['dopamine-receptors']),
  record('drd3','targets','D₃R',L('多巴胺 D₃ 受体 · DRD3 · 人','Dopamine D₃ receptor · DRD3 · Human'),classA,
    L('D₂ 样受体家族成员。人 D₃R–Gᵢ 结构提供激动剂结合和耦联的实验依据。','A D₂-like receptor. Human D₃R–Gᵢ structures provide experimental evidence for agonist binding and coupling.'),
    [['UniProt','P35462']],[uniprot('P35462'),pdb('7CMU')],['dopamine-receptors']),
  record('drd4','targets','D₄R',L('多巴胺 D₄ 受体 · DRD4 · 人','Dopamine D₄ receptor · DRD4 · Human'),classA,
    L('D₂ 样受体家族成员。复合物位点沿用构建体作者编号。','A D₂-like receptor. Complex contacts use construct author numbering.'),
    [['UniProt','P21917']],[uniprot('P21917'),pdb('8IRU')],['dopamine-receptors']),
  record('drd5','targets','D₅R',L('多巴胺 D₅ 受体 · DRD5 · 人','Dopamine D₅ receptor · DRD5 · Human'),classA,
    L('D₁ 样受体家族成员，罗替戈汀复合物捕获了 Gₛ 耦联状态。','A D₁-like receptor. The rotigotine complex captures a Gₛ-coupled state.'),
    [['UniProt','P21918']],[uniprot('P21918'),pdb('8IRV')],['dopamine-receptors']),
  record('dopamine-receptors','pathways',L('多巴胺受体信号','Dopamine receptor signaling'),L('D₁ 样与 D₂ 样受体 · 不宁腿综合征药理','D₁-like and D₂-like receptors · RLS pharmacology'),pathway,
    L('对照 D₁ 样受体的 Gₛ 复合物和 D₂ 样受体的 Gᵢ 复合物。不宁腿综合征的受体药理与临床终点分开记录。','Compare Gₛ complexes of D₁-like receptors with Gᵢ complexes of D₂-like receptors. Receptor pharmacology and clinical outcomes in restless legs syndrome are recorded separately.'),
    [],[article('Structural genomics of dopamine receptors · Cell Research 2023','37221270'),article('AASM · RLS guideline 2025','39324694')],['drd1','drd2','drd3','drd4','drd5'])
);
records.push(record('ddat','targets','dDAT',L('多巴胺转运体 · 黑腹果蝇','Dopamine transporter · Drosophila melanogaster'),monoamineTransporter,
  L('果蝇 DAT 构建体的底物结合结构用于比较转运体中央位点。残基编号沿用 PDB 作者编号。','Substrate-bound structures of the fly DAT construct support comparison of the transporter central site. Residues use PDB author numbering.'),
  [['UniProt','A0A0B4KEX2']],[uniprot('A0A0B4KEX2'),pdb('4XP9')],['monoamine-reuptake']));
const outwardOpen=L('外向开放态','Outward-open');
const oxybateHubStudy=article('Leurs et al. · PNAS 2021','34330837');
const oxybateGababStudy=article('Lingenhoehl et al. · Neuropharmacology 1999','10587082');
const modafinilTransportStudy=article('Madras et al. · JPET 2006','16885432');
records.push(
  {
    ...record('dat','targets','DAT',L('多巴胺转运体 · SLC6A3 · 人','Dopamine transporter · SLC6A3 · Human'),monoamineTransporter,
      L('介导多巴胺再摄取。可关联转运抑制、人体 PET 和其他配体结合的结构参照。','Mediates dopamine reuptake. Browse transport inhibition, human PET evidence and a structural reference with another ligand.'),
      [['UniProt','Q01959']],[uniprot('Q01959'),pdb('9EO4')],['monoamine-reuptake']),
    structureReferences:[{id:'9EO4',ligand:L('可卡因','Cocaine'),state:outwardOpen,method:cryo,resolution:'2.66'}]
  },
  {
    ...record('net','targets','NET',L('去甲肾上腺素转运体 · SLC6A2 · 人','Norepinephrine transporter · SLC6A2 · Human'),monoamineTransporter,
      L('介导去甲肾上腺素再摄取。结构参照为托莫西汀结合的外向开放态。','Mediates norepinephrine reuptake. The structural reference is the atomoxetine-bound outward-open state.'),
      [['UniProt','P23975']],[uniprot('P23975'),pdb('8ZP2')],['monoamine-reuptake']),
    structureReferences:[{id:'8ZP2',ligand:L('托莫西汀','Atomoxetine'),state:outwardOpen,method:cryo,resolution:'2.40'}]
  },
  {
    ...record('gabab','targets','GABA_B',L('代谢型 GABA 受体 · GABBR1/GABBR2 · 人','Metabotropic GABA receptor · GABBR1/GABBR2 · Human'),
      L('C 类 GPCR 异源二聚体','Class C GPCR heterodimer'),
      L('GABBR1 与 GABBR2 组成的代谢型受体。可对照重组受体功能实验与巴氯芬结合结构。','A metabotropic receptor formed by GABBR1 and GABBR2. Compare recombinant receptor functional evidence with a baclofen-bound structure.'),
      [['UniProt','GABBR1 Q9UBS5 · GABBR2 O75899']],[uniprot('Q9UBS5'),uniprot('O75899'),pdb('7C7Q'),oxybateGababStudy],['gabab-signal']),
    structureReferences:[{id:'7C7Q',ligand:L('巴氯芬与 BHFF','Baclofen and BHFF'),state:L('激动剂与正变构调节剂结合态','Agonist- and positive allosteric modulator-bound'),method:cryo,resolution:'3.00'}]
  },
  {
    ...record('camk2a','targets','CaMKIIα',L('钙/钙调蛋白依赖性蛋白激酶 II α · CAMK2A · 人','Calcium/calmodulin-dependent protein kinase II α · CAMK2A · Human'),
      L('探索性靶标 · 激酶','Exploratory target · Kinase'),
      L('GHB 相关研究报告 hub 结构域的体外配体结合和热稳定性变化。其与发作性睡病疗效的关系待验证。','GHB studies report in vitro ligand binding and thermal stabilization of the hub domain. Its role in narcolepsy efficacy remains to be established.'),
      [['UniProt','Q9UQM7']],[uniprot('Q9UQM7'),oxybateHubStudy,pdb('7REC')],[]),
    structureReferences:[{id:'7REC',ligand:'5-HDC',state:L('人 hub 结构域 · 六位点突变构建','Human hub domain · Six substitutions'),method:xray,resolution:'2.20'}]
  },
  record('monoamine-reuptake','pathways',L('儿茶酚胺再摄取','Catecholamine reuptake'),'Dopamine → DAT · Norepinephrine → NET',pathway,
    L('DAT 与 NET 分别参与多巴胺和去甲肾上腺素再摄取。药物资料按转运体、检测方法和实验系统记录。','DAT and NET contribute to dopamine and norepinephrine reuptake, respectively. Drug evidence is indexed by transporter, assay and experimental system.'),
    [],[uniprot('Q01959'),uniprot('P23975'),modafinilTransportStudy],['dat','net']),
  record('gabab-signal','pathways',L('GABA_B 受体信号','GABA_B receptor signaling'),L('GABA → GABBR1/GABBR2','GABA → GABBR1/GABBR2'),pathway,
    L('GABA_B 是代谢型受体。GHB 的弱部分激动作用来自重组受体电生理，临床疗效机制另列在羟丁酸钠档案。','GABA_B is a metabotropic receptor. Evidence for weak partial agonism by GHB comes from recombinant receptor electrophysiology. The sodium oxybate dossier describes clinical mechanism separately.'),
    [],[pdb('7C7Q'),oxybateGababStudy],['gabab'])
);
systems.push(
  {id:'monoamines',title:L('儿茶酚胺系统','Catecholamine system'),pathway:'monoamine-reuptake',circuits:[]},
  {id:'gabab',title:L('GABA_B 信号','GABA_B signaling'),pathway:'gabab-signal',circuits:[]},
  {id:'dopamine-receptor-system',title:L('多巴胺受体系统','Dopamine receptor system'),pathway:'dopamine-receptors',circuits:[]},
  {id:'incretin-osa',title:L('肥胖相关阻塞性睡眠呼吸暂停','Obesity-related obstructive sleep apnea'),pathway:'incretin-osa',circuits:[]},
  {id:'opioid-rls',title:L('阿片受体与不宁腿综合征','Opioid receptors and restless legs syndrome'),pathway:'opioid-rls',circuits:[]},
  {id:'ventilation-control',title:L('通气控制与睡眠呼吸暂停','Ventilatory control and sleep apnea'),pathway:'ventilation-control',circuits:[]}
);

records.push(record('gabaa-a1b3g2','targets','GABAₐ α1β3γ2L',
  L('GABRA1 · GABRB3 · GABRG2 · 人源受体构建体','GABRA1 · GABRB3 · GABRG2 · Human receptor construct'),
  L('配体门控离子通道','Ligand-gated ion channel'),
  L('α1β3γ2L 亚型与阿普唑仑、GABA 和 Mb38 的实验复合物。','Experimental complex of the α1β3γ2L subtype with alprazolam, GABA and Mb38.'),
  [['UniProt','α1 P14867 · β3 P28472 · γ2 P18507']],
  [uniprot('P14867'),uniprot('P28472'),uniprot('P18507'),pdb('6HUO')],['gaba-signal']));
records.push(record('gabaa-family','targets',L('GABAₐ 受体家族','GABAₐ receptor family'),
  L('按受体家族归档','Family-level record'),L('配体门控离子通道','Ligand-gated ion channels'),
  L('用于记录尚无明确亚基组合的药理证据。已核实的亚基组合和结构在对应的靶标记录中单列。',
    'Records pharmacology when the subunit composition is unspecified. Verified assemblies and structures have dedicated target records.'),
  [],[source('IUPHAR/BPS · GABAₐ receptors','https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=72'),pdb('8DD2')],
  ['gaba','gaba-signal']));
records.push(
  record('ca2','targets','CA II',L('碳酸酐酶 II · CA2 · 人','Carbonic anhydrase II · CA2 · Human'),
    L('锌依赖性酶','Zinc-dependent enzyme'),
    L('催化 CO₂ 的可逆水合。人 CA II 有乙酰唑胺活性位点的高分辨率实验结构。','Catalyzes reversible CO₂ hydration. A high-resolution human CA II structure captures acetazolamide at the catalytic site.'),
    [['UniProt','P00918']],[uniprot('P00918'),pdb('3HS4')],['ventilation-control']),
  record('ventilation-control','pathways',L('通气控制与睡眠呼吸暂停','Ventilatory control and sleep apnea'),
    L('酸碱调节 · 化学感受与通气','Acid–base balance · Chemosensitivity and ventilation'),pathway,
    L('乙酰唑胺抑制碳酸酐酶，增加肾脏碳酸氢盐排泄，可通过改变酸碱状态影响通气调节。人 CA II 晶体结构描述靶标结合，临床通气效应可能涉及多种酶亚型及生理部位。','Acetazolamide inhibits carbonic anhydrases and increases renal bicarbonate excretion. Altered acid–base balance can affect ventilatory control. The human CA II structure captures target binding, while the clinical effect may involve multiple isoforms and physiological compartments.'),
    [],[source('PMDA · Diamox','https://www.pmda.go.jp/PmdaSearch/bookSearch/01/04987086231190'),article('Javaheri · PMID 16239622','16239622')],['ca2'])
);
