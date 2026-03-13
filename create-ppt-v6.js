const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库';
pres.author = '小易';

const C = {red:"E61E25",white:"FFFFFF",lightGray:"F5F5F5",gray:"E0E0E0",darkGray:"333333",mediumGray:"666666",black:"000000"};
const SH = ()=>({type:"outer",blur:6,offset:2,angle:135,color:"000000",opacity:0.12});

// Slide 1
let s1=pres.addSlide();
s1.background={color:C.darkGray};
s1.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.12,fill:{color:C.red}});
s1.addText("游戏设计的核心竞争力",{x:0.5,y:1.6,w:9,h:0.8,fontSize:48,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center"});
s1.addText("正在从「人的经验」转向「组织的知识资产」",{x:0.5,y:2.5,w:9,h:0.6,fontSize:22,fontFace:"Microsoft YaHei",color:C.red,align:"center"});
s1.addShape(pres.shapes.RECTANGLE,{x:3.5,y:3.4,w:3,h:0.03,fill:{color:C.gray}});
s1.addText("机制库 = 游戏设计的知识资产化平台",{x:0.5,y:3.7,w:9,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.gray,align:"center"});
s1.addText("创意部 · 2026",{x:0.5,y:4.8,w:9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});

// Slide 2
let s2=pres.addSlide();
s2.background={color:C.lightGray};
s2.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s2.addText("机制库的核心优势",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
[{t:"标准化",d:"统一的X-Statement框架\n让所有游戏分析有据可依",i:"📐"},{t:"结构化",d:"5维度评分体系\n机制价值可量化评估",i:"📊"},{t:"可复用",d:"428个已验证机制\n新项目可直接调用",i:"🔄"}].forEach((a,i)=>{
  let x=0.5+i*3.1;
  s2.addShape(pres.shapes.RECTANGLE,{x,x,y:1.3,w:2.9,h:2.6,fill:{color:C.white},shadow:SH()});
  s2.addShape(pres.shapes.RECTANGLE,{x,x,y:1.3,w:2.9,h:0.08,fill:{color:C.red}});
  s2.addText(a.i,{x,x,y:1.5,w:2.9,h:0.5,fontSize:24,align:"center"});
  s2.addText(a.t,{x:x+0.2,y:2.1,w:2.5,h:0.4,fontSize:18,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true,align:"center"});
  s2.addText(a.d,{x:x+0.2,y:2.55,w:2.5,h:1.1,fontSize:12,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});
});
[{n:"428",l:"已验证机制"},{n:"339",l:"收录游戏"},{n:"15",l:"品类拆解"}].forEach((s,i)=>{
  let x=1.4+i*2.7;
  s2.addShape(pres.shapes.RECTANGLE,{x,x,y:4.2,w:2,h:1.1,fill:{color:C.darkGray}});
  s2.addText(s.n,{x,x,y:4.3,w:2,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.red,bold:true,align:"center"});
  s2.addText(s.l,{x,x,y:4.8,w:2,h:0.4,fontSize:10,fontFace:"Microsoft YaHei",color:C.gray,align:"center"});
});

// Slide 3
let s3=pres.addSlide();
s3.background={color:C.lightGray};
s3.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s3.addText("核心方法论：X-Statement",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s3.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.2,w:9,h:1.6,fill:{color:C.white},shadow:SH()});
s3.addText("X-Statement 公式",{x:0.7,y:1.35,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s3.addText("[题材] + [核心玩法] 融合 [次级玩法] 与 [养成要素]，玩家操控 [角色类型]，在 [场景类型] 中使用 [道具系统] 构建独特 [策略体系]。",{x:0.7,y:1.75,w:8.5,h:0.9,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray});
[{t:"核心循环",d:"战斗 → 成长 → 验证 → 刷宝"},{t:"耐玩性",d:"内容更新 / 差异对策 / 随机体验"},{t:"社交维度",d:"匹配机制 / 核心场景 / 活人感"}].forEach((p,i)=>{
  let x=0.5+i*3.1;
  s3.addShape(pres.shapes.RECTANGLE,{x,x,y:3,w:2.9,h:2.3,fill:{color:C.white},shadow:SH()});
  s3.addShape(pres.shapes.OVAL,{x:x+1.1,y:3.2,w:0.7,h:0.7,fill:{color:C.red}});
  s3.addText(String(i+1),{x:x+1.1,y:3.2,w:0.7,h:0.7,fontSize:20,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center",valign:"middle"});
  s3.addText(p.t,{x:x+0.2,y:4,w:2.5,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true,align:"center"});
  s3.addText(p.d,{x:x+0.2,y:4.45,w:2.5,h:0.7,fontSize:12,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});
});

// SLIDE 4 - 已入库游戏评估
let s4=pres.addSlide();
s4.background={color:C.lightGray};
s4.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s4.addText("已入库游戏评估维度",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});

// Table header
s4.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:0.45,fill:{color:C.red}});
["游戏", "品类", "商业表现", "玩法创新", "行业影响"].forEach((h,i)=>{
  s4.addText(h,{x:0.6+i*1.8,y:1.15,w:1.7,h:0.45,fontSize:11,fontFace:"Microsoft YaHei",color:C.white,bold:true,valign:"middle"});
});

// Table rows - 8 games
const games = [
  {n:"枪火重生",c:"FPS Roguelite",s:"国服畅销榜TOP50",i:"Roguelite+FPS先河",g:"高"},
  {n:"Mewgenics",c:"Roguelike RPG",s:"12天销量破100万",i:"代际传承创新",g:"高"},
  {n:"无主之地3",c:"刷宝FPS",s:"全球销量超2000万",i:"BD系统标杆",g:"极高"},
  {n:"命运2",c:"刷宝射击",s:"Steam峰值31.6万",i:"Raid设计标杆",g:"极高"},
  {n:"绝区零",c:"ARPG",s:"全球下载超5000万",i:"动作手游创新",g:"高"},
  {n:"巴洛维",c:"SLG",s:"月流水超亿美元",i:"SLG创新标杆",g:"高"},
  {n:"赛尔号",c:"页游RPG",s:"中国儿童游戏TOP",i:"国产儿童游戏经典",g:"中"},
  {n:"蛋仔派对",c:"休闲竞技",s:"MAU超5000万",i:"UGC+社交创新",g:"极高"}
];
games.forEach((g,i)=>{
  let y=1.6+i*0.45;
  let bg=i%2===0?C.white:C.lightGray;
  s4.addShape(pres.shapes.RECTANGLE,{x:0.5,y:y,w:9,h:0.42,fill:{color:bg}});
  s4.addText(g.n,{x:0.6,y:y,w:1.7,h:0.42,fontSize:10,fontFace:"Microsoft YaHei",color:C.darkGray,valign:"middle"});
  s4.addText(g.c,{x:2.3,y:y,w:1.7,h:0.42,fontSize:10,fontFace:"Microsoft YaHei",color:C.darkGray,valign:"middle"});
  s4.addText(g.s,{x:4.0,y:y,w:1.7,h:0.42,fontSize:9,fontFace:"Microsoft YaHei",color:C.mediumGray,valign:"middle"});
  s4.addText(g.i,{x:5.7,y:y,w:1.7,h:0.42,fontSize:9,fontFace:"Microsoft YaHei",color:C.mediumGray,valign:"middle"});
  // Grade
  let gradeColor=g.g==="极高"?C.red:(g.g==="高"?"E61E25":"F59E0B");
  s4.addShape(pres.shapes.RECTANGLE,{x:8.3,y:y+0.05,w:0.8,h:0.32,fill:{color:gradeColor}});
  s4.addText(g.g,{x:8.3,y:y+0.05,w:0.8,h:0.32,fontSize:9,fontFace:"Microsoft YaHei",color:C.white,align:"center",valign:"middle"});
});

// Legend
s4.addText("评估等级：极高>高>中",{x:0.5,y:5.2,w:3,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// SLIDE 5 - Case 1 (reordered)
let s5=pres.addSlide();
s5.background={color:C.lightGray};
s5.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s5.addText("案例 1：枪火重生 - BD组件共享",{x:0.5,y:0.25,w:9,h:0.5,fontSize:26,fontFace:"Microsoft YaHei",color:C.white,bold:true});

// VALUE FIRST - big red card at top
s5.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:1.1,fill:{color:C.red}});
s5.addText("💡 复用价值",{x:0.7,y:1.25,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s5.addText('提升多人游戏社交粘性，将"运气驱动"转化为"协作驱动"',{x:0.7,y:1.6,w:8.5,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.white});

// Two column layout
s5.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s5.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s5.addText("游戏信息",{x:0.7,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s5.addText("枪火重生",{x:0.7,y:2.9,w:3.9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s5.addText("FPS + Roguelite / 多益网络",{x:0.7,y:3.35,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s5.addText("国服畅销榜TOP50",{x:0.7,y:3.75,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s5.addText("玩法创新 ★★★★☆",{x:0.7,y:4.15,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.red});

s5.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s5.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s5.addText("机制描述",{x:5.4,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s5.addText("BD组件共享（多人模式）",{x:5.4,y:2.9,w:3.9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s5.addText('多人模式下，所有玩家共享武器和秘卷获取，形成"协作驱动"的游戏体验，而非传统FPS Roguelite的"运气驱动"。',{x:5.4,y:3.35,w:3.9,h:1.0,fontSize:11,fontFace:"Microsoft YaHei",color:C.darkGray});
s5.addText("X-Statement",{x:5.4,y:4.45,w:2,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,bold:true});
s5.addText("国风FPS+Roguelite，共享武器秘卷协作通关",{x:5.4,y:4.75,w:3.9,h:0.35,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// SLIDE 6 - Case 2
let s6=pres.addSlide();
s6.background={color:C.lightGray};
s6.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s6.addText("案例 2：Mewgenics - 遗传育种系统",{x:0.5,y:0.25,w:9,h:0.5,fontSize:26,fontFace:"Microsoft YaHei",color:C.white,bold:true});

s6.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:1.1,fill:{color:C.red}});
s6.addText("💡 复用价值",{x:0.7,y:1.25,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s6.addText('为Roguelite游戏提供"代际传承"创新方向，12天销量破100万',{x:0.7,y:1.6,w:8.5,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.white});

s6.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s6.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s6.addText("游戏信息",{x:0.7,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s6.addText("Mewgenics",{x:0.7,y:2.9,w:3.9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s6.addText("回合制RPG + Roguelite",{x:0.7,y:3.35,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s6.addText("12天销量破100万 / PCU 11.5万",{x:0.7,y:3.75,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s6.addText("创新评级 ★★★★★",{x:0.7,y:4.15,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.red});

s6.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s6.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s6.addText("机制描述",{x:5.4,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s6.addText("遗传育种系统",{x:5.4,y:2.9,w:3.9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s6.addText('猫咪突变可遗传给后代，形成跨代际养成深度。只有基础属性会遗传，突变和缺陷绝对遗传，创造独特的"遗产"玩法。',{x:5.4,y:3.35,w:3.9,h:1.0,fontSize:11,fontFace:"Microsoft YaHei",color:C.darkGray});
s6.addText("X-Statement",{x:5.4,y:4.45,w:2,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,bold:true});
s6.addText("喵星人RPG，交配繁殖突变遗传",{x:5.4,y:4.75,w:3.9,h:0.35,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// SLIDE 7 - Case 3
let s7=pres.addSlide();
s7.background={color:C.lightGray};
s7.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s7.addText("案例 3：无主之地3 - 三层BD构筑",{x:0.5,y:0.25,w:9,h:0.5,fontSize:26,fontFace:"Microsoft YaHei",color:C.white,bold:true});

s7.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:1.1,fill:{color:C.red}});
s7.addText("💡 复用价值",{x:0.7,y:1.25,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s7.addText("刷宝FPS的BD标杆模板，三层构筑逻辑可复用到任何RPG/ARPG",{x:0.7,y:1.6,w:8.5,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.white});

s7.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s7.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s7.addText("游戏信息",{x:0.7,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s7.addText("无主之地3",{x:0.7,y:2.9,w:3.9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s7.addText("刷宝FPS + RPG",{x:0.7,y:3.35,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s7.addText("全球销量超2000万份",{x:0.7,y:3.75,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s7.addText("行业影响 ★★★★★",{x:0.7,y:4.15,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.red});

s7.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s7.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s7.addText("机制描述",{x:5.4,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s7.addText("三层BD构筑体系",{x:5.4,y:2.9,w:3.9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s7.addText("底子(模组+天赋)→放大器(武器机制)→数值词条，三层构筑带来指数级成长体验。4职业×45模组×661种武器机制。",{x:5.4,y:3.35,w:3.9,h:1.0,fontSize:11,fontFace:"Microsoft YaHei",color:C.darkGray});
s7.addText("X-Statement",{x:5.4,y:4.45,w:2,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,bold:true});
s7.addText("刷宝FPS，三层构筑验证BD强度",{x:5.4,y:4.75,w:3.9,h:0.35,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// SLIDE 8 - Case 4
let s8=pres.addSlide();
s8.background={color:C.lightGray};
s8.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s8.addText("案例 4：命运2 - Raid团队协作机制",{x:0.5,y:0.25,w:9,h:0.5,fontSize:26,fontFace:"Microsoft YaHei",color:C.white,bold:true});

s8.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:1.1,fill:{color:C.red}});
s8.addText("💡 复用价值",{x:0.7,y:1.25,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s8.addText("Raid设计范式：6人分工+多阶段机制，可复用于MMO/射击/动作游戏",{x:0.7,y:1.6,w:8.5,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.white});

s8.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s8.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s8.addText("游戏信息",{x:0.7,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s8.addText("命运2",{x:0.7,y:2.9,w:3.9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s8.addText("科幻刷宝射击",{x:0.7,y:3.35,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s8.addText("Steam峰值31.6万 / 8年运营",{x:0.7,y:3.75,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
s8.addText("行业影响 ★★★★★",{x:0.7,y:4.15,w:3.9,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.red});

s8.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:2.8,fill:{color:C.white},shadow:SH()});
s8.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.4,w:4.3,h:0.08,fill:{color:C.darkGray}});
s8.addText("机制描述",{x:5.4,y:2.55,w:2,h:0.3,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s8.addText("Raid团队协作机制",{x:5.4,y:2.9,w:3.9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
s8.addText("6人强制协作Raid，10个Raid+10个地牢，每个副本需要精确分工配合。8年运营积累，25+赛季。",{x:5.4,y:3.35,w:3.9,h:1.0,fontSize:11,fontFace:"Microsoft YaHei",color:C.darkGray});
s8.addText("X-Statement",{x:5.4,y:4.45,w:2,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,bold:true});
s8.addText("科幻刷宝射击，6人Raid协作",{x:5.4,y:4.75,w:3.9,h:0.35,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// Slide 9 - Categories
let s9=pres.addSlide();
s9.background={color:C.lightGray};
s9.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s9.addText("品类覆盖一览",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
[{n:"RPG/ARPG",c:89,e:"BD构筑、技能连招"},{n:"Roguelike",c:67,e:"死亡转化、随机升级"},{n:"MOBA",c:54,e:"团战规模、地图机制"},{n:"FPS/TPS",c:48,e:"枪械改装、撤离模式"},{n:"SLG",c:42,e:"资源循环、联盟系统"},{n:"模拟经营",c:35,e:"空间规划、反馈循环"}].forEach((c,i)=>{
  let col=i%3,row=Math.floor(i/3),x=0.5+col*3.1,y=1.2+row*2;
  s9.addShape(pres.shapes.RECTANGLE,{x,x,y,y,w:2.9,h:1.8,fill:{color:C.white},shadow:SH()});
  s9.addShape(pres.shapes.RECTANGLE,{x,x,y,y,w:0.08,h:1.8,fill:{color:C.red}});
  s9.addText(c.n,{x:x+0.2,y:y+0.15,w:2.5,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s9.addText(c.c+" 个机制",{x:x+0.2,y:y+0.55,w:2.5,h:0.35,fontSize:18,fontFace:"Microsoft YaHei",color:C.red,bold:true});
  s9.addText(c.e,{x:x+0.2,y:y+1,w:2.5,h:0.6,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray});
});

// Slide 10 - Expansion
let s10=pres.addSlide();
s10.background={color:C.lightGray};
s10.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s10.addText("可拓展性规划",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
[{t:"品类扩展",d:"覆盖更多游戏品类\n如: 音游/体育/解谜",i:"🎮",q:"Q2"},{t:"AI辅助分析",d:"自动识别游戏机制\n生成初步分析报告",i:"🤖",q:"Q3"},{t:"团队协作",d:"支持多人协同编辑\n评论与反馈机制",i:"👥",q:"Q3"},{t:"API对接",d:"对接内部项目管理系统\n实现自动化入库",i:"🔗",q:"Q4"}].forEach((e,i)=>{
  let col=i%2,row=Math.floor(i/2),x=0.5+col*4.6,y=1.3+row*2;
  s10.addShape(pres.shapes.RECTANGLE,{x,x,y,y,w:4.4,h:1.8,fill:{color:C.white},shadow:SH()});
  s10.addText(e.i,{x:x+0.2,y:y+0.2,w:0.5,h:0.5,fontSize:24});
  s10.addText(e.t,{x:x+0.8,y:y+0.2,w:2.5,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s10.addText(e.d,{x:x+0.8,y:y+0.65,w:3.3,h:0.7,fontSize:12,fontFace:"Microsoft YaHei",color:C.mediumGray});
  s10.addShape(pres.shapes.RECTANGLE,{x:x+3.4,y:y+0.15,w:0.8,h:0.35,fill:{color:C.red}});
  s10.addText(e.q,{x:x+3.4,y:y+0.15,w:0.8,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.white,align:"center",valign:"middle"});
});

// Slide 11 - Summary
let s11=pres.addSlide();
s11.background={color:C.darkGray};
s11.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.12,fill:{color:C.red}});
s11.addText("游戏设计的核心竞争力",{x:0.5,y:1.5,w:9,h:0.7,fontSize:36,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center"});
s11.addText("正在从「人的经验」转向「组织的知识资产」",{x:0.5,y:2.3,w:9,h:0.6,fontSize:18,fontFace:"Microsoft YaHei",color:C.red,align:"center"});
s11.addText("428 机制 · 339 游戏 · 15 品类",{x:0.5,y:3.2,w:9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.gray,align:"center"});
s11.addShape(pres.shapes.RECTANGLE,{x:3.5,y:3.9,w:3,h:0.6,fill:{color:C.red}});
s11.addText("立即访问 →",{x:3.5,y:3.9,w:3,h:0.6,fontSize:16,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center",valign:"middle"});
s11.addText("http://88.88.88.8888",{x:0.5,y:4.8,w:9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});

pres.writeFile({fileName:"/root/.openclaw/workspace/机制库介绍_V6.pptx"}).then(()=>console.log("OK")).catch(e=>console.error(e));
