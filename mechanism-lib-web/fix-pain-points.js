const fs = require('fs');
const path = require('path');

const MECHANISMS_DIR = '/root/.openclaw/agents/jizhi/workspace/mechanisms';

// 痛点关键词映射
const PAIN_POINT_KEYWORDS = {
  '内容枯竭痛点': ['内容枯竭', '后期无聊', '重复可玩性', '玩腻', '没东西玩', '长草', '内容消耗', '后期内容', '重复体验', '单一'],
  '创作表达痛点': ['创作', '表达', '设计', '建造', '构建', '创作欲', '展示', '分享'],
  '情感共鸣痛点': ['情感', '共鸣', '代入', '沉浸', '故事', '叙事', '剧情', '人设'],
  '成长痛点': ['成长', '养成', '进度', '升级', '变强', '数值', '成长曲线', '扁平'],
  '挫败感痛点': ['挫败', '难度', '门槛', '上手', '劝退', '太难', '受苦', '死亡惩罚', '失败'],
  '探索深度痛点': ['探索', '发现', '未知', '惊喜', '探索欲', '隐藏', '解密', '自由度'],
  '操控体验痛点': ['操控', '操作', '手感', '反馈', '打击感', '延迟', '卡顿', '优化'],
  '时间成本痛点': ['时间', '肝', '耗时', '太长', '效率', '日常', '重复劳动', '爆肝'],
  '沉浸感痛点': ['沉浸', '代入', '氛围', '氛围感', '世界感', '真实感', '割裂'],
  '玩法重度痛点': ['重度', '硬核', '耗时', '复杂', '繁琐', '学习成本', '重氪', '爆肝'],
  '社交压力痛点': ['社交压力', '组队', '社交恐惧', '独狼', '独行', '社交焦虑'],
  '社交障碍痛点': ['社交障碍', '陌生人', '交流', '互动', '匹配', '社交需求'],
  '策略深度痛点': ['策略', '深度', '思考', '套路', '无脑', '选择', '思考量', '单调', '同质化'],
  '经济成本痛点': ['经济', '氪金', '付费', '抽卡', '资源', '成本', '收益', '不平衡', '肝氪'],
  '自由度痛点': ['自由', '限制', '约束', '框框', '限制过多', '选择', '多样性', '同质化'],
  '节奏单一痛点': ['节奏', '单调', '重复', '变化', '节奏感', '起伏', '张力'],
  '认知负担痛点': ['认知', '理解', '复杂', '信息', 'UI', '界面', '学习', '理解成本', '上手']
};

// 查找匹配的痛点标签
function matchPainPoints(text) {
  if (!text) return [];
  const matched = [];
  for (const [painPoint, keywords] of Object.entries(PAIN_POINT_KEYWORDS)) {
    for (const kw of keywords) {
      if (text.includes(kw)) {
        matched.push(painPoint);
        break; // 每个痛点只匹配一次
      }
    }
  }
  return matched;
}

// 处理单个文件
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 检查是否已有玩家痛点标签
  if (content.includes('### 玩家痛点')) {
    return false; // 已有，跳过
  }
  
  // 提取"解决痛点"字段
  const painPointMatch = content.match(/\*\*解决痛点\*\*[：:]?\s*>?\s*([^\n#]+)/);
  if (!painPointMatch) return false;
  
  const painPointText = painPointMatch[1].replace(/^[-\s]+/, '').trim();
  if (!painPointText || painPointText.length < 5) return false;
  
  // 匹配痛点标签
  const matchedPainPoints = matchPainPoints(painPointText);
  if (matchedPainPoints.length === 0) {
    // 默认给一个通用的
    matchedPainPoints.push('内容枯竭痛点');
  }
  
  // 添加玩家痛点标签
  const painTags = matchedPainPoints.map(p => `- ${p}`).join('\n');
  const painSection = `\n### 玩家痛点\n${painTags}\n`;
  
  // 插入到标签信息部分
  if (content.includes('## 标签信息')) {
    // 找到标签信息的结束位置（下一个 ## 或文件结束）
    const labelInfoStart = content.indexOf('## 标签信息');
    const nextSection = content.indexOf('\n## ', labelInfoStart + 10);
    
    if (nextSection > 0) {
      content = content.slice(0, nextSection) + painSection + content.slice(nextSection);
    } else {
      content = content + painSection;
    }
  } else {
    // 没有标签信息部分，在设计意图后面添加
    const designIntentEnd = content.indexOf('## 设计意图');
    if (designIntentEnd > 0) {
      const nextChar = content.indexOf('\n', designIntentEnd + 10);
      if (nextChar > 0) {
        content = content.slice(0, nextChar) + '\n\n## 标签信息\n' + painSection + content.slice(nextChar);
      }
    }
  }
  
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

console.log(`处理完成：新增 ${processed} 个，跳过 ${skipped} 个`);
