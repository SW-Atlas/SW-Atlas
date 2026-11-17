{
const osa=article('Smales et al. · Ann Am Thorac Soc 2015 · Table 1','25719754');
const lowThreshold=article('Eckert et al. · Sleep 2014','24899767');
const insomnia=source('Walsh et al. · Hum Psychopharmacol 1998 · trial report',
  'https://experts.umn.edu/en/publications/subjective-hypnotic-efficacy-of-trazodone-and-zolpidem-in-dsmiii-/');
const nextDay=article('Roth et al. · J Sleep Res 2011','21623982');
const registry=trial('NCT01817907');
const registryResults=source('ClinicalTrials.gov · NCT01817907 · results','https://clinicaltrials.gov/study/NCT01817907?tab=results');
const label=source('DailyMed · Trazodone hydrochloride · §12.2','https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7202fa6e-86ed-813b-e053-2a95a90a7055');
const transport=article('El-Kasaby et al. · Mol Pharmacol 2024 · SERT assays','38769018');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Smales ET, Edwards BA, Deyoung PN, McSharry DG, Wellman A, Velasquez A, et al. Trazodone Effects on Obstructive Sleep Apnea and Non-REM Arousal Threshold. Ann Am Thorac Soc. 2015;12(5):758-764.", "pmid": "25719754", "url": "https://doi.org/10.1513/AnnalsATS.201408-399OC"}, {"citation": "Eckert DJ, Malhotra A, Wellman A, White DP. Trazodone increases the respiratory arousal threshold in patients with obstructive sleep apnea and a low arousal threshold. Sleep. 2014;37(4):811-819.", "pmid": "24899767", "url": "https://doi.org/10.5665/sleep.3596"}, {"citation": "Roth AJ, McCall WV, Liguori A. Cognitive, psychomotor and polysomnographic effects of trazodone in primary insomniacs. J Sleep Res. 2011;20(4):552-558.", "pmid": "21623982", "url": "https://doi.org/10.1111/j.1365-2869.2011.00928.x"}, {"citation": "El-Kasaby A, Boytsov D, Kasture A, Krumpl G, Hummel T, Freissmuth M, et al. Allosteric Inhibition and Pharmacochaperoning of the Serotonin Transporter by the Antidepressant Drugs Trazodone and Nefazodone. Mol Pharmacol. 2024;106(1):56-70.", "pmid": "38769018", "url": "https://doi.org/10.1124/molpharm.124.000881"}],
  "id": "trazodone",
  "name": "Trazodone",
  "aliases": "曲唑酮",
  "kind": "single",
  "condition": {
    "zh": "老年慢性失眠",
    "en": "Chronic insomnia in older adults"
  },
  "category": "insomnia",
  "phase": "II",
  "status": "RECRUITING",
  "summary": {
    "zh": "老药新用；另有 OSA 研究 NCT06286189，合并计一次",
    "en": "Repurposing. An OSA trial is indexed separately under the same active substance."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[osa,lowThreshold,insomnia,nextDay,label,transport],
  "studies": [
    {id:'NCT01817907',focus:'additional',title:'The Effects of Trazodone on Sleep Apnea Severity',
      phase:L('不适用','Not applicable'),status:'COMPLETED',updated:'2017-02-24',sponsor:'Brigham and Women’s Hospital',
      allocation:'RANDOMIZED',masking:'TRIPLE',age:['18 Years','70 Years'],enrollment:{count:15,type:'ACTUAL'},
      conditions:['Obstructive Sleep Apnea'],interventions:['Placebo pill','Trazodone'],
      primaryOutcomes:[{measure:'Apnea-Hypopnea Index',timeFrame:'Two overnight assessments'}],
      sleepOutcomes:[{measure:'Arousal Threshold (cmH2O)',timeFrame:'Two overnight assessments'}],
      hasResults:true,reference:registry},
    {
      "id": "NCT06983080",
      "focus": "index",
      "title": "Efficacy of Trazodone to Treat Insomnia in Older Adults (TRADITION Study)",
      "phase": "II",
      "status": "RECRUITING",
      "updated": "2025-12-08",
      "started": {
        "date": "2025-11-10",
        "type": "ACTUAL"
      },
      "sponsor": "Centre hospitalier de l'Université de Montréal (CHUM)",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 40,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "65 Years",
        ""
      ],
      "conditions": [
        "Insomnia Chronic",
        "Older People",
        "Drug Therapy"
      ],
      "interventions": [
        "Trazodone 25 mg"
      ],
      "primaryOutcomes": [
        {
          "measure": "Insomnia severity index",
          "timeFrame": "At baseline or at day 1, at day 36 and at day 77."
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06983080",
        "url": "https://clinicaltrials.gov/study/NCT06983080"
      }
    },
    {
      "id": "NCT06286189",
      "focus": "additional",
      "title": "Trazodone on OSA Endotypes",
      "phase": "I/II",
      "status": "RECRUITING",
      "updated": "2025-02-06",
      "started": {
        "date": "2024-01-01",
        "type": "ACTUAL"
      },
      "sponsor": "Brigham and Women's Hospital",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 18,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "21 Years",
        "70 Years"
      ],
      "conditions": [
        "Obstructive Sleep Apnea"
      ],
      "interventions": [
        "Placebo oral tablet",
        "Trazodone Hydrochloride"
      ],
      "primaryOutcomes": [
        {
          "measure": "Effect of trazodone on arousal threshold (%eupnea)",
          "timeFrame": "1 night"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06286189",
        "url": "https://clinicaltrials.gov/study/NCT06286189"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 5533",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5533"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-5533.png",
    "depictionSource": {
      "label": "PubChem CID 5533",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5533"
    },
    "links": [{"label": "ChEMBL CHEMBL621", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL621/"}, {"label": "KEGG D08626", "url": "https://www.kegg.jp/entry/D08626"}],
      "sources": [
      {
        "label": "PubChem CID 5533",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5533"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"2-[3-[4-(3-chlorophenyl)piperazin-1-yl]propyl]-[1,2,4]triazolo[4,3-a]pyridin-3-one"],
        [{"zh":"同义词","en":"Synonyms"},"trazodone · Trazodon"],
        ["KEGG ID","D08626"], ["PharmGKB ID","PA451744"],
        
      [
        "PubChem CID",
        "5533"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C19H22ClN5O"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "371.9"
      ],
      [
        "InChIKey",
        "PHLBKPHSAVXXEF-UHFFFAOYSA-N"
      ],
      [
        "SMILES",
        "C1CN(CCN1CCCN2C(=O)N3C=CC=CC3=N2)C4=CC(=CC=C4)Cl"
      ]
    ]
  },
  "targets": ["htr2a","sert"],
  "system": null,
  publishedResult:{study:'Smales et al. · NCT01817907',summary:L(
    '单晚 100 mg 交叉研究中，13 名受试者的平均 AHI 为安慰剂 38.7 次/小时、曲唑酮 28.5 次/小时（P=0.041）。NREM 呼吸觉醒阈值差异无统计显著性。',
    'In a single-night 100 mg crossover comparison in 13 analyzed participants, mean AHI was 38.7 events/h on placebo and 28.5 events/h on trazodone (P=0.041). The NREM respiratory arousal threshold did not differ significantly.'),
    reference:osa},
  evidenceSections:[
    {chapter:'clinical',title:L('OSA 单剂量研究及阴性终点','Single-dose OSA studies and negative endpoints'),fields:[
      [L('Smales 等，2015','Smales et al., 2015'),L('入组 15 人，论文分析 13 人，两晚相隔 1 周。安慰剂与 100 mg 曲唑酮的 AHI 分别为 38.7 ± 6.2 和 28.5 ± 5.6 次/小时（均值 ± SEM，P=0.041）。','Fifteen enrolled and 13 were analyzed in the paper, with nights one week apart. Mean AHI ± SEM was 38.7 ± 6.2 on placebo and 28.5 ± 5.6 events/h on 100 mg trazodone (P=0.041).')],
      [L('NREM 呼吸觉醒阈值','NREM respiratory arousal threshold'),L('按论文表 1，安慰剂 −20.3、曲唑酮 −19.3 cm H₂O。论文图 2 报告 P=0.52。登记结果页对调了这两个组的均值标签，本页采用论文的组别归属。','Table 1 reports −20.3 cm H₂O for placebo and −19.3 cm H₂O for trazodone. Figure 2 reports P=0.52. The registry labels the two means in reverse order. This dossier uses the publication’s assignment.')],
      [L('Edwards 等，2014','Edwards et al., 2014'),L('7 名低呼吸觉醒阈值 OSA 患者接受 100 mg。与对照夜相比，呼吸觉醒阈值升高 32 ± 6%（P<0.01），AHI 均为 39 次/小时（P=0.94）。','Seven participants with OSA and a low respiratory arousal threshold received 100 mg. The threshold increased by 32 ± 6% versus the control night (P<0.01). Mean AHI was 39 events/h on both nights (P=0.94).')]
    ],sources:[osa,registryResults,lowThreshold]},
    {chapter:'clinical',title:L('失眠试验的主观和 PSG 结果','Subjective and PSG outcomes in insomnia trials'),fields:[
      [L('Walsh 等，14 晚','Walsh et al., 14 nights'),L('随机双盲比较 50 mg 曲唑酮、10 mg 唑吡坦和安慰剂。曲唑酮组第 1 周自报入睡潜伏期及睡眠时长优于安慰剂，第 2 周两项与安慰剂均无显著差异。','A randomized, double-blind trial compared 50 mg trazodone, 10 mg zolpidem and placebo. Self-reported sleep latency and duration improved versus placebo at week 1 with trazodone. Neither differed significantly from placebo at week 2.')],
      [L('Roth 等，7 晚','Roth et al., 7 nights'),L('16 名原发性失眠患者参加 50 mg 与安慰剂交叉比较。PSG 的夜间觉醒次数及 N1 睡眠减少，慢波睡眠仅在第 7 晚增加。','In a 16-person crossover study of 50 mg versus placebo, PSG showed fewer awakenings and less stage 1 sleep. Slow-wave sleep increased at night 7 only.')]
    ],sources:[insomnia,nextDay]},
    {chapter:'safety',title:L('试验安全性与次日功能','Trial safety and next-day function'),fields:[
      [L('NCT01817907 登记不良事件','NCT01817907 registered adverse events'),L('安慰剂夜及曲唑酮夜登记的严重不良事件各为 0/15，其他不良事件各为 0/15。','Serious adverse events and other adverse events were each reported as 0/15 per condition in the registry.')],
      [L('Roth 等的次日功能','Next-day performance in Roth et al.'),L('研究报告短期记忆、言语学习、平衡和肌肉耐力指标出现小幅但显著下降。','The trial reported small but significant impairments in short-term memory, verbal learning, equilibrium and muscle endurance.')]
    ],sources:[registryResults,nextDay]},
    {chapter:'preclinical',title:L('血清素受体与转运体','Serotonin receptors and transporter'),fields:[
      [L('5-HT₂A 与 5-HT₂C','5-HT₂A and 5-HT₂C'),L('美国标签 §12.2 列出对 5-HT₂A/₂C 的拮抗作用。','US labeling §12.2 describes 5-HT₂A/₂C antagonism.')],
      [L('SERT（SLC6A4）','SERT (SLC6A4)'),L('在人 SERT 异源表达实验中，摄取和电流读数支持混合竞争型抑制。','Uptake and current recordings in human SERT expression assays supported mixed-type inhibition.')]
    ],sources:[label,transport]}
  ],
  structureEvidence:{title:L('同靶标结构参照','Structures with reference ligands'),
    summary:L('按曲唑酮的 InChIKey 和名称未核到直接实验复合物。6A93 的配体是 Risperidone，9HCO 的配体是 Vilazodone，分别提供 5-HT₂A 与 SERT 的结构参照。','Searches by trazodone name and InChIKey yielded no verified direct experimental complex. 6A93 contains risperidone and 9HCO contains vilazodone, providing 5-HT₂A and SERT references, respectively.'),
    sources:[pdb('6A93'),pdb('9HCO')]}
});
}
