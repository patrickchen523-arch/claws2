---
name: premium-pptx
description: 生成排版精美、视觉震撼的 PowerPoint 演示文稿。融合 frontend-design 的高端审美设计能力与 pptx skill 的专业技术规范，从零生成可直接打开使用的 .pptx 文件。当用户需要制作 PPT、演示文稿、汇报材料、pitch deck 时使用此技能。输出的 PPT 具备鲜明的视觉风格、精心编排的排版、丰富的布局变化，彻底告别 "AI 生成感"。
---

# Premium PPTX 生成器

融合 **frontend-design 的审美设计思维** 与 **pptx skill 的技术规范**，生成排版精美、风格鲜明的演示文稿。

---

## 何对触发此技能

- "帮我做一个 PPT"
- "生成一份汇报材料/演示文稿/pitch deck"
- "把这些内容做成幻灯片"
- "制作一份产品介绍 / 项目复盘 / 数据报告 PPT"

---

## 第一步：设计思维先行（Design Thinking）

**在写任何代码之前，先完成设计决策。** 这是与普通 pptx skill 最核心的区别。

### 1.1 理解场景

- **目的**：这份 PPT 要解决什么问题？谁来看？
- **调性**：内部汇报（专业严谨）/ 对外展示（精美有冲击力）/ 产品发布（科技感/品牌感）
- **内容量**：几页？每页信息密度？

### 1.2 确立审美方向（必须明确选一种，不可模糊）

从以下方向中选择最适合的一种，**执行到极致**：

| 风格 | 适合场景 | 视觉特征 |
|------|---------|---------|
| **极简精致** | 高端品牌/战略汇报 | 大量留白、单一重点色、强字体层级 |
| **深色专业** | 数据报告/技术方案 | 深色背景"三明治"、亮色数据高亮、高对比 |
| **杂志编辑风** | 产品发布/对外展示 | 非对称布局、大图出血、强排版节奏 |
| **几何构成** | 创意机构/设计类 | 几何色块分割、粗线条框架、大胆用色 |
| **企业商务** | 内部汇报/融资材料 | 色彩克制、图表为主、清晰数据展示 |
| **网易品牌风** | 网易系产品/内部汇报 | 网易红主色、圆形编号、微软雅黑、底部红线Logo |

### 1.3 配色方案（必须为当前主题定制）

选择一个主色（60-70%视觉权重）、一个辅色、一个强调色：

**内置精选配色参考：**

| 方案名 | 主色 | 辅色 | 强调色 | 适合风格 |
|--------|------|------|--------|---------|
| Midnight Executive | `1E2761` 深海蓝 | `CADCFC` 冰蓝 | `FFFFFF` | 深色专业 |
| Warm Terracotta | `B85042` 砖红 | `E7E8D1` 沙色 | `A7BEAE` 鼠尾草 | 极简精致 |
| Cherry Bold | `990011` 樱桃红 | `FCF6F5` 米白 | `2F3C7E` 深蓝 | 杂志编辑 |
| Forest & Moss | `2C5F2D` 森林绿 | `97BC62` 苔绿 | `F5F5F5` 奶白 | 企业商务 |
| Charcoal Minimal | `36454F` 炭灰 | `F2F2F2` 浅灰 | `212121` 黑 | 极简精致 |
| Ocean Gradient | `065A82` 深蓝 | `1C7293` 青蓝 | `02C39A` 薄荷 | 深色专业 |
| Berry & Cream | `6D2E46` 浆果紫 | `A26769` 藕粉 | `ECE2D0` 奶油 | 几何构成 |
| **NetEase Brand** | `A80D0B` 网易红 | `EFECF1` 浅灰 | `C00000` 亮红 | 网易品牌风 |

**配色铁律：**
- 绝对不要让所有颜色视觉权重相等
- 深色背景用于封面+结尾页，浅色用于内容页（"三明治"结构）——**或**全程深色
- 绝对禁止紫色渐变白背景等 AI 通病配色

### 1.4 字体选择

选择有个性的字体组合，**绝对禁止 Inter、Arial、系统字体**（网易风格除外，必须用微软雅黑）：

| 标题字体 | 正文字体 | 风格感受 |
|---------|---------|---------|
| Georgia | Calibri | 经典权威 |
| Calibri Bold | Calibri Light | 现代商务 |
| Cambria | Calibri | 精致严谨 |
| Impact | Arial | 冲击力强 |
| Palatino | Garamond | 高端典雅 |
| Arial Black | Arial | 简洁有力 |
| **微软雅黑** | **Calibri** | **网易品牌风（中文专用）** |

### 1.5 视觉母题（全程贯穿）

