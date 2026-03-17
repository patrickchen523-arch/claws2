# RAWG API Skill

用于通过 RAWG Video Games Database API 获取游戏信息。

## 基础信息

- **API文档**: https://api.rawg.io/docs/
- **需要API Key**: https://rawg.io/apidocs (免费注册获取)
- **基础URL**: `https://api.rawg.io/api`

## 常用端点

### 1. 搜索游戏
```
GET /api/games?key=YOUR_API_KEY&search=GAME_NAME
```

参数:
- `search` - 游戏名称关键词
- `page_size` - 返回数量 (默认10)
- `page` - 页码

### 2. 游戏详情
```
GET /api/games/{id}?key=YOUR_API_KEY
```

### 3. 热门游戏
```
GET /api/games?key=YOUR_API_KEY&ordering=-rating&page_size=10
```

### 4. 按平台筛选
```
GET /api/games?key=YOUR_API_KEY&platforms=pc,ps5,xbox
```

## 使用示例

### 命令行 curl
```bash
# 搜索游戏
curl "https://api.rawg.io/api/games?key=YOUR_API_KEY&search=zelda"

# 热门游戏
curl "https://api.rawg.io/api/games?key=YOUR_API_KEY&ordering=-metacritic&page_size=20"

# 游戏详情
curl "https://api.rawg.io/api/games/3498?key=YOUR_API_KEY"
```

### JavaScript fetch
```javascript
const API_KEY = 'YOUR_RAWG_API_KEY';

// 搜索游戏
async function searchGames(query) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(query)}&page_size=10`
  );
  const data = await res.json();
  return data.results.map(g => ({
    name: g.name,
    released: g.released,
    rating: g.rating,
    platforms: g.platforms?.map(p => p.platform.name),
    background_image: g.background_image
  }));
}

// 获取游戏详情
async function getGameDetails(id) {
  const res = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  return res.json();
}
```

## 返回字段说明

游戏列表返回:
- `name` - 游戏名称
- `released` - 发售日期
- `rating` - 评分 (1-5)
- `metacritic` - Metacritic评分
- `background_image` - 封面图
- `platforms` - 平台列表
- `genres` - 类型列表
- `short_screenshots` - 截图列表

## 速率限制

- 免费版: 20,000请求/天
- 每月1次API Key更新

## 配置

在 TOOLS.md 中添加:
```markdown
### RAWG API
- API Key: [从 https://rawg.io/apidocs 获取]
```
