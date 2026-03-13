const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库 - 游戏设计的知识资产化';
pres.author = '小易';

// NetEase palette
const colors = {
  red: "E61E25",
  lightRed: "FF4D55",
  darkRed: "B01820",
  white: "FFFFFF",
  lightGray: "F5F5F5",
  gray: "E0E0E0",
  darkGray: "333333",
  mediumGray: "666666",
  black: "000000"
};

const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ==================== SLIDE 1: Cover ====================
let slide1 = pres.addSlide();
slide1.background = { color: colors.darkGray };

// Red accent
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.12,
  fill: { color: colors.red }
});

// Main title
slide1.addText("游戏设计的核心竞争力", {
  x: 0.5, y: 1.6, w: 9, h: 0.8,
  fontSize: 48, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

slide1.addText("正在从「人的经验」转向「组织的知识资产」", {
  x: 0.5, y: 2.5, w: 9, h: 0.6,
  fontSize: 22, fontFace: "Microsoft YaHei", color: colors.red, align: "center"
});

// Divider
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.4, w: 3, h: 0.03,
  fill: { color: colors.gray }
});

// Subtitle
slide1.addText("机制库 = 游戏设计的知识资产化平台", {
  x: 0.5, y: 3.7, w: 9, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

slide1.addText("创意部 · 2026", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// ==================== SLIDE 2: 核心优势 ====================
let slide2 = pres.addSlide();
slide2.background = { color: colors.lightGray };

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide2.addText("机制库的核心优势", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// 3 advantage cards
const advantages = [
  { title: "标准化", desc: "统一的X-Statement框架\n让所有游戏分析有据可依", icon: "📐" },
  { title: "结构化", desc: "5维度评分体系\n机制价值可量化评估", icon: "📊" },
  { title: "可复用", desc: "428个已验证机制\n新项目可直接调用", icon: "🔄" }
];

advantages.forEach((adv, i) => {
  const x = 0.5 + i * 3.1;
  
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.3, w: 2.9, h: 2.6,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.3, w: 2.9, h: 0.08,
    fill: { color: colors.red }
  });
  
  slide2.addText(adv.icon, {
    x: x, y: 1.5, w: 2.9, h: 0.5,
    fontSize: 24, align: "center"
  });
  
  slide2.addText(adv.title, {
    x: x + 0.2, y: 2.1, w: 2.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  slide2.addText(adv.desc, {
    x: x + 0.2, y: 2.55, w: 2.5, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// Stats row
const stats = [
  { num: "428", label: "已验证机制" },
  { num: "339", label: "收录游戏" },
  { num: "15", label: "品类拆解" }
];

stats.forEach((s, i) => {
  const x = 1.4 + i * 2.7;
  
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 4.2, w: 2.0, h: 1.1,
    fill: { color: colors.darkGray }
  });
  
  slide2.addText(s.num, {
    x: x, y: 4.3, w: 2.0, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei", color: colors.red, bold: true, align: "center"
  });
  
  slide2.addText(s.label, {
    x: x, y: 4.8, w: 2.0, h: 0.4,
    fontSize: 10, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
  });
});

// ==================== SLIDE 3: 方法论 ====================
let slide3 = pres.addSlide();
slide3.background = { color: colors.lightGray };

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide3.addText("核心方法论：X-Statement", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Formula card
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 1.6,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide3.addText("X-Statement 公式", {
  x: 0.7, y: 1.35, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});

slide3.addText("[题材] + [核心玩法] 融合 [次级玩法] 与 [养成要素]，玩家操控 [角色类型]，在 [场景类型] 中使用 [道具系统] 构建独特 [策略体系]。", {
  x: 0.7, y: 1.75, w: 8.5, h: 0.9,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// 3 pillars
const pillars = [
  { title: "核心循环", desc: "战斗 → 成长 → 验证 → 刷宝" },
  { title: "耐玩性", desc: "内容更新 / 差异对策 / 随机体验" },
  { title: "社交维度", desc: "匹配机制 / 核心场景 / 活人感" }
];

pillars.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.0, w: 2.9, h: 2.3,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide3.addShape(pres.shapes.OVAL, {
    x: x + 1.1, y: 3.2, w: 0.7, h: 0.7,
    fill: { color: colors.red }
  });
  slide3.addText(String(i + 1), {
    x: x + 1.1, y: 3.2, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide3.addText(p.title, {
    x: x + 0.2, y: 4.0, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  slide3.addText(p.desc, {
    x: x + 0.2, y: 4.45, w: 2.5, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// ==================== SLIDE 4: 案例展示 ====================
let slide4 = pres.addSlide();
slide4.background = { color: colors.lightGray };

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide4.addText("案例：已入库机制示例", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Case cards
const cases = [
  { 
    game: "枪火重生", 
    mechanism: "BD组件共享",
    desc: "多人模式共享武器秘卷，把运气驱动变为协作驱动",
    value: "提升社交粘性"
  },
  { 
    game: "Mewgenics", 
    mechanism: "遗传育种系统",
    desc: "猫咪突变遗传给后代，跨代际养成深度",
    value: "Roguelite创新"
  },
  { 
    game: "无主之地3", 
    mechanism: "三层BD构筑",
    desc: "模组+天赋→武器机制→数值词条，指数级成长",
    value: "BD深度标杆"
  }
];

cases.forEach((c, i) => {
  const x = 0.5 + i * 3.1;
  
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.2, w: 2.9, h: 3.0,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Game tag
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.2, w: 2.9, h: 0.4,
    fill: { color: colors.darkGray }
  });
  slide4.addText(c.game, {
    x: x, y: 1.2, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.white, align: "center", valign: "middle"
  });
  
  // Mechanism
  slide4.addText(c.mechanism, {
    x: x + 0.2, y: 1.75, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", color: colors.red, bold: true
  });
  
  // Description
  slide4.addText(c.desc, {
    x: x + 0.2, y: 2.2, w: 2.5, h: 1.0,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.darkGray
  });
  
  // Value tag
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.2, y: 3.5, w: 2.5, h: 0.45,
    fill: { color: colors.red, transparency: 90 }
  });
  slide4.addText(c.value, {
    x: x + 0.2, y: 3.5, w: 2.5, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.red, align: "center", valign: "middle"
  });
});

// Bottom insight
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.5, w: 9, h: 0.8,
  fill: { color: colors.darkGray }
});
slide4.addText("💡 这些机制可直接复用在新项目中，无需从零设计", {
  x: 0.7, y: 4.5, w: 8.5, h: 0.8,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.white, valign: "middle"
});

// ==================== SLIDE 5: 案例展示2 ====================
let slide5 = pres.addSlide();
slide5.background = { color: colors.lightGray };

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide5.addText("案例：更多品类覆盖", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Category grid
const categories = [
  { name: "RPG/ARPG", count: 89, example: "BD构筑、技能连招" },
  { name: "Roguelike", count: 67, example: "死亡转化、随机升级" },
  { name: "MOBA", count: 54, example: "团战规模、地图机制" },
  { name: "FPS/TPS", count: 48, example: "枪械改装、撤离模式" },
  { name: "SLG", count: 42, example: "资源循环、联盟系统" },
  { name: "模拟经营", count: 35, example: "空间规划、反馈循环" }
];

categories.forEach((cat, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 0.5 + col * 3.1;
  const y = 1.2 + row * 2.0;
  
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 1.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 0.08, h: 1.8,
    fill: { color: colors.red }
  });
  
  slide5.addText(cat.name, {
    x: x + 0.2, y: y + 0.15, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  slide5.addText(cat.count + " 个机制", {
    x: x + 0.2, y: y + 0.55, w: 2.5, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei", color: colors.red, bold: true
  });
  
  slide5.addText(cat.example, {
    x: x + 0.2, y: y + 1.0, w: 2.5, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
});

// ==================== SLIDE 6: 可拓展性 ====================
let slide6 = pres.addSlide();
slide6.background = { color: colors.lightGray };

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide6.addText("可拓展性规划", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Expansion cards
const expansions = [
  { 
    title: "品类扩展", 
    desc: "覆盖更多游戏品类\n如: 音游/体育/解谜", 
    icon: "🎮",
    timeline: "Q2"
  },
  { 
    title: "AI辅助分析", 
    desc: "自动识别游戏机制\n生成初步分析报告", 
    icon: "🤖",
    timeline: "Q3"
  },
  { 
    title: "团队协作", 
    desc: "支持多人协同编辑\n评论与反馈机制", 
    icon: "👥",
    timeline: "Q3"
  },
  { 
    title: "API对接", 
    desc: "对接内部项目管理系统\n实现自动化入库", 
    icon: "🔗",
    timeline: "Q4"
  }
];

expansions.forEach((exp, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.5 + col * 4.6;
  const y = 1.3 + row * 2.0;
  
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.4, h: 1.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Icon
  slide6.addText(exp.icon, {
    x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
    fontSize: 24
  });
  
  // Title
  slide6.addText(exp.title, {
    x: x + 0.8, y: y + 0.2, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  // Description
  slide6.addText(exp.desc, {
    x: x + 0.8, y: y + 0.65, w: 3.3, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
  
  // Timeline
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: x + 3.4, y: y + 0.15, w: 0.8, h: 0.35,
    fill: { color: colors.red }
  });
  slide6.addText(exp.timeline, {
    x: x + 3.4, y: y + 0.15, w: 0.8, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.white, align: "center", valign: "middle"
  });
});

// ==================== SLIDE 7: 总结 ====================
let slide7 = pres.addSlide();
slide7.background = { color: colors.darkGray };

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.12,
  fill: { color: colors.red }
});

// Main message
slide7.addText("游戏设计的核心竞争力", {
  x: 0.5, y: 1.5, w: 9, h: 0.7,
  fontSize: 36, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

slide7.addText("正在从「人的经验」转向「组织的知识资产」", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 18, fontFace: "Microsoft YaHei", color: colors.red, align: "center"
});

// Stats
slide7.addText("428 机制 · 339 游戏 · 15 品类", {
  x: 0.5, y: 3.2, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// CTA
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.9, w: 3, h: 0.6,
  fill: { color: colors.red }
});
slide7.addText("立即访问 →", {
  x: 3.5, y: 3.9, w: 3, h: 0.6,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
});

slide7.addText("http://88.88.88.8888", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// Save
pres.writeFile({ fileName: "/root/.openclaw/workspace/机制库介绍_V4.pptx" })
  .then(() => console.log("✅ PPT created"))
  .catch(err => console.error(err));
