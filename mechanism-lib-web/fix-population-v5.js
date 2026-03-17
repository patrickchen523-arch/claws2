const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';

// 完整游戏人数规模映射表（带别名）
const GAME_POPULATION_ALIASES = {
  // 大逃杀
  '和平精英': '单局100人（单队4人）',
  '绝地求生': '单局100人（单队4人）',
  '使命召唤战区': '单局150人（单队3人）',
  '使命召唤：现代战争3': '单局6-12人',
  'APEX': '单局60人（单队3人）',
  'Fortnite': '单局100人（单队4人）',
  
  // MOBA
  '王者荣耀': '单局10人（5v5）',
  '英雄联盟': '单局10人（5v5）',
  'League of Legends': '单局10人（5v5）',
  'LoL': '单局10人（5v5）',
  'DOTA2': '单局10人（5v5）',
  '300英雄': '单局14人（单队7人）',
  '决战平安京': '单局10人（5v5）',
  
  // 搜打撤
  '逃离塔科夫': '单局1-6人（3人组队）',
  '暗区突围': '单局1-6人（3人组队）',
  '暗区突围：无限': '单局1-6人（3人组队）',
  'ARC Raiders': '单局1-6人（3人组队）',
  'Marathon': '单局1-6人（3人组队）',
  '失落星船': '单局1-6人（3人组队）',
  '三角洲行动': '单局1-4人（4人组队）',
  '萤火突击': '单局1-4人（4人组队）',
  
  // 自走棋
  '刀塔自走棋': '单局8人',
  '云顶之弈': '单局8人',
  '酒馆战棋': '单局8人',
  
  // 非对称
  '鹅鸭杀': '单局6-15人',
  '德州电锯杀人狂': '单局4人（1v3）',
  "Liar's Bar": '单局4人（1v3）',
  '超自然行动组': '单局4人（2v2）',
  
  // 合作PVE
  '绝地潜兵2': '单局1-4人',
  'Payday3': '单局1-4人',
  '7 Days to Die': '单局1人/最多8人合作',
  'Rust': '单局1人/最多10人',
  'The Forest': '单局1-8人',
  'Valheim': '单局1-10人',
  
  // MMO
  '魔兽世界': '单局1人/联盟GVG',
  '最终幻想14': '单局1-24人副本',
  'FF14': '单局1-24人副本',
  '剑网3': '单局1人/联盟GVG',
  '阿尔比恩': '单局1-100人',
  'Albion Online': '单局1-100人',
  '创世灰烬': '单局1-100人',
  'Ashes of Creation': '单局1-100人',
  'Justice': '单局1人/联盟GVG',
  '逆水寒': '单局1人/联盟GVG',
  '天涯明月刀': '单局1人/联盟GVG',
  
  // 回合制MMO
  '幻唐志': '单局1人',
  '幻唐志：逍遥外传': '单局1人',
  '长安幻想': '单局1人',
  '梦幻新诛仙': '单局1人',
  
  // 战棋
  '高级战争': '单局2-4人',
  '陷阵之志': '单局2人',
  '皇家骑士团2': '单局2-4人',
  '火焰纹章': '单局2人',
  '文明6': '单局1-8人',
  '帝国时代': '单局1-8人',
  '星际争霸2': '单局1-8人',
  '红色警戒3': '单局2-8人',
  'Red Alert': '单局2-8人',
  'XCOM 2': '单局2-6人',
  '英雄连': '单局2-4人',
  'Company of Heroes': '单局2-4人',
  '最高指挥官': '单局2-8人',
  'Stellaris': '单局1-8人',
  'Ark Nova': '单局2人',
  '神界原罪2': '单局1-4人',
  'Divinity': '单局1-4人',
  'Langrisser': '单局2人',
  '梦幻模拟战': '单局2人',
  
  // 卡牌
  '炉石传说': '单局2人',
  'Hearthstone': '单局2人',
  '昆特牌': '单局2人',
  'Gwent': '单局2人',
  '影之诗': '单局2人',
  'Shadowverse': '单局2人',
  '游戏王': '单局2人',
  'Legends of Runeterra': '单局2人',
  '我叫MT': '单局2人',
  
  // 赛车
  '地平线5': '单局1人',
  'ForzaHorizon': '单局1人',
  '马里奥赛车': '单局4人',
  'Mario Kart': '单局4人',
  'QQ飞车': '单局4人',
  '极品飞车': '单局1人',
  'Need for Speed': '单局1人',
  '巅峰极速': '单局1人',
  '山脊赛车': '单局1人',
  '真实赛车3': '单局1人',
  'Team Sonic Racing': '单局4人',
  
  // 模拟经营
  '都市天际线': '单局1人',
  '戴森球计划': '单局1人',
  '双点医院': '单局1人',
  '动物园之星': '单局1人',
  '过山车大亨3': '单局1人',
  '开心猫舍': '单局1人',
  '心动小镇': '单局1人',
  '梦幻家园': '单局1人',
  '摩尔庄园': '单局1人',
  'My Garden World': '单局1人',
  
  // RPG/ARPG
  '黑神话': '单局1人',
  '黑神话：悟空': '单局1人',
  '艾尔登法环': '单局1人',
  'Elden Ring': '单局1人',
  '塞尔达传说': '单局1人',
  'Zelda': '单局1人',
  '博德之门3': '单局1-4人',
  '暗黑地牢': '单局1-4人',
  'Darkest Dungeon': '单局1-4人',
  '暗黑破坏神4': '单局1-4人',
  'Diablo': '单局1-4人',
  '流放之路': '单局1人',
  'Path of Exile': '单局1人',
  'POE2': '单局1人',
  'Path of Exile 2': '单局1人',
  '原神': '单局1人',
  'Genshin Impact': '单局1人',
  'GenshinImpact': '单局1人',
  '崩坏：星穹铁道': '单局1人',
  '星穹铁道': '单局1人',
  '鸣潮': '单局1人',
  'Wuthering Waves': '单局1人',
  '幻塔': '单局1人',
  'Tower of Fantasy': '单局1人',
  '仁王': '单局1人',
  '师父': '单局1人',
  'Sifu': '单局1人',
  '宝可梦传说': '单局1人',
  'Pokemon Legends': '单局1人',
  'PokemonLegendsArceus': '单局1人',
  '女神异闻录5': '单局1人',
  'Persona 5': '单局1人',
  '异度之刃3': '单局1人',
  'Xenoblade': '单局1人',
  'DNF': '单局1人',
  'DNF Origins': '单局1人',
  '地下城与勇士': '单局1人',
  '诛仙世界': '单局1人',
  'LikeADragon8': '单局1人',
  '崩坏3': '单局1人',
  'Zenless Zone Zero': '单局1人',
  '绝区零': '单局1人',
  
  // 塔防
  '明日方舟': '单局1人',
  'Arknights': '单局1人',
  '保卫萝卜': '单局1人',
  '王国保卫战': '单局1人',
  '植物大战僵尸': '单局1人',
  
  // 足球
  'FC': '单局2人',
  'EA Sports FC': '单局2人',
  '最佳11人': '单局2人',
  '闪电十一人': '单局2人',
  
  // 动作/格斗
  'Armored Core': '单局1人',
  'Armored Core 6': '单局1人',
  '装甲核心': '单局1人',
  '街机': '单局1人',
  '快打旋风': '单局1人',
  '名将': '单局1人',
  '恐龙快打': '单局1人',
  '龙王战士': '单局1人',
  'Metal Slug': '单局1人',
  'Knights of Valour': '单局1人',
  '罪恶装备': '单局2人',
  'Guilty Gear': '单局2人',
  '街霸': '单局2人',
  'Street Fighter': '单局2人',
  'Street Fighter 6': '单局2人',
  '铁拳': '单局2人',
  'Tekken': '单局2人',
  'Mortal Kombat': '单局2人',
  'Mortal Kombat 11': '单局2人',
  '真人快打': '单局2人',
  '灵魂能力': '单局2人',
  'Soulcalibur': '单局2人',
  '火影忍者': '单局1人',
  'Naruto Mobile': '单局1人',
  'Another Crab\'s Treasure': '单局1人',
  '海洋深处': '单局1人',
  
  // 音游
  'DJMAX': '单局1人',
  'Deemo': '单局1人',
  'Phigros': '单局1人',
  'osu': '单局1人',
  
  // 射击
  'Counter-Strike': '单局10人（5v5）',
  'CS2': '单局10人（5v5）',
  '反恐精英2': '单局10人（5v5）',
  '反恐精英': '单局10人（5v5）',
  '使命召唤': '单局6-12人',
  'Call of Duty': '单局6-12人',
  
  // 开放世界
  'Sea of Thieves': '单局1-4人',
  '盗贼之海': '单局1-4人',
  
  // 生存
  'Project Zomboid': '单局1-8人',
  '僵尸毁灭工程': '单局1-8人',
  '雾锁王国': '单局1-8人',
  'Enshrouded': '单局1-8人',
  'V Rising': '单局1-4人',
  '潜水员戴夫': '单局1人',
  
  // 其他
  'ClashRoyale': '单局2人',
  'Inkbound': '单局1-4人',
  'Barony': '单局1-4人',
  'EVE': '单局1人',
  'COK': '单局联盟GVG',
  '三国冰河时代': '单局联盟GVG',
  '三国谋定天下': '单局联盟GVG',
  '三国志战略版': '单局联盟GVG',
  '无尽冬日': '单局1人',
  '卡厄思梦境': '单局1-4人',
  '赛马娘': '单局1人',
  'Uma Musume': '单局1人',
  '出发吧麦芬': '单局1-2人',
  '裁判模拟器': '单局1人',
  '墟土之争': '单局1-8人',
  'VAMPIR': '单局1-4人',
  'PEAK': '单局1-4人',
  'Pokopia': '单局1人',
  '废墟图书馆': '单局1人',
  'Library of Ruina': '单局1人',
  'Luck Be a Landlord': '单局1人',
  'Balatro': '单局1人',
  'Splatoon 3': '单局4人',
  '斯普拉遁3': '单局4人',
  '卡拉彼丘': '单局4人',
  '漫威争锋': '单局6人（3v3）',
  'Marvel Rivals': '单局6人（3v3）',
  '永劫无间': '单局4人或60人',
  'Naraka Bladepoint': '单局4人或60人',
  'GTA Online': '单局1-4人',
  'Expedition 33': '单局1人',
  '杖剑传说': '单局1人',
  'BuriedBornes2': '单局1人',
  'TianDiJie': '单局1人',
  'NZ2': '单局1人',
  '家园2': '单局2-8人',
  '魔兽争霸3': '单局1-8人',
};

