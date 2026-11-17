const clinicalCandidates = {};
const clinicalPhases = {
  I:L('I 期','Phase I'), 'I/II':L('I/II 期','Phase I/II'), II:L('II 期','Phase II'),
  'II/III':L('II/III 期','Phase II/III'), III:L('III 期','Phase III'), review:L('上市申请审评','Application under review')
};
const clinicalStates = {
  RECRUITING:L('正在招募','Recruiting'),
  NOT_YET_RECRUITING:L('尚未招募','Not yet recruiting'),
  ACTIVE_NOT_RECRUITING:L('进行中，已停止招募','Active, not recruiting'),
  ENROLLING_BY_INVITATION:L('邀请入组','Enrolling by invitation'),
  COMPLETED:L('已完成','Completed'),
  FOLLOW_UP:L('已完成代表性试验，仍在推进','Index study complete, development continuing'),
  SPONSOR_STARTED:L('申办方报告已启动','Start reported by sponsor'),
  REGULATORY_REVIEW:L('上市申请已受理','Application accepted for review')
};
const clinicalConditions = {
  narcolepsy:L('发作性睡病与中枢性嗜睡','Narcolepsy & central hypersomnolence'),
  insomnia:L('失眠及共病失眠','Insomnia & comorbid insomnia'),
  breathing:L('睡眠相关呼吸障碍','Sleep apnea / breathing'),
  rls:L('不宁腿综合征','Restless legs syndrome')
};
records.push(record('oxtr','targets','OXTR',L('催产素受体 · OXTR · 人','Oxytocin receptor · OXTR · Human'),classA,
    L('人 OXTR 与催产素的活化态复合物可用于比较配体识别。与呼吸相关的临床研究单独归档。',
      'Active human OXTR–oxytocin complexes provide references for ligand recognition. Respiratory clinical studies are indexed separately.'),
    [['UniProt','P30559']],[uniprot('P30559'),pdb('7RYC'),pdb('7QVM')],[]));
function registerClinicalCandidate(entry, complexes = []) {
  const {id, name, condition, phase, status, aliases, kind, targets, summary, studies, references, identity} = entry;
  if (!clinicalPhases[phase] || !clinicalStates[status] || !clinicalConditions[entry.category] ||
      targets.some(id => !records.some(r => r.id === id && r.group === 'targets'))) {
    throw Error('Invalid clinical candidate: ' + id);
  }
  const fields = [...(entry.identityFields || [])];
  if (aliases) fields.push([L('别名 / 开发代号','Aliases / development codes'),aliases]);
  if (identity && !entry.chemistry) fields.push([L('分子标识','Molecular identifier'),identity.label]);
  const sources = [...studies.map(s => s.reference), ...references, ...(identity ? [identity] : []),
    ...(entry.evidenceSections || []).flatMap(s=>s.sources)];
  const profile={development:entry};
  if (entry.chemistry) profile.chemistry=entry.chemistry;
  if (entry.structureEvidence) profile.structureEvidence=entry.structureEvidence;
  if (entry.keyReferences) profile.keyReferences = entry.keyReferences;
  registerCompound({
    molecule:record(id,'molecules',name,condition,
      kind === 'combination' ? L('复方项目','Combination program') : clinicalPhases[phase],
      summary, fields, sources, targets),
    profile,
    complexes,
    effect:entry.effect
  });
  clinicalCandidates[id] = entry;
}
