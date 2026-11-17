/* Reviewed pathway evidence: terminology and evidence layers, v0.9.2. */
const pathwayAtlas = {
  "version": "2.2",
  "reviewed": "2026-11-06",
  "systems": {
    "orexin": {
      "title": {
        "zh": "食欲素系统",
        "en": "Orexin system"
      },
      "nodes": [
        {
          "id": "orexin-ligands",
          "title": {
            "zh": "Orexin-A / -B",
            "en": "Orexin-A / -B"
          },
          "kind": "signal",
          "systemLink": null,
          "records": [
            "orb"
          ]
        },
        {
          "id": "ox1",
          "title": {
            "zh": "OX1R",
            "en": "OX1R"
          },
          "kind": "target",
          "record": "ox1",
          "systemLink": null
        },
        {
          "id": "ox2",
          "title": {
            "zh": "OX2R",
            "en": "OX2R"
          },
          "kind": "target",
          "record": "ox2",
          "systemLink": null
        },
        {
          "id": "orx-entry",
          "title": {
            "zh": "受体介导的 Ca²⁺ 内流",
            "en": "Receptor-mediated Ca²⁺ influx"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "orx-plc",
          "title": {
            "zh": "PLC 活化与 IP₃ 生成",
            "en": "PLC activation / IP₃ production"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "orx-calcium",
          "title": {
            "zh": "胞内 Ca²⁺ 浓度升高",
            "en": "Increased intracellular Ca²⁺"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "orx-camp",
          "title": {
            "zh": "福斯可林刺激下的 cAMP 累积",
            "en": "Forskolin-stimulated cAMP accumulation"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "orx-gprotein",
          "title": {
            "zh": "OX2R–G 蛋白复合物结构",
            "en": "OX2R–G-protein complex structure"
          },
          "kind": "structure",
          "systemLink": null,
          "description": {
            "zh": "7L1U 为 Orexin-B 结合的活化态 OX2R 与工程化 mini-G 蛋白复合物结构。工程化构建属于结构实验条件。",
            "en": "7L1U captures active OX2R bound to Orexin-B and an engineered mini-G protein. The engineered construct is part of the structural experiment."
          }
        },
        {
          "id": "lc-neurons",
          "title": {
            "zh": "LC 去甲肾上腺素能神经元",
            "en": "LC noradrenergic neurons"
          },
          "kind": "circuit",
          "systemLink": "monoamines"
        },
        {
          "id": "lh-stimulation",
          "title": {
            "zh": "Hcrt 光刺激 + 同步双侧 LC 干预",
            "en": "Hcrt stimulation + concurrent bilateral LC intervention"
          },
          "kind": "circuit",
          "record": "lh-lc",
          "systemLink": null
        },
        {
          "id": "transition",
          "title": {
            "zh": "NREM → 觉醒转换",
            "en": "NREM → wake transition"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "ox2-restoration",
          "title": {
            "zh": "后下丘脑 OX2R 恢复",
            "en": "Posterior hypothalamic OX2R rescue"
          },
          "kind": "circuit",
          "record": "tmn-rescue",
          "systemLink": null
        },
        {
          "id": "wake-consolidation",
          "title": {
            "zh": "觉醒时段维持",
            "en": "Consolidated wake bouts"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "hist-tmn",
          "title": {
            "zh": "TMN 组胺神经元",
            "en": "TMN histamine neurons"
          },
          "kind": "circuit",
          "systemLink": "histamine"
        }
      ],
      "edges": [
        {
          "id": "orx-bind-ox1",
          "from": "orexin-ligands",
          "to": "ox1",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "statement": {
            "zh": "食欲素激活 OX1R，配体间效力不同。",
            "en": "Orexins activate OX1R with different relative potencies."
          },
          "scope": {
            "zh": "重组受体药理",
            "en": "Recombinant receptor pharmacology"
          },
          "limitation": {
            "zh": "箭头不表示两种肽效力相同。",
            "en": "The arrow does not imply equal peptide potency."
          },
          "sources": [
            {
              "title": "Sakurai et al. · Cell 1998",
              "url": "https://pubmed.ncbi.nlm.nih.gov/9491897/",
              "pmid": "9491897",
              "doi": "10.1016/s0092-8674(00)80949-6",
              "label": "Sakurai et al. · Cell 1998",
              "verified": "2026-11-06",
              "fullTitle": "Orexins and orexin receptors: a family of hypothalamic neuropeptides and G protein-coupled receptors that regulate feeding behavior.",
              "year": "1998",
              "journal": "Cell"
            }
          ],
          "canonicalId": "orexin/orx-bind-ox1"
        },
        {
          "id": "orx-bind-ox2",
          "from": "orexin-ligands",
          "to": "ox2",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "statement": {
            "zh": "食欲素肽激活 OX2R；激动作用来自重组受体药理实验。",
            "en": "Orexin peptides activate OX2R, as supported by recombinant-receptor pharmacology."
          },
          "scope": {
            "zh": "重组受体药理",
            "en": "Recombinant receptor pharmacology"
          },
          "limitation": {
            "zh": "细胞实验中的激动作用不能直接量化天然神经元耦联效率或在体促醒效应。",
            "en": "Agonism in a cellular assay does not directly quantify native-neuron coupling efficiency or wake effects in vivo."
          },
          "sources": [
            {
              "title": "Sakurai et al. · Cell 1998",
              "url": "https://pubmed.ncbi.nlm.nih.gov/9491897/",
              "pmid": "9491897",
              "doi": "10.1016/s0092-8674(00)80949-6",
              "label": "Sakurai et al. · Cell 1998",
              "verified": "2026-11-06",
              "fullTitle": "Orexins and orexin receptors: a family of hypothalamic neuropeptides and G protein-coupled receptors that regulate feeding behavior.",
              "year": "1998",
              "journal": "Cell"
            }
          ],
          "canonicalId": "orexin/orx-bind-ox2"
        },
        {
          "id": "orx-ox1-entry",
          "from": "ox1",
          "to": "orx-entry",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "Ca²⁺ 内流",
            "en": "Ca²⁺ entry"
          },
          "statement": {
            "zh": "CHO 细胞中的 OX1R 刺激引起依赖跨膜驱动力的 Ca²⁺ 内流。",
            "en": "OX1R stimulation in CHO cells produced Ca²⁺ entry dependent on the transmembrane driving force."
          },
          "scope": {
            "zh": "稳定表达 OX1R 的 CHO 细胞；荧光与膜电位操控",
            "en": "Stable OX1R CHO cells; fluorescence and membrane-potential manipulation"
          },
          "limitation": {
            "zh": "通道成分和药物浓度依赖性需按实验区分。",
            "en": "Channel composition and concentration dependence remain assay-specific."
          },
          "sources": [
            {
              "title": "Lund et al. · J Biol Chem 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10880509/",
              "pmid": "10880509",
              "doi": "10.1074/jbc.m002603200",
              "label": "Lund et al. · J Biol Chem 2000",
              "verified": "2026-11-06",
              "fullTitle": "The orexin OX1 receptor activates a novel Ca2+ influx pathway necessary for coupling to phospholipase C.",
              "year": "2000",
              "journal": "The Journal of biological chemistry"
            }
          ],
          "canonicalId": "orexin/orx-ox1-entry"
        },
        {
          "id": "orx-ox1-plc",
          "from": "ox1",
          "to": "orx-plc",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "激活 PLC 信号通路",
            "en": "Activates PLC signaling"
          },
          "statement": {
            "zh": "受体刺激增加 IP₃；细胞外 Ca²⁺ 改变反应敏感性。",
            "en": "Receptor stimulation increased IP₃; extracellular Ca²⁺ altered response sensitivity."
          },
          "scope": {
            "zh": "CHO 重组细胞；IP₃ 检测",
            "en": "Recombinant CHO cells; IP₃ measurement"
          },
          "limitation": {
            "zh": "未据此绘制所有神经元统一的单向 Gq–PLC 级联。",
            "en": "This does not establish a universal one-way Gq–PLC cascade in all neurons."
          },
          "sources": [
            {
              "title": "Lund et al. · J Biol Chem 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10880509/",
              "pmid": "10880509",
              "doi": "10.1074/jbc.m002603200",
              "label": "Lund et al. · J Biol Chem 2000",
              "verified": "2026-11-06",
              "fullTitle": "The orexin OX1 receptor activates a novel Ca2+ influx pathway necessary for coupling to phospholipase C.",
              "year": "2000",
              "journal": "The Journal of biological chemistry"
            }
          ],
          "canonicalId": "orexin/orx-ox1-plc"
        },
        {
          "id": "orx-entry-plc",
          "from": "orx-entry",
          "to": "orx-plc",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "促进 PLC 信号转导",
            "en": "Enhances PLC signaling"
          },
          "statement": {
            "zh": "减少 Ca²⁺ 内流削弱低浓度 orexin-A 的 PLC 响应。",
            "en": "Reducing Ca²⁺ entry attenuated the PLC response to low orexin-A concentrations."
          },
          "scope": {
            "zh": "同一 CHO 实验体系；Ca²⁺ 与电压操控",
            "en": "Same CHO system; Ca²⁺ and voltage perturbation"
          },
          "limitation": {
            "zh": "这是内流对信号的调节，不能简化为 PLC 仅在内流上游。",
            "en": "Entry modulates signaling; PLC cannot simply be placed only upstream of influx."
          },
          "sources": [
            {
              "title": "Lund et al. · J Biol Chem 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10880509/",
              "pmid": "10880509",
              "doi": "10.1074/jbc.m002603200",
              "label": "Lund et al. · J Biol Chem 2000",
              "verified": "2026-11-06",
              "fullTitle": "The orexin OX1 receptor activates a novel Ca2+ influx pathway necessary for coupling to phospholipase C.",
              "year": "2000",
              "journal": "The Journal of biological chemistry"
            }
          ],
          "canonicalId": "orexin/orx-entry-plc"
        },
        {
          "id": "orx-ox2-calcium",
          "from": "ox2",
          "to": "orx-calcium",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "促进 Ca²⁺ 动员",
            "en": "Stimulates Ca²⁺ mobilization"
          },
          "statement": {
            "zh": "在表达大鼠 OX2R–EGFP 的 BIM 细胞中，orexin-A 诱导胞内 Ca²⁺ 浓度升高；该反应对 PTX 预处理不敏感。",
            "en": "In BIM cells expressing rat OX2R–EGFP, orexin-A increased intracellular Ca²⁺; this response was insensitive to PTX pretreatment."
          },
          "scope": {
            "zh": "BIM 人–鼠杂交神经样细胞 · 大鼠 OX2R–EGFP · fura-2 荧光测定",
            "en": "Human–rat hybrid neuronal BIM cells · Rat OX2R–EGFP · Fura-2 fluorescence"
          },
          "limitation": {
            "zh": "仅凭细胞信号检测与抑制剂敏感性，不能确定唯一的 G 蛋白耦联亚型。",
            "en": "A readout and inhibitor response alone do not identify a unique G-protein subtype."
          },
          "sources": [
            {
              "title": "Zhu et al. · J Pharmacol Sci 2003",
              "url": "https://pubmed.ncbi.nlm.nih.gov/12890892/",
              "pmid": "12890892",
              "doi": "10.1254/jphs.92.259",
              "label": "Zhu et al. · J Pharmacol Sci 2003",
              "verified": "2026-11-06",
              "fullTitle": "Orexin receptor type-1 couples exclusively to pertussis toxin-insensitive G-proteins, while orexin receptor type-2 couples to both pertussis toxin-sensitive and -insensitive G-proteins.",
              "year": "2003",
              "journal": "Journal of pharmacological sciences"
            }
          ],
          "canonicalId": "orexin/orx-ox2-calcium"
        },
        {
          "id": "orx-ox2-camp",
          "from": "ox2",
          "to": "orx-camp",
          "sign": "inhibition",
          "layer": "molecular",
          "relation": {
            "zh": "降低 cAMP 累积",
            "en": "Reduces cAMP accumulation"
          },
          "statement": {
            "zh": "在表达大鼠 OX2R–EGFP 的 BIM 细胞中，orexin-A 降低福斯可林刺激下的 cAMP 累积；PTX 预处理消除该效应。",
            "en": "In BIM cells expressing rat OX2R–EGFP, orexin-A reduced forskolin-stimulated cAMP accumulation; PTX pretreatment abolished this effect."
          },
          "scope": {
            "zh": "BIM 人–鼠杂交神经样细胞 · 大鼠 OX2R–EGFP · cAMP 酶免疫测定",
            "en": "Human–rat hybrid neuronal BIM cells · Rat OX2R–EGFP · cAMP enzyme immunoassay"
          },
          "limitation": {
            "zh": "测定的是 cAMP 累积，不是腺苷酸环化酶的直接活性；PTX 敏感性支持 G_i/o 家族参与，不能指定唯一 Gα 亚型，也不能直接外推到人源受体。",
            "en": "The endpoint was cAMP accumulation, not direct adenylyl-cyclase activity. PTX sensitivity supports G_i/o-family involvement without identifying a unique Gα subtype or directly establishing human-receptor behavior."
          },
          "sources": [
            {
              "title": "Zhu et al. · J Pharmacol Sci 2003",
              "url": "https://pubmed.ncbi.nlm.nih.gov/12890892/",
              "pmid": "12890892",
              "doi": "10.1254/jphs.92.259",
              "label": "Zhu et al. · J Pharmacol Sci 2003",
              "verified": "2026-11-06",
              "fullTitle": "Orexin receptor type-1 couples exclusively to pertussis toxin-insensitive G-proteins, while orexin receptor type-2 couples to both pertussis toxin-sensitive and -insensitive G-proteins.",
              "year": "2003",
              "journal": "Journal of pharmacological sciences"
            }
          ],
          "canonicalId": "orexin/orx-ox2-camp"
        },
        {
          "id": "orx-ox2-structure",
          "from": "ox2",
          "to": "orx-gprotein",
          "sign": "context",
          "layer": "structural",
          "relation": {
            "zh": "活化态复合物结构",
            "en": "Active-state complex structure"
          },
          "statement": {
            "zh": "Orexin-B–OX2R 与工程 mini-G 蛋白复合物捕获活化构象。",
            "en": "The Orexin-B–OX2R complex with an engineered mini-G protein captures an active conformation."
          },
          "scope": {
            "zh": "人受体工程构建；冷冻电镜 3.2 Å",
            "en": "Engineered human receptor; cryo-EM at 3.2 Å"
          },
          "limitation": {
            "zh": "工程 G 蛋白用于稳定结构，不代表天然细胞的耦联选择性全谱。",
            "en": "The engineered G protein stabilizes the structure; it does not establish the native coupling spectrum."
          },
          "sources": [
            {
              "title": "Hong et al. · Nature Communications 2021",
              "url": "https://pubmed.ncbi.nlm.nih.gov/33547286/",
              "pmid": "33547286",
              "doi": "10.1038/s41467-021-21087-6",
              "label": "Hong et al. · Nature Communications 2021",
              "verified": "2026-11-06",
              "fullTitle": "Structures of active-state orexin receptor 2 rationalize peptide and small-molecule agonist recognition and receptor activation.",
              "year": "2021",
              "journal": "Nature communications"
            }
          ],
          "canonicalId": "orexin/orx-ox2-structure"
        },
        {
          "id": "orx-lc-depol",
          "from": "orexin-ligands",
          "to": "lc-neurons",
          "sign": "activation",
          "layer": "cross",
          "relation": {
            "zh": "去极化 / 放电",
            "en": "Depolarization / firing"
          },
          "statement": {
            "zh": "大鼠脑片中食欲素直接使 LC 神经元去极化；OX1 偏好拮抗剂可阻断该响应。",
            "en": "Orexins directly depolarized LC neurons in rat slices; an OX1-preferring antagonist blocked the response."
          },
          "scope": {
            "zh": "大鼠 LC 脑片；膜片钳 / 局部药理",
            "en": "Rat LC slices; electrophysiology / local pharmacology"
          },
          "limitation": {
            "zh": "离体细胞药理支持 OX1R 参与，不能外推为在体全部促醒作用均依赖该亚型；研究未发现离体 LC 中持续性 OX1R 激活的证据。",
            "en": "Ex-vivo pharmacology supports OX1R involvement, not universal subtype dependence of wake effects in vivo; the study did not find evidence of tonic OX1R activation in the isolated LC preparation."
          },
          "sources": [
            {
              "title": "Ivanov & Aston-Jones · NeuroReport 2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10852238/",
              "pmid": "10852238",
              "doi": "10.1097/00001756-200006050-00031",
              "label": "Ivanov & Aston-Jones · NeuroReport 2000",
              "verified": "2026-11-06",
              "fullTitle": "Hypocretin/orexin depolarizes and decreases potassium conductance in locus coeruleus neurons.",
              "year": "2000",
              "journal": "Neuroreport"
            },
            {
              "title": "Soffin et al. · Neuropharmacology 2002",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11750922/",
              "pmid": "11750922",
              "doi": "10.1016/s0028-3908(01)00156-3",
              "label": "Soffin et al. · Neuropharmacology 2002",
              "verified": "2026-11-06",
              "fullTitle": "SB-334867-A antagonises orexin mediated excitation in the locus coeruleus.",
              "year": "2002",
              "journal": "Neuropharmacology"
            }
          ],
          "canonicalId": "orexin/orx-lc-depol"
        },
        {
          "id": "orx-lc-perturb",
          "from": "lh-stimulation",
          "to": "transition",
          "sign": "context",
          "layer": "circuit",
          "relation": {
            "zh": "Hcrt 诱导的觉醒潜伏期缩短效应受阻",
            "en": "Blockade of Hcrt-induced shortening of wake latency"
          },
          "statement": {
            "zh": "在小鼠休息期，同步双侧 LC 光抑制，或预先在 LC 区域双侧注射 SB-334867，消除 Hcrt 神经元光刺激缩短 NREM–觉醒潜伏期的效应。",
            "en": "During the mouse inactive period, concurrent bilateral LC photoinhibition or prior bilateral SB-334867 injection into the LC region abolished Hcrt-photostimulation-induced shortening of NREM-to-wake latency."
          },
          "scope": {
            "zh": "小鼠休息期 · Hcrt 10 Hz 光刺激 · 双侧 LC 干预",
            "en": "Mouse inactive period · 10-Hz Hcrt photostimulation · Bilateral LC intervention"
          },
          "limitation": {
            "zh": "单侧 LC 抑制或 Hcrt 刺激结束后的 LC 抑制未复制该效应；不能据此判定 LC 是所有自然觉醒的唯一必要通路。",
            "en": "Unilateral LC inhibition or inhibition after Hcrt stimulation did not reproduce the effect; LC is not thereby established as the sole obligatory route for all spontaneous awakening."
          },
          "sources": [
            {
              "title": "Carter et al. · PNAS 2012",
              "url": "https://pubmed.ncbi.nlm.nih.gov/22955882/",
              "pmid": "22955882",
              "doi": "10.1073/pnas.1202526109",
              "label": "Carter et al. · PNAS 2012",
              "verified": "2026-11-06",
              "fullTitle": "Mechanism for Hypocretin-mediated sleep-to-wake transitions.",
              "year": "2012",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "canonicalId": "orexin/orx-lc-perturb"
        },
        {
          "id": "orx-lc-context",
          "from": "lc-neurons",
          "to": "lh-stimulation",
          "sign": "context",
          "layer": "circuit",
          "relation": {
            "zh": "实验对象",
            "en": "Experimental population"
          },
          "statement": {
            "zh": "LC 是该双位点干预研究中的下游操控群体。",
            "en": "LC is the downstream manipulated population in the dual-site study."
          },
          "scope": {
            "zh": "小鼠在体 LC / Hcrt 干预",
            "en": "In vivo mouse LC / Hcrt perturbation"
          },
          "limitation": {
            "zh": "此连线标示实验关联，不是新的突触连接结论。",
            "en": "This denotes experimental context, not a newly established synaptic connection."
          },
          "sources": [
            {
              "title": "Carter et al. · PNAS 2012",
              "url": "https://pubmed.ncbi.nlm.nih.gov/22955882/",
              "pmid": "22955882",
              "doi": "10.1073/pnas.1202526109",
              "label": "Carter et al. · PNAS 2012",
              "verified": "2026-11-06",
              "fullTitle": "Mechanism for Hypocretin-mediated sleep-to-wake transitions.",
              "year": "2012",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "canonicalId": "orexin/orx-lc-context"
        },
        {
          "id": "orx-rescue-context",
          "from": "ox2",
          "to": "ox2-restoration",
          "sign": "context",
          "layer": "circuit",
          "relation": {
            "zh": "条件性恢复",
            "en": "Conditional restoration"
          },
          "statement": {
            "zh": "在 OX2R 转录被阻断的小鼠后下丘脑中进行区域受体恢复。",
            "en": "Receptor expression was restored regionally in posterior hypothalamus of mice with disrupted OX2R transcription."
          },
          "scope": {
            "zh": "小鼠；区域 AAV-Cre 救援",
            "en": "Mouse; regional AAV-Cre rescue"
          },
          "limitation": {
            "zh": "区域覆盖 TMN 及邻近组织。",
            "en": "The region includes TMN and neighboring tissue."
          },
          "sources": [
            {
              "title": "Mochizuki et al. · PNAS 2011",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21368172/",
              "pmid": "21368172",
              "doi": "10.1073/pnas.1012456108",
              "label": "Mochizuki et al. · PNAS 2011",
              "verified": "2026-11-06",
              "fullTitle": "Orexin receptor 2 expression in the posterior hypothalamus rescues sleepiness in narcoleptic mice.",
              "year": "2011",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "canonicalId": "orexin/orx-rescue-context"
        },
        {
          "id": "orx-rescue-outcome",
          "from": "ox2-restoration",
          "to": "wake-consolidation",
          "sign": "context",
          "layer": "circuit",
          "relation": {
            "zh": "觉醒维持改善",
            "en": "Improved wake maintenance"
          },
          "statement": {
            "zh": "区域恢复改善长觉醒时段，但睡眠碎片化未被纠正。",
            "en": "Regional restoration improved long wake bouts without correcting fragmented sleep."
          },
          "scope": {
            "zh": "小鼠遗传救援；EEG/EMG",
            "en": "Mouse genetic rescue; EEG/EMG"
          },
          "limitation": {
            "zh": "不能将区域结果仅归于组胺细胞，也不能等同于人体药物效应。",
            "en": "The regional effect is not exclusive to histamine cells and is not a human drug outcome."
          },
          "sources": [
            {
              "title": "Mochizuki et al. · PNAS 2011",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21368172/",
              "pmid": "21368172",
              "doi": "10.1073/pnas.1012456108",
              "label": "Mochizuki et al. · PNAS 2011",
              "verified": "2026-11-06",
              "fullTitle": "Orexin receptor 2 expression in the posterior hypothalamus rescues sleepiness in narcoleptic mice.",
              "year": "2011",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "canonicalId": "orexin/orx-rescue-outcome"
        },
        {
          "id": "orx-tmn",
          "from": "ox2",
          "to": "hist-tmn",
          "sign": "activation",
          "layer": "cross",
          "relation": {
            "zh": "TMN 兴奋",
            "en": "TMN excitation"
          },
          "statement": {
            "zh": "Orexin 使分离的 TMN 组胺神经元兴奋，受体表达与药理支持 OX2R 参与。",
            "en": "Orexin excited isolated TMN histamine neurons; receptor expression and pharmacology support OX2R involvement."
          },
          "scope": {
            "zh": "大鼠 TMN；分离细胞电生理与表达",
            "en": "Rat TMN; isolated-cell electrophysiology and expression"
          },
          "limitation": {
            "zh": "本实验支持食欲素对 TMN 组胺神经元的兴奋作用，没有检验该投射是否为所有食欲素促醒效应的必经通路。",
            "en": "This experiment supports orexin-mediated excitation of TMN histamine neurons; it did not test whether this projection is obligatory for every orexin-induced wake effect."
          },
          "sources": [
            {
              "title": "Yamanaka et al. · BBRC 2002",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11811995/",
              "pmid": "11811995",
              "doi": "10.1006/bbrc.2001.6318",
              "label": "Yamanaka et al. · BBRC 2002",
              "verified": "2026-11-06",
              "fullTitle": "Orexins activate histaminergic neurons via the orexin 2 receptor.",
              "year": "2002",
              "journal": "Biochemical and biophysical research communications"
            }
          ],
          "canonicalId": "orexin/orx-tmn"
        }
      ],
      "lead": {
        "zh": "食欲素作用于 OX1R 与 OX2R，调节细胞内信号及觉醒相关神经元活动。受体药理、神经环路干预和复合物结构分别列示。",
        "en": "Orexins act at OX1R and OX2R to regulate intracellular signaling and arousal-related neuronal activity. Receptor pharmacology, circuit interventions and complex structures are presented separately."
      },
      "question": {
        "zh": "受体构象、细胞信号与觉醒维持之间的关联，能否通过相互独立的结构、功能与行为实验验证？",
        "en": "Can relationships among receptor conformation, cellular signaling and wake maintenance be tested with independent structural, functional and behavioral experiments?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "adenosine": {
      "id": "adenosine",
      "title": {
        "zh": "腺苷系统",
        "en": "Adenosine system"
      },
      "summary": {
        "zh": "涵盖 A₂A 受体耦联、不同脑区的睡眠调节证据及咖啡因的受体拮抗作用。分别呈现伏隔核核心区与壳区的实验结果。",
        "en": "A₂A receptor coupling, regional evidence for sleep regulation, and caffeine antagonism. Findings from the nucleus accumbens core and shell are presented separately."
      },
      "nodes": [
        {
          "id": "sustained-wake",
          "title": {
            "zh": "持续觉醒",
            "en": "Sustained wake"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "bf-adenosine",
          "title": {
            "zh": "细胞外腺苷浓度升高",
            "en": "Increased extracellular adenosine concentration"
          },
          "kind": "signal",
          "subtitle": {
            "zh": "猫 · 基底前脑微透析",
            "en": "Cat · Basal forebrain microdialysis"
          },
          "systemLink": null
        },
        {
          "id": "adenosine",
          "title": {
            "zh": "腺苷",
            "en": "Adenosine"
          },
          "kind": "signal",
          "record": "ado",
          "systemLink": null
        },
        {
          "id": "a2ar",
          "title": {
            "zh": "A₂A 受体",
            "en": "A₂A receptor"
          },
          "kind": "target",
          "record": "a2a",
          "systemLink": null
        },
        {
          "id": "gs-olf",
          "title": {
            "zh": "Gₒₗf",
            "en": "Gₒₗf"
          },
          "kind": "effector",
          "systemLink": null,
          "subtitle": {
            "zh": "纹状体 · 功能耦联证据",
            "en": "Striatum · Functional coupling evidence"
          }
        },
        {
          "id": "camp",
          "title": {
            "zh": "腺苷酸环化酶 / cAMP",
            "en": "Adenylyl cyclase / cAMP"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "vlpo-type2",
          "title": {
            "zh": "VLPO Type-2 神经元",
            "en": "VLPO Type-2 neurons"
          },
          "kind": "circuit",
          "crossSystem": "gaba",
          "subtitle": {
            "zh": "大鼠 · GAD / galanin 标记",
            "en": "Rat · GAD / galanin markers"
          },
          "systemLink": "gaba"
        },
        {
          "id": "nac-core",
          "title": {
            "zh": "NAc 核心区 Adora2a⁺ 神经元",
            "en": "NAc core Adora2a⁺ neurons"
          },
          "kind": "circuit",
          "record": "nac-vp",
          "crossSystem": "gaba",
          "systemLink": "gaba"
        },
        {
          "id": "nac-vp-terminals",
          "title": {
            "zh": "NAc 核心区神经元在 VP 的轴突末梢",
            "en": "NAc-core neuronal terminals in VP"
          },
          "kind": "circuit",
          "record": "nac-vp",
          "crossSystem": "gaba",
          "subtitle": {
            "zh": "小鼠 · 投射末梢光刺激",
            "en": "Mouse · Projection-terminal photostimulation"
          },
          "systemLink": "gaba"
        },
        {
          "id": "vp",
          "title": {
            "zh": "腹侧苍白球",
            "en": "Ventral pallidum"
          },
          "kind": "circuit",
          "crossSystem": "gaba",
          "systemLink": "gaba"
        },
        {
          "id": "sws",
          "title": {
            "zh": "慢波睡眠时间增加",
            "en": "Increased slow-wave sleep time"
          },
          "kind": "sleep",
          "systemLink": null
        },
        {
          "id": "caffeine",
          "title": {
            "zh": "咖啡因",
            "en": "Caffeine"
          },
          "kind": "wake",
          "record": "caf",
          "systemLink": null
        },
        {
          "id": "nac-shell-a2a",
          "title": {
            "zh": "NAc 壳区 A₂A 受体",
            "en": "NAc shell A₂A receptors"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "caffeine-wake",
          "title": {
            "zh": "咖啡因诱导的觉醒增加",
            "en": "Caffeine-induced increase in wakefulness"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "mini-gs",
          "title": {
            "zh": "mini-Gₛ（工程化蛋白）",
            "en": "mini-Gₛ (engineered protein)"
          },
          "kind": "structure",
          "subtitle": {
            "zh": "结构复合物；非天然神经元功能实验",
            "en": "Structural complex; not a native-neuron functional assay"
          },
          "systemLink": null
        },
        {
          "id": "a1r",
          "title": {
            "zh": "A₁ 受体",
            "en": "A₁ receptor"
          },
          "kind": "target",
          "subtitle": {
            "zh": "小鼠下丘脑脑片药理证据",
            "en": "Pharmacology in mouse hypothalamic slices"
          },
          "systemLink": null
        },
        {
          "id": "orexin-a1-context",
          "title": {
            "zh": "食欲素神经元",
            "en": "Orexin neurons"
          },
          "kind": "circuit",
          "subtitle": {
            "zh": "小鼠 GFP 标记细胞",
            "en": "GFP-identified mouse cells"
          },
          "systemLink": "orexin",
          "crossSystem": "orexin"
        }
      ],
      "edges": [
        {
          "id": "ad-wake-accumulation",
          "from": "sustained-wake",
          "to": "bf-adenosine",
          "sign": "context",
          "relation": {
            "zh": "伴随腺苷浓度升高",
            "en": "Associated increase in adenosine concentration"
          },
          "statement": {
            "zh": "猫基底前脑细胞外腺苷浓度在持续觉醒期间升高，在恢复睡眠期间下降。",
            "en": "Extracellular adenosine concentration in the cat basal forebrain increased during sustained wakefulness and decreased during recovery sleep."
          },
          "scope": {
            "zh": "猫 · 在体微透析",
            "en": "Cat · In vivo microdialysis"
          },
          "limitation": {
            "zh": "该浓度变化测定于基底前脑，不能直接外推至伏隔核或腹外侧视前区。",
            "en": "The concentration changes were measured in the basal forebrain and cannot be directly extrapolated to the nucleus accumbens or ventrolateral preoptic area."
          },
          "sources": [
            {
              "id": "porkka1997",
              "title": "Porkka-Heiskanen et al. · Adenosine: a mediator of the sleep-inducing effects of prolonged wakefulness",
              "pmid": "9157887",
              "doi": "10.1126/science.276.5316.1265",
              "year": "1997",
              "url": "https://pubmed.ncbi.nlm.nih.gov/9157887/",
              "verifiedFinding": "Freely behaving cat basal forebrain microdialysis shows extracellular adenosine increases during sustained wake and decreases during recovery sleep. It does not measure adenosine in NAc or VLPO.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Porkka-Heiskanen et al. · Adenosine: a mediator of the sleep-inducing effects of prolonged wakefulness",
              "fullTitle": "Adenosine: a mediator of the sleep-inducing effects of prolonged wakefulness.",
              "journal": "Science (New York, N.Y.)"
            }
          ],
          "layer": "state",
          "canonicalId": "adenosine/ad-wake-accumulation"
        },
        {
          "id": "ad-ligand-receptor",
          "from": "adenosine",
          "to": "a2ar",
          "sign": "context",
          "relation": {
            "zh": "腺苷正构结合（结构）",
            "en": "Orthosteric adenosine binding (structure)"
          },
          "statement": {
            "zh": "工程化人 A₂A 受体与腺苷的共晶结构解析了腺苷的正构结合构象。",
            "en": "The co-crystal structure of an engineered human A₂A receptor with adenosine resolved its orthosteric binding pose."
          },
          "scope": {
            "zh": "人源受体工程构建体 · X 射线晶体学",
            "en": "Engineered human receptor construct · X-ray crystallography"
          },
          "limitation": {
            "zh": "2YDO 为受体激活中间态结构；配体结合构象本身不证明下游信号转导或细胞功能效应。",
            "en": "2YDO captures an active-intermediate receptor conformation; the ligand-binding pose alone does not establish downstream signaling or a cellular functional effect."
          },
          "sources": [
            {
              "id": "lebon2011",
              "title": "Lebon et al. · Agonist-bound adenosine A2A receptor structures reveal common features of GPCR activation",
              "pmid": "21593763",
              "doi": "10.1038/nature10136",
              "year": "2011",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21593763/",
              "verifiedFinding": "Human engineered A2AR-GL31 bound adenosine or NECA; structures are active-intermediate, not fully G-protein-bound active states.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Lebon et al. · Agonist-bound adenosine A2A receptor structures reveal common features of GPCR activation",
              "fullTitle": "Agonist-bound adenosine A2A receptor structures reveal common features of GPCR activation.",
              "journal": "Nature"
            }
          ],
          "layer": "structural",
          "canonicalId": "adenosine/ad-ligand-receptor"
        },
        {
          "id": "ad-coupling",
          "from": "a2ar",
          "to": "gs-olf",
          "sign": "activation",
          "relation": {
            "zh": "Gₒₗf 激活",
            "en": "Gₒₗf activation"
          },
          "statement": {
            "zh": "大鼠纹状体实验支持 A₂A 受体激活 Gₒₗf。",
            "en": "Rat striatal experiments support A₂A receptor-mediated Gₒₗf activation."
          },
          "scope": {
            "zh": "大鼠纹状体 · 受体药理 / G 蛋白活化测定",
            "en": "Rat striatum · Receptor pharmacology / G-protein activation assay"
          },
          "limitation": {
            "zh": "该结果支持纹状体 Gₒₗf 耦联，不能自动外推至 VLPO 或其他细胞类型；未测定睡眠效应。",
            "en": "The result supports striatal Gₒₗf coupling; it does not automatically extend to VLPO or other cell types, and sleep was not measured."
          },
          "sources": [
            {
              "id": "kull2000",
              "title": "Kull et al. · Adenosine A2A receptors are colocalized with and activate Golf in rat striatum",
              "pmid": "10999947",
              "doi": "10.1124/mol.58.4.771",
              "year": "2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10999947/",
              "verifiedFinding": "Rat striatal A2AR and Golf coexpression and G-protein activation; Golf transfection increases CGS21680-evoked cAMP in human A2AR-expressing CHO cells.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Kull et al. · Adenosine A2A receptors are colocalized with and activate Golf in rat striatum",
              "fullTitle": "Adenosine A(2A) receptors are colocalized with and activate g(olf) in rat striatum.",
              "journal": "Molecular pharmacology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "adenosine/ad-coupling"
        },
        {
          "id": "ad-camp",
          "from": "gs-olf",
          "to": "camp",
          "sign": "activation",
          "relation": {
            "zh": "Gₒₗf 依赖的腺苷酸环化酶激活",
            "en": "Gₒₗf-dependent adenylyl cyclase activation"
          },
          "statement": {
            "zh": "小鼠 Gnal 缺失使尾状壳核中腺苷诱导的腺苷酸环化酶活性增加消失。",
            "en": "Gnal deficiency abolished the adenosine-induced increase in adenylyl cyclase activity in mouse caudate putamen."
          },
          "scope": {
            "zh": "小鼠 · 遗传缺失 / 生化测定",
            "en": "Mouse · Genetic loss / Biochemical assay"
          },
          "limitation": {
            "zh": "该功能结果针对 Gₒₗf；研究未测定睡眠，也未验证腹外侧视前区存在相同机制。",
            "en": "This functional result concerns Gₒₗf. The study did not assess sleep or establish the same mechanism in the ventrolateral preoptic area."
          },
          "sources": [
            {
              "id": "corvol2001",
              "title": "Corvol et al. · Galpha(olf) is necessary for coupling D1 and A2a receptors to adenylyl cyclase in the striatum",
              "pmid": "11238742",
              "doi": "10.1046/j.1471-4159.2001.00201.x",
              "year": "2001",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11238742/",
              "verifiedFinding": "Gnal-deficient mouse caudate putamen loses adenosine-stimulated adenylyl cyclase responses; heterozygosity reduces CGS21680-evoked cAMP efficacy.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Corvol et al. · Galpha(olf) is necessary for coupling D1 and A2a receptors to adenylyl cyclase in the striatum",
              "fullTitle": "Galpha(olf) is necessary for coupling D1 and A2a receptors to adenylyl cyclase in the striatum.",
              "journal": "Journal of neurochemistry"
            }
          ],
          "layer": "molecular",
          "canonicalId": "adenosine/ad-camp"
        },
        {
          "id": "ad-vlpo",
          "from": "a2ar",
          "to": "vlpo-type2",
          "sign": "activation",
          "relation": {
            "zh": "突触后兴奋",
            "en": "Postsynaptic excitation"
          },
          "statement": {
            "zh": "腺苷通过突触后 A₂A 受体兴奋大鼠 VLPO Type-2 神经元；该细胞亚群被研究者归为推定促睡眠神经元。",
            "en": "Adenosine excited rat VLPO Type-2 neurons through postsynaptic A₂A receptors; the study classified this subset as putative sleep-promoting neurons."
          },
          "scope": {
            "zh": "大鼠脑片 · 受体药理 / 膜片钳",
            "en": "Rat slices · Receptor pharmacology / Patch clamp"
          },
          "limitation": {
            "zh": "该效应仅见于研究所定义的 Type-2 亚群，不能概括为所有 VLPO 神经元的共同反应。",
            "en": "The effect was confined to the study-defined Type-2 subset and does not describe all VLPO neurons."
          },
          "sources": [
            {
              "id": "gallopin2005",
              "title": "Gallopin et al. · The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus",
              "pmid": "16039802",
              "doi": "10.1016/j.neuroscience.2005.05.045",
              "year": "2005",
              "url": "https://pubmed.ncbi.nlm.nih.gov/16039802/",
              "verifiedFinding": "Rat VLPO slices: only Type-2 putative sleep neurons are excited postsynaptically by adenosine via A2AR; both Type-1 and Type-2 cells contain galanin and GAD65/67 mRNA.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Gallopin et al. · The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus",
              "fullTitle": "The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus.",
              "journal": "Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "adenosine/ad-vlpo"
        },
        {
          "id": "ad-marker",
          "from": "a2ar",
          "to": "nac-core",
          "sign": "context",
          "relation": {
            "zh": "Adora2a 表达标记",
            "en": "Adora2a expression marker"
          },
          "statement": {
            "zh": "研究利用 Adora2a-Cre 小鼠标记并操控伏隔核核心区的相应神经元群。",
            "en": "Adora2a-Cre mice were used to label and manipulate the corresponding neuronal population in the nucleus accumbens core."
          },
          "scope": {
            "zh": "小鼠 · 细胞型遗传标记",
            "en": "Mouse · Cell-type genetic labeling"
          },
          "limitation": {
            "zh": "此线表示表达标记，不表示光遗传实验直接激活了 A₂A 受体。",
            "en": "This edge denotes an expression marker, not direct A₂A-receptor activation by optogenetics."
          },
          "sources": [
            {
              "id": "oishi2017",
              "title": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "pmid": "28963505",
              "doi": "10.1038/s41467-017-00781-4",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28963505/",
              "verifiedFinding": "Adora2a-Cre mouse NAc core neuron and VP terminal activation induces SWS; VP IPSCs are picrotoxin sensitive. This manipulates Adora2a-expressing cells rather than directly activating their A2AR.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "fullTitle": "Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice.",
              "journal": "Nature communications"
            }
          ],
          "layer": "circuit",
          "canonicalId": "adenosine/ad-marker"
        },
        {
          "id": "ad-nac-terminal-projection",
          "from": "nac-core",
          "to": "nac-vp-terminals",
          "sign": "context",
          "relation": {
            "zh": "轴突投射至 VP",
            "en": "Axonal projection to VP"
          },
          "statement": {
            "zh": "在小鼠 NAc 核心区 Adora2a⁺ 神经元中表达 ChR2，显示其轴突密集投射至 VP，并允许在 VP 对末梢进行光刺激。",
            "en": "ChR2 expression in mouse NAc-core Adora2a⁺ neurons revealed dense axonal projections to VP and enabled terminal photostimulation in VP."
          },
          "scope": {
            "zh": "小鼠 · Cre 依赖标记 / 轴突解剖示踪",
            "en": "Mouse · Cre-dependent labelling / Axonal anatomy"
          },
          "limitation": {
            "zh": "该线表示投射归属，不表示 A₂A 受体被直接激活，也不表示 VP 神经元兴奋。",
            "en": "This edge denotes projection identity, not direct A₂A-receptor activation or excitation of VP neurons."
          },
          "sources": [
            {
              "id": "oishi2017",
              "title": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "pmid": "28963505",
              "doi": "10.1038/s41467-017-00781-4",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28963505/",
              "verifiedFinding": "Adora2a-Cre mouse NAc core neuron and VP terminal activation induces SWS; VP IPSCs are picrotoxin sensitive. This manipulates Adora2a-expressing cells rather than directly activating their A2AR.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "fullTitle": "Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice.",
              "journal": "Nature communications"
            }
          ],
          "layer": "circuit",
          "canonicalId": "adenosine/ad-nac-terminal-projection"
        },
        {
          "id": "ad-nac-vp",
          "from": "nac-vp-terminals",
          "to": "vp",
          "sign": "inhibition",
          "relation": {
            "zh": "GABA 性突触抑制",
            "en": "GABAergic synaptic inhibition"
          },
          "statement": {
            "zh": "光刺激 NAc 核心区 Adora2a⁺ 神经元的轴突末梢抑制 VP 神经元；诱发的抑制性突触后电流可被 picrotoxin 阻断。",
            "en": "Photostimulation of NAc-core Adora2a⁺ neuronal terminals inhibited VP neurons; the evoked inhibitory postsynaptic currents were blocked by picrotoxin."
          },
          "scope": {
            "zh": "小鼠脑片 · 末梢光刺激 / 电生理",
            "en": "Mouse slices · Terminal photostimulation / Electrophysiology"
          },
          "limitation": {
            "zh": "未鉴定所有被抑制 VP 细胞的分子类型。",
            "en": "The molecular identity of every inhibited VP neuron was not resolved."
          },
          "sources": [
            {
              "id": "oishi2017",
              "title": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "pmid": "28963505",
              "doi": "10.1038/s41467-017-00781-4",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28963505/",
              "verifiedFinding": "Adora2a-Cre mouse NAc core neuron and VP terminal activation induces SWS; VP IPSCs are picrotoxin sensitive. This manipulates Adora2a-expressing cells rather than directly activating their A2AR.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "fullTitle": "Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice.",
              "journal": "Nature communications"
            }
          ],
          "layer": "cross",
          "canonicalId": "adenosine/ad-nac-vp"
        },
        {
          "id": "ad-terminal-sleep",
          "from": "nac-vp-terminals",
          "to": "sws",
          "sign": "activation",
          "relation": {
            "zh": "末梢光刺激增加慢波睡眠",
            "en": "Terminal photostimulation increases slow-wave sleep"
          },
          "statement": {
            "zh": "在 VP 光刺激 NAc 核心区 Adora2a⁺ 神经元的末梢增加慢波睡眠；VP 损毁使该促睡眠效应消失。",
            "en": "Photostimulation of NAc-core Adora2a⁺ terminals in VP increased slow-wave sleep; VP lesions abolished this sleep-promoting effect."
          },
          "scope": {
            "zh": "小鼠 · 投射光遗传 / EEG–EMG",
            "en": "Mouse · Projection optogenetics / EEG–EMG"
          },
          "limitation": {
            "zh": "该结果支持完整 VP 对此末梢刺激效应的必要性，但未确定哪一 VP 分子亚群介导效应，也未证明其抑制是唯一机制。",
            "en": "This supports a requirement for intact VP in the terminal-stimulation effect, but does not identify the mediating molecular VP subtype or establish inhibition as the sole mechanism."
          },
          "sources": [
            {
              "id": "oishi2017",
              "title": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "pmid": "28963505",
              "doi": "10.1038/s41467-017-00781-4",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28963505/",
              "verifiedFinding": "Adora2a-Cre mouse NAc core neuron and VP terminal activation induces SWS; VP IPSCs are picrotoxin sensitive. This manipulates Adora2a-expressing cells rather than directly activating their A2AR.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
              "fullTitle": "Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice.",
              "journal": "Nature communications"
            }
          ],
          "layer": "circuit",
          "canonicalId": "adenosine/ad-terminal-sleep"
        },
        {
          "id": "ad-caffeine-antagonist",
          "from": "caffeine",
          "to": "a2ar",
          "sign": "inhibition",
          "relation": {
            "zh": "腺苷受体拮抗",
            "en": "Adenosine-receptor antagonism"
          },
          "statement": {
            "zh": "咖啡因为腺苷受体拮抗剂；所试剂量的促觉醒效应在 A₂AR 缺失小鼠中消失。",
            "en": "Caffeine antagonizes adenosine receptors; wake promotion at tested doses was lost in A₂AR-null mice."
          },
          "scope": {
            "zh": "小鼠 · 全身给药 / 受体敲除",
            "en": "Mouse · Systemic dosing / Receptor knockout"
          },
          "limitation": {
            "zh": "A₂A 受体缺失的行为结果不能排除咖啡因的 A₁ 受体拮抗作用。",
            "en": "The behavioral result in A₂A-receptor-null mice does not exclude caffeine antagonism at A₁ receptors."
          },
          "sources": [
            {
              "id": "huang2005",
              "title": "Huang et al. · Adenosine A2A, but not A1, receptors mediate the arousal effect of caffeine",
              "pmid": "15965471",
              "doi": "10.1038/nn1491",
              "year": "2005",
              "url": "https://pubmed.ncbi.nlm.nih.gov/15965471/",
              "verifiedFinding": "Caffeine at tested doses increased wake in WT and A1R-KO but not A2AR-KO mice. This is not a statement that caffeine lacks A1R activity.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Huang et al. · Adenosine A2A, but not A1, receptors mediate the arousal effect of caffeine",
              "fullTitle": "Adenosine A2A, but not A1, receptors mediate the arousal effect of caffeine.",
              "journal": "Nature neuroscience"
            }
          ],
          "layer": "molecular",
          "canonicalId": "adenosine/ad-caffeine-antagonist"
        },
        {
          "id": "ad-shell-context",
          "from": "a2ar",
          "to": "nac-shell-a2a",
          "sign": "context",
          "relation": {
            "zh": "壳区受体功能定位",
            "en": "Functional localization to shell receptors"
          },
          "statement": {
            "zh": "条件性缺失与局部 RNAi 实验支持 NAc 壳区 A₂A 受体参与咖啡因的促觉醒作用。",
            "en": "Conditional deletion and focal RNAi support a contribution of NAc-shell A₂A receptors to caffeine-induced wakefulness."
          },
          "scope": {
            "zh": "小鼠条件缺失 / 大鼠局部 RNAi",
            "en": "Mouse conditional deletion / Rat focal RNAi"
          },
          "limitation": {
            "zh": "壳区不是 Oishi 2017 中操控的核心区。",
            "en": "The shell is distinct from the core manipulated by Oishi 2017."
          },
          "sources": [
            {
              "id": "lazarus2011",
              "title": "Lazarus et al. · Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens",
              "pmid": "21734299",
              "doi": "10.1523/jneurosci.6730-10.2011",
              "year": "2011",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21734299/",
              "verifiedFinding": "Conditional deletion in mice and focal RNAi in rats identify NAc shell A2AR contribution to caffeine wakefulness; shell must not be merged with Oishi NAc core circuit.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Lazarus et al. · Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens",
              "fullTitle": "Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "adenosine/ad-shell-context"
        },
        {
          "id": "ad-shell-wake",
          "from": "nac-shell-a2a",
          "to": "caffeine-wake",
          "sign": "context",
          "relation": {
            "zh": "受体缺失减弱咖啡因促觉醒作用",
            "en": "Receptor loss attenuates caffeine-induced wakefulness"
          },
          "statement": {
            "zh": "移除 NAc 壳区 A₂A 受体可阻断或削弱研究条件下咖啡因的促觉醒效应。",
            "en": "Removing NAc shell A₂A receptors prevented or attenuated caffeine-induced arousal under the study conditions."
          },
          "scope": {
            "zh": "啮齿动物 · EEG–EMG / 局部遗传干预",
            "en": "Rodents · EEG–EMG / Local genetic intervention"
          },
          "limitation": {
            "zh": "这是受体依赖性证据，不是受体激活促觉醒。",
            "en": "This is receptor-dependence evidence, not evidence that activating this receptor promotes wake."
          },
          "sources": [
            {
              "id": "lazarus2011",
              "title": "Lazarus et al. · Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens",
              "pmid": "21734299",
              "doi": "10.1523/jneurosci.6730-10.2011",
              "year": "2011",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21734299/",
              "verifiedFinding": "Conditional deletion in mice and focal RNAi in rats identify NAc shell A2AR contribution to caffeine wakefulness; shell must not be merged with Oishi NAc core circuit.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Lazarus et al. · Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens",
              "fullTitle": "Arousal effect of caffeine depends on adenosine A2A receptors in the shell of the nucleus accumbens.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "adenosine/ad-shell-wake"
        },
        {
          "id": "ad-mini-gs-structure",
          "from": "a2ar",
          "to": "mini-gs",
          "sign": "context",
          "layer": "structural",
          "relation": {
            "zh": "复合物结构",
            "en": "Complex structure"
          },
          "statement": {
            "zh": "工程化人 A₂A 受体与 mini-Gₛ 的复合物结构解析了相互作用界面。",
            "en": "The engineered human A₂A receptor–mini-Gₛ complex structure resolved the interaction interface."
          },
          "scope": {
            "zh": "人源受体工程构建体 · X 射线晶体学",
            "en": "Engineered human receptor construct · X-ray crystallography"
          },
          "limitation": {
            "zh": "该结构不证明天然神经元中的 Gₛ 激活，也不替代纹状体 Gₒₗf 功能证据。",
            "en": "The structure does not establish Gₛ activation in native neurons or substitute for striatal Gₒₗf functional evidence."
          },
          "sources": [
            {
              "id": "carpenter2016",
              "title": "Carpenter et al. · Structure of the adenosine A2A receptor bound to an engineered G protein",
              "pmid": "27462812",
              "doi": "10.1038/nature18966",
              "year": "2016",
              "url": "https://pubmed.ncbi.nlm.nih.gov/27462812/",
              "verifiedFinding": "Human A2AR with mini-Gs, 3.4 A; engineered structural coupling reference rather than native neuronal signaling kinetics.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Carpenter et al. · Structure of the adenosine A2A receptor bound to an engineered G protein",
              "fullTitle": "Structure of the adenosine A(2A) receptor bound to an engineered G protein.",
              "journal": "Nature"
            }
          ],
          "canonicalId": "adenosine/ad-mini-gs-structure"
        },
        {
          "id": "ad-a1-pharmacology",
          "from": "adenosine",
          "to": "a1r",
          "sign": "activation",
          "layer": "molecular",
          "relation": {
            "zh": "A₁ 受体介导作用",
            "en": "A₁ receptor-mediated action"
          },
          "statement": {
            "zh": "小鼠下丘脑脑片药理实验支持腺苷通过 A₁ 受体抑制食欲素神经元活动。",
            "en": "Pharmacology in mouse hypothalamic slices supports A₁ receptor mediation of adenosine-induced inhibition of orexin-neuron activity."
          },
          "scope": {
            "zh": "小鼠 GFP 标记食欲素神经元 · 脑片膜片钳 / 药理",
            "en": "Mouse GFP-identified orexin neurons · Slice patch clamp / Pharmacology"
          },
          "limitation": {
            "zh": "这是脑片受体药理证据，不是人源受体结构证据，也未直接测定动物睡眠。",
            "en": "This is slice receptor pharmacology, not a human receptor structure; sleep was not measured directly."
          },
          "sources": [
            {
              "id": "liu2007",
              "title": "Liu and Gao · Adenosine inhibits activity of hypocretin/orexin neurons by the A1 receptor in the lateral hypothalamus: a possible sleep-promoting effect",
              "pmid": "17093123",
              "url": "https://pubmed.ncbi.nlm.nih.gov/17093123/",
              "verified": "2026-11-06",
              "type": "primary research",
              "doi": "10.1152/jn.00873.2006"
            }
          ],
          "canonicalId": "adenosine/ad-a1-pharmacology"
        },
        {
          "id": "ad-a1-orexin-inhibition",
          "from": "a1r",
          "to": "orexin-a1-context",
          "sign": "inhibition",
          "layer": "cross",
          "relation": {
            "zh": "食欲素神经元放电减少",
            "en": "Reduced orexin-neuron firing"
          },
          "statement": {
            "zh": "腺苷经 A₁ 受体相关机制降低食欲素神经元放电频率，伴随兴奋性突触传递和电压依赖性 Ca²⁺ 电流减弱。",
            "en": "Adenosine reduced orexin-neuron firing through A₁-receptor-related mechanisms, with reduced excitatory transmission and voltage-dependent Ca²⁺ currents."
          },
          "scope": {
            "zh": "小鼠下丘脑脑片 · 电生理 / 百日咳毒素敏感性",
            "en": "Mouse hypothalamic slices · Electrophysiology / Pertussis-toxin sensitivity"
          },
          "limitation": {
            "zh": "研究未观察到膜电位变化或 GIRK 电流诱导；不得概括为“A₁→GIRK→超极化”。该实验未证明在体促睡眠效应。",
            "en": "The study did not observe a membrane-potential change or GIRK-current induction; an A₁→GIRK→hyperpolarization chain is unsupported here. An in-vivo sleep effect was not demonstrated."
          },
          "sources": [
            {
              "id": "liu2007",
              "title": "Liu and Gao · Adenosine inhibits activity of hypocretin/orexin neurons by the A1 receptor in the lateral hypothalamus: a possible sleep-promoting effect",
              "pmid": "17093123",
              "url": "https://pubmed.ncbi.nlm.nih.gov/17093123/",
              "verified": "2026-11-06",
              "type": "primary research",
              "doi": "10.1152/jn.00873.2006"
            }
          ],
          "canonicalId": "adenosine/ad-a1-orexin-inhibition"
        }
      ],
      "researchQuestion": {
        "zh": "区分伏隔核核心区与壳区、受体药理作用与 Adora2a 细胞标记后，哪些 A₂A 受体下游信号参与相应的睡眠或觉醒效应？",
        "en": "After distinguishing the accumbens core from shell and receptor pharmacology from Adora2a cell labeling, which A₂A receptor pathways contribute to the respective sleep or wake effects?"
      },
      "lead": {
        "zh": "持续觉醒相关的细胞外腺苷浓度变化、A₂A 受体信号转导，以及伏隔核和腹外侧视前区的神经元功能。",
        "en": "Wake-associated changes in extracellular adenosine concentration, A₂A receptor signaling, and neuronal function in the nucleus accumbens and ventrolateral preoptic area."
      },
      "question": {
        "zh": "伏隔核核心区 Adora2a⁺ 神经元的促睡眠作用，与壳区 A₂A 受体对咖啡因促觉醒作用的贡献，是否涉及不同的神经投射？如何结合受体药理实验与细胞群操控进行验证？",
        "en": "Do sleep promotion by accumbens-core Adora2a⁺ neurons and the contribution of shell A₂A receptors to caffeine-induced wakefulness involve different projections? How can receptor pharmacology and cell-population manipulation test this distinction?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "gaba": {
      "id": "gaba",
      "title": {
        "zh": "GABA_A 受体与睡眠环路",
        "en": "GABA_A receptors and sleep circuits"
      },
      "summary": {
        "zh": "分子层面包括 GABA 正构激动作用与药物正向变构调节；环路层面包括按投射靶区鉴定的视前区 GABA 能神经元及其睡眠效应。",
        "en": "The molecular evidence covers orthosteric agonism by GABA and positive allosteric drug modulation. The circuit evidence covers projection-defined preoptic GABAergic neurons and their effects on sleep."
      },
      "nodes": [
        {
          "id": "gaba-ligand",
          "title": {
            "zh": "γ-氨基丁酸（GABA）",
            "en": "GABA"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "gabaa",
          "title": {
            "zh": "GABA_A 受体 α1β2γ2",
            "en": "GABA_A receptor α1β2γ2"
          },
          "kind": "target",
          "record": "gaba",
          "systemLink": null,
          "subtitle": {
            "zh": "人源重组受体",
            "en": "Human recombinant receptor"
          }
        },
        {
          "id": "gabaa-current",
          "title": {
            "zh": "GABA 诱发阴离子电流",
            "en": "GABA-evoked anion current"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "zolpidem",
          "title": {
            "zh": "唑吡坦",
            "en": "Zolpidem"
          },
          "kind": "sleep",
          "record": "zol",
          "systemLink": null
        },
        {
          "id": "poa-gaba",
          "title": {
            "zh": "POA GABA 能神经元",
            "en": "POA GABAergic neurons"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "orexin-neurons",
          "title": {
            "zh": "食欲素神经元",
            "en": "Orexin neurons"
          },
          "kind": "circuit",
          "crossSystem": "orexin",
          "systemLink": "orexin"
        },
        {
          "id": "poa-tmn",
          "title": {
            "zh": "投射至 TMN 的 POA GABA 能神经元",
            "en": "TMN-projecting POA GABAergic neurons"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "tmn-hdc",
          "title": {
            "zh": "TMN 组胺能神经元",
            "en": "TMN histaminergic neurons"
          },
          "kind": "circuit",
          "crossSystem": "histamine",
          "systemLink": "histamine"
        },
        {
          "id": "sleep-outcome",
          "title": {
            "zh": "NREM / REM 睡眠增加",
            "en": "Increased NREM / REM sleep"
          },
          "kind": "sleep",
          "systemLink": null
        },
        {
          "id": "histamine",
          "title": {
            "zh": "组胺",
            "en": "Histamine"
          },
          "kind": "signal",
          "crossSystem": "histamine",
          "systemLink": "histamine"
        },
        {
          "id": "vlpo-local",
          "title": {
            "zh": "VLPO 的 GABA 能突触输入",
            "en": "GABAergic synaptic inputs to VLPO"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "vlpo-sleep",
          "title": {
            "zh": "VLPO 推定促睡眠神经元",
            "en": "Putative sleep-promoting VLPO neurons"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "monoamines",
          "title": {
            "zh": "去甲肾上腺素 / 5-羟色胺",
            "en": "Noradrenaline / Serotonin"
          },
          "kind": "signal",
          "crossSystem": "monoamines",
          "systemLink": "monoamines"
        }
      ],
      "edges": [
        {
          "id": "ga-gating",
          "from": "gaba-ligand",
          "to": "gabaa",
          "sign": "activation",
          "relation": {
            "zh": "正构激动作用",
            "en": "Orthosteric agonism"
          },
          "statement": {
            "zh": "冷冻电镜结构显示 GABA 在人 α1β2γ2 GABA_A 受体正构位点结合；独立的电生理实验记录了 GABA 诱发的受体电流。",
            "en": "Cryo-EM structures show GABA bound at orthosteric sites of the human α1β2γ2 GABA_A receptor; separate electrophysiological experiments recorded GABA-evoked receptor currents."
          },
          "scope": {
            "zh": "人重组受体 · 冷冻电镜 / 电生理",
            "en": "Human recombinant receptor · Cryo-EM / Electrophysiology"
          },
          "limitation": {
            "zh": "结合位点由结构实验确定，功能效应依据电生理实验；α1β2γ2 不能代表所有睡眠相关神经元中的 GABA_A 受体亚基组成。",
            "en": "Binding sites are established by structural analysis and functional effects by electrophysiology. The α1β2γ2 assembly does not represent all GABA_A receptor subunit combinations in sleep-related neurons."
          },
          "sources": [
            {
              "id": "zhu2022",
              "title": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "pmid": "35933426",
              "doi": "10.1038/s41467-022-32212-4",
              "year": "2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35933426/",
              "verifiedFinding": "Human alpha1beta2gamma2 structures with GABA plus zolpidem or DMCM, pharmacology and simulations; positive allosteric zolpidem binding distinct from orthosteric GABA binding.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "fullTitle": "Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities.",
              "journal": "Nature communications"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gaba/ga-gating"
        },
        {
          "id": "ga-current",
          "from": "gabaa",
          "to": "gabaa-current",
          "sign": "activation",
          "relation": {
            "zh": "GABA 诱发的阴离子电流",
            "en": "GABA-evoked anion current"
          },
          "statement": {
            "zh": "GABA_A 受体属于配体门控阴离子通道；人重组 α1β2γ2 受体的电压钳实验记录了 GABA 诱发电流及药物对该电流的调节。",
            "en": "GABA_A receptors are ligand-gated anion channels. Voltage-clamp experiments with human recombinant α1β2γ2 receptors recorded GABA-evoked currents and their modulation by drugs."
          },
          "scope": {
            "zh": "人重组 α1β2γ2 · 电压钳",
            "en": "Human recombinant α1β2γ2 · Voltage clamp"
          },
          "limitation": {
            "zh": "受体开放对膜电位的作用取决于离子电化学梯度，不能将 GABA 诱发电流一概解释为膜超极化。",
            "en": "The effect of receptor opening on membrane potential depends on electrochemical ion gradients; a GABA-evoked current does not invariably imply membrane hyperpolarization."
          },
          "sources": [
            {
              "id": "zhu2022",
              "title": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "pmid": "35933426",
              "doi": "10.1038/s41467-022-32212-4",
              "year": "2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35933426/",
              "verifiedFinding": "Human alpha1beta2gamma2 structures with GABA plus zolpidem or DMCM, pharmacology and simulations; positive allosteric zolpidem binding distinct from orthosteric GABA binding.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "fullTitle": "Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities.",
              "journal": "Nature communications"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gaba/ga-current"
        },
        {
          "id": "ga-zolpidem",
          "from": "zolpidem",
          "to": "gabaa",
          "sign": "activation",
          "relation": {
            "zh": "正向变构调节（PAM）",
            "en": "Positive allosteric modulation (PAM)"
          },
          "statement": {
            "zh": "结构实验显示唑吡坦结合于不同于 GABA 正构位点的变构位点；电生理实验显示其增强 GABA 诱发电流。",
            "en": "Structural experiments locate zolpidem at allosteric sites distinct from the GABA orthosteric sites; electrophysiology shows potentiation of GABA-evoked currents."
          },
          "scope": {
            "zh": "人重组 α1β2γ2 受体 · 冷冻电镜 / 电生理",
            "en": "Human recombinant α1β2γ2 receptor · Cryo-EM / Electrophysiology"
          },
          "limitation": {
            "zh": "此处为对 GABA 诱发电流的正向变构调节，不能表述为唑吡坦替代 GABA 产生正构激动作用。",
            "en": "The evidence concerns positive allosteric modulation of GABA-evoked currents; it does not identify zolpidem as an orthosteric agonist replacing GABA."
          },
          "sources": [
            {
              "id": "zhu2022",
              "title": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "pmid": "35933426",
              "doi": "10.1038/s41467-022-32212-4",
              "year": "2022",
              "url": "https://pubmed.ncbi.nlm.nih.gov/35933426/",
              "verifiedFinding": "Human alpha1beta2gamma2 structures with GABA plus zolpidem or DMCM, pharmacology and simulations; positive allosteric zolpidem binding distinct from orthosteric GABA binding.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Zhu et al. · Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities",
              "fullTitle": "Structural and dynamic mechanisms of GABAA receptor modulators with opposing activities.",
              "journal": "Nature communications"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gaba/ga-zolpidem"
        },
        {
          "id": "ga-poa-orexin",
          "from": "poa-gaba",
          "to": "orexin-neurons",
          "sign": "inhibition",
          "relation": {
            "zh": "GABA_A 受体介导的突触抑制",
            "en": "GABA_A receptor-mediated synaptic inhibition"
          },
          "statement": {
            "zh": "光刺激 POA GABA 能神经元的轴突抑制食欲素神经元放电；GABA_A 受体拮抗剂 bicuculline 阻断该作用。",
            "en": "Photostimulation of POA GABAergic axons suppressed orexin-neuron firing; the GABA_A receptor antagonist bicuculline blocked this effect."
          },
          "scope": {
            "zh": "小鼠脑片 · 末梢光刺激 / 膜片钳",
            "en": "Mouse slices · Terminal photostimulation / Patch clamp"
          },
          "limitation": {
            "zh": "未由该实验确定突触受体的 α/β/γ 亚基组成。",
            "en": "The experiment did not resolve the synaptic α/β/γ subunit assembly."
          },
          "sources": [
            {
              "id": "saito2013",
              "title": "Saito et al. · GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons",
              "pmid": "24348342",
              "doi": "10.3389/fncir.2013.00192",
              "year": "2013",
              "url": "https://pubmed.ncbi.nlm.nih.gov/24348342/",
              "verifiedFinding": "Mouse POA GABA terminal photostimulation evokes fast IPSCs and suppresses orexin neuron firing; bicuculline abolishes inhibition. Does not identify alpha1beta2gamma2 composition in those synapses.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Saito et al. · GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons",
              "fullTitle": "GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons.",
              "journal": "Frontiers in neural circuits"
            }
          ],
          "layer": "cross",
          "canonicalId": "gaba/ga-poa-orexin"
        },
        {
          "id": "ga-poa-subset",
          "from": "poa-gaba",
          "to": "poa-tmn",
          "sign": "context",
          "relation": {
            "zh": "按投射靶区鉴定神经元亚群",
            "en": "Identification by projection target"
          },
          "statement": {
            "zh": "逆行标记鉴定了 POA GABA 能神经元中投射至 TMN 的亚群。",
            "en": "Retrograde labeling identified the TMN-projecting subset of POA GABAergic neurons."
          },
          "scope": {
            "zh": "小鼠 · 逆行病毒 / 细胞型标记",
            "en": "Mouse · Retrograde virus / Cell-type labeling"
          },
          "limitation": {
            "zh": "同一研究中，对未按投射靶区筛选的 POA GABA 能神经元进行光刺激促进觉醒，因此不能将该群体统一归为促睡眠神经元。",
            "en": "In the same study, photostimulation of POA GABAergic neurons without selection by projection target promoted wakefulness; the population cannot therefore be classified uniformly as sleep-promoting."
          },
          "sources": [
            {
              "id": "chung2017",
              "title": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "pmid": "28514446",
              "doi": "10.1038/nature22350",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28514446/",
              "verifiedFinding": "Projection-defined POA GABA neurons projecting to TMN promote NREM/REM; silencing suppresses sleep. Nonselective POA GABA stimulation promotes wake; soma stimulation engages collateral projections.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "fullTitle": "Identification of preoptic sleep neurons using retrograde labelling and gene profiling.",
              "journal": "Nature"
            }
          ],
          "layer": "circuit",
          "canonicalId": "gaba/ga-poa-subset"
        },
        {
          "id": "ga-poa-tmn",
          "from": "poa-tmn",
          "to": "tmn-hdc",
          "sign": "inhibition",
          "relation": {
            "zh": "抑制性投射",
            "en": "Inhibitory projection"
          },
          "statement": {
            "zh": "投射至 TMN 的 POA GABA 能神经元向组胺能神经元提供抑制性突触输入。",
            "en": "TMN-projecting POA GABAergic neurons provide inhibitory synaptic input to histaminergic neurons."
          },
          "scope": {
            "zh": "小鼠 · 投射示踪 / 末梢功能实验",
            "en": "Mouse · Projection tracing / Terminal functional experiments"
          },
          "limitation": {
            "zh": "这些神经元还具有其他轴突侧支，刺激胞体产生的整体效应不能仅归因于 TMN 投射。",
            "en": "These neurons also have axon collaterals; the full effect of cell-body stimulation cannot be assigned exclusively to the TMN projection."
          },
          "sources": [
            {
              "id": "chung2017",
              "title": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "pmid": "28514446",
              "doi": "10.1038/nature22350",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28514446/",
              "verifiedFinding": "Projection-defined POA GABA neurons projecting to TMN promote NREM/REM; silencing suppresses sleep. Nonselective POA GABA stimulation promotes wake; soma stimulation engages collateral projections.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "fullTitle": "Identification of preoptic sleep neurons using retrograde labelling and gene profiling.",
              "journal": "Nature"
            }
          ],
          "layer": "cross",
          "canonicalId": "gaba/ga-poa-tmn"
        },
        {
          "id": "ga-sleep",
          "from": "poa-tmn",
          "to": "sleep-outcome",
          "sign": "activation",
          "relation": {
            "zh": "该投射型神经元群促进睡眠",
            "en": "Sleep promotion by this projection-defined population"
          },
          "statement": {
            "zh": "双向光遗传操控显示，激活投射至 TMN 的 POA GABA 能神经元增加睡眠，抑制该群神经元则减少睡眠。",
            "en": "Bidirectional optogenetic manipulation showed increased sleep after activation of TMN-projecting POA GABAergic neurons and decreased sleep after their inhibition."
          },
          "scope": {
            "zh": "小鼠 · 光遗传 / EEG–EMG",
            "en": "Mouse · Optogenetics / EEG–EMG"
          },
          "limitation": {
            "zh": "该结果说明特定神经元群的睡眠调节作用，不能据此确定 GABA_A 受体药物发挥作用的脑区。",
            "en": "This result establishes a sleep-regulatory role for a defined neuronal population; it does not localize the brain sites of action of GABA_A receptor drugs."
          },
          "sources": [
            {
              "id": "chung2017",
              "title": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "pmid": "28514446",
              "doi": "10.1038/nature22350",
              "year": "2017",
              "url": "https://pubmed.ncbi.nlm.nih.gov/28514446/",
              "verifiedFinding": "Projection-defined POA GABA neurons projecting to TMN promote NREM/REM; silencing suppresses sleep. Nonselective POA GABA stimulation promotes wake; soma stimulation engages collateral projections.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
              "fullTitle": "Identification of preoptic sleep neurons using retrograde labelling and gene profiling.",
              "journal": "Nature"
            }
          ],
          "layer": "circuit",
          "canonicalId": "gaba/ga-sleep"
        },
        {
          "id": "ga-histamine-local",
          "from": "histamine",
          "to": "vlpo-local",
          "sign": "activation",
          "relation": {
            "zh": "增强 GABA 能抑制性突触输入",
            "en": "Increased GABAergic inhibitory synaptic input"
          },
          "statement": {
            "zh": "组胺通过 H₁/H₂ 受体兴奋大鼠 VLPO 中对去甲肾上腺素呈兴奋反应的神经元，并增强其他 VLPO 神经元的 GABA 能抑制性突触输入。",
            "en": "Histamine, acting through H₁/H₂ receptors, excited rat VLPO neurons that were also excited by noradrenaline, and increased GABAergic inhibitory synaptic input to other VLPO neurons."
          },
          "scope": {
            "zh": "大鼠脑片 · 受体拮抗剂 / 膜片钳",
            "en": "Rat slices · Receptor antagonists / Patch clamp"
          },
          "limitation": {
            "zh": "该药理实验未完全确定 GABA 能输入的细胞来源；结果不证明 TMN 神经元直接抑制 VLPO 推定促睡眠神经元。",
            "en": "The pharmacological experiments did not fully identify the cellular origin of the GABAergic input; they do not establish direct inhibition of putative sleep-promoting VLPO neurons by TMN neurons."
          },
          "sources": [
            {
              "id": "liu2010",
              "title": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
              "pmid": "20724362",
              "doi": "10.1113/jphysiol.2010.193904",
              "year": "2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20724362/",
              "verifiedFinding": "Rat slices: histamine directly excites NA-excited VLPO cells via H1/H2 and indirectly inhibits NA-inhibited cells through increased GABAA-mediated IPSCs, blocked by gabazine or TTX.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
              "fullTitle": "Histamine regulates activities of neurons in the ventrolateral preoptic nucleus.",
              "journal": "The Journal of physiology"
            }
          ],
          "layer": "cross",
          "canonicalId": "gaba/ga-histamine-local"
        },
        {
          "id": "ga-local-inhibition",
          "from": "vlpo-local",
          "to": "vlpo-sleep",
          "sign": "inhibition",
          "relation": {
            "zh": "GABA_A 受体介导的突触抑制",
            "en": "GABA_A receptor-mediated synaptic inhibition"
          },
          "statement": {
            "zh": "组胺抑制对去甲肾上腺素呈抑制反应的 VLPO 神经元；该作用可被 gabazine 或河豚毒素（TTX）阻断。",
            "en": "Histamine inhibited VLPO neurons that were also inhibited by noradrenaline; gabazine or tetrodotoxin (TTX) blocked this effect."
          },
          "scope": {
            "zh": "大鼠脑片 · GABA_A 受体介导 / 动作电位依赖",
            "en": "Rat slices · GABA_A receptor-mediated / Action-potential-dependent"
          },
          "limitation": {
            "zh": "细胞依据脑片电生理特征被归为推定促睡眠神经元；该实验未逐一测定这些细胞在动物睡眠期间的放电。",
            "en": "Cells were classified as putative sleep-promoting neurons by their slice electrophysiological properties; their firing during sleep was not established individually in vivo."
          },
          "sources": [
            {
              "id": "liu2010",
              "title": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
              "pmid": "20724362",
              "doi": "10.1113/jphysiol.2010.193904",
              "year": "2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20724362/",
              "verifiedFinding": "Rat slices: histamine directly excites NA-excited VLPO cells via H1/H2 and indirectly inhibits NA-inhibited cells through increased GABAA-mediated IPSCs, blocked by gabazine or TTX.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
              "fullTitle": "Histamine regulates activities of neurons in the ventrolateral preoptic nucleus.",
              "journal": "The Journal of physiology"
            }
          ],
          "layer": "circuit",
          "canonicalId": "gaba/ga-local-inhibition"
        },
        {
          "id": "ga-monoamine-feedback",
          "from": "monoamines",
          "to": "vlpo-sleep",
          "sign": "inhibition",
          "relation": {
            "zh": "抑制投射来源神经元",
            "en": "Inhibition of identified projection neurons"
          },
          "statement": {
            "zh": "去甲肾上腺素与 5-羟色胺抑制 VLPO GABA 能神经元；这些神经元经示踪被鉴定为直接连接食欲素能或组胺能神经元。",
            "en": "Noradrenaline and serotonin inhibited VLPO GABAergic neurons identified by tracing as making direct synaptic connections to orexin or histaminergic neurons."
          },
          "scope": {
            "zh": "雄性小鼠 · 单突触示踪 / 脑片电生理",
            "en": "Male mice · Monosynaptic tracing / Slice electrophysiology"
          },
          "limitation": {
            "zh": "研究未直接测定该单胺抑制作用对动物睡眠的贡献；这些投射鉴定的小鼠细胞与其他研究按去甲肾上腺素反应鉴定的大鼠 VLPO 细胞并未被证明完全重合。",
            "en": "The study did not directly determine the contribution of this monoaminergic inhibition to sleep in vivo. These projection-defined mouse cells were not shown to coincide with rat VLPO populations classified by noradrenaline responses in other studies."
          },
          "sources": [
            {
              "id": "saito2018",
              "title": "Saito et al. · Monoamines inhibit GABAergic neurons in ventrolateral preoptic area that make direct synaptic connections to hypothalamic arousal neurons",
              "pmid": "29915137",
              "doi": "10.1523/jneurosci.2835-17.2018",
              "year": "2018",
              "url": "https://pubmed.ncbi.nlm.nih.gov/29915137/",
              "verifiedFinding": "Mouse monosynaptic tracing identifies VLPO GABA inputs to orexin/HDC cells; noradrenaline and serotonin inhibit identified presynaptic VLPO GABA cells in slices. This does not itself measure in vivo sleep effect of that monoamine intervention.",
              "verified": "2026-11-06",
              "type": "primary research",
              "label": "Saito et al. · Monoamines inhibit GABAergic neurons in ventrolateral preoptic area that make direct synaptic connections to hypothalamic arousal neurons",
              "fullTitle": "Monoamines Inhibit GABAergic Neurons in Ventrolateral Preoptic Area That Make Direct Synaptic Connections to Hypothalamic Arousal Neurons.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "gaba/ga-monoamine-feedback"
        }
      ],
      "researchQuestion": {
        "zh": "在明确神经元群、投射靶区和受体亚基组成后，GABA_A 受体正向变构调节剂的药理作用能否与特定环路介导的睡眠效应建立联系？",
        "en": "Once neuronal population, projection target and receptor subunit composition are defined, can the pharmacological effects of GABA_A receptor positive allosteric modulators be linked to sleep effects mediated by specific circuits?"
      },
      "lead": {
        "zh": "GABA_A 受体的配体门控阴离子电流、唑吡坦的正向变构调节，以及特定视前区 GABA 能投射的神经元和睡眠效应。",
        "en": "Ligand-gated anion currents through GABA_A receptors, positive allosteric modulation by zolpidem, and neuronal and sleep effects of specific preoptic GABAergic projections."
      },
      "question": {
        "zh": "同一正向变构调节剂在不同 GABA_A 受体亚基组合和神经元群中，是否产生不同的电流调节作用及睡眠–觉醒效应？",
        "en": "Does the same positive allosteric modulator produce different effects on receptor currents and sleep–wake behavior across GABA_A receptor subunit assemblies and neuronal populations?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "melatonin": {
      "title": {
        "zh": "褪黑素系统",
        "en": "Melatonin system"
      },
      "nodes": [
        {
          "id": "mel-signal",
          "title": {
            "zh": "褪黑素",
            "en": "Melatonin"
          },
          "kind": "signal",
          "record": "mela",
          "systemLink": null
        },
        {
          "id": "mt1",
          "title": {
            "zh": "MT₁",
            "en": "MT₁"
          },
          "kind": "target",
          "record": "mt1",
          "systemLink": null
        },
        {
          "id": "mt2",
          "title": {
            "zh": "MT₂",
            "en": "MT₂"
          },
          "kind": "target",
          "record": "mt2",
          "systemLink": null
        },
        {
          "id": "mel-camp",
          "title": {
            "zh": "腺苷酸环化酶–cAMP 通路",
            "en": "Adenylyl cyclase–cAMP pathway"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "scn-firing",
          "title": {
            "zh": "SCN 神经元放电",
            "en": "SCN neuronal firing"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "mel-pkc",
          "title": {
            "zh": "PKC 活性",
            "en": "PKC activity"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "scn-phase",
          "title": {
            "zh": "SCN 放电节律相位",
            "en": "SCN firing-rhythm phase"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "locomotor-phase",
          "title": {
            "zh": "活动节律相位",
            "en": "Locomotor-rhythm phase"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "scn-clock",
          "title": {
            "zh": "视交叉上核 · SCN",
            "en": "Suprachiasmatic nucleus · SCN"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "dmh",
          "title": {
            "zh": "背内侧下丘脑 · DMH",
            "en": "Dorsomedial hypothalamus"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "lh-orexin",
          "title": {
            "zh": "外侧下丘脑食欲素网络",
            "en": "LH orexin network"
          },
          "kind": "circuit",
          "systemLink": "orexin"
        },
        {
          "id": "vlpo",
          "title": {
            "zh": "腹外侧视前区 · VLPO",
            "en": "Ventrolateral preoptic area"
          },
          "kind": "circuit",
          "systemLink": "gaba"
        }
      ],
      "edges": [
        {
          "id": "mel-mt1",
          "from": "mel-signal",
          "to": "mt1",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "在表达人 MT₁ 受体的 NIH 3T3 细胞中，褪黑素抑制 forskolin 诱导的 cAMP 累积。",
            "en": "In NIH 3T3 cells expressing human MT₁, melatonin inhibited forskolin-stimulated cAMP accumulation."
          },
          "scope": {
            "zh": "人受体 / 小鼠 NIH 3T3 细胞",
            "en": "Human receptor / mouse NIH 3T3 cells"
          },
          "limitation": {
            "zh": "重组细胞中的药理作用不能直接证明对睡眠时长或睡眠结构的影响。",
            "en": "Recombinant-cell pharmacology does not directly establish effects on sleep duration or sleep architecture."
          },
          "sources": [
            {
              "id": "godson1997",
              "title": "Godson & Reppert · The Mel1a melatonin receptor is coupled to parallel signal transduction pathways",
              "year": "1997",
              "pmid": "8977429",
              "doi": "10.1210/endo.138.1.4824",
              "url": "https://pubmed.ncbi.nlm.nih.gov/8977429/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Godson & Reppert · The Mel1a melatonin receptor is coupled to parallel signal transduction pathways",
              "fullTitle": "The Mel1a melatonin receptor is coupled to parallel signal transduction pathways.",
              "journal": "Endocrinology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "melatonin/mel-mt1"
        },
        {
          "id": "mel-mt2",
          "from": "mel-signal",
          "to": "mt2",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "克隆的人 MT₂ 受体具有高亲和力配体结合，并介导腺苷酸环化酶抑制。",
            "en": "Cloned human MT₂ exhibits high-affinity ligand binding and mediates adenylyl-cyclase inhibition."
          },
          "scope": {
            "zh": "人受体 / COS-1 与 NIH 3T3 细胞",
            "en": "Human receptor / COS-1 and NIH 3T3 cells"
          },
          "limitation": {
            "zh": "结合与功能在不同表达系统中检测。",
            "en": "Binding and function were measured in different expression systems."
          },
          "sources": [
            {
              "id": "reppert1995",
              "title": "Reppert et al. · Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor",
              "year": "1995",
              "pmid": "7568007",
              "doi": "10.1073/pnas.92.19.8734",
              "url": "https://pubmed.ncbi.nlm.nih.gov/7568007/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Reppert et al. · Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor",
              "fullTitle": "Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor.",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "molecular",
          "canonicalId": "melatonin/mel-mt2"
        },
        {
          "id": "mt1-camp",
          "from": "mt1",
          "to": "mel-camp",
          "relation": {
            "zh": "百日咳毒素敏感性抑制",
            "en": "Pertussis-toxin-sensitive inhibition"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "MT₁ 激活抑制 forskolin 诱导的 cAMP 累积；百日咳毒素处理可消除这一效应。",
            "en": "MT₁ activation inhibited forskolin-stimulated cAMP accumulation; pertussis toxin treatment abolished this effect."
          },
          "scope": {
            "zh": "人 MT₁ / NIH 3T3 / cAMP 测定",
            "en": "Human MT₁ / NIH 3T3 / cAMP assay"
          },
          "limitation": {
            "zh": "PTX 敏感性支持 Gᵢ/o 家族参与，不能确定特定原位 Gα 亚型。",
            "en": "PTX sensitivity supports Gᵢ/o-family participation, not a particular native Gα subtype."
          },
          "sources": [
            {
              "id": "godson1997",
              "title": "Godson & Reppert · The Mel1a melatonin receptor is coupled to parallel signal transduction pathways",
              "year": "1997",
              "pmid": "8977429",
              "doi": "10.1210/endo.138.1.4824",
              "url": "https://pubmed.ncbi.nlm.nih.gov/8977429/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Godson & Reppert · The Mel1a melatonin receptor is coupled to parallel signal transduction pathways",
              "fullTitle": "The Mel1a melatonin receptor is coupled to parallel signal transduction pathways.",
              "journal": "Endocrinology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "melatonin/mt1-camp"
        },
        {
          "id": "mt2-camp",
          "from": "mt2",
          "to": "mel-camp",
          "relation": {
            "zh": "抑制 AC",
            "en": "Inhibits AC"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "表达 MT₂ 的 NIH 3T3 细胞中，褪黑素抑制腺苷酸环化酶通路。",
            "en": "Melatonin inhibits the adenylyl-cyclase pathway in MT₂-expressing NIH 3T3 cells."
          },
          "scope": {
            "zh": "人 MT₂ / 重组细胞功能实验",
            "en": "Human MT₂ / recombinant-cell functional assay"
          },
          "limitation": {
            "zh": "这里没有据此推定 SCN 的完整胞内级联。",
            "en": "This does not establish the complete intracellular cascade in SCN neurons."
          },
          "sources": [
            {
              "id": "reppert1995",
              "title": "Reppert et al. · Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor",
              "year": "1995",
              "pmid": "7568007",
              "doi": "10.1073/pnas.92.19.8734",
              "url": "https://pubmed.ncbi.nlm.nih.gov/7568007/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Reppert et al. · Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor",
              "fullTitle": "Molecular characterization of a second melatonin receptor expressed in human retina and brain: the Mel1b melatonin receptor.",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "molecular",
          "canonicalId": "melatonin/mt2-camp"
        },
        {
          "id": "mt1-scn",
          "from": "mt1",
          "to": "scn-firing",
          "relation": {
            "zh": "急性抑制神经元放电",
            "en": "Acute inhibition of neuronal firing"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "MT₁ 缺失使褪黑素对 SCN 电活动的急性抑制消失。",
            "en": "MT₁ deletion abolished acute melatonin-induced suppression of SCN electrical activity."
          },
          "scope": {
            "zh": "小鼠 MT₁ 基因敲除 / SCN 电生理",
            "en": "Mouse MT₁ knockout / SCN electrophysiology"
          },
          "limitation": {
            "zh": "该实验测量 SCN 电活动的急性变化，不能据此推断总睡眠时长或昼夜节律相位重置。",
            "en": "The experiment measured acute changes in SCN electrical activity; it does not establish changes in total sleep time or circadian phase resetting."
          },
          "sources": [
            {
              "id": "liu1997",
              "title": "Liu et al. · Molecular dissection of two distinct actions of melatonin on the suprachiasmatic circadian clock",
              "year": "1997",
              "pmid": "9247266",
              "doi": "10.1016/s0896-6273(00)80350-5",
              "url": "https://pubmed.ncbi.nlm.nih.gov/9247266/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Liu et al. · Molecular dissection of two distinct actions of melatonin on the suprachiasmatic circadian clock",
              "fullTitle": "Molecular dissection of two distinct actions of melatonin on the suprachiasmatic circadian clock.",
              "journal": "Neuron"
            }
          ],
          "layer": "circuit",
          "canonicalId": "melatonin/mt1-scn"
        },
        {
          "id": "mt2-pkc",
          "from": "mt2",
          "to": "mel-pkc",
          "relation": {
            "zh": "MT₂ 相关 PKC 活化",
            "en": "MT₂-associated PKC activation"
          },
          "sign": "activation",
          "statement": {
            "zh": "MT₁/MT₂ 拮抗剂 luzindole 与 MT₂ 选择性拮抗剂 4P-PDOT 均阻断了褪黑素诱导的 SCN PKC 活性升高；亚型判定主要依赖拮抗剂药理学。",
            "en": "The MT₁/MT₂ antagonist luzindole and the MT₂-selective antagonist 4P-PDOT each blocked melatonin-induced increases in SCN PKC activity; subtype attribution rests primarily on antagonist pharmacology."
          },
          "scope": {
            "zh": "Long-Evans 大鼠 SCN 切片 / CT10 / 褪黑素 3 pM；拮抗剂各 1 μM / PKC 磷酸转移酶活性",
            "en": "Long-Evans rat SCN slices / CT10 / 3 pM melatonin; each antagonist at 1 μM / PKC phosphotransferase activity"
          },
          "limitation": {
            "zh": "MT₂ 的参与依据拮抗剂药理学判断；该结果不能证明所有组织均采用同一受体信号转导机制。",
            "en": "MT₂ involvement is supported by antagonist pharmacology; this does not establish the same receptor-signaling mechanism in every tissue."
          },
          "sources": [
            {
              "id": "hunt2001",
              "title": "Hunt et al. · Activation of MT2 melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock",
              "year": "2001",
              "pmid": "11121382",
              "doi": "10.1152/ajpcell.2001.280.1.c110",
              "url": "https://journals.physiology.org/doi/10.1152/ajpcell.2001.280.1.C110",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Hunt et al. · Activation of MT2 melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock",
              "fullTitle": "Activation of MT(2) melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock.",
              "journal": "American journal of physiology. Cell physiology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "melatonin/mt2-pkc"
        },
        {
          "id": "pkc-scn-phase",
          "from": "mel-pkc",
          "to": "scn-phase",
          "relation": {
            "zh": "PKC 相关相位提前",
            "en": "PKC-linked phase advance"
          },
          "sign": "activation",
          "statement": {
            "zh": "对 PKC 活性的干预支持其参与褪黑素在主观黄昏和黎明诱导的 SCN 神经元放电节律相位提前。",
            "en": "Manipulation of PKC activity supports its involvement in melatonin-induced phase advances of the SCN neuronal firing rhythm at subjective dusk and dawn."
          },
          "scope": {
            "zh": "大鼠 SCN 切片 / 主观黄昏与黎明",
            "en": "Rat SCN slices / subjective dusk and dawn"
          },
          "limitation": {
            "zh": "效应依赖给药时相；不能等同于人体即时促眠。",
            "en": "The effect depends on circadian timing and is not immediate human sleep induction."
          },
          "sources": [
            {
              "id": "hunt2001",
              "title": "Hunt et al. · Activation of MT2 melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock",
              "year": "2001",
              "pmid": "11121382",
              "doi": "10.1152/ajpcell.2001.280.1.c110",
              "url": "https://journals.physiology.org/doi/10.1152/ajpcell.2001.280.1.C110",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Hunt et al. · Activation of MT2 melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock",
              "fullTitle": "Activation of MT(2) melatonin receptors in rat suprachiasmatic nucleus phase advances the circadian clock.",
              "journal": "American journal of physiology. Cell physiology"
            },
            {
              "title": "McArthur et al. · Endocrinology 1997",
              "pmid": "9002996",
              "doi": "10.1210/endo.138.2.4925",
              "url": "https://pubmed.ncbi.nlm.nih.gov/9002996/",
              "label": "McArthur et al. · Endocrinology 1997",
              "verified": "2026-11-06",
              "fullTitle": "Melatonin action and signal transduction in the rat suprachiasmatic circadian clock: activation of protein kinase C at dusk and dawn.",
              "year": "1997",
              "journal": "Endocrinology"
            }
          ],
          "layer": "circuit",
          "canonicalId": "melatonin/pkc-scn-phase"
        },
        {
          "id": "mt1-locomotor",
          "from": "mt1",
          "to": "locomotor-phase",
          "relation": {
            "zh": "基因缺失影响行为相移",
            "en": "Deletion alters behavioral resetting"
          },
          "sign": "context",
          "statement": {
            "zh": "C57BL/6 小鼠 MT₁ 缺失后，褪黑素不再提前活动起始相位，而 SCN 切片相移仍存在。",
            "en": "In C57BL/6 mice, MT₁ deletion prevented melatonin-induced activity-onset advancement while SCN slice phase shifts persisted."
          },
          "scope": {
            "zh": "C57BL/6 小鼠：在体 CT10 皮下注射褪黑素 90 μg/只；另以离体 SCN 的 3–10 pM 褪黑素检验放电节律相移",
            "en": "C57BL/6 mice: 90 μg melatonin per mouse, subcutaneous at CT10 in vivo; separately, 3–10 pM melatonin in isolated SCN preparations to test firing-rhythm phase shifts"
          },
          "limitation": {
            "zh": "不能把 MT₁ 与 MT₂ 简化为固定的“促眠”和“调相位”分工。",
            "en": "MT₁ and MT₂ cannot be assigned fixed sleep-versus-phase roles."
          },
          "sources": [
            {
              "id": "dubocovich2005",
              "title": "Dubocovich et al. · Effect of MT1 melatonin receptor deletion on melatonin-mediated phase shift of circadian rhythms in the C57BL/6 mouse",
              "year": "2005",
              "pmid": "16098087",
              "doi": "10.1111/j.1600-079x.2005.00230.x",
              "url": "https://pubmed.ncbi.nlm.nih.gov/16098087/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Dubocovich et al. · Effect of MT1 melatonin receptor deletion on melatonin-mediated phase shift of circadian rhythms in the C57BL/6 mouse",
              "fullTitle": "Effect of MT1 melatonin receptor deletion on melatonin-mediated phase shift of circadian rhythms in the C57BL/6 mouse.",
              "journal": "Journal of pineal research"
            }
          ],
          "layer": "circuit",
          "canonicalId": "melatonin/mt1-locomotor"
        },
        {
          "id": "scn-dmh",
          "from": "scn-clock",
          "to": "dmh",
          "relation": {
            "zh": "直接及间接输入",
            "en": "Direct and indirect inputs"
          },
          "sign": "context",
          "statement": {
            "zh": "示踪显示 DMH 接受 SCN 的直接和间接输入。",
            "en": "Tracing showed direct and indirect SCN input to DMH."
          },
          "scope": {
            "zh": "大鼠 / 神经示踪",
            "en": "Rat / neural tracing"
          },
          "limitation": {
            "zh": "该关系来自解剖示踪，未检验褪黑素给药后信号是否沿这条通路依次传递。",
            "en": "This relationship is based on anatomical tracing; it does not test sequential signal transmission along this pathway after melatonin administration."
          },
          "sources": [
            {
              "id": "chou2003",
              "title": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "year": "2003",
              "pmid": "14627654",
              "doi": "10.1523/jneurosci.23-33-10691.2003",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6740926/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "fullTitle": "Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "melatonin/scn-dmh"
        },
        {
          "id": "dmh-orexin",
          "from": "dmh",
          "to": "lh-orexin",
          "relation": {
            "zh": "谷氨酸 / TRH 投射",
            "en": "Glutamate / TRH projection"
          },
          "sign": "context",
          "statement": {
            "zh": "DMH 向外侧下丘脑的投射以谷氨酸能为主，其中一部分表达 TRH；示踪轴突与食欲素细胞形成贴靠。",
            "en": "DMH projections to lateral hypothalamus were predominantly glutamatergic, with a TRH-positive subset; traced axons apposed orexin cells."
          },
          "scope": {
            "zh": "大鼠 / 示踪与递质标记",
            "en": "Rat / tracing and transmitter markers"
          },
          "limitation": {
            "zh": "轴突贴靠和递质标记不能单独证明功能性兴奋突触连接。",
            "en": "Axonal appositions and transmitter markers alone do not establish functional excitatory synapses."
          },
          "sources": [
            {
              "id": "chou2003",
              "title": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "year": "2003",
              "pmid": "14627654",
              "doi": "10.1523/jneurosci.23-33-10691.2003",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6740926/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "fullTitle": "Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "melatonin/dmh-orexin"
        },
        {
          "id": "dmh-vlpo",
          "from": "dmh",
          "to": "vlpo",
          "relation": {
            "zh": "以 GABA 能为主的投射",
            "en": "Predominantly GABAergic projection"
          },
          "sign": "context",
          "statement": {
            "zh": "DMH 向睡眠相关的 VLPO 发出以 GABA 能为主的投射。",
            "en": "DMH sends a predominantly GABAergic projection to the sleep-related VLPO."
          },
          "scope": {
            "zh": "大鼠 / 示踪与递质标记",
            "en": "Rat / tracing and transmitter markers"
          },
          "limitation": {
            "zh": "此边保留解剖证据等级，不推定其在特定药物中的贡献。",
            "en": "This remains anatomical evidence; its contribution to an individual drug is not inferred."
          },
          "sources": [
            {
              "id": "chou2003",
              "title": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "year": "2003",
              "pmid": "14627654",
              "doi": "10.1523/jneurosci.23-33-10691.2003",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6740926/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
              "fullTitle": "Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "melatonin/dmh-vlpo"
        }
      ],
      "summary": {
        "zh": "分别呈现受体第二信使变化、SCN 神经元放电、昼夜节律相位和下丘脑投射连接。",
        "en": "Distinguish receptor-mediated second-messenger changes, SCN neuronal firing, circadian phase and hypothalamic projections."
      },
      "designNotes": {
        "zh": "SCN 的解剖投射与其神经元放电节律相位分别呈现，不能仅凭图中连接推定已验证的连续因果链。DMH 的跨系统连接保留为解剖证据；MT₂–PKC 分支不补画该研究未直接测定的 PLC 中间步骤。",
        "en": "SCN anatomical projections and neuronal firing-rhythm phase are shown separately; their juxtaposition does not establish a serial causal chain. DMH cross-system connections retain anatomical evidence status. The MT₂–PKC branch does not include a PLC step that was not directly measured in that study."
      },
      "lead": {
        "zh": "连接 MT₁/MT₂ 受体信号、SCN 放电与昼夜节律相位。时相和实验层级决定如何解释结果。",
        "en": "Connect MT₁/MT₂ signaling to SCN firing and circadian phase. Timing and experimental level determine interpretation."
      },
      "question": {
        "zh": "相同受体配体的急性放电效应与节律调相作用，能否在相同给药时相下分别验证？",
        "en": "Can acute firing effects and circadian phase shifts of the same ligand be tested separately at matched circadian times?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "histamine": {
      "title": {
        "zh": "组胺系统",
        "en": "Histamine system"
      },
      "nodes": [
        {
          "id": "histamine",
          "title": {
            "zh": "组胺",
            "en": "Histamine"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "hrh1",
          "title": {
            "zh": "H₁R",
            "en": "H₁R"
          },
          "kind": "target",
          "record": "hrh1",
          "systemLink": null
        },
        {
          "id": "hrh3",
          "title": {
            "zh": "H₃R",
            "en": "H₃R"
          },
          "kind": "target",
          "record": "hrh3",
          "systemLink": null
        },
        {
          "id": "hist-gq",
          "title": {
            "zh": "H₁R–Gq 复合物 · 7DFL",
            "en": "H₁R–Gq complex · 7DFL"
          },
          "kind": "structure",
          "systemLink": null
        },
        {
          "id": "hist-ip3",
          "title": {
            "zh": "肌醇磷酸（IPs）累积",
            "en": "Inositol-phosphate (IPs) accumulation"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "hist-camp",
          "title": {
            "zh": "cAMP 生成",
            "en": "cAMP formation"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "hist-release",
          "title": {
            "zh": "组胺释放",
            "en": "Histamine release"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "bf-cholinergic",
          "title": {
            "zh": "基底前脑胆碱能网络",
            "en": "Cholinergic basal forebrain"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "hist-wake",
          "title": {
            "zh": "皮层活化与觉醒",
            "en": "Cortical activation & wake"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "orexin-input",
          "title": {
            "zh": "食欲素输入",
            "en": "Orexin input"
          },
          "kind": "signal",
          "systemLink": "orexin"
        },
        {
          "id": "ox2",
          "title": {
            "zh": "OX2R",
            "en": "OX2R"
          },
          "kind": "target",
          "systemLink": "orexin",
          "record": "ox2"
        },
        {
          "id": "tmn-histamine",
          "title": {
            "zh": "TMN 组胺神经元",
            "en": "Histaminergic TMN neurons"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "hnmt",
          "title": {
            "zh": "组胺 N-甲基转移酶 · HNMT",
            "en": "Histamine N-methyltransferase · HNMT"
          },
          "kind": "target",
          "record": "hnmt",
          "systemLink": null
        },
        {
          "id": "hist-metabolism",
          "title": {
            "zh": "组胺的代谢失活",
            "en": "Metabolic inactivation of histamine"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "hnmt-sleep-distribution",
          "title": {
            "zh": "睡眠–觉醒昼夜分布",
            "en": "Daily sleep–wake distribution"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "cortical-5ht-release",
          "title": {
            "zh": "皮层刺激诱发的 5-HT 释放",
            "en": "Evoked cortical 5-HT release"
          },
          "kind": "effector",
          "systemLink": null
        }
      ],
      "edges": [
        {
          "id": "hist-hrh1",
          "from": "histamine",
          "to": "hrh1",
          "relation": {
            "zh": "组胺结合构象",
            "en": "Histamine-bound conformation"
          },
          "sign": "activation",
          "statement": {
            "zh": "组胺结合的人 H₁R–Gq 冷冻电镜结构解析了激动剂结合位点及受体活化构象。",
            "en": "The histamine-bound human H₁R–Gq cryo-EM structure resolves the agonist-binding site and an active receptor conformation."
          },
          "scope": {
            "zh": "人 H₁R / 工程复合物 / 7DFL",
            "en": "Human H₁R / engineered complex / 7DFL"
          },
          "limitation": {
            "zh": "该结构提供配体识别和受体构象证据，不能据此量化信号转导效率或人体促觉醒效应。",
            "en": "The structure provides evidence of ligand recognition and receptor conformation; it does not quantify signaling efficiency or wake-promoting effects in humans."
          },
          "sources": [
            {
              "id": "xia2021",
              "title": "Xia et al. · Cryo-EM structure of the human histamine H1 receptor/Gq complex",
              "year": "2021",
              "pmid": "33828102",
              "doi": "10.1038/s41467-021-22427-2",
              "url": "https://www.nature.com/articles/s41467-021-22427-2",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Xia et al. · Cryo-EM structure of the human histamine H1 receptor/Gq complex",
              "fullTitle": "Cryo-EM structure of the human histamine H1 receptor/Gq complex.",
              "journal": "Nature communications"
            }
          ],
          "layer": "structural",
          "canonicalId": "histamine/hist-hrh1"
        },
        {
          "id": "hrh1-gq",
          "from": "hrh1",
          "to": "hist-gq",
          "relation": {
            "zh": "受体–G 蛋白结合界面",
            "en": "Receptor–G-protein interface"
          },
          "sign": "activation",
          "statement": {
            "zh": "7DFL 显示活化态人 H₁R 与工程化 Gq 蛋白的结合界面。",
            "en": "7DFL resolves the interface between active human H₁R and an engineered Gq protein."
          },
          "scope": {
            "zh": "人 H₁R / 工程化 GαqiN / NanoBiT 辅助稳定 / 冷冻电镜",
            "en": "Human H₁R / engineered GαqiN / NanoBiT-assisted stabilization / cryo-EM"
          },
          "limitation": {
            "zh": "该复合物结构不直接测量 G 蛋白活化动力学，也不能证明原生细胞中的 H₁R 仅与 Gq 耦联。",
            "en": "The complex structure does not directly measure G-protein activation kinetics or establish exclusive H₁R–Gq coupling in native cells."
          },
          "sources": [
            {
              "id": "xia2021",
              "title": "Xia et al. · Cryo-EM structure of the human histamine H1 receptor/Gq complex",
              "year": "2021",
              "pmid": "33828102",
              "doi": "10.1038/s41467-021-22427-2",
              "url": "https://www.nature.com/articles/s41467-021-22427-2",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Xia et al. · Cryo-EM structure of the human histamine H1 receptor/Gq complex",
              "fullTitle": "Cryo-EM structure of the human histamine H1 receptor/Gq complex.",
              "journal": "Nature communications"
            }
          ],
          "layer": "structural",
          "canonicalId": "histamine/hrh1-gq"
        },
        {
          "id": "hrh1-ip3",
          "from": "hrh1",
          "to": "hist-ip3",
          "relation": {
            "zh": "构成性活性相关 IPs 累积",
            "en": "IPs accumulation associated with constitutive activity"
          },
          "sign": "activation",
          "statement": {
            "zh": "表达野生型人 H₁R 增加基础肌醇磷酸累积量；反向激动剂可降低这一基础累积量。",
            "en": "Wild-type human H₁R expression increased basal inositol-phosphate accumulation; inverse agonists reduced this basal accumulation."
          },
          "scope": {
            "zh": "SV40 永生化非洲绿猴肾细胞 / 重组人受体",
            "en": "SV40-immortalized African green monkey kidney cells / human receptor"
          },
          "limitation": {
            "zh": "原实验测量总放射标记肌醇磷酸累积，并非分辨单一 IP₃ 的动态测量。",
            "en": "The experiment measured accumulated radiolabeled inositol phosphates, not a time-resolved, IP₃-specific measurement."
          },
          "sources": [
            {
              "id": "bakker2000",
              "title": "Bakker et al. · Constitutive activity of the histamine H1 receptor reveals inverse agonism of histamine H1 receptor antagonists",
              "year": "2000",
              "pmid": "10633171",
              "doi": "10.1016/s0014-2999(99)00803-1",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10633171/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Bakker et al. · Constitutive activity of the histamine H1 receptor reveals inverse agonism of histamine H1 receptor antagonists",
              "fullTitle": "Constitutive activity of the histamine H(1) receptor reveals inverse agonism of histamine H(1) receptor antagonists.",
              "journal": "European journal of pharmacology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hrh1-ip3"
        },
        {
          "id": "hist-hrh3",
          "from": "histamine",
          "to": "hrh3",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "转染人 H₃R 后，组胺可抑制细胞中 forskolin 诱导的 cAMP 生成。",
            "en": "After transfection with human H₃R, histamine inhibited forskolin-stimulated cAMP formation in the cells."
          },
          "scope": {
            "zh": "人 H₃R / 异源表达功能实验",
            "en": "Human H₃R / heterologous functional assay"
          },
          "limitation": {
            "zh": "该结果不限定 H₃R 仅分布于组胺神经元。",
            "en": "This does not restrict H₃R expression to histamine neurons."
          },
          "sources": [
            {
              "id": "lovenberg1999",
              "title": "Lovenberg et al. · Cloning and functional expression of the human histamine H3 receptor",
              "year": "1999",
              "pmid": "10347254",
              "doi": "10.1124/mol.55.6.1101",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10347254/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Lovenberg et al. · Cloning and functional expression of the human histamine H3 receptor",
              "fullTitle": "Cloning and functional expression of the human histamine H3 receptor.",
              "journal": "Molecular pharmacology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hist-hrh3"
        },
        {
          "id": "hrh3-camp",
          "from": "hrh3",
          "to": "hist-camp",
          "relation": {
            "zh": "抑制 cAMP 生成",
            "en": "Inhibits cAMP formation"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "在表达人 H₃R 的细胞中，组胺抑制 forskolin 诱导的 cAMP 生成。",
            "en": "In cells expressing human H₃R, histamine inhibited forskolin-stimulated cAMP formation."
          },
          "scope": {
            "zh": "人受体 / 转染细胞 / cAMP 测定",
            "en": "Human receptor / transfected cells / cAMP assay"
          },
          "limitation": {
            "zh": "这里测量的是细胞内 cAMP 生成，不是突触末梢的组胺释放。",
            "en": "The measured response is intracellular cAMP formation, not histamine release from nerve terminals."
          },
          "sources": [
            {
              "id": "lovenberg1999",
              "title": "Lovenberg et al. · Cloning and functional expression of the human histamine H3 receptor",
              "year": "1999",
              "pmid": "10347254",
              "doi": "10.1124/mol.55.6.1101",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10347254/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Lovenberg et al. · Cloning and functional expression of the human histamine H3 receptor",
              "fullTitle": "Cloning and functional expression of the human histamine H3 receptor.",
              "journal": "Molecular pharmacology"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hrh3-camp"
        },
        {
          "id": "hrh3-release",
          "from": "hrh3",
          "to": "hist-release",
          "relation": {
            "zh": "自受体持续性抑制",
            "en": "Tonic autoreceptor inhibition"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "原生 H₃R 的构成性活性持续抑制脑内组胺神经传递，反向激动剂可减弱这种抑制。",
            "en": "Constitutive activity of native H₃R tonically restrains histaminergic neurotransmission in the brain; inverse agonists can reduce this inhibition."
          },
          "scope": {
            "zh": "啮齿类脑 / 原生与重组受体药理",
            "en": "Rodent brain / native and recombinant receptor pharmacology"
          },
          "limitation": {
            "zh": "构成性活性并不要求组胺先激活受体；降低这种活性不意味着所有神经末梢均发生相同幅度的递质释放变化。",
            "en": "Constitutive activity does not require prior receptor activation by histamine; reducing it does not imply an identical change in transmitter release at every nerve terminal."
          },
          "sources": [
            {
              "id": "morisset2000",
              "title": "Morisset et al. · High constitutive activity of native H3 receptors regulates histamine neurons in brain",
              "year": "2000",
              "pmid": "11130725",
              "doi": "10.1038/35048583",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11130725/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Morisset et al. · High constitutive activity of native H3 receptors regulates histamine neurons in brain",
              "fullTitle": "High constitutive activity of native H3 receptors regulates histamine neurons in brain.",
              "journal": "Nature"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hrh3-release"
        },
        {
          "id": "hrh1-bf",
          "from": "hrh1",
          "to": "bf-cholinergic",
          "relation": {
            "zh": "局部 H₁ 药理支持",
            "en": "Local H₁ pharmacology"
          },
          "sign": "context",
          "statement": {
            "zh": "基底前脑给予 H₁ 拮抗剂降低觉醒与皮层活化，胆碱能细胞损毁消除此效应。",
            "en": "Basal-forebrain H₁ antagonism reduced wake and cortical activation; cholinergic lesions abolished these effects."
          },
          "scope": {
            "zh": "大鼠 / 局部微透析、损毁、EEG",
            "en": "Rat / local microdialysis, lesions and EEG"
          },
          "limitation": {
            "zh": "受体与细胞群之间为功能依赖证据，不是逐细胞受体定位。",
            "en": "Functional dependence does not establish receptor localization in each individual cell."
          },
          "sources": [
            {
              "id": "zant2012",
              "title": "Zant et al. · Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons",
              "year": "2012",
              "pmid": "22993440",
              "doi": "10.1523/jneurosci.5933-11.2012",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6621481/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Zant et al. · Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons",
              "fullTitle": "Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "histamine/hrh1-bf"
        },
        {
          "id": "bf-wake",
          "from": "bf-cholinergic",
          "to": "hist-wake",
          "relation": {
            "zh": "胆碱能细胞依赖",
            "en": "Cholinergic-cell dependence"
          },
          "sign": "activation",
          "statement": {
            "zh": "组胺诱发的基底前脑促觉醒和皮层活化依赖完整胆碱能细胞群。",
            "en": "Histamine-induced basal-forebrain wake promotion and cortical activation depended on intact cholinergic cells."
          },
          "scope": {
            "zh": "大鼠 / 组胺局部灌流与选择性损毁",
            "en": "Rat / local histamine perfusion and selective lesions"
          },
          "limitation": {
            "zh": "局部外源性组胺实验不等于所有正常觉醒的唯一机制。",
            "en": "Local exogenous histamine is not the sole mechanism of normal wakefulness."
          },
          "sources": [
            {
              "id": "zant2012",
              "title": "Zant et al. · Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons",
              "year": "2012",
              "pmid": "22993440",
              "doi": "10.1523/jneurosci.5933-11.2012",
              "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6621481/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Zant et al. · Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons",
              "fullTitle": "Histamine release in the basal forebrain mediates cortical activation through cholinergic neurons.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "histamine/bf-wake"
        },
        {
          "id": "orexin-ox2-hist",
          "from": "orexin-input",
          "to": "ox2",
          "relation": {
            "zh": "药理证据支持 OX2R 参与",
            "en": "Pharmacology supports OX2R involvement"
          },
          "sign": "activation",
          "statement": {
            "zh": "食欲素激活分离的 TMN 组胺神经元，药理结果支持 OX2R 参与。",
            "en": "Orexins activated isolated TMN histamine neurons, with pharmacology supporting OX2R involvement."
          },
          "scope": {
            "zh": "大鼠 TMN / 电生理、免疫与电镜",
            "en": "Rat TMN / electrophysiology, immunohistochemistry and EM"
          },
          "limitation": {
            "zh": "亚型表达与相对药效不证明另一亚型完全缺失。",
            "en": "Subtype expression and relative potency do not prove complete absence of the other subtype."
          },
          "sources": [
            {
              "id": "yamanaka2002",
              "title": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
              "year": "2002",
              "pmid": "11811995",
              "doi": "10.1006/bbrc.2001.6318",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11811995/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
              "fullTitle": "Orexins activate histaminergic neurons via the orexin 2 receptor.",
              "journal": "Biochemical and biophysical research communications"
            }
          ],
          "layer": "cross",
          "canonicalId": "histamine/orexin-ox2-hist"
        },
        {
          "id": "ox2-tmn-hist",
          "from": "ox2",
          "to": "tmn-histamine",
          "relation": {
            "zh": "增加神经元放电",
            "en": "Increases neuronal firing"
          },
          "sign": "activation",
          "statement": {
            "zh": "食欲素在 TMN 组胺神经元中产生兴奋；研究亦显示食欲素末梢与此类细胞的突触接触。",
            "en": "Orexins excited TMN histamine neurons; the study also demonstrated orexin-terminal synapses onto these cells."
          },
          "scope": {
            "zh": "大鼠离体 TMN 细胞与超微结构；另参照小鼠 Hdc 全身缺失及食欲素神经元光刺激实验",
            "en": "Rat isolated TMN cells and ultrastructure; separately, constitutive Hdc deletion and orexin-neuron photostimulation in mice"
          },
          "limitation": {
            "zh": "在 Hdc 缺失小鼠中，食欲素神经元光刺激仍可缩短睡眠至觉醒的转换潜伏期，说明组胺合成对这一实验条件下的快速唤醒并非必需。该实验没有消除 TMN 神经元或选择性阻断 OX2R→TMN 投射；全身基因缺失还可能伴随发育代偿。",
            "en": "In Hdc-deficient mice, photostimulation of orexin neurons still shortened sleep-to-wake latency, showing that histamine synthesis was not required for rapid awakening under these experimental conditions. The experiment did not ablate TMN neurons or selectively interrupt the OX2R→TMN projection; constitutive gene deletion may also permit developmental compensation."
          },
          "sources": [
            {
              "id": "yamanaka2002",
              "title": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
              "year": "2002",
              "pmid": "11811995",
              "doi": "10.1006/bbrc.2001.6318",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11811995/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
              "fullTitle": "Orexins activate histaminergic neurons via the orexin 2 receptor.",
              "journal": "Biochemical and biophysical research communications"
            },
            {
              "id": "carter2009",
              "title": "Carter et al. · Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions",
              "year": "2009",
              "pmid": "19726652",
              "doi": "10.1523/jneurosci.1205-09.2009",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19726652/",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Carter et al. · Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions",
              "fullTitle": "Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions.",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "canonicalId": "histamine/ox2-tmn-hist"
        },
        {
          "id": "hnmt-metabolism",
          "from": "hnmt",
          "to": "hist-metabolism",
          "relation": {
            "zh": "甲基化失活",
            "en": "Methylation / inactivation"
          },
          "sign": "activation",
          "statement": {
            "zh": "Hnmt 缺失显著增加脑组胺，支持其对脑组胺代谢的调节作用。",
            "en": "Hnmt deletion markedly increased brain histamine, supporting its role in cerebral histamine metabolism."
          },
          "scope": {
            "zh": "小鼠全身 Hnmt 基因敲除 / 脑组织组胺测定",
            "en": "Whole-body Hnmt-knockout mice / brain-tissue histamine measurement"
          },
          "limitation": {
            "zh": "基因缺失不能直接预测短期酶抑制剂的安全性或疗效。",
            "en": "Genetic loss does not directly predict short-term inhibitor safety or efficacy."
          },
          "sources": [
            {
              "id": "naganuma2017",
              "title": "Naganuma et al. · Histamine N-methyltransferase regulates aggression and the sleep-wake cycle",
              "year": "2017",
              "pmid": "29162912",
              "doi": "10.1038/s41598-017-16019-8",
              "url": "https://www.nature.com/articles/s41598-017-16019-8",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Naganuma et al. · Histamine N-methyltransferase regulates aggression and the sleep-wake cycle",
              "fullTitle": "Histamine N-methyltransferase regulates aggression and the sleep-wake cycle.",
              "journal": "Scientific reports"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hnmt-metabolism"
        },
        {
          "id": "hist-metabolism-wake",
          "from": "hist-metabolism",
          "to": "hnmt-sleep-distribution",
          "relation": {
            "zh": "基因缺失改变睡眠–觉醒分布",
            "en": "Gene deletion alters sleep–wake distribution"
          },
          "sign": "context",
          "statement": {
            "zh": "Hnmt 敲除出现光期觉醒延长及暗期代偿性睡眠。",
            "en": "Hnmt knockout prolonged light-period wake and produced compensatory dark-period sleep."
          },
          "scope": {
            "zh": "成年雄性 C57BL/6J 小鼠 / 全身 Hnmt 缺失 / EEG–EMG 分期与光暗期分布",
            "en": "Adult male C57BL/6J mice / constitutive Hnmt deletion / EEG–EMG sleep staging and light/dark distribution"
          },
          "limitation": {
            "zh": "该结果是 Hnmt 缺失后的睡眠–觉醒表型，不能据此将正常组胺代谢直接定义为促觉醒或促睡眠机制。",
            "en": "This is the sleep–wake phenotype after Hnmt deletion; it does not by itself define normal histamine metabolism as directly wake-promoting or sleep-promoting."
          },
          "sources": [
            {
              "id": "naganuma2017",
              "title": "Naganuma et al. · Histamine N-methyltransferase regulates aggression and the sleep-wake cycle",
              "year": "2017",
              "pmid": "29162912",
              "doi": "10.1038/s41598-017-16019-8",
              "url": "https://www.nature.com/articles/s41598-017-16019-8",
              "kind": "primary research",
              "verified": "2026-11-06",
              "label": "Naganuma et al. · Histamine N-methyltransferase regulates aggression and the sleep-wake cycle",
              "fullTitle": "Histamine N-methyltransferase regulates aggression and the sleep-wake cycle.",
              "journal": "Scientific reports"
            }
          ],
          "layer": "circuit",
          "canonicalId": "histamine/hist-metabolism-wake"
        },
        {
          "id": "hrh3-cortical-5ht",
          "from": "hrh3",
          "to": "cortical-5ht-release",
          "relation": {
            "zh": "异受体抑制作用",
            "en": "Heteroreceptor-mediated inhibition"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "在大鼠皮层切片及突触体中，组胺抑制预载 [³H]5-HT 后刺激诱发的放射性溢出；H₃ 激动剂与拮抗剂的药理结果支持突触前 H₃ 异受体参与。",
            "en": "In rat cortical slices and synaptosomes preloaded with [³H]5-HT, histamine inhibited stimulation-evoked radiolabel overflow; H₃ agonist and antagonist pharmacology supported presynaptic H₃ heteroreceptor involvement."
          },
          "scope": {
            "zh": "大鼠大脑皮层离体切片与突触体 / 诱发放射性溢出 / 受体药理学",
            "en": "Rat cerebral cortical slices and synaptosomes / evoked radiolabel overflow / receptor pharmacology"
          },
          "limitation": {
            "zh": "这是局部递质释放调节的证据，不是中缝核神经元放电或睡眠行为测量；不能外推为所有 5-HT 末梢或人体 pitolisant 疗效的统一机制。",
            "en": "This is evidence for local transmitter-release modulation, not a measurement of raphe-neuron firing or sleep behavior; it does not establish a uniform mechanism at all 5-HT terminals or for clinical pitolisant efficacy."
          },
          "sources": [
            {
              "id": "fink1990",
              "title": "Fink et al. · Involvement of presynaptic H3 receptors in the inhibitory effect of histamine on serotonin release in the rat brain cortex",
              "year": "1990",
              "pmid": "1965326",
              "doi": "10.1007/BF00169038",
              "url": "https://pubmed.ncbi.nlm.nih.gov/1965326/",
              "kind": "primary research",
              "verified": "2026-11-06"
            },
            {
              "id": "schlicker1988",
              "title": "Schlicker et al. · Histamine H3 receptor-mediated inhibition of serotonin release in the rat brain cortex",
              "year": "1988",
              "pmid": "3412497",
              "doi": "10.1007/BF00182737",
              "url": "https://pubmed.ncbi.nlm.nih.gov/3412497/",
              "kind": "primary research",
              "verified": "2026-11-06"
            }
          ],
          "layer": "molecular",
          "canonicalId": "histamine/hrh3-cortical-5ht"
        }
      ],
      "summary": {
        "zh": "分别呈现 H₁R–Gq 复合物结构、H₁R 相关肌醇磷酸累积、H₃R 自受体调节、基底前脑环路及 HNMT 介导的组胺代谢。",
        "en": "Separate the H₁R–Gq complex structure, H₁R-associated inositol-phosphate accumulation, H₃R autoreceptor regulation, basal-forebrain circuitry and HNMT-mediated histamine metabolism."
      },
      "designNotes": {
        "zh": "食欲素至 TMN 的兴奋性连接有实验证据。Hdc 缺失小鼠的光刺激研究界定了组胺合成的必要性，不能据此判定整条 OX2R→TMN 投射的必要性。H₁R–Gq 复合物结构与 H₁R 构成性活性相关的肌醇磷酸（IPs）累积来自不同实验；后者不是 IP₃ 特异性测定。",
        "en": "The excitatory orexin-to-TMN connection is experimentally supported. Photostimulation studies in Hdc-deficient mice test the requirement for histamine synthesis, not the requirement for the entire OX2R→TMN projection. The H₁R–Gq complex structure and inositol-phosphate (IPs) accumulation associated with H₁R constitutive activity come from separate experiments; the latter is not an IP₃-specific assay."
      },
      "lead": {
        "zh": "从 H₁R 的结构与信号转导、H₃R 的自受体调节和组胺代谢，联系 TMN 与基底前脑的睡眠–觉醒研究。",
        "en": "Relate H₁R structure and signaling, H₃R autoreceptor regulation and histamine metabolism to sleep–wake studies of the TMN and basal forebrain."
      },
      "question": {
        "zh": "H₁R 阻断、H₃R 反向激动和 HNMT 干预，是否在不同时间尺度上改变组胺神经传递及睡眠–觉醒状态？",
        "en": "Do H₁R blockade, H₃R inverse agonism and HNMT perturbation alter histaminergic neurotransmission and sleep–wake state on different timescales?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "monoamines": {
      "id": "monoamines",
      "title": {
        "zh": "儿茶酚胺再摄取与觉醒",
        "en": "Catecholamine reuptake and arousal"
      },
      "summary": {
        "zh": "DAT 和 NET 介导儿茶酚胺再摄取。细胞转运实验、人体 PET 与动物睡眠–觉醒实验分别提供转运功能、在体药理学和环路证据。",
        "en": "DAT and NET mediate catecholamine reuptake. Cellular transport assays, human PET and animal sleep–wake experiments provide distinct evidence for transporter function, in vivo pharmacology and circuit effects."
      },
      "nodes": [
        {
          "id": "mono-dopamine",
          "title": {
            "zh": "多巴胺",
            "en": "Dopamine"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "mono-ne",
          "title": {
            "zh": "去甲肾上腺素",
            "en": "Norepinephrine"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "dat",
          "title": {
            "zh": "多巴胺转运体（DAT）",
            "en": "Dopamine transporter (DAT)"
          },
          "kind": "target",
          "record": "dat",
          "systemLink": null
        },
        {
          "id": "net",
          "title": {
            "zh": "去甲肾上腺素转运体（NET）",
            "en": "Norepinephrine transporter (NET)"
          },
          "kind": "target",
          "record": "net",
          "systemLink": null
        },
        {
          "id": "mod",
          "title": {
            "zh": "莫达非尼",
            "en": "Modafinil"
          },
          "kind": "wake",
          "record": "mod",
          "systemLink": null
        },
        {
          "id": "mono-extracellular-da",
          "title": {
            "zh": "细胞外多巴胺变化（PET 推断）",
            "en": "Extracellular dopamine change (PET inference)"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "mono-lc",
          "title": {
            "zh": "蓝斑去甲肾上腺素神经元",
            "en": "LC noradrenergic neurons"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "mono-dat-ko",
          "title": {
            "zh": "Slc6a3 敲除 + 莫达非尼给药",
            "en": "Slc6a3 knockout + modafinil administration"
          },
          "kind": "circuit",
          "intervention": true,
          "record": "dat",
          "systemLink": null
        },
        {
          "id": "mono-d2-ko-dati",
          "title": {
            "zh": "Drd2 敲除 + GBR12909 给药",
            "en": "Drd2 knockout + GBR12909 administration"
          },
          "kind": "circuit",
          "intervention": true,
          "crossSystem": "dopamine-receptor-system",
          "record": "drd2",
          "systemLink": "dopamine-receptor-system"
        },
        {
          "id": "mono-hcrt-lc-block",
          "title": {
            "zh": "Hcrt 光刺激 + 双侧 LC 干预",
            "en": "Hcrt stimulation + bilateral LC intervention"
          },
          "kind": "circuit",
          "intervention": true,
          "crossSystem": "orexin",
          "systemLink": "orexin"
        },
        {
          "id": "mono-wake",
          "title": {
            "zh": "觉醒 / 状态转换",
            "en": "Wake / state transitions"
          },
          "kind": "wake",
          "systemLink": null
        }
      ],
      "edges": [
        {
          "id": "mono-uptake-da",
          "from": "mono-dopamine",
          "to": "dat",
          "relation": {
            "zh": "Na⁺依赖摄取",
            "en": "Na⁺-dependent uptake"
          },
          "sign": "context",
          "statement": {
            "zh": "大鼠 DAT 在 COS7 细胞中表达后产生 Na⁺依赖的多巴胺摄取。",
            "en": "Rat DAT expression conferred Na⁺-dependent dopamine uptake in COS7 cells."
          },
          "scope": {
            "zh": "大鼠转运体 · COS7 摄取实验",
            "en": "Rat transporter · COS7 uptake assay"
          },
          "limitation": {
            "zh": "这里显示转运功能，不是受体激活或睡眠行为证据。",
            "en": "This demonstrates transport, not receptor activation or a sleep phenotype."
          },
          "sources": [
            {
              "id": "giros1991",
              "title": "Giros et al. · FEBS Letters 1991 · Cloning and functional characterization of a cocaine-sensitive dopamine transporter",
              "label": "Giros et al. · FEBS Letters 1991 · Cloning and functional characterization of a cocaine-sensitive dopamine transporter",
              "pmid": "1765147",
              "doi": "10.1016/0014-5793(91)81406-x",
              "url": "https://pubmed.ncbi.nlm.nih.gov/1765147/",
              "verified": "2026-11-06",
              "verificationNote": "Rat DAT cDNA in COS7 cells; sodium-dependent dopamine uptake.",
              "fullTitle": "Cloning and functional characterization of a cocaine-sensitive dopamine transporter.",
              "year": "1991",
              "journal": "FEBS letters"
            }
          ],
          "layer": "molecular",
          "canonicalId": "monoamines/mono-uptake-da"
        },
        {
          "id": "mono-uptake-ne",
          "from": "mono-ne",
          "to": "net",
          "relation": {
            "zh": "Na⁺依赖摄取",
            "en": "Na⁺-dependent uptake"
          },
          "sign": "context",
          "statement": {
            "zh": "人 NET 在 HeLa 细胞中的表达赋予 Na⁺依赖的去甲肾上腺素摄取功能。",
            "en": "Human NET expressed in HeLa cells supported Na⁺-dependent norepinephrine uptake."
          },
          "scope": {
            "zh": "人转运体 · HeLa 摄取实验",
            "en": "Human transporter · HeLa uptake assay"
          },
          "limitation": {
            "zh": "转运蛋白与下游肾上腺素受体属于不同实体。",
            "en": "The transporter and downstream adrenergic receptors are distinct entities."
          },
          "sources": [
            {
              "id": "pacholczyk1991",
              "title": "Pacholczyk et al. · Nature 1991 · Expression cloning of a cocaine- and antidepressant-sensitive human noradrenaline transporter",
              "label": "Pacholczyk et al. · Nature 1991 · Expression cloning of a cocaine- and antidepressant-sensitive human noradrenaline transporter",
              "pmid": "2008212",
              "doi": "10.1038/350350a0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/2008212/",
              "verified": "2026-11-06",
              "verificationNote": "Human NET expressed in HeLa cells; Na-dependent uptake.",
              "fullTitle": "Expression cloning of a cocaine- and antidepressant-sensitive human noradrenaline transporter.",
              "year": "1991",
              "journal": "Nature"
            }
          ],
          "layer": "molecular",
          "canonicalId": "monoamines/mono-uptake-ne"
        },
        {
          "id": "mono-mod-dat",
          "from": "mod",
          "to": "dat",
          "relation": {
            "zh": "抑制再摄取",
            "en": "Uptake inhibition"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "莫达非尼抑制人 DAT 的多巴胺摄取，HEK 细胞实验 IC₅₀ 为 6.4 μM。",
            "en": "Modafinil inhibited dopamine uptake through human DAT in HEK cells, with IC₅₀ 6.4 μM."
          },
          "scope": {
            "zh": "人 DAT · HEK 细胞",
            "en": "Human DAT · HEK cells"
          },
          "limitation": {
            "zh": "细胞 IC₅₀ 与人体脑内占有率不是同一指标。",
            "en": "Cellular IC₅₀ and brain occupancy are different measurements."
          },
          "sources": [
            {
              "id": "madras2006",
              "title": "Madras et al. · JPET 2006 · Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro",
              "label": "Madras et al. · JPET 2006 · Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro",
              "pmid": "16885432",
              "doi": "10.1124/jpet.106.106583",
              "url": "https://pubmed.ncbi.nlm.nih.gov/16885432/",
              "verified": "2026-11-06",
              "verificationNote": "Human transporter uptake in HEK cells; rhesus monkey PET. DAT IC50 6.4 μM; NET 35.6 μM, not reversed.",
              "fullTitle": "Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro.",
              "year": "2006",
              "journal": "The Journal of pharmacology and experimental therapeutics"
            }
          ],
          "layer": "drug",
          "canonicalId": "monoamines/mono-mod-dat"
        },
        {
          "id": "mono-mod-net",
          "from": "mod",
          "to": "net",
          "relation": {
            "zh": "抑制再摄取",
            "en": "Uptake inhibition"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "同一研究中，莫达非尼抑制人 NET 的去甲肾上腺素摄取，IC₅₀ 为 35.6 μM。",
            "en": "In the same study, modafinil inhibited human NET-mediated norepinephrine uptake with IC₅₀ 35.6 μM."
          },
          "scope": {
            "zh": "人 NET · HEK 细胞",
            "en": "Human NET · HEK cells"
          },
          "limitation": {
            "zh": "该体外作用不能直接证明 NET 是人体促醒疗效的必要靶标。",
            "en": "This in vitro action does not establish NET as necessary for human wake-promoting efficacy."
          },
          "sources": [
            {
              "id": "madras2006",
              "title": "Madras et al. · JPET 2006 · Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro",
              "label": "Madras et al. · JPET 2006 · Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro",
              "pmid": "16885432",
              "doi": "10.1124/jpet.106.106583",
              "url": "https://pubmed.ncbi.nlm.nih.gov/16885432/",
              "verified": "2026-11-06",
              "verificationNote": "Human transporter uptake in HEK cells; rhesus monkey PET. DAT IC50 6.4 μM; NET 35.6 μM, not reversed.",
              "fullTitle": "Modafinil occupies dopamine and norepinephrine transporters in vivo and modulates the transporters and trace amine activity in vitro.",
              "year": "2006",
              "journal": "The Journal of pharmacology and experimental therapeutics"
            }
          ],
          "layer": "drug",
          "canonicalId": "monoamines/mono-mod-net"
        },
        {
          "id": "mono-mod-da-pet",
          "from": "mod",
          "to": "mono-extracellular-da",
          "relation": {
            "zh": "PET 支持多巴胺升高",
            "en": "PET evidence consistent with increased dopamine"
          },
          "sign": "context",
          "statement": {
            "zh": "10 名健康男性的 PET 研究显示莫达非尼占有 DAT；D₂/D₃ 受体放射性配体结合下降，与细胞外多巴胺升高一致。",
            "en": "PET in 10 healthy men showed DAT occupancy by modafinil; reduced D₂/D₃ receptor radioligand binding was consistent with increased extracellular dopamine."
          },
          "scope": {
            "zh": "健康男性 · PET · 口服 200/400 mg",
            "en": "Healthy men · PET · Oral 200/400 mg"
          },
          "limitation": {
            "zh": "多巴胺变化由放射配体竞争间接推断；未直接定位促醒环路。",
            "en": "Dopamine changes were inferred from radioligand competition; the arousal circuit was not localized."
          },
          "sources": [
            {
              "id": "volkow2009",
              "title": "Volkow et al. · JAMA 2009 · Effects of modafinil on dopamine and dopamine transporters in the male human brain",
              "label": "Volkow et al. · JAMA 2009 · Effects of modafinil on dopamine and dopamine transporters in the male human brain",
              "pmid": "19293415",
              "doi": "10.1001/jama.2009.351",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19293415/",
              "verified": "2026-11-06",
              "verificationNote": "PET study in 10 healthy men; indirect dopamine readout and transporter occupancy.",
              "fullTitle": "Effects of modafinil on dopamine and dopamine transporters in the male human brain: clinical implications.",
              "year": "2009",
              "journal": "JAMA"
            }
          ],
          "layer": "human",
          "canonicalId": "monoamines/mono-mod-da-pet"
        },
        {
          "id": "mono-dat-wake",
          "from": "mono-dat-ko",
          "to": "mono-wake",
          "relation": {
            "zh": "莫达非尼促醒反应缺失",
            "en": "Absent modafinil-induced wake response"
          },
          "sign": "context",
          "statement": {
            "zh": "DAT 敲除小鼠缺少莫达非尼通常诱发的觉醒增加。",
            "en": "DAT-knockout mice lacked the usual modafinil-induced increase in wakefulness."
          },
          "scope": {
            "zh": "小鼠 · 全身 Slc6a3 缺失 · EEG/EMG",
            "en": "Mouse · Global Slc6a3 deletion · EEG/EMG"
          },
          "limitation": {
            "zh": "敲除同时改变基础状态；不能将结果等同于人体选择性急性抑制。",
            "en": "Deletion also altered baseline physiology; it is not equivalent to selective acute inhibition in humans."
          },
          "sources": [
            {
              "id": "wisor2001",
              "title": "Wisor et al. · Journal of Neuroscience 2001 · Dopaminergic role in stimulant-induced wakefulness",
              "label": "Wisor et al. · Journal of Neuroscience 2001 · Dopaminergic role in stimulant-induced wakefulness",
              "pmid": "11222668",
              "doi": "10.1523/jneurosci.21-05-01787.2001",
              "url": "https://pubmed.ncbi.nlm.nih.gov/11222668/",
              "verified": "2026-11-06",
              "verificationNote": "DAT knockout mice did not show normal wake response to modafinil; developmental and baseline alterations matter.",
              "fullTitle": "Dopaminergic role in stimulant-induced wakefulness.",
              "year": "2001",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "monoamines/mono-dat-wake"
        },
        {
          "id": "mono-dat-d2",
          "from": "mono-d2-ko-dati",
          "to": "mono-wake",
          "relation": {
            "zh": "GBR12909 的促醒效应减弱",
            "en": "Attenuated wake response to GBR12909"
          },
          "sign": "context",
          "statement": {
            "zh": "Drd2 敲除削弱 DAT 抑制剂 GBR12909 诱发的觉醒增加，支持 D₂ 受体参与该药物的促醒反应。",
            "en": "Drd2 deletion attenuated the wake increase induced by the DAT inhibitor GBR12909, supporting D₂ receptor involvement in this drug response."
          },
          "scope": {
            "zh": "小鼠 · D₂R 敲除与 DAT 抑制",
            "en": "Mouse · D₂R deletion and DAT inhibition"
          },
          "limitation": {
            "zh": "这是功能依赖关系，不代表 DAT 与 D₂R 直接蛋白相互作用。",
            "en": "This is functional dependence, not direct DAT–D₂R protein interaction."
          },
          "sources": [
            {
              "id": "qu2010",
              "title": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
              "label": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
              "pmid": "20335474",
              "doi": "10.1523/jneurosci.4936-09.2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20335474/",
              "verified": "2026-11-06",
              "verificationNote": "Global D2 knockout and drug manipulations; baseline fragmentation and attenuated DAT-inhibitor arousal.",
              "fullTitle": "Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice.",
              "year": "2010",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "cross",
          "crossSystem": "dopamine-receptor-system",
          "canonicalId": "monoamines/mono-dat-d2"
        },
        {
          "id": "mono-lc-wake",
          "from": "mono-lc",
          "to": "mono-wake",
          "relation": {
            "zh": "光遗传激活促进觉醒转换",
            "en": "Optogenetic activation promotes wake transitions"
          },
          "sign": "activation",
          "statement": {
            "zh": "LC 光刺激可诱发小鼠睡眠到觉醒转换，效果依赖刺激频率。",
            "en": "LC photostimulation evoked mouse sleep-to-wake transitions in a frequency-dependent manner."
          },
          "scope": {
            "zh": "小鼠 · 光遗传 · EEG/EMG",
            "en": "Mouse · Optogenetics · EEG/EMG"
          },
          "limitation": {
            "zh": "持续高频刺激可能引起行为停顿；不能概括为刺激越强觉醒越多。",
            "en": "Sustained high-frequency stimulation could cause behavioral arrest; stronger stimulation is not uniformly more arousing."
          },
          "sources": [
            {
              "id": "carter2010",
              "title": "Carter et al. · Nature Neuroscience 2010 · Tuning arousal with optogenetic modulation of locus coeruleus neurons",
              "label": "Carter et al. · Nature Neuroscience 2010 · Tuning arousal with optogenetic modulation of locus coeruleus neurons",
              "pmid": "21037585",
              "doi": "10.1038/nn.2682",
              "url": "https://pubmed.ncbi.nlm.nih.gov/21037585/",
              "verified": "2026-11-06",
              "verificationNote": "Mouse optogenetics; frequency-dependent wake transitions; sustained high-frequency stimulation produced behavioral arrest.",
              "fullTitle": "Tuning arousal with optogenetic modulation of locus coeruleus neurons.",
              "year": "2010",
              "journal": "Nature neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "monoamines/mono-lc-wake"
        },
        {
          "id": "mono-orexin-lc",
          "from": "mono-hcrt-lc-block",
          "to": "mono-wake",
          "relation": {
            "zh": "Hcrt 诱导的觉醒潜伏期缩短效应受阻",
            "en": "Blockade of Hcrt-induced shortening of wake latency"
          },
          "sign": "context",
          "statement": {
            "zh": "在小鼠休息期，同步双侧 LC 光抑制，或预先在 LC 区域双侧注射 SB-334867，消除 Hcrt 神经元光刺激缩短 NREM–觉醒潜伏期的效应。",
            "en": "During the mouse inactive period, concurrent bilateral LC photoinhibition or prior bilateral SB-334867 injection into the LC region abolished Hcrt-photostimulation-induced shortening of NREM-to-wake latency."
          },
          "scope": {
            "zh": "小鼠休息期 · Hcrt 10 Hz 光刺激 · 双侧 LC 干预",
            "en": "Mouse inactive period · 10-Hz Hcrt photostimulation · Bilateral LC intervention"
          },
          "limitation": {
            "zh": "单侧 LC 抑制或 Hcrt 刺激结束后的 LC 抑制未复制该效应；不能据此判定 LC 是所有自然觉醒的唯一必要通路。",
            "en": "Unilateral LC inhibition or inhibition after Hcrt stimulation did not reproduce the effect; LC is not thereby established as the sole obligatory route for all spontaneous awakening."
          },
          "sources": [
            {
              "id": "carter2012",
              "title": "Carter et al. · PNAS 2012 · Mechanism for Hypocretin-mediated sleep-to-wake transitions",
              "label": "Carter et al. · PNAS 2012 · Mechanism for Hypocretin-mediated sleep-to-wake transitions",
              "pmid": "22955882",
              "doi": "10.1073/pnas.1202526109",
              "url": "https://pubmed.ncbi.nlm.nih.gov/22955882/",
              "verified": "2026-11-06",
              "verificationNote": "Mouse LC inhibition and local SB-334867 blocked Hcrt stimulation-induced NREM-wake transitions.",
              "fullTitle": "Mechanism for Hypocretin-mediated sleep-to-wake transitions.",
              "year": "2012",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "cross",
          "crossSystem": "orexin",
          "canonicalId": "monoamines/mono-orexin-lc"
        }
      ],
      "lead": {
        "zh": "DAT/NET 管理递质再摄取。转运抑制、人体 PET 与觉醒环路是相互补充的证据层。",
        "en": "DAT/NET regulate transmitter reuptake. Transport inhibition, human PET and arousal circuits provide complementary evidence."
      },
      "question": {
        "zh": "转运体占有、胞外递质变化与觉醒终点之间，哪些联系有同一实验体系的支持？",
        "en": "Which links between transporter occupancy, extracellular transmitter and wake endpoints are supported within one experimental system?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "gabab": {
      "id": "gabab",
      "title": {
        "zh": "GABA_B 受体：离子通道调节与状态稳定性",
        "en": "GABA_B receptors: ion-channel modulation and state stability"
      },
      "summary": {
        "zh": "GABA_B 受体由 GABA_B1 和 GABA_B2 亚基形成异源二聚体，调节 K⁺ 和 Ca²⁺ 电流。食欲素神经元中的受体参与睡眠–觉醒状态稳定；细胞电生理证据与药物临床疗效分别呈现。",
        "en": "GABA_B receptors form GABA_B1–GABA_B2 heterodimers that modulate K⁺ and Ca²⁺ currents. Receptors in orexin neurons contribute to sleep–wake stability; cellular electrophysiology and clinical drug efficacy are presented separately."
      },
      "nodes": [
        {
          "id": "gb-gaba",
          "title": {
            "zh": "GABA",
            "en": "GABA"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "gabab",
          "title": {
            "zh": "GABA_B 受体（GABA_B1/GABA_B2）",
            "en": "GABA_B receptor (GABA_B1/GABA_B2)"
          },
          "kind": "target",
          "record": "gabab",
          "systemLink": null
        },
        {
          "id": "gb-girk",
          "title": {
            "zh": "GIRK（Kir3）钾电流",
            "en": "GIRK (Kir3) K⁺ current"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "gb-ca",
          "title": {
            "zh": "N 型钙通道电流",
            "en": "N-type Ca²⁺ channel current"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "gb-ptx",
          "title": {
            "zh": "PTX 敏感性 G 蛋白信号",
            "en": "PTX-sensitive G protein signaling"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "gb-orexin",
          "title": {
            "zh": "食欲素神经元兴奋性",
            "en": "Orexin neuron excitability"
          },
          "kind": "circuit",
          "crossSystem": "orexin",
          "systemLink": "orexin"
        },
        {
          "id": "gb-baclofen-ptx",
          "title": {
            "zh": "巴氯芬反应的 PTX 敏感性实验",
            "en": "PTX sensitivity of the baclofen response"
          },
          "kind": "circuit",
          "intervention": true,
          "record": "gabab",
          "systemLink": null
        },
        {
          "id": "gb-orexin-ko",
          "title": {
            "zh": "食欲素神经元特异性 Gabbr1 条件性敲除",
            "en": "Orexin-neuron-specific conditional Gabbr1 knockout"
          },
          "kind": "circuit",
          "intervention": true,
          "crossSystem": "orexin",
          "record": "gabab",
          "systemLink": "orexin"
        },
        {
          "id": "gb-stability",
          "title": {
            "zh": "睡眠–觉醒状态稳定性",
            "en": "Sleep–wake state stability"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "gb-ghb",
          "title": {
            "zh": "γ-羟基丁酸（GHB）",
            "en": "γ-Hydroxybutyrate (GHB)"
          },
          "kind": "drug",
          "record": "oxyb",
          "systemLink": null
        },
        {
          "id": "camk2a",
          "title": {
            "zh": "CaMKIIα hub 结构域",
            "en": "CaMKIIα hub domain"
          },
          "kind": "target",
          "record": "camk2a",
          "systemLink": null
        }
      ],
      "edges": [
        {
          "id": "gb-ligand",
          "from": "gb-gaba",
          "to": "gabab",
          "relation": {
            "zh": "受体激动作用",
            "en": "Receptor agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "GABA_B1 与 GABA_B2 共表达形成对激动剂产生功能反应的异源二聚体受体。",
            "en": "Coexpression of GABA_B1 and GABA_B2 formed a functional, agonist-responsive heterodimeric receptor."
          },
          "scope": {
            "zh": "重组受体 · HEK293 / 非洲爪蟾卵母细胞",
            "en": "Recombinant receptors · HEK293 / Xenopus oocytes"
          },
          "limitation": {
            "zh": "功能取决于亚基组装和实验系统。",
            "en": "Function depends on subunit assembly and experimental context."
          },
          "sources": [
            {
              "id": "kaupmann1998",
              "title": "Kaupmann et al. · Nature 1998 · GABAB-receptor subtypes assemble into functional heteromeric complexes",
              "label": "Kaupmann et al. · Nature 1998 · GABAB-receptor subtypes assemble into functional heteromeric complexes",
              "pmid": "9872317",
              "doi": "10.1038/25360",
              "url": "https://www.nature.com/articles/25360",
              "verified": "2026-11-06",
              "verificationNote": "GABAB1/2 coexpression supports Kir3 currents in HEK293 cells and Xenopus oocytes.",
              "fullTitle": "GABA(B)-receptor subtypes assemble into functional heteromeric complexes.",
              "year": "1998",
              "journal": "Nature"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gabab/gb-ligand"
        },
        {
          "id": "gb-girk-edge",
          "from": "gabab",
          "to": "gb-girk",
          "relation": {
            "zh": "激活 GIRK 电流",
            "en": "Activation of GIRK current"
          },
          "sign": "activation",
          "statement": {
            "zh": "GABA_B1/GABA_B2 共表达支持 Kir3 电流激活，单独亚基的耦联效率很低。",
            "en": "GABA_B1/GABA_B2 coexpression supported Kir3 current activation, whereas individual subunits coupled poorly."
          },
          "scope": {
            "zh": "HEK293 / 非洲爪蟾卵母细胞电生理",
            "en": "HEK293 / Xenopus oocyte electrophysiology"
          },
          "limitation": {
            "zh": "这不是人体睡眠核团中的直接电流测量。",
            "en": "These currents were not measured in a human sleep nucleus."
          },
          "sources": [
            {
              "id": "kaupmann1998",
              "title": "Kaupmann et al. · Nature 1998 · GABAB-receptor subtypes assemble into functional heteromeric complexes",
              "label": "Kaupmann et al. · Nature 1998 · GABAB-receptor subtypes assemble into functional heteromeric complexes",
              "pmid": "9872317",
              "doi": "10.1038/25360",
              "url": "https://www.nature.com/articles/25360",
              "verified": "2026-11-06",
              "verificationNote": "GABAB1/2 coexpression supports Kir3 currents in HEK293 cells and Xenopus oocytes.",
              "fullTitle": "GABA(B)-receptor subtypes assemble into functional heteromeric complexes.",
              "year": "1998",
              "journal": "Nature"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gabab/gb-girk-edge"
        },
        {
          "id": "gb-ptx-edge",
          "from": "gb-baclofen-ptx",
          "to": "gb-ptx",
          "relation": {
            "zh": "PTX 敏感性的药理学证据",
            "en": "Pharmacological evidence of PTX sensitivity"
          },
          "sign": "context",
          "statement": {
            "zh": "在表达重组 GABA_B 受体的神经元中，巴氯芬诱导的 Ca²⁺ 电流抑制对百日咳毒素（PTX）敏感。",
            "en": "In neurons expressing recombinant GABA_B receptors, baclofen-induced inhibition of Ca²⁺ current was sensitive to pertussis toxin (PTX)."
          },
          "scope": {
            "zh": "大鼠上颈交感神经节神经元 · 受体转染",
            "en": "Rat superior cervical ganglion neurons · Receptor transfection"
          },
          "limitation": {
            "zh": "PTX 敏感性支持 Gᵢ/ₒ 类参与，但该实验未单独指定某个 α 亚型。",
            "en": "PTX sensitivity supports Gᵢ/ₒ-family involvement but does not identify an individual α subtype."
          },
          "sources": [
            {
              "id": "filippov2000",
              "title": "Filippov et al. · Journal of Neuroscience 2000 · Heteromeric assembly of GABABR1 and GABABR2 receptor subunits inhibits Ca2+ current in sympathetic neurons",
              "label": "Filippov et al. · Journal of Neuroscience 2000 · Heteromeric assembly of GABABR1 and GABABR2 receptor subunits inhibits Ca2+ current in sympathetic neurons",
              "pmid": "10751439",
              "doi": "10.1523/jneurosci.20-08-02867.2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10751439/",
              "verified": "2026-11-06",
              "verificationNote": "Rat SCG neurons, primarily N-type current; PTX-sensitive, voltage-dependent baclofen inhibition. Not a sleep nucleus or direct vesicle-release assay.",
              "fullTitle": "Heteromeric assembly of GABA(B)R1 and GABA(B)R2 receptor subunits inhibits Ca(2+) current in sympathetic neurons.",
              "year": "2000",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gabab/gb-ptx-edge"
        },
        {
          "id": "gb-ca-edge",
          "from": "gabab",
          "to": "gb-ca",
          "relation": {
            "zh": "抑制 Ca²⁺ 电流",
            "en": "Inhibition of Ca²⁺ current"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "转染 GABA_B1/GABA_B2 的大鼠交感神经元中，巴氯芬抑制以 N 型为主的 Ca²⁺电流。",
            "en": "Baclofen inhibited predominantly N-type Ca²⁺ currents in rat sympathetic neurons expressing GABA_B1/GABA_B2."
          },
          "scope": {
            "zh": "大鼠上颈交感神经节神经元 · 重组受体 · 膜片钳（Ba²⁺ 载流）",
            "en": "Rat superior cervical ganglion neurons · Recombinant receptors · Patch clamp with Ba²⁺ as charge carrier"
          },
          "limitation": {
            "zh": "研究测量电流，未直接测量睡眠核团的囊泡释放。",
            "en": "The study measured currents, not vesicular release in sleep-regulating nuclei."
          },
          "sources": [
            {
              "id": "filippov2000",
              "title": "Filippov et al. · Journal of Neuroscience 2000 · Heteromeric assembly of GABABR1 and GABABR2 receptor subunits inhibits Ca2+ current in sympathetic neurons",
              "label": "Filippov et al. · Journal of Neuroscience 2000 · Heteromeric assembly of GABABR1 and GABABR2 receptor subunits inhibits Ca2+ current in sympathetic neurons",
              "pmid": "10751439",
              "doi": "10.1523/jneurosci.20-08-02867.2000",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10751439/",
              "verified": "2026-11-06",
              "verificationNote": "Rat SCG neurons, primarily N-type current; PTX-sensitive, voltage-dependent baclofen inhibition. Not a sleep nucleus or direct vesicle-release assay.",
              "fullTitle": "Heteromeric assembly of GABA(B)R1 and GABA(B)R2 receptor subunits inhibits Ca(2+) current in sympathetic neurons.",
              "year": "2000",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "molecular",
          "canonicalId": "gabab/gb-ca-edge"
        },
        {
          "id": "gb-orexin-edge",
          "from": "gabab",
          "to": "gb-orexin",
          "relation": {
            "zh": "巴氯芬诱导超极化",
            "en": "Baclofen-induced hyperpolarization"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "巴氯芬使对照小鼠食欲素神经元超极化；食欲素细胞 Gabbr1 删除后多数细胞失去这一反应。",
            "en": "Baclofen hyperpolarized control mouse orexin neurons; most cells lost this response after orexin-cell Gabbr1 deletion."
          },
          "scope": {
            "zh": "小鼠脑片 · 细胞特异性删除 · 膜片钳",
            "en": "Mouse slices · Cell-specific deletion · Patch clamp"
          },
          "limitation": {
            "zh": "已核对 Fig. 2 的面板顺序更正；药理刺激不等同于自然 GABA 输入模式。",
            "en": "Figure 2 panel-order correction was checked; pharmacological stimulation is not a natural GABA input pattern."
          },
          "sources": [
            {
              "id": "matsuki2009",
              "title": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
              "label": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
              "pmid": "19246384",
              "doi": "10.1073/pnas.0811126106",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19246384/",
              "verified": "2026-11-06",
              "verificationNote": "Mouse orexin-cell Gabbr1 knockout; fragmentation without total-sleep change or cataplexy. Figure 2 panel-order correction checked: DOI 10.1073/pnas.0903224106, PMC2689025.",
              "fullTitle": "Selective loss of GABA(B) receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture.",
              "year": "2009",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "cross",
          "crossSystem": "orexin",
          "canonicalId": "gabab/gb-orexin-edge"
        },
        {
          "id": "gb-stability-edge",
          "from": "gb-orexin-ko",
          "to": "gb-stability",
          "relation": {
            "zh": "条件性敲除导致睡眠–觉醒碎片化",
            "en": "Conditional knockout fragments sleep and wake"
          },
          "sign": "context",
          "statement": {
            "zh": "食欲素神经元特异性 Gabbr1 条件性敲除导致睡眠和觉醒碎片化；24 小时累计觉醒、NREM 和 REM 时间与对照相近，未观察到猝倒样行为停顿。",
            "en": "Orexin-neuron-specific Gabbr1 deletion fragmented sleep and wake; accumulated 24-hour wake, NREM and REM times were comparable to controls, and no cataplexy-like behavioral arrests were observed."
          },
          "scope": {
            "zh": "小鼠 · 条件性删除 · EEG/EMG",
            "en": "Mouse · Conditional deletion · EEG/EMG"
          },
          "limitation": {
            "zh": "受体缺失伴随 GABA_A 受体介导抑制的代偿性变化；该结果不表明激活 GABA_B 受体必然增加睡眠。",
            "en": "Receptor deletion was accompanied by compensatory changes in GABA_A receptor-mediated inhibition; the result does not establish that GABA_B receptor activation necessarily increases sleep."
          },
          "sources": [
            {
              "id": "matsuki2009",
              "title": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
              "label": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
              "pmid": "19246384",
              "doi": "10.1073/pnas.0811126106",
              "url": "https://pubmed.ncbi.nlm.nih.gov/19246384/",
              "verified": "2026-11-06",
              "verificationNote": "Mouse orexin-cell Gabbr1 knockout; fragmentation without total-sleep change or cataplexy. Figure 2 panel-order correction checked: DOI 10.1073/pnas.0903224106, PMC2689025.",
              "fullTitle": "Selective loss of GABA(B) receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture.",
              "year": "2009",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "circuit",
          "canonicalId": "gabab/gb-stability-edge"
        },
        {
          "id": "gb-ghb-edge",
          "from": "gb-ghb",
          "to": "gabab",
          "relation": {
            "zh": "低效价部分激动作用",
            "en": "Low-potency partial agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "在共表达 GABA_B1/GABA_B2 和 Kir3 的卵母细胞中，GHB 的 EC₅₀ 约为 5 mM，最大刺激效应约为 L-巴氯芬的 69%，在该体系中表现为低效价部分激动剂。",
            "en": "In oocytes coexpressing GABA_B1/GABA_B2 and Kir3, GHB had an EC₅₀ of approximately 5 mM and a maximal response of 69% relative to L-baclofen, consistent with low-potency partial agonism in this assay."
          },
          "scope": {
            "zh": "重组受体 · 非洲爪蟾卵母细胞",
            "en": "Recombinant receptors · Xenopus oocytes"
          },
          "limitation": {
            "zh": "体外高浓度结果不单独解释羟丁酸钠的临床睡眠和猝倒疗效。",
            "en": "This high-concentration in vitro result does not alone explain sodium oxybate clinical sleep and cataplexy effects."
          },
          "sources": [
            {
              "id": "lingenhoehl1999",
              "title": "Lingenhoehl et al. · Neuropharmacology 1999 · Gamma-hydroxybutyrate is a weak agonist at recombinant GABAB receptors",
              "label": "Lingenhoehl et al. · Neuropharmacology 1999 · Gamma-hydroxybutyrate is a weak agonist at recombinant GABAB receptors",
              "pmid": "10587082",
              "doi": "10.1016/s0028-3908(99)00131-8",
              "url": "https://pubmed.ncbi.nlm.nih.gov/10587082/",
              "verified": "2026-11-06",
              "verificationNote": "GABABR1/R2 plus Kir3 in Xenopus oocytes; GHB EC50 approximately 5 mM and partial efficacy relative to baclofen.",
              "fullTitle": "Gamma-hydroxybutyrate is a weak agonist at recombinant GABA(B) receptors.",
              "year": "1999",
              "journal": "Neuropharmacology"
            }
          ],
          "layer": "drug",
          "canonicalId": "gabab/gb-ghb-edge"
        },
        {
          "id": "gb-ghb-hub",
          "from": "gb-ghb",
          "to": "camk2a",
          "relation": {
            "zh": "hub 结构域结合与热稳定性增加",
            "en": "Hub-domain binding and increased thermal stability"
          },
          "sign": "context",
          "statement": {
            "zh": "GHB 及其类似物与 CaMKIIα 的 hub 结构域结合，并提高分离 hub 结构域的热稳定性。",
            "en": "GHB and its analogs bound the CaMKIIα hub domain and increased the thermal stability of the isolated domain."
          },
          "scope": {
            "zh": "生化 / 结构 · 分离蛋白与脑组织结合",
            "en": "Biochemistry / structure · Isolated protein and brain-tissue binding"
          },
          "limitation": {
            "zh": "7REC 的配体是 5-HDC；研究未证明此结合介导发作性睡病疗效。",
            "en": "The 7REC ligand is 5-HDC; this interaction was not shown to mediate narcolepsy efficacy."
          },
          "sources": [
            {
              "id": "leurs2021",
              "title": "Leurs et al. · PNAS 2021 · GHB analogs confer neuroprotection through specific interaction with the CaMKIIα hub domain",
              "label": "Leurs et al. · PNAS 2021 · GHB analogs confer neuroprotection through specific interaction with the CaMKIIα hub domain",
              "pmid": "34330837",
              "doi": "10.1073/pnas.2108079118",
              "url": "https://pubmed.ncbi.nlm.nih.gov/34330837/",
              "verified": "2026-11-06",
              "verificationNote": "GHB/analog hub binding and thermal stability; structure with 5-HDC, not GHB. No narcolepsy efficacy mechanism demonstrated.",
              "fullTitle": "GHB analogs confer neuroprotection through specific interaction with the CaMKIIα hub domain.",
              "year": "2021",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "exploratory",
          "canonicalId": "gabab/gb-ghb-hub"
        }
      ],
      "lead": {
        "zh": "GABA_B 通过代谢型受体信号影响离子电流；orexin 细胞特异性干预揭示状态稳定性的条件性作用。",
        "en": "Metabotropic GABA_B signaling modulates ionic currents; orexin-cell-specific intervention reveals conditional roles in state stability."
      },
      "question": {
        "zh": "哪些 GABA_B 细胞群改变状态转换的稳定性，哪些改变总睡眠量？能否分别设置可检验的实验终点？",
        "en": "Which GABA_B populations change state-transition stability and which change total sleep time? Can the readouts be tested separately?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    },
    "dopamine-receptor-system": {
      "id": "dopamine-receptor-system",
      "title": {
        "zh": "多巴胺受体信号与行为情境",
        "en": "Dopamine receptor signaling and behavioral context"
      },
      "summary": {
        "zh": "D₁ 样与 D₂ 样受体的 cAMP 功能反应分别呈增加与抑制。受体–G 蛋白复合物结构作为独立的结构证据；细胞信号方向不能直接代表睡眠–觉醒效应。",
        "en": "D₁-like and D₂-like receptors show increasing and inhibitory cAMP responses, respectively. Receptor–G protein complex structures are separate structural evidence; the direction of cellular signaling does not directly specify a sleep–wake effect."
      },
      "nodes": [
        {
          "id": "dop-da",
          "title": {
            "zh": "多巴胺",
            "en": "Dopamine"
          },
          "kind": "signal",
          "systemLink": null
        },
        {
          "id": "dop-d1like",
          "title": {
            "zh": "D₁ 样受体（D₁R / D₅R）",
            "en": "D₁-like receptors (D₁R / D₅R)"
          },
          "kind": "target",
          "members": [
            "drd1",
            "drd5"
          ],
          "systemLink": null,
          "records": [
            "drd1",
            "drd5"
          ]
        },
        {
          "id": "dop-d2like",
          "title": {
            "zh": "D₂ 样受体（D₂R / D₃R / D₄R）",
            "en": "D₂-like receptors (D₂R / D₃R / D₄R)"
          },
          "kind": "target",
          "members": [
            "drd2",
            "drd3",
            "drd4"
          ],
          "systemLink": null,
          "records": [
            "drd2",
            "drd3",
            "drd4"
          ]
        },
        {
          "id": "dop-d2",
          "title": {
            "zh": "D₂R",
            "en": "D₂R"
          },
          "kind": "target",
          "record": "drd2",
          "systemLink": null
        },
        {
          "id": "dop-d2-ko",
          "title": {
            "zh": "全身 Drd2 敲除",
            "en": "Global Drd2 knockout"
          },
          "kind": "circuit",
          "intervention": true,
          "record": "drd2",
          "systemLink": null
        },
        {
          "id": "dop-gs",
          "title": {
            "zh": "D₁R/D₅R–Gₛ 复合物结构",
            "en": "D₁R/D₅R–Gₛ complex structures"
          },
          "kind": "structure",
          "systemLink": null
        },
        {
          "id": "dop-gi",
          "title": {
            "zh": "D₂R/D₃R/D₄R–Gᵢ 复合物结构",
            "en": "D₂R/D₃R/D₄R–Gᵢ complex structures"
          },
          "kind": "structure",
          "systemLink": null
        },
        {
          "id": "dop-camp",
          "title": {
            "zh": "胞内 cAMP 水平",
            "en": "Intracellular cAMP level"
          },
          "kind": "effector",
          "systemLink": null
        },
        {
          "id": "dop-wake",
          "title": {
            "zh": "觉醒维持",
            "en": "Wake maintenance"
          },
          "kind": "wake",
          "systemLink": null
        },
        {
          "id": "dop-vta",
          "title": {
            "zh": "VTA → NAc 投射",
            "en": "VTA → NAc projection"
          },
          "kind": "circuit",
          "systemLink": null
        },
        {
          "id": "a2a",
          "title": {
            "zh": "A₂AR 激动剂刺激",
            "en": "A₂AR agonist stimulation"
          },
          "kind": "target",
          "crossSystem": "adenosine",
          "intervention": true,
          "record": "a2a",
          "systemLink": "adenosine"
        },
        {
          "id": "prami",
          "title": {
            "zh": "普拉克索",
            "en": "Pramipexole"
          },
          "kind": "drug",
          "record": "prami",
          "systemLink": null
        },
        {
          "id": "dop-rls",
          "title": {
            "zh": "不宁腿综合征（RLS）症状改善",
            "en": "Restless legs syndrome (RLS) symptom improvement"
          },
          "kind": "clinical",
          "systemLink": null
        }
      ],
      "edges": [
        {
          "id": "dop-da-d1",
          "from": "dop-da",
          "to": "dop-d1like",
          "relation": {
            "zh": "激动",
            "en": "Agonism"
          },
          "sign": "activation",
          "statement": {
            "zh": "人 D₁R 与 D₅R 的细胞 cAMP 实验验证多巴胺的激动作用。",
            "en": "Cellular cAMP assays demonstrated dopamine agonism at human D₁R and D₅R."
          },
          "scope": {
            "zh": "人受体 · HEK293T · GloSensor",
            "en": "Human receptors · HEK293T · GloSensor"
          },
          "limitation": {
            "zh": "亚型效力与细胞背景有关；不是人体睡眠效果比较。",
            "en": "Subtype potency depends on assay context; this is not a comparison of human sleep effects."
          },
          "sources": [
            {
              "id": "xu2023",
              "title": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "label": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "pmid": "37221270",
              "doi": "10.1038/s41422-023-00808-0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/37221270/",
              "verified": "2026-11-06",
              "verificationNote": "Journal is Cell Research, not Cell. D1/D5–Gs and D2/D3/D4–Gi structures; human-receptor HEK293T GloSensor cAMP assays.",
              "fullTitle": "Structural genomics of the human dopamine receptor system.",
              "year": "2023",
              "journal": "Cell research"
            }
          ],
          "layer": "molecular",
          "canonicalId": "dopamine-receptor-system/dop-da-d1"
        },
        {
          "id": "dop-d1-gs",
          "from": "dop-d1like",
          "to": "dop-gs",
          "relation": {
            "zh": "冷冻电镜结构证据",
            "en": "Cryo-EM structural evidence"
          },
          "sign": "context",
          "statement": {
            "zh": "冷冻电镜解析了罗替戈汀结合的 D₁R–Gₛ 和 D₅R–Gₛ 复合物结构。",
            "en": "Cryo-EM resolved rotigotine-bound D₁R–Gₛ and D₅R–Gₛ complex structures."
          },
          "scope": {
            "zh": "人受体 · 罗替戈汀结合的重组受体–G 蛋白复合物 · 冷冻电镜",
            "en": "Human receptors · Rotigotine-bound recombinant receptor–G protein complexes · Cryo-EM"
          },
          "limitation": {
            "zh": "结构采用用于结构解析的重组复合物；不能单凭结构量化耦联效率，也不能证明所有细胞中均具有排他性 Gₛ 耦联。",
            "en": "The structures used recombinant complexes prepared for structure determination; they do not quantify coupling efficiency or establish exclusive Gₛ coupling in all cells."
          },
          "sources": [
            {
              "id": "xu2023",
              "title": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "label": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "pmid": "37221270",
              "doi": "10.1038/s41422-023-00808-0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/37221270/",
              "verified": "2026-11-06",
              "verificationNote": "Journal is Cell Research, not Cell. D1/D5–Gs and D2/D3/D4–Gi structures; human-receptor HEK293T GloSensor cAMP assays.",
              "fullTitle": "Structural genomics of the human dopamine receptor system.",
              "year": "2023",
              "journal": "Cell research"
            }
          ],
          "layer": "structural",
          "canonicalId": "dopamine-receptor-system/dop-d1-gs"
        },
        {
          "id": "dop-d1-camp",
          "from": "dop-d1like",
          "to": "dop-camp",
          "relation": {
            "zh": "促进 cAMP 积累",
            "en": "Stimulation of cAMP accumulation"
          },
          "sign": "activation",
          "statement": {
            "zh": "人 D₁R/D₅R 的 GloSensor 实验检测到激动剂诱导的 cAMP 增加。",
            "en": "GloSensor assays detected agonist-induced cAMP increases through human D₁R/D₅R."
          },
          "scope": {
            "zh": "人受体 · HEK293T 功能实验",
            "en": "Human receptors · HEK293T functional assays"
          },
          "limitation": {
            "zh": "该第二信使测定结果不等同于某个神经元放电或觉醒增加。",
            "en": "A second-messenger readout is not equivalent to neuronal firing or increased wakefulness."
          },
          "sources": [
            {
              "id": "xu2023",
              "title": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "label": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "pmid": "37221270",
              "doi": "10.1038/s41422-023-00808-0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/37221270/",
              "verified": "2026-11-06",
              "verificationNote": "Journal is Cell Research, not Cell. D1/D5–Gs and D2/D3/D4–Gi structures; human-receptor HEK293T GloSensor cAMP assays.",
              "fullTitle": "Structural genomics of the human dopamine receptor system.",
              "year": "2023",
              "journal": "Cell research"
            }
          ],
          "layer": "molecular",
          "canonicalId": "dopamine-receptor-system/dop-d1-camp"
        },
        {
          "id": "dop-d2-gi",
          "from": "dop-d2like",
          "to": "dop-gi",
          "relation": {
            "zh": "冷冻电镜结构证据",
            "en": "Cryo-EM structural evidence"
          },
          "sign": "context",
          "statement": {
            "zh": "冷冻电镜解析了罗替戈汀结合的 D₂R–Gᵢ、D₃R–Gᵢ 和 D₄R–Gᵢ 复合物结构。",
            "en": "Cryo-EM resolved rotigotine-bound D₂R–Gᵢ, D₃R–Gᵢ and D₄R–Gᵢ complex structures."
          },
          "scope": {
            "zh": "人受体 · 罗替戈汀结合的重组受体–G 蛋白复合物 · 冷冻电镜",
            "en": "Human receptors · Rotigotine-bound recombinant receptor–G protein complexes · Cryo-EM"
          },
          "limitation": {
            "zh": "D₂R/D₃R 使用显性负性 G_i；D₄R 使用含 G_i αN/α5 与显性负性 G_s Ras 结构域的嵌合 Gα。结构不直接量化天然 G 蛋白耦联效率或下游功能。",
            "en": "D₂R/D₃R used dominant-negative G_i; D₄R used a chimeric Gα combining G_i αN/α5 with a dominant-negative G_s Ras domain. Structures do not directly quantify native G protein coupling efficiency or downstream function."
          },
          "sources": [
            {
              "id": "xu2023",
              "title": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "label": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "pmid": "37221270",
              "doi": "10.1038/s41422-023-00808-0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/37221270/",
              "verified": "2026-11-06",
              "verificationNote": "Journal is Cell Research, not Cell. D1/D5–Gs and D2/D3/D4–Gi structures; human-receptor HEK293T GloSensor cAMP assays.",
              "fullTitle": "Structural genomics of the human dopamine receptor system.",
              "year": "2023",
              "journal": "Cell research"
            }
          ],
          "layer": "structural",
          "canonicalId": "dopamine-receptor-system/dop-d2-gi"
        },
        {
          "id": "dop-d2-camp",
          "from": "dop-d2like",
          "to": "dop-camp",
          "relation": {
            "zh": "降低预刺激后的 cAMP 水平",
            "en": "Reduction of prestimulated cAMP levels"
          },
          "sign": "inhibition",
          "statement": {
            "zh": "D₂R/D₃R/D₄R 的功能实验测量激动剂对异丙肾上腺素预刺激所致 cAMP 升高的抑制作用。",
            "en": "Functional assays for D₂R/D₃R/D₄R measured agonist-mediated inhibition of the cAMP increase induced by isoproterenol prestimulation."
          },
          "scope": {
            "zh": "人受体 · HEK293T · 100 nM 异丙肾上腺素预刺激",
            "en": "Human receptors · HEK293T · 100 nM isoproterenol prestimulation"
          },
          "limitation": {
            "zh": "这是细胞信号方向，不能据此把 D₂ 样受体标为促睡眠。",
            "en": "This is a cellular signaling direction, not grounds to label D₂-like receptors sleep-promoting."
          },
          "sources": [
            {
              "id": "xu2023",
              "title": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "label": "Xu et al. · Cell Research 2023 · Structural genomics of the human dopamine receptor system",
              "pmid": "37221270",
              "doi": "10.1038/s41422-023-00808-0",
              "url": "https://pubmed.ncbi.nlm.nih.gov/37221270/",
              "verified": "2026-11-06",
              "verificationNote": "Journal is Cell Research, not Cell. D1/D5–Gs and D2/D3/D4–Gi structures; human-receptor HEK293T GloSensor cAMP assays.",
              "fullTitle": "Structural genomics of the human dopamine receptor system.",
              "year": "2023",
              "journal": "Cell research"
            }
          ],
          "layer": "molecular",
          "canonicalId": "dopamine-receptor-system/dop-d2-camp"
        },
        {
          "id": "dop-d2-wake",
          "from": "dop-d2-ko",
          "to": "dop-wake",
          "relation": {
            "zh": "觉醒减少并碎片化",
            "en": "Reduced and fragmented wake"
          },
          "sign": "context",
          "statement": {
            "zh": "D₂R 敲除小鼠的觉醒减少且更碎片化；该证据特指 D₂R。",
            "en": "D₂R-knockout mice showed reduced and fragmented wakefulness; this evidence specifically concerns D₂R."
          },
          "scope": {
            "zh": "小鼠 · 全身 Drd2 删除 · EEG/EMG",
            "en": "Mouse · Global Drd2 deletion · EEG/EMG"
          },
          "limitation": {
            "zh": "不外推到 D₃R/D₄R，也不排除发育代偿。",
            "en": "Do not extend this finding to D₃R/D₄R; developmental compensation remains possible."
          },
          "sources": [
            {
              "id": "qu2010",
              "title": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
              "label": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
              "pmid": "20335474",
              "doi": "10.1523/jneurosci.4936-09.2010",
              "url": "https://pubmed.ncbi.nlm.nih.gov/20335474/",
              "verified": "2026-11-06",
              "verificationNote": "Global D2 knockout and drug manipulations; baseline fragmentation and attenuated DAT-inhibitor arousal.",
              "fullTitle": "Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice.",
              "year": "2010",
              "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "dopamine-receptor-system/dop-d2-wake"
        },
        {
          "id": "dop-vta-wake",
          "from": "dop-vta",
          "to": "dop-wake",
          "relation": {
            "zh": "促进 NREM–觉醒转换；重复刺激增加觉醒",
            "en": "Promotes NREM-to-wake transitions; repeated stimulation increases wake"
          },
          "sign": "activation",
          "statement": {
            "zh": "急性光刺激小鼠 VTA Th⁺ 神经元在 NAc 的投射可缩短 NREM–觉醒潜伏期；光期前 6 小时内重复刺激可增加觉醒时间。",
            "en": "Acute photostimulation of mouse VTA Th⁺ projections in NAc shortened NREM-to-wake latency; repeated stimulation during the first 6 hours of the light phase increased wake time."
          },
          "scope": {
            "zh": "小鼠 · NAc 投射末梢刺激 · 急性 25 Hz、5 s；重复 25 Hz、2 s/min",
            "en": "Mouse · NAc projection-terminal stimulation · Acute 25 Hz for 5 s; repeated 25 Hz for 2 s/min"
          },
          "limitation": {
            "zh": "急性 NAc 投射刺激未缩短 REM 睡眠时长；该投射实验未唯一指定某个多巴胺受体亚型，也未证明该投射对所有觉醒均必要。",
            "en": "Acute NAc projection stimulation did not shorten REM duration; the projection experiment neither identifies a unique dopamine receptor subtype nor establishes necessity for all wakefulness."
          },
          "sources": [
            {
              "id": "eban2016",
              "title": "Eban-Rothschild et al. · Nature Neuroscience 2016 · VTA dopaminergic neurons regulate ethologically relevant sleep–wake behaviors",
              "label": "Eban-Rothschild et al. · Nature Neuroscience 2016 · VTA dopaminergic neurons regulate ethologically relevant sleep–wake behaviors",
              "pmid": "27595385",
              "doi": "10.1038/nn.4377",
              "url": "https://pubmed.ncbi.nlm.nih.gov/27595385/",
              "verified": "2026-11-06",
              "verificationNote": "Mouse Th+ VTA optogenetics; VTA–NAc projection stimulation initiates and maintains wakefulness; receptor subtype not uniquely identified.",
              "fullTitle": "VTA dopaminergic neurons regulate ethologically relevant sleep-wake behaviors.",
              "year": "2016",
              "journal": "Nature neuroscience"
            }
          ],
          "layer": "circuit",
          "canonicalId": "dopamine-receptor-system/dop-vta-wake"
        },
        {
          "id": "dop-a2a-d2",
          "from": "a2a",
          "to": "dop-d2",
          "relation": {
            "zh": "降低 D₂ 受体激动剂结合亲和力",
            "en": "Reduced agonist-binding affinity at D₂ receptors"
          },
          "sign": "context",
          "statement": {
            "zh": "在大鼠纹状体膜制备物中，A₂A 受体激动剂降低激动剂对 D₂ 受体的结合亲和力。",
            "en": "In rat striatal membrane preparations, an A₂A receptor agonist reduced agonist-binding affinity at D₂ receptors."
          },
          "scope": {
            "zh": "大鼠 · 纹状体膜 · 放射配体结合",
            "en": "Rat · Striatal membranes · Radioligand binding"
          },
          "limitation": {
            "zh": "该边特指 D₂，未测量睡眠，也不能单独证明物理异聚体结构。",
            "en": "This edge concerns D₂ specifically; sleep was not measured and a physical heteromer was not established by this assay alone."
          },
          "sources": [
            {
              "id": "ferre1991",
              "title": "Ferré et al. · PNAS 1991 · Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes",
              "label": "Ferré et al. · PNAS 1991 · Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes",
              "pmid": "1678519",
              "doi": "10.1073/pnas.88.16.7238",
              "url": "https://pubmed.ncbi.nlm.nih.gov/1678519/",
              "verified": "2026-11-06",
              "verificationNote": "Rat striatal membrane radioligand binding; no direct sleep measurement and does not alone prove a physical heteromer.",
              "fullTitle": "Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes.",
              "year": "1991",
              "journal": "Proceedings of the National Academy of Sciences of the United States of America"
            }
          ],
          "layer": "cross",
          "crossSystem": "adenosine",
          "canonicalId": "dopamine-receptor-system/dop-a2a-d2"
        },
        {
          "id": "dop-prami-rls",
          "from": "prami",
          "to": "dop-rls",
          "relation": {
            "zh": "RLS 临床症状改善",
            "en": "Clinical improvement in RLS symptoms"
          },
          "sign": "context",
          "statement": {
            "zh": "12 周随机试验中，普拉克索改善中重度 RLS 的 IRLS 与 CGI-I 指标。",
            "en": "In a 12-week randomized trial, pramipexole improved IRLS and CGI-I outcomes in moderate-to-severe RLS."
          },
          "scope": {
            "zh": "人体 · 344 人 · 双盲安慰剂对照",
            "en": "Human · 344 participants · Double-blind placebo-controlled trial"
          },
          "limitation": {
            "zh": "症状改善不定位特定受体或核团，也不等同于通用催眠机制。",
            "en": "Symptom improvement does not identify a particular receptor or nucleus and is not a general hypnotic mechanism."
          },
          "sources": [
            {
              "id": "winkelman2006",
              "title": "Winkelman et al. · Neurology 2006 · Efficacy and safety of pramipexole in restless legs syndrome",
              "label": "Winkelman et al. · Neurology 2006 · Efficacy and safety of pramipexole in restless legs syndrome",
              "pmid": "16931507",
              "doi": "10.1212/01.wnl.0000231513.23919.a1",
              "url": "https://pubmed.ncbi.nlm.nih.gov/16931507/",
              "verified": "2026-11-06",
              "verificationNote": "344 participants, 12-week RCT, RLS symptom endpoints; not proof of specific receptor/circuit mechanism.",
              "fullTitle": "Efficacy and safety of pramipexole in restless legs syndrome.",
              "year": "2006",
              "journal": "Neurology"
            }
          ],
          "layer": "clinical",
          "canonicalId": "dopamine-receptor-system/dop-prami-rls"
        }
      ],
      "lead": {
        "zh": "区分 D₁ 样与 D₂ 样受体的细胞信号、D₂ 特异性实验以及不宁腿综合征的临床终点。",
        "en": "Distinguish D₁-like and D₂-like signaling, D₂-specific experiments and clinical outcomes in restless legs syndrome."
      },
      "question": {
        "zh": "如何区分受体亚型选择性、觉醒维持与 RLS 症状改善，避免用一个终点替代另一个？",
        "en": "How can subtype selectivity, wake maintenance and RLS symptom relief be distinguished without substituting one endpoint for another?"
      },
      "scope": {
        "zh": "图中每条连线均有原始来源。相连的不同研究不自动构成已在同一物种、细胞或实验中验证的完整因果链。",
        "en": "Every edge has a primary source. Connecting separate studies does not establish a complete causal chain in one species, cell or experiment."
      }
    }
  },
  "crossConnections": [
    {
      "id": "monoamines--orexin",
      "from": "monoamines",
      "to": "orexin",
      "evidence": [
        {
          "system": "orexin",
          "edge": "orx-lc-depol"
        },
        {
          "system": "orexin",
          "edge": "orx-lc-context"
        },
        {
          "system": "monoamines",
          "edge": "mono-orexin-lc"
        }
      ],
      "sources": [
        {
          "title": "Ivanov & Aston-Jones · NeuroReport 2000",
          "url": "https://pubmed.ncbi.nlm.nih.gov/10852238/",
          "pmid": "10852238",
          "doi": "10.1097/00001756-200006050-00031",
          "label": "Ivanov & Aston-Jones · NeuroReport 2000",
          "verified": "2026-11-06",
          "fullTitle": "Hypocretin/orexin depolarizes and decreases potassium conductance in locus coeruleus neurons.",
          "year": "2000",
          "journal": "Neuroreport"
        },
        {
          "title": "Soffin et al. · Neuropharmacology 2002",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11750922/",
          "pmid": "11750922",
          "doi": "10.1016/s0028-3908(01)00156-3",
          "label": "Soffin et al. · Neuropharmacology 2002",
          "verified": "2026-11-06",
          "fullTitle": "SB-334867-A antagonises orexin mediated excitation in the locus coeruleus.",
          "year": "2002",
          "journal": "Neuropharmacology"
        },
        {
          "id": "carter2012",
          "title": "Carter et al. · PNAS 2012 · Mechanism for Hypocretin-mediated sleep-to-wake transitions",
          "label": "Carter et al. · PNAS 2012 · Mechanism for Hypocretin-mediated sleep-to-wake transitions",
          "pmid": "22955882",
          "doi": "10.1073/pnas.1202526109",
          "url": "https://pubmed.ncbi.nlm.nih.gov/22955882/",
          "verified": "2026-11-06",
          "verificationNote": "Mouse LC inhibition and local SB-334867 blocked Hcrt stimulation-induced NREM-wake transitions.",
          "fullTitle": "Mechanism for Hypocretin-mediated sleep-to-wake transitions.",
          "year": "2012",
          "journal": "Proceedings of the National Academy of Sciences of the United States of America"
        }
      ]
    },
    {
      "id": "histamine--orexin",
      "from": "histamine",
      "to": "orexin",
      "evidence": [
        {
          "system": "orexin",
          "edge": "orx-tmn"
        },
        {
          "system": "histamine",
          "edge": "ox2-tmn-hist"
        }
      ],
      "sources": [
        {
          "id": "yamanaka2002",
          "title": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
          "year": "2002",
          "pmid": "11811995",
          "doi": "10.1006/bbrc.2001.6318",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11811995/",
          "kind": "primary research",
          "verified": "2026-11-06",
          "label": "Yamanaka et al. · Orexins activate histaminergic neurons via the orexin 2 receptor",
          "fullTitle": "Orexins activate histaminergic neurons via the orexin 2 receptor.",
          "journal": "Biochemical and biophysical research communications"
        },
        {
          "id": "carter2009",
          "title": "Carter et al. · Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions",
          "year": "2009",
          "pmid": "19726652",
          "doi": "10.1523/jneurosci.1205-09.2009",
          "url": "https://pubmed.ncbi.nlm.nih.gov/19726652/",
          "kind": "primary research",
          "verified": "2026-11-06",
          "label": "Carter et al. · Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions",
          "fullTitle": "Sleep homeostasis modulates hypocretin-mediated sleep-to-wake transitions.",
          "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
        }
      ]
    },
    {
      "id": "adenosine--gaba",
      "from": "adenosine",
      "to": "gaba",
      "evidence": [
        {
          "system": "adenosine",
          "edge": "ad-vlpo"
        },
        {
          "system": "adenosine",
          "edge": "ad-marker"
        },
        {
          "system": "adenosine",
          "edge": "ad-terminal-sleep"
        }
      ],
      "sources": [
        {
          "id": "gallopin2005",
          "title": "Gallopin et al. · The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus",
          "pmid": "16039802",
          "doi": "10.1016/j.neuroscience.2005.05.045",
          "year": "2005",
          "url": "https://pubmed.ncbi.nlm.nih.gov/16039802/",
          "verifiedFinding": "Rat VLPO slices: only Type-2 putative sleep neurons are excited postsynaptically by adenosine via A2AR; both Type-1 and Type-2 cells contain galanin and GAD65/67 mRNA.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Gallopin et al. · The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus",
          "fullTitle": "The endogenous somnogen adenosine excites a subset of sleep-promoting neurons via A2A receptors in the ventrolateral preoptic nucleus.",
          "journal": "Neuroscience"
        },
        {
          "id": "oishi2017",
          "title": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
          "pmid": "28963505",
          "doi": "10.1038/s41467-017-00781-4",
          "year": "2017",
          "url": "https://pubmed.ncbi.nlm.nih.gov/28963505/",
          "verifiedFinding": "Adora2a-Cre mouse NAc core neuron and VP terminal activation induces SWS; VP IPSCs are picrotoxin sensitive. This manipulates Adora2a-expressing cells rather than directly activating their A2AR.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Oishi et al. · Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice",
          "fullTitle": "Slow-wave sleep is controlled by a subset of nucleus accumbens core neurons in mice.",
          "journal": "Nature communications"
        }
      ]
    },
    {
      "id": "gaba--orexin",
      "from": "gaba",
      "to": "orexin",
      "evidence": [
        {
          "system": "gaba",
          "edge": "ga-poa-orexin"
        }
      ],
      "sources": [
        {
          "id": "saito2013",
          "title": "Saito et al. · GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons",
          "pmid": "24348342",
          "doi": "10.3389/fncir.2013.00192",
          "year": "2013",
          "url": "https://pubmed.ncbi.nlm.nih.gov/24348342/",
          "verifiedFinding": "Mouse POA GABA terminal photostimulation evokes fast IPSCs and suppresses orexin neuron firing; bicuculline abolishes inhibition. Does not identify alpha1beta2gamma2 composition in those synapses.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Saito et al. · GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons",
          "fullTitle": "GABAergic neurons in the preoptic area send direct inhibitory projections to orexin neurons.",
          "journal": "Frontiers in neural circuits"
        }
      ]
    },
    {
      "id": "gaba--histamine",
      "from": "gaba",
      "to": "histamine",
      "evidence": [
        {
          "system": "gaba",
          "edge": "ga-poa-tmn"
        },
        {
          "system": "gaba",
          "edge": "ga-histamine-local"
        }
      ],
      "sources": [
        {
          "id": "chung2017",
          "title": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
          "pmid": "28514446",
          "doi": "10.1038/nature22350",
          "year": "2017",
          "url": "https://pubmed.ncbi.nlm.nih.gov/28514446/",
          "verifiedFinding": "Projection-defined POA GABA neurons projecting to TMN promote NREM/REM; silencing suppresses sleep. Nonselective POA GABA stimulation promotes wake; soma stimulation engages collateral projections.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Chung et al. · Identification of preoptic sleep neurons using retrograde labelling and gene profiling",
          "fullTitle": "Identification of preoptic sleep neurons using retrograde labelling and gene profiling.",
          "journal": "Nature"
        },
        {
          "id": "liu2010",
          "title": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
          "pmid": "20724362",
          "doi": "10.1113/jphysiol.2010.193904",
          "year": "2010",
          "url": "https://pubmed.ncbi.nlm.nih.gov/20724362/",
          "verifiedFinding": "Rat slices: histamine directly excites NA-excited VLPO cells via H1/H2 and indirectly inhibits NA-inhibited cells through increased GABAA-mediated IPSCs, blocked by gabazine or TTX.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Liu et al. · Histamine regulates activities of neurons in the ventrolateral preoptic nucleus",
          "fullTitle": "Histamine regulates activities of neurons in the ventrolateral preoptic nucleus.",
          "journal": "The Journal of physiology"
        }
      ]
    },
    {
      "id": "gaba--monoamines",
      "from": "gaba",
      "to": "monoamines",
      "evidence": [
        {
          "system": "gaba",
          "edge": "ga-monoamine-feedback"
        }
      ],
      "sources": [
        {
          "id": "saito2018",
          "title": "Saito et al. · Monoamines inhibit GABAergic neurons in ventrolateral preoptic area that make direct synaptic connections to hypothalamic arousal neurons",
          "pmid": "29915137",
          "doi": "10.1523/jneurosci.2835-17.2018",
          "year": "2018",
          "url": "https://pubmed.ncbi.nlm.nih.gov/29915137/",
          "verifiedFinding": "Mouse monosynaptic tracing identifies VLPO GABA inputs to orexin/HDC cells; noradrenaline and serotonin inhibit identified presynaptic VLPO GABA cells in slices. This does not itself measure in vivo sleep effect of that monoamine intervention.",
          "verified": "2026-11-06",
          "type": "primary research",
          "label": "Saito et al. · Monoamines inhibit GABAergic neurons in ventrolateral preoptic area that make direct synaptic connections to hypothalamic arousal neurons",
          "fullTitle": "Monoamines Inhibit GABAergic Neurons in Ventrolateral Preoptic Area That Make Direct Synaptic Connections to Hypothalamic Arousal Neurons.",
          "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
        }
      ]
    },
    {
      "id": "melatonin--orexin",
      "from": "melatonin",
      "to": "orexin",
      "evidence": [
        {
          "system": "melatonin",
          "edge": "dmh-orexin"
        }
      ],
      "sources": [
        {
          "id": "chou2003",
          "title": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
          "year": "2003",
          "pmid": "14627654",
          "doi": "10.1523/jneurosci.23-33-10691.2003",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6740926/",
          "kind": "primary research",
          "verified": "2026-11-06",
          "label": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
          "fullTitle": "Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms.",
          "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
        }
      ]
    },
    {
      "id": "gaba--melatonin",
      "from": "gaba",
      "to": "melatonin",
      "evidence": [
        {
          "system": "melatonin",
          "edge": "dmh-vlpo"
        }
      ],
      "sources": [
        {
          "id": "chou2003",
          "title": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
          "year": "2003",
          "pmid": "14627654",
          "doi": "10.1523/jneurosci.23-33-10691.2003",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6740926/",
          "kind": "primary research",
          "verified": "2026-11-06",
          "label": "Chou et al. · Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms",
          "fullTitle": "Critical role of dorsomedial hypothalamic nucleus in a wide range of behavioral circadian rhythms.",
          "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
        }
      ]
    },
    {
      "id": "dopamine-receptor-system--monoamines",
      "from": "dopamine-receptor-system",
      "to": "monoamines",
      "evidence": [
        {
          "system": "monoamines",
          "edge": "mono-dat-d2"
        }
      ],
      "sources": [
        {
          "id": "qu2010",
          "title": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
          "label": "Qu et al. · Journal of Neuroscience 2010 · Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice",
          "pmid": "20335474",
          "doi": "10.1523/jneurosci.4936-09.2010",
          "url": "https://pubmed.ncbi.nlm.nih.gov/20335474/",
          "verified": "2026-11-06",
          "verificationNote": "Global D2 knockout and drug manipulations; baseline fragmentation and attenuated DAT-inhibitor arousal.",
          "fullTitle": "Essential role of dopamine D2 receptor in the maintenance of wakefulness, but not in homeostatic regulation of sleep, in mice.",
          "year": "2010",
          "journal": "The Journal of neuroscience : the official journal of the Society for Neuroscience"
        }
      ]
    },
    {
      "id": "gabab--orexin",
      "from": "gabab",
      "to": "orexin",
      "evidence": [
        {
          "system": "gabab",
          "edge": "gb-orexin-edge"
        },
        {
          "system": "gabab",
          "edge": "gb-stability-edge"
        }
      ],
      "sources": [
        {
          "id": "matsuki2009",
          "title": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
          "label": "Matsuki et al. · PNAS 2009 · Selective loss of GABAB receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture",
          "pmid": "19246384",
          "doi": "10.1073/pnas.0811126106",
          "url": "https://pubmed.ncbi.nlm.nih.gov/19246384/",
          "verified": "2026-11-06",
          "verificationNote": "Mouse orexin-cell Gabbr1 knockout; fragmentation without total-sleep change or cataplexy. Figure 2 panel-order correction checked: DOI 10.1073/pnas.0903224106, PMC2689025.",
          "fullTitle": "Selective loss of GABA(B) receptors in orexin-producing neurons results in disrupted sleep/wakefulness architecture.",
          "year": "2009",
          "journal": "Proceedings of the National Academy of Sciences of the United States of America"
        }
      ]
    },
    {
      "id": "adenosine--dopamine-receptor-system",
      "from": "adenosine",
      "to": "dopamine-receptor-system",
      "evidence": [
        {
          "system": "dopamine-receptor-system",
          "edge": "dop-a2a-d2"
        }
      ],
      "sources": [
        {
          "id": "ferre1991",
          "title": "Ferré et al. · PNAS 1991 · Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes",
          "label": "Ferré et al. · PNAS 1991 · Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes",
          "pmid": "1678519",
          "doi": "10.1073/pnas.88.16.7238",
          "url": "https://pubmed.ncbi.nlm.nih.gov/1678519/",
          "verified": "2026-11-06",
          "verificationNote": "Rat striatal membrane radioligand binding; no direct sleep measurement and does not alone prove a physical heteromer.",
          "fullTitle": "Stimulation of high-affinity adenosine A2 receptors decreases the affinity of dopamine D2 receptors in rat striatal membranes.",
          "year": "1991",
          "journal": "Proceedings of the National Academy of Sciences of the United States of America"
        }
      ]
    },
    {
      "id": "adenosine--orexin",
      "from": "adenosine",
      "to": "orexin",
      "evidence": [
        {
          "system": "adenosine",
          "edge": "ad-a1-orexin-inhibition"
        }
      ],
      "sources": [
        {
          "id": "liu2007",
          "title": "Liu and Gao · Adenosine inhibits activity of hypocretin/orexin neurons by the A1 receptor in the lateral hypothalamus: a possible sleep-promoting effect",
          "pmid": "17093123",
          "url": "https://pubmed.ncbi.nlm.nih.gov/17093123/",
          "verified": "2026-11-06",
          "type": "primary research",
          "doi": "10.1152/jn.00873.2006"
        }
      ]
    }
  ],
  "methodology": {
    "skill": "scientific-critical-thinking",
    "reference": {
      "title": "Kassis et al. · Scientific Agent Skills: A Library of Procedural Knowledge for Research Agents",
      "year": 2026,
      "doi": "10.48550/arXiv.2609.00065",
      "url": "https://arxiv.org/abs/2609.00065"
    },
    "note": {
      "zh": "方法工作流参考；不作为生物学关系的证据。",
      "en": "Methodological workflow reference; not evidence for biological relationships."
    }
  }
};