// 从文件内容中提取游戏名
function extractGameName(content) {
  const sourceMatch = content.match(/来源游戏[：:]\s*\*?([^\*\n]+)/);
  if (sourceMatch) {
    return sourceMatch[1].replace(/[*🔗]/g, '').trim();
  }
  
  const titleMatch = content.match(/#\s+\[([^\]]+)\]-([^-]+)-/);
  if (titleMatch) {
    return titleMatch[2].trim();
  }
  
  return null;
}

// 匹配游戏名返回正确的人数规模
function getPopulation(gameName) {
  if (!gameName) return null;
  
  const cleanName = gameName.replace(/[,，].*$/, '').trim();
  
  // 精确匹配
  if (GAME_POPULATION_ALIASES[cleanName]) {
    return GAME_POPULATION_ALIASES[cleanName];
  }
  
  // 模糊匹配
  for (const [key, value] of Object.entries(GAME_POPULATION_ALIASES)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return value;
    }
  }
  
  return null;
}

// 处理单个文件
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('### 玩法层级')) {
    return false;
  }
  
  const gameName = extractGameName(content);
  if (!gameName) {
    return false;
  }
  
  const correctPopulation = getPopulation(gameName);
  if (!correctPopulation) {
    return false;
  }
  
  const hasWrongTag = content.includes('单局5人/单队5人');
  if (!hasWrongTag) {
    return false;
  }
  
  content = content.replace(/单局5人\/单队5人/g, correctPopulation);
  
  fs.writeFileSync(filePath, content);
  return true;
}

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
