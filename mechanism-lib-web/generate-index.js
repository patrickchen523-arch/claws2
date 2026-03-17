const fs = require('fs');
const path = require('path');

const data = require('./data.json');

const index = {
  version: Date.now(),
  stats: data.stats,
  // 轻量索引：只包含搜索需要的字段
  mechanisms: Object.entries(data.mechanisms).map(([key, m]) => {
    // 合并所有标签并去重
    const tags = [...new Set([
      ...(m.flatTags || []),
      ...(m.playLevelTags || []),
      ...(m.specialMechanisms || []),
      ...(m.painPoints || [])
    ])];
    
    return {
      key,
      title: m.title,
      gameName: m.gameName,
      simpleDesc: m.simpleDesc,
      tags
    };
  }),
  games: Object.entries(data.games).map(([key, g]) => ({
    key,
    title: g.title,
    gameName: g.gameName,
    xStatement: g.xStatement
  }))
};

fs.writeFileSync('./index.json', JSON.stringify(index, null, 0));
console.log('Generated index.json:', JSON.stringify(index).length, 'bytes');
console.log('Mechanisms:', index.mechanisms.length);
console.log('Games:', index.games.length);
