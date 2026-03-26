# Jizhi Design Library v2 — 设计规范

## 1. Concept & Vision

**定位**：游戏机制知识库的专业展示工具，面向游戏策划和开发者。

**视觉意象**：暗色系工具型界面，类似 Linear/Notion 的克制美学——信息密度高但不杂乱，让机制卡片本身成为视觉焦点，而不是被 UI 抢戏。

**关键词**：克制、专业、模块化、可探索

---

## 2. Design Language

### 2.1 色彩系统

基于 Gaming 配色表（#13）进行调整，降低饱和度适合长时间阅读：

```css
:root {
  /* 背景层 */
  --bg-base:      #0D0D14;   /* 最底层背景 */
  --bg-surface:    #141420;   /* 卡片/面板背景 */
  --bg-elevated:  #1C1C2E;   /* 浮层/Modal 背景 */
  --bg-hover:     #252540;   /* Hover 态 */

  /* 主色 */
  --primary:       #7C3AED;   /* 紫 — 知识/策划感 */
  --primary-light: #A78BFA; /* 亮紫 */
  --primary-muted: #4C1D95; /* 深紫 */

  /* 功能色 */
  --accent:       #F59E0B;   /* 琥珀 — 高亮/Excellent */
  --accent-light: #FCD34D;   /* 亮琥珀 */
  --qualify:      #06B6D4;   /* 青色 — Qualify 标签 */
  --danger:        #EF4444;   /* 红色 — 删除/危险 */

  /* 文字 */
  --text-primary:  #F1F5F9;   /* 主要文字 */
  --text-secondary:#94A3B8;   /* 次要文字 */
  --text-muted:   #475569;    /* 弱文字 */

  /* 边框 */
  --border:        #2D2D44;   /* 常规边框 */
  --border-focus:  #7C3AED;   /* 聚焦边框 */

  /* 评级徽章 */
  --badge-excellent-bg:  rgba(245, 158, 11, 0.15);
  --badge-excellent-text: #F59E0B;
  --badge-qualify-bg:     rgba(6, 182, 212, 0.15);
  --badge-qualify-text:   #06B6D4;
}
```

### 2.2 字体

- **中文字体**：`"PingFang SC", "Microsoft YaHei", sans-serif`
- **英文字体**：`"Inter", "SF Pro Display", sans-serif`
- **代码/标签**：`"JetBrains Mono", "Fira Code", monospace`
- **字号系统**：
  - H1: 28px / 700
  - H2: 20px / 600
  - Body: 14px / 400
  - Small: 12px / 400
  - Tag: 11px / 500

### 2.3 间距系统

基于 4px 网格：`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`

- 卡片内边距：16px
- 网格间距：16px
- Section 间距：32px

### 2.4 动效

- 过渡时长：150ms（快）、250ms（标准）
- 缓动：`cubic-bezier(0.16, 1, 0.3, 1)`（Out-expo，快速停止）
- 卡片 Hover：微上浮 + 边框发光
- Modal：淡入 + 底部滑入（250ms）

---

## 3. Layout & Structure

### 3.1 整体布局

```
┌─────────────────────────────────────────────────┐
│  Header: Logo + 标签切换(Tabs) + 统计徽章      │
├─────────────────────────────────────────────────┤
│  工具栏: 搜索框 + 过滤器(多选) + 排序          │
├─────────────────────────────────────────────────┤
│  内容区: 响应式卡片网格                          │
│  · 三Tab内容共享同一网格                        │
│  · 游戏 / 机制 / 玩法                          │
└─────────────────────────────────────────────────┘
```

### 3.2 响应式断点

- `>1400px`: 4 列网格
- `1024-1400px`: 3 列网格
- `640-1024px`: 2 列网格
- `<640px`: 1 列网格

### 3.3 卡片基础样式

- 背景：`--bg-surface`
- 圆角：12px
- 边框：1px solid `var(--border)`
- Hover：边框变为 `var(--primary)` + 阴影 `0 0 0 1px var(--primary)`

---

## 4. Features & Interactions

### 4.1 Tab 切换

三个标签：**游戏** / **机制** / **玩法**

- 当前 Tab 下划线指示器（紫色）
- Tab 切换时卡片淡出淡入（150ms）
- URL 不变（单页应用）

### 4.2 搜索栏

- 占位符：`搜索游戏、机制、标签……`
- 实时搜索（input 事件，无 debounce 等待感更好）
- 匹配字段：标题、标签、游戏名、描述
- 多关键词：空格分隔，交集匹配
- 搜索为空时显示空状态插画 + 提示

### 4.3 过滤器

两个下拉过滤器：
1. **评级筛选**（机制 Tab 独有）：全部 / Excellent / Qualify
2. **品类筛选**：全部 / SLG / Roguelike / 放置 / FPS / MOBA / 等

过滤器状态变化时卡片网格实时刷新。

### 4.4 排序

下拉选择：
- 默认（入库顺序）
- 评级（Excellent > Qualify）
- 品类（字母序）

### 4.5 卡片 Hover

