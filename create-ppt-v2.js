const pptxgen = require("pptxgenjs");

// Create presentation
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库 - 游戏设计的知识资产化';
pres.author = '小易';

// NetEase color palette
const colors = {
  red: "E61E25",
  darkRed: "C41E30",
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
slide1.background = { color: colors.black };

// Red accent
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.12,
  fill: { color: colors.red }
});

// Main title - Big and bold
slide1.addText("游戏设计的核心竞争力", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 44, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

slide1.addText("正在从「人的经验」转向「组织的知识资产」", {
  x: 0.5, y: 2.4, w: 9, h: 0.6,
  fontSize: 24, fontFace: "Microsoft YaHei", color: colors.red, align: "center"
});

// Divider
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.3, w: 3, h: 0.03,
  fill: { color: colors.gray }
});

// Subtitle
slide1.addText("机制库 = 游戏设计的知识资产化平台", {
  x: 0.5, y: 3.6, w: 9, h: 0.5,
  fontSize: 18, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// Bottom info
slide1.addText("创意部 · 2026", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// ==================== SLIDE 2: 痛点 ====================
let slide2 = pres.addSlide();
slide2.background = { color: colors.lightGray };

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide2.addText("当前游戏设计的困境", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// 3 pain points
const pains = [
  { title: "经验流失", desc: "设计师离职 = 核心经验流失\n项目重启 = 从零开始", icon: "📉" },
  { title: "重复造轮子", desc: "每个项目都在重新发明机制\n低效重复，无法积累", icon: "🔄" },
  { title: "决策盲区", desc: "设计靠拍脑袋\n缺乏数据支撑和验证", icon: "🎲" }
];

pains.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.3, w: 2.9, h: 2.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Icon
  slide2.addText(p.icon, {
    x: x, y: 1.5, w: 2.9, h: 0.6,
    fontSize: 28, align: "center"
  });
  
  // Title
  slide2.addText(p.title, {
    x: x + 0.2, y: 2.2, w: 2.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  // Description
  slide2.addText(p.desc, {
    x: x + 0.2, y: 2.7, w: 2.5, h: 1.2,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// Bottom insight
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.4, w: 9, h: 0.9,
  fill: { color: colors.darkGray }
});
slide2.addText("💡 核心问题：游戏设计能力停留在「个人层面」，无法成为「组织资产」", {
  x: 0.7, y: 4.4, w: 8.5, h: 0.9,
  fontSize: 15, fontFace: "Microsoft YaHei", color: colors.white, valign: "middle"
});

// ==================== SLIDE 3: 解决方案 ====================
let slide3 = pres.addSlide();
slide3.background = { color: colors.lightGray };

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide3.addText("解决方案：知识资产化", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Transformation
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.3, h: 2.0,
  fill: { color: colors.white },
  shadow: makeShadow()
});
slide3.addText("BEFORE", {
  x: 0.7, y: 1.4, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, bold: true
});
slide3.addText("个人经验", {
  x: 0.7, y: 1.75, w: 3.9, h: 0.5,
  fontSize: 24, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
});
slide3.addText("设计师脑子里\n难以传承\n无法量化", {
  x: 0.7, y: 2.35, w: 3.9, h: 0.8,
  fontSize: 13, fontFace: "Microsoft YaHei", color: colors.mediumGray
});

// Arrow
slide3.addText("→", {
  x: 4.8, y: 2.0, w: 0.5, h: 0.5,
  fontSize: 32, color: colors.red, align: "center"
});

// After
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.3, h: 2.0,
  fill: { color: colors.red }
});
slide3.addText("AFTER", {
  x: 5.4, y: 1.4, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});
slide3.addText("组织资产", {
  x: 5.4, y: 1.75, w: 3.9, h: 0.5,
  fontSize: 24, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});
slide3.addText("机制库沉淀\n可传承\n可复用\n可迭代", {
  x: 5.4, y: 2.35, w: 3.9, h: 0.8,
  fontSize: 13, fontFace: "Microsoft YaHei", color: colors.white
});

// 3 values
const values = [
  { title: "可传承", desc: "人走经验留\n组织能力不依赖个人" },
  { title: "可复用", desc: "新项目直接调用\n不做重复劳动" },
  { title: "可迭代", desc: "持续积累优化\n越久越有价值" }
];

values.forEach((v, i) => {
  const x = 0.5 + i * 3.1;
  
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.6, w: 2.9, h: 1.7,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.6, w: 2.9, h: 0.08,
    fill: { color: colors.red }
  });
  
  slide3.addText(v.title, {
    x: x + 0.2, y: 3.8, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  slide3.addText(v.desc, {
    x: x + 0.2, y: 4.25, w: 2.5, h: 0.9,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
});

// ==================== SLIDE 4: 机制库是什么 ====================
let slide4 = pres.addSlide();
slide4.background = { color: colors.lightGray };

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide4.addText("机制库是什么", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Definition
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 1.3,
  fill: { color: colors.red }
});
slide4.addText("游戏设计资产的标准化、结构化、可复用知识库", {
  x: 0.7, y: 1.45, w: 8.5, h: 0.8,
  fontSize: 22, fontFace: "Microsoft YaHei", color: colors.white, valign: "middle", align: "center"
});

// Stats
const stats = [
  { num: "428", label: "已验证机制" },
  { num: "339", label: "收录游戏" },
  { num: "15", label: "品类拆解" },
  { num: "5", label: "评估维度" }
];

stats.forEach((s, i) => {
  const x = 0.5 + i * 2.35;
  
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.7, w: 2.2, h: 1.5,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide4.addText(s.num, {
    x: x, y: 2.85, w: 2.2, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei", color: colors.red, bold: true, align: "center"
  });
  
  slide4.addText(s.label, {
    x: x, y: 3.6, w: 2.2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// ==================== SLIDE 5: 核心方法论 ====================
let slide5 = pres.addSlide();
slide5.background = { color: colors.lightGray };

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide5.addText("核心方法论", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// X-Statement
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 1.4,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide5.addText("X-Statement 公式", {
  x: 0.7, y: 1.35, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});

slide5.addText("[题材] + [核心玩法] 融合 [次级玩法] 与 [养成要素]，玩家操控 [角色类型]，在 [场景类型] 中使用 [道具系统] 构建独特 [策略体系]。", {
  x: 0.7, y: 1.7, w: 8.5, h: 0.8,
  fontSize: 13, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// 3 pillars
slide5.addText("3大核心支柱", {
  x: 0.5, y: 2.8, w: 4, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
});

const pillars = [
  { title: "核心循环", desc: "战斗 → 成长 → 验证 → 刷宝" },
  { title: "耐玩性", desc: "内容更新 / 差异对策 / 随机体验 / 难度升级" },
  { title: "社交维度", desc: "匹配机制 / 核心场景 / 活人感保障" }
];

pillars.forEach((p, i) => {
  const x = 0.5 + i * 3.1;
  
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 3.25, w: 2.9, h: 2.0,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide5.addShape(pres.shapes.OVAL, {
    x: x + 1.1, y: 3.4, w: 0.7, h: 0.7,
    fill: { color: colors.red }
  });
  slide5.addText(String(i + 1), {
    x: x + 1.1, y: 3.4, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide5.addText(p.title, {
    x: x + 0.2, y: 4.2, w: 2.5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  slide5.addText(p.desc, {
    x: x + 0.2, y: 4.55, w: 2.5, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
});

// ==================== SLIDE 6: 评估维度 ====================
let slide6 = pres.addSlide();
slide6.background = { color: colors.lightGray };

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide6.addText("入库评估标准", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// Table
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 9, h: 0.5,
  fill: { color: colors.darkGray }
});

const headers = ["维度", "评估标准", "分值"];
headers.forEach((h, i) => {
  slide6.addText(h, {
    x: 0.7 + i * 3.0, y: 1.2, w: 2.8, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei", color: colors.white, bold: true, valign: "middle"
  });
});

const tableData = [
  ["创新性", "机制是否解决明确痛点", "1-5"],
  ["可复用性", "是否足够抽象可跨项目使用", "1-5"],
  ["完整性", "触发/目标/验证是否清晰", "1-5"],
  ["差异化", "与已有机制相比独特价值", "1-5"],
  ["数据支撑", "案例或数据支撑有效性", "1-5"]
];

tableData.forEach((row, i) => {
  const y = 1.7 + i * 0.6;
  const bg = i % 2 === 0 ? colors.white : colors.lightGray;
  
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.55,
    fill: { color: bg }
  });
  
  row.forEach((cell, j) => {
    slide6.addText(cell, {
      x: 0.7 + j * 3.0, y: y, w: 2.8, h: 0.55,
      fontSize: 12, fontFace: "Microsoft YaHei", color: colors.darkGray, valign: "middle"
    });
  });
});

// Scoring rule
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.8, w: 9, h: 0.6,
  fill: { color: colors.red }
});
slide6.addText("评分 ≥ 3.5分 → 通过入库  |  评分 < 3.5分 → 退回修改", {
  x: 0.7, y: 4.8, w: 8.5, h: 0.6,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.white, valign: "middle", align: "center"
});

// ==================== SLIDE 7: 工作流 ====================
let slide7 = pres.addSlide();
slide7.background = { color: colors.lightGray };

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide7.addText("工作流：从拆解到入库", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

const steps = [
  { n: "1", t: "收集", d: "搜索游戏资料" },
  { n: "2", t: "拆解", d: "X-Statement分析" },
  { n: "3", t: "筛选", d: "判断机制价值" },
  { n: "4", t: "评分", d: "5维度打分" },
  { n: "5", t: "入库", d: "格式化输出" }
];

steps.forEach((s, i) => {
  const x = 0.4 + i * 1.95;
  
  slide7.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.3, w: 1.8, h: 2.4,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide7.addShape(pres.shapes.OVAL, {
    x: x + 0.55, y: 1.5, w: 0.7, h: 0.7,
    fill: { color: colors.red }
  });
  slide7.addText(s.n, {
    x: x + 0.55, y: 1.5, w: 0.7, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide7.addText(s.t, {
    x: x + 0.1, y: 2.35, w: 1.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true, align: "center"
  });
  
  slide7.addText(s.d, {
    x: x + 0.1, y: 2.8, w: 1.6, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
  });
  
  if (i < 4) {
    slide7.addText("→", {
      x: x + 1.7, y: 2.4, w: 0.3, h: 0.4,
      fontSize: 18, color: colors.red
    });
  }
});

// Tool output
slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.0, w: 9, h: 1.3,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide7.addText("工具", {
  x: 0.7, y: 4.1, w: 1, h: 0.3,
  fontSize: 11, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});
slide7.addText("web_search + web_fetch + game-analyse-sdd skill", {
  x: 0.7, y: 4.4, w: 8.5, h: 0.35,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.darkGray
});

slide7.addText("产出", {
  x: 0.7, y: 4.8, w: 1, h: 0.3,
  fontSize: 11, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});
slide7.addText("机制卡 → 游戏卡 → 网页展示 (http://88.88.88.88:8888)", {
  x: 0.7, y: 5.1, w: 8.5, h: 0.35,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.darkGray
});

// ==================== SLIDE 8: 商业价值 ====================
let slide8 = pres.addSlide();
slide8.background = { color: colors.lightGray };

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.darkGray }
});
slide8.addText("为网易创造什么价值", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei", color: colors.white, bold: true
});

// ROI cards
const rois = [
  { title: "设计周期缩短", value: "30%+", desc: "复用已有机制\n减少重复设计" },
  { title: "试错成本降低", value: "45%+", desc: "339款游戏验证\n减少拍脑袋决策" },
  { title: "新人上手提速", value: "50%+", desc: "直接调用资产\n无需从零学习" }
];

rois.forEach((r, i) => {
  const x = 0.5 + i * 3.1;
  
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.3, w: 2.9, h: 2.4,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  slide8.addText(r.title, {
    x: x + 0.2, y: 1.5, w: 2.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei", color: colors.darkGray, bold: true
  });
  
  slide8.addText(r.value, {
    x: x + 0.2, y: 1.95, w: 2.5, h: 0.7,
    fontSize: 40, fontFace: "Microsoft YaHei", color: colors.red, bold: true
  });
  
  slide8.addText(r.desc, {
    x: x + 0.2, y: 2.75, w: 2.5, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei", color: colors.mediumGray
  });
});

// Strategic value
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.0, w: 9, h: 1.3,
  fill: { color: colors.darkGray }
});

slide8.addText("战略价值", {
  x: 0.7, y: 4.15, w: 2, h: 0.3,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.red, bold: true
});

slide8.addText([
  { text: "• 沉淀组织设计能力 ", options: { bold: true } },
  { text: "不依赖个人，形成长期资产\n" },
  { text: "• 构建竞争壁垒 ", options: { bold: true } },
  { text: "机制库 = 独家方法论 + 数据积累\n" },
  { text: "• 赋能新项目 ", options: { bold: true } },
  { text: "快速启动，降低从0到1的风险" }
], {
  x: 0.7, y: 4.5, w: 8.5, h: 0.8,
  fontSize: 12, fontFace: "Microsoft YaHei", color: colors.white
});

// ==================== SLIDE 9: 总结 ====================
let slide9 = pres.addSlide();
slide9.background = { color: colors.black };

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.12,
  fill: { color: colors.red }
});

// Main message
slide9.addText("游戏设计的核心竞争力", {
  x: 0.5, y: 1.5, w: 9, h: 0.7,
  fontSize: 36, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center"
});

slide9.addText("正在从「人的经验」转向「组织的知识资产」", {
  x: 0.5, y: 2.3, w: 9, h: 0.6,
  fontSize: 20, fontFace: "Microsoft YaHei", color: colors.red, align: "center"
});

// Stats
slide9.addText("428 机制 · 339 游戏 · 15 品类", {
  x: 0.5, y: 3.3, w: 9, h: 0.4,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.gray, align: "center"
});

// CTA
slide9.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 4.0, w: 3, h: 0.6,
  fill: { color: colors.red }
});
slide9.addText("访问 →", {
  x: 3.5, y: 4.0, w: 3, h: 0.6,
  fontSize: 16, fontFace: "Microsoft YaHei", color: colors.white, bold: true, align: "center", valign: "middle"
});

slide9.addText("http://88.88.88.88:8888", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Microsoft YaHei", color: colors.mediumGray, align: "center"
});

// Save
pres.writeFile({ fileName: "/root/.openclaw/workspace/机制库介绍_V2.pptx" })
  .then(() => console.log("✅ PPT created"))
  .catch(err => console.error(err));
