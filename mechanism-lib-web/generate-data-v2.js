#!/usr/bin/env node
/**
 * generate-data.js
 * 解析 mechanism-lib-2-0 目录，生成 data.json
 * 输出到 ../mechanism-lib-web/data.json（相对于本脚本所在目录）
 */

const fs = require('fs');
const path = require('path');

// 解析 Markdown 表格（处理跨行单元格）
function parseMarkdownTable(content) {
  const lines = content.split('\n');
  const rows = [];
  let inTable = false;
  let headers = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // 表头行
    if (trimmed.startsWith('|') && !trimmed.includes('---')) {
      const cells = trimmed.split('|').filter((c, i, a) => c.trim() && i > 0 && i < a.length);
      if (cells.length > 0 && !inTable) {
        headers = cells.map(c => c.trim());
        inTable = true;
        continue;
      }
      if (inTable && !trimmed.match(/^\|[\s\-|:]+\|$/)) {
        const cells = trimmed.split('|').filter((c, i, a) => i > 0 && i < a.length);
        if (cells.length === headers.length) {
          const row = {};
          headers.forEach((h, i) => {
            row[h] = cells[i].trim();
          });
          rows.push(row);
        }
      }
    } else if (inTable && trimmed.match(/^\|[\s\-|:]+\|$/)) {
      // 分隔行，跳过
      continue;
    } else if (inTable) {
      inTable = false;
    }
  }
  return rows;
}

// 从 Markdown 内容提取字段
function extractField(content, fieldNames) {
  for (const field of fieldNames) {
    const patterns = [
      new RegExp(`${field}\\s*[:：]\\s*([^\\n]+)`),
      new RegExp(`\\|\\s*${field}\\s*\\|\\s*([^|\\n]+)`),
    ];
    for (const p of patterns) {
      const m = content.match(p);
      if (m) return m[1].trim();
    }
  }
  return null;
}

// 从 Markdown 内容提取标签数组
function extractTags(content) {
  const patterns = [
    /标签[信息]?\s*\n((?:\s*[-*]\s*[^\n]+\n?)+)/,
    /标签[信息]?[:：]\s*\[([^\]]+)\]/,
    /核心标签[:：]\s*([^|]+)/,
  ];
  for (const p of patterns) {
    const m = content.match(p);
    if (m) {
      const raw = m[1];
      // 支持多种分隔符
      const tags = raw.split(/[,，、\n]+/)
        .map(t => t.replace(/^[-*]\s*/, '').trim())
        .filter(t => t && t.length > 0 && t.length < 30);
      return [...new Set(tags)];
    }
  }
  return [];
}

