const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '机制库';
pres.author = '小易';

const C = {red:"E61E25",white:"FFFFFF",lightGray:"F5F5F5",gray:"E0E0E0",darkGray:"333333",mediumGray:"666666",black:"000000"};
const SH = ()=>({type:"outer",blur:6,offset:2,angle:135,color:"000000",opacity:0.12});

// SLIDE 1
let s1=pres.addSlide();
s1.background={color:C.darkGray};
s1.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.12,fill:{color:C.red}});
s1.addText("游戏设计的核心竞争力",{x:0.5,y:1.5,w:9,h:0.8,fontSize:48,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center"});
s1.addText("正在从「人的经验」转向「组织的知识资产」",{x:0.5,y:2.4,w:9,h:0.6,fontSize:22,fontFace:"Microsoft YaHei",color:C.red,align:"center"});
s1.addShape(pres.shapes.RECTANGLE,{x:3.5,y:3.3,w:3,h:0.03,fill:{color:C.gray}});
s1.addText("机制库 = 游戏设计的知识资产化平台",{x:0.5,y:3.6,w:9,h:0.5,fontSize:18,fontFace:"Microsoft YaHei",color:C.gray,align:"center"});
s1.addText("创意部 · 2026",{x:0.5,y:4.8,w:9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});

// SLIDE 2
let s2=pres.addSlide();
s2.background={color:C.lightGray};
s2.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s2.addText("机制库的核心优势",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
[{t:"标准化",d:"统一的X-Statement框架\n让所有游戏分析有据可依",i:"📐"},{t:"结构化",d:"5维度评分体系\n机制价值可量化评估",i:"📊"},{t:"可复用",d:"428个已验证机制\n新项目可直接调用",i:"🔄"}].forEach((a,i)=>{
  let x=0.5+i*3.1;
  s2.addShape(pres.shapes.RECTANGLE,{x,x,y:1.2,w:2.9,h:2.4,fill:{color:C.white},shadow:SH()});
  s2.addShape(pres.shapes.RECTANGLE,{x,x,y:1.2,w:2.9,h:0.08,fill:{color:C.red}});
  s2.addText(a.i,{x:x,y:1.4,w:2.9,h:0.5,fontSize:24,align:"center"});
  s2.addText(a.t,{x:x+0.2,y:2.0,w:2.5,h:0.4,fontSize:18,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true,align:"center"});
  s2.addText(a.d,{x:x+0.2,y:2.45,w:2.5,h:1.0,fontSize:12,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});
});
s2.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.9,w:9,h:1.4,fill:{color:C.white},shadow:SH()});
s2.addText("数据规模",{x:0.7,y:4.0,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.red,bold:true});
[{n:"428",l:"已验证机制"},{n:"339",l:"收录游戏"},{n:"15",l:"品类拆解"},{n:"251",l:"机制-游戏关联"}].forEach((s,i)=>{
  let x=2.3+i*1.7;
  s2.addText(s.n,{x:x,y:4.3,w:1.5,h:0.5,fontSize:24,fontFace:"Microsoft YaHei",color:C.red,bold:true,align:"center"});
  s2.addText(s.l,{x:x,y:4.8,w:1.5,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});
});

// SLIDE 3
let s3=pres.addSlide();
s3.background={color:C.lightGray};
s3.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s3.addText("核心方法论：X-Statement",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s3.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.15,w:9,h:1.4,fill:{color:C.white},shadow:SH()});
s3.addText("X-Statement 公式",{x:0.7,y:1.3,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.red,bold:true});
s3.addText("[题材] + [核心玩法] 融合 [次级玩法] 与 [养成要素]，玩家操控 [角色类型]，在 [场景类型] 中使用 [道具系统] 构建独特 [策略体系]。",{x:0.7,y:1.65,w:8.5,h:0.8,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray});
[{t:"核心循环",d:"战斗 → 成长 → 验证 → 刷宝",icon:"⚔️"},{t:"耐玩性",d:"内容更新 / 差异对策 / 随机体验",icon:"♾️"},{t:"社交维度",d:"匹配机制 / 核心场景 / 活人感",icon:"🤝"}].forEach((p,i)=>{
  let x=0.5+i*3.1;
  s3.addShape(pres.shapes.RECTANGLE,{x,x,y:2.75,w:2.9,h:2.5,fill:{color:C.white},shadow:SH()});
  s3.addText(p.icon,{x:x,y:2.9,w:2.9,h:0.5,fontSize:24,align:"center"});
  s3.addText(p.t,{x:x+0.2,y:3.45,w:2.5,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true,align:"center"});
  s3.addText(p.d,{x:x+0.2,y:3.9,w:2.5,h:1.1,fontSize:11,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});
});