选择 **ONE** 个视觉元素重复出现，形成统一感：
- 左侧粗色竖条（accent bar）
- 标题下细分隔线
- 数据用大号数字 + 小标签的"数据卡片"样式
- 图标统一放在彩色圆形背景内
- **网易风格**：红色圆形数字编号 + 每页底部红线 + 網易 NetEase Logo

---

## 第二步：幻灯片结构规划

### 2.1 标准结构

```
1. 封面（标题 + 副标题 + 视觉冲击）
2. 目录/概览（可选，超过6页时推荐）
3. 内容页 × N（绝不重复同一布局）
4. 结尾页（总结/呼吁行动/联系方式）
```

### 2.2 布局多样性（强制要求）

每张内容页必须使用不同布局，优先考虑：

| 布局类型 | 适合内容 | pptxgenjs 实现要点 |
|---------|---------|-----------------|
| 左文右图 | 说明性内容 | `w:5` 文字 + `w:4.5` 图片 |
| 大数据卡片 | KPI/核心指标 | 60-72pt 数字 + 12pt 标签 |
| 2×2 网格 | 特性列表/优势 | 4块等比矩形卡片 |
| 全出血背景图 | 章节过渡/封面 | `slide.background` 设置 |
| 时间线/流程 | 步骤/进度 | 横排节点，上下交替文字 |
| 对比两列 | Before/After 或 比较 | 两列等宽，中间细分割线 |
| 图标+文字行 | 功能/特性列表 | 图标在彩色圆内，右侧粗标题+细描述 |
| 引语/金句 | 强调重点 | 大号斜体引语，背景色块烘托 |

---

## 第三步：pptxgenjs 代码生成

### ⚠️ 最重要：画布尺寸（必须最先确认）

```javascript
pres.layout = 'LAYOUT_16x9';
// ✅ 实际画布尺寸是 10" × 5.625"，不是 13.33" × 7.5"
// ❌ 绝对不能用 13.33 作为宽度，所有坐标必须在 10" × 5.625" 范围内

// 建议定义常量，全程引用，绝不硬编码
const W = 10.0; // 幻灯片宽度
const H = 5.625; // 幻灯片高度
const ML = 0.4; // 左边距
const MR = 0.4; // 右边距
const CW = W - ML - MR; // 内容宽度 = 9.2"
const CONTENT_Y = 1.1; // 内容区起始 y（标题占 0~1.1"）
const CONTENT_H = H - CONTENT_Y - 0.5; // 内容可用高度（留出页脚）
```

### 3.1 基础设置

```javascript
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 10" × 5.625"

const W = 10.0, H = 5.625, ML = 0.4, MR = 0.4;
const CW = W - ML - MR;
const CONTENT_Y = 1.1;
const CONTENT_H = H - CONTENT_Y - 0.5;

// 定义全局设计 token
const THEME = {
 primary: "1E2761",
 secondary: "CADCFC",
 accent: "FFFFFF",
 bg_dark: "1E2761",
 bg_light: "F8F9FC",
 text_dark: "1A1A2E",
 text_light: "FFFFFF",
 text_muted: "64748B",
 font_title: "Georgia",
 font_body: "Calibri",
};
```

### 3.2 必须遵守的技术规范

**颜色：**
- ❌ 绝对禁止 `color: "#FF0000"`（带 # 号会损坏文件）
- ❌ 绝对禁止 8 位 hex 编码透明度，如 `"00000020"`（损坏文件）
- ✅ 正确：`color: "FF0000"`，透明度用 `opacity: 0.12`

**阴影：**
```javascript
// 每次调用都要生成新对象（PptxGenJS 会就地修改 options，复用会损坏第二个元素）
const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });
slide.addShape(pres.shapes.RECTANGLE, { shadow: makeShadow(), ... });
slide.addShape(pres.shapes.RECTANGLE, { shadow: makeShadow(), ... }); // ✅ 每次都新建对象
```

**文字：**
- ❌ 禁止 unicode 圆点 `"•"`（造成双重 bullet）
- ✅ 使用 `bullet: true` 或 `"• "` 字符串前缀
- 多行文本数组必须用 `breakLine: true`
- 文字需要与形状精确对齐时，设置 `margin: 0`
- ❌ 禁止在 JS 字符串中使用中文弯引号 `""`（造成语法错误），用 `\u201C` 转义或改用直引号

**圆角矩形：**
- ❌ `ROUNDED_RECTANGLE` 不能搭配矩形装饰条（圆角无法被覆盖）
- ✅ 装饰条搭配 `RECTANGLE`

### 3.3 坐标与布局计算规范（实战总结）

**坐标计算铁律：**

```javascript
// ✅ 正确：用常量推导，所有元素坐标相对于 W/H/ML/CONTENT_Y 计算
const colW = (CW - gap) / 2; // 双列：每列宽度
const rowH = CONTENT_H / n; // n 行：每行高度

// ❌ 错误：硬编码坐标，改动一个元素其他全乱
x: 6.67, y: 1.5 // 这种写法容易在尺寸变化时全部失效
```

