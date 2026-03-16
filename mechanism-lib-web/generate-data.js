const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';
const GAMES_DIR = '/root/.openclaw/agents/jizhi/workspace/games';

/**
 * 标签标准化映射表
 */
const TAG_MAPPING = {
  // 品类标签
  'MOBA': ['MOBA', 'MOBA玩法'],
  'RTS': ['RTS', '即时战略', '即时决策', '手游RTS', '卡牌RTS'],
  'FPS': ['FPS', '射击体验', '载具射击', 'FPS干员', '枪械定制'],
  'RPG': ['RPG', 'ARPG', '战棋RPG', 'RPG构筑', 'RPG融合', 'RPG成长'],
  '战棋': ['战棋', '战棋策略', '战棋战斗', '战棋RPG', '战棋战场', '战棋叙事', '战棋战斗系统'],
  'Roguelike': ['Roguelike', 'Roguelite', '肉鸽模式', 'Roguelike割草'],
  '大逃杀': ['大逃杀'],
  '搜打撤': ['搜打撤', '撤离射击', '撤离点'],
  '模拟经营': ['模拟经营', '农场经营', '医院经营', '游乐园经营'],
  '音游': ['音游', '音乐游戏'],
  
  // 系统标签
  '技能系统': ['技能系统', '技能组合', '技能搭配', '技能成长', '技能驱动', '技能建设', '技能熟练', '坐骑技能'],
  '经济系统': ['经济系统', '交易系统', '商业化', '商业化设计', '商业化核心', '经济循环', '经济规划', '经济运营'],
  'BD构筑': ['BD构筑', '构筑系统', '卡组构建', 'Build构筑', '局内构筑'],
  '社交': ['社交', '社交互动', '社交场景', '社交匹配', '社交功能', '社交引导', '社交激励', '社交获取', '社交延续', '社交自由', '社交乐趣', '社交互助', '跨阵营社交', '手游社交', '轻松社交'],
  '战斗系统': ['战斗系统', '动作系统', '战斗体验', '动作战斗', '战斗深度', '战斗节奏'],
  '养成': ['养成', '角色养成', '英雄养成', '宠物养成', '收集成长', '繁殖养成', '数值养成', '双线养成', '养成系统'],
  '策略': ['策略', '策略深度', '策略博弈', '策略选择', '策略构建', '策略经营', '策略配队', '策略战斗', '策略搭配', '策略定位', '差异化策略', '个性化策略', '高策略性', '深度策略', '战术策略', '算牌策略', '地形策略', '局内策略'],
  '资源管理': ['资源', '资源管理', '资源系统', '资源分配', '资源共享', '资源循环', '资源转换', '资源转化', '资源获取', '资源收集', '资源投入', '资源捐献', '资源权衡', '资源效率', '资源积累', '公共资源', '有限资源', '野怪资源'],
  'PVP': ['PVP', 'PVP竞技', '竞技', '公平竞技', '竞技匹配', '战场竞技', '天梯竞技', '休闲竞技', '卡牌对战', '1v1竞技'],
  'PVE': ['PVE', 'PVE挑战', '副本', '挑战', '团队副本', '公共BOSS', '挑战驱动', '挑战设计', '深度PVE', '挑战解锁', '计分挑战', '组队挑战', 'PVE威胁'],
  
  // v2 归并
  '战斗系统': ['战斗系统', '战斗辅助', '协作战斗', '载具战斗', '战斗策略', '战斗区', '战斗强化', '战斗增益', '战斗协助'],
  '动作游戏': ['动作手游标杆', '动作连招', '动作深度', '动作游戏'],
  '格斗': ['横版格斗', '3D格斗'],
  '博弈': ['博弈', '博弈深度', '博弈心理', '即时博弈', '防守博弈', '属性博弈', '空间博弈', '复活博弈'],
  '经济系统': ['经济系统', '自由经济', '经济发展', '经济稳定'],
  '多人协作': ['多人协作', '团队协作', '协作战斗', '团队配合'],
  '对抗': ['硬核对抗', '公会对抗', '心理对抗', '异步对抗', '高密度对抗'],
  'PVE': ['PVE', 'PVE挑战', '深度PVE'],
  '副本': ['副本分段', '团队副本', '公共BOSS'],
  '技能博弈': ['技能博弈'],
  '技能连招': ['技能连招'],
  '随机性': ['随机事件', '随机刷新', '随机增益', '随机掉落', '随机词缀', '随机触发', '随机选将'],
  '概率机制': ['概率平滑', '概率递进', '概率博弈'],
  '抽卡': ['抽卡', '抽卡优化', '抽卡驱动'],
  '保底': ['保底', '保底叠加', '保底机制', '十连保底', '抽卡保底'],
  '卡池': ['卡池竞争'],
  '角色定制': ['角色定制', '角色深度养成', '角色养成驱动'],
  '角色还原': ['角色还原', '角色构建'],
  '角色选择': ['角色选择', '角色获取'],
  '角色差异': ['角色差异', '角色定位', '角色立场转换'],
  '装备系统': ['装备升级', '装备强化', '装备获取', '装备掉落', '装备搜集', '装备购买', '装备通用'],
  '武器定制': ['武器定制', '武器形态', '武器战斗', '武器组合', '武器build'],
  '道具系统': ['道具系统', '道具互动', '道具收集', '临时武器'],
  '升级': ['升级系统', '棋子升级', '改装升级', '帮派升级', '时代升级'],
  '进阶': ['进阶', '进化机制'],
  '目标驱动': ['目标引导', '目标驱动', '隐藏目标', '保护目标', '长期目标', '任务目标'],
  '赛季任务': ['赛季任务'],
  '叙事': ['叙事设计', '叙事驱动', '叙事融合', '分支叙事', '碎片化叙事', '死亡推进剧情'],
  '时间系统': ['时间切换', '时间管理', '冷却时间'],
  '时间循环': ['日夜循环', '季节循环', '压力循环', '内外循环', '双循环玩法'],
  '激励机制': ['激励机制', '激励系统', '成就驱动', '成就', '成就感'],
  '奖励': ['连杀奖励', '排名奖励', '现金奖励', '荣誉激励', '残血激励'],
  '场景互动': ['场景互动', '场景生物', '场景破坏'],
  '地形策略': ['地形效果', '地形高低差', '地图控制'],
};

