const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';

// 游戏名 → 人数规模映射（更完整）
const GAME_POPULATION_MAP = {
  // 大逃杀
  '和平精英': '单局100人（单队4人）',
  '绝地求生': '单局100人（单队4人）',
  '使命召唤战区': '单局150人（单队3人）',
  'Call of Duty Warzone': '单局150人（单队3人）',
  'APEX': '单局60人（单队3人）',
  'Fortnite': '单局100人（单队4人）',
  
  // MOBA
  '王者荣耀': '单局10人（5v5）',
  '英雄联盟': '单局10人（5v5）',
  'League of Legends': '单局10人（5v5）',
  'DOTA2': '单局10人（5v5）',
  '300英雄': '单局14人（单队7人）',
  '决战平安京': '单局10人（5v5）',
  'Onmyoji': '单局10人（5v5）',
  '时空召唤': '单局10人（5v5）',
  
  // 搜打撤
  '逃离塔科夫': '单局1-6人（3人组队）',
  'Tarkov': '单局1-6人（3人组队）',
  '暗区突围': '单局1-6人（3人组队）',
  'ArenaBreakout': '单局1-6人（3人组队）',
  'ARC Raiders': '单局1-6人（3人组队）',
  'Marathon': '单局1-6人（3人组队）',
  '失落星船': '单局1-6人（3人组队）',
  '三角洲行动': '单局1-4人（4人组队）',
  'DeltaForce': '单局1-4人（4人组队）',
  '萤火突击': '单局1-4人（4人组队）',
  'LostLight': '单局1-4人（4人组队）',
  
  // 自走棋
  '刀塔自走棋': '单局8人',
  'AutoChess': '单局8人',
  '云顶之弈': '单局8人',
  'TeamFight Tactics': '单局8人',
  '酒馆战棋': '单局8人',
  'Battlegrounds': '单局8人',
  
  // 非对称对抗
  '鹅鸭杀': '单局6-15人',
  'Goose Goose Duck': '单局6-15人',
  '德州电锯杀人狂': '单局4人（1v3）',
  '超自然行动组': '单局4人（2v2）',
  'Phasmophobia': '单局4人（1v3）',
  
  // 合作PVE
  '绝地潜兵2': '单局1-4人',
  'Helldivers2': '单局1-4人',
  'Payday3': '单局1-4人',
  'Payday 3': '单局1-4人',
  '7 Days to Die': '单局1人/最多8人合作',
  '7DaysToDie': '单局1人/最多8人合作',
  'Rust': '单局1人/最多10人',
  'The Forest': '单局1-8人',
  'Valheim': '单局1-10人',
  
  // MMO
  '魔兽世界': '单局1人/联盟GVG',
  'World of Warcraft': '单局1人/联盟GVG',
  'WorldOfWarcraft': '单局1人/联盟GVG',
  '最终幻想14': '单局1-24人副本',
  'Final Fantasy XIV': '单局1-24人副本',
  'FF14': '单局1-24人副本',
  '剑网3': '单局1人/联盟GVG',
  'JX3': '单局1人/联盟GVG',
  '阿尔比恩': '单局1-100人',
  'Albion Online': '单局1-100人',
  
  // 战棋
  '高级战争': '单局2-4人',
  '陷阵之志': '单局2人',
  'Royal': '单局2-4人',
  'TacticsOgre': '单局2-4人',
  '火焰纹章': '单局2人',
  'FireEmblem': '单局2人',
  '文明6': '单局1-8人',
  'Civilization': '单局1-8人',
  '帝国时代': '单局1-8人',
  'AgeOfEmpires': '单局1-8人',
  
  // 卡牌
  '炉石传说': '单局2人',
  'Hearthstone': '单局2人',
  '昆特牌': '单局2人',
  'Gwent': '单局2人',
  '影之诗': '单局2人',
  'Shadowverse': '单局2人',
  '游戏王': '单局2人',
  'YuGiOh': '单局2人',
  
  // 赛车
  '地平线5': '单局1人',
  'ForzaHorizon': '单局1人',
  '马里奥赛车': '单局4人',
  'Mario Kart': '单局4人',
  'QQ飞车': '单局4人',
  
  // 模拟经营
  '都市天际线': '单局1人',
  '戴森球计划': '单局1人',
  '双点医院': '单局1人',
  
  // 单人RPG
  '黑神话': '单局1人',
  '艾尔登法环': '单局1人',
  'Elden Ring': '单局1人',
  '塞尔达传说': '单局1人',
  'Zelda': '单局1人',
  '博德之门3': '单局1-4人',
  '暗黑地牢': '单局1-4人',
  
  // 塔防
  '明日方舟': '单局1人',
  'Arknights': '单局1人',
  '保卫萝卜': '单局1人',
  '王国保卫战': '单局1人',
  
  // 足球
  'FC': '单局2人',
  '最佳11人': '单局2人',
  
  // 其他常见游戏
  'ClashRoyale': '单局2人',
  'Inkbound': '单局1-4人',
  'Barony': '单局1-4人',
  'Armored Core': '单局1人',
  'TheForest': '单局1-8人',
  'EVE': '单局1人',
  'COK': '单局联盟GVG',
  '三国冰河时代': '单局联盟GVG',
  'Legends of Runeterra': '单局2人',
  '三国谋定天下': '单局联盟GVG',
  '超自然行动组': '单局4人（2v2）',
  '皇家骑士团2': '单局2-4人',
  'Tactics Ogre': '单局2-4人',
};

