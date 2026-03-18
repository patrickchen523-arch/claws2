# Game Analyse Skills

游戏机制分析工具集。输入一个游戏名，完成从机制扫描到创新评价到因果推理的全流程分析。

## 快速开始

把本目录下所有文件复制到 `~/.codemaker/skills/`，然后对 AI 说：

```
分析 Hades
```

自动执行全流程：扫描 57 个子模块 → 评价创新层次 → 推理机制协同关系。

## 文件结构

```
game-analyse-skills/
├── game-analyse.md                          # 全流程编排（默认入口）
├── mechanism-analyse.md                     # 机制扫描 + 单机制深析
│   └── mechanism-analyse/references/
│       ├── universal-checklist.md           # 57 子模块清单（8+1 系统）
│       └── genre-patches.md                 # 品类修正补丁（6 品类）
├── mechanism-evaluate.md                    # 创新评价
│   └── mechanism-evaluate/references/
│       └── genre-archetype-dictionary.md    # 品类原型词典（15+ 原型）
├── mechanism-reason.md                      # 机制推理（因果 + 协同）
└── genre-archetype-dictionary.md            # 品类原型词典（根目录备份）
```

## 工作流

```
game-analyse（编排层，默认入口）
  │
  ├─ Phase 1: mechanism-analyse 模式一   → 机制扫描报告
  │            57 子模块逐项扫描，填写做法概述和吸收判断
  │
  ├─ Phase 2: mechanism-evaluate          → 创新评价卡片
  │            识别品类原型，三层拆解，创新定性（四选一）
  │
  ├─ Phase 3: mechanism-reason            → 机制推理报告
  │            层次1: 单机制 5 步推理链
  │            层次2: 体验支柱 + 4 种协同关系 + 承重墙识别
  │
  └─ Phase 4: mechanism-analyse 模式二    → 单机制深析（可选）
               用户指定某个机制后触发深挖
```

## 各 Skill 说明

### game-analyse.md（176 行）

全流程编排 skill。串联下面三个子 skill，分步执行、分步交付。

**触发词**：`分析 [游戏]`、`拆解 [游戏]`、`看看 [游戏]`、`[游戏] 怎么样`

**产出**：三份独立报告（扫描 + 评价 + 推理）

### mechanism-analyse.md（409 行）

机制扫描与深析。8+1 系统 × 57 子模块的穷举式检查。

**触发词**：`只扫描 [游戏] 的机制`、`深析 [游戏] 的 [机制]`

**两种模式**：
- 模式一：全量扫描（57 子模块表格 + 综合叙述）
- 模式二：单机制深析（6 步推理链，支持从扫描报告取数据）

**依赖**：
- `references/universal-checklist.md` — 57 子模块定义和检查问题
- `references/genre-patches.md` — 6 个品类的 ADD/SKIP/REFINE 修正

### mechanism-evaluate.md（295 行）

创新评价。基于扫描报告判断游戏的创新层次。

**触发词**：`评价这份扫描报告`、`单独评价 [游戏] 的创新`

**核心框架**：
- 三层拆解：原型层 / 创新层 / 包装层
- 创新定性（四选一）：换皮无创新 / 原型+结构创新 / 品类突破 / 伪创新
- 结构创新 3 条硬性门槛（可感知 / 结构性 / 区分度）
- 品类标配排除

**依赖**：
- `references/genre-archetype-dictionary.md` — 15+ 品类原型定义

### mechanism-reason.md（229 行）

机制推理。解释"为什么这么设计"和"拿掉一个会怎样"。

**触发词**：`单独推理 [游戏] 的机制逻辑`、`只做机制推理`

**两个层次**：
- 层次1：单机制 5 步推理链（设计意图 / 作用机制 / 核心循环影响 / 服务体验 / 代价取舍）
- 层次2：机制协同推理（体验支柱 + 4 种协同关系类型 + 承重墙 vs 装饰识别）

**4 种协同关系类型**：乘法关系 / 保险丝关系 / 弥补关系 / 链式关系

## 品类原型词典

`genre-archetype-dictionary.md` 包含 15+ 品类原型：

| 大类 | 原型 |
|------|------|
| SLG | COK-like、率土-like、4X-like |
| RPG/卡牌 | 卡牌RPG-like、回合制RPG-like、ARPG-like |
| MMO | 传统MMO-like、轻量MMO-like |
| 放置 | 经典放置-like、放置+X混合型 |
| 射击/竞技 | BR-like、战术射击-like、MOBA-like |
| 经营/建造 | 农场经营-like、城市建造-like、生存建造-like |
| Roguelike | 经典Roguelike-like |
| 塔防 | 经典塔防-like |
| 派对/休闲 | 派对竞技-like、三消-like、混合休闲-like |

## 品类修正补丁

`genre-patches.md` 覆盖 6 个品类的 ADD/SKIP/REFINE 修正：

- 搜打撤（Extraction Shooter）
- 卡牌肉鸽（Card Roguelike）
- 自走棋（Auto Chess）
- SLG
- MOBA
- FPS 竞技
- 模拟经营

## 安装

```bash
# 复制到 skills 目录
cp -r game-analyse-skills/* ~/.codemaker/skills/
```

确保目录结构保持不变（子 skill 通过相对路径引用 references 文件）。
