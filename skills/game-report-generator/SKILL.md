---
name: game-report-generator
description: |
 生成游戏分析报告的 HTML/PDF 文档。
 当需要将 game-analyse-sdd 的分析输出转换为可视化报告时使用此技能。
 工作流程：收集分析数据 → 生成 HTML 预览 → 浏览器查看 → 打印为 PDF。
---

# Game Report Generator - 游戏分析报告生成器

根据 game-analyse-sdd 的分析输出，生成可视化的游戏分析报告。

## 报告结构（两页）

### 第一页
- 游戏产品：游戏名称
- X-Statement 公式
- 玩法原型（旧酒 + 新瓶对比）
- 游戏支柱（每个支柱 + 可视化实现方式）

### 第二页
- 核心体验（以秒/分钟为单位 + 循环图）
- 目标用户（留空）
- 竞争环境（留空）
- 核心乐趣（留空）
- 商业化（留空）
- 耐玩性与游戏目标（留空）

## 工作流程

### 1. 收集数据

从 game-analyse-sdd 的分析结果中提取：
- 游戏名称
- X-Statement 公式
- 玩法原型（参考游戏 + 核心体验描述）
- 游戏支柱（每个支柱的标题 + 实现方式）
- 核心体验（以秒/分钟为单位）
- 游戏循环

### 2. 生成 HTML 报告

```bash
cd /root/.openclaw/workspace/skills/game-report-generator/scripts
python3 generate_report.py --json data.json --output report.html
```

### 3. 图形化呈现

**当前方案（文字+箭头）**：
- 游戏循环：用 `→` 箭头连接步骤
- 支柱实现：用精简短语描述

**可选方案（需要额外处理）**：
- 嵌入 Mermaid 流程图
- 嵌入 Chart.js 图表
- 手动绘制后嵌入图片
- **Leonardo.ai**：可用 API 生成游戏循环图、支柱可视化图表

### 4. 输出 PDF

在浏览器中 Ctrl+P → 另存为 PDF

## 数据格式

```json
{
  "game_name": "游戏名称",
  "x_statement": "X-Statement公式",
  "old_wine": {"title": "旧酒名称", "description": "旧酒核心体验描述"},
  "new_wine_desc": "新产品核心体验描述",
  "pillars": [
    {"title": "支柱1", "method": "实现方式1"},
    {"title": "支柱2", "method": "实现方式2"}
  ],
  "experience_per_second": "以秒为单位的体验",
  "experience_per_hour": "以分钟/小时为单位的体验",
  "game_loop": ["步骤1", "步骤2", "步骤3"]
}
```

## 注意事项

- HTML 中已包含基本的可视化（流程图箭头、支柱区块）
- 复杂图表需要手动添加或使用其他工具生成图片后嵌入
- PDF 通过浏览器打印生成
