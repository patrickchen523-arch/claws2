# Jizhi Design Library — 机制库展示网页

> 游戏机制可视化库 | 纯静态 HTML + JS | Python HTTP Server

---

## 文件说明

| 文件 | 用途 |
|------|------|
| `index.html` | 主展示页面（机制库/游戏库双Tab + 搜索 + 弹窗详情） |
| `generate-data.js` | 解析脚本：从 `/mechanisms/` 和 `/games/` 目录读取 MD 文件，生成 `data.json` |
| `data.json` | 数据库：包含 427 个机制卡 + 344 个游戏卡的全部字段 |
| `PM需求文档.md` | 功能需求文档 + 迭代历史 |
| `covers.json` | Steam 封面图 URL 映射表 |
| `merged-covers.json` | 多游戏封面图合并映射表 |
| `cover-map.json` | 封面图备用映射 |
| `steam-id-map.js` | Steam ID 映射工具脚本 |

---

## 运行方式

```bash
# 1. 进入目录
cd /root/.openclaw/workspace/mechanism-lib-web

# 2. 启动 HTTP 服务（端口 8888）
python3 -m http.server 8888

# 3. 访问
http://88.88.88.88:8888
```

---

## 数据更新

当机制库内容变更后，重新生成数据：

```bash
node generate-data.js
```

---

## 数据来源

- **机制库**：`/root/.openclaw/agents/jizhi/workspace/mechanisms/`
- **游戏库**：`/root/.openclaw/agents/jizhi/workspace/games/`
- **输出**：`data.json`

---

## 功能

- 机制库 / 游戏库 Tab 切换
- 关键词多字段搜索（标题/描述/标签/来源游戏）
- 标签点击跳转搜索
- 弹窗详情：来源游戏跳转 / 相似机制跳转 / 收录机制跳转
- 实时统计：机制数量 + 游戏数量
