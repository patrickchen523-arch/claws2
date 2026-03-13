const pptxgen = require("pptxgenjs");

// Create presentation
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库：游戏设计资产平台';
pres.author = '小易';

// Color palette - Ocean Gradient + Teal Trust
const colors = {
  primary: "065A82",      // deep blue
  secondary: "1C7293",    // teal
  accent: "02C39A",       // mint
  dark: "0A2540",         // midnight
  light: "F8FAFC",        // off-white
  muted: "64748B",        // slate
  white: "FFFFFF",
  gold: "F59E0B"          // accent gold
};

// Helper: create shadow
const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.15 });

// ==================== SLIDE 1: Title ====================
let slide1 = pres.addSlide();
slide1.background = { color: colors.dark };

// Decorative shapes
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 5.625,
  fill: { color: colors.primary, transparency: 30 }
});

// Accent line
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 2.2, w: 1.2, h: 0.06,
  fill: { color: colors.accent }
});

// Main title
slide1.addText("机制库", {
  x: 0.8, y: 2.4, w: 8, h: 1.2,
  fontSize: 60, fontFace: "Arial Black", color: colors.white,
  bold: true
});

// Subtitle
slide1.addText("游戏设计资产平台 · 业务产出介绍", {
  x: 0.8, y: 3.6, w: 8, h: 0.5,
  fontSize: 22, fontFace: "Arial", color: colors.accent
});

// Stats badge
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.5, w: 3.5, h: 0.7,
  fill: { color: colors.secondary },
  shadow: makeShadow()
});
slide1.addText("📊 428 机制  |  339 游戏", {
  x: 0.8, y: 4.5, w: 3.5, h: 0.7,
  fontSize: 16, fontFace: "Arial", color: colors.white,
  align: "center", valign: "middle"
});

// URL
slide1.addText("http://88.88.88.88:8888", {
  x: 7, y: 5.2, w: 3, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: colors.muted
});

// ==================== SLIDE 2: Business Value ====================
let slide2 = pres.addSlide();
slide2.background = { color: colors.light };

// Header bar
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.dark }
});
slide2.addText("业务价值", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Arial Black", color: colors.white, bold: true
});

// Value cards - Row 1
const cardData = [
  { title: "快速复用", desc: "428个已验证机制\n可直接应用于新项目", icon: "🔄" },
  { title: "降低风险", desc: "339款游戏验证\n减少设计试错成本", icon: "🛡️" },
  { title: "灵感来源", desc: "跨品类设计参考\n激发创新思路", icon: "💡" }
];

cardData.forEach((card, i) => {
  const x = 0.5 + i * 3.1;
  
  // Card background
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.4, w: 2.9, h: 2.4,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Accent top bar
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.4, w: 2.9, h: 0.08,
    fill: { color: colors.accent }
  });
  
  // Icon
  slide2.addText(card.icon, {
    x: x, y: 1.6, w: 2.9, h: 0.6,
    fontSize: 32, align: "center"
  });
  
  // Title
  slide2.addText(card.title, {
    x: x + 0.2, y: 2.3, w: 2.5, h: 0.4,
    fontSize: 18, fontFace: "Arial", color: colors.dark, bold: true
  });
  
  // Description
  slide2.addText(card.desc, {
    x: x + 0.2, y: 2.7, w: 2.5, h: 0.9,
    fontSize: 12, fontFace: "Arial", color: colors.muted
  });
});

// Bottom section - ROI
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.1, w: 9, h: 1.2,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide2.addText("📈 投入产出", {
  x: 0.7, y: 4.25, w: 2, h: 0.35,
  fontSize: 14, fontFace: "Arial", color: colors.primary, bold: true
});

slide2.addText([
  { text: "设计周期缩短 ", options: { bold: true } },
  { text: "30%+  " },
  { text: "|  ", options: { color: colors.muted } },
  { text: "跨品类借鉴率 ", options: { bold: true } },
  { text: "45%+  ", options: {} },
  { text: "|  ", options: { color: colors.muted } },
  { text: "新人上手提速 ", options: { bold: true } },
  { text: "50%+", options: {} }
], {
  x: 0.7, y: 4.7, w: 8.5, h: 0.4,
  fontSize: 14, fontFace: "Arial", color: colors.dark
});

