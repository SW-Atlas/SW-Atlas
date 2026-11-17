#!/usr/bin/env node
// SW Atlas 数据完整性 QA 检查（纯 Node，无需浏览器/任何依赖）
// 用法：node qa-check.js
// 检查：(1) 全部数据脚本语法 (2) 分子/靶标/结构/活性注册与引用完整性
//       (3) keyReferences 非空且条目合法 (4) 化学字段行合法（可捕获「漏逗号→undefined 字段」类 bug）(5) 无重复 id
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const os = require('os');

const ROOT = __dirname;

// 1) 按 index.html 的加载顺序提取「纯数据」脚本（这些脚本不需要 DOM）
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1].split('?')[0]);
const isData = s => ['data.js', 'tool-compounds.js', 'profiles.js', 'clinical-data.js',
  'gto-assays.js', 'rcsb-complexes.js', 'gto-targets.js', 'rcsb-related.js'].includes(s) || s.startsWith('compounds/');
const dataFiles = srcs.filter(isData);

// 2) 语法检查（逐文件 parse，不执行）
let syntaxErrors = 0;
for (const f of dataFiles) {
  try { new vm.Script(fs.readFileSync(path.join(ROOT, f), 'utf8'), { filename: f }); }
  catch (e) { console.error(`  ✗ [语法] ${f}: ${e.message}`); syntaxErrors++; }
}

// 3) 拼接 + 以 CommonJS 加载（共享同一作用域，模拟浏览器全局词法环境）
const code = dataFiles.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
const tmp = path.join(os.tmpdir(), `sw-qa-${process.pid}-${Date.now()}.js`);
fs.writeFileSync(tmp, code + '\nmodule.exports = {records, structures, activities, moleculeProfiles, clinicalCandidates, gtoTargetOid: typeof gtoTargetOid !== "undefined" ? gtoTargetOid : {}};\n');
let data;
try { data = require(tmp); }
catch (e) { console.error(`  ✗ [加载] 数据脚本执行失败: ${e.message}`); syntaxErrors++; data = {}; }
try { fs.unlinkSync(tmp); } catch {}

const { records = [], structures = [], activities = [], moleculeProfiles = {}, clinicalCandidates = {}, gtoTargetOid = {} } = data;

// 4) 校验
let errors = 0, warnings = 0;
const err = m => { console.error('  ✗ ' + m); errors++; };
const warn = m => { console.log('  ⚠ ' + m); warnings++; };
const zh = v => (v && typeof v === 'object') ? (v.zh ?? v.en ?? '') : (v == null ? '' : String(v));

const rid = new Set(records.map(r => r.id));
if (records.length && rid.size !== records.length) err(`records 存在 ${records.length - rid.size} 个重复 id`);
if (new Set(structures.map(s => s.id)).size !== structures.length) err('structures 存在重复 id');

for (const s of structures) {
  if (!rid.has(s.target)) err(`结构 ${s.id} 引用不存在的靶标 ${s.target}`);
  if (!rid.has(s.molecule)) err(`结构 ${s.id} 引用不存在的分子 ${s.molecule}`);
}
for (const a of activities) {
  if (!rid.has(a.target) && !gtoTargetOid[a.target]) err(`活性引用不存在的靶标 ${a.target}`);
  if (!rid.has(a.molecule)) err(`活性引用不存在的分子 ${a.molecule}`);
}

const molecules = records.filter(r => r.group === 'molecules');
let noProfile = 0, noRefs = 0, badFields = 0;
for (const m of molecules) {
  const p = moleculeProfiles[m.id];
  const isClinical = !!clinicalCandidates[m.id];
  const isToolOrEndo = /工具|内源/.test(zh(m.tag));
  if (!p && !isClinical && !isToolOrEndo) { noProfile++; err(`分子 ${m.id}(${zh(m.name)}) 无 profile 且非临床候选`); continue; }
  const refs = (p && p.keyReferences) || [];
  if (!refs.length && !isToolOrEndo && !isClinical) { noRefs++; warn(`分子 ${m.id}(${zh(m.name)}) 无 keyReferences`); }
  for (const r of refs) {
    if (!r || typeof r !== 'object' || !String(r.citation || '').trim()) { err(`分子 ${m.id} 存在非法 keyReferences 条目`); break; }
  }
  if (p && p.chemistry && p.chemistry.fields) {
    for (const f of p.chemistry.fields) {
      if (!Array.isArray(f) || f.length < 2 || f[0] == null || f[1] == null || zh(f[0]) === '') {
        badFields++; err(`分子 ${m.id} 化学字段行非法（键或值为空，疑似漏逗号）: ${JSON.stringify(f)}`); break;
      }
    }
  }
}

const targets = records.filter(r => r.group === 'targets').length;
console.log(`分子=${molecules.length}  靶标=${targets}  结构=${structures.length}  活性=${activities.length}  临床候选=${Object.keys(clinicalCandidates).length}`);
console.log(`语法错误=${syntaxErrors}  校验错误=${errors}  警告=${warnings}`);
if (syntaxErrors + errors > 0) { console.log('\n结果: FAIL'); process.exit(1); }
console.log('\n结果: PASS ✅');
