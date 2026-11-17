{
const primaryInsomnia=article('Tassniyom et al. · primary insomnia randomized trial','20572379');
const osa=article('Fauska et al. · Ann Am Thorac Soc 2026 · PSG crossover','41968099');
const h1=article('Sato et al. · human H1 PET occupancy','26146015');
const pet=article('Kapur et al. · D2 and 5-HT2A PET occupancy','10839333');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Tassniyom K, Paholpak S, Tassniyom S, Kiewyoo J. Quetiapine for primary insomnia: a double blind, randomized controlled trial. J Med Assoc Thai. 2010;93(6):729-734.", "pmid": "20572379", "url": "https://pubmed.ncbi.nlm.nih.gov/20572379/"}, {"citation": "Fauska C, Bastiampillai T, Rawson G, Toson B, Vakulin A, Adams R, et al. Quetiapine modestly improves sleep and breathing but impairs next-day performance in people with obstructive sleep apnea and difficulty maintaining sleep: a randomized controlled trial. Ann Am Thorac Soc. 2026;23(10):1532-1542.", "pmid": "41968099", "url": "https://doi.org/10.1093/annalsats/aaoag092"}, {"citation": "Sato H, Ito C, Hiraoka K, Tashiro M, Shibuya K, Funaki Y, et al. Histamine H1 receptor occupancy by the new-generation antipsychotics olanzapine and quetiapine: a positron emission tomography study in healthy volunteers. Psychopharmacology (Berl). 2015;232(19):3497-3505.", "pmid": "26146015", "url": "https://doi.org/10.1007/s00213-015-4002-2"}, {"citation": "Kapur S, Zipursky R, Jones C, Shammi CS, Remington G, Seeman P. A positron emission tomography study of quetiapine in schizophrenia: a preliminary finding of an antipsychotic effect with only transiently high dopamine D2 receptor occupancy. Arch Gen Psychiatry. 2000;57(6):553-559.", "pmid": "10839333", "url": "https://doi.org/10.1001/archpsyc.57.6.553"}],
  "id": "quetiapine",
  "name": "Quetiapine",
  "aliases": "喹硫平",
  "kind": "single",
  "condition": {
    "zh": "精神疾病共病失眠",
    "en": "Insomnia comorbid with psychiatric disorders"
  },
  "category": "insomnia",
  "phase": "II/III",
  "status": "RECRUITING",
  "summary": {
    "zh": "研究者发起的低剂量试验；同试验褪黑素已列获批档案",
    "en": "Investigator-initiated low-dose study. Melatonin is already indexed as an approved active substance."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[primaryInsomnia,osa,h1,pet],
  "studies": [
    {id:'NCT00328822',title:'Quetiapine for primary insomnia',focus:'additional',
      phase:L('不适用','Not applicable'),status:'COMPLETED',updated:'2008-03-18',sponsor:'Khon Kaen University',
      age:['18 Years','65 Years'],allocation:'RANDOMIZED',masking:'DOUBLE',enrollment:{count:16,type:'ACTUAL'},
      conditions:['Primary insomnia'],interventions:['Quetiapine 25 mg nightly','Placebo'],
      primaryOutcomes:[{measure:'Sleep diary total sleep time and latency, daytime function and sleep satisfaction',timeFrame:'Two weeks'}],
      hasResults:false,reference:trial('NCT00328822')},
    {id:'NCT05303935',title:'Quetiapine, sleep and breathing in obstructive sleep apnea',focus:'additional',
      phase:'II',status:'COMPLETED',updated:'2023-07-06',sponsor:'Flinders University',
      age:['18 Years',''],allocation:'RANDOMIZED',masking:'QUADRUPLE',enrollment:{count:15,type:'ACTUAL'},
      conditions:['Obstructive sleep apnea','Difficulty maintaining sleep'],interventions:['Quetiapine 50 mg','Placebo'],
      primaryOutcomes:[{measure:'Apnea–hypopnea index (AHI)',timeFrame:'Overnight PSG'}],
      hasResults:false,reference:trial('NCT05303935')},
    {
      "id": "NCT06062953",
      "focus": "index",
      "title": "Efficacy of Melatonin, Low-dose Quetiapine, or Placebo in Patients With Psychiatric Disorders and Comorbid Insomnia",
      "phase": "II/III",
      "status": "RECRUITING",
      "updated": "2025-04-24",
      "started": {
        "date": "2023-09-18",
        "type": "ACTUAL"
      },
      "sponsor": "Lone Baandrup",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 255,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "16 Years",
        "64 Years"
      ],
      "conditions": [
        "Psychiatric Disorders",
        "Insomnia"
      ],
      "interventions": [
        "Melatonin",
        "Quetiapine",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Insomnia severity",
          "timeFrame": "6 weeks"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT06062953",
        "url": "https://clinicaltrials.gov/study/NCT06062953"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 5002",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5002"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-5002.png",
    "depictionSource": {
      "label": "PubChem CID 5002",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5002"
    },
    "links": [{"label": "ChEMBL CHEMBL716", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL716/"}, {"label": "KEGG D08456", "url": "https://www.kegg.jp/entry/D08456"}],
      "sources": [
      {
        "label": "PubChem CID 5002",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/5002"
      }
    ],
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"2-[2-(4-benzo[b][1,4]benzothiazepin-6-ylpiperazin-1-yl)ethoxy]ethanol"],
        [{"zh":"同义词","en":"Synonyms"},"quetiapine · quetiapina"],
        ["KEGG ID","D08456"], ["PharmGKB ID","PA451201"],
        
      [
        "PubChem CID",
        "5002"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C21H25N3O2S"
      ],
      [
        {
          "zh": "相对分子质量",
          "en": "Molecular weight"
        },
        "383.5"
      ],
      [
        "InChIKey",
        "URKOMYMAXPYINW-UHFFFAOYSA-N"
      ],
      [
        "SMILES",
        "C1CN(CCN1CCOCCO)C2=NC3=CC=CC=C3SC4=CC=CC=C42"
      ]
    ]
  },
  "targets": ["hrh1","htr2a","drd2"],
  "system": null,
  publishedResult:{study:'Tassniyom et al. · NCT00328822',summary:L(
    '原发性失眠试验中 13 人完成两周给药。25 mg 喹硫平与安慰剂的日记总睡眠时间及入睡潜伏期变化均未见显著组间差异。',
    'Thirteen completed two weeks in the primary insomnia trial. Changes in diary total sleep time and latency did not differ significantly between 25 mg quetiapine and placebo.'),
    reference:primaryInsomnia},
  evidenceSections:[
    {chapter:'clinical',title:L('原发性失眠与单晚 OSA 试验','Primary insomnia and single-night OSA trials'),fields:[
      [L('NCT00328822 睡眠日记','NCT00328822 sleep diary'),L('总睡眠时间平均增加 124.92 vs 72.24 分钟；入睡潜伏期平均缩短 96.16 vs 23.72 分钟（喹硫平 vs 安慰剂）。两项组间差异均无统计显著性。','Mean total sleep time increased by 124.92 vs 72.24 min and latency fell by 96.16 vs 23.72 min (quetiapine vs placebo). Neither comparison reached statistical significance.')],
      [L('NCT05303935 夜间 PSG','NCT05303935 overnight PSG'),L('15 人交叉比较单晚 50 mg 与安慰剂。AHI 为 20 ± 12 vs 27 ± 16 次/小时（均值 ± SD，P=0.009），睡眠效率为 87 ± 9% vs 80 ± 11%（P<0.001）。平均夜间血氧 94.5 ± 1.5% vs 94.7 ± 1.2%，无显著差异（P=0.38）。','Fifteen completed a single-night 50 mg versus placebo crossover. AHI was 20 ± 12 vs 27 ± 16 events/h (mean ± SD, P=0.009), sleep efficiency 87 ± 9% vs 80 ± 11% (P<0.001), and mean oxygen saturation 94.5 ± 1.5% vs 94.7 ± 1.2% (P=0.38).')]
    ],sources:[primaryInsomnia,osa]},
    {chapter:'safety',title:L('次日警觉和模拟驾驶','Next-day vigilance and simulated driving'),fields:[
      [L('NCT05303935，50 mg / 安慰剂','NCT05303935, 50 mg / placebo'),L('次晨 PVT 中位反应时为 382 ± 84 vs 336 ± 48 ms（P=0.008）；模拟驾驶转向偏差 96 ± 53 vs 72 ± 38 cm（P<0.01）。','Next-morning median PVT reaction time was 382 ± 84 vs 336 ± 48 ms (P=0.008) and simulator steering deviation 96 ± 53 vs 72 ± 38 cm (P<0.01).')]
    ],sources:[osa]},
    {chapter:'pharmacology',title:L('人体 PET 靶标占有率','Human PET target occupancy'),fields:[
      [L('证据范围','Evidence scope'),L('健康受试者单次口服 25 mg 后有脑 H₁ 受体占有率数据。D₂ 和 5-HT₂A 的 PET 数据来自精神分裂症治疗研究。','Human brain H1 occupancy was measured after a single 25 mg dose in healthy volunteers. D2 and 5-HT2A PET data come from a schizophrenia treatment study.')]
    ],sources:[h1,pet]}
  ],
  structureEvidence:{title:L('同靶标结构参照','Same-target structure references'),
    summary:L('按名称及 InChIKey 未核到喹硫平直接实验复合物。3RZE 为 H₁R–Doxepin，6A93 为 5-HT₂A–Risperidone。','The name and InChIKey search yielded no verified direct quetiapine complex. 3RZE is H1R–doxepin and 6A93 is 5-HT2A–risperidone.'),
    sources:[pdb('3RZE'),pdb('6A93')]}
});
}
