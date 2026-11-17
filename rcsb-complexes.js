// RCSB 反查补充的 PDB 复合物（按配体 CCD 代码反查，交叉比对后补入遗漏结构，2026-11-11）
// 数据源：RCSB PDB。这些结构在 SW Atlas 原有 complexes 中缺失，现补入。
structures.push(
  // Suvorexant (SUV)
  structure('6TO7', L('OX1R · Suvorexant','OX1R · Suvorexant'), xray, '2.26', antagonistBound, 'ox1', 'suv', 'SUV', 'A', L('人 OX1R 工程构建。','Engineered human OX1R construct.')),
  structure('6TPJ', L('OX2R · Suvorexant','OX2R · Suvorexant'), xray, '2.74', antagonistBound, 'ox2', 'suv', 'SUV', 'A', L('人 OX2R 工程构建。','Engineered human OX2R construct.')),
  // Lemborexant (NRK)
  structure('6TOT', L('OX1R · Lemborexant','OX1R · Lemborexant'), xray, '2.22', antagonistBound, 'ox1', 'lem', 'NRK', 'A', L('人 OX1R 工程构建。','Engineered human OX1R construct.')),
  // Zolpidem (R5R) — native mouse GABA-A
  structure('8G4N', L('GABAₐ α1β2γ2 · Zolpidem','GABAₐ α1β2γ2 · Zolpidem'), cryo, '2.67', L('正变构调节剂结合态','Positive allosteric modulator-bound'), 'gaba', 'zol', 'R5R', 'C', L('小鼠脑天然 GABAₐ 受体 α1β2γ2。','Native mouse brain GABAₐ receptor α1β2γ2.')),
  structure('8G5G', L('GABAₐ α1α3β2 · Zolpidem','GABAₐ α1α3β2 · Zolpidem'), cryo, '2.94', L('正变构调节剂结合态','Positive allosteric modulator-bound'), 'gaba', 'zol', 'R5R', 'C', L('小鼠脑天然 GABAₐ 受体。','Native mouse brain GABAₐ receptor.')),
  structure('8G5H', L('GABAₐ α1α3β2 · Zolpidem','GABAₐ α1α3β2 · Zolpidem'), cryo, '2.89', L('正变构调节剂结合态','Positive allosteric modulator-bound'), 'gaba', 'zol', 'R5R', 'C', L('小鼠脑天然 GABAₐ 受体。','Native mouse brain GABAₐ receptor.')),
  // Ramelteon (JEV)
  structure('6ME9', L('MT₂ · Ramelteon','MT₂ · Ramelteon'), xray, '3.30', L('激动剂结合态','Agonist-bound'), 'mt2', 'ram', 'JEV', 'A', L('人 MT₂ XFEL 工程构建。','Engineered human MT₂ XFEL construct.')),
  structure('7DB6', L('MT₁ · Ramelteon · Gᵢ','MT₁ · Ramelteon · Gᵢ'), cryo, '3.30', L('激动剂及 G 蛋白结合态','Agonist- and G protein-bound'), 'mt1', 'ram', 'JEV', 'D', L('人 MT₁–Gᵢ 复合物。','Human MT₁–Gᵢ complex.')),
  structure('7VGZ', L('MT₁ · Ramelteon · Gᵢ','MT₁ · Ramelteon · Gᵢ'), cryo, '3.30', L('激动剂及 G 蛋白结合态','Agonist- and G protein-bound'), 'mt1', 'ram', 'JEV', 'B', L('人 MT₁–Gᵢ 复合物。','Human MT₁–Gᵢ complex.'))
);
