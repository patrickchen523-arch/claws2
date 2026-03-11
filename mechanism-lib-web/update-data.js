const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';
const GAMES_DIR = '/root/.openclaw/agents/jizhi/workspace/games';
const DATA_FILE = path.join(__dirname, 'data.json');

// 复用主解析脚本的工具函数
const { parseMdFile, parseTable, extractField, extractTags, normalizeTags, extractGameInfo, extractMechanismInfo } = require('./generate-data.js');

/**
 * 增量更新数据文件
 * @param {string[]} newMechanisms - 新增机制卡文件路径数组
 * @param {string[]} newGames - 新增游戏卡文件路径数组
 */
function incrementalUpdate(newMechanisms = [], newGames = []) {
  console.log('\n========== 增量更新 ==========');
  
  // 读取现有数据
  let data = { mechanisms: {}, games: {}, stats: { mechanismCount: 0, gameCount: 0 } };
  if (fs.existsSync(DATA_FILE)) {
    data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    console.log(`现有数据: ${Object.keys(data.mechanisms).length} 机制, ${Object.keys(data.games).length} 游戏`);
  }
  
  let mechAdded = 0;
  let gameAdded = 0;
  
  // 处理新增机制卡
  for (const mechFile of newMechanisms) {
    try {
      const content = fs.readFileSync(mechFile, 'utf-8');
      const parsed = parseMdFile(content);
      const mechInfo = extractMechanismInfo(parsed.sections);
      
      if (mechInfo.title) {
        // 生成 key
        const dirName = path.basename(path.dirname(mechFile));
        const fileName = path.basename(mechFile, '.md');
        const key = `${dirName}-${fileName}`.toLowerCase().replace(/\s+/g, '-');
        
        data.mechanisms[key] = mechInfo;
        mechAdded++;
        console.log(`  ✓ 新增机制: ${mechInfo.title}`);
      }
    } catch (err) {
      console.error(`  ✗ 解析失败 ${mechFile}: ${err.message}`);
    }
  }
  
  // 处理新增游戏卡
  for (const gameFile of newGames) {
    try {
      const content = fs.readFileSync(gameFile, 'utf-8');
      const parsed = parseMdFile(content);
      const gameInfo = extractGameInfo(parsed.sections);
      
      if (gameInfo.title) {
        const fileName = path.basename(gameFile, '.md');
        const key = fileName.toLowerCase().replace(/\s+/g, '-');
        
        data.games[key] = gameInfo;
        gameAdded++;
        console.log(`  ✓ 新增游戏: ${gameInfo.title}`);
      }
    } catch (err) {
      console.error(`  ✗ 解析失败 ${gameFile}: ${err.message}`);
    }
  }
  
  // 更新统计
  data.stats.mechanismCount = Object.keys(data.mechanisms).length;
  data.stats.gameCount = Object.keys(data.games).length;
  
  // 保存
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  
  console.log(`\n更新完成: +${mechAdded} 机制, +${gameAdded} 游戏`);
  console.log(`总计: ${data.stats.mechanismCount} 机制, ${data.stats.gameCount} 游戏`);
  
  return { mechAdded, gameAdded };
}

// 如果直接运行此脚本
if (require.main === module) {
  const args = process.argv.slice(2);
  const newMechs = args.filter(f => f.includes('/mechanisms/') && f.endsWith('.md'));
  const newGames = args.filter(f => f.includes('/games/') && f.endsWith('.md'));
  
  if (newMechs.length === 0 && newGames.length === 0) {
    console.log('用法: node update-data.js <新增机制卡路径> [新增游戏卡路径]...');
    console.log('示例: node update-data.js /path/to/mech1.md /path/to/game1.md');
    process.exit(1);
  }
  
  incrementalUpdate(newMechs, newGames);
}

module.exports = { incrementalUpdate };
