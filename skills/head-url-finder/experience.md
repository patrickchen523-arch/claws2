# head-url-finder 经验总结

## 技能简介
用于查找游戏封面图 URL。支持 Steam、Google Play、RAWG API 等来源。

## 使用经验

### 1. 封面图来源

| 来源 | URL 格式 | 适用平台 |
|------|----------|----------|
| Steam | `https://steamcdn-a.akamaihd.net/steam/apps/{appid}/header.jpg` | PC Steam |
| Google Play | `https://play-lh.googleusercontent.com/...` | Android/iOS |
| RAWG API | `https://api.rawg.io/api/games?search=GAME_NAME` | 通用 |

### 2. 搜索方法

**SteamDB 搜索**：
1. 访问 https://steamdb.info/search/ 搜索游戏名
2. 获取 appid
3. 拼接 header.jpg URL

**Steam Store 搜索**：
1. 访问 https://store.steampowered.com/search/
2. 获取 appid

**Google Play 搜索**：
1. 访问 https://play.google.com/store/apps
2. 获取图标 URL

### 3. 覆盖情况

根据 2026-03-18 扫描结果：
- 已有 URL：103 个（通过 covers.json）
- 游戏卡缺失：299 个
- 机制卡缺失：268 个

**主要未覆盖游戏类型**：
- 中国手游（阿拉德之怒、荒野乱斗等）
- 非 Steam 主机游戏
- 需要手动搜索的游戏

### 4. 批量处理

**子任务流程**：
1. 读取 data.json 获取缺失 URL 的游戏/机制列表
2. 遍历搜索 SteamDB/Google Play
3. 更新对应文件的"封面图"字段

## 常见问题

### Q: 非 Steam 游戏找不到封面
**A**: 使用 Google Play 搜索手游，SteamDB 搜索 PC 游戏

### Q: URL 无效
**A**: 检查 appid 是否正确，尝试不同的 URL 格式

### Q: 大量游戏需要手动处理
**A**: 建立 mapping 文件（covers.json）自动映射

## 更新日志
- 2026-03-18: 初始版本
