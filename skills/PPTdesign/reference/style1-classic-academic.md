# 风格一：经典学术 / 商务严谨（来源：通用ppt模板1.pptx）

## 真实样式数据来源
- 源文件：`通用ppt模板1.pptx`（13 页）
- 画布：1920 × 1080（16:9）

## 配色系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 / 背景色块 | `#2C5160` | 深蓝灰，用于顶栏、装饰色块、小方块标记 |
| 强调 / 关键词 | `#FF0000` | 红色，用于需要高亮的关键词 run 及分隔线 |
| 基础文字 | `#000000` | 黑色，正文默认 |
| 次级信息（人名/日期等） | `#2C5160` | 与主色一致，作为次标题 |
| 页面背景 | `#FFFFFF` | 白色 |

## 字体规范

| 用途 | 字体 | 字号 | 说明 |
|------|------|------|------|
| 英文标题 / 引用文献 | `Times New Roman` | 36–40 pt，部分加粗 | 模板1标题区使用 |
| 中文标题 / UI | `微软雅黑` | 20–44 pt | 汇报人、院系名等信息 |
| 正文内容 | `宋体` | 继承（约 18 pt） | 内容页正文 |
| 英文正文 / 数据 | `Calibri` | 18–24 pt | 内容页英文段落 |

## 版式规则（Draw.io 实现要点）

### 封面页
- 顶部 `#2C5160` 色块：全宽 × 120 px 高度
- 顶部色块下方：`#FF0000` 细线分隔条（高度 10 px）
- 左侧小方块装饰（约 14 × 15 mm）：`fillColor=#2C5160`，用于修饰汇报人、单位等信息
- 主标题：`Times New Roman`，36 pt 粗体，`#000000` 或继承，竖向居中偏上

### 内容页
- 顶部同样使用 `#2C5160` 色块 + `#FF0000` 分隔线（高度 120 + 10 px）
- 标题文字嵌入顶部色块内，左对齐，`微软雅黑`，40 pt，白色
- 正文区：`宋体` 或 `Calibri` 约 18 pt；关键词用 `#FF0000` 强调

### 节标题（过渡）页
- 全宽 `#2C5160` 大色块铺满整页
- 白色大字节标题居中

### 通用装饰
- 左侧小方块 `14 × 15 mm`，`fillColor=#2C5160`，无描边，用于段落标记
- 底部右侧：`Times New Roman`，日期信息，`#2C5160`

## Draw.io XML 关键样式片段

```xml
<!-- 顶部深色条 -->
<mxCell id="topbar" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#2C5160;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="0" width="1920" height="120" as="geometry"/>
</mxCell>

<!-- 红色分隔线 -->
<mxCell id="line" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#FF0000;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="120" width="1920" height="10" as="geometry"/>
</mxCell>

<!-- 标题文字（嵌入顶色块内） -->
<mxCell id="title" value="  01. 标题内容" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=40;fontStyle=1;fontColor=#FFFFFF;fontFamily=微软雅黑;" vertex="1" parent="1">
  <mxGeometry x="0" y="0" width="1920" height="120" as="geometry"/>
</mxCell>

<!-- 左侧小方块装饰 -->
<mxCell id="badge" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#2C5160;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="120" y="200" width="14" height="30" as="geometry"/>
</mxCell>

<!-- 关键词红色强调（正文内使用 HTML） -->
<!-- 在 value 字段中用 <font color="#FF0000"><b>关键词</b></font> -->
```