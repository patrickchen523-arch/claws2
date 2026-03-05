# 游戏机制库

> 这里是俊亦的游戏机制知识库，持续收集和整理各种游戏机制设计。

## 重要说明

**机制库已迁移至 jizhi 工作区**：
- 正确路径：`/root/.openclaw/agents/jizhi/workspace/mechanisms/`
- 本目录下的 `jizhi-mechanisms` 是软链接，指向实际存储位置

## 目录结构

```
jizhi-workspace/
├── games/             # 游戏目录
│   ├── ark-nova.md
│   ├── lucky-landlord.md
│   ├── mewgenics.md
│   ├── valorant.md
│   └── league-of-legends.md
│
└── mechanisms/        # 机制目录（软链接）
    ├── ark-nova/
    │   ├── dual-track-competition.md
    │   └── card-position-strength.md
    ├── lucky-landlord/
    │   ├── slot-machine-symbol-engine.md
    │   └── rent-pressure-system.md
    ├── mewgenics/
    ├── valorant/
    └── league-of-legends/
```

## 已收录游戏

| 游戏 | 类型 | 机制数 |
|------|------|--------|
| 无畏契约 (Valorant) | FPS | 2 |
| 喵喵的结合 (Mewgenics) | Roguelike | 3 |
| 阿卡姆诺瓦 (Ark Nova) | 策略桌游 | 2 |
| 幸运房东 (Luck Be a Landlord) | Roguelike | 2 |
| 我的花园世界 (My Garden World) | 女性向模拟经营 | 2 |
| 英雄联盟 (League of Legends) | MOBA | 1+ |

```markdown
# 游戏名 / Game Name

## 基本信息
| 字段 | 内容 |
| :--- | :--- |
| 游戏名称 | 游戏名 / Game Name |
| 一句话对标 | "类比其他游戏的核心特色" |
| 游戏类型 | 品类 |

---

## 玩法环境

核心循环：
> 核心循环描述

操作门槛：
> 上手难度

---

## 关联资产

收录机制：
- [品类]-游戏名-机制名
```

## 机制格式模板

```markdown
# [品类]-游戏名-机制名

## 基础信息
| 字段 | 内容 |
| :--- | :--- |
| 案例名称 | [品类]-游戏名-机制名 |
| 来源游戏 | 🔗 游戏名 |
| 核心标签 | 标签1 / 标签2 / 标签3 |

## 通俗转译
一句话解释：（用生活/商业类比讲清楚）

## 机制拆解
机制描述：（详细规则和交互流程）
触发条件：（机制何时生效）

## 设计意图
解决痛点：（解决什么负面体验）
体验目标：（提供什么正面情绪）

## 关联参考
相似机制：（跨游戏同类参考）
```

## 入库工作流

1. **收集** - web_search/web_fetch 获取游戏信息
2. **拆解** - 使用 game-analyse-sdd skill
3. **筛选** - 判断哪些机制值得入库（机制与主题统一、有独特策略维度、足够抽象可复用）
4. **入库** - 写入 jizhi workspace 审核后入库

**触发方式**：
- "拆解 XXX 游戏"
- "分析 XXX 的机制"
- "把 XXX 加入机制库"

## 更新日志

- 2026-03-05: 机制库初始化，完成 ark-nova、lucky-landlord、mewgenics、valorant 入库
