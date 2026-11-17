{
  const label=source('FDA · Foundayo · 2026 US label','https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220934s003lbl.pdf');
  const structure=article('Kawai et al. · PNAS 2020 · 6XOX','33177239');
  const combo=source('7E14 · primary structure deposition', 'https://www.rcsb.org/structure/7E14');
  const registry=trial('NCT06649045');
  const design=article('Malhotra et al. · ATTAIN-OSA design and baseline · Table 2','42383207');
  const sponsor=source('Lilly · ATTAIN-OSA','https://trials.lilly.com/en-US/trial/547896');
  const identity=ccd('V6G');
  const complexes=[
    ['6XOX','3.10','G',L('V6G 激动剂结合态','V6G-bound active state')],
    ['7E14','2.90','F',L('V6G 与 Compound 2 共结合','V6G and Compound 2 cobound')]
  ].map(([id,resolution,asymId,state])=>({id,target:'glp1r',molecule:'orforglipron',method:cryo,resolution,
    chain:'R',code:'V6G',subtitle:'GLP-1R–orforglipron–Gₛ',state,
    construct:L('工程化人 GLP-1R · 作者链 R；V6G · R501','Engineered human GLP-1R · author chain R; V6G · R501'),
    ligandInstances:{R501:{label:'Orforglipron',asymId}}}));
  registerClinicalCandidate({
  "keyReferences": [{"citation": "Kawai T, Sun B, Yoshino H, Feng D, Suzuki Y, Fukazawa M, et al. Structural basis for GLP-1 receptor activation by LY3502970, an orally active nonpeptide agonist. Proc Natl Acad Sci U S A. 2020;117(47):29959-29967.", "pmid": "33177239", "url": "https://doi.org/10.1073/pnas.2014879117"}, {"citation": "Malhotra A, Gottlieb DJ, Kundel V, Woehrle H, Chakladar S, Firmino Goncalves L, et al. Orforglipron for the treatment of moderate-to-severe obstructive sleep apnea in adults with obesity or overweight: Study design and baseline characteristics of ATTAIN-OSA, a phase 3 trial. Contemp Clin Trials Commun. 2026;52:101660.", "pmid": "42383207", "url": "https://doi.org/10.1016/j.conctc.2026.101660"}],
    id:'orforglipron',name:'Orforglipron',aliases:'LY3502970 / OWL833 / Foundayo',kind:'single',category:'breathing',
    phase:'III',status:'COMPLETED',reviewed:'2026-11-06',otherIndication:true,
    condition:L('肥胖或超重成人的中重度阻塞性睡眠呼吸暂停','Moderate-to-severe obstructive sleep apnea in adults with obesity or overweight'),
    summary:L('口服非肽 GLP-1R 激动剂。OSA III 期主试验已完成；美国获批适应证为长期体重管理。',
      'An oral nonpeptide GLP-1R agonist. The Phase III OSA master trial is complete. Its US approved indication is long-term weight management.'),
    identity,chemistry:{depiction:'assets/orforglipron.svg',depictionSource:identity,sources:[identity],fields:[
      ['PubChem CID','137319706'],['CAS','2212020-52-3'],
      [L('IUPAC 名称','IUPAC name'),"3-[(1S,2S)-1-[5-[(4S)-2,2-dimethyloxan-4-yl]-2-[(4S)-2-(4-fluoro-3,5-dimethylphenyl)-3-[3-(4-fluoro-1-methylindazol-5-yl)-2-oxoimidazol-1-yl]-4-methyl-6,7-dihydro-4H-pyrazolo[4,3-c]pyridine-5-carbonyl]indol-1-yl]-2-methylcyclopropyl]-4H-1,2,4-oxadiazol-5-one"],
      [L('同义词','Synonyms'),'LY3502970 · LY-3502970'],
      ['KEGG ID','D12536'], ["PharmGKB ID","PA166416241"],
      ['CCD','V6G'],['InChIKey','USUWIEBBBWHKNI-KHIFEHGGSA-N'],
      [L('分子式','Molecular formula'),'C₄₈H₄₈F₂N₁₀O₅'],
      ['SMILES',"C[C@H]1C[C@]1(C2=NOC(=O)N2)N3C4=C(C=C(C=C4)[C@H]5CCOC(C5)(C)C)C=C3C(=O)N6CCC7=NN(C(=C7[C@@H]6C)N8C=CN(C8=O)C9=C(C1=C(C=C9)N(N=C1)C)F)C1=CC(=C(C(=C1)C)F)C"]
    ],links:[{label:'ChEMBL CHEMBL4446782',url:'https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4446782/'},{label:'KEGG D12536',url:'https://www.kegg.jp/entry/D12536'}]},
    targets:['glp1r'],system:'incretin-osa',references:[label,structure,combo,sponsor,pdb('6XOX'),design],
    studies:[{
      id:'NCT06649045',title:'ATTAIN-OSA · GZRA master protocol (GZ01 and GZ02)',phase:'III',status:'COMPLETED',updated:'2026-09-14',
      focus:'index',protocol:'J5P-MC-GZRA',sponsor:'Eli Lilly and Company',allocation:'RANDOMIZED',masking:'DOUBLE',age:['18 Years',''],
      enrollment:{count:712,type:'ACTUAL'},conditions:['Obstructive Sleep Apnea','Obesity','Overweight'],
      designNote:L('GZ01 纳入无法或不愿使用 PAP 的受试者，GZ02 纳入计划继续 PAP 的受试者。登记记录主试验于 2026-07-30 完成。',
        'GZ01 enrolled participants unable or unwilling to use PAP. GZ02 enrolled participants planning to continue PAP. The registry records master trial completion on 2026-07-30.'),
      primaryOutcomes:[{measure:'Change from baseline in apnea–hypopnea index (AHI)',timeFrame:'Baseline to week 52'}],
      interventions:['Orforglipron','Placebo'],hasResults:false,reference:registry
    }],
    structureEvidence:{
      title:L('两套 GLP-1R 复合物的条件与接触','GLP-1R complexes and contact comparisons'),
      summary:L('6XOX 与 7E14 均核对到作者链 R 的 V6G 501。在 4.0 Å 阈值下分别为 19 和 23 个受体邻近残基。6XOX 中 Lys197 NZ 与配体 O02 最近距离 2.61 Å。7E14 同时含 Compound 2，因此作为共结合条件展示；接触数差异可描述模型，不能单独归因于 Compound 2 或用于推断亲和力。原研究以功能实验支持人 GLP-1R Trp33 对响应的重要性。',
        'Both 6XOX and 7E14 contain V6G at author-chain R residue 501. At 4.0 Å, 19 and 23 receptor residues are proximal, respectively. In 6XOX, Lys197 NZ is 2.61 Å from ligand O02. The 7E14 model also contains Compound 2. Contact counts describe the models; they cannot isolate the effect of Compound 2 or rank affinity. Functional assays in the primary study support the importance of human GLP-1R Trp33 for response.'),
      sources:[structure,pdb('6XOX'),combo]
    },
    evidenceSections:[
      {chapter:'structure',title:L('6XOX 制样与配体互作','6XOX sample preparation and ligand interactions'),fields:[
        [L('制样条件','Sample preparation'),L('6XOX 制样时加入了正向变构调节剂。作者无法明确其结合构象，因此最终模型仅纳入 LY3502970 作为受体结合小分子。','A positive allosteric modulator was added during 6XOX preparation. Its pose could not be assigned unequivocally, so LY3502970 was the only receptor-bound small molecule modeled.')],
        [L('原论文互作指认','Interactions assigned in the primary study'),L('图 1I 将 Lys197 与 4H-1,2,4-噁二唑-5-酮基团的接触指认为氢键。图 2 将 Trp33 与吲哚–四氢吡喃分支的接触指认为芳香及疏水互作，并以突变与竞争结合实验检验 Trp33 的作用。','Figure 1I assigns hydrogen bonding between Lys197 and the 4H-1,2,4-oxadiazol-5-one group. Figure 2 assigns aromatic and hydrophobic contacts between Trp33 and the indole–tetrahydropyran branch and tests the role of Trp33 by mutagenesis and competition binding.')]
      ],sources:[structure,pdb('6XOX')]},
      {chapter:'clinical',title:L('OSA 结果状态','OSA results status'),fields:[
        [L('登记与公开结果','Registry and public results'),L('截至 2026-11-06，所引登记未贴结果，未核到两项子研究的公开疗效和安全性数据。',
          'As of 2026-11-06 the cited registry has no posted results, and public efficacy or safety data for the two substudies were not verified.')],
        [L('随机入组与基线 AHI','Randomization and baseline AHI'),L('GZ01 随机 363 人，基线平均 AHI 50.7（SD 28.6）次/小时。GZ02 随机 349 人，基线平均 AHI 57.6（SD 29.6）次/小时。','GZ01 randomized 363 participants and had a mean baseline AHI of 50.7 (SD 28.6) events/h. GZ02 randomized 349 participants and had a mean baseline AHI of 57.6 (SD 29.6) events/h.')],
        [L('给药设计','Dosing design'),L('口服每日一次，按耐受性递增至最高耐受剂量 12、24 或 36 mg；对照为安慰剂，主要终点为第 52 周 AHI 相对基线的变化。','Once-daily oral dosing was titrated to the maximum tolerated dose of 12, 24 or 36 mg. The comparator was placebo and the primary endpoint was change from baseline in AHI at week 52.')],
        [L('美国批准范围','US approved indication'),L('成人肥胖或超重且至少伴一项体重相关共病的长期体重管理。',
          'Long-term weight management in adults with obesity or overweight and at least one weight-related comorbidity.')]
      ],sources:[registry,design,sponsor,label]},
      {chapter:'preclinical',title:L('人体药代 · FDA 标签','Human PK · FDA label'),fields:[
        [L('口服消除半衰期','Oral elimination half-life'),L('约 29–49 小时','Approximately 29–49 h')],
        [L('血浆蛋白结合','Plasma protein binding'),'>99%']
      ],sources:[label]},
      {chapter:'safety',title:L('已批准适应证的说明书安全性','Label safety for the approved indication'),fields:[
        [L('警告','Warnings'),L('标签含甲状腺 C 细胞肿瘤黑框警告，并列胃肠道不良反应等。','The label carries a boxed warning for thyroid C-cell tumors and describes gastrointestinal adverse reactions, among others.')],
        [L('适用范围','Scope'),L('说明书数据来自获批用途。ATTAIN-OSA 分组安全性仍待公开结果。','These are label data for the approved use. Arm-level ATTAIN-OSA safety results await disclosure.')]
      ],sources:[label]}
    ]
  },complexes);
}
