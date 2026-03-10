#!/usr/bin/env node
/**
 * 机制库同步验证脚本
 * 
 * 功能：
 * 1. 扫描所有机制卡，验证来源游戏是否在游戏库
 * 2. 自动补充/清理游戏卡的收录机制
 * 3. 输出异常报告
 * 
 * 使用：node sync-mechanisms.js
 */

const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';
const GAMES_DIR = '/root/.openclaw/agents/jizhi/workspace/games';

console.log('='.repeat(60));
console.log('机制库同步验证脚本');
console.log('='.repeat(60));

// 1. 收集所有游戏（用于匹配）
const games = {};
const gameFiles = fs.readdirSync(GAMES_DIR).filter(f => f.endsWith('.md'));

console.log(`\n[1/4] 加载游戏库 (${gameFiles.length} 个)...`);

for (const file of gameFiles) {
  const content = fs.readFileSync(path.join(GAMES_DIR, file), 'utf-8');
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const gameNameMatch = content.match(/游戏名称[^:]*[:：]\s*(.+)/);
  const key = file.replace('.md', '');
  
  games[key] = {
    key,
    title: titleMatch ? titleMatch[1] : '',
    gameName: gameNameMatch ? gameNameMatch[1].trim() : '',
    content
  };
}

console.log(`  ✓ 加载完成`);

// 2. 扫描所有机制卡
console.log(`\n[2/4] 扫描机制库...`);

const mechanisms = [];
const issues = []; // 异常记录

const mechDirs = fs.readdirSync(MECHANISMS_DIR);
for (const dir of mechDirs) {
  const dirPath = path.join(MECHANISMS_DIR, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    // 跳过误放的游戏卡
    if (file.includes('gamecard') || file.includes('游戏卡')) {
      issues.push({ type: 'gamecard_in_mechanisms', file: `${dir}/${file}` });
      continue;
    }
    
    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    
    // 提取来源游戏
    let gameName = '';
    const sourceMatch = content.match(/来源游戏\s*\|\s*🔗\s*\*?([^*]+)\*/);
    if (sourceMatch) {
      gameName = sourceMatch[1].trim();
    }
    
    if (!gameName && titleMatch) {
      const parts = titleMatch[1].split('-');
      if (parts.length >= 2) {
        gameName = parts[1].trim();
      }
    }
    
    // 查找对应的游戏卡
    let matchedGame = null;
    if (gameName) {
      for (const [key, game] of Object.entries(games)) {
        const searchName = gameName.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
        const gameTitle = game.title.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
        const gameKeyName = game.gameName.toLowerCase().replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
        
        if (gameTitle.includes(searchName) || gameKeyName.includes(searchName) ||
            searchName.includes(gameTitle) || searchName.includes(gameKeyName) ||
            key.toLowerCase().includes(searchName)) {
          matchedGame = { key, ...game };
          break;
        }
      }
    }
    
    mechanisms.push({
      dir,
      file,
      title: titleMatch ? titleMatch[1] : '',
      gameName,
      matchedGame
    });
  }
}

console.log(`  ✓ 扫描完成 (${mechanisms.length} 个机制)`);

// 3. 统计并更新游戏卡
console.log(`\n[3/4] 更新游戏卡...`);

let addCount = 0;
let cleanCount = 0;

for (const [gameKey, game] of Object.entries(games)) {
  const mechForGame = mechanisms.filter(m => m.matchedGame && m.matchedGame.key === gameKey);
  
  if (mechForGame.length === 0) continue;
  
  const mechNames = mechForGame.map(m => `- ${m.title}`).join('\n');
  
  // 检查当前内容
  let content = game.content;
  let updated = false;
  
  // 检查是否有待关联标记
  if (content.includes('（待关联')) {
    content = content.replace('（待关联该游戏下的机制卡）', mechNames);
    updated = true;
    addCount += mechForGame.length;
  } else {
    // 检查是否需要更新
    let hasAll = true;
    for (const m of mechForGame) {
      if (!content.includes(m.title)) {
        hasAll = false;
        break;
      }
    }
    
    if (!hasAll) {
      // 找到收录机制部分
      if (content.includes('收录机制')) {
        // 追加
        const existing = content.match(/收录机制[^:]*：[^\n]*([\s\S]+?)(?=##|$)/);
        if (existing) {
          content = content.replace(existing[0], existing[0] + '\n' + mechNames);
          updated = true;
          addCount += mechForGame.length;
        }
      }
    }
  }
  
  if (updated) {
    fs.writeFileSync(path.join(GAMES_DIR, gameKey + '.md'), content);
  }
}

console.log(`  ✓ 更新完成 (新增 ${addCount} 条关联)`);

// 4. 输出报告
console.log(`\n[4/4] 异常报告`);

const noGame = mechanisms.filter(m => !m.matchedGame);
const hasGame = mechanisms.filter(m => m.matchedGame);

console.log(`\n总计: ${mechanisms.length} 个机制`);
console.log(`  有游戏卡关联: ${hasGame.length}`);
console.log(`  无游戏卡关联: ${noGame.length}`);

if (noGame.length > 0) {
  console.log(`\n⚠️ 无游戏卡关联的机制 (前10个):`);
  noGame.slice(0, 10).forEach(m => {
    console.log(`  - ${m.title} (来源: ${m.gameName || m.dir})`);
  });
}

if (issues.length > 0) {
  console.log(`\n⚠️ 异常问题:`);
  issues.forEach(i => {
    console.log(`  - [${i.type}] ${i.file}`);
  });
}

console.log(`\n` + '='.repeat(60));
console.log('完成！');
console.log('='.repeat(60));