- 边框发光（紫色）
- 微上浮（translateY -2px）
- 描述文字在 hover 时完整显示（默认截断 3 行）

### 4.6 Modal 详情

- 点击卡片打开 Modal
- 背景遮罩：`rgba(0,0,0,0.7)` + 模糊
- Modal 最大宽度：900px，最大高度：85vh，可滚动
- 关闭：点击遮罩 / 右上角 × / ESC 键
- 内部导航：相似机制跳转 / 来源游戏跳转 / 收录机制跳转（点击后同一 Modal 内切换内容）

### 4.7 统计栏（Header 内）

- 游戏总数 + 机制总数 + 玩法总数
- 实时反映过滤器后的数量（而非总数）

---

## 5. Component Inventory

### 5.1 Header

- 左侧：Logo（文字 "Jizhi" + 紫色方块图标）
- 中间：Tab 标签（游戏/机制/玩法）
- 右侧：统计徽章（机制 N / 游戏 N / 玩法 N）

### 5.2 工具栏

- 搜索框：左侧图标 + 输入框 + 清除按钮（有内容时显示）
- 过滤器：两个 Select 下拉
- 排序：右侧 Select

### 5.3 游戏卡片

```
┌──────────────────────────┐
│  [品类标签]              │
│                          │
│  游戏中文名              │
│  Game English Name       │
│                          │
│  X-Statement (3行截断)  │
│                          │
│  [核心标签] [核心标签]    │
└──────────────────────────┘
```

### 5.4 机制卡片

```
┌──────────────────────────┐
│ [Excellent] 或 [Qualify] │ ← 评级徽章
│                          │
│  机制名称                 │
│  来源: 游戏英文名         │
│                          │
│  通俗转译 (3行截断)       │
│                          │
│  [标签] [标签] [标签]    │
└──────────────────────────┘
```

### 5.5 玩法卡片

```
┌──────────────────────────┐
│  [主玩法] 或 [副玩法]   │
│                          │
│  玩法名称                 │
│  所属: 游戏名             │
│                          │
│  核心循环 (3行截断)      │
│                          │
│  [玩法类型] [常驻/限时]  │
└──────────────────────────┘
```

### 5.6 Modal 详情

分栏布局：

```
┌──────────────────────────────────────────────┐
│  [×]                                         │
├──────────────────┬───────────────────────────┤
│                  │                           │
│  基本信息侧栏     │  主要内容区               │
│  · 评级         │  · 通俗转译              │
│  · 来源游戏     │  · 机制说明              │
│  · 品类         │  · 创新判据（如果Excellent）│
│  · 标签         │  · 关联机制链接          │
│  · 分析日期     │  · 代价与取舍            │
│                  │                           │
├──────────────────┴───────────────────────────┤
│  标签展示区（可点击搜索）                    │
└──────────────────────────────────────────────┘
```

### 5.7 空状态

- 搜索无结果：插画 + "没有找到匹配的条目"
- 加载中：骨架屏（3个卡片占位）

---

## 6. Technical Approach

### 6.1 技术栈

- 纯静态 HTML + CSS + Vanilla JS
- 无需构建工具，双击打开即可运行
- 数据从 `generate-data.js` 生成到 `data.json`

### 6.2 数据生成脚本

`generate-data.js` 需要解析 `mechanism-lib-2-0/` 目录结构：

```javascript
// 输出 data.json 结构
{
  "games": { "key": { ...gameCardFields } },
  "mechanisms": { "key": { ...mechanismCardFields } },
  "gameplays": { "key": { ...gameplayCardFields } },
  "stats": { gameCount, mechanismCount, gameplayCount }
}
```

### 6.3 数据字段映射

**游戏卡片字段**：
- title, englishName, genre, prototype, innovationLevel, xStatement, tags, corePillars, topMechanisms, stats

**机制卡片字段**：
- prefix (Excellent/Qualify), title, game, genre, tags, oneLiner, mechanismDesc, triggerCondition, serviceExperience, innovationCriteria, similarMechanisms[],代价与取舍

**玩法卡片字段**：
- type (主玩法/副玩法), title, game, coreLoop, targetPlayers, gameplayType, tags

### 6.4 性能

- 卡片数量 < 500 时直接渲染，不过滤虚拟化
- 搜索用 DOM 属性过滤器，不重新请求
- 图片懒加载（如果有封面图）

---

## 7. 新旧版本对比

| 维度 | v1 (旧) | v2 (新) |
|------|---------|---------|
| 主题 | 深色 + 橙色 | 深色 + 紫色 |
| Tab 内容 | 游戏/机制 | 游戏/机制/玩法 |
| 过滤器 | 无 | 评级 + 品类双过滤 |
| 卡片hover | 简单边框 | 紫色发光 + 上浮 |
| Modal | 单栏 | 双栏（侧栏+主栏） |
| 评级徽章 | 无 | Excellent(琥珀) / Qualify(青) |
| 工具栏 | 仅有搜索 | 搜索+过滤器+排序 |
| 统计 | 总数 | 实时反映过滤后数量 |
