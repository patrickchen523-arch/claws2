const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';
const GAMES_DIR = '/root/.openclaw/agents/jizhi/workspace/games';

function parseMdFile(content) {
  const lines = content.split('\n');
  const result = { title: '', sections: {} };
  
  let currentSection = 'header';
  let sectionContent = [];
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (sectionContent.length > 0) {
        result.sections[currentSection] = sectionContent.join('\n').trim();
      }
      currentSection = line.replace('## ', '').trim();
      sectionContent = [];
    } else {
      sectionContent.push(line);
    }
  }
  
  if (sectionContent.length > 0) {
    result.sections[currentSection] = sectionContent.join('\n').trim();
  }
  
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) result.title = titleMatch[1].trim();
  
  return result;
}

function parseTable(tableText) {
  const rows = [];
  const lines = tableText.split('\n');
  for (const line of lines) {
    const match = line.match(/\|([^|]+)\|([^|]+)\|/g);
    if (match) {
      for (const row of match) {
        const cells = row.split('|').filter(c => c.trim());
        if (cells.length >= 2) {
          rows.push({ 
            key: cells[0].trim().replace(/\*\*/g, ''), 
            value: cells[1].trim() 
          });
        }
      }
    }
  }
  return rows;
}

/**
 * Extract field from Chinese markdown format
 * **字段**：
 * > content
 */
function extractFieldMultiline(text, fieldName) {
  // Match field name, then capture content after >
  let match = text.match(new RegExp(`${fieldName}[^>]+>([^<\\n]+)`));
  if (match) return match[1].trim();
  
  return '';
}

function extractMechanismInfo(parsed, filename) {
  const sections = parsed.sections;
  
  const info = {
    title: parsed.title,
    gameName: '',
    tags: [],
    simpleDesc: '',
    mechanismDesc: '',
    coreRules: '',
    trigger: '',
    painPoint: '',
    experienceGoal: '',
    similarMechanisms: [],
    demo: '',
    filename: filename
  };
  
  // === 1. 基础信息 ===
  if (sections['基础信息']) {
    const rows = parseTable(sections['基础信息']);
    for (const row of rows) {
      if (row.key.includes('案例名称')) {
        const gameMatch = row.value.match(/\[([^\]]+)\]-([^-]+)-/);
        if (gameMatch) info.gameName = gameMatch[2].trim();
      }
      else if (row.key.includes('来源游戏')) {
        const gameMatch = row.value.match(/\*([^*]+)\*/);
        if (gameMatch) info.gameName = gameMatch[1].trim();
      }
      else if (row.key.includes('核心标签')) {
        info.tags = row.value.split(/[/,\n]/).map(t => t.trim().replace(/\*\*/g, '')).filter(t => t);
      }
    }
  }
  
  // === 2. 通俗转译 ===
  if (sections['通俗转译']) {
    const section = sections['通俗转译'];
    const match = section.match(/>\s*([^>\n]+)/);
    if (match) info.simpleDesc = match[1].trim();
  }
  
  // === 3. 机制拆解 ===
  if (sections['机制拆解']) {
    const section = sections['机制拆解'];
    
    // 机制描述
    let match = section.match(/\*\*机制描述\*\*[：:]?\s*\n?(.+?)(?=\*\*|触发|$)/s);
    if (match) info.mechanismDesc = match[1].trim();
    
    // 核心规则 - look for bullet points or text after "核心规则"
    match = section.match(/\*\*核心规则[：:]\*\*\s*([\s\S]+?)(?=\*\*|触发)/);
    if (match) {
      info.coreRules = match[1].trim().replace(/^[-*]\s*/gm, ' ').replace(/\n+/g, ' ').replace(/\s+/g, ' ');
    }
    
    // 触发条件 - multiple patterns
    info.trigger = extractFieldMultiline(section, '触发条件');
  }
  
  // === 4. 设计意图 ===
  if (sections['设计意图']) {
    const section = sections['设计意图'];
    info.painPoint = extractFieldMultiline(section, '解决痛点');
    info.experienceGoal = extractFieldMultiline(section, '体验目标');
  }
  
  // === 5. 关联参考 ===
  if (sections['关联参考']) {
    const section = sections['关联参考'];
    const games = section.match(/[《"]([^》"]+)[》"]/g);
    if (games) info.similarMechanisms = games.map(g => g.replace(/[《"》"]/g, '').trim());
  }
  
  // === 6. 多媒体 ===
  if (sections['多媒体']) {
    const section = sections['多媒体'];
    const match = section.match(/>\s*([^>\n]+)/);
    if (match) info.demo = match[1].trim();
  }
  
  // Fallback: 从文件名提取
  if (!info.gameName) {
    const filenameMatch = filename.match(/\[([^\]]+)\]([^-]+)-/);
    if (filenameMatch) info.gameName = filenameMatch[2].trim();
  }
  
  return info;
}

