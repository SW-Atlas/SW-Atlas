{
const earley=article('Earley et al. · Sleep 2024 · Table 2','38625730');
const trenkwalder=article('Trenkwalder et al. · Mov Disord 2017','28643901');
const fda=source('FDA · 2026 boxed warning for hypophosphatemia','https://www.fda.gov/drugs/drug-safety-communications/fda-adds-boxed-warning-labeling-ferric-carboxymaltose-injection-injectafer-describe-risk-low');
const label=source('DailyMed · Injectafer · §11','https://dailymed.awsprod.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=517b4a19-45b3-4286-9f6a-ced4e10447de&type=display');
const registry=trial('NCT02397057');
registerClinicalCandidate({
  "keyReferences": [{"citation": "Earley CJ, García-Borreguero D, Falone M, Winkelman JW. Clinical efficacy and safety of intravenous ferric carboxymaltose for treatment of restless legs syndrome: a multicenter, randomized, placebo-controlled clinical trial. Sleep. 2024;47(7).", "pmid": "38625730", "url": "https://doi.org/10.1093/sleep/zsae095"}, {"citation": "Trenkwalder C, Winkelmann J, Oertel W, Virgin G, Roubert B, Mezzacasa A, et al. Ferric carboxymaltose in patients with restless legs syndrome and nonanemic iron deficiency: A randomized trial. Mov Disord. 2017;32(10):1478-1482.", "pmid": "28643901", "url": "https://doi.org/10.1002/mds.27040"}],
  "id": "ferric-carboxymaltose",
  "name": "Ferric carboxymaltose",
  "aliases": "羧基麦芽糖铁",
  "kind": "single",
  "condition": {
    "zh": "难治性不宁腿综合征",
    "en": "Refractory restless legs syndrome"
  },
  "category": "rls",
  "phase": "III",
  "status": "FOLLOW_UP",
  "summary": {
    "zh": "静脉补铁制剂。已完成的 RLS 试验包含阴性主要终点；难治性人群的登记另列。",
    "en": "Intravenous iron replacement. Completed RLS trials include negative primary endpoints. A separate study is registered in refractory RLS."
  },
  "otherIndication": true,
  "reviewed": "2026-11-06",
  "externalRegistryId": "",
  references:[earley,trenkwalder,fda,label],
  "studies": [
    {id:'NCT02397057',title:'Ferric carboxymaltose in restless legs syndrome',focus:'index',phase:'III',status:'COMPLETED',
      updated:'2021-10-12',sponsor:'American Regent, Inc.',age:['18 Years',''],allocation:'RANDOMIZED',masking:'DOUBLE',
      enrollment:{count:209,type:'ACTUAL'},conditions:['Restless legs syndrome'],
      interventions:['Ferric carboxymaltose 750 mg IV on days 0 and 5','Normal saline'],
      primaryOutcomes:['Change from baseline in IRLS total score','Investigator CGI-I responder rate'].map(measure=>({measure,timeFrame:'Day 42'})),
      hasResults:true,reference:registry},
    {
      "id": "NCT07822607",
      "focus": "additional",
      "title": "Intravenous Iron in the Management of Drug-resistant Restless Legs syndromeI",
      "phase": "II",
      "status": "NOT_YET_RECRUITING",
      "updated": "2026-09-16",
      "started": {
        "date": "2026-10",
        "type": "ESTIMATED"
      },
      "sponsor": "University Hospital, Montpellier",
      "sponsorType": "OTHER",
      "enrollment": {
        "count": 66,
        "type": "ESTIMATED"
      },
      "allocation": "RANDOMIZED",
      "masking": "NONE",
      "age": [
        "18 Years",
        ""
      ],
      "conditions": [
        "Restless Legs Syndrome (RLS)"
      ],
      "interventions": [
        "Ferric Carboxymaltose Injection [Ferinject]",
        "Ferric Carboxymaltose Injection [Ferinject]",
        "Randomization",
        "Questionnaire and Physical Exam",
        "lumbar puncture",
        "urine pregnancy test"
      ],
      "primaryOutcomes": [
        {
          "measure": "IRLSSG-Q score",
          "timeFrame": "From Day 0 to Week 12"
        }
      ],
      "sleepOutcomes": [],
      "hasResults": false,
      "reference": {
        "label": "ClinicalTrials.gov · NCT07822607",
        "url": "https://clinicaltrials.gov/study/NCT07822607"
      }
    }
  ],
  "identity": null,
  "chemistry": null,
  "targets": [],
  "system": null,
  publishedResult:{study:'Earley et al. · NCT02397057',summary:L(
    '第 42 天 IRLS 变化差 −3.2 分（95% CI −5.4 至 −1.1，P=0.0036），但 CGI-I 应答率差异无显著性（35.5% vs 28.7%，P=0.2987）。两项共同主要终点的联合标准未达到。',
    'Day 42 IRLS change differed by −3.2 points (95% CI −5.4 to −1.1, P=0.0036). CGI-I response rates did not differ significantly (35.5% vs 28.7%, P=0.2987). The trial did not meet the joint criterion for both co-primary endpoints.'),
    reference:earley},
  structureEvidence:{title:L('制剂身份与作用方式','Formulation identity and action'),summary:L(
    '羧基麦芽糖铁为多核氢氧化铁(III)与糖聚合物形成的胶体复合物，用于补充铁。本档以单一活性制剂登记。其公开结构示意对应胶体成分，不能映射为离散小分子的靶标残基互作。',
    'Ferric carboxymaltose is a colloidal complex of polynuclear iron(III) hydroxide with a carbohydrate polymer and supplies iron. The dossier indexes one active formulation. The published formulation schematic represents colloidal components rather than a discrete ligand–protein contact model.'),sources:[label]},
  evidenceSections:[
    {chapter:'clinical',title:L('两项完成试验的主要终点','Primary endpoints in two completed trials'),fields:[
      [L('Earley 等，第 42 天','Earley et al., day 42'),L('209 人随机。按实际治疗分组，CGI-I 应答优势比 1.37（95% CI 0.76–2.47）。因联合主要终点未达到，分层检验下次要终点不作显著性结论。','The study randomized 209. In the as-treated analysis, the CGI-I response odds ratio was 1.37 (95% CI 0.76–2.47). Secondary endpoints did not qualify for significance under the hierarchy after failure of the joint primary criterion.')],
      [L('Trenkwalder 等，非贫血缺铁','Trenkwalder et al., nonanemic iron deficiency'),L('单次静脉 1,000 mg 铁（59 人）与安慰剂（51 人）比较。第 4 周主要 IRLS 终点未达显著（95% CI −5.93 至 1.02，P=0.163）；第 12 周次要终点差 −4.66 分（95% CI −8.59 至 −0.73，P=0.021）。','Single-dose 1,000 mg intravenous iron (59 participants) versus placebo (51). The primary week 4 IRLS comparison was nonsignificant (95% CI −5.93 to 1.02, P=0.163). The secondary week 12 difference was −4.66 points (95% CI −8.59 to −0.73, P=0.021).')]
    ],sources:[earley,registry,trenkwalder]},
    {chapter:'safety',title:L('试验安全性与美国标签','Trial safety and US labeling'),fields:[
      [L('NCT02397057 严重不良事件','NCT02397057 serious adverse events'),L('登记按实际治疗组报告 6/107（羧基麦芽糖铁）与 4/101（生理盐水）。','The registry reports 6/107 on ferric carboxymaltose and 4/101 on saline, as treated.')],
      [L('美国监管更新','US regulatory update'),L('FDA 于 2026-09-01 发布低磷血症黑框警告更新。','On 2026-09-01 FDA announced a boxed warning update for hypophosphatemia.')]
    ],sources:[source('NCT02397057 · results','https://clinicaltrials.gov/study/NCT02397057?tab=results'),fda]}
  ]
});
}
