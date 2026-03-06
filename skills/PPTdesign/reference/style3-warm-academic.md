# 风格三：暖色学术 / 亲和力（来源：通用ppt模板3.pptx）

## 真实样式数据来源
- 源文件：`通用ppt模板3.pptx`（11 页）
- 画布：1920 × 1080（16:9）

## 配色系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 / 色块 / 次标题 | `#2C5160` | 深蓝灰，用于顶栏装饰、日期、汇报人等信息 |
| 强调 / 关键词 | `#B7472A` | 暖砖红/橙红，用于标题高亮、关键词 |
| 基础文字 | `#000000` | 黑色，正文默认 |
| 页面背景 | `#FFFFFF` | 白色 |

> **与风格一的核心区别**：两者共用 `#2C5160` 作为主色，但强调色由红色 `#FF0000` 换成暖砖红 `#B7472A`，整体视觉更亲和、内敛。

## 字体规范

| 用途 | 字体 | 字号 | 说明 |
|------|------|------|------|
| 中文主标题 | `微软雅黑` | 44 pt | 封面主标题 |
| 内容页章节标题 | `Arial` | 继承（约 24–32 pt） | 章节标题 |
| 正文内容 | `Times New Roman` | 继承（约 18–22 pt） | 内容页正文 |
| 汇报人 / 院系 / 日期 | `微软雅黑` | 20 pt | 封面次要信息 |

## 版式规则（Draw.io 实现要点）

### 封面页
- 右侧两个 `#2C5160` 小方块（约 14 × 15 mm），分别对应「汇报人」「院系」信息行
- 主标题：`微软雅黑`，44 pt，`#2C5160`，左对齐偏上
- 汇报人/院系/日期：`微软雅黑`，20 pt，`#2C5160`
- **无顶部大色块**（与风格一不同），版式更简洁、平铺

### 内容页
- 页面编号标记：左侧 `数字 + 中文章节名`，用 `Arial` 字体，非粗体
- 正文：`Times New Roman`，约 18 pt，段落间空行分隔
- 章节名高亮：使用 `#B7472A` 暖砖红区分

### 节标题（过渡）页
- 简洁风：中央大字节标题，`#2C5160` 或 `#B7472A` 彩色字
- 不一定要大色块背景

### 通用装饰
- 小方块装饰（14 × 15 mm）：`fillColor=#2C5160`，用于侧边信息标注
- 细节处使用 `#B7472A` 暖色系点缀，而非红色

## Draw.io XML 关键样式片段

```xml
<!-- 封面左侧小方块装饰 -->
<mxCell id="badge1" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#2C5160;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="1580" y="520" width="40" height="55" as="geometry"/>
</mxCell>

<!-- 封面主标题 -->
<mxCell id="title" value="软件项目质量管理" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=44;fontColor=#2C5160;fontFamily=微软雅黑;" vertex="1" parent="1">
  <mxGeometry x="120" y="300" width="1400" height="80" as="geometry"/>
</mxCell>

<!-- 内容页章节标题（Arial，暖红色强调） -->
<mxCell id="sec" value="1. 软件质量概述和控制" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=32;fontColor=#B7472A;fontFamily=Arial;" vertex="1" parent="1">
  <mxGeometry x="120" y="160" width="1000" height="50" as="geometry"/>
</mxCell>

<!-- 正文内容 -->
<mxCell id="body" value="[正文内容...]" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;fontSize=22;fontColor=#000000;fontFamily=Times New Roman;" vertex="1" parent="1">
  <mxGeometry x="120" y="240" width="1680" height="600" as="geometry"/>
</mxCell>

<!-- 汇报人信息行 -->
<mxCell id="info" value="汇报人：xxx    院系：xxx    Date: 2024/01/01" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=20;fontColor=#2C5160;fontFamily=微软雅黑;" vertex="1" parent="1">
  <mxGeometry x="120" y="820" width="1400" height="40" as="geometry"/>
</mxCell>
```