**对齐规范——圆圈+文字对齐（最常见排版问题）：**

```javascript
// ✅ 正确做法：文字高度 = 圆圈高度，valign: "middle"，两者 y 坐标相同
const circleSize = 0.46;
const circleY = y + 0.08;
slide.addShape(pres.shapes.OVAL, {
 x: ML, y: circleY, w: circleSize, h: circleSize, ...
});
slide.addText(text, {
 x: ML + circleSize + 0.14, // 圆圈右侧 + 间距
 y: circleY, // 与圆圈同一 y
 w: textW,
 h: circleSize, // 与圆圈同高
 valign: "middle", // 垂直居中
 margin: 0,
});

// ❌ 错误做法（文字会在圆圈下方换行溢出）：
slide.addText(text, { x: 1.15, y: y + 0.04, h: 0.8 }); // h 太大、不用 valign
```

**时间轴节点对齐：**

```javascript
// ✅ 节点圆心严格等分，文字以圆心为中心对称
const nodeCX = ML + (i + 0.5) * nodeW; // 圆心 x
const nodeX = nodeCX - nodeSize / 2; // 圆形左边 x
const textX = nodeCX - nodeW / 2; // 文字块左边（与圆心对称）
const textBlockW = nodeW; // 文字块宽度等于间距

// ❌ 错误（文字偏移，节点不均匀）：
const cx = ML + i * nodeW + nodeW / 2 - 0.22; // 手动偏移不可靠
```

**页脚位置：**

```javascript
// ✅ 用相对 H 的方式计算，不硬编码 6.9 或 7.18
const FY = H - 0.45; // 始终距底部 0.45"
slide.addShape(pres.shapes.LINE, { x: 0, y: FY, w: W, h: 0, ... });
slide.addText("Logo", { x: ML, y: FY + 0.05, ... });

// ❌ 错误（超出画布边界，被截断）：
slide.addShape({ y: 7.18 }); // 5.625" 的画布根本没有 y=7.18
```

### 3.4 图标使用（react-icons + sharp）

```javascript
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

async function iconToBase64Png(IconComponent, color, size = 256) {
 const svg = ReactDOMServer.renderToStaticMarkup(
 React.createElement(IconComponent, { color: '#${color}', size: String(size) })
 );
 const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
 return "image/png;base64," + pngBuffer.toString("base64");
}

// 图标统一放在彩色圆形背景内
slide.addShape(pres.shapes.OVAL, { x: 0.5, y: 1.0, w: 0.5, h: 0.5, fill: { color: THEME.accent } });
slide.addImage({ data: iconData, x: 0.56, y: 1.06, w: 0.38, h: 0.38 });
```

### 3.5 高颜值图表配置

```javascript
slide.addChart(pres.charts.BAR, chartData, {
 chartColors: [THEME.accent, THEME.secondary],
 chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
 catAxisLabelColor: THEME.text_muted,
 valAxisLabelColor: THEME.text_muted,
 valGridLine: { color: "E2E8F0", size: 0.5 },
 catGridLine: { style: "none" },
 showValue: true,
 dataLabelColor: THEME.text_dark,
 showLegend: false,
});
```

---

## 第四步：网易品牌风格专项规范

当用户选择"网易品牌风"时，严格遵守以下规范：

### 4.1 设计语言

| 元素 | 规范 |
|------|------|
| 主色 | `A80D0B`（网易红），封面/章节页背景、圆形编号、标题下红线 |
| 辅助色 | `C00000`（亮红），次级强调 |
| 背景 | 封面+章节+结尾用全红背景，内容页用白色 |
| 字体 | 中文：微软雅黑；英文：Calibri |
| 视觉母题 | 红色圆形数字编号（贯穿所有内容页） |
| 页脚 | 每页底部红色分隔线 + `網易 NetEase` 左下角 + 页码右下角 |
| 英文副标题 | 每个内容页标题下必须有红色英文副标题 |

### 4.2 页面分区

```
标题区：y=0 ~ 1.1"
 - 中文标题：y=0.22, fontSize=20, bold
 - 英文副标题：y=0.72, fontSize=10, color=红
 - 灰色分隔线：y=1.0（全宽）+ 红色短线覆盖左侧 1.2"

内容区：y=1.1" ~ (H-0.5)"
 - 左右边距：ML=0.4"
 - 双列分割点：x=W/2=5.0"

页脚区：y=(H-0.45)" ~ H
 - 红线：y=H-0.45, w=W
 - Logo文字：x=ML, y=H-0.4, fontSize=8
 - 页码：x=W-0.5, y=H-0.4, align=right
```

### 4.3 封面/章节/结尾页（深红背景）

