# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Web Fetching

**默认使用 Jina.ai Reader 抓取网页内容。**
在原始 URL 前加前缀：`https://r.jina.ai/<原始URL>`
例如：`https://r.jina.ai/https://example.com`


## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

## 机制库路径

**正确的机制库存放路径**：
`/root/.openclaw/agents/jizhi/workspace/mechanisms/`

**注意**：不要写到 `/root/.openclaw/workspace/mechanism-lib/`（错误的旧路径，已删除）
