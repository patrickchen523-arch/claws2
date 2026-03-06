---
name: ppt
description: "根据论文或汇报内容生成多页 Draw.io 或 HTML 格式 PPT，支持论文答辩与通用汇报两种模式，自动导出为 .html。当用户提到答辩 PPT、答辩幻灯片、通用 PPT、汇报 PPT、根据模板生成 PPT 时使用。"
metadata:
  version: "1.0.1"
---
# PPT 多页 Draw.io / HTML 生成（答辩 + 通用汇报）

> ⚠️ **重要更新**：推荐输出 **HTML 格式**，drawio2pptx 需要 Rust 编译环境，在多数服务器上安装困难。HTML 可直接在浏览器演示，或通过工具转为 PPT。

本 skill 支持两种模式，**共用** `ppt_template/`、`scripts/`、`reference/` 目录，以及 **Step 0 自定义模板**、**Step 1 确定内容与风格**、**Step 3 & 4 输出与导出** 全流程。

---

## 模式识别

| 模式 | 使用时机 | 内容来源 | 默认页序 | 输出文件 |
|------|----------|----------|----------|----------|
| **论文答辩** | 学位论文答辩、开题、预答辩 | paper-write 结构化提取 | 封面→目录→背景→现状→方法→创新点→实验→结论→致谢→Q&A | `paper-defense.drawio` |
| **通用汇报** | 工作汇报、产品介绍、演讲 | 用户消息提取/生成 | 封面→目录→节标题→内容页→总结→致谢→Q&A | `general-presentation.drawio` |

---

## Step 0：用户自定义模板（可选，两种模式共用）

若用户提供了自己的 `.pptx` 模板文件：

1. **模板放置**：将 `.pptx` 放入 `ppt_template/` 目录
2. **运行样式提取**：在 skill 根目录下执行：
   ```
   python scripts/analyze_pptx.py ppt_template/xxx.pptx reference/style-custom.md
   ```
3. 读取 `reference/style-custom.md` 作为「自定义风格」继续

**目录约定**：`ppt_template/` 存放模板、`scripts/analyze_pptx.py` 样式提取、`reference/` 风格文件

---

## Step 1：确定内容与风格（两种模式共用）

### 1.1 确定内容

- **论文答辩**：若用户只有论文全文：先调用 paper-write 的「结构化信息提取」；若已提供结构化信息：从消息中提取【论文题目】【学科方向】【答辩时长】【论文结构/目录】【各章核心内容】【创新点/贡献】等，缺失则追问
- **通用汇报**：从用户消息中提取幻灯片大纲及内容，或根据核心需求扩展为完整结构

### 1.2 选择风格

两种模式均可选择以下风格之一，**读取对应 reference 文件**获取配色、字体、版式规则与 XML 样式片段：

| # | 风格 | 主色 | 强调色 | reference 文件 |
|---|------|------|--------|---------------|
| 1 | 经典学术 / 商务严谨 | `#2C5160` | `#FF0000`（纯红） | `reference/style1-classic-academic.md` |
| 2 | 现代极简 / 大字报感 | `#231F20` | `#F5C638` | `reference/style2-minimal-bigtype.md` |
| 3 | 暖色学术 / 亲和力 | `#2C5160` | `#B7472A` | `reference/style3-warm-academic.md` |
| 4 | 科技明快 / 现代前沿 | `#0170C1` | 同主色 | `reference/style4-tech-modern.md` |
| 5 | 自定义 | 从 style-custom.md 提取 | | `reference/style-custom.md` |

- **论文答辩**：用户未指定时默认风格 1（学术蓝 #F8F9FA、#2C3E50、#3498DB）
- **通用汇报**：用户选择或根据语境自动推荐

---

## Step 2：生成多页 Draw.io XML

**必须先读取所选风格的 reference 文件**，基于该风格生成 XML。

- 画布：16:9（pageWidth=1920，pageHeight=1080）
- 页序：按模式识别表中的默认页序
- 页数：10 分钟约 10–12 页，15 分钟约 14–18 页
  - 含节标题过渡页（每章独立一页引入）时，10 分钟约 11 页；无过渡页时约 9 页
  - 节标题过渡页风格：大号数字 + 章节名，可参考 style2 风格或 style4（无过渡页）

**每页内容量要求（坑 #8，已验证）：**
- 每个 `<diagram>` 内容页（非封面/目录/节标题页）**必须包含 15 个以上 mxCell**（含背景、标题、正文、色块、装饰等）
- 节标题过渡页至少 8 个 cell；封面页至少 12 个 cell
- **绝对禁止出现只有 1~3 个 cell 的内容页**——这意味着内容未被正确写入该页，必须检查并补全

### ⚠️ 关键：必须使用 mxfile 多页格式（坑 #1，已验证）

**drawio2pptx 只识别 `<mxfile>` 根节点 + 多个 `<diagram>` 子节点的格式**，每个 `<diagram>` 对应一张幻灯片。

