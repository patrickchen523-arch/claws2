const pptxgen = require("pptxgenjs");

// Create presentation
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库介绍';
pres.author = '小易';

// NetEase color palette
const colors = {
  red: "E61E25",        // 网易红
  darkRed: "C41E30",    // 深红
  white: "FFFFFF",
  lightGray: "F5F5F5",
  gray: "E0E0E0",
  darkGray: "333333",
  mediumGray: "666666",
  black: "000000"
};

// Helper: create shadow
const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ==================== SLIDE 1: Cover ====================
let slide1 = pres.addSlide();
slide1.background = { color: colors.darkGray };

// Red accent bar at top
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: colors.red }
});

// Main title
slide1.addText("机制库", {
  x: 0.5, y: 1.8, w: 9, h: 1.0,
  fontSize: 56, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

// Subtitle
slide1.addText("游戏设计资产平台 · 方法论与实践", {
  x: 0.5, y: 2.9, w: 9, h: 0.5,
  fontSize: 20, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// Divider line
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.6, w: 3, h: 0.03,
  fill: { color: colors.red }
});

// Bottom info
slide1.addText("创意部 · 2026", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// ==================== SLIDE 2: 目录 ====================
let slide2 = pres.addSlide();
slide2.background = { color: colors.lightGray };

// Header
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide2.addText("目录", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// TOC items
const tocItems = [
  { num: "01", title: "什么是机制库", desc: "定位与价值" },
  { num: "02", title: "核心方法论", desc: "3大支柱 + X-Statement" },
  { num: "03", title: "评估维度", desc: "入库标准与评分体系" },
  { num: "04", title: "工作流", desc: "从拆解到入库" },
  { num: "05", title: "数据总览", desc: "当前规模与分布" },
  { num: "06", title: "使用指南", desc: "检索与应用" }
];

tocItems.forEach((item, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 0.5 + col * 3.1;
  const y = 1.3 + row * 2.0;
  
  // Card
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 1.7,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Number
  slide2.addText(item.num, {
    x: x + 0.2, y: y + 0.2, w: 0.8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei", color: colors.red, bold: true
  });
  
  // Title
  slide2.addText(item.title, {
    x: x + 0.2, y: y + 0.75, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  // Description
  slide2.addText(item.desc, {
    x: x + 0.2, y: y + 1.2, w: 2.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
});

// ==================== SLIDE 3: 什么是机制库 ====================
let slide3 = pres.addSlide();
slide3.background = { color: colors.lightGray };

// Header
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide3.addText("01  什么是机制库", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Definition card
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 9, h: 1.5,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide3.addText("机制库定义", {
  x: 0.7, y: 1.45, w: 2, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});

slide3.addText("游戏设计资产的标准化、结构化、可复用知识库", {
  x: 0.7, y: 1.85, w: 8.5, h: 0.8,
  fontSize: 18, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// 3 value cards
const values = [
  { title: "复用", desc: "428个已验证机制\n可直接应用于新项目", icon: "🔄" },
  { title: "验证", desc: "339款游戏参考\n减少设计试错成本", icon: "🛡️" },
  { title: "启发", desc: "跨品类设计参考\n激发创新思路", icon: "💡" }
];

values.forEach((v, i) => {
  const x = 0.5 + i * 3.1;
  
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.0, w: 2.9, h: 2.3,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Red top accent
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.0, w: 2.9, h: 0.08,
    fill: { color: colors.red }
  });
  
  // Icon
  slide3.addText(v.icon, {
    x: x, y: 3.2, w: 2.9, h: 0.5,
    fontSize: 24, align: "center"
  });
  
  // Title
  slide3.addText(v.title, {
    x: x + 0.2, y: 3.75, w: 2.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  // Description
  slide3.addText(v.desc, {
    x: x + 0.2, y: 4.2, w: 2.5, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// ==================== SLIDE 4: 核心方法论 ====================
let slide4 = pres.addSlide();
slide4.background = { color: colors.lightGray };

// Header
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide4.addText("02  核心方法论", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// X-Statement formula
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 1.6,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide4.addText("X-Statement 公式", {
  x: 0.7, y: 1.35, w: 3, h: 0.35,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});

slide4.addText("[题材] + [核心玩法] 融合 [次级玩法] 与 [养成要素]，玩家操控 [角色类型]，在 [场景类型] 中使用 [道具系统] 构建独特 [策略体系]。", {
  x: 0.7, y: 1.75, w: 8.5, h: 0.9,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// 3 pillars
slide4.addText("3大核心支柱", {
  x: 0.5, y: 3.0, w: 4, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
});

const pillars = [
  { title: "核心循环", desc: "战斗 → 成长 → 验证 → 刷宝" },
  { title: "耐玩性", desc: "内容更新 / 差异对策 / 随机体验 / 难度升级" },
  { title: "社交维度", desc: "匹配机制 / 核心场景 / 活人感保障" }
];

pillars.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.45, w: 2.9, h: 1.9,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Number circle
  slide4.addShape(pres.shapes.OVAL, {
    x: x + 1.1, y: 3.6, w: 0.7, h: 0.7,
    fill: { color: colors.red }
  });
  slide4.addText(String(i + 1), {
    x: x + 1.1, y: 3.6, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  // Title
  slide4.addText(p.title, {
    x: x + 0.2, y: 4.4, w: 2.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  // Description
  slide4.addText(p.desc, {
    x: x + 0.2, y: 4.75, w: 2.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// ==================== SLIDE 5: 评估维度 ====================
let slide5 = pres.addSlide();
slide5.background = { color: colors.lightGray };

// Header
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide5.addText("03  评估维度", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Table header
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.5,
  fill: { color: colors.darkGray }
});

const tableHeaders = ["维度", "评估标准", "分值"];
tableHeaders.forEach((h, i) => {
  const x = 0.7 + i * 3.0;
  slide5.addText(h, {
    x: x, y: 1.2, w: 2.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei", color: colors.white, bold: true, valign: "middle"
  });
});

// Table rows
const tableData = [
  ["创新性", "机制是否解决明确痛点，非简单缝合", "1-5"],
  ["可复用性", "机制是否足够抽象可跨项目使用", "1-5"],
  ["完整性", "触发条件、体验目标、验证方式是否清晰", "1-5"],
  ["差异化", "与已有机制相比是否有独特价值", "1-5"],
  ["数据支撑", "是否有足够案例或数据支撑有效性", "1-5"]
];

tableData.forEach((row, i) => {
  const y = 1.7 + i * 0.65;
  const bgColor = i % 2 === 0 ? colors.white : colors.lightGray;
  
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.6,
    fill: { color: bgColor }
  });
  
  row.forEach((cell, j) => {
    const x = 0.7 + j * 3.0;
    slide5.addText(cell, {
      x: x, y: y, w: 2.8, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei", color: colors.darkGray, valign: "middle"
    });
  });
});

// Scoring note
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.95, w: 9, h: 0.5,
  fill: { color: colors.red, transparency: 90 }
});
slide5.addText("评分 ≥ 3.5分 → 通过入库  |  评分 < 3.5分 → 退回修改", {
  x: 0.7, y: 4.95, w: 8.5, h: 0.5,
  fontSize: 13, fontFace: "Microsoft YaHei", color: colors.darkGray, valign: "middle"
});

// ==================== SLIDE 6: 工作流 ====================
let slide6 = pres.addSlide();
slide6.background = { color: colors.lightGray };

// Header
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide6.addText("04  工作流", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Flow steps
const flowSteps = [
  { num: "1", title: "收集", desc: "搜索游戏资料\n获取基础信息" },
  { num: "2", title: "拆解", desc: "标准化分析\n输出X-Statement" },
  { num: "3", title: "筛选", desc: "判断机制价值\n确定是否入库" },
  { num: "4", title: "评分", desc: "5维度打分\n≥3.5通过" },
  { num: "5", title: "入库", desc: "格式化输出\n更新数据库" }
];

flowSteps.forEach((step, i) => {
  const x = 0.4 + i * 1.95;
  
  // Step card
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.4, w: 1.8, h: 2.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Number
  slide6.addShape(pres.shapes.OVAL, {
    x: x + 0.55, y: 1.6, w: 0.7, h: 0.7,
    fill: { color: colors.red }
  });
  slide6.addText(step.num, {
    x: x + 0.55, y: 1.6, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  // Title
  slide6.addText(step.title, {
    x: x + 0.1, y: 2.45, w: 1.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  // Description
  slide6.addText(step.desc, {
    x: x + 0.1, y: 2.9, w: 1.6, h: 0.9,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
  
  // Arrow
  if (i < 4) {
    slide6.addText("→", {
      x: x + 1.7, y: 2.6, w: 0.3, h: 0.4,
      fontSize: 18, color: colors.red
    });
  }
});

// Bottom detail cards
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.45, w: 4.4, h: 0.9,
  fill: { color: colors.white },
  shadow: makeShadow()
});
slide6.addText("工具：web_search + web_fetch + game-analyse-sdd skill", {
  x: 0.7, y: 4.45, w: 4, h: 0.9,
  fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray, valign: "middle"
});

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 4.45, w: 4.4, h: 0.9,
  fill: { color: colors.white },
  shadow: makeShadow()
});
slide6.addText("产出：机制卡 → 游戏卡 → 网页展示", {
  x: 5.3, y: 4.45, w: 4, h: 0.9,
  fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray, valign: "middle"
});

// ==================== SLIDE 7: 数据总览 ====================
let slide7 = pres.addSlide();
slide7.background = { color: colors.lightGray };

// Header
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide7.addText("05  数据总览", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Big stats - left
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 3.0, h: 2.0,
  fill: { color: colors.red }
});
slide7.addText("428", {
  x: 0.5, y: 1.4, w: 3.0, h: 1.0,
  fontSize: 56, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});
slide7.addText("机制卡片", {
  x: 0.5, y: 2.5, w: 3.0, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.white, align: "center"
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.4, w: 3.0, h: 2.0,
  fill: { color: colors.darkGray }
});
slide7.addText("339", {
  x: 0.5, y: 3.6, w: 3.0, h: 1.0,
  fontSize: 56, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});
slide7.addText("游戏卡片", {
  x: 0.5, y: 4.7, w: 3.0, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// Category breakdown - right
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 3.8, y: 1.2, w: 5.7, h: 4.2,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide7.addText("品类分布 TOP 10", {
  x: 4.0, y: 1.35, w: 5, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
});

const categories = [
  { name: "RPG/ARPG", value: 89 },
  { name: "Roguelike", value: 67 },
  { name: "MOBA", value: 54 },
  { name: "FPS/TPS", value: 48 },
  { name: "SLG", value: 42 },
  { name: "模拟经营", value: 35 },
  { name: "赛车", value: 28 },
  { name: "卡牌", value: 24 },
  { name: "社交", value: 22 },
  { name: "其他", value: 19 }
];

const maxVal = 89;
categories.forEach((cat, i) => {
  const y = 1.85 + i * 0.35;
  const barWidth = (cat.value / maxVal) * 4.2;
  
  // Label
  slide7.addText(cat.name, {
    x: 4.0, y: y, w: 1.3, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei", color: colors.darkGray
  });
  
  // Bar
  slide7.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: y + 0.12, w: barWidth, h: 0.22,
    fill: { color: colors.red, transparency: 30 + (i * 5) }
  });
  
  // Value
  slide7.addText(String(cat.value), {
    x: 8.5, y: y, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "right"
  });
});

// ==================== SLIDE 8: 使用指南 ====================
let slide8 = pres.addSlide();
slide8.background = { color: colors.lightGray };

// Header
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide8.addText("06  使用指南", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Access info
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.4, h: 1.2,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide8.addText("🌐 访问地址", {
  x: 0.7, y: 1.35, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});
slide8.addText("http://88.88.88.88:8888", {
  x: 0.7, y: 1.7, w: 4, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// Features
const features = [
  { title: "🔍 智能检索", desc: "关键词 + 标签筛选" },
  { title: "🔗 双向跳转", desc: "机制卡 ↔ 游戏卡" },
  { title: "📊 可视化", desc: "图表 + 统计看板" },
  { title: "📱 持续更新", desc: "定期入库新机制" }
];

features.forEach((f, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.5 + col * 4.6;
  const y = 2.6 + row * 1.0;
  
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.4, h: 0.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 0.06, h: 0.8,
    fill: { color: colors.red }
  });
  
  slide8.addText(f.title, {
    x: x + 0.2, y: y + 0.15, w: 2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  slide8.addText(f.desc, {
    x: x + 0.2, y: y + 0.45, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
});

// ==================== SLIDE 9: 总结 ====================
let slide9 = pres.addSlide();
slide9.background = { color: colors.darkGray };

// Red accent
slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: colors.red }
});

// Title
slide9.addText("让游戏设计更简单", {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 40, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

slide9.addText("428 个已验证机制 · 339 款游戏数据 · 15 个品类拆解", {
  x: 0.5, y: 2.7, w: 9, h: 0.5,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// CTA
slide9.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.5, w: 3, h: 0.6,
  fill: { color: colors.red }
});
slide9.addText("立即访问 →", {
  x: 3.5, y: 3.5, w: 3, h: 0.6,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
});

slide9.addText("http://88.88.88.88:8888", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// Save
pres.writeFile({ fileName: "/root/.openclaw/workspace/机制库介绍_NetEase风格.pptx" })
  .then(() => console.log("✅ PPT created"))
  .catch(err => console.error(err));
