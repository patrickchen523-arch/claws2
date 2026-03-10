# 机制库网站 PM 需求文档

> 本文档记录机制库展示网站的所有功能需求、实现方式和迭代历史

## 一、产品概述

- **产品名称**：Jizhi Design Library（机制库展示网页）
- **产品定位**：展示游戏设计机制的在线可视化库
- **目标用户**：游戏设计师、策划、开发者
- **技术栈**：纯静态 HTML + CSS + JavaScript，Python HTTP Server
- **服务端口**：8888

## 二、URL 访问

- **本地访问**：`http://localhost:8888/`
- **公网访问**：需配置域名/IP映射

## 三、核心功能

### 3.1 机制库展示

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| 卡片展示 | 以卡片形式展示所有机制 | `renderGrid()` 遍历 `data.mechanisms` |
| 卡片内容 | 显示：标题、来源游戏、描述(4行)、标签 | 模板字符串拼接 HTML |
| 标签展示 | 每个机制显示多个标签 | `.card-tags` 容器 + `.tag` 样式 |
| 标签点击搜索 | 点击标签跳转到搜索结果 | `searchByTag(tag)` 函数，设置 input 值并触发 input 事件 |
| 弹窗详情 | 点击卡片弹出详情弹窗 | `showMechanism(key)` 函数 |

### 3.2 游戏库展示

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| Tab 切换 | 切换"机制库"和"游戏库" | `currentTab` 状态 + CSS 类切换 |
| 卡片展示 | 以卡片形式展示所有游戏 | `renderGrid()` 遍历 `data.games` |
| 弹窗详情 | 点击卡片弹出详情弹窗 | `showGame(key)` 函数 |

### 3.3 搜索功能

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| 关键词搜索 | 支持输入关键词搜索 | `input` 事件监听 + `getFilteredData()` 过滤 |
| 多关键词交集搜索 | 多个关键词用空格分隔 | `query.trim().split(/\s+/)` 分割 + `every()` 匹配 |
| 搜索范围 | 标题、来源游戏、描述、标签 | 在 `getFilteredData()` 中多字段匹配 |
| 实时搜索 | 输入即搜索，无需点击按钮 | `addEventListener('input', renderGrid)` |
| 标签搜索 | 在搜索框输入标签名即可搜索 | 标签字段纳入搜索范围 |

### 3.4 数据统计

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| 机制数量 | 显示机制库总数 | `renderStats()` 设置 `#mechCount` |
| 游戏数量 | 显示游戏库总数 | `renderStats()` 设置 `#gameCount` |

### 3.5 弹窗交互

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| 弹窗显示 | 点击卡片显示详情 | 详情填充到 `#mechModal` / `#gameModal` |
| 弹窗关闭 | 点击关闭按钮/遮罩/按 ESC | `closeModal()` 函数 |
| 来源游戏跳转 | 机制卡点击来源游戏名跳转游戏卡 | `showGame(gameName)` 函数 |
| 相似机制跳转 | 机制卡点击相似机制跳转对应机制卡 | `showMechanism(mechKey)` 函数 |
| 收录机制跳转 | 游戏卡点击收录机制跳转对应机制卡 | `showMechanism(mechKey)` 函数 |
| 弹窗互斥 | 打开新弹窗时自动关闭旧弹窗 | 每次打开前调用 `closeModal()` |

## 四、数据结构

### 4.1 data.json 格式

```json
{
  "mechanisms": {
    "游戏名/文件名.md": {
      "title": "标题",
      "gameName": "来源游戏",
      "tags": ["标签1", "标签2"],
      "simpleDesc": "简短描述",
      "mechanismDesc": "机制详述",
      "trigger": "触发条件",
      "painPoint": "痛点",
      "experienceGoal": "体验目标",
      "similarMechanisms": [
        { "game": "游戏名", "mechanism": "机制名" }
      ],
      "demo": "演示链接",
      "filename": "文件名"
    }
  },
  "games": {
    "游戏名/gamecard.md": {
      "title": "游戏中文名",
      "gameName": "游戏英文名",
      "tags": ["品类标签"],
      "xStatement": "X-Statement",
      "coreLoop": "核心循环",
      "difficulty": "难度",
      "achievements": "成就",
      "relatedMechanisms": ["机制名1", "机制名2"],
      "filename": "gamecard.md"
    }
  },
  "stats": {
    "mechanismCount": 317,
    "gameCount": 279
  }
}
```

### 4.2 数据生成

- **脚本**：`generate-data.js`
- **输入**：机制库目录 `/mechanisms/` 和游戏库目录
- **输出**：`data.json`
- **运行方式**：`node generate-data.js`

## 五、UI 规范

### 5.1 布局

- 主搜索框：顶部，全宽
- 统计栏：搜索框下方，显示机制/游戏数量
- 卡片网格：响应式网格布局
- 弹窗：居中显示，900px 宽，90vh 高

### 5.2 颜色变量

```css
:root {
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --bg: #f8fafc;
  --card-bg: #ffffff;
  --text: #1e293b;
  --text-secondary: #64748b;
  --border: #e2e8f0;
  --accent: #f59e0b;
}
```

## 六、迭代历史

### 2026-03-10

- **MVP 原型搭建**
  - 创建 `mechanism-lib-web` 目录
  - 实现 `generate-data.js` 解析脚本
  - 实现 `index.html` 展示页面

- **功能迭代**
  - 机制库/游戏库 Tab 切换
  - 关键词搜索（支持标签搜索 + 交集搜索）
  - 标签筛选（后续已移除，改为纯搜索）
  - 相似机制跳转（机制卡→机制卡）
  - 来源游戏跳转（机制卡→游戏卡）
  - 收录机制跳转（游戏卡→机制卡）
  - 弹窗互斥优化

- **UI 调整**
  - 弹窗宽度：800px → 900px
  - 卡片布局：游戏名放标签下方
  - 游戏卡标题：优先显示中文名
  - 弹窗高度：85vh → 90vh
  - 卡片描述显示：2行 → 4行

- **Bug 修复**
  - 修复机制卡→游戏卡跳转：300英雄游戏卡不显示收录机制
  - 修复来源游戏链接：无游戏卡时不显示可点击链接

- **数据清理**
  - 删除 6 个误放的游戏卡文件
  - 机制卡与游戏卡关联：添加 191 条关联

- **解析优化**
  - 章节别名映射（基本信息→基础信息等）
  - 标签标准化（顿号/逗号/斜杠统一）
  - 相似机制表格解析修复

- **标签筛选功能移除**
  - 原因：标签筛选下拉框不实用，且点击标签后搜索结果不实时更新
  - 移除：删除了 `<select id="tagFilter">` 元素和相关 JS
  - 修复：点击标签后手动触发 `input` 事件实现实时搜索

---

> 后续迭代请在此处追加记录
