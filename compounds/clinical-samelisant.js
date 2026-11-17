{
const paper=article('Nirogi et al. · Sleep Med 2024 · Table 2','39504585');
const reg=trial('NCT04072380');
const results=source('ClinicalTrials.gov · NCT04072380 · results','https://clinicaltrials.gov/study/NCT04072380?tab=results');
const binding=article('Nirogi et al. · H3R binding and inverse agonism','33550481');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Nirogi R, Shinde A, Goyal VK, Ravula J, Benade V, Jetta S, et al. Samelisant (SUVN-G3031), a histamine 3 receptor inverse agonist: Results from the phase 2 double-blind randomized placebo-controlled study for the treatment of excessive daytime sleepiness in adult patients with narcolepsy. Sleep Med. 2024;124:618-626.", "pmid": "39504585", "url": "https://doi.org/10.1016/j.sleep.2024.10.037"}, {"citation": "Nirogi R, Benade V, Daripelli S, Subramanian R, Kamuju V, Bhyrapuneni G, et al. Samelisant (SUVN-G3031), a potent, selective and orally active histamine H3 receptor inverse agonist for the potential treatment of narcolepsy: pharmacological and neurochemical characterisation. Psychopharmacology (Berl). 2021;238(6):1495-1511.", "pmid": "33550481", "url": "https://doi.org/10.1007/s00213-021-05779-x"}],
  "id": "samelisant",
  "name": "Samelisant",
  "aliases": "SUVN-G3031",
  "kind": "single",
  "condition": {
    "zh": "发作性睡病",
    "en": "Narcolepsy"
  },
  "category": "narcolepsy",
  "phase": "III",
  "status": "RECRUITING",
  "summary": {
    "zh": "H3 受体反向激动剂",
    "en": "Histamine H3 receptor inverse agonist."
  },
  "otherIndication": false,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  "references": [
    {
      "label": {
        "zh": "申办方资料或机构文件",
        "en": "Sponsor disclosure or agency document"
      },
      "url": "https://www.suven.com/drugdiscoveryresearch.aspx"
    }
  ],
  "studies": [
    {id:'NCT04072380',title:'Samelisant monotherapy in adult narcolepsy',focus:'additional',
      phase:'II',status:'COMPLETED',updated:'2025-01-13',sponsor:'Suven Life Sciences Limited',
      age:['18 Years','65 Years'],allocation:'RANDOMIZED',masking:'DOUBLE',enrollment:{count:190,type:'ACTUAL'},
      conditions:['Narcolepsy with or without cataplexy'],interventions:['Samelisant 2 mg','Samelisant 4 mg','Placebo'],
      primaryOutcomes:[{measure:'Change in Epworth Sleepiness Scale total score',timeFrame:'Baseline to day 14'}],
      sleepOutcomes:[{measure:'Change in Maintenance of Wakefulness Test score',timeFrame:'Baseline to day 14'}],
      hasResults:true,reference:reg},
    {
      "id": "NCT07540364",
      "focus": "index",
      "title": "A Phase 3 Study to Evaluate the Efficacy and Safety of Samelisant in Patients With Narcolepsy (AWAKE)",
      "phase": "III",
      "status": "RECRUITING",
      "updated": "2026-09-03",
      "started": {
        "date": "2026-09",
        "type": "ESTIMATED"
      },
      "sponsor": "Suven Life Sciences Limited",
      "sponsorType": "INDUSTRY",
      "enrollment": {
        "count": 240,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "QUADRUPLE",
      "age": [
        "18 Years",
        ""
      ],
      "conditions": [
        "Narcolepsy"
      ],
      "interventions": [
        "Samelisant",
        "Placebo"
      ],
      "primaryOutcomes": [
        {
          "measure": "Change from Baseline in total Epworth Sleepiness Scale (ESS) score at Week 12",
          "timeFrame": "Baseline to Week 12"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07540364",
        "url": "https://clinicaltrials.gov/study/NCT07540364"
      }
    }
  ],
  "identity": {
    "label": "PubChem CID 60151477",
    "url": "https://pubchem.ncbi.nlm.nih.gov/compound/60151477"
  },
  "chemistry": {
    "depiction": "assets/chem/clinical-60151477.png",
    "depictionSource": {
      "label": "PubChem CID 60151477",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/60151477"
    },
    "fields": [[{"zh":"IUPAC 名称","en":"IUPAC name"},"N-[4-(1-cyclobutylpiperidin-4-yl)oxyphenyl]-2-morpholin-4-ylacetamide"],
        [{"zh":"同义词","en":"Synonyms"},"SUVN-G3031 · 65V47O9NOP"],
        
      [
        "PubChem CID",
        "60151477"
      ],
      [
        {
          "zh": "分子式",
          "en": "Molecular formula"
        },
        "C21H31N3O3"
      ],
      [
        {
          "zh": "分子量",
          "en": "Molecular weight"
        },
        "373.5 g/mol"
      ],
      [
        "InChIKey",
        "LNXDUSQEXVQFGP-UHFFFAOYSA-N"
      ],
      [
        "SMILES",
        "C1CC(C1)N2CCC(CC2)OC3=CC=C(C=C3)NC(=O)CN4CCOCC4"
      ]
    ],
    "links": [{"label": "ChEMBL CHEMBL4297328", "url": "https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297328/"}],
      "sources": [
      {
        "label": "PubChem CID 60151477",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/60151477"
      }
    ]
  },
  "targets": [
    "hrh3"
  ],
  "system": "histamine",
  publishedResult:{study:'NCT04072380',summary:L(
    '第 14 天，合并剂量较安慰剂的 ESS 最小二乘均值差为 −1.841 分（95% CI −3.445 至 −0.237，P=0.024）。客观 MWT 次要终点无显著差异。',
    'At day 14, the pooled-dose least-squares mean ESS difference versus placebo was −1.841 points (95% CI −3.445 to −0.237, P=0.024). The objective MWT secondary outcome did not differ significantly.'),
    reference:paper},
  evidenceSections:[
    {chapter:'clinical',title:L('日间嗜睡的主客观终点','Subjective and objective daytime sleepiness outcomes'),fields:[
      [L('分析集','Analysis set'),L('随机 190 人，论文意向治疗集 164 人。每日 2 mg、4 mg 或安慰剂治疗 14 天。','190 randomized and 164 in the paper’s intention-to-treat set. Doses were 2 mg or 4 mg daily versus placebo for 14 days.')],
      [L('ESS，各剂量与安慰剂的调整后差值','ESS, adjusted difference versus placebo by dose'),L('2 mg（n=54）−1.822 分（95% CI −3.506 至 −0.139，P=0.034）；4 mg（n=53）−1.853 分（95% CI −3.551 至 −0.155，P=0.032）；安慰剂 n=57。','2 mg (n=54) −1.822 points (95% CI −3.506 to −0.139, P=0.034); 4 mg (n=53) −1.853 points (95% CI −3.551 to −0.155, P=0.032); placebo n=57.')],
      [L('MWT，合并剂量','MWT, pooled doses'),L('较安慰剂的差值 +0.353 分钟（95% CI −1.678 至 2.383，P=0.734）。','The difference versus placebo was +0.353 min (95% CI −1.678 to 2.383, P=0.734).')]
    ],sources:[paper,results]},
    {chapter:'safety',title:L('登记分组不良事件','Registry adverse events by arm'),fields:[
      [L('严重不良事件','Serious adverse events'),L('2 mg 0/63，4 mg 0/63，安慰剂 0/62。','2 mg 0/63, 4 mg 0/63, placebo 0/62.')],
      [L('其他不良事件','Other adverse events'),L('2 mg 17/63，4 mg 34/63，安慰剂 5/62。','2 mg 17/63, 4 mg 34/63, placebo 5/62.')]
    ],sources:[results]},
    {chapter:'pharmacology',title:L('H₃R 直接结合与反向激动','H3R binding and inverse agonism'),fields:[
      [L('结合 Kᵢ','Binding Kᵢ'),L('人 H₃R 8.7 nM，大鼠 H₃R 9.8 nM。原研究另外报告了反向激动功能。','8.7 nM at human H3R and 9.8 nM at rat H3R. The primary study separately reported functional inverse agonism.')]
    ],sources:[binding]}
  ],
  structureEvidence:{title:L('H₃R 结构参照','H3R structural reference'),summary:L(
    '按名称、代号和 InChIKey 未核到 Samelisant 直接实验复合物。7F61 的实际配体是 PF-03654746。',
    'Searches by name, code and InChIKey yielded no verified direct Samelisant complex. 7F61 contains PF-03654746.'),
    sources:[pdb('7F61')]}
});
}
