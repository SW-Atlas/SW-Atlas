const sections = {
  molecules:{
    title:L('药物与分子','Drugs & molecules'), number:'01', eyebrow:'DRUG & LIGAND PROFILES',
    short:L('化学身份、药理、药代及睡眠研究证据','Chemical identity, pharmacology, pharmacokinetics and sleep studies'),
    description:L('从化学结构和药物身份进入，查询靶标药理、人体药代、临床前研究、临床睡眠终点与来源。','Start from chemical identity and structure to explore target pharmacology, human pharmacokinetics, preclinical studies and clinical sleep endpoints.')
  },
  targets:{
    title:L('分子靶标','Molecular targets'), number:'02', eyebrow:'STRUCTURES & BINDING SITES',
    short:L('靶标概况、实验结构、作用位点与残基比较','Target profiles, experimental structures, binding sites and residue comparisons'),
    description:L('按受体、转运体、激酶或复合物检索。靶标页汇集实验结构、实际配体、位点残基与候选区域。','Search receptors, transporters, kinases or complexes. Target pages organize experimental structures, modeled ligands, site residues and candidate regions.')
  },
  regulation:{
    title:L('睡眠–觉醒调控','Sleep–wake regulation'), number:'03', eyebrow:'PATHWAYS & CIRCUITS',
    short:L('在交互图中追溯分子、靶标与神经环路证据','Explore molecules, targets and circuit evidence in interactive maps'),
    description:L('从调控系统进入，点选药物、靶标与环路关系，追溯实验结构及原始研究。物种、干预条件和测量终点随证据分别呈现。','Explore each system through drugs, targets and circuit relationships, then follow the evidence to structures and primary studies. Species, interventions and measured endpoints remain specific to each study.')
  }
};
const dataDictionary = [
  ['molecules',[
    [L('基本信息与化学','Identity and chemistry'),L('通用名、别名、分子类别、分子式、立体化学或序列、PubChem/CCD ID、二维图。','Generic name, synonyms, molecule type, formula, stereochemistry or sequence, PubChem/CCD ID and 2D depiction.')],
    [L('靶标与药理','Targets and pharmacology'),L('靶标及物种、作用方向、结合或功能实验、指标、单位、实验系统与来源。复合物链接指向靶标页。','Target and species, action, binding or functional assay, metric, unit, system and source. Complex links open the target page.')],
    [L('药代与临床前','PK and preclinical studies'),L('受试者或物种、构建或模型、剂量与给药、暴露及药代指标、行为学或 EEG/EMG 测量指标、对照和来源。','Participants or species, construct or model, dose and route, exposure and PK metrics, behavioral or EEG/EMG readouts, controls and source.')],
    [L('临床研究与终点','Clinical studies and endpoints'),L('试验编号、组别与研究剂量、样本量、PSG、日记、MWT、ESS 等终点、时间点、效应量与统计量。','Trial ID, arms and study doses, sample sizes, endpoints such as PSG, diary, MWT or ESS, time points, effects and statistics.')],
    [L('用法用量','Labeled dosage and administration'),L('按监管地区、适应证、制剂、人群及说明书版本收录。分开记录制剂规格、说明书起始剂量与上限，以及试验各组的实际研究剂量。','Curate by jurisdiction, indication, formulation, population and label version. Record formulation strengths, labeled starting and maximum doses, and trial-arm doses separately.')],
    [L('安全性与相互作用','Safety and interactions'),L('常见不良反应按术语、剂量组、观察期、样本量与安慰剂发生率记录。重点警示、禁忌和相互作用单独引用说明书章节。','Record common adverse reactions by term, dose arm, follow-up, sample size and placebo incidence. Cite label sections separately for major warnings, contraindications and interactions.')],
    [L('扩展字段','Extensions'),L('可追溯的临床亚组、药物基因组学、真实世界证据及再定位研究。按研究和条件扩展。','Traceable clinical subgroups, pharmacogenomics, real-world evidence and repurposing studies, added by study and condition.')]
  ]],
  ['targets',[
    [L('靶标概况','Target overview'),L('基因符号、UniProt、物种、蛋白家族。复合物记录亚基、计量和参考序列。','Gene symbol, UniProt, species and protein family. Complexes include subunits, stoichiometry and reference sequences.')],
    [L('实验结构','Experimental structures'),L('PDB/EMDB、方法、分辨率、构建和突变、状态、作者链、结合配体、坐标与验证报告。','PDB/EMDB, method, resolution, construct and mutations, state, author chain, bound ligands, coordinates and validation report.')],
    [L('同靶标的结构参照','Structural references for the target'),L('其他配体的实验结构单独列示，保留实际配体、构象或构建、分辨率及 PDB 链接。','Experimental structures with other ligands are listed separately with the modeled ligand, state or construct, resolution and PDB link.')],
    [L('作用位点','Binding sites'),L('结构和配体实例、残基号映射、距离或其他注释规则、实验与预测的证据状态。候选区域独立标记。','Structure and ligand instance, residue mapping, distance or other annotation rule, and experimental or predictive evidence status. Candidate regions are labeled separately.')],
    [L('研究关联','Research links'),L('已知配体与作用方向、功能和突变证据、调控系统。多构象比较保留相同筛选条件。','Known ligands and actions, functional and mutagenesis evidence, and regulation systems. Multi-conformation comparisons use consistent selection rules.')]
  ]],
  ['regulation',[
    [L('分子通路','Molecular pathway'),L('内源性信号、靶标、分子事件及方向、实验系统、测量指标和文献。','Endogenous signal, target, molecular event and direction, experimental system, readout and citation.')],
    [L('神经环路','Neural circuit'),L('物种、脑区与图谱、细胞类型、投射、干预与对照、睡眠状态、表型和文献。','Species, brain region and atlas, cell type, projection, intervention and control, sleep state, phenotype and citation.')],
    [L('跨层关系','Cross-level relationship'),L('标明关系属于靶标表达、解剖连接、细胞群操控、受体干预还是区域救援。','Record whether the link reflects target expression, anatomical connectivity, cell-population perturbation, receptor intervention or regional rescue.')]
  ]]
];