/**
 * 标准化单个标签
 */
function normalizeTag(tag) {
  for (const [standard, variants] of Object.entries(TAG_MAPPING)) {
    if (variants.includes(tag)) {
      return standard;
    }
  }
  return tag; // 如果没有匹配，返回原标签
}

/**
 * 游戏名映射表：中文名/别名 → 游戏卡key
 */
const GAME_NAME_MAP = {
  // 帝国时代
  '帝国时代2决定版': 'AgeOfEmpires2DE',
  // 生存
  '7 Days to Die': '7DaysToDie',
  '七日杀': '7DaysToDie',
  '阿尔比恩': 'AlbionOnline',
  '创世灰烬': 'AshesOfCreation',
  '饥荒': 'DontStarve',
  '雾锁王国': 'Enshrouded',
  '森林之子': 'SonoftheForest',
  'Project Zomboid': 'ProjectZomboid',
  '僵尸毁灭工程': 'ProjectZomboid',
  'Rust': 'Rust',
  '腐蚀': 'Rust',
  // 自走棋/战棋
  '刀塔自走棋': 'AutoChess',
  '酒馆战棋': 'Battlegrounds',
  '火焰纹章风花雪月': 'FireEmblemThreeHouses',
  '皇家骑士团2': 'TacticsOgre',
  // FPS/射击
  '使命召唤': 'CallOfDuty',
  '使命召唤战区': 'CallOfDutyWarzone',
  '绝地潜兵2': 'Helldivers2',
  'HELLDIVERS 2': 'Helldivers2',
  '萤火突击': 'LostLight',
  '和平精英': 'PeacekeeperElite',
  // RPG/MMO
  'DNF': 'DNF',
  '地下城与勇士': 'DNF',
  '暗黑地牢': 'DarkestDungeon',
  '梦幻西游': 'FantasyWestJourney',
  '大话西游2': 'FantasyWestJourney',
  '最终幻想14': 'FinalFantasy14',
  'FF14': 'FinalFantasy14',
  '魔兽世界': 'WorldOfWarcraft',
  '流放之路': 'PathOfExile',
  '女神异闻录5': 'Persona5',
  'Fantasian': 'Fantasian',
  '失落的星尘': 'Fantasian',
  '异度之刃3': 'XenobladeChronicles3',
  '师父': 'Sifu',
  '赛马娘': 'UmaMusume',
  '废墟图书馆': 'LibraryofRuina',
  // 赛车
  '地平线5': 'ForzaHorizon5',
  '极限竞速：地平线5': 'ForzaHorizon5',
  'Forza Horizon 5': 'ForzaHorizon5',
  'F1 manager': 'F1Manager',
  'F1正作': 'F1Manager',
  'GTA Online': 'GTAOnline',
  '马里奥赛车': 'MarioKart',
  '跑跑卡丁车': 'QQFeiChe',
  '极品飞车': 'NeedForSpeed',
  '狂野飙车9': 'Asphalt9',
  '索尼克赛车': 'TeamSonicRacing',
  // 卡牌
  '影之诗': 'Shadowverse',
  '游戏王': 'YuGiOhMasterDuel',
  '漫威终极逆转': 'MarvelSnap',
  // SLG
  '三国志战略版': 'RomanceOfTheThreeKingdoms',
  // 其他
  '永劫无间': 'NarakaBladepoint',
  '决战平安京': 'Onmyoji',
  '火影忍者': 'NarutoMobile',
  '塞尔达传说': 'Zelda',
  '塞尔达传说：荒野之息': 'Zelda',
  '圣兽之王': 'UnicornOverlord',
  '暗区突围': 'ArenaBreakout',
  '失落星船': 'Marathon',
  '马拉松': 'Marathon',
  '闪电十一人': 'InazumaEleven',
};