**禁止**使用单一 `<mxGraphModel>` 根节点横向铺排多页（会被识别为 1 张幻灯片）。

**正确格式模板（必须严格遵守）：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net">
  <diagram id="page1_unique_id" name="封面">
    <mxGraphModel dx="1422" dy="762" grid="0" gridSize="10" guides="1"
                  tooltips="1" connect="0" arrows="0" fold="0" page="1"
                  pageScale="1" pageWidth="1920" pageHeight="1080" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        <!-- 本页所有元素，x 坐标从 0 开始，不做跨页偏移 -->
      </root>
    </mxGraphModel>
  </diagram>
  <diagram id="page2_unique_id" name="目录">
    <mxGraphModel dx="1422" dy="762" grid="0" gridSize="10" guides="1"
                  tooltips="1" connect="0" arrows="0" fold="0" page="1"
                  pageScale="1" pageWidth="1920" pageHeight="1080" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        <!-- 本页所有元素，x 坐标同样从 0 开始 -->
      </root>
    </mxGraphModel>
  </diagram>
  <!-- 每页都是独立的 diagram，x/y 坐标均在 [0,1920]×[0,1080] 范围内 -->
</mxfile>
```

**每页坐标规则（坑 #2）：**
- 每个 `<diagram>` 内部的所有 mxCell **x 坐标从 0 开始**，不得偏移（不能用 1960、3920 等跨页偏移）
- 每页独立坐标系，背景矩形 `x="0" y="0" width="1920" height="1080"`
- `<mxCell id="0"/>` 和 `<mxCell id="1" parent="0"/>` 必须出现在每页 root 内

**每页 id 唯一性（坑 #3）：**
- 同一个文件内，**所有 diagram 的所有 mxCell id 必须全局唯一**
- 推荐命名规则：`p{页号}_{元素缩写}`，如 `p1_bg`、`p2_title`、`p3_box1`
- 绝对禁止不同页出现相同 id（会导致渲染错乱或解析失败）

**diagram id 唯一性（坑 #4）：**
- 每个 `<diagram>` 的 `id` 属性也必须唯一，推荐用 8 位随机字符串，如 `"aB3xKp7m"`

---

## Step 3 & 4：输出 Draw.io 并自动导出 PPT（两种模式共用）

### Step 3：输出 Draw.io 文件

将生成的 XML 写入工作区 `.drawio` 文件（论文答辩用 `paper-defense.drawio`，通用汇报用 `general-presentation.drawio`），并简述每页概要。

**文件写入注意（坑 #5）：**
- 同一个任务中如果多次调用 Write 写同一个文件名，后写的内容会覆盖前面的
- 必须**一次性写入完整内容**，不可分多次追加
- 若单次生成内容超长，**不可分割后合并**（XML 合并极易出错）；正确做法是减少每页装饰细节、合并相似页，确保能一次完整输出

### Step 4：自动导出 PPT（必执行）

生成 `.drawio` 后，**必须**自动执行：

1. `pip install drawio2pptx -q`
2. 切换到 `.drawio` 文件所在目录（**必须先 cd/Set-Location，否则找不到文件**）：
   ```powershell
   Set-Location "d:\你的项目目录"
   drawio2pptx <文件名>.drawio <文件名>.pptx
   ```
3. 验证输出：`dir <文件名>.pptx`，确认文件存在且页数正确（输出中有 `Saved xxx.pptx (N slides)`）
4. 若失败，提示用户手动执行

**导出验证（坑 #6）：**
- drawio2pptx 输出的 `(N slides)` 数字 **必须等于 diagram 数量**
- 若显示 `(1 slides)` 而预期多页，说明 XML 格式错误（触发了坑 #1），需检查是否用了单根 `mxGraphModel` 格式

**生成后自验（坑 #8 预防）：**
在写入文件前，在脑中或用 Python 快速统计每个 `<diagram>` 内的 `<mxCell>` 数量：
```python
import xml.etree.ElementTree as ET
root = ET.parse('paper-defense-styleX-mp.drawio').getroot()
for d in root:
    cells = [c for c in d.find('mxGraphModel/root') if c.get('id') not in ('0','1')]
    print(d.get('name'), len(cells))
```
若任意页 cells < 5，说明内容生成不完整，必须重新补全该页。

### 注意事项

- XML 标签正确闭合，特殊字符转义（`&`→`&amp;`，`<`→`&lt;`）
- 每页布局：背景全画布矩形、标题区 44–56pt、正文 24–32pt、留白充足
- Windows 下不支持 `tail` 命令，Shell 输出截断请用 PowerShell 的 `Select-Object -Last N` 替代

---

## 附：若需批量生成多个风格（坑 #7）

当用户要求同时生成多个风格时：
- 每种风格写入**独立文件名**，如 `paper-defense-style1.drawio`、`paper-defense-style2.drawio`
- 每种风格**单独调用** drawio2pptx 导出
- 不要尝试把多种风格写入同一个 drawio 文件