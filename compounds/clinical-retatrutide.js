{
  const primary = article('Grunstein et al. · NEJM 2026 · TRIUMPH-1-OSA / TRIUMPH-2-OSA','42904878');
  const structuresPaper = source('Cell Discovery 2024 · Retatrutide receptor complexes','https://doi.org/10.1038/s41421-024-00700-0');
  const identity = source('WHO INN · Retatrutide','https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-%28inn%29/pl128.pdf?download=true&sfvrsn=889fe54b_3');
  const metadata = [
    ['8YW3','glp1r','GLP-1R','2.68',30,'F'],
    ['8YW4','gipr','GIPR','3.26',27,'F'],
    ['8YW5','gcgr','GCGR','2.84',30,'A']
  ];
  records.push(record('gcgr','targets','GCGR',L('胰高血糖素受体 · 人','Glucagon receptor · Human'),incretinReceptor,
    L('B1 类 GPCR。可与 GLP-1R、GIPR 比较 Retatrutide 的识别；各受体对 OSA 临床结果的贡献有待独立检验。',
      'A class B1 GPCR. Retatrutide recognition can be compared with GLP-1R and GIPR. Individual contributions to the OSA clinical outcome require separate evidence.'),
    [['UniProt','P47871']],[uniprot('P47871'),pdb('8YW5'),structuresPaper],['incretin-osa']));
  const complexes=metadata.map(([id,target,name,resolution,length,asymId])=>({
    id,target,molecule:'retatrutide',method:cryo,resolution,chain:'R',code:'PEPTIDE',
    subtitle:name+'–retatrutide–Gₛ',
    state:L('激动剂结合活化态','Active agonist-bound state'),
    construct:L('人 '+name+'，受体作者链 R；Retatrutide 作者链 P（1–'+length+'）',
      'Human '+name+', receptor author chain R; retatrutide author chain P (1–'+length+')'),
    ligandInstances:{P:{label:'Retatrutide',asymId}},
  }));
  const study = (id,title,updated,end,protocol,diabetes) => ({
    id,title,phase:'III',status:'COMPLETED',updated,protocol,
    focus:id==='NCT05929066'?'index':'additional',
    sponsor:'Eli Lilly and Company',allocation:'RANDOMIZED',masking:'DOUBLE',age:[],
    designNote:L('登记号对应整个主试验；本页结果表仅使用 OSA 子研究人群。主试验完成日期 '+end+'。',
      'The ID covers the master trial. The outcome tables on this page use the OSA substudy populations only. Master study completion: '+end+'.'),
    conditions:['Moderate-to-severe obstructive sleep apnea',diabetes],
    primaryOutcomes:[{measure:'Change in apnea–hypopnea index (AHI), 9 mg and 12 mg comparisons',timeFrame:'Baseline to week 80'}],
    interventions:['Retatrutide 4 mg, 9 mg or 12 mg subcutaneously once weekly','Placebo'],
    hasResults:false,reference:trial(id)
  });
  const cols = [L('试验剂量','Trial dose'),L('组内 AHI 变化','Within-arm AHI change'),
    L('相对安慰剂差值（95% CI）','Difference vs placebo (95% CI)'),
    L('ITT 相对安慰剂差值（95% CI）','ITT difference vs placebo (95% CI)')];
  const outcomes = (title,id,pop,n,baseline,weight,rows) => ({
    chapter:'clinical',title,fields:[
      [L('随机人群','Randomized population'),pop],
      [L('OSA 子研究随机人数','OSA substudy randomized'),n],
      [L('基线平均 AHI','Mean baseline AHI'),baseline],
      [L('第 80 周体重变化','Week 80 weight change'),weight]
    ],table:{columns:cols,rows},
    note:L('AHI 单位为次/小时。主分析采用混合治疗估计策略，另列意向治疗（ITT）估计。9 mg 和 12 mg 为主要终点比较，4 mg 为关键次要比较。体重采用治疗方案估计策略。',
      'AHI is in events/hour. The primary analysis uses a hybrid-treatment estimand; intention-to-treat (ITT) estimates are shown separately. The 9 mg and 12 mg comparisons are primary, and 4 mg is a key secondary comparison. Weight uses the treatment-regimen estimand.'),
    sources:[primary,trial(id)]
  });
  registerClinicalCandidate({
  "keyReferences": [{"citation": "Grunstein RR, Somers VK, Azarbarzin A, Malhotra A, Sands SA, Lucey BP, et al. Retatrutide Once Weekly for Treatment of Obstructive Sleep Apnea. N Engl J Med. 2026;", "pmid": "42904878", "url": "https://doi.org/10.1056/NEJMoa2611477"}],
    id:'retatrutide',name:'Retatrutide',aliases:'LY3437943 / LY-3437943',
    kind:'single',category:'breathing',phase:'III',status:'COMPLETED',reviewed:'2026-11-06',
    condition:L('超重或肥胖成人的中重度阻塞性睡眠呼吸暂停','Moderate-to-severe obstructive sleep apnea in adults with overweight or obesity'),
    summary:L('三受体激动肽。两项 OSA III 期子研究已完成并发表；收录人 GLP-1R、GIPR、GCGR 三套实验复合物。',
      'A triple receptor agonist peptide. Two completed Phase III OSA substudies have published results. Three human receptor complexes are indexed.'),
    otherIndication:false,identity,identityFields:[
      [L('分子形式','Modality'),L('39 残基脂化肽，C 端酰胺化','39-residue lipidated peptide with C-terminal amidation')],
      [L('母体字母序列','Parent-letter sequence'),'YAQGTFTSDYSILLDKKAQAAFIEYLLEGGPSSGAPPPS'],
      [L('已知修饰','Defined modifications'),'Aib2 · αMeLeu13 · Lys17–linker–C20 diacid · Aib20 · Ser39–NH₂'],
      ['CAS','2381089-83-2'],['UNII','NOP2Y096GV']
    ],
    targets:['glp1r','gipr','gcgr'],system:'incretin-osa',
    references:[identity,source('PubChem · SID 528343961','https://pubchem.ncbi.nlm.nih.gov/substance/528343961'),
      structuresPaper,primary,...metadata.map(([id])=>pdb(id))],
    studies:[
      study('NCT05929066','TRIUMPH-1 master protocol · nested OSA substudy','2026-08-21','2026-04-30','J1I-MC-GSA1','Without type 2 diabetes'),
      study('NCT05929079','TRIUMPH-2 master protocol · nested OSA substudy','2026-07-30','2026-06-16','J1I-MC-GSA2','With type 2 diabetes')
    ],
    evidenceSections:[
      {chapter:'pharmacology',title:L('三受体药理','Triple-receptor pharmacology'),fields:[
        [L('分子药理','Molecular pharmacology'),L('GLP-1R、GIPR 和 GCGR 激动。原始研究以受体复合物、突变和 cAMP 实验解析三受体识别。',
          'Agonism at GLP-1R, GIPR and GCGR. The primary study examined recognition using receptor complexes, mutagenesis and cAMP assays.')],
        [L('解读范围','Scope'),L('受体药理与肥胖相关 OSA 临床终点分层。三套复合物无法量化各受体对人体 AHI 改善的贡献。',
          'Receptor pharmacology is indexed separately from clinical outcomes in obesity-related OSA. These complexes do not quantify each receptor’s contribution to human AHI changes.')]
      ],sources:[structuresPaper]},
      outcomes('TRIUMPH-1-OSA · NCT05929066','NCT05929066',L('中重度 OSA，BMI ≥27 kg/m²，无 2 型糖尿病','Moderate-to-severe OSA, BMI ≥27 kg/m², without type 2 diabetes'),
        243,'58.6','−12.5% to −22.2% vs −4.8%',[
        ['4 mg','−22.9','−13.0 [−23.0, −3.0]','−13.2 [−22.6, −3.9]'],
        ['9 mg','−34.3','−24.4 [−34.1, −14.7]','−24.7 [−34.1, −15.3]'],
        ['12 mg','−31.7','−21.9 [−32.2, −11.5]','−22.5 [−31.9, −13.1]'],
        [L('安慰剂','Placebo'),'−9.9','—','—']]),
      outcomes('TRIUMPH-2-OSA · NCT05929079','NCT05929079',L('中重度 OSA，BMI ≥27 kg/m²，合并 2 型糖尿病','Moderate-to-severe OSA, BMI ≥27 kg/m², with type 2 diabetes'),
        448,'55.9','−12.1% to −18.5% vs −5.6%',[
        ['4 mg','−19.2','−8.9 [−15.9, −2.0]','−8.8 [−15.8, −1.7]'],
        ['9 mg','−24.7','−14.4 [−21.6, −7.2]','−13.9 [−21.3, −6.6]'],
        ['12 mg','−25.4','−15.1 [−22.5, −7.7]','−15.0 [−22.5, −7.4]'],
        [L('安慰剂','Placebo'),'−10.3','—','—']]),
      {chapter:'safety',title:L('OSA 子研究安全性','Safety in the OSA substudies'),fields:[
        [L('常见不良事件类别','Most common adverse events'),L('论文摘要报告胃肠道不良事件最常见。','The published abstract reports that gastrointestinal adverse events were most common.')],
        [L('证据范围','Evidence scope'),L('本档案依据可核到的论文摘要和登记。OSA 人群的分组发生率、严重事件和停药率待核对全文及补充表。','The indexed evidence is from the accessible article abstract and trial registrations. Arm-level adverse events, serious events and discontinuations in the OSA population await verification against the full paper and supplements.')]
      ],sources:[primary]}
    ],
  },complexes);
}