// 解析机制卡
function parseMechanismCard(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const filename = path.basename(filePath, '.md');

  // 提取前缀
  const prefixMatch = filename.match(/^\[([^\]]+)\]/);
  const prefix = prefixMatch ? prefixMatch[1] : null;

  // 提取标题
  const titleMatch = content.match(/^#\s*(.+)\s*$/m);
  const title = titleMatch ? titleMatch[1].trim() : filename;

  // 提取来源游戏（多个位置尝试）
  let game = extractField(content, ['来源游戏', '来源', '所属游戏', '游戏名称', '游戏名']);
  if (!game) {
    const linkMatch = content.match(/\*\*来源游戏\*\*[:：]\s*🔗\s*\*([^*]+)\*/);
    if (linkMatch) game = linkMatch[1].trim();
  }
  if (!game) {
    const fromName = extractField(content, ['案例名称', '名称']);
    if (fromName) {
      const parts = fromName.split(/[-–—]/);
      if (parts.length >= 2) game = parts[1].trim();
    }
  }

  // 提取通俗转译/一句话解释
  const oneLiner = extractField(content, ['一句话解释', '通俗转译', '一句话', '解释']);

  // 提取机制描述
  let mechanismDesc = '';
  const descSection = content.match(/##\s*机制说明\s*\n([\s\S]+?)(?=\n##|$)/);
  if (descSection) mechanismDesc = descSection[1].trim().slice(0, 300);

  // 提取标签
  const tags = extractTags(content);

  // 提取触发条件
  const trigger = extractField(content, ['触发条件']);

  // 提取服务体验目标
  const experienceGoal = extractField(content, ['服务体验目标', '体验目标']);

  // 提取代价与取舍
  const tradeoffs = extractField(content, ['代价与取舍', '代价']);

  // 提取创新判据（如果有的话）
  const hasInnovation = content.includes('## 创新判据') || content.includes('| 门槛 | 判断 |');

  // 提取相似机制
  const similar = [];
  const similarSection = content.match(/\|\s*关联机制卡[^\n]*\n[\s\S]+?同游戏内[\s\S]+?(?=\n##|<\/table>)/i);
  if (similarSection) {
    const rows = parseMarkdownTable(similarSection[0]);
    rows.forEach(row => {
      const name = row['关联机制卡'] || row['机制'];
      if (name && !name.includes('同游戏内')) {
        similar.push(name.trim());
      }
    });
  }

  return {
    filename,
    prefix,       // Excellent / Qualify
    title,
    game: game || '未知',
    oneLiner: oneLiner || mechanismDesc || '',
    mechanismDesc: mechanismDesc.slice(0, 200),
    tags,
    trigger: trigger || '',
    experienceGoal: experienceGoal || '',
    tradeoffs: tradeoffs || '',
    hasInnovation: !!hasInnovation,
    similarMechanisms: similar,
  };
}

// 解析游戏卡
function parseGameCard(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath, '.md');

  // 提取标题
  const titleMatch = content.match(/^#\s*(.+)\s*$/m);
  let title = titleMatch ? titleMatch[1].trim() : filename;

  // 提取英文名
  let englishName = extractField(content, ['英文名', '原文名称', 'English']) || '';

  // 提取品类
  let genre = extractField(content, ['品类', '游戏类型']) || '';

  // 提取游玩人数
  const players = extractField(content, ['游玩人数']) || '';

  // 提取品类原型
  const prototype = extractField(content, ['品类原型']) || '';

  // 提取创新定性
  const innovationLevel = extractField(content, ['创新定性']) || '';

  // 提取分析日期
  const date = extractField(content, ['分析日期', '日期']) || '';

  // 提取 X-Statement
  let xStatement = '';
  const xsMatch = content.match(/>\s*([^>\n]+)/);
  if (xsMatch) xStatement = xsMatch[1].trim().slice(0, 200);

  // 提取标签
  const tags = extractTags(content);

  // 提取核心支柱
  const pillarsMatch = content.match(/\*\*核心支柱\*\*[：:]\s*\n([\s\S]+?)(?=\n\*\*|$)/);
  const pillars = pillarsMatch ? pillarsMatch[1].trim().slice(0, 200) : '';

  // 提收录机制卡列表
  const relatedMechs = [];
  const mechSection = content.match(/收录机制卡\s*\n((?:\s*[-*#]\s*[^\n]+\n?)+)/);
  if (mechSection) {
    const lines = mechSection[1].split('\n').filter(l => l.trim());
    lines.forEach(l => {
      const m = l.match(/\[([^\]]+)\]/);
      if (m) relatedMechs.push(m[1]);
    });
  }

  return {
    filename,
    title,
    englishName,
    genre,
    players,
    prototype,
    innovationLevel,
    date,
    xStatement,
    tags,
    corePillars: pillars,
    relatedMechanisms: relatedMechs,
  };
}

// 解析玩法卡
function parseGameplayCard(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath, '.md');

  // 提取标题
  const titleMatch = content.match(/^#\s*(.+)\s*$/m);
  let title = titleMatch ? titleMatch[1].trim() : filename;

  // 提所属游戏
  const gameMatch = content.match(/\*\*所属游戏\*\*[:：]\s*🔗\s*\*([^*]+)\*/);
  const game = gameMatch ? gameMatch[1].trim() : '未知';

  // 提取玩法类型
  const typeMatch = content.match(/\*\*玩法类型\*\*[:：]\s*([^*\n]+)/);
  const type = typeMatch ? typeMatch[1].trim() : '';

  // 提取核心循环
  const coreLoopMatch = content.match(/\*\*核心循环\*\*[：:]\s*\n([\s\S]+?)(?=\n\*\*|##)/);
  const coreLoop = coreLoopMatch ? coreLoopMatch[1].trim().slice(0, 200) : '';

  // 提取标签
  const tags = extractTags(content);

  // 提取对抗类型
  const pvpType = extractField(content, ['对抗类型']) || '';

  return {
    filename,
    title,
    game,
    type,
    coreLoop,
    tags,
    pvpType,
  };
}

// 主函数
function main() {
  const baseDir = path.join(__dirname, '..', '..', 'agents', 'jizhi', 'workspace', 'mechanism-lib-2-0');

  if (!fs.existsSync(baseDir)) {
    console.error(`目录不存在: ${baseDir}`);
    process.exit(1);
  }

  const mechanismsDir = path.join(baseDir, 'mechanisms');
  const gamesDir = path.join(baseDir, 'games');
  const gameplaysDir = path.join(baseDir, 'gameplays');

  // 解析所有机制卡
  const mechanisms = {};
  if (fs.existsSync(mechanismsDir)) {
    const gameFolders = fs.readdirSync(mechanismsDir);
    for (const gameFolder of gameFolders) {
      const gamePath = path.join(mechanismsDir, gameFolder);
      if (!fs.statSync(gamePath).isDirectory()) continue;
      const files = fs.readdirSync(gamePath).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const filePath = path.join(gamePath, file);
        try {
          const card = parseMechanismCard(filePath);
          const key = `${gameFolder}/${card.filename}`;
          mechanisms[key] = card;
        } catch (e) {
          console.error(`解析失败: ${filePath}`, e.message);
        }
      }
    }
  }

  // 解析所有游戏卡
  const games = {};
  if (fs.existsSync(gamesDir)) {
    const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const filePath = path.join(gamesDir, file);
      try {
        const card = parseGameCard(filePath);
        const key = card.filename;
        games[key] = card;
      } catch (e) {
        console.error(`解析失败: ${filePath}`, e.message);
      }
    }
  }

  // 解析所有玩法卡
  const gameplays = {};
  if (fs.existsSync(gameplaysDir)) {
    const gameFolders = fs.readdirSync(gameplaysDir);
    for (const gameFolder of gameFolders) {
      const gamePath = path.join(gameplaysDir, gameFolder);
      if (!fs.statSync(gamePath).isDirectory()) continue;
      const files = fs.readdirSync(gamePath).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const filePath = path.join(gamePath, file);
        try {
          const card = parseGameplayCard(filePath);
          const key = `${gameFolder}/${card.filename}`;
          gameplays[key] = card;
        } catch (e) {
          console.error(`解析失败: ${filePath}`, e.message);
        }
      }
    }
  }

  const data = {
    version: new Date().toISOString().split('T')[0],
    games,
    mechanisms,
    gameplays,
    stats: {
      gameCount: Object.keys(games).length,
      mechanismCount: Object.keys(mechanisms).length,
      gameplayCount: Object.keys(gameplays).length,
    },
  };

  const outputPath = path.join(__dirname, 'data.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`生成完成: ${outputPath}`);
  console.log(`  游戏卡: ${data.stats.gameCount} 个`);
  console.log(`  机制卡: ${data.stats.mechanismCount} 个`);
  console.log(`  玩法卡: ${data.stats.gameplayCount} 个`);
}

main();
