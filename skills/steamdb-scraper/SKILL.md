---
name: steamdb-scraper
description: 爬取 SteamDB 网站数据的工具。用于获取 Steam 游戏排行、玩家数据等信息。
---

# SteamDB Scraper

爬取 SteamDB 网站数据。

## 方法

使用 Playwright 无头浏览器，因为 SteamDB 有较强的 Cloudflare 保护，普通请求会被拦截。

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('https://steamdb.info/')
    page.wait_for_load_state('networkidle')
    content = page.content()
    # 解析内容...
    browser.close()
```

## 注意事项

- 需要安装 playwright 和 patchright
- headless 模式可以绑过 Cloudflare
- 如果失败可以尝试添加更多 stealth 参数
