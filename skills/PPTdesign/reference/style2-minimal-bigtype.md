# 风格二：现代极简 / 大字报感（来源：通用ppt模板2.pptx）

## 真实样式数据来源
- 源文件：`通用ppt模板2.pptx`（24 页）
- 画布：1920 × 1080（16:9）

## 配色系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 / 大字标题 | Scheme 主题色（近似 `#231F20` 深灰黑） | 通过主题色系控制，无硬编码 RGB |
| 强调色块 | `#F5C638` | 亮黄色，用于小角标方块、图标装饰 |
| 基础文字 | 继承主题色（近似 `#231F20`） | 深灰近黑 |
| 页面背景 | 主题浅色（近似 `#F5F5F5` 或 `#FFFFFF`） | 极简留白 |

> **注**：模板2大量使用 Office 主题色（`_SchemeColor`），Draw.io 中以近似值 `#231F20` 替代主色，`#F5C638` 替代强调色。

## 字体规范

| 用途 | 字体 | 字号 | 说明 |
|------|------|------|------|
| 目录章节大标题 | `微软雅黑`（加粗） | 88 pt | 目录页章节主标题 |
| 辅助英文标题 | 继承 | 54 pt | 如 `CONTENT`、章节英文副标题 |
| 节标题数字 | 继承 | **115 pt** | 「1」「2」等超大节号，冲击感极强 |
| 节标题中文 | 继承（加粗） | 44 pt | 节标题中文内容 |
| 目录条目 | 继承 | 28 pt | 如「第一部分 \| 选题背景和意义」 |
| 正文细节 | `微软雅黑` | 11 pt | 说明性小字，1.3 倍行距 |
| 子标题 | 继承（加粗） | 24 pt | 内容页小标题 |
| 单位落款 | `+mj-ea`（系统默认东亚字体） | 16 pt | 封面院校名 |

## 版式规则（Draw.io 实现要点）

### 封面页
- **极简设计**：主题大色块铺底（`#231F20` 深色或白底均可），院校名称小字落款居中偏下
- 标题文字极大，直接铺满大半页面

### 目录页
- 双语标题：大字（88 pt）「目录」+ 中等字（54 pt）「CONTENT」，视觉落差形成层次感
- 条目采用「**第N部分** | 章节名」格式，竖向排列，28 pt
- 背景可使用多个主题色色块分区，无固定 RGB，风格自由

### 节标题（过渡）页
- **超大数字节号**（115 pt）左/右侧留白作为装饰
- 节标题 44 pt 加粗，2 行：英文副标题在上，中文在下（或反之）
- 背景色块使用主题色

### 内容页
- 顶部细横条（`#F5C638` 黄色）作为导航条，注明「第N部分 | 当前章节名」
- 内容区域：24 pt 加粗子标题 + 11 pt 正文，极大留白
- 最多 4 个并排卡片式布局（多列均分）

### 通用装饰
- 小色块（约 8 × 7 mm）`fillColor=#F5C638`，作为内容页角标
- 避免使用硬线条，倾向用色块/面来划分区域

## Draw.io XML 关键样式片段

```xml
<!-- 节标题页背景色块 -->
<mxCell id="bg" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#231F20;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="0" y="0" width="1920" height="1080" as="geometry"/>
</mxCell>

<!-- 超大节号数字 -->
<mxCell id="num" value="1" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=115;fontStyle=1;fontColor=#FFFFFF;fontFamily=微软雅黑;" vertex="1" parent="1">
  <mxGeometry x="120" y="300" width="400" height="300" as="geometry"/>
</mxCell>

<!-- 节标题中文 -->
<mxCell id="stitle" value="选题背景和意义" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=44;fontStyle=1;fontColor=#FFFFFF;fontFamily=微软雅黑;" vertex="1" parent="1">
  <mxGeometry x="120" y="620" width="800" height="80" as="geometry"/>
</mxCell>

<!-- 黄色导航角标 -->
<mxCell id="badge" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#F5C638;strokeColor=none;" vertex="1" parent="1">
  <mxGeometry x="120" y="40" width="20" height="55" as="geometry"/>
</mxCell>

<!-- 目录条目示例 -->
<!-- value="第一部分  |  选题背景和意义"，fontSize=28，fontFamily=微软雅黑 -->
```