/**
 * 标准化标签数组
 */
function normalizeTags(tags) {
  const normalized = new Set();
  for (const tag of tags) {
    normalized.add(normalizeTag(tag));
  }
  return Array.from(normalized).sort();
}

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
  
  // 章节别名映射（兼容不同命名格式）
  const sectionAliases = {
    '基本信息': '基础信息',
    '机制描述': '机制拆解',
    '通俗转译': '机制拆解',
    '相似机制': '关联参考'
  };
  for (const [alias, standard] of Object.entries(sectionAliases)) {
    if (result.sections[alias] && !result.sections[standard]) {
      result.sections[standard] = result.sections[alias];
    }
  }
  
  return result;
}

function parseTable(tableText) {
  const rows = [];
  const lines = tableText.split('\n');
  for (const line of lines) {
    // Skip header lines like | 字段 | 内容 | or | --- | --- |
    if (line.includes(':---') || line.includes('字段') || line.trim() === '|' || line.includes('---')) continue;
    const cells = line.split('|').filter(c => c.trim());
    if (cells.length >= 2) {
      rows.push({ 
        key: cells[0].trim().replace(/\*\*/g, ''), 
        value: cells[1].trim() 
      });
    }
  }
  return rows;
}

/**
 * Extract field - handles multiple Chinese markdown formats:
 * 1. **字段**：\n> content
 * 2. **字段**：content (no >)
 * 3. > content
 */
function extractField(text, fieldName) {
  if (!text) return '';
  
  // Pattern 1: **field**：... > content (with >)
  let match = text.match(new RegExp(`${fieldName}[^>]*>([^<\\n]+)`));
  if (match) return match[1].trim();
  
  // Pattern 2: **field**：content (no >), capture until next ** or end
  match = text.match(new RegExp(`${fieldName}[^\\n]*\\n([^\\n]+)`));
  if (match) {
    const content = match[1].trim();
    // Make sure it's not another field header
    if (!content.startsWith('**')) return content;
  }
  
  // Pattern 3: **field**：\n> content (blockquote on next line)
  match = text.match(new RegExp(`${fieldName}[^\\n]*\\n>\\s*([^<\\n]+)`));
  if (match) return match[1].trim();
  
  return '';
}