// ==================== SLIDE 3: Data Overview ====================
let slide3 = pres.addSlide();
slide3.background = { color: colors.light };

// Header
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.dark }
});
slide3.addText("数据总览", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Arial Black", color: colors.white, bold: true
});

// Big stats - Left side
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 3.5, h: 2.0,
  fill: { color: colors.primary },
  shadow: makeShadow()
});
slide3.addText("428", {
  x: 0.5, y: 1.5, w: 3.5, h: 1.0,
  fontSize: 72, fontFace: "Arial Black", color: colors.white, bold: true, align: "center"
});
slide3.addText("机制卡片", {
  x: 0.5, y: 2.5, w: 3.5, h: 0.5,
  fontSize: 18, fontFace: "Arial", color: colors.accent, align: "center"
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.5, w: 3.5, h: 2.0,
  fill: { color: colors.secondary },
  shadow: makeShadow()
});
slide3.addText("339", {
  x: 0.5, y: 3.7, w: 3.5, h: 1.0,
  fontSize: 72, fontFace: "Arial Black", color: colors.white, bold: true, align: "center"
});
slide3.addText("游戏卡片", {
  x: 0.5, y: 4.7, w: 3.5, h: 0.5,
  fontSize: 18, fontFace: "Arial", color: colors.white, align: "center"
});

// Category breakdown - Right side
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 4.3, y: 1.3, w: 5.2, h: 4.2,
  fill: { color: colors.white },
  shadow: makeShadow()
});

slide3.addText("品类分布", {
  x: 4.5, y: 1.5, w: 4.8, h: 0.4,
  fontSize: 16, fontFace: "Arial", color: colors.dark, bold: true
});

// Category chart data
const categoryData = [
  { label: "RPG/ARPG", value: 89 },
  { label: "Roguelike", value: 67 },
  { label: "MOBA", value: 54 },
  { label: "FPS/TPS", value: 48 },
  { label: "SLG", value: 42 },
  { label: "其他", value: 39 }
];

// Draw bars
const maxVal = 89;
categoryData.forEach((cat, i) => {
  const y = 2.0 + i * 0.55;
  const barWidth = (cat.value / maxVal) * 3.8;
  
  // Label
  slide3.addText(cat.label, {
    x: 4.5, y: y, w: 1.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: colors.dark
  });
  
  // Bar background
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: 5.9, y: y, w: 3.5, h: 0.35,
    fill: { color: "E2E8F0" }
  });
  
  // Bar value
  slide3.addShape(pres.shapes.RECTANGLE, {
    x: 5.9, y: y, w: barWidth, h: 0.35,
    fill: { color: colors.accent }
  });
  
  // Value label
  slide3.addText(String(cat.value), {
    x: 9.5, y: y, w: 0.5, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: colors.muted, align: "right"
  });
});

// ==================== SLIDE 4: Core Features ====================
let slide4 = pres.addSlide();
slide4.background = { color: colors.light };

// Header
slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.dark }
});
slide4.addText("核心功能", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Arial Black", color: colors.white, bold: true
});

// Feature grid - 2x2
const features = [
  { title: "智能检索", desc: "支持标签筛选、关键词搜索\n快速定位目标机制", icon: "🔍" },
  { title: "双向跳转", desc: "机制卡 ↔ 游戏卡\n关联分析一步到位", icon: "🔗" },
  { title: "可视化呈现", desc: "图表、标签云、统计看板\n数据一目了然", icon: "📊" },
  { title: "持续更新", desc: "定期入库新机制\n保持前沿视野", icon: "🚀" }
];