function renderRetatrutideComparison() {
  const rows = retatrutideComparison.map(c=>{
    const site=pocketById[c.pdb+'-P'];
    return [recLink(c.target),recLink(c.pdb),c.resolution+' Å','1–'+c.modeled,
      [3.5,4,4.5].map(x=>site.thresholdResidues[x.toFixed(1)].length).join(' / '),c.commonCount];
  });
  const residues = 'YAQGTFTSDYSILLDKKAQAAFIEYLLEGG';
  const matrix = Array.from(residues,(letter,index)=>{
    const n=index+1;
    const label=({2:'Aib',13:'αMeLeu',17:'Lys',20:'Aib'})[n] || letter;
    return [n+' · '+label,...retatrutideComparison.map(c=>{
      if(n>c.modeled)return esc(say('未建模','Unmodeled'));
      const hits=c.matrix[n];
      return hits?.length?hits.map(([res,d,ra,pa])=>esc(res+' '+ra+' ↔ '+pa+' · '+d.toFixed(2)+' Å')).join('<br>'):'—';
    })];
  });
  return panel(L('三受体的 Retatrutide 接触比较','Retatrutide contacts across three receptors'),
    paragraph(L('用三套沉积的实验坐标统一重算。受体取作者链 R，肽取作者链 P。按最近重原子距离计数，同时列出三套结构共同解析的肽位点 1–27。',
      'Contacts were recomputed from the three deposited experimental models using receptor author chain R and peptide author chain P. Counts use minimum heavy-atom distances and include a comparison restricted to peptide positions 1–27, which are modeled in all three structures.'))+
    table([L('靶标','Target'),'PDB',L('分辨率','Resolution'),L('已建模肽位点','Modeled peptide positions'),
      L('受体残基数（3.5 / 4.0 / 4.5 Å）','Receptor residues (3.5 / 4.0 / 4.5 Å)'),
      L('共同区间 1–27（4.0 Å）','Common range 1–27 (4.0 Å)')],rows)+
    paragraph(L('肽 Tyr1 邻近 GLP-1R Gln234 和 GIPR Gln224，最短距离分别为 2.91 和 3.05 Å；在 GCGR 模型中，Tyr1 最近的受体残基为 Ile235（3.24 Å）。GIPR 的覆盖范围和分辨率与其余两套不同。距离和接触数可描述模型差异，不能用于推断亲和力排序。三套模型均未解析 Lys17 的脂化侧链。',
      'Peptide Tyr1 is proximal to GLP-1R Gln234 and GIPR Gln224 at 2.91 and 3.05 Å. Its nearest GCGR residue is Ile235 at 3.24 Å. GIPR differs in coverage and resolution. Distances and counts describe the models and do not rank affinity. The Lys17 lipid conjugate is unresolved in all three models.'),'muted')+
    '<details class="clinical-protocol"><summary>'+say('展开逐肽位点互作矩阵（4.0 Å）','Expand peptide-position contact matrix (4.0 Å)')+'</summary>'+
    table([L('肽位点','Peptide position'),'GLP-1R · 8YW3','GIPR · 8YW4','GCGR · 8YW5'],matrix)+'</details>');
}
