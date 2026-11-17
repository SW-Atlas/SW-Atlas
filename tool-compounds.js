// Tool compounds: research-tool ligands with established sleep–wake relevance.
// Loaded after data.js (record/L/source helpers are available) and before catalog.js.
const toolCompound = L('工具化合物','Tool compound');

records.push(
  record('neca','molecules','NECA',
    L("5'-N-乙基甲酰胺腺苷 · A₂A 激动剂","5'-N-Ethylcarboxamidoadenosine · A₂A agonist"),toolCompound,
    L('腺苷 A₂A 受体的选择性激动剂，作为研究工具用于睡眠稳态相关的腺苷信号研究。','A selective adenosine A₂A receptor agonist used as a research tool for adenosine signaling in sleep homeostasis.'),
    [[L('作用','Action'),L('A₂A 激动剂','A₂A agonist')],[L('结构参照','Structural reference'),'5G53 · A₂AR–NECA']],
    [pubchem('448222'),pdb('5G53'),article('5G53 · A₂AR–G 蛋白结构','27462812')],
    ['a2a','adenosine-signal']),

  record('pf-03654746','molecules','PF-03654746',
    L('组胺 H₃ 受体反向激动剂','Histamine H₃ receptor inverse agonist'),toolCompound,
    L('选择性组胺 H₃ 受体反向激动剂，作为促醒机制研究工具；7F61 结构中的实际配体。','A selective histamine H₃ receptor inverse agonist used as a research tool for wake-promoting mechanisms; the ligand modeled in 7F61.'),
    [[L('作用','Action'),L('H₃ 反向激动剂','H₃ inverse agonist')],[L('结构参照','Structural reference'),'7F61 · H₃R–PF-03654746']],
    [pdb('7F61'),article('7F61 · 组胺受体抗组胺药识别','36243875')],
    ['hrh3']),

  record('bhff','molecules','BHFF',
    L('GABA_B 受体正变构调节剂','GABA_B receptor positive allosteric modulator'),toolCompound,
    L('GABA_B 受体的正变构调节剂，与巴氯芬共同用于 GABA_B 相关睡眠研究；7C7Q 中与巴氯芬共同建模。','A GABA_B positive allosteric modulator used alongside baclofen in GABA_B-related sleep research; modeled together with baclofen in 7C7Q.'),
    [[L('作用','Action'),L('GABA_B 正变构调节剂','GABA_B PAM')],[L('结构参照','Structural reference'),'7C7Q · GABA_B–巴氯芬–BHFF']],
    [pdb('7C7Q'),article('7C7Q · GABA_B 非活/活态结构','32494023')],
    ['gabab']),

  record('sb-334867','molecules','SB-334867',
    L('OX₁R 选择性拮抗剂','Selective OX₁R antagonist'),toolCompound,
    L('食欲素 1 型受体的选择性拮抗剂，用于区分 OX₁R 与 OX₂R 在睡眠–觉醒调控中的贡献。','A selective orexin 1 receptor antagonist used to dissect the sleep–wake contributions of OX₁R versus OX₂R.'),
    [[L('作用','Action'),L('OX₁R 拮抗剂','OX₁R antagonist')]],
    [article('Carter et al. · PNAS 2012','22955882')],
    ['ox1','orexin']),

  record('m10032','molecules','M10032',
    L('食欲素 A 放射性配体衍生物','Orexin-A radioligand derivative'),toolCompound,
    L('用于 DORA 竞争结合实验的食欲素 A 衍生物放射性配体。','An orexin-A-derived radioligand used in DORA competition binding assays.'),
    [[L('用途','Use'),L('竞争结合放射配体','Competition-binding radioligand')]],
    [article('Beuckmann et al. · JPET 2017','28559480')],
    ['ox1','ox2','orexin'])
);
