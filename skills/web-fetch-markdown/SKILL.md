---
name: web-fetch-markdown
description: 将网页转换为 Markdown 格式的工具。当需要获取网页内容进行阅读、分析或提取信息时使用此技能。适用于新闻文章、文档页面、博客等需要抓取文字内容的场景。
---

# Web Fetch Markdown

将网页转换为 Markdown 格式，方便阅读和提取内容。

## 使用方法

按优先级尝试以下前缀：

1. **Cloudflare 站点**：在 URL 前加 `https://markdown.new/`
   - 例如：`https://markdown.new/https://example.com`

2. **其他网站**：使用 Jina.ai Reader
   - 例如：`https://r.jina.ai/https://example.com`

## 决策流程

```
网页内容抓取?
    │
    ├─ 是 Cloudflare 站点? ──→ markdown.new/ ✓
    │
    └─ 其他情况 ──────────────→ r.jina.ai/ ✓
```

## 示例

- 原始 URL: `https://example.com/article`
- Cloudflare 站点: `https://markdown.new/https://example.com/article`
- 备选: `https://r.jina.ai/https://example.com/article`
