/**
 * 标签迁移脚本
 * 将现有的混合标签迁移到正确的分类
 * 
 * 规则：
 * - 品类：只能是预设的品类词
 * - 乐趣标签：只能是16个乐趣词
 * - 情绪反馈：只能是预设情绪词
 * - 交互关系：只能是预设的4个词
 * - 其他移入特色机制
 */

const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';

// 预设分类
const PRESETS = {
  // 品类（只能是这些词）
  categories: ['射击-搜打撤', '射击-战术竞技', '射击-大逃杀', 'RPG-ARPG', 'RPG-MMORPG', 'RPG-回合RPG', '策略-战棋', '策略-SLG', '策略-RTS', 'MOBA-5v5', 'MOBA-7v7', '卡牌-策略卡牌', '卡牌-CCG', '模拟经营-城建', '模拟经营-养成'],
  
  // 16乐趣标签
  funTags: ['策略', '成长变强', '社交', '竞技', '探索', '收集', '随机', '挑战', '创造', '代入', '盈利', '考究', '操作', '养成', '模拟', '解谜'],
  
  // 情绪反馈
  emotionTags: ['爽快感', '紧张感', '成就感', '治愈/放松', '惊喜随机', '节奏沉浸', '烧脑', '恐怖/微恐'],
  
  // 交互关系
  interactionTags: ['合作', '对抗', '欺骗', '无交互'],
  
  // 品类关键词（用于匹配）
  categoryKeywords: ['射击', '搜打撤', '战术竞技', '大逃杀', 'RPG', 'ARPG', 'MMORPG', '战棋', 'SLG', 'RTS', 'MOBA', '卡牌', 'CCG', '模拟经营', '城建', '养成', 'Roguelike', 'Roguelite', '街机', '体育', '音游', '塔防', '赛车', '动作'],
  
  // 乐趣关键词
  funKeywords: ['策略', '成长', '社交', '竞技', '探索', '收集', '随机', '挑战', '创造', '代入', '盈利', '考究', '操作', '养成', '模拟', '解谜', '休闲', '娱乐', '经营'],
  
  // 情绪关键词
  emotionKeywords: ['爽快感', '紧张感', '成就感', '治愈', '放松', '惊喜', '随机', '节奏', '沉浸', '烧脑', '恐怖', '微恐', '焦虑', '温暖', '孤独', '挫败'],
  
  // 交互关键词
  interactionKeywords: ['合作', '对抗', '欺骗', '无交互', '竞争', '交易'],
};

// 判断标签属于哪个分类
function classifyTag(tag) {
  // 检查是否品类
  for (const kw of PRESETS.categoryKeywords) {
    if (tag.includes(kw)) return 'category';
  }
  
  // 检查是否乐趣标签
  for (const kw of PRESETS.funKeywords) {
    if (tag.includes(kw)) return 'fun';
  }
  
  // 检查是否情绪反馈
  for (const kw of PRESETS.emotionKeywords) {
    if (tag.includes(kw)) return 'emotion';
  }
  
  // 检查是否交互关系
  for (const kw of PRESETS.interactionKeywords) {
    if (tag.includes(kw)) return 'interaction';
  }
  
  // 都不是，归为特色机制
  return 'special';
}

// 处理单个文件
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 检查是否已有新的标签格式
  if (content.includes('### 机制设计')) {
    // 已有新格式，跳过
    return false;
  }
  
  // 提取现有的机制设计标签
  const mechDesignMatch = content.match(/### 机制设计\n([\s\S]+?)(?=###|$)/);
  if (!mechDesignMatch) return false;
  
  const tags = mechDesignMatch[1];
  const tagList = tags.match(/- [^\n]+/g);
  if (!tagList) return false;
  
  // 分类
  const category = [];
  const fun = [];
  const emotion = [];
  const interaction = [];
  const special = [];
  
  tagList.forEach(t => {
    const tag = t.replace(/^-\s*/, '').trim();
    const type = classifyTag(tag);
    
    if (type === 'category') category.push(tag);
    else if (type === 'fun') fun.push(tag);
    else if (type === 'emotion') emotion.push(tag);
    else if (type === 'interaction') interaction.push(tag);
    else special.push(tag);
  });
  
  // 构建新的机制设计部分
  let newSection = '\n### 机制设计\n';
  if (category.length > 0) newSection += `- 原型品类：${category.join('、')}\n`;
  if (fun.length > 0) newSection += `- 16乐趣标签：${fun.join('、')}\n`;
  if (emotion.length > 0) newSection += `- 情绪反馈：${emotion.join('、')}\n`;
  if (interaction.length > 0) newSection += `- 交互关系：${interaction.join('、')}\n`;
  if (special.length > 0) newSection += special.map(t => `- ${t}`).join('\n') + '\n';
  
  // 替换
  content = content.replace(/### 机制设计\n[\s\S]+?(?=###|$)/, newSection);
  
  fs.writeFileSync(filePath, content);
  return true;
}

// 遍历
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
        console.log('Migrated:', file);
      } else {
        skipped++;
      }
    } catch (e) {
      console.error('Error:', file, e.message);
    }
  }
}

console.log(`\n完成：迁移 ${processed} 个，跳过 ${skipped} 个`);