function extractGameInfo(parsed, filename) {
  const sections = parsed.sections;
  
  const info = {
    title: parsed.title,
    gameName: '',
    developer: '',
    publisher: '',
    platform: '',
    releaseDate: '',
    genre: '',
    monetization: '',
    xStatement: '',
    tagline: '',
    playerStats: '',
    prototype: '',
    pillars: [],
    filename: filename
  };
  
  // === 基本信息 ===
  if (sections['基本信息']) {
    const rows = parseTable(sections['基本信息']);
    for (const row of rows) {
      const key = row.key;
      const value = row.value;
      
      if (key.includes('游戏名称')) info.gameName = value;
      else if (key.includes('开发者')) info.developer = value;
      else if (key.includes('发行商')) info.publisher = value;
      else if (key.includes('发行平台')) info.platform = value;
      else if (key.includes('上线时间') || key.includes('发行时间')) info.releaseDate = value;
      else if (key.includes('游戏类型')) info.genre = value;
      else if (key.includes('收费模式')) info.monetization = value;
      else if (key.includes('一句话对标')) info.tagline = value;
      else if (key.includes('玩家数据')) info.playerStats = value;
    }
  }
  
  // === X-Statement (could be in main section or 补充信息) ===
  if (sections['X-Statement']) {
    info.xStatement = sections['X-Statement'].replace(/[*#>]/g, '').trim();
  } else if (sections['补充信息']) {
    // Check inside 补充信息
    const match = sections['补充信息'].match(/###\s*X-Statement\s*\n?>\s*([^#\n]+)/);
    if (match) info.xStatement = match[1].trim();
  }
  
  // === 玩法原型 ===
  if (sections['玩法原型']) {
    info.prototype = sections['玩法原型'].replace(/[*#]/g, '').trim();
  }
  
  // === 核心支柱 ===
  if (sections['核心支柱']) {
    const section = sections['核心支柱'];
    const pillarMatches = section.match(/###\s+支柱\d+：[^\n]+([\s\S]*?)(?=###|$)/g) || [];
    
    for (const p of pillarMatches) {
      const titleMatch = p.match(/###\s+支柱\d+：(.+)/);
      if (titleMatch) {
        const pillarTitle = titleMatch[1].trim();
        const experiences = p.match(/\*\*体验[：:]\*\*\s*([^\n]+)/g) || [];
        const designs = p.match(/\*\*设计手段[：:]\*\*\s*([\s\S]+?)(?=\*\*|$)/g) || [];
        
        info.pillars.push({
          title: pillarTitle,
          experience: experiences.map(e => e.replace(/\*\*/g, '').replace(/体验[：:]\s*/, '').trim()).join('; '),
          design: designs.map(d => d.replace(/\*\*/g, '').replace(/设计手段[：:]\s*/, '').trim()).join('; ')
        });
      }
    }
  }
  
  return info;
}

// ============ MAIN ============

const mechanisms = {};
const mechFiles = fs.readdirSync(MECHANISMS_DIR);

let mechCount = 0;
for (const dir of mechFiles) {
  const dirPath = path.join(MECHANISMS_DIR, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseMdFile(content);
    const info = extractMechanismInfo(parsed, file);
    mechanisms[`${dir}/${file}`] = info;
    mechCount++;
  }
}

const games = {};
const gameFiles = fs.readdirSync(GAMES_DIR).filter(f => f.endsWith('.md'));

let gameCount = 0;
for (const file of gameFiles) {
  const filePath = path.join(GAMES_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseMdFile(content);
  const info = extractGameInfo(parsed, file);
  games[file.replace('.md', '')] = info;
  gameCount++;
}

const output = { mechanisms, games, stats: { mechanismCount: mechCount, gameCount: gameCount } };

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(output, null, 2));

console.log(`Generated: ${mechCount} mechanisms, ${gameCount} games`);

// Test samples
console.log('\n=== Sample: Barony 死亡幽灵系统 ===');
console.log(JSON.stringify(mechanisms['barony/[Qualify]death-ghost-system.md'], null, 2));

console.log('\n=== Sample: Balatro Game ===');
console.log(JSON.stringify(games['balatro'] || {}, null, 2));