function extractMechanismInfo(parsed, filename) {
  if (filename.includes('血月')) {
  }
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
    filename: filename,
    source: '人工' // 默认人工
  };
  
  // === 1. 基础信息 ===
  if (sections['基础信息']) {
    const rows = parseTable(sections['基础信息']);
    for (const row of rows) {
      if (row.key.includes('案例名称')) {
        // Try to extract game name: [XXX]-GAME-xxx
        const gameMatch = row.value.match(/\[([^\]]+)\]-([^-]+)-/);
        if (gameMatch) info.gameName = gameMatch[2].trim();
      }
      else if (row.key.includes('来源游戏') || row.key.includes('所属游戏')) {
        // Extract from 🔗 *Game* or just text
        const gameMatch = row.value.match(/\*([^*]+)\*/);
        if (gameMatch) info.gameName = gameMatch[1].trim();
        else if (row.value.includes('🔗')) {
          // Format: 🔗 GameName
          const simpleMatch = row.value.replace('🔗', '').trim();
          if (simpleMatch) info.gameName = simpleMatch;
        } else {
          // 纯文本游戏名
          const plainText = row.value.replace(/\*/g, '').trim();
          if (plainText && plainText.length > 0) info.gameName = plainText;
        }
      }
      else if (row.key.includes('核心标签')) {
        // Split by / or space or , or + or newline
        const rawTags = row.value
          .split(/[/+\s,，\n]+/)
          .map(t => t.trim().replace(/\*\*/g, ''))
          .filter(t => t && t.length > 0);
        // 标准化标签
        info.tags = normalizeTags(rawTags);
      }
      else if (row.key.includes('来源')) {
        // 来源字段：人工 / AI生成-已甄别 / AI生成-未甄别
        const sourceValue = row.value.replace(/\*\*/g, '').trim();
        if (sourceValue) info.source = sourceValue;
      }
    }
  }
  
  // === 2. 通俗转译 ===
  if (sections['通俗转译']) {
    const section = sections['通俗转译'];
    info.simpleDesc = extractField(section, '一句话解释');
  }
  
  // === 2.5 备选：从机制描述章节提取一句话解释 ===
  if (!info.simpleDesc && sections['机制描述']) {
    const section = sections['机制描述'];
    info.simpleDesc = extractField(section, '一句话解释');
  }
  
  // === 3. 机制拆解 ===
  if (sections['机制拆解']) {
    const section = sections['机制拆解'];
    
    // 机制描述 - 修复贪婪匹配
    // 优先匹配"机制详述"后面的内容
    let match = section.match(/\*\*机制详述\*\*[：:]?\s*([\s\S]+?)(?=\n\*\*|\n触发|$)/);
    if (match) {
      info.mechanismDesc = match[1].trim();
    } else {
      // 匹配"机制描述"后面的内容
      match = section.match(/\*\*机制描述\*\*[：:]?\s*([\s\S]+?)(?=\n\*\*|\n触发|$)/);
      if (match) {
        info.mechanismDesc = match[1].trim();
      } else {
        // Alternative: just text after 机制描述
        match = section.match(/机制描述[：:][\s\S]+?(?=\n\*\*|\n触发|$)/);
        if (match) {
          info.mechanismDesc = match[0].replace('机制描述', '').replace(/[：:]/g, '').trim();
        }
      }
    }
    
    // 备选：从"机制详述"提取
    if (!info.mechanismDesc && section) {
      // 匹配机制详述后面的所有内容直到触发条件
      const descMatch = section.match(/机制详述[\s\S]*?(?=触发条件)/);
      if (descMatch) {
        info.mechanismDesc = descMatch[0]
          .replace('机制详述', '')
          .replace(/[：:]/g, '')
          .replace(/\*\*/g, '')
          .replace(/^[\s\n>]+/, '')
          .trim();
      }
    }
    
    // 核心规则
    match = section.match(/\*\*核心规则[：:]\*\*\s*([\s\S]+?)(?=\*\*|触发)/);
    if (match) {
      info.coreRules = match[1].trim().replace(/^[-*]\s*/gm, ' ').replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    // 触发条件
    info.trigger = extractField(section, '触发条件');
    // 备选：从"触发条件"提取
    if (!info.trigger) {
      const triggerMatch = section.match(/触发条件[：:][\s\S]+?(?=\*\*|##|$)/);
      if (triggerMatch) {
        info.trigger = triggerMatch[0].replace('触发条件', '').replace(/[：:]/g, '').trim();
      }
    }
  }
  
  // === 4. 设计意图 ===
  if (sections['设计意图']) {
    const section = sections['设计意图'];
    info.painPoint = extractField(section, '解决痛点');
    info.experienceGoal = extractField(section, '体验目标');
  }
  
  // === 5. 关联参考 ===
  if (sections['关联参考']) {
    const section = sections['关联参考'];
    const similarList = [];
    
    // Pattern 0: 表格格式 | 游戏 | 机制 |
    const tableLines = section.match(/\|[^|]+\|[^|]+\|[\s\S]+/);
    if (tableLines) {
      const tableText = tableLines[0];
      const rows = tableText.split('\n');
      for (const row of rows) {
        // 使用split提取单元格
        const cells = row.split('|').filter(c => c.trim());
        if (cells.length >= 2) {
          const game = cells[0].trim();
          const mechanism = cells[1].trim();
          // 跳过表头
          if (game === '游戏' || mechanism === '机制' || game.includes('---')) continue;
          if (game && mechanism) {
            similarList.push({ game, mechanism });
          }
        }
      }
    }
    
    // Pattern 1: 《Game》mechanism / "Game" mechanism
    let matches = section.match(/[《"]([^》"]+)[》"]\s*([^<\n]+)/g);
    if (matches && matches.length > 0) {
      for (const m of matches) {
        const gameMatch = m.match(/[《"]([^》"]+)[》"]/);
        const mechMatch = m.replace(/[《"]([^》"]+)[》"]/, '').trim();
        if (gameMatch) {
          similarList.push({
            game: gameMatch[1].trim(),
            mechanism: mechMatch.replace(/^[：:\-\s]+/, '').trim()
          });
        }
      }
    }
    
    // Pattern 2: / separated (e.g., > 游戏1 / 游戏2 / 游戏3)
    if (similarList.length === 0) {
      const slashMatch = section.match(/>([^>\n]+)/g);
      if (slashMatch) {
        for (const m of slashMatch) {
          const games = m.replace(/[>]/g, '').split('/').map(s => s.trim()).filter(s => s);
          for (const g of games) {
            if (g && g.length > 1 && !g.includes('相似机制')) {
              // Try to extract game name
              const gameNameMatch = g.match(/^([A-Za-z0-9\u4e00-\u9fa5]+)/);
              if (gameNameMatch) {
                similarList.push({
                  game: gameNameMatch[1].trim(),
                  mechanism: g.replace(gameNameMatch[0], '').replace(/^[的：:\-\s]+/, '').trim()
                });
              }
            }
          }
        }
      }
    }
    
    // Pattern 3: - Game mechanism or -- Game - mechanism (bullet points)
    if (similarList.length === 0) {
      matches = section.match(/[-]{1,2}\s*([^<\n]+)/g);
      if (matches) {
        for (const m of matches) {
          let text = m.replace(/^[-]{1,2}\s*/, '').trim();
          if (text && text.length > 1 && !text.includes('相似机制')) {
            // Skip lines that look like section headers
            if (text.includes('**')) continue;
            
            // Pattern: [品类]-[游戏]-[描述] format
            const bracketMatch = text.match(/\[([^\]]+)\]-[^\-]+-[^\-]+/);
            if (bracketMatch) {
              const parts = text.split('-');
              if (parts.length >= 2) {
                similarList.push({
                  game: parts[1].trim(),
                  mechanism: parts.slice(2).join('-').trim()
                });
                continue;
              }
            }
            
            // Try to extract game name (everything before 的 or ： or -)
            const gameMatch = text.match(/^([^的：\-]+)/);
            if (gameMatch) {
              similarList.push({
                game: gameMatch[1].trim(),
                mechanism: text.replace(gameMatch[0], '').replace(/^[的：:\-\s]+/, '').trim()
              });
            } else {
              similarList.push({ game: '', mechanism: text });
            }
          }
        }
      }
    }
    
    // Filter out invalid entries
    info.similarMechanisms = similarList.filter(s => 
      s.mechanism && s.mechanism.length > 0 && 
      s.game !== '--' && s.game !== '-' &&
      !s.mechanism.includes('**')
    );
  }
  
  // === 6. 多媒体 ===
  if (sections['多媒体']) {
    const section = sections['多媒体'];
    info.demo = extractField(section, '演示素材');
  }
  
  // Fallback: 从文件名提取游戏名
  if (!info.gameName) {
    const filenameMatch = filename.match(/\[([^\]]+)\]([^-]+)-/);
    if (filenameMatch) info.gameName = filenameMatch[2].trim();
  }
  
  // === 6. 标签信息（扁平化解析）===
  // 只解析"标签信息"章节内的内容
  if (sections['标签信息']) {
    const section = sections['标签信息'];
    const allTags = [];
    const playLevelTags = []; // 玩法层级标签单独存储
    
    // 1. 匹配 "- 标签名：标签内容" 格式（有冒号）
    const dashMatches = section.match(/- [^：\n]+：[^\n]+/g);
    if (dashMatches) {
      dashMatches.forEach(m => {
        const colonIdx = m.indexOf('：');
        if (colonIdx > 0) {
          const label = m.slice(1, colonIdx).trim(); // 标签名
          const content = m.slice(colonIdx + 1).trim(); // 标签内容
          const tags = content.split(/[、，,]/).map(t => t.trim()).filter(t => t);
          
          // 判断是否是玩法层级的标签
          const playLevelLabels = ['对抗类型', '玩法人数规模', '内容消耗模式', '生命周期阶段', '操作属性', '时间属性', '玩法重度', '玩法独立性'];
          if (playLevelLabels.includes(label)) {
            playLevelTags.push(...tags);
          } else {
            allTags.push(...tags);
          }
        }
      });
    }
    
    // 2. 匹配 "- 特色机制-具体机制名" 格式
    const specialMatches = section.match(/- 特色机制-[^\n]+/g);
    if (specialMatches) {
      specialMatches.forEach(m => {
        const tag = m.replace(/^-\s*/, '').trim();
        if (tag) allTags.push(tag);
      });
    }
    
    // 3. 玩家痛点章节：匹配 "- 标签名" 格式（无冒号）
    const painStart = section.indexOf('### 玩家痛点');
    if (painStart >= 0) {
      const nextSection = section.indexOf('###', painStart + 5);
      const painSection = nextSection > 0 ? section.slice(painStart, nextSection) : section.slice(painStart);
      
      const painMatches = painSection.match(/- [^：\n]+/g);
      if (painMatches) {
        painMatches.forEach(m => {
          const tag = m.replace(/^-\s*/, '').trim();
          if (tag) allTags.push(tag);
        });
      }
    }
    
    // 去重并保存
    const uniqueTags = [...new Set(allTags)];
    if (uniqueTags.length > 0) {
      info.flatTags = uniqueTags;
    }
    
    // 单独保存玩法层级标签
    const uniquePlayTags = [...new Set(playLevelTags)];
    if (uniquePlayTags.length > 0) {
      info.playLevelTags = uniquePlayTags;
    }
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
    coreLoop: '',
    difficulty: '',
    prototype: '',
    pillars: [],
    achievements: '',
    relatedMechanisms: [],
    filename: filename,
    source: '人工' // 默认人工
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
      else if (key.includes('来源')) info.source = value;
    }
  }
  
  // === X-Statement (could be in main section or 补充信息) ===
  if (sections['X-Statement']) {
    info.xStatement = sections['X-Statement'].replace(/[*#>]/g, '').trim();
  } else {
    // 尝试从 补充信息（来自 game-analyse-sdd） 获取
    const suppKey = Object.keys(sections).find(k => k.includes('补充信息'));
    if (suppKey) {
      const match = sections[suppKey].match(/###\s*X-Statement\s*\n?>\s*([^#\n]+)/);
      if (match) info.xStatement = match[1].trim();
    }
  }
  
  // === 玩法原型 ===
  if (sections['玩法原型']) {
    info.prototype = sections['玩法原型'].replace(/[*#]/g, '').trim();
  }
  
  // === 玩法环境 ===
  if (sections['玩法环境']) {
    const section = sections['玩法环境'];
    // 核心循环
    const loopMatch = section.match(/\*\*核心循环\*\*[：:]?\s*>?\s*([^#\n]+)/);
    if (loopMatch) info.coreLoop = loopMatch[1].trim();
    // 操作门槛
    const diffMatch = section.match(/\*\*操作门槛\*\*[：:]?\s*>?\s*([^#\n]+)/);
    if (diffMatch) info.difficulty = diffMatch[1].trim();
  }
  
  // === 商业成就 ===
  if (sections['补充信息']) {
    const section = sections['补充信息'];
    const achMatch = section.match(/###\s*商业成就\s*([\s\S]+)$/);
    if (achMatch) {
      info.achievements = achMatch[1].replace(/[-*]\s*/g, ' ').replace(/\n+/g, '; ').trim();
    }
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
  
  // === 关联资产 / 收录机制 ===
  const mechKeywords = ['关联资产', '收录机制', '收录的机制'];
  for (const kw of mechKeywords) {
    if (sections[kw]) {
      const section = sections[kw];
      
      // 用于去重的 Set
      const seen = new Set();
      
      // 匹配 > - 或 - 开头的行（两种格式都支持）
      const mechMatches = section.match(/[>-]\s*([^<\n]+)/g);
      if (mechMatches) {
        for (const m of mechMatches) {
          let mechName = m.replace(/^[>-]\s*/, '').replace(/\n/g, '').trim();
          // 清理前缀的 - 
          mechName = mechName.replace(/^-\s*/, '').trim();
          // 清理反引号
          mechName = mechName.replace(/^`|`$/g, '');
          // 过滤无效内容
          if (mechName && 
              !mechName.includes('待关联') && 
              !mechName.includes('暂无') && 
              !mechName.includes('game-card') &&
              !mechName.includes('gamecard') &&
              !mechName.includes('创建时间') &&
              !mechName.includes('关联标签') &&
              mechName.length > 2 &&
              !mechName.match(/^\d{2}-\d{2}/) &&
              !mechName.match(/^\d{4}-\d{2}-\d{2}/) &&
              mechName !== '-' &&
              !mechName.startsWith('---') &&
              !mechName.includes('|') &&
              // 过滤空机制名，如 [战棋]-
              !mechName.match(/^\[[^\]]+\]-$/) &&
              !mechName.match(/^\[[^\]]+\]-[^\-]+-$/)) {
            // 标准化后去重
            const normalized = mechName.toLowerCase().replace(/\s+/g, '');
            if (!seen.has(normalized)) {
              seen.add(normalized);
              info.relatedMechanisms.push(mechName);
            }
          }
        }
      }
      
      // 也匹配 [品类]-游戏名-机制名 pattern
      const bracketMatches = section.match(/\[[^\]]+\]-[^\-]+\-[^\-]+/g);
      if (bracketMatches) {
        for (const m of bracketMatches) {
          const cleanM = m.replace(/\n/g, '').trim();
          // 过滤空机制名
          if (!cleanM.match(/^\[[^\]]+\]-$/) && !cleanM.match(/^\[[^\]]+\]-[^\-]+-$/)) {
            const normalized = cleanM.toLowerCase().replace(/\s+/g, '');
            if (!seen.has(normalized)) {
              seen.add(normalized);
              info.relatedMechanisms.push(cleanM);
            }
          }
        }
      }
      
      // 匹配 [前缀]机制名 格式 (如 [Excellent]沙盒式自由经济系统)
      const simpleBracketMatches = section.match(/\[[^\]]+\][^\[\n]+/g);
      if (simpleBracketMatches) {
        for (const m of simpleBracketMatches) {
          let cleanM = m.replace(/\n/g, '').trim();
          // 清理反引号
          cleanM = cleanM.replace(/^`|`$/g, '');
          
          // 提取前缀后的内容
          const afterPrefix = cleanM.replace(/^\[[^\]]+\]/, '');
          
          // 过滤无效内容
          if (cleanM && 
              !cleanM.includes('待关联') && 
              !cleanM.includes('暂无') && 
              cleanM.length > 2 &&
              !cleanM.match(/^\d{2}-\d{2}$/) &&
              // 过滤不完整的 [xxx]- 格式
              !cleanM.match(/^\[[^\]]+\]-$/) &&
              !cleanM.match(/^\[[^\]]+\]-[^\-]+-$/) &&
              // 过滤前缀后以 - 开头的错误拆分结果
              !afterPrefix.startsWith('-') &&
              // 确保有实际机制名
              afterPrefix.length > 2) {
            const normalized = cleanM.toLowerCase().replace(/\s+/g, '');
            if (!seen.has(normalized)) {
              seen.add(normalized);
              info.relatedMechanisms.push(cleanM);
            }
          }
        }
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

// 验证并清理无效的 relatedMechanisms
let validMechCount = 0;
let invalidMechCount = 0;
for (const [gameKey, gameInfo] of Object.entries(games)) {
  if (gameInfo.relatedMechanisms && gameInfo.relatedMechanisms.length > 0) {
    const validMechs = [];
    
    for (const mechRef of gameInfo.relatedMechanisms) {
      const cleanRef = mechRef.replace(/[\[\]]/g, '').trim();
      
      // 宽松匹配：检查收录字符串是否包含在机制标题中
      const mechEntry = Object.entries(mechanisms).find(([key, m]) => {
        if (!m.title) return false;
        const title = m.title;
        
        // 方案1: 收录字符串是否包含在机制标题中
        // 方案2: 机制标题是否包含收录字符串（去掉前缀后的核心名）
        // 方案3: 提取核心机制名进行匹配
        
        // 提取机制卡标题中的核心名（去掉品类和英文名）
        let coreName = title;
        // 去掉 [品类] 前缀
        coreName = coreName.replace(/^\[[^\]]+\]/, '');
        // 去掉 英文名 - 或 英文名 / 部分
        coreName = coreName.replace(/^[^-]+\s*[-/]\s*/, '');
        
        // 直接包含检查
        return title.includes(cleanRef) || 
               cleanRef.includes(title.replace(/[\[\]]/g, '')) ||
               title.includes(coreName) ||
               coreName.includes(cleanRef) ||
               // 去掉所有空格和特殊符号后对比
               title.replace(/[\s\-\[\]]/g, '').includes(cleanRef.replace(/[\s\-\[\]]/g, '')) ||
               cleanRef.replace(/[\s\-\[\]]/g, '').includes(title.replace(/[\s\-\[\]]/g, '').replace(/^[^-]+\-[^-]+\-/, ''));
      });
      
      if (mechEntry) {
        validMechs.push(mechRef);
        validMechCount++;
      } else {
        invalidMechCount++;
      }
    }
    
    gameInfo.relatedMechanisms = validMechs;
  }
}

console.log(`Validated: ${validMechCount} valid mechanisms, ${invalidMechCount} cleaned up`);

// ============ 自动同步机制到游戏卡 ============
console.log('\n[Sync] 同步机制卡到游戏卡...');

// 扫描机制目录，匹配游戏卡
const mechDirs = fs.readdirSync(MECHANISMS_DIR);
let syncAddCount = 0;

for (const dir of mechDirs) {
  const dirPath = path.join(MECHANISMS_DIR, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;
  
  // 跳过误放的游戏卡
  if (dir.includes('gamecard')) continue;
  
  // 查找对应游戏文件
  const gameFile = path.join(GAMES_DIR, dir + '.md');
  if (!fs.existsSync(gameFile)) continue;
  
  // 读取游戏卡
  let gameContent = fs.readFileSync(gameFile, 'utf-8');
  
  // 获取该目录下的所有机制
  const mechFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  if (mechFiles.length === 0) continue;
  
  // 检查是否需要更新
  let needUpdate = false;
  
  if (gameContent.includes('（待关联')) {
    // 替换待关联标记
    const mechNames = mechFiles.map(f => {
      let name = f.replace('.md', '').replace('[Qualify]', '').replace('[Excellent]', '').replace('[not_comfirmed]', '');
      return `- ${name}`;
    });
    gameContent = gameContent.replace('（待关联该游戏下的机制卡）', mechNames.join('\n'));
    needUpdate = true;
    syncAddCount += mechFiles.length;
  } else {
    // 检查是否已包含所有机制
    for (const f of mechFiles) {
      const name = f.replace('.md', '').replace('[Qualify]', '').replace('[Excellent]', '').replace('[not_comfirmed]', '');
      if (!gameContent.includes(name)) {
        // 需要添加
        if (gameContent.includes('收录机制')) {
          gameContent = gameContent.replace(
            /(收录机制[^:]*：[^\n]*(?:\n[^\n]*)*)/,
            `$1\n- ${name}`
          );
          needUpdate = true;
          syncAddCount++;
        }
      }
    }
  }
  
  if (needUpdate) {
    fs.writeFileSync(gameFile, gameContent);
  }
}

console.log(`  ✓ 同步完成 (新增 ${syncAddCount} 条关联)`);

const output = { mechanisms, games, stats: { mechanismCount: mechCount, gameCount: gameCount } };

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(output, null, 2));

console.log(`Generated: ${mechCount} mechanisms, ${gameCount} games`);

// Field completeness check
let hasTitle = 0, hasGameName = 0, hasTags = 0, hasSimpleDesc = 0;
let hasMechDesc = 0, hasTrigger = 0, hasPainPoint = 0, hasGoal = 0;
let hasSimilar = 0, hasDemo = 0;

Object.values(mechanisms).forEach(m => {
  if (m.title) hasTitle++;
  if (m.gameName) hasGameName++;
  if (m.tags && m.tags.length > 0) hasTags++;
  if (m.simpleDesc) hasSimpleDesc++;
  if (m.mechanismDesc) hasMechDesc++;
  if (m.trigger) hasTrigger++;
  if (m.painPoint) hasPainPoint++;
  if (m.experienceGoal) hasGoal++;
  if (m.similarMechanisms && m.similarMechanisms.length > 0) hasSimilar++;
  if (m.demo) hasDemo++;
});

console.log('\n机制卡字段完整性:');
console.log('  title:', hasTitle + '/' + mechCount);
console.log('  gameName:', hasGameName);
console.log('  tags:', hasTags);
console.log('  simpleDesc:', hasSimpleDesc);
console.log('  mechanismDesc:', hasMechDesc);
console.log('  trigger:', hasTrigger);
console.log('  painPoint:', hasPainPoint);
console.log('  experienceGoal:', hasGoal);
console.log('  similarMechanisms:', hasSimilar);
console.log('  demo:', hasDemo);

// Test samples
console.log('\n=== Sample: 7v7团战模式 ===');
console.log(JSON.stringify(mechanisms['300Heroes/[Qualify]7v7团战模式.md'], null, 2));