// 从文件内容中提取游戏名
function extractGameName(content) {
  // 方式1: 从"来源游戏"字段提取
  const sourceMatch = content.match(/来源游戏[：:]\s*\*?([^\*\n]+)/);
  if (sourceMatch) {
    return sourceMatch[1].replace(/[*🔗]/g, '').trim();
  }
  
  // 方式2: 从标题提取
  const titleMatch = content.match(/#\s+\[([^\]]+)\]-([^-]+)-/);
  if (titleMatch) {
    return titleMatch[2].trim();
  }
  
  return null;
}

// 匹配游戏名返回正确的人数规模
function getPopulation(gameName) {
  if (!gameName) return null;
  
  // 清理游戏名
  const cleanName = gameName.replace(/[,，].*$/, '').trim();
  
  // 精确匹配
  if (GAME_POPULATION_MAP[cleanName]) {
    return GAME_POPULATION_MAP[cleanName];
  }
  
  // 模糊匹配
  for (const [key, value] of Object.entries(GAME_POPULATION_MAP)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return value;
    }
  }
  
  return null;
}

// 处理单个文件
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 检查是否已有"玩法层级"章节
  if (!content.includes('### 玩法层级')) {
    return false;
  }
  
  // 从文件中提取游戏名
  const gameName = extractGameName(content);
  if (!gameName) {
    return false;
  }
  
  // 匹配正确的人数规模
  const correctPopulation = getPopulation(gameName);
  if (!correctPopulation) {
    return false;
  }
  
  // 检查当前人数规模是否错误
  const hasWrongTag = content.includes('单局5人/单队5人');
  if (!hasWrongTag) {
    return false;
  }
  
  // 替换错误标签
  content = content.replace(/单局5人\/单队5人/g, correctPopulation);
  
  fs.writeFileSync(filePath, content);
  return true;
}

// 遍历所有目录
let processed = 0;
let skipped = 0;
const dirs = fs.readdirSync(MECHANISMS_DIR);

for (const dir of dirs) {
  const dirPath = path.join(MECHANISMS_DIR, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    
    try {
      if (processFile(filePath)) {
        processed++;
      } else {
        skipped++;
      }
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }
}

console.log(`处理完成：修复 ${processed} 个，跳过 ${skipped} 个`);