```javascript
// 深色页页脚线和Logo改为白色
function addFooter(slide, pageNum, isDark) {
 const lineColor = isDark ? "FFFFFF" : "A80D0B";
 const textColor = isDark ? "FFFFFF" : "666666";
 const FY = H - 0.45;
 slide.addShape(pres.shapes.LINE, { x: 0, y: FY, w: W, h: 0, line: { color: lineColor, width: 1.0 } });
 slide.addText("網易 NetEase", { x: ML, y: FY + 0.05, w: 2.5, h: 0.25, fontSize: 8, color: textColor, ... });
}
```

### 4.4 内容页圆形编号模板

```javascript
// 圆形编号 + 文字对齐（valign: middle 是关键）
const circleSize = 0.46;
const circleY = y + 0.08;
slide.addShape(pres.shapes.OVAL, {
 x: startX, y: circleY, w: circleSize, h: circleSize,
 fill: { color: "A80D0B" },
});
slide.addText(numStr, {
 x: startX, y: circleY, w: circleSize, h: circleSize,
 fontSize: 13, bold: true, color: "FFFFFF",
 fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
});
slide.addText(content, {
 x: startX + circleSize + 0.14, y: circleY,
 w: textW, h: circleSize,
 fontSize: 12, color: "1A1A1B", fontFace: "微软雅黑",
 valign: "middle", margin: 0,
});
```

---

## 第五步：QA 验证（强制执行）

**假设第一版一定有问题，主动找 bug。**

### 5.1 生成前自检清单

运行代码前，先对照以下清单检查：

- [ ] 所有坐标是否在 `W=10"`, `H=5.625"` 范围内？有无超界元素？
- [ ] 是否所有颜色都没有 `#` 号前缀？
- [ ] `makeShadow` 是否每次都新建对象？
- [ ] 时间轴/圆形编号等重复元素，y 坐标是否统一用公式推导？
- [ ] 中文字符串中有无弯引号 `""`？（改用直引号或转义）
- [ ] 页脚 y 坐标是否用 `H - 0.45`？

### 5.2 内容检查

```bash
python -m markitdown output.pptx
python -m markitdown output.pptx | grep -iE "xxxx|lorem|ipsum|placeholder"
```

### 5.3 视觉检查（转图片审查）

```bash
python scripts/office/soffice.py --headless --convert-to pdf output.pptx
pdftoppm -jpeg -r 150 output.pdf slide
```

逐张检查以下问题：
- 文字溢出或被截断（特别是圆圈旁的文字是否换行错位）
- 元素重叠（文字穿过形状、线条压字）
- 时间轴节点是否等间距、文字是否在节点正上/正下方
- 各同类元素对齐不一致
- 低对比度文字（浅灰文字在浅色背景上）
- 深色背景上的深色图标
- 占位符文本残留
- 页脚是否被截断（检查是否超出画布）

### 5.4 验证循环

1. 生成 → 转图片 → 检查
2. **列出所有问题**（若无问题，说明检查不够仔细）
3. 修复 → **重新检查受影响的幻灯片**
4. 重复，直到完整过一遍无新问题

---

## 第六步：禁止清单（Anti-patterns）

绝对不能出现以下情况：

### 设计层面
- ❌ 所有页使用完全相同的布局（纯标题+要点列表）
- ❌ 颜色选紫色渐变白背景
- ❌ 标题不够大（必须 18pt+，内容页）
- ❌ 随机间距（选一个间距值全程统一）
- ❌ 某些页精心设计、其他页全部保持素白
- ❌ 纯文字页（每页必须有图片/图表/图标/色块至少一个视觉元素）
- ❌ 浅色背景上的浅色文字（必须有强对比）

### 技术层面（实战踩坑总结）
- ❌ **坐标按 13.33×7.5 写**（LAYOUT_16x9 实际是 10×5.625，这是最常见错误）
- ❌ **颜色加 `#` 号**（`"#FF0000"` 会损坏文件，必须用 `"FF0000"`）
- ❌ **shadow 对象复用**（必须每次 `makeShadow()` 新建对象）
- ❌ **中文弯引号入代码**（`""` 会导致 JS 语法错误）
- ❌ **圆圈+文字不对齐**（文字必须与圆圈同 y 同 h，加 `valign: "middle"`）
- ❌ **时间轴节点偏移**（用 `nodeCX = ML + (i+0.5)*nodeW` 严格等分）
- ❌ **页脚硬编码 y=6.9 或 y=7.18**（超出 5.625" 画布，必须用 `H-0.45`）
- ❌ **unicode 圆点 `"•"`**（造成双重 bullet，用 `"• "` 字符串前缀）

---

## 依赖安装

```bash
pip install "markitdown[pptx]" Pillow
npm install -g pptxgenjs react react-dom react-icons sharp
# LibreOffice (soffice) + Poppler (pdftoppm) 用于转图片 QA
```
