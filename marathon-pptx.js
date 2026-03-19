const pptxgen = require("pptxgenjs");
const mkShadow = (o=0.18) => ({ type:'outer', blur:8, offset:3, angle:135, color:'000000', opacity:o });
const C = { bg:'0A1628',bg2:'0F2137',accent:'00D4FF',accent2:'7C3AED',gold:'F5A623',white:'FFFFFF',offwhite:'E2E8F0',muted:'94A3B8',darkText:'1E293B',lightBg:'F1F5F9',cardBg:'1E3A5F',green:'10B981',orange:'F59E0B' };

async function createPresentation() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Marathon 游戏机制分析';
  pres.author = 'Jizhi Mechanism Library';

  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.07,fill:{color:C.accent}});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.4,w:0.1,h:2.9,fill:{color:C.accent}});
    s.addText('MARATHON',{x:0.85,y:1.4,w:8.5,h:1.2,fontSize:76,fontFace:'Arial Black',bold:true,color:C.white,margin:0});
    s.addText('游戏机制全流程分析',{x:0.85,y:2.65,w:8.5,h:0.65,fontSize:28,color:C.accent,margin:0});
    const tags=['搜打撤','Bungie','2026','PvPvE','原型+结构创新']; let tx=0.85;
    tags.forEach(tag=>{ const tw=tag.length*0.21+0.35;
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:3.5,w:tw,h:0.38,fill:{color:C.accent,transparency:85},line:{color:C.accent,width:1}});
      s.addText(tag,{x:tx,y:3.5,w:tw,h:0.38,fontSize:11,color:C.accent,align:'center',valign:'middle'});
      tx+=tw+0.15; });
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:5.2,w:10,h:0.425,fill:{color:C.bg2}});
    s.addText('Extraction Shooter  ·  Game Mechanic Analysis  ·  Jizhi Mechanism Library',{x:0.5,y:5.2,w:9,h:0.425,fontSize:11,color:C.muted,valign:'middle'}); }


  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('玩法拓扑',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    const cards=[{label:'主玩法',name:'PvPvE 撤离搜刮',desc:'不玩它游戏无意义',color:C.accent,w:2.8},{label:'副玩法 A',name:'轨道 Raid',desc:'6人协作 PvE 终局',color:C.accent2,w:2.8},{label:'副玩法 B',name:'周末天梯 Ranked',desc:'纯 PvP 竞技',color:C.gold,w:2.8}];
    let cx=0.5;
    cards.forEach(c=>{
      s.addShape(pres.shapes.RECTANGLE,{x:cx,y:1.1,w:c.w,h:1.35,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
      s.addShape(pres.shapes.RECTANGLE,{x:cx,y:1.1,w:c.w,h:0.07,fill:{color:c.color}});
      s.addText(c.label,{x:cx+0.18,y:1.25,w:c.w-0.36,h:0.28,fontSize:10,color:C.muted,margin:0});
      s.addText(c.name,{x:cx+0.18,y:1.52,w:c.w-0.36,h:0.4,fontSize:15,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addText(c.desc,{x:cx+0.18,y:1.95,w:c.w-0.36,h:0.3,fontSize:11,color:C.muted,margin:0});
      cx+=c.w+0.25; });
    s.addText('主玩法核心循环',{x:0.5,y:2.65,w:9,h:0.35,fontSize:13,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    const loop=['进入区域','搜刮物资','激活撤离','PvPvE战斗','撤离成功','强化装备']; let lx=0.5;
    loop.forEach((step,i)=>{
      s.addShape(pres.shapes.RECTANGLE,{x:lx,y:3.1,w:1.25,h:0.55,fill:{color:i===2?C.accent:C.bg}});
      s.addText(step,{x:lx,y:3.1,w:1.25,h:0.55,fontSize:11,fontFace:'Arial',bold:true,color:C.white,align:'center',valign:'middle'});
      if(i<loop.length-1) s.addText('→',{x:lx+1.25,y:3.1,w:0.25,h:0.55,fontSize:14,color:C.accent,align:'center',valign:'middle'});
      lx+=1.5; });
    s.addText('关键约束',{x:0.5,y:3.85,w:9,h:0.35,fontSize:13,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    const cons=['撤离窗口暴露位置','装备底注风险','噪音持续暴露','体力物资有限']; let bx=0.5;
    cons.forEach(c=>{ const bw=c.length*0.17+0.4;
      s.addShape(pres.shapes.RECTANGLE,{x:bx,y:4.25,w:bw,h:0.38,fill:{color:C.bg2}});
      s.addText(c,{x:bx,y:4.25,w:bw,h:0.38,fontSize:11,color:C.offwhite,align:'center',valign:'middle'});
      bx+=bw+0.2; }); }


  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('副玩法分析',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:0.08,fill:{color:C.accent2}});
    s.addText('轨道 Raid',{x:0.7,y:1.28,w:3.9,h:0.45,fontSize:20,fontFace:'Arial Black',bold:true,color:C.darkText,margin:0});
    s.addText('UESC Marathon · 主玩法变体',{x:0.7,y:1.73,w:3.9,h:0.28,fontSize:11,color:C.muted,margin:0});
    s.addText('6人协作解谜 + 突破安保机制，提供游戏最高难度的终局 PvE 内容。',{x:0.7,y:2.08,w:3.9,h:0.65,fontSize:12,color:C.darkText,margin:0});
    const rr=[['入口门槛','需毕业 Build + 6人队伍'],['对抗结构','纯 PvE（无玩家威胁）'],['失败惩罚','死亡可复活（限制次数）'],['时间结构','60-90 分钟/次'],['奖励性质','剧情 + 独特遗物']]; let ry=2.8;
    rr.forEach(([k,v])=>{ s.addText(k,{x:0.7,y:ry,w:1.5,h:0.35,fontSize:11,bold:true,color:C.accent2,margin:0}); s.addText(v,{x:2.2,y:ry,w:2.4,h:0.35,fontSize:11,color:C.darkText,margin:0}); ry+=0.4; });
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:0.08,fill:{color:C.gold}});
    s.addText('周末天梯 Ranked',{x:5.4,y:1.28,w:3.9,h:0.45,fontSize:20,fontFace:'Arial Black',bold:true,color:C.darkText,margin:0});
    s.addText('纯 PvP 竞技 · 主玩法变体',{x:5.4,y:1.73,w:3.9,h:0.28,fontSize:11,color:C.muted,margin:0});
    s.addText('纯 PvP 对抗 + Holotag 底注博弈，提供高频次、高竞争力的竞技体验。',{x:5.4,y:2.08,w:3.9,h:0.65,fontSize:12,color:C.darkText,margin:0});
    const kr=[['对抗结构','纯 PvP（无 AI 威胁）'],['地图','周末轮换固定区域'],['经济绑定','Holotag 底注押 RP'],['进入门槛','Runner Level 25'],['奖励结构','段位皮肤/称号/背景']]; ry=2.8;
    kr.forEach(([k,v])=>{ s.addText(k,{x:5.4,y:ry,w:1.5,h:0.35,fontSize:11,bold:true,color:C.gold,margin:0}); s.addText(v,{x:6.9,y:ry,w:2.4,h:0.35,fontSize:11,color:C.darkText,margin:0}); ry+=0.4; }); }


  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg2}});
    s.addText('机制扫描概览',{x:0.5,y:0.15,w:8,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('9 系统  ·  62 子模块  ·  搜打撤品类',{x:0.5,y:0.62,w:9,h:0.25,fontSize:11,color:C.muted,margin:0});
    const systems=[{name:'战斗系统',modules:'1.1-1.12',count:'12',hl:true},{name:'任务系统',modules:'2.1-2.6',count:'6',hl:false},{name:'经济系统',modules:'3.1-3.7',count:'7',hl:true},{name:'养成/数值',modules:'4.1-4.7',count:'7',hl:false},{name:'社交系统',modules:'5.1-5.6',count:'6',hl:false},{name:'关卡系统',modules:'6.1-6.6',count:'6',hl:true},{name:'Meta/运营',modules:'7.1-7.6',count:'6',hl:false},{name:'商业化',modules:'8.1-8.6',count:'6',hl:false},{name:'UX/信息',modules:'9.1-9.5',count:'5',hl:false}];
    let gx=0.5,gy=1.1;
    systems.forEach((sys,i)=>{
      if(i===5){ gx=0.5; gy+=1.5; }
      const sl=pres.shapes.RECTANGLE;
      s.addShape(sl,{x:gx,y:gy,w:2.9,h:1.3,fill:{color:sys.hl?C.cardBg:'0F2744'},line:sys.hl?{color:C.accent,width:1}:null,shadow:mkShadow(0.12)});
      if(sys.hl) s.addShape(sl,{x:gx,y:gy,w:2.9,h:0.06,fill:{color:C.accent}});
      s.addText(sys.name,{x:gx+0.2,y:gy+0.15,w:2.5,h:0.38,fontSize:15,fontFace:'Arial',bold:true,color:C.white,margin:0});
      s.addText(sys.modules,{x:gx+0.2,y:gy+0.53,w:2.5,h:0.28,fontSize:11,color:C.muted,margin:0});
      s.addText(sys.count,{x:gx+0.2,y:gy+0.8,w:2.5,h:0.38,fontSize:22,fontFace:'Arial Black',color:sys.hl?C.accent:C.offwhite,margin:0});
      gx+=3.1; }); }


  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('Top 5 值得吸收的机制',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    const mechanisms=[{rank:'01',name:'动态撤离点',sys:'关卡系统 6.3',hl:'每局撤离点半随机刷新位置，单人撤离后点位消失',val:'解决蹲撤离点博弈僵化的品类痛点',color:C.accent},{rank:'02',name:'噪音暴露系统',sys:'战斗系统 1.7',hl:'移动/搜刮/战斗产生不同级别噪音，实时显示',val:'将信息战引入搜打撤，让战术决策不只依赖枪法',color:C.accent2},{rank:'03',name:'烟雾克制AI仇恨',sys:'战斗系统 1.5',hl:'烟雾弹完全消除UESC巡逻队仇恨，可穿越危险区',val:'创造 PvE 和 PvP 之间的第三条路，丰富单局决策',color:C.green},{rank:'04',name:'三层库存保护',sys:'经济系统 3.6',hl:'背包(全损)→安全箱(局内)→仓库(永久)',val:'解决风险收益缺乏梯度的品类痛点',color:C.gold},{rank:'05',name:'Runner Shell 职业',sys:'战斗系统 1.12',hl:'4职业 × 三层Build(Cores+Implants+武器Mod)',val:'提供战术深度，让组队配合有价值',color:C.orange}];
    let ky=1.05;
    mechanisms.forEach(m=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:ky,w:9,h:0.82,fill:{color:'FFFFFF'},shadow:mkShadow(0.08)});
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:ky,w:0.7,h:0.82,fill:{color:m.color}});
      s.addText(m.rank,{x:0.5,y:ky,w:0.7,h:0.82,fontSize:22,fontFace:'Arial Black',bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(m.name,{x:1.35,y:ky+0.08,w:2.8,h:0.35,fontSize:15,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addText(m.sys,{x:1.35,y:ky+0.43,w:2.8,h:0.25,fontSize:10,color:C.muted,margin:0});
      s.addText(m.hl,{x:4.3,y:ky+0.08,w:5,h:0.35,fontSize:11,color:C.darkText,margin:0});
      s.addText(m.val,{x:4.3,y:ky+0.43,w:5,h:0.3,fontSize:10,color:m.color,bold:true,margin:0});
      ky+=0.9; }); }


  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg2}});
    s.addText('创新评价 · 结构创新',{x:0.5,y:0.15,w:7.5,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addShape(pres.shapes.RECTANGLE,{x:8.3,y:0.18,w:1.2,h:0.54,fill:{color:C.accent}});
    s.addText('4 项',{x:8.3,y:0.18,w:1.2,h:0.54,fontSize:20,fontFace:'Arial Black',bold:true,color:C.bg,align:'center',valign:'middle'});
    const inn=[{name:'噪音暴露系统',pass:['玩家实时感知','改变遭遇决策节奏','去掉退化为蹲点射击'],color:C.accent2},{name:'动态撤离点',pass:['玩家每局都能感知','改变撤离博弈结构','去掉退化为塔科夫式蹲守'],color:C.accent},{name:'烟雾克制AI仇恨',pass:['玩家可感知效果','创造第三条战术路径','去掉PvE变成随机风险'],color:C.green},{name:'三层库存分层',pass:['玩家清楚感知层级','风险收益有清晰梯度','去掉变成全有或全无'],color:C.gold}];
    let ix=0.5;
    inn.forEach(item=>{
      s.addShape(pres.shapes.RECTANGLE,{x:ix,y:1.1,w:2.2,h:4.2,fill:{color:C.cardBg},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:ix,y:1.1,w:2.2,h:0.08,fill:{color:item.color}});
      s.addText(item.name,{x:ix+0.15,y:1.28,w:1.9,h:0.6,fontSize:14,fontFace:'Arial',bold:true,color:C.white,margin:0});
      const passes=[{label:'可感知',text:item.pass[0]},{label:'结构性',text:item.pass[1]},{label:'区分度',text:item.pass[2]}];
      let py=2.0;
      passes.forEach(p=>{
        s.addShape(pres.shapes.RECTANGLE,{x:ix+0.15,y:py,w:0.65,h:0.28,fill:{color:item.color}});
        s.addText(p.label,{x:ix+0.15,y:py,w:0.65,h:0.28,fontSize:9,bold:true,color:C.bg,align:'center',valign:'middle'});
        s.addText(p.text,{x:ix+0.15,y:py+0.32,w:1.9,h:0.7,fontSize:10,color:C.offwhite,margin:0});
        py+=1.1; });
      ix+=2.4; }); }


  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('机制推理 · 体验支柱',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    const pillars=[{title:'双未知撤离博弈',mechanisms:'动态撤离点 × 噪音暴露系统 × 三层库存',synergy:'乘法关系',desc:'空间未知（动态撤离点）× 信息未知（噪音暴露）——两个未知叠加，让每局都是真正的探索决策。',color:C.accent},{title:'战术配合深度',mechanisms:'Runner Shell职业 × 烟雾克制AI × Proximity语音',synergy:'弥补关系',desc:'职业差异 × 烟雾 = 不同职业利用烟雾的能力差异形成战术互补（治疗职业穿越危险区最有价值）。',color:C.accent2},{title:'叙事合理化死亡',mechanisms:'克隆体设定 × 永久进度 × Raid终局叙事',synergy:'保险丝关系',desc:'克隆体降低死亡心理门槛 × 永久进度保证回来仍有事做——确保"死亡不是终点，只是暂停"的感觉。',color:C.gold}];
    let py=1.1;
    pillars.forEach(p=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:py,w:9,h:1.35,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:py,w:0.1,h:1.35,fill:{color:p.color}});
      s.addText(p.title,{x:0.8,y:py+0.12,w:4.5,h:0.4,fontSize:17,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addShape(pres.shapes.RECTANGLE,{x:7.9,y:py+0.15,w:1.3,h:0.3,fill:{color:p.color}});
      s.addText(p.synergy,{x:7.9,y:py+0.15,w:1.3,h:0.3,fontSize:10,bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(p.mechanisms,{x:0.8,y:py+0.52,w:8.4,h:0.3,fontSize:11,color:p.color,margin:0});
      s.addText(p.desc,{x:0.8,y:py+0.83,w:8.4,h:0.42,fontSize:11,color:C.darkText,margin:0});
      py+=1.5; }); }


  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg2}});
    s.addText('机制推理 · 结构性脆弱点',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    const walls=[{name:'噪音暴露系统',effect:'去掉后遭遇博弈退化为标准FPS蹲点，核心差异化消失',color:C.accent2},{name:'动态撤离点',effect:'去掉后博弈退化为塔科夫式蹲守，品类差异化消失',color:C.accent},{name:'三层库存分层',effect:'去掉后风险收益变成"全有或全无"，策略分化消失',color:C.gold}];
    let wx=0.5;
    walls.forEach(w=>{
      s.addShape(pres.shapes.RECTANGLE,{x:wx,y:1.1,w:2.9,h:2.0,fill:{color:C.cardBg},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:wx,y:1.1,w:2.9,h:0.08,fill:{color:w.color}});
      s.addShape(pres.shapes.RECTANGLE,{x:wx+0.15,y:1.28,w:0.5,h:0.5,fill:{color:w.color}});
      s.addText('墙',{x:wx+0.15,y:1.28,w:0.5,h:0.5,fontSize:11,bold:true,color:C.bg,align:'center',valign:'middle'});
      s.addText(w.name,{x:wx+0.15,y:1.85,w:2.6,h:0.4,fontSize:14,fontFace:'Arial',bold:true,color:C.white,margin:0});
      s.addText(w.effect,{x:wx+0.15,y:2.3,w:2.6,h:0.7,fontSize:11,color:C.offwhite,margin:0});
      wx+=3.15; });
    const deco=[{name:'Runner Shell职业',effect:'去掉后游戏退化为纯枪法对抗，但撤离/噪音/库存核心仍成立',color:C.muted},{name:'Proximity语音',effect:'去掉后仍有小队语音，但临场感削弱',color:C.muted}];
    let dx=0.5;
    deco.forEach(d=>{
      s.addShape(pres.shapes.RECTANGLE,{x:dx,y:3.35,w:4.4,h:1.0,fill:{color:'0F2744'}});
      s.addShape(pres.shapes.RECTANGLE,{x:dx,y:3.35,w:0.08,h:1.0,fill:{color:d.color}});
      s.addText('装饰  '+d.name,{x:dx+0.2,y:3.45,w:4,h:0.35,fontSize:13,fontFace:'Arial',bold:true,color:C.muted,margin:0});
      s.addText(d.effect,{x:dx+0.2,y:3.82,w:4,h:0.42,fontSize:11,color:C.muted,margin:0});
      dx+=4.6; }); }


  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.07,fill:{color:C.accent}});
    s.addText('设计精华',{x:0.5,y:0.4,w:9,h:0.7,fontSize:32,fontFace:'Arial Black',bold:true,color:C.white,margin:0});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.3,w:9,h:2.8,fill:{color:C.cardBg},shadow:mkShadow(0.2)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.3,w:0.12,h:2.8,fill:{color:C.accent}});
    s.addText('Marathon 成立的关键在于构建了一个',{x:0.9,y:1.55,w:8.3,h:0.45,fontSize:16,color:C.offwhite,margin:0});
    s.addText('"双未知+有策略"',{x:0.9,y:2.0,w:8.3,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.accent,margin:0});
    s.addText('的撤离博弈',{x:0.9,y:2.65,w:8.3,h:0.45,fontSize:16,color:C.offwhite,margin:0});
    const formula=[{label:'空间未知',val:'动态撤离点',color:C.accent},{label:'×',val:'',color:C.muted},{label:'信息未知',val:'噪音暴露系统',color:C.accent2},{label:'×',val:'',color:C.muted},{label:'风险有梯度',val:'三层库存',color:C.gold}];
    let fx=0.9,fy=3.25;
    formula.forEach(f=>{
      if(f.label==='×'){ s.addText('×',{x:fx,y:fy,w:0.4,h:0.4,fontSize:18,color:C.muted,align:'center',valign:'middle'}); fx+=0.4; }
      else{ const fw=f.label.length*0.22+0.4;
        s.addShape(pres.shapes.RECTANGLE,{x:fx,y:fy,w:fw,h:0.4,fill:{color:f.color,transparency:80},line:{color:f.color,width:1}});
        s.addText(f.label,{x:fx,y:fy,w:fw,h:0.4,fontSize:11,color:f.color,align:'center',valign:'middle'});
        fx+=fw+0.55; } });
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:4.5,w:10,h:1.125,fill:{color:C.bg2}});
    const tags=['搜打撤','Bungie','Marathon','原型+结构创新','2026-03-19']; let tx=0.5;
    tags.forEach(tag=>{ const tw=tag.length*0.2+0.4;
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:4.65,w:tw,h:0.35,fill:{color:C.accent,transparency:88},line:{color:C.accent,width:1}});
      s.addText(tag,{x:tx,y:4.65,w:tw,h:0.35,fontSize:10,color:C.accent,align:'center',valign:'middle'});
      tx+=tw+0.2; });
    s.addText('Jizhi Mechanism Library  ·  game-analyse-2.0',{x:0.5,y:5.12,w:9,h:0.3,fontSize:10,color:C.muted}); }


  await pres.writeFile({fileName:'/tmp/Marathon_游戏机制分析.pptx'});
  console.log('Done: /tmp/Marathon_游戏机制分析.pptx'); }
createPresentation().catch(console.error);

