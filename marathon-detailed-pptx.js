const pptxgen = require("pptxgenjs");
const mkShadow = (o=0.18) => ({ type:'outer', blur:8, offset:3, angle:135, color:'000000', opacity:o });
const C = { bg:'0A1628',bg2:'0F2137',accent:'00D4FF',accent2:'7C3AED',gold:'F5A623',white:'FFFFFF',offwhite:'E2E8F0',muted:'94A3B8',darkText:'1E293B',lightBg:'F1F5F9',cardBg:'1E3A5F',green:'10B981',orange:'F59E0B',red:'EF4444' };

async function createPresentation() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Marathon 游戏机制分析';
  pres.author = 'Jizhi Mechanism Library';

  // ===== SLIDE 1: Cover =====
  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.07,fill:{color:C.accent}});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.4,w:0.1,h:3.0,fill:{color:C.accent}});
    s.addText('MARATHON',{x:0.85,y:1.4,w:8.5,h:1.2,fontSize:76,fontFace:'Arial Black',bold:true,color:C.white,margin:0});
    s.addText('结构创新深度解析',{x:0.85,y:2.65,w:8.5,h:0.65,fontSize:32,color:C.accent,margin:0});
    s.addText('噪音暴露 · 动态撤离点 · 烟雾克AI · 三层库存',{x:0.85,y:3.35,w:8.5,h:0.5,fontSize:16,color:C.offwhite,margin:0});
    const tags=['搜打撤','Bungie','2026','PvPvE','原型+结构创新']; let tx=0.85;
    tags.forEach(tag=>{ const tw=tag.length*0.21+0.35;
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:4.1,w:tw,h:0.38,fill:{color:C.accent,transparency:85},line:{color:C.accent,width:1}});
      s.addText(tag,{x:tx,y:4.1,w:tw,h:0.38,fontSize:11,color:C.accent,align:'center',valign:'middle'});
      tx+=tw+0.15; });
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:5.2,w:10,h:0.425,fill:{color:C.bg2}});
    s.addText('Extraction Shooter  ·  Game Mechanic Analysis  ·  Jizhi Mechanism Library',{x:0.5,y:5.2,w:9,h:0.425,fontSize:11,color:C.muted,valign:'middle'}); }

  // ===== SLIDE 2: 玩法拓扑总览 =====
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('玩法拓扑总览',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
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

  // ===== SLIDE 3: 创新总览 =====
  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg2}});
    s.addText('四项结构创新总览',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('创新定性：原型+结构创新',{x:0.5,y:0.62,w:9,h:0.25,fontSize:11,color:C.gold,margin:0});
    const inn=[{n:'噪音暴露系统',sys:'战斗系统 1.7',desc:'将"信息战"引入搜打撤，让战术决策不只依赖枪法',color:C.accent2},{n:'动态撤离点',sys:'关卡系统 6.3',desc:'消除蹲守博弈，每局撤离都是新的空间探索',color:C.accent},{n:'烟雾克制AI仇恨',sys:'战斗系统 1.5',desc:'创造 PvE 和 PvP 之间的第三条战术路径',color:C.green},{n:'三层库存分层',sys:'经济系统 3.6',desc:'清晰的风险梯度，让保守和激进玩家各有所选',color:C.gold}];
    let ix=0.5;
    inn.forEach(item=>{
      s.addShape(pres.shapes.RECTANGLE,{x:ix,y:1.1,w:2.2,h:4.2,fill:{color:C.cardBg},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:ix,y:1.1,w:2.2,h:0.08,fill:{color:item.color}});
      s.addText(item.n,{x:ix+0.15,y:1.28,w:1.9,h:0.6,fontSize:14,fontFace:'Arial',bold:true,color:C.white,margin:0});
      s.addText(item.sys,{x:ix+0.15,y:1.88,w:1.9,h:0.28,fontSize:10,color:item.color,margin:0});
      s.addShape(pres.shapes.RECTANGLE,{x:ix+0.15,y:2.3,w:1.9,h:0.03,fill:{color:item.color,transparency:50}});
      s.addText(item.desc,{x:ix+0.15,y:2.5,w:1.9,h:2.6,fontSize:12,color:C.offwhite,margin:0});
      ix+=2.4; }); }


  // ========== 噪音暴露系统 ==========
  // SLIDE 4: 噪音暴露系统 - 机制介绍
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.accent2}});
    s.addText('01',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('噪音暴露系统',{x:1.3,y:0.15,w:7.5,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('战斗系统 1.7 · 战术层',{x:1.3,y:0.62,w:7.5,h:0.25,fontSize:11,color:'FFFFFF',transparency:40,margin:0});

    // Left: 机制描述
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:0.07,fill:{color:C.accent2}});
    s.addText('机制描述',{x:0.7,y:1.28,w:3.9,h:0.4,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    s.addText('玩家在地图上的一切行为都会产生噪音，系统实时显示噪音等级，敌人和 AI 都会对噪音位置做出响应。',{x:0.7,y:1.72,w:3.9,h:0.7,fontSize:12,color:C.darkText,margin:0});

    const rows=[
      ['噪音来源','移动 / 搜刮 / 战斗 / 开门'],
      ['噪音等级','低噪音 / 中噪音 / 高噪音'],
      ['响应者','敌人玩家 + UESC 巡逻队 AI'],
      ['显示方式','屏幕边缘噪音指示器（方向+等级）'],
      ['对抗方式','消音武器 / 静步技能 / 烟雾掩护'],
    ];
    let ry=2.5;
    rows.forEach(([k,v])=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.7,y:ry,w:1.4,h:0.36,fill:{color:C.accent2,transparency:85}});
      s.addText(k,{x:0.7,y:ry,w:1.4,h:0.36,fontSize:10,bold:true,color:C.accent2,align:'center',valign:'middle'});
      s.addText(v,{x:2.15,y:ry,w:2.45,h:0.36,fontSize:11,color:C.darkText,valign:'middle',margin:0});
      ry+=0.44; });

    // Right: 核心机制
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:0.07,fill:{color:C.accent2}});
    s.addText('核心机制',{x:5.4,y:1.28,w:3.9,h:0.4,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});

    const mechanisms=[
      { title:'主动暴露换取优势', desc:'开火攻击敌人 = 高噪音暴露位置，但获得先手优势' },
      { title:'安静潜行保持隐蔽', desc:'步行移动 = 低噪音，不暴露位置但失去先手机会' },
      { title:'搜刮必然暴露', desc:'搜刮物资动作 = 中噪音，搜刮时位置被实时广播' },
      { title:'声音与 AI 视野联动', desc:'UESC 巡逻队会朝噪音方向移动并检查，烟雾可完全消除仇恨' },
    ];
    let my=1.8;
    mechanisms.forEach(m=>{
      s.addShape(pres.shapes.RECTANGLE,{x:5.4,y:my,w:0.08,h:0.7,fill:{color:C.accent2}});
      s.addText(m.title,{x:5.6,y:my,w:3.7,h:0.3,fontSize:12,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addText(m.desc,{x:5.6,y:my+0.3,w:3.7,h:0.38,fontSize:11,color:C.muted,margin:0});
      my+=0.82; }); }

  // SLIDE 5: 噪音暴露系统 - 机制评价
  { const s = pres.addSlide(); s.background={color:C.accent2};
    s.addText('01',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:'FFFFFF',valign:'middle'});
    s.addText('噪音暴露系统 · 机制评价',{x:1.3,y:0.15,w:8,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});

    // 3 threshold cards
    const thresholds=[
      { label:'可感知', verdict:'✓ 通过', reason:'玩家在地图上移动、搜刮、战斗时，噪音等级实时显示，敌人和 AI 都能响应，不需要任何教程就能自然感知', color:'10B981' },
      { label:'结构性', verdict:'✓ 通过', reason:'将"信息获取"从被动搜索变为主动权衡——开火获得优势但暴露位置，潜行安全但失去先手，改变了遭遇决策的结构', color:'10B981' },
      { label:'区分度', verdict:'✓ 通过', reason:'去掉噪音系统，Marathon 退化为标准蹲点射击，博弈从"动态决策"退化为"静态蹲守"，与其他搜打撤无本质差异', color:'10B981' },
    ];
    let tx=0.5;
    thresholds.forEach(t=>{
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:2.4,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:0.55,fill:{color:t.color}});
      s.addText(t.label,{x:tx,y:1.0,w:2.9,h:0.55,fontSize:16,fontFace:'Arial',bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(t.verdict,{x:tx+0.15,y:1.62,w:2.6,h:0.4,fontSize:18,fontFace:'Arial Black',bold:true,color:t.color,margin:0});
      s.addText(t.reason,{x:tx+0.15,y:2.05,w:2.6,h:1.2,fontSize:11,color:C.darkText,margin:0});
      tx+=3.1; });

    // Design intent
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:9,h:1.7,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:0.1,h:1.7,fill:{color:'FFFFFF'}});
    s.addText('设计意图',{x:0.8,y:3.72,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.accent2,margin:0});
    s.addText('解决"搜打撤信息战太被动"的问题——让玩家主动权衡"制造噪音获取优势"vs"保持安静但失去先手"，将信息获取从被动等情报变成主动决策。',{x:0.8,y:4.1,w:8.4,h:0.55,fontSize:12,color:C.darkText,margin:0});
    s.addText('代价与风险',{x:0.8,y:4.65,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.accent2,margin:0});
    s.addText('潜行在噪音系统下变得极难（几乎不可能全程无声）；高分段玩家可能倾向于无脑冲脸，噪音设计被绕过。',{x:2.8,y:4.65,w:6.4,h:0.5,fontSize:12,color:C.darkText,margin:0}); }

  // ========== 动态撤离点 ==========
  // SLIDE 6: 动态撤离点 - 机制介绍
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.accent}});
    s.addText('02',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('动态撤离点',{x:1.3,y:0.15,w:7.5,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('关卡系统 6.3 · 探索要素',{x:1.3,y:0.62,w:7.5,h:0.25,fontSize:11,color:'FFFFFF',transparency:40,margin:0});

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:0.07,fill:{color:C.accent}});
    s.addText('机制描述',{x:0.7,y:1.28,w:3.9,h:0.4,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    s.addText('每局游戏中，撤离点在地图上随机刷新位置。玩家激活撤离后有约 1 分钟窗口期；一旦单人撤离成功，该撤离点立即从地图上消失，其他玩家必须寻找新的撤离点。',{x:0.7,y:1.72,w:3.9,h:1.0,fontSize:12,color:C.darkText,margin:0});

    const drows=[['刷新机制','每局开始时随机分配位置','固定班底中随机抽取2-4个点作为本局撤离点'],['窗口期','激活后约1分钟倒计时','期间持续暴露位置'],['消失机制','单人成功撤离后该点立即消失','其他玩家无法使用同一撤离点'],['Vs 固定撤离','传统撤离射击的痛点：高端玩家提前蹲守，博弈僵化','动态刷新解决了这个问题']];
    let dry=2.85;
    drows.forEach(([k,v1,v2])=>{
      s.addText(k,{x:0.7,y:dry,w:1.4,h:0.5,fontSize:10,bold:true,color:C.accent,margin:0});
      s.addText(v1,{x:2.1,y:dry,w:2.5,h:0.25,fontSize:10,color:C.darkText,margin:0});
      s.addText(v2,{x:2.1,y:dry+0.25,w:2.5,h:0.25,fontSize:9,color:C.muted,margin:0});
      dry+=0.55; });

    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:0.07,fill:{color:C.accent}});
    s.addText('与传统固定撤离的对比',{x:5.4,y:1.28,w:3.9,h:0.4,fontSize:15,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    s.addText('传统撤离射击（塔科夫等）',{x:5.4,y:1.75,w:3.9,h:0.35,fontSize:13,fontFace:'Arial',bold:true,color:C.red,margin:0});
    const trad=['撤离点固定 → 高端玩家提前埋伏','普通玩家无法安全撤离','博弈变成"谁先到谁赢"','无探索空间，地图热点固化'];
    let try2=2.15;
    trad.forEach(t=>{
      s.addText('✗ '+t,{x:5.4,y:try2,w:3.9,h:0.3,fontSize:10,color:C.red,margin:0});
      try2+=0.33; });
    s.addText('Marathon 动态撤离',{x:5.4,y:3.5,w:3.9,h:0.35,fontSize:13,fontFace:'Arial',bold:true,color:C.green,margin:0});
    const mar=['每局撤离点位置不同 → 无法蹲守','需要主动探索新位置','博弈变成"谁能找到并到达新点"','每次撤离都是新的空间决策'];
    let mry2=3.9;
    mar.forEach(t=>{
      s.addText('✓ '+t,{x:5.4,y:mry2,w:3.9,h:0.3,fontSize:10,color:C.green,margin:0});
      mry2+=0.33; }); }

  // SLIDE 7: 动态撤离点 - 机制评价
  { const s = pres.addSlide(); s.background={color:C.accent};
    s.addText('02',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('动态撤离点 · 机制评价',{x:1.3,y:0.15,w:8,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});

    const thresholds=[
      { label:'可感知', verdict:'✓ 通过', reason:'撤离点每局半随机刷新位置，单人撤离后点位消失——玩家每局都能直接感知到与上局的差异，不需要任何提示', color:'10B981' },
      { label:'结构性', verdict:'✓ 通过', reason:'将撤离从"已知的赌局"变成"未知探索"——改变了撤离博弈的结构，从位置博弈变成了探索+决策博弈', color:'10B981' },
      { label:'区分度', verdict:'✓ 通过', reason:'去掉动态撤离，Marathon 退化为塔科夫式蹲守博弈，与其他搜打撤无本质差异，品类核心差异化消失', color:'10B981' },
    ];
    let tx=0.5;
    thresholds.forEach(t=>{
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:2.4,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:0.55,fill:{color:t.color}});
      s.addText(t.label,{x:tx,y:1.0,w:2.9,h:0.55,fontSize:16,fontFace:'Arial',bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(t.verdict,{x:tx+0.15,y:1.62,w:2.6,h:0.4,fontSize:18,fontFace:'Arial Black',bold:true,color:t.color,margin:0});
      s.addText(t.reason,{x:tx+0.15,y:2.05,w:2.6,h:1.2,fontSize:11,color:C.darkText,margin:0});
      tx+=3.1; });

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:9,h:1.7,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:0.1,h:1.7,fill:{color:C.accent}});
    s.addText('设计意图',{x:0.8,y:3.72,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.accent,margin:0});
    s.addText('解决"蹲撤离点导致博弈僵化"的品类痛点——如果撤离点固定，高端玩家会提前埋伏，普通玩家体验极差。动态刷新让每次撤离都变成新的探索决策。',{x:0.8,y:4.1,w:8.4,h:0.55,fontSize:12,color:C.darkText,margin:0});
    s.addText('代价与风险',{x:0.8,y:4.65,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.accent,margin:0});
    s.addText('熟悉地图的高手无法依赖固定路线；随机性过高可能让部分玩家觉得"努力白费"；需要清晰的地图指示 UI 否则新手迷失感强。',{x:2.8,y:4.65,w:6.4,h:0.5,fontSize:12,color:C.darkText,margin:0}); }


  // ========== 烟雾克制AI仇恨 ==========
  // SLIDE 8: 烟雾克制AI - 机制介绍
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.green}});
    s.addText('03',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('烟雾克制AI仇恨',{x:1.3,y:0.15,w:7.5,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('战斗系统 1.5 · 状态效果',{x:1.3,y:0.62,w:7.5,h:0.25,fontSize:11,color:'FFFFFF',transparency:40,margin:0});

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.1,w:4.3,h:0.07,fill:{color:C.green}});
    s.addText('机制描述',{x:0.7,y:1.28,w:3.9,h:0.4,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    s.addText('烟雾弹在 Marathon 中不仅是视觉遮蔽道具，更能完全消除 UESC 巡逻队的仇恨状态。玩家可以在烟雾掩护下穿越危险区域而不触发 AI 战斗，同时烟雾也会遮挡敌人玩家的视野。',{x:0.7,y:1.72,w:3.9,h:0.85,fontSize:12,color:C.darkText,margin:0});

    const srows=[
      ['烟雾效果','完全消除 UESC 巡逻队仇恨，AI 停止追击'],
      ['PvE 价值','穿越高危区域（如有 UESC 巡逻的危险区）'],
      ['PvP 代价','烟雾同时遮蔽敌人玩家视野，是双刃剑'],
      ['道具成本','烟雾弹占用道具栏位，有消耗数量限制'],
      ['与职业协同','Triage 治疗职业穿越危险区最有价值'],
    ];
    let sry=2.7;
    srows.forEach(([k,v])=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.7,y:sry,w:1.4,h:0.36,fill:{color:C.green,transparency:85}});
      s.addText(k,{x:0.7,y:sry,w:1.4,h:0.36,fontSize:10,bold:true,color:C.green,align:'center',valign:'middle'});
      s.addText(v,{x:2.15,y:sry,w:2.45,h:0.36,fontSize:11,color:C.darkText,valign:'middle',margin:0});
      sry+=0.44; });

    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:0.07,fill:{color:C.green}});
    s.addText('战术应用场景',{x:5.4,y:1.28,w:3.9,h:0.4,fontSize:15,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    const scenarios=[
      { scene:'紧急撤离掩护', desc:'激活撤离点后被 UESC 追击，扔烟雾弹掩护撤离，AI停止追击' },
      { scene:'高危区穿越', desc:'Dire Marsh 危险沼泽有密集 UESC 巡逻，烟雾掩护下可安全穿越' },
      { scene:'PvP 诱饵战术', desc:'在烟雾中假装撤离，实际等待敌人暴露位置后反打' },
      { scene:'多人协作掩护', desc:'治疗职业在烟雾中拉起倒地的队友，AI 不会响应' },
    ];
    let ssy=1.8;
    scenarios.forEach(sc=>{
      s.addShape(pres.shapes.RECTANGLE,{x:5.4,y:ssy,w:0.08,h:0.7,fill:{color:C.green}});
      s.addText(sc.scene,{x:5.6,y:ssy,w:3.7,h:0.3,fontSize:12,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addText(sc.desc,{x:5.6,y:ssy+0.3,w:3.7,h:0.38,fontSize:11,color:C.muted,margin:0});
      ssy+=0.82; }); }

  // SLIDE 9: 烟雾克制AI - 机制评价
  { const s = pres.addSlide(); s.background={color:C.green};
    s.addText('03',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('烟雾克制AI仇恨 · 机制评价',{x:1.3,y:0.15,w:8,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});

    const thresholds=[
      { label:'可感知', verdict:'✓ 通过', reason:'烟雾弹效果立即可见：UESC 巡逻队停止追击、转向，AI 仇恨消除的视觉反馈清晰，不需要任何说明就能理解', color:'065A82' },
      { label:'结构性', verdict:'✓ 通过', reason:'创造"PvE 和 PvP 之外的第三条路"——让战术选择不只有"打或跑"，烟雾提供了第三个选项：穿越', color:'065A82' },
      { label:'区分度', verdict:'✓ 通过', reason:'去掉烟雾机制，PvE 威胁变成无法控制的随机风险，战术深度大幅削弱，与其他纯 PvPvE 撤离射击无差异', color:'065A82' },
    ];
    let tx=0.5;
    thresholds.forEach(t=>{
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:2.4,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:0.55,fill:{color:t.color}});
      s.addText(t.label,{x:tx,y:1.0,w:2.9,h:0.55,fontSize:16,fontFace:'Arial',bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(t.verdict,{x:tx+0.15,y:1.62,w:2.6,h:0.4,fontSize:18,fontFace:'Arial Black',bold:true,color:t.color,margin:0});
      s.addText(t.reason,{x:tx+0.15,y:2.05,w:2.6,h:1.2,fontSize:11,color:C.darkText,margin:0});
      tx+=3.1; });

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:9,h:1.7,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:0.1,h:1.7,fill:{color:C.green}});
    s.addText('设计意图',{x:0.8,y:3.72,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.green,margin:0});
    s.addText('解决"AI 威胁无法被策略性管理"的痛点——PvE 威胁在传统搜打撤中是纯粹的随机风险，烟雾让玩家可以用战术道具管理 PvE 威胁，增加了决策维度。',{x:0.8,y:4.1,w:8.4,h:0.55,fontSize:12,color:C.darkText,margin:0});
    s.addText('代价与风险',{x:0.8,y:4.65,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.green,margin:0});
    s.addText('烟雾同时遮蔽自身视野——PvP 时过度依赖烟雾可能反而被敌人预判位置；烟雾占用道具格，有消耗成本，需要权衡使用时机。',{x:2.8,y:4.65,w:6.4,h:0.5,fontSize:12,color:C.darkText,margin:0}); }

  // ========== 三层库存分层 ==========
  // SLIDE 10: 三层库存 - 机制介绍
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.gold}});
    s.addText('04',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('三层库存分层',{x:1.3,y:0.15,w:7.5,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('经济系统 3.6 · 库存管理',{x:1.3,y:0.62,w:7.5,h:0.25,fontSize:11,color:'FFFFFF',transparency:40,margin:0});

    // 3-layer visual
    const layers=[
      { name:'局内背包', subtitle:'携带中', risk:'全损风险', desc:'放入背包的物品在局内死亡后全损——这些物品参与局内经济循环，携带越多潜在损失越大', color:C.red, y:1.1 },
      { name:'安全箱', subtitle:'局内保护', risk:'局内不死，局后消失', desc:'局内死亡时安全箱物品不损失，但局结束后自动清空——提供局内缓冲但不是真正保险', color:C.orange, y:2.5 },
      { name:'局外仓库', subtitle:'永久保护', risk:'零风险', desc:'存放在仓库中的物品永久保存，不受局内死亡影响——真正的安全资产', color:C.green, y:3.9 },
    ];
    layers.forEach(l=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:l.y,w:4.5,h:1.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:l.y,w:0.1,h:1.2,fill:{color:l.color}});
      s.addText(l.name,{x:0.75,y:l.y+0.1,w:2,h:0.35,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addShape(pres.shapes.RECTANGLE,{x:2.8,y:l.y+0.15,w:1.3,h:0.32,fill:{color:l.color}});
      s.addText(l.risk,{x:2.8,y:l.y+0.15,w:1.3,h:0.32,fontSize:10,bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(l.subtitle,{x:0.75,y:l.y+0.5,w:4,h:0.25,fontSize:11,color:C.muted,margin:0});
      s.addText(l.desc,{x:0.75,y:l.y+0.72,w:4,h:0.4,fontSize:10,color:C.darkText,margin:0}); });

    // Right: decision logic
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:4.2,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
    s.addShape(pres.shapes.RECTANGLE,{x:5.2,y:1.1,w:4.3,h:0.07,fill:{color:C.gold}});
    s.addText('玩家决策逻辑',{x:5.4,y:1.28,w:3.9,h:0.4,fontSize:15,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
    const decisions=[
      { q:'这局目标是什么？', a:'搜集高价值 → 放背包赌一把 / 稳定收益 → 放仓库' },
      { q:'当前位置安全吗？', a:'安全 → 继续搜刮放背包 / 危险 → 优先放安全箱' },
      { q:'背包满了怎么办？', a:'放安全箱或仓库，权衡局内使用 vs 局后安全' },
      { q:'撤离成功后？', a:'安全箱物品可转仓库（局后）；背包物品安全带出' },
    ];
    let dqy=1.8;
    decisions.forEach(d=>{
      s.addShape(pres.shapes.RECTANGLE,{x:5.4,y:dqy,w:0.08,h:0.85,fill:{color:C.gold}});
      s.addText(d.q,{x:5.6,y:dqy,w:3.7,h:0.35,fontSize:11,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addText(d.a,{x:5.6,y:dqy+0.35,w:3.7,h:0.48,fontSize:10,color:C.muted,margin:0});
      dqy+=0.92; }); }

  // SLIDE 11: 三层库存 - 机制评价
  { const s = pres.addSlide(); s.background={color:C.gold};
    s.addText('04',{x:0.4,y:0.12,w:0.8,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.bg,valign:'middle'});
    s.addText('三层库存分层 · 机制评价',{x:1.3,y:0.15,w:8,h:0.6,fontSize:26,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});

    const thresholds=[
      { label:'可感知', verdict:'✓ 通过', reason:'玩家清楚知道物品放在哪一层、死亡后会不会损失——背包/安全箱/仓库的 UI 区分清晰，不需要学习成本', color:'065A82' },
      { label:'结构性', verdict:'✓ 通过', reason:'让风险收益有清晰梯度——保守玩家可把物资放仓库，激进玩家可冒最大风险，不同策略都能找到适合路径', color:'065A82' },
      { label:'区分度', verdict:'✓ 通过', reason:'去掉分层，搜打撤经济系统变成"全有或全无"，保守玩家和激进玩家无法分化，策略空间消失', color:'065A82' },
    ];
    let tx=0.5;
    thresholds.forEach(t=>{
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:2.4,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:1.0,w:2.9,h:0.55,fill:{color:t.color}});
      s.addText(t.label,{x:tx,y:1.0,w:2.9,h:0.55,fontSize:16,fontFace:'Arial',bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(t.verdict,{x:tx+0.15,y:1.62,w:2.6,h:0.4,fontSize:18,fontFace:'Arial Black',bold:true,color:t.color,margin:0});
      s.addText(t.reason,{x:tx+0.15,y:2.05,w:2.6,h:1.2,fontSize:11,color:C.darkText,margin:0});
      tx+=3.1; });

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:9,h:1.7,fill:{color:'FFFFFF'},shadow:mkShadow(0.15)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:3.6,w:0.1,h:1.7,fill:{color:C.gold}});
    s.addText('设计意图',{x:0.8,y:3.72,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.gold,margin:0});
    s.addText('解决"风险收益缺乏梯度"的品类痛点——让保守玩家和激进玩家都能找到适合自己的策略，而不是只有"全押"或"不玩"两个选项。',{x:0.8,y:4.1,w:8.4,h:0.55,fontSize:12,color:C.darkText,margin:0});
    s.addText('代价与风险',{x:0.8,y:4.65,w:2,h:0.35,fontSize:14,fontFace:'Arial',bold:true,color:C.gold,margin:0});
    s.addText('安全箱容量必须有限（不能太大）才能真正产生取舍压力；仓库容量也需要资源投入解锁，否则早期玩家缺乏选择空间。',{x:2.8,y:4.65,w:6.4,h:0.5,fontSize:12,color:C.darkText,margin:0}); }

  // ===== SLIDE 12: 品类标配排除 =====
  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg2}});
    s.addText('品类标配排除',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});
    s.addText('以下机制被识别为品类/行业成熟设计，不计入结构创新',{x:0.5,y:0.62,w:9,h:0.25,fontSize:11,color:C.muted,margin:0});

    const excludes=[
      { name:'Runner Shell 职业系统', reason:'职业系统是 FPS 品类成熟设计，非搜打撤首创；4职业差异是战术层，但不属于结构创新', color:C.muted },
      { name:'武器改装系统', reason:'武器 Mod 改装在 Tarkov/Apex 等已有，搜打撤品类内常见，非 Marathon 首创', color:C.muted },
      { name:'Proximity 语音', reason:'物理距离限制语音交流是 FPS QoL 设计，非机制创新', color:C.muted },
      { name:'克隆体叙事设定', reason:'叙事包装手法，合理化死亡降低心理门槛，但非机制层面创新', color:C.muted },
      { name:'Rewards Pass 永不过期', reason:'战令结构是常见商业化设计，永不过期是 QoS 改进，非结构创新', color:C.muted },
    ];
    let ey=1.1;
    excludes.forEach(e=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:ey,w:9,h:0.78,fill:{color:'0F2744'}});
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:ey,w:0.08,h:0.78,fill:{color:e.color}});
      s.addText(e.name,{x:0.75,y:ey+0.1,w:3,h:0.3,fontSize:13,fontFace:'Arial',bold:true,color:C.muted,margin:0});
      s.addText(e.reason,{x:0.75,y:ey+0.4,w:8.4,h:0.32,fontSize:11,color:C.muted,margin:0});
      ey+=0.86; }); }

  // ===== SLIDE 13: 体验支柱与协同 =====
  { const s = pres.addSlide(); s.background={color:C.lightBg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.9,fill:{color:C.bg}});
    s.addText('体验支柱与协同关系',{x:0.5,y:0.15,w:9,h:0.6,fontSize:28,fontFace:'Arial Black',bold:true,color:C.white,valign:'middle',margin:0});

    const pillars=[
      { title:'双未知撤离博弈', syn:'乘法关系', mechs:'动态撤离点 × 噪音暴露系统 × 三层库存', desc:'空间未知 × 信息未知——两个未知叠加，让每局都是真正的探索决策。去掉任一者，另外两者构成的博弈深度大幅削弱。', color:C.accent },
      { title:'战术配合深度', syn:'弥补关系', mechs:'Runner Shell职业 × 烟雾克制AI × Proximity语音', desc:'职业差异 × 烟雾 = 不同职业利用烟雾的能力差异形成战术互补。烟雾让治疗职业在 PvE 中有独特价值，形成职业间的功能互补。', color:C.accent2 },
      { title:'叙事合理化死亡', syn:'保险丝关系', mechs:'克隆体设定 × 永久进度 × Raid终局叙事', desc:'克隆体降低死亡心理门槛，永久进度保证回来仍有事做。两者共同确保"死亡不是终点，只是暂停"的感觉。', color:C.gold },
    ];
    let py=1.1;
    pillars.forEach(p=>{
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:py,w:9,h:1.35,fill:{color:'FFFFFF'},shadow:mkShadow(0.1)});
      s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:py,w:0.1,h:1.35,fill:{color:p.color}});
      s.addText(p.title,{x:0.8,y:py+0.12,w:4.5,h:0.4,fontSize:16,fontFace:'Arial',bold:true,color:C.darkText,margin:0});
      s.addShape(pres.shapes.RECTANGLE,{x:7.9,y:py+0.15,w:1.3,h:0.3,fill:{color:p.color}});
      s.addText(p.syn,{x:7.9,y:py+0.15,w:1.3,h:0.3,fontSize:10,bold:true,color:C.white,align:'center',valign:'middle'});
      s.addText(p.mechs,{x:0.8,y:py+0.52,w:8.4,h:0.3,fontSize:11,color:p.color,margin:0});
      s.addText(p.desc,{x:0.8,y:py+0.82,w:8.4,h:0.42,fontSize:11,color:C.darkText,margin:0});
      py+=1.5; }); }

  // ===== SLIDE 14: 设计精华 =====
  { const s = pres.addSlide(); s.background={color:C.bg};
    s.addShape(pres.shapes.RECTANGLE,{x:0,y:0,w:10,h:0.07,fill:{color:C.accent}});
    s.addText('设计精华',{x:0.5,y:0.4,w:9,h:0.7,fontSize:32,fontFace:'Arial Black',bold:true,color:C.white,margin:0});

    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.3,w:9,h:2.8,fill:{color:C.cardBg},shadow:mkShadow(0.2)});
    s.addShape(pres.shapes.RECTANGLE,{x:0.5,y:1.3,w:0.12,h:2.8,fill:{color:C.accent}});
    s.addText('Marathon 成立的关键在于构建了一个',{x:0.9,y:1.55,w:8.3,h:0.45,fontSize:16,color:C.offwhite,margin:0});
    s.addText('"双未知+有策略"',{x:0.9,y:2.0,w:8.3,h:0.65,fontSize:36,fontFace:'Arial Black',bold:true,color:C.accent,margin:0});
    s.addText('的撤离博弈',{x:0.9,y:2.65,w:8.3,h:0.45,fontSize:16,color:C.offwhite,margin:0});
    s.addText('配合克隆体叙事降低死亡心理门槛，让玩家愿意反复进入高风险循环。',{x:0.9,y:3.2,w:8.3,h:0.6,fontSize:13,color:C.muted,margin:0});

    s.addShape(pres.shapes.RECTANGLE,{x:0,y:4.5,w:10,h:1.125,fill:{color:C.bg2}});
    const tags=['搜打撤','Bungie','Marathon','原型+结构创新','2026-03-19']; let tx=0.5;
    tags.forEach(tag=>{ const tw=tag.length*0.2+0.4;
      s.addShape(pres.shapes.RECTANGLE,{x:tx,y:4.65,w:tw,h:0.35,fill:{color:C.accent,transparency:88},line:{color:C.accent,width:1}});
      s.addText(tag,{x:tx,y:4.65,w:tw,h:0.35,fontSize:10,color:C.accent,align:'center',valign:'middle'});
      tx+=tw+0.2; });
    s.addText('Jizhi Mechanism Library  ·  game-analyse-2.0',{x:0.5,y:5.12,w:9,h:0.3,fontSize:10,color:C.muted}); }

  await pres.writeFile({fileName:'/tmp/Marathon_结构创新深度解析.pptx'});
  console.log('Done: /tmp/Marathon_结构创新深度解析.pptx'); }
createPresentation().catch(console.error);