// SLIDE 4 - Games评估
let s4=pres.addSlide();
s4.background={color:C.lightGray};
s4.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s4.addText("已入库游戏评估维度",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
s4.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:9,h:0.4,fill:{color:C.red}});
["游戏","品类","商业表现","玩法创新","等级"].forEach((h,i)=>{
  s4.addText(h,{x:0.6+i*1.8,y:1.1,w:1.7,h:0.4,fontSize:10,fontFace:"Microsoft YaHei",color:C.white,bold:true,valign:"middle"});
});
const games = [{n:"枪火重生",c:"FPS Roguelite",s:"国服TOP50",i:"Roguelite+FPS先河",g:"高"},{n:"Mewgenics",c:"Roguelike RPG",s:"12天100万",i:"代际传承创新",g:"极高"},{n:"无主之地3",c:"刷宝FPS",s:"全球2000万+",i:"BD系统标杆",g:"极高"},{n:"命运2",c:"刷宝射击",s:"Steam 31.6万",i:"Raid标杆",g:"极高"},{n:"绝区零",c:"ARPG",s:"全球5000万+",i:"动作创新",g:"高"},{n:"巴洛维",c:"SLG",s:"月流水过亿",i:"SLG创新",g:"高"},{n:"蛋仔派对",c:"休闲竞技",s:"MAU 5000万+",i:"UGC+社交",g:"极高"}];
games.forEach((g,i)=>{
  let y=1.5+i*0.42,bg=i%2===0?C.white:C.lightGray;
  s4.addShape(pres.shapes.RECTANGLE,{x:0.5,y:y,w:9,h:0.4,fill:{color:bg}});
  s4.addText(g.n,{x:0.6,y:y,w:1.7,h:0.4,fontSize:9,fontFace:"Microsoft YaHei",color:C.darkGray,valign:"middle"});
  s4.addText(g.c,{x:2.3,y:y,w:1.7,h:0.4,fontSize:9,fontFace:"Microsoft YaHei",color:C.mediumGray,valign:"middle"});
  s4.addText(g.s,{x:4.0,y:y,w:1.7,h:0.4,fontSize:8,fontFace:"Microsoft YaHei",color:C.mediumGray,valign:"middle"});
  s4.addText(g.i,{x:5.7,y:y,w:1.7,h:0.4,fontSize:8,fontFace:"Microsoft YaHei",color:C.mediumGray,valign:"middle"});
  let gc=g.g==="极高"?C.red:(g.g==="高"?"E61E15":"F59E0B");
  s4.addShape(pres.shapes.RECTANGLE,{x:8.3,y:y+0.04,w:0.8,h:0.32,fill:{color:gc}});
  s4.addText(g.g,{x:8.3,y:y+0.04,w:0.8,h:0.32,fontSize:9,fontFace:"Microsoft YaHei",color:C.white,align:"center",valign:"middle"});
});
s4.addText("评估等级：极高>高>中  |  📷 截图待补充",{x:0.5,y:4.7,w:9,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});

// SLIDE 5-8: 案例 (with image placeholder)
const caseSlides = [
  {t:"枪火重生 - BD组件共享",g:"FPS + Roguelite",d:"多人共享武器秘卷，协作驱动",v:'提升多人社交粘性',x:"国风FPS+Roguelite"},
  {t:"Mewgenics - 遗传育种系统",g:"回合制RPG + Roguelite",d:"猫咪突变遗传后代",v:'代际传承创新，12天100万',x:"喵星人RPG"},
  {t:"无主之地3 - 三层BD构筑",g:"刷宝FPS + RPG",d:"底子→放大器→数值词条",v:'BD标杆，可复用于ARPG',x:"刷宝FPS三层构筑"},
  {t:"命运2 - Raid团队协作",g:"科幻刷宝射击",d:"6人强制协作Raid",v:'Raid设计范式',x:"科幻射击Raid"}
];

