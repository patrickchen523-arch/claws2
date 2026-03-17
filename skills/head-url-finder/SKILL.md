---
name: head-url-finder
description: 获取游戏封面图URL。在拆解游戏时自动触发，根据游戏平台获取官方封面图URL。支持Steam和Google Play两种平台。
---

# 游戏封面图获取 Skill

用于在游戏拆解时自动获取游戏的封面图。

## 触发条件

当用户使用 game-analyse-sdd 拆解游戏时，根据游戏平台自动获取封面图。

## 工作流程

### Steam 游戏

1. 确认游戏在 Steam 上架
2. 获取 Steam App ID（用户需提供，或使用常见游戏ID列表）
3. 验证封面图 URL：
```
https://steamcdn-a.akamaihd.net/steam/apps/{app_id}/header.jpg
```
4. 返回 200 则记录 URL，否则留空

### Google Play 手游

1. 确认游戏在 Google Play 上架
2. 使用 google-play-scraper 搜索游戏获取 appId
3. 调用 `gplay.app({ appId })` 获取详情
4. 提取 `headerImage` 字段

## 代码示例

```javascript
const { default: gplay } = require('google-play-scraper');

// 搜索游戏
const results = await gplay.search({ term: '游戏名', num: 5 });
const appId = results[0].appId;

// 获取详情
const detail = await gplay.app({ appId });
const coverUrl = detail.headerImage; // 横版封面
```

## 输出格式

```markdown
### 封面图信息
- 平台: Steam / Google Play
- App ID: {id}
- 封面图URL: {url}
- 状态: 成功/失败
```

## 常见游戏 App ID

### Steam
| 游戏 | App ID |
|------|--------|
| CS2 | 730 |
| Dota 2 | 570 |
| 绝地求生 | 1091500 |
| 艾尔登法环 | 1245620 |
| 赛博朋克2077 | 1091500 |
| 巫师3 | 292030 |
| 只狼 | 814380 |
| 死亡细胞 | 574650 |
| 哈迪斯 | 1145360 |

### Google Play
| 游戏 | App ID |
|------|--------|
| 原神 | com.miHoYo.GenshinImpact |
| 崩坏：星穹铁道 | com.miHoYo.starrailglobal |
| 绝区零 | com.hoyoverse.zzzglobal |

## 注意事项

- 用户未提供 App ID 时，尝试从游戏名搜索
- 搜索失败则跳过，不要阻塞主流程
- 图片验证失败时记录失败状态