features.forEach((feat, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.5 + col * 4.8;
  const y = 1.3 + row * 2.0;
  
  // Card
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.5, h: 1.8,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Left accent
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 0.08, h: 1.8,
    fill: { color: colors.accent }
  });
  
  // Icon circle
  slide4.addShape(pres.shapes.OVAL, {
    x: x + 0.3, y: y + 0.25, w: 0.7, h: 0.7,
    fill: { color: colors.primary }
  });
  slide4.addText(feat.icon, {
    x: x + 0.3, y: y + 0.25, w: 0.7, h: 0.7,
    fontSize: 24, align: "center", valign: "middle"
  });
  
  // Title
  slide4.addText(feat.title, {
    x: x + 1.2, y: y + 0.3, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Arial", color: colors.dark, bold: true
  });
  
  // Description
  slide4.addText(feat.desc, {
    x: x + 1.2, y: y + 0.8, w: 3.1, h: 0.8,
    fontSize: 12, fontFace: "Arial", color: colors.muted
  });
});

// ==================== SLIDE 5: Usage Flow ====================
let slide5 = pres.addSlide();
slide5.background = { color: colors.light };

// Header
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.0,
  fill: { color: colors.dark }
});
slide5.addText("使用流程", {
  x: 0.5, y: 0.25, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Arial Black", color: colors.white, bold: true
});

// Flow steps
const steps = [
  { num: "01", title: "搜索", desc: "输入关键词或\n选择标签筛选" },
  { num: "02", title: "浏览", desc: "查看机制详情\n了解设计意图" },
  { num: "03", title: "借鉴", desc: "提取可复用设计\n应用到项目" },
  { num: "04", title: "反馈", desc: "评价机制效果\n持续优化更新" }
];

steps.forEach((step, i) => {
  const x = 0.5 + i * 2.4;
  
  // Step card
  slide5.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.5, w: 2.2, h: 3.5,
    fill: { color: colors.white },
    shadow: makeShadow()
  });
  
  // Number
  slide5.addText(step.num, {
    x: x, y: 1.7, w: 2.2, h: 0.6,
    fontSize: 36, fontFace: "Arial Black", color: colors.accent, bold: true, align: "center"
  });
  
  // Title
  slide5.addText(step.title, {
    x: x + 0.2, y: 2.4, w: 1.8, h: 0.5,
    fontSize: 20, fontFace: "Arial", color: colors.dark, bold: true, align: "center"
  });
  
  // Description
  slide5.addText(step.desc, {
    x: x + 0.2, y: 3.0, w: 1.8, h: 0.8,
    fontSize: 12, fontFace: "Arial", color: colors.muted, align: "center"
  });
  
  // Arrow (except last)
  if (i < 3) {
    slide5.addText("→", {
      x: x + 2.2, y: 2.8, w: 0.3, h: 0.4,
      fontSize: 20, color: colors.accent
    });
  }
});

// Bottom note
slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 5.1, w: 9, h: 0.4,
  fill: { color: colors.primary, transparency: 90 }
});
slide5.addText("💻 访问地址：http://88.88.88.88:8888", {
  x: 0.5, y: 5.1, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Arial", color: colors.primary, align: "center", valign: "middle"
});

// ==================== SLIDE 6: Summary ====================
let slide6 = pres.addSlide();
slide6.background = { color: colors.dark };

// Decorative
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 5.625,
  fill: { color: colors.primary, transparency: 40 }
});

// Title
slide6.addText("让游戏设计更简单", {
  x: 0.5, y: 1.5, w: 9, h: 0.8,
  fontSize: 40, fontFace: "Arial Black", color: colors.white, bold: true, align: "center"
});

slide6.addText("428 个已验证机制 · 339 款游戏数据 · 15 个品类拆解", {
  x: 0.5, y: 2.4, w: 9, h: 0.5,
  fontSize: 18, fontFace: "Arial", color: colors.accent, align: "center"
});

// CTA Button style
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.3, w: 3, h: 0.7,
  fill: { color: colors.accent },
  shadow: makeShadow()
});
slide6.addText("立即访问 →", {
  x: 3.5, y: 3.3, w: 3, h: 0.7,
  fontSize: 18, fontFace: "Arial", color: colors.dark, bold: true, align: "center", valign: "middle"
});

slide6.addText("http://88.88.88.88:8888", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: "Arial", color: colors.muted, align: "center"
});

// Save
pres.writeFile({ fileName: "/root/.openclaw/workspace/机制库介绍.pptx" })
  .then(() => console.log("✅ PPT created: /root/.openclaw/workspace/机制库介绍.pptx"))
  .catch(err => console.error(err));