caseSlides.forEach((c,idx)=>{
  let s=pres.addSlide();
  s.background={color:C.lightGray};
  s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
  s.addText("案例 "+(idx+1)+"："+c.t,{x:0.5,y:0.25,w:9,h:0.5,fontSize:24,fontFace:"Microsoft YaHei",color:C.white,bold:true});
  
  // VALUE card
  s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:9,h:1.0,fill:{color:C.red}});
  s.addText("💡 复用价值",{x:0.7,y:1.2,w:2,h:0.3,fontSize:12,fontFace:"Microsoft YaHei",color:C.white,bold:true});
  s.addText(c.v,{x:0.7,y:1.55,w:8.5,h:0.45,fontSize:18,fontFace:"Microsoft YaHei",color:C.white});
  
  // Left: Image + info
  s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:2.25,w:4.3,h:3.0,fill:{color:C.white},shadow:SH()});
  s.addShape(pres.shapes.RECTANGLE,{x:0.6,y:2.35,w:4.1,h:1.5,fill:{color:C.gray}});
  s.addText("📷 游戏截图/概念图\n(待补充实际图片)",{x:0.6,y:2.8,w:4.1,h:0.8,fontSize:11,fontFace:"Microsoft YaHei",color:C.white,align:"center",valign:"middle"});
  s.addText(c.t.split(" - ")[0],{x:0.7,y:3.95,w:3.9,h:0.35,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s.addText(c.g,{x:0.7,y:4.3,w:3.9,h:0.3,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});
  s.addText("创新评级 ★"+(idx<2?"5":"4")+"☆",{x:0.7,y:4.9,w:3.9,h:0.25,fontSize:10,fontFace:"Microsoft YaHei",color:C.red});
  
  // Right: Mechanism
  s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.25,w:4.3,h:3.0,fill:{color:C.white},shadow:SH()});
  s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:2.25,w:4.3,h:0.08,fill:{color:C.darkGray}});
  s.addText("机制名称",{x:5.4,y:2.4,w:2,h:0.25,fontSize:10,fontFace:"Microsoft YaHei",color:C.red,bold:true});
  s.addText(c.t.split(" - ")[1],{x:5.4,y:2.7,w:3.9,h:0.35,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s.addText("机制描述",{x:5.4,y:3.1,w:2,h:0.25,fontSize:10,fontFace:"Microsoft YaHei",color:C.red,bold:true});
  s.addText(c.d,{x:5.4,y:3.4,w:3.9,h:0.8,fontSize:10,fontFace:"Microsoft YaHei",color:C.darkGray});
  s.addText("X-Statement",{x:5.4,y:4.3,w:2,h:0.25,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray,bold:true});
  s.addText(c.x,{x:5.4,y:4.6,w:3.9,h:0.5,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});
});

