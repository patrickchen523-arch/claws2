# 风格四：科技明快 / 现代前沿（来源：通用ppt模板4.pptx）

## 真实样式数据来源
- 源文件：`通用ppt模板4.pptx`（13 页）
- 画布：1920 × 1080（16:9，原模板宽约 338 mm）

## 配色系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 / 横条色块 | `#0170C1` | 高饱和度科技蓝 |
| 基础文字 | 继承（黑色） | 正文 |
| 标题高亮 | `#0170C1` | 页面标题文字用蓝色 |
| 页面背景 | `#FFFFFF` | 白色 |

## 字体规范

| 用途 | 字体 | 字号 | 说明 |
|------|------|------|------|
| 主标题（封面） | `方正尚酷简体` | 48 pt | 封面主标题，现代设计感 |
| 页面标题 | `方正尚酷简体` | 24–36 pt，`#0170C1` | 内容页/目录页标题 |
| 英文副标题 | `Garage Gothic` | 24 pt | 如 `CONTENTS`，在标题下方 |
| 信息/姓名 | `冬青黑体简体中文 W3` | 16–28 pt | 指导老师、汇报人信息 |
| 正文 | `冬青黑体简体中文 W3` | 继承（约 16–20 pt） | 内容页正文 |
| 日期 | `Century Gothic` | 18 pt | 封面日期信息 |

## 版式规则（Draw.io 实现要点）

### 封面页
- 底部一条 `#0170C1` 全宽横条（高约 11 mm）：作为底部装饰线
- 主标题 `方正尚酷简体`，48 pt，左对齐，黑色或深色
- 汇报人/指导老师信息：`冬青黑体简体中文 W3`，16 pt，上下排列，右侧对齐
- 日期 `Century Gothic`，18 pt
- 院校名称在底部横条区域内或下方，小字白色

### 内容页（标准布局）
- 顶部三要素：
  - 左侧 `#0170C1` 小竖色块（6 mm 宽 × 全高顶条 8 mm 高）
  - 右侧延伸横条（`#0170C1`，全宽）
  - 底部同样有 `#0170C1` 横条
- 页面标题：`方正尚酷简体`，24–36 pt，`#0170C1`，左对齐
- 英文副标题：`Garage Gothic`，24 pt，黑色
- 正文：`冬青黑体简体中文 W3`，继承字号，段落分布自由

### 内容卡片页（特殊版式）
- 标题区：蓝色全宽色块（高约 16 mm），左侧带约 17 mm 宽的蓝色小色块叠加
- 多个概念展示：「图标/关键词 + 副标题描述」的卡片并排（2–4 列）

### 通用装饰
- 顶部：左小蓝色块（6 mm）+ 右延伸大蓝色条（全宽 − 12 mm）
- 底部：全宽蓝色条（8 mm 高）
- 色块不设圆角（`rounded=0`），硬朗、干净

## Draw.io XML 关键样式片段

```xml
<!-- 顶部左小色块 -->
<mxCell id="tl" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#0170C1;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="0" width="20" height="30" as="geometry"/>
</mxCell>

<!-- 顶部右延伸大横条 -->
<mxCell id="tr" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#0170C1;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="40" y="0" width="1880" height="30" as="geometry"/>
</mxCell>

<!-- 底部横条 -->
<mxCell id="bot" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#0170C1;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="1050" width="1920" height="30" as="geometry"/>
</mxCell>

<!-- 页面标题 -->
<mxCell id="ptitle" value="目录页" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=36;fontColor=#0170C1;fontFamily=方正尚酷简体;" vertex="1" parent="1">
  <mxGeometry x="120" y="80" width="600" height="60" as="geometry"/>
</mxCell>

<!-- 英文副标题 -->
<mxCell id="en" value="CONTENTS" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=24;fontColor=#000000;fontFamily=Garage Gothic;" vertex="1" parent="1">
  <mxGeometry x="120" y="150" width="400" height="40" as="geometry"/>
</mxCell>

<!-- 封面底部全宽横条（封面页用） -->
<mxCell id="cbot" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#0170C1;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="1040" width="1920" height="40" as="geometry"/>
</mxCell>

<!-- 封面主标题 -->
<mxCell id="ctitle" value="基于 XX 的系统设计与实现" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=48;fontColor=#000000;fontFamily=方正尚酷简体;" vertex="1" parent="1">
  <mxGeometry x="120" y="340" width="1400" height="100" as="geometry"/>
</mxCell>
```