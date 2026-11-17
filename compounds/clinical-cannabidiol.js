{
const insomnia=article('Narayan et al. · J Clin Sleep Med 2024 · Table 2','38174873');
const rbd=article('de Almeida et al. · Mov Disord 2021 · Parkinson disease and RBD','33754375');
const interim=source('Avecho · 2026-06-24 · interim monitoring decision',
  'https://avecho.com.au/investor-centre/news/2026/06/24/avecho-phase-iii-insomnia-trial-advances-following-positive-interim-analysis/');
const resumed=source('Avecho · 2026-08-31 · resumed recruitment',
  'https://avecho.com.au/investor-centre/news/2026/08/31/recruitent-recommences-for-phase-iii-insomnia-trial/');
const sodium=source('Huang et al. · Nat Commun 2023 · figures 3–4','https://doi.org/10.1038/s41467-023-39307-6');
const trp=article('Pumroy et al. · eLife 2019 · figure 2','31566564');
const channel=L('离子通道','Ion channel');
records.push(
  record('nav17','targets','Naᵥ1.7',L('电压门控钠通道 · SCN9A · 人','Voltage-gated sodium channel · SCN9A · human'),channel,
    L('CBD 的两个结合位点均在 8G1A 模型中有配体。临床睡眠效应的通道归因仍待检验。','Both CBD sites contain modeled ligand in 8G1A. The channel’s contribution to clinical sleep effects remains to be tested.'),
    [['UniProt','Q15858']],[uniprot('Q15858'),sodium,pdb('8G1A')],[]),
  record('trpv2-rat','targets','TRPV2 (rat)',L('瞬时受体电位香草酸亚型 2 · 大鼠','Transient receptor potential vanilloid 2 · rat'),channel,
    L('收录全长大鼠 TRPV2 的两套 CBD 复合物。','Two full-length rat TRPV2–CBD complexes are indexed.'),
    [['UniProt','Q9WUD2']],[uniprot('Q9WUD2'),trp,pdb('6U8A'),pdb('6U88')],[]));
const complex=(id,target,resolution,chain,subtitle,construct,instances)=>({
  id,target,resolution,chain,subtitle,construct,molecule:'cannabidiol',code:'P0T',method:cryo,
  state:L('CBD 结合态','CBD-bound state'),
  ligandInstances:Object.fromEntries(instances.map(([key,asymId,label])=>[key,{asymId,label}]))
});
const rat=L('大鼠 TRPV2 四聚体 · 纳米盘','Rat TRPV2 tetramer in nanodiscs');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Narayan AJ, Downey LA, Rose S, Di Natale L, Hayley AC. Cannabidiol for moderate-severe insomnia: a randomized controlled pilot trial of 150 mg of nightly dosing. J Clin Sleep Med. 2024;20(5):753-763.", "pmid": "38174873", "url": "https://doi.org/10.5664/jcsm.10998"}, {"citation": "de Almeida CMO, Brito MMC, Bosaipo NB, Pimentel AV, Tumas V, Zuardi AW, et al. Cannabidiol for Rapid Eye Movement Sleep Behavior Disorder. Mov Disord. 2021;36(7):1711-1715.", "pmid": "33754375", "url": "https://doi.org/10.1002/mds.28577"}, {"citation": "Pumroy RA, Samanta A, Liu Y, Hughes TE, Zhao S, Yudin Y, et al. Molecular mechanism of TRPV2 channel modulation by cannabidiol. Elife. 2019;8.", "pmid": "31566564", "url": "https://doi.org/10.7554/eLife.48792"}],
  "id": "cannabidiol",
  "name": "Cannabidiol",
  "aliases": "CBD",
  "kind": "single",
  "condition": {
    "zh": "失眠",
    "en": "Insomnia"
  },
  "category": "insomnia",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "失眠先导试验的 ISI 未见显著组间差异。另一项 TPM 胶囊 III 期试验在期中审查后继续招募。",
    "en": "The insomnia pilot found no significant between-group ISI difference. A separate Phase III trial of TPM capsules resumed enrollment after interim review."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[insomnia,rbd,interim,resumed,sodium,trp],
  "studies": [
    {
      "id": "NCT05840822",
      "focus": "index",
      "title": "Evaluating Efficacy and Safety of CBD TPM Capsules for Use in Insomnia",
      "phase": "III",
      "status": "ACTIVE_NOT_RECRUITING",
      "updated": "2026-06-30",
      "started": {
        "date": "2024-05-16",
        "type": "ACTUAL"
      },
      "sponsor": "Avecho Biotechnology",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 519,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        ""
      ],
      "conditions": [
        "Insomnia"
      ],
      "interventions": [
        "Cannabidiol (CBD) Capsule 75mg",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Mean change from study baseline of insomnia severity index (ISI) score at 8 weeks",
          "timeFrame": "8 weeks"
        },
        {
          "measure": "Mean change from study baseline in subject sleep efficiency (sSE) at 8 weeks",
          "timeFrame": "8 weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT05840822",
        "url": "https://clinicaltrials.gov/study/NCT05840822"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 644019",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/644019"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-644019.png",
    "depictionSource": {
      "label": "PubChem CID 644019",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/644019"
    },
    "links": [{"label": "ChEMBL CHEMBL190461", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL190461/"}, {"label": "KEGG D10915", "url": "https://www.kegg.jp/entry/D10915"}],
      "sources": [
      {
        "label": "PubChem CID 644019",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/644019"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"2-[(1R,6R)-3-methyl-6-prop-1-en-2-ylcyclohex-2-en-1-yl]-5-pentylbenzene-1,3-diol"],
        [{"zh":"同义词","en":"Synonyms"},"cannabidiol · (-)-Cannabidiol"],
        ["KEGG ID","D10915"], ["PharmGKB ID","PA166175791"],
        
      [
        "PubChem CID",
        "644019"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C21H30O2"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "314.5"
      ],
      [
        "InChIKey",
        "QHMBSVQNZZTUGM-ZWKOTPCHSA-N"
      ],
      [
        "SMILES",
        "CCCCCC1=CC(=C(C(=C1)O)[C@@H]2C=C(CC[C@H]2C(=C)C)C)O"
      ]
    ]
  },
  "targets": ["nav17","trpv2-rat"],
  "system": null,
  publishedResult:{study:'Narayan et al. · insomnia pilot',summary:L(
    '每晚舌下 150 mg 两周，分析每组 15 人。第 2 周 ISI 平均组间差 −1.9 分（95% CI −5.0 至 1.1，P>0.05）。',
    'After 150 mg sublingually each night for two weeks, 15 per arm were analyzed. The week 2 ISI mean difference was −1.9 points (95% CI −5.0 to 1.1, P>0.05).'),reference:insomnia},
  evidenceSections:[
    {chapter:'clinical',title:L('单方 CBD 睡眠研究','Single-ingredient CBD sleep studies'),fields:[
      [L('失眠先导试验','Insomnia pilot'),L('睡眠日记的入睡潜伏期、睡眠效率及入睡后觉醒均无显著差异。第 2 周腕部活动记录的睡眠效率平均差 +6.85 个百分点（SE 2.95，P<0.05）。','Sleep-diary latency, sleep efficiency and wake after sleep onset did not differ significantly. At week 2, actigraphic sleep efficiency differed by +6.85 percentage points (SE 2.95, P<0.05).')],
      [L('帕金森病合并 REM 睡眠行为障碍','Parkinson disease with REM sleep behavior disorder'),L('33 人随机接受 75–300 mg CBD 或安慰剂并随访 14 周。主要终点未见显著组间差异。','Thirty-three participants were randomized to 75–300 mg CBD or placebo and followed for 14 weeks. Primary outcomes did not differ significantly between groups.')],
      [L('TPM 胶囊 III 期','Phase III TPM capsules'),L('独立数据监查委员会建议继续按计划招募 519 人。申办方于 2026-08-31 报告恢复招募；页面保留 2026-06-30 的登记状态。公开期中披露未提供分组 ISI 效应值。','The monitoring board recommended continuation to the planned enrollment of 519. The sponsor reported resumed recruitment on 2026-08-31. The study panel retains the 2026-06-30 registry snapshot. The interim disclosure did not give arm-level ISI effects.')]
    ],sources:[insomnia,rbd,interim,resumed]},
    {chapter:'safety',title:L('试验不良事件','Trial adverse events'),fields:[
      [L('失眠先导试验','Insomnia pilot'),L('34 人随机。CBD 组 1/18 人因不良事件退出，论文描述所见不良事件均为轻度且短暂。','Thirty-four were randomized. One of 18 assigned CBD withdrew due to an adverse event. The paper described observed adverse events as mild and transient.')],
      [L('III 期中期汇总','Phase III pooled interim assessment'),L('申办方报告已评估的 244 人中无严重不良事件；分组数值未公开。','The sponsor reported no serious adverse events among 244 assessed. Arm-level data were unavailable.')]
    ],sources:[insomnia,interim]}
  ],
  structureEvidence:{title:L('钠通道与 TRPV2 直接复合物','Direct sodium-channel and TRPV2 complexes'),
    summary:L('8G1A 的两个 CBD 实例分别位于人 Naᵥ1.7 的 IFM 邻近位点（A2004）及 IV–I 侧窗（A2005）。Asn1459 OD1 至 A2004 O02 为 3.12 Å，Val383 主链 O 至 A2005 O01 为 3.35 Å。原论文以突变和电生理检验了两个位点。大鼠 TRPV2 的 6U8A 和 6U88 中，CBD 位于相邻亚基 S5/S6 间，原论文列出 Leu541、Leu631 和 Tyr634 等口袋残基。临床睡眠效应仍需独立归因。',
      'In human Naᵥ1.7 entry 8G1A, CBD occupies an IFM-adjacent site (A2004) and the IV–I fenestration (A2005). Asn1459 OD1 to A2004 O02 is 3.12 Å and Val383 backbone O to A2005 O01 is 3.35 Å. Mutagenesis and electrophysiology probed both sites. In rat TRPV2 structures 6U8A and 6U88, CBD lies between S5 and S6 of neighboring subunits. The study identifies pocket residues including Leu541, Leu631 and Tyr634. Attribution of the clinical sleep effects requires separate evidence.'),
    sources:[ccd('P0T'),sodium,trp,pdb('8G1A'),pdb('6U8A'),pdb('6U88')]}
},[
  complex('8G1A','nav17','2.80','A','Human Naᵥ1.7–CBD',L('人 Naᵥ1.7，作者链 A','Human Naᵥ1.7, author chain A'),
    [['A2004','I','IFM-adjacent site'],['A2005','J','IV–I fenestration']]),
  complex('6U8A','trpv2-rat','3.40','A / B / C / D','Rat TRPV2–CBD · state 1',rat,
    [['A1001','E','CBD E'],['A1002','F','CBD F'],['C1001','G','CBD G'],['D1001','H','CBD H']]),
  complex('6U88','trpv2-rat','3.20','A / B / C / D','Rat TRPV2–CBD · state 2',rat,
    [['A1001','E','CBD E'],['B1001','F','CBD F'],['C1001','G','CBD G'],['D1001','H','CBD H']])
]);
}