// SLIDE - 品类覆盖
let s9=pres.addSlide();
s9.background={color:C.lightGray};
s9.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s9.addText("品类覆盖一览",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
const cats = [{n:"RPG/ARPG",c:89,e:"BD构筑、技能连招",p:20},{n:"Roguelike",c:67,e:"死亡转化、随机升级",p:16},{n:"MOBA",c:54,e:"团战规模、地图机制",p:13},{n:"FPS/TPS",c:48,e:"枪械改装、撤离模式",p:11},{n:"SLG",c:42,e:"资源循环、联盟系统",p:10},{n:"模拟经营",c:35,e:"空间规划、反馈循环",p:8}];
cats.forEach((c,i)=>{
  let col=i%3,row=Math.floor(i/3),x=0.5+col*3.1,y=1.15+row*2.1;
  s9.addShape(pres.shapes.RECTANGLE,{x,x,y:y,w:2.9,h:1.9,fill:{color:C.white},shadow:SH()});
  s9.addShape(pres.shapes.RECTANGLE,{x,x,y:y,w:0.08,h:1.9,fill:{color:C.red}});
  s9.addText(c.n,{x:x+0.2,y:y+0.15,w:2.5,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s9.addText(c.c+"个",{x:x+0.2,y:y+0.55,w:2.5,h:0.35,fontSize:20,fontFace:"Microsoft YaHei",color:C.red,bold:true});
  s9.addText(c.e,{x:x+0.2,y:y+1.0,w:2.5,h:0.6,fontSize:10,fontFace:"Microsoft YaHei",color:C.mediumGray});
  s9.addShape(pres.shapes.RECTANGLE,{x:x+0.2,y:y+1.6,w:2.5,h:0.15,fill:{color:C.gray}});
  s9.addShape(pres.shapes.RECTANGLE,{x:x+0.2,y:y+1.6,w:c.p*0.025,h:0.15,fill:{color:C.red}});
});
s9.addShape(pres.shapes.RECTANGLE,{x:0.5,y:5.0,w:9,h:0.4,fill:{color:C.red,transparency:90}});
s9.addText("📊 机制分布可视化（实际比例）",{x:0.7,y:5.0,w:8.5,h:0.4,fontSize:11,fontFace:"Microsoft YaHei",color:C.red,valign:"middle"});

// SLIDE - 可拓展性
let s10=pres.addSlide();
s10.background={color:C.lightGray};
s10.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:1,fill:{color:C.darkGray}});
s10.addText("可拓展性规划",{x:0.5,y:0.25,w:9,h:0.5,fontSize:28,fontFace:"Microsoft YaHei",color:C.white,bold:true});
[{t:"品类扩展",d:"覆盖更多游戏品类\n如: 音游/体育/解谜",i:"🎮",q:"Q2"},{t:"AI辅助分析",d:"自动识别游戏机制\n生成初步分析报告",i:"🤖",q:"Q3"},{t:"团队协作",d:"支持多人协同编辑\n评论与反馈机制",i:"👥",q:"Q3"},{t:"API对接",d:"对接内部项目管理系统\n实现自动化入库",i:"🔗",q:"Q4"}].forEach((e,i)=>{
  let col=i%2,row=Math.floor(i/2),x=0.5+col*4.6,y=1.2+row*2;
  s10.addShape(pres.shapes.RECTANGLE,{x,x,y:y,w:4.4,h:1.8,fill:{color:C.white},shadow:SH()});
  s10.addText(e.i,{x:x+0.2,y:y+0.15,w:0.5,h:0.5,fontSize:24});
  s10.addText(e.t,{x:x+0.8,y:y+0.15,w:2.5,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.darkGray,bold:true});
  s10.addText(e.d,{x:x+0.8,y:y+0.6,w:3.3,h:0.7,fontSize:12,fontFace:"Microsoft YaHei",color:C.mediumGray});
  s10.addShape(pres.shapes.RECTANGLE,{x:x+3.4,y:y+0.15,w:0.8,h:0.35,fill:{color:C.red}});
  s10.addText(e.q,{x:x+3.4,y:y+0.15,w:0.8,h:0.35,fontSize:11,fontFace:"Microsoft YaHei",color:C.white,align:"center",valign:"middle"});
});

// SLIDE - 总结
let s11=pres.addSlide();
s11.background={color:C.darkGray};
s11.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.12,fill:{color:C.red}});
s11.addText("游戏设计的核心竞争力",{x:0.5,y:1.5,w:9,h:0.7,fontSize:36,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center"});
s11.addText("正在从「人的经验」转向「组织的知识资产」",{x:0.5,y:2.3,w:9,h:0.6,fontSize:18,fontFace:"Microsoft YaHei",color:C.red,align:"center"});
s11.addText("428 机制 · 339 游戏 · 15 品类",{x:0.5,y:3.2,w:9,h:0.4,fontSize:16,fontFace:"Microsoft YaHei",color:C.gray,align:"center"});
s11.addShape(pres.shapes.RECTANGLE,{x:3.5,y:3.9,w:3,h:0.6,fill:{color:C.red}});
s11.addText("立即访问 →",{x:3.5,y:3.9,w:3,h:0.6,fontSize:16,fontFace:"Microsoft YaHei",color:C.white,bold:true,align:"center",valign:"middle"});
s11.addText("http://88.88.88.8888",{x:0.5,y:4.8,w:9,h:0.4,fontSize:14,fontFace:"Microsoft YaHei",color:C.mediumGray,align:"center"});

pres.writeFile({fileName:"/root/.openclaw/workspace/机制库介绍_V7.pptx"}).then(()=>console.log("OK")).catch(e=>console.error(e));
