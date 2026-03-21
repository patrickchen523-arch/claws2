# 全局机制索引

最后更新：2026-03-21
机制卡总数：40 | 游戏数：15 | 品类数：5

---

## 0) 使用说明

### Phase 1.5 查询策略

从 Phase 1 扫描报告中提取信号，映射到下方倒排索引的对应维度，收集候选机制卡：

| 从扫描报告中识别 | 查哪个索引 | 示例 |
|---|---|---|
| 这个游戏在解决什么玩家问题？ | **§2.1 痛点索引** | "后期无聊" → 找到 8 张相关卡 |
| 想让玩家感受到什么？ | **§2.2 体验索引** | "治愈放松" → 找到 3 张卡 |
| 核心机制模式是什么？ | **§2.3 机制模式索引** | "自动化物流" → 找到 3 张卡 |
| 游戏的基本约束条件？ | **§2.4 约束筛选索引** | "PvPvE + 即时操作" → 缩小范围 |
| 哪些机制需要协同？ | **§2.5 协同模式索引** | "乘法关系" → 找配合案例 |

**操作流程**：
1. 从 Phase 1 扫描中提取 2-3 个痛点关键词 + 1-2 个体验关键词
2. 跳到对应索引小节，收集命中的机制 ID
3. 在注册表(§1)中查文件路径
4. 深读命中最多的 3-5 张机制卡全文
5. 同时读取匹配品类的 `_summary.md` 获取品类先验

### V3 提问流查询策略（预留）

提问流按轮次缩小范围：
- 第 1 轮："你想解决什么问题？" → §2.1 痛点索引命中
- 第 2 轮："你想让玩家感受到什么？" → §2.2 体验索引交叉
- 第 3 轮："你的游戏是什么类型？" → §2.4 约束筛选排除
- 输出：Top 3-5 机制卡推荐 + 一句话理由

---

## 1) 机制注册表

每张机制卡一行。ID 用于倒排索引引用。

| ID | 机制卡 | 游戏 | 品类 | 级别 | 一句话 | 路径 |
|---:|--------|------|------|------|--------|------|
| M01 | 集章卡式收集系统 | StardewValley | 模拟经营 | Excellent | 6间房间×多种收集束：种田/钓鱼/挖矿/采集的产出汇聚成修复目标，集满一页解锁温室/矿车等实质功能 | mechanisms/StardewValley/[Excellent]模拟经营-StardewValley-集章卡式收集系统.md |
| M02 | 多层加工增值经济 | StardewValley | 模拟经营 | Excellent | 原始作物→酒桶/罐头(×3)→窖藏(×2)→职业(×1.4)=4-8倍增值，不同作物有不同最优加工路径 | mechanisms/StardewValley/[Excellent]模拟经营-StardewValley-多层加工增值经济.md |
| M03 | NPC真实生活社交 | StardewValley | 模拟经营 | Excellent | 30+NPC各有独立日程+喜好，每周限送2次礼，好感度驱动含成人主题叙事弧 | mechanisms/StardewValley/[Excellent]模拟经营-StardewValley-NPC真实生活社交.md |
| M04 | 百分比完成度追踪 | StardewValley | 模拟经营 | Qualify | 社区中心完成后用统合式百分比追踪提供终极目标 | mechanisms/StardewValley/[Qualify]模拟经营-StardewValley-百分比完成度追踪.md |
| M05 | 无压力日常设计 | StardewValley | 模拟经营 | Qualify | 无每日任务/无限时活动/无体力焦虑：用世界驱动日循环替代FOMO打卡 | mechanisms/StardewValley/[Qualify]模拟经营-StardewValley-无压力日常设计.md |
| M06 | 现实时间同步系统 | AnimalCrossingNH | 生活模拟 | Excellent | 游戏时间=现实时间，商店有营业时间，虫鱼按季节出没，节日与现实同步 | mechanisms/AnimalCrossingNH/[Excellent]生活模拟-AnimalCrossingNH-现实时间同步系统.md |
| M07 | 大头菜社交经济 | AnimalCrossingNH | 生活模拟 | Excellent | 周日买入→4种随机波动→互访高价岛卖菜=社交+经济双收益 | mechanisms/AnimalCrossingNH/[Excellent]生活模拟-AnimalCrossingNH-大头菜社交经济.md |
| M08 | 村民好感度系统 | AnimalCrossingNH | 生活模拟 | Qualify | 255分多级好感度+照片终极奖励，让村民从功能单元变为情感联结对象 | mechanisms/AnimalCrossingNH/[Qualify]生活模拟-AnimalCrossingNH-村民好感度系统.md |
| M09 | 传送带核心物流 | Factorio | 自动化 | Excellent | 传送带为核心物流：设计物品从A到B的路径成为主要玩法与优化目标 | mechanisms/Factorio/[Excellent]自动化-Factorio-传送带核心物流.md |
| M10 | 蓝图系统 | Factorio | 自动化 | Excellent | 选区保存→幽灵放置→机器人建造→Base64分享，让设计可复用 | mechanisms/Factorio/[Excellent]自动化-Factorio-蓝图系统.md |
| M11 | 污染驱动难度升级 | Factorio | 自动化 | Excellent | 工厂排放→污染扩散→虫巢吸收→进化升级→反攻，给沙盒提供紧迫性 | mechanisms/Factorio/[Excellent]自动化-Factorio-污染驱动难度升级.md |
| M12 | 帕鲁劳工系统 | Palworld | 生存 | Excellent | 被捕获帕鲁按12种工作适性自动分配工位，SAN值约束无限压榨 | mechanisms/Palworld/[Excellent]生存-Palworld-帕鲁劳工系统.md |
| M13 | 帕鲁一体多用 | Palworld | 生存 | Excellent | 同一只帕鲁同时可担任战斗搭档/基地工人/坐骑/食材/牧场产出/商品 | mechanisms/Palworld/[Excellent]生存-Palworld-帕鲁一体多用.md |
| M14 | 帕鲁骑乘战斗技能 | Palworld | 生存 | Qualify | 骑乘帕鲁直接使用武装化技能(喷火器/冲锋枪/盾牌)，操作变为即时动作 | mechanisms/Palworld/[Qualify]生存-Palworld-帕鲁骑乘战斗技能.md |
| M15 | 同类合并升星系统 | Palworld | 生存 | Qualify | 同种帕鲁合并→星级提升→全属性强化+工作适性+1，给重复捕获赋予目标 | mechanisms/Palworld/[Qualify]生存-Palworld-同类合并升星系统.md |
| M16 | 星际物流系统 | DysonSphere | 自动化 | Excellent | 三层物流(传送带/塔/星际飞船)，星际飞船自动供需平衡 | mechanisms/DysonSphereProgram/[Excellent]自动化-DysonSphereProgram-星际物流系统.md |
| M17 | 稀有资源替代配方 | DysonSphere | 自动化 | Excellent | 双配方路线(本地低效 vs 稀有高效)，给跨星际探索提供经济动机 | mechanisms/DysonSphereProgram/[Excellent]自动化-DysonSphereProgram-稀有资源替代配方.md |
| M18 | 栖息地吸引系统 | PokemonPokopia | 生活模拟 | Excellent | 建造匹配偏好的环境→宝可梦自愿来住→舒适度5级共生 | mechanisms/PokemonPokopia/[Excellent]生活模拟-PokemonPokopia-栖息地吸引系统.md |
| M19 | 宝可梦技能岗位系统 | PokemonPokopia | 生活模拟 | Excellent | 306只各有1-2种特长(31种)→收集=解锁加工能力 | mechanisms/PokemonPokopia/[Excellent]生活模拟-PokemonPokopia-宝可梦技能岗位系统.md |
| M20 | 产业链经济 | CitiesSkylines2 | 模拟经营 | Excellent | 原料→中间品→消费品多层产业链，出口距离衰减利润 | mechanisms/CitiesSkylines2/[Excellent]模拟经营-CitiesSkylines2-产业链经济.md |
| M21 | 里程碑发展树 | CitiesSkylines2 | 模拟经营 | Excellent | 服务分支科技树+里程碑发展点分配，限制产业链展开节奏 | mechanisms/CitiesSkylines2/[Excellent]模拟经营-CitiesSkylines2-里程碑发展树.md |
| M22 | 模块化建筑升级 | CitiesSkylines2 | 模拟经营 | Excellent | 服务建筑可加装模块扩容或功能强化，升级替代堆量 | mechanisms/CitiesSkylines2/[Excellent]模拟经营-CitiesSkylines2-模块化建筑升级.md |
| M23 | 市民生命周期模拟 | CitiesSkylines2 | 模拟经营 | Qualify | 分龄市民行为差异+多维幸福度系统，让城市管理更真实 | mechanisms/CitiesSkylines2/[Qualify]模拟经营-CitiesSkylines2-市民生命周期模拟.md |
| M24 | 三消家装双轨循环 | Homescapes | 休闲 | Excellent | 核心玩法(三消)≠Meta目标(家装)，通过星星货币锁定形成双轨驱动 | mechanisms/Homescapes/[Excellent]三消-Homescapes-三消家装双轨循环.md |
| M25 | 路边摊报纸玩家经济 | HayDay | 农场经营 | Excellent | 路边摊自由定价+报纸全服浏览器=玩家驱动的社交经济 | mechanisms/HayDay/[Excellent]农场经营-HayDay-路边摊报纸玩家经济.md |
| M26 | 区域多城协作系统 | SimCity4 | 城建 | Excellent | 多城市地块交易电水垃圾与通勤，支持城市特化分工 | mechanisms/SimCity4/[Excellent]城建-SimCity4-区域多城协作系统.md |
| M27 | 学年制双模式节奏 | TwoPointCampus | 模拟经营 | Qualify | 学期运营+暑假优化交替，给持续流经营提供喘息节奏 | mechanisms/TwoPointCampus/[Qualify]模拟经营-TwoPointCampus-学年制双模式节奏.md |
| M28 | 动态撤离点单人消失 | Marathon | FPS/搜打撤 | Excellent | 多撤离点动态刷新，单人撤离后该点消失，迫使其他人等新点 | mechanisms/Marathon/[Excellent]FPS-Marathon-动态撤离点单人消失.md |
| M29 | 全损带入带出 | Marathon | FPS/搜打撤 | Qualify | 装备带进局内但死亡全丢：每次搜刮都是真实下注，撤离才算赚到手 | mechanisms/Marathon/[Qualify]FPS-Marathon-全损带入带出.md |
| M30 | 高风险单局制 | Marathon | FPS/搜打撤 | Qualify | 对局无检查点且死亡全丢：每次进入战局都是一把定输赢的高压赌局 | mechanisms/Marathon/[Qualify]FPS-Marathon-高风险单局制.md |
| M31 | 三层职业能力套组 | Marathon | FPS/搜打撤 | Qualify | 每壳体固定一套主动+战术+被动能力：队伍角色分工清晰 | mechanisms/Marathon/[Qualify]FPS-Marathon-三层职业能力套组.md |
| M32 | PvPvE强对抗 | Marathon | FPS/搜打撤 | Qualify | 玩家与AI同时威胁：一边清AI一边防真人偷袭 | mechanisms/Marathon/[Qualify]FPS-Marathon-PvPvE强对抗.md |
| M33 | 局内背包与局外保险库 | Marathon | FPS/搜打撤 | Qualify | 局内背包格子有限、局外保险库永久存储：捡与弃的取舍 | mechanisms/Marathon/[Qualify]FPS-Marathon-局内背包与局外保险库.md |
| M34 | 多维战术约束 | Marathon | FPS/搜打撤 | Qualify | 地形危险区+热量限制冲刺滑铲：逼玩家在走位、冲突与撤离上做更多取舍 | mechanisms/Marathon/[Qualify]FPS-Marathon-多维战术约束.md |
| M35 | 枪械分层与改装 | Marathon | FPS/搜打撤 | Qualify | 武器分稀有度并可装模组：在风险中追求更强装备与更合适的手感 | mechanisms/Marathon/[Qualify]FPS-Marathon-枪械分层与改装.md |
| M36 | 灵活队伍规模 | Marathon | FPS/搜打撤 | Qualify | 支持单/双/三人组队，最多6队18人 | mechanisms/Marathon/[Qualify]FPS-Marathon-灵活队伍规模.md |

---
| M37 | 扑克牌BUFF组合系统 | SoulAtStake | 非对称对抗 | Excellent | 封印牌座收集扑克牌，达成特定牌型触发全局BUFF | mechanisms/SoulAtStake/Excellent-poker-buff-system.md |
| M38 | 残局免费道具刷新 | SoulAtStake | 非对称对抗 | Excellent | 1v1残局时商店免费道具刷新，给弱势方翻盘机会 | mechanisms/SoulAtStake/Excellent-endgame-free-item-refresh.md |
| M39 | 恶灵传送到牌座 | SoulAtStake | 非对称对抗 | Qualify | 恶灵可传送到已开启牌座，以逸待劳截断赌徒路线 | mechanisms/SoulAtStake/Qualify-demon-teleport-to-card-seat.md |
| M40 | 气场信息不对称 | SoulAtStake | 非对称对抗 | Qualify | 恶灵可见赌徒方向但不能精确定位，赌徒看不到恶灵 | mechanisms/SoulAtStake/Qualify-aura-information-asymmetry.md |

## 2) 倒排索引

### 2.1 按痛点（"我想解决……"）

#### 内容枯竭/后期无聊
- M01 集章卡式收集系统(StardewValley) — 跨系统收集束提供中期方向
- M02 多层加工增值经济(StardewValley) — 经济优化提供持续后期目标
- M04 百分比完成度追踪(StardewValley) — 终极完成度目标填补后期真空
- M06 现实时间同步系统(AnimalCrossingNH) — 时间驱动内容释放延长生命周期
- M12 帕鲁劳工系统(Palworld) — 基地产能优化持续驱动
- M13 帕鲁一体多用(Palworld) — 多用途延展收集价值
- M17 稀有资源替代配方(DysonSphere) — 双路径创造持续效率优化
- M19 宝可梦技能岗位系统(PokemonPokopia) — 功能需求驱动持续收集
- M20 产业链经济(CitiesSkylines2) — 多层产业链创造后期决策
- M24 三消家装双轨循环(Homescapes) — 双轨进度延长留存

#### 时间成本/重复劳动/打卡疲劳
- M05 无压力日常设计(StardewValley) — 消除FOMO，用世界驱动替代任务驱动
- M09 传送带核心物流(Factorio) — 自动化替代手动重复
- M10 蓝图系统(Factorio) — 复用设计减少重复建设
- M12 帕鲁劳工系统(Palworld) — 劳工代替手动采集
- M25 路边摊报纸玩家经济(HayDay) — 异步交易减少等待

#### 挫败感/死亡惩罚过重
- M28 动态撤离点单人消失(Marathon) — 动态撤离增加博弈而非纯惩罚
- M29 全损带入带出(Marathon) — 高风险高回报结构
- M30 高风险单局制(Marathon) — 单局全损的紧张感设计
- M33 局内背包与局外保险库(Marathon) — 分层库存缓冲全损冲击

#### 认知负担/信息过载/学习曲线
- M09 传送带核心物流(Factorio) — 高认知负担但高满足
- M16 星际物流系统(DysonSphere) — 三层物流的复杂度管理
- M20 产业链经济(CitiesSkylines2) — 多层产业链的认知负荷
- M23 市民生命周期模拟(CitiesSkylines2) — 多维幸福度的信息管理
- M26 区域多城协作系统(SimCity4) — 跨城规划的认知挑战
- M28 动态撤离点单人消失(Marathon) — 撤离规则的学习曲线
- M31 三层职业能力套组(Marathon) — 职业体系的认知成本

#### 社交压力/组队/无朋友体验差
- M03 NPC真实生活社交(StardewValley) — 单人也有深度社交体验
- M07 大头菜社交经济(AnimalCrossingNH) — 社交=经济收益
- M08 村民好感度系统(AnimalCrossingNH) — 情感陪伴型NPC社交
- M25 路边摊报纸玩家经济(HayDay) — 异步社交降低组队门槛
- M36 灵活队伍规模(Marathon) — 弹性人数降低组队门槛

#### 自由度过高/目标缺失
- M01 集章卡式收集系统(StardewValley) — 跨系统收集束提供方向
- M21 里程碑发展树(CitiesSkylines2) — 科技树约束自由度

#### 沉浸感/代入感差
- M03 NPC真实生活社交(StardewValley) — NPC有独立生活和性格
- M18 栖息地吸引系统(PokemonPokopia) — 共生替代征服的情感代入
- M23 市民生命周期模拟(CitiesSkylines2) — 市民有真实生命周期

---
雪崩问题（资源差距导致无力感） | M38 残局免费道具刷新(SoulAtStake)

### 2.2 按体验（"我想让玩家感到……"）

#### 成就感/精通满足
- M01 集章卡式收集系统(StardewValley)
- M02 多层加工增值经济(StardewValley)
- M04 百分比完成度追踪(StardewValley)
- M09 传送带核心物流(Factorio)
- M10 蓝图系统(Factorio)
- M12 帕鲁劳工系统(Palworld)
- M15 同类合并升星系统(Palworld)
- M16 星际物流系统(DysonSphere)
- M19 宝可梦技能岗位系统(PokemonPokopia)
- M20 产业链经济(CitiesSkylines2)
- M21 里程碑发展树(CitiesSkylines2)
- M22 模块化建筑升级(CitiesSkylines2)

#### 治愈/放松/低压
- M03 NPC真实生活社交(StardewValley)
- M05 无压力日常设计(StardewValley)
- M06 现实时间同步系统(AnimalCrossingNH)
- M08 村民好感度系统(AnimalCrossingNH)
- M18 栖息地吸引系统(PokemonPokopia)

#### 紧张感/高压博弈
- M11 污染驱动难度升级(Factorio)
- M28 动态撤离点单人消失(Marathon)
- M29 全损带入带出(Marathon)
- M30 高风险单局制(Marathon)
- M31 三层职业能力套组(Marathon)
- M32 PvPvE强对抗(Marathon)
- M33 局内背包与局外保险库(Marathon)
- M34 多维战术约束(Marathon)
- M35 枪械分层与改装(Marathon)

#### 惊喜/随机性
- M07 大头菜社交经济(AnimalCrossingNH)
- M13 帕鲁一体多用(Palworld)
- M17 稀有资源替代配方(DysonSphere)
- M25 路边摊报纸玩家经济(HayDay)

#### 爽快感/操作快感
- M14 帕鲁骑乘战斗技能(Palworld)

---
惊喜感 | M37 扑克牌BUFF组合系统(SoulAtStake)
紧张感 | M37 扑克牌BUFF组合系统(SoulAtStake) · M38 残局免费道具刷新(SoulAtStake)

### 2.3 按机制模式（"有没有类似XX的做法"）

#### 自动化/委托劳工/减少手动
- M09 传送带核心物流(Factorio) — 四层物流系统
- M10 蓝图系统(Factorio) — 设计复用
- M12 帕鲁劳工系统(Palworld) — 生物劳工代替手动
- M16 星际物流系统(DysonSphere) — 星际供需自动平衡
- M19 宝可梦技能岗位系统(PokemonPokopia) — 功能化收集物

#### 多层经济/加工链/产业链
- M02 多层加工增值经济(StardewValley) — 农场级加工增值
- M17 稀有资源替代配方(DysonSphere) — 双路径效率权衡
- M20 产业链经济(CitiesSkylines2) — 城市级产业链
- M25 路边摊报纸玩家经济(HayDay) — 玩家驱动交易经济

#### 跨系统收集/元目标
- M01 集章卡式收集系统(StardewValley) — 收集束跨系统粘合
- M04 百分比完成度追踪(StardewValley) — 统合式完成度
- M18 栖息地吸引系统(PokemonPokopia) — 环境匹配吸引
- M24 三消家装双轨循环(Homescapes) — 核心≠Meta双轨

#### NPC/生物角色化
- M03 NPC真实生活社交(StardewValley) — 独立日程+好感度限流
- M08 村民好感度系统(AnimalCrossingNH) — 好感度+照片终极奖励
- M12 帕鲁劳工系统(Palworld) — 生物=劳工+SAN值管理
- M13 帕鲁一体多用(Palworld) — 生物=万能工具
- M23 市民生命周期模拟(CitiesSkylines2) — 市民有真实生命周期

#### 时间节奏/节拍控制
- M05 无压力日常设计(StardewValley) — 世界驱动无FOMO
- M06 现实时间同步系统(AnimalCrossingNH) — 现实时钟同步
- M27 学年制双模式节奏(TwoPointCampus) — 运营+优化交替

#### 高风险/全损/搜打撤
- M28 动态撤离点单人消失(Marathon) — 动态撤离博弈
- M29 全损带入带出(Marathon) — 装备带入全损
- M30 高风险单局制(Marathon) — 单局无检查点
- M33 局内背包与局外保险库(Marathon) — 分层库存
- M35 枪械分层与改装(Marathon) — 装备分层追求

#### 社交经济/玩家交易
- M07 大头菜社交经济(AnimalCrossingNH) — 价格差异驱动互访
- M25 路边摊报纸玩家经济(HayDay) — 自由定价+全服浏览

#### 模块化/升级替代堆量
- M10 蓝图系统(Factorio) — 模块化复用
- M22 模块化建筑升级(CitiesSkylines2) — 建筑模块扩展
- M26 区域多城协作系统(SimCity4) — 城市特化分工

#### 职业/角色分工
- M31 三层职业能力套组(Marathon) — 壳体固定能力组
- M32 PvPvE强对抗(Marathon) — PvPvE双威胁
- M36 灵活队伍规模(Marathon) — 弹性队伍

#### 正负反馈/扩张代价
- M11 污染驱动难度升级(Factorio) — 扩张=更强敌人
- M15 同类合并升星系统(Palworld) — 重复捕获=指数收益

---
BUFF触发机制（完成目标→触发额外效果） | M37 扑克牌BUFF组合系统(SoulAtStake)

### 2.4 约束筛选（按条件缩小范围）

#### 按对抗类型
- **PVE**: M01-M27（除 M28-M36 外的所有卡）
- **PvPvE**: M28 M29 M30 M31 M32 M33 M34 M35 M36

#### 按人数规模
- **纯单人**: M04 M08 M11 M15 M17 M20 M21 M22 M23 M25 M26 M27
- **单人+小队**: M01 M02 M03 M05 M06 M12 M13 M14 M18 M19
- **含多人(8+)**: M09 M10 M28 M29 M30 M31 M32 M33 M34 M35 M36
- **小队**: M07

#### 按操作属性
- **即时操作**: M14 M28 M29 M30 M32 M34
- **半即时**: M09 M11 M12 M13 M15 M16 M17 M20 M21 M22 M23 M26 M27
- **非即时/放置**: M01 M02 M03 M04 M05 M06 M07 M08 M10 M18 M19 M24 M25

#### 按时间投入
- **碎片化**: M05 M06 M07 M08 M24 M25
- **中等**: M14 M27 M28 M30 M34 M36
- **长时间**: M01 M02 M03 M04 M09 M10 M11 M12 M13 M15 M16 M17 M18 M19 M20 M21 M22 M23 M26

#### 按生命周期阶段
- **新手引导**: M05 M21
- **成长中期**: M01 M02 M03 M04 M07 M12 M13 M15 M17 M19 M20 M23 M28 M29 M30 M31 M32 M33 M34 M35 M36
- **Endgame**: M04 M10 M12 M15 M16 M20 M22 M26
- **全周期**: M06 M08 M09 M11 M18 M24 M25 M27

---

### 2.5 按协同模式（"我需要和XX配合的机制"）

#### 乘法关系（A×B > A+B）
- M01×M05 集章卡×无压力(StardewValley) — 目标+无压力=有方向不催促
- M02×职业 多层加工×职业分支(StardewValley) — 价值指数爆炸
- M07×联机 大头菜×互访(AnimalCrossingNH) — 社交=经济行为
- M09×M10 传送带×蓝图(Factorio) — 设计复用放大价值
- M12×M13 劳工×一体多用(Palworld) — 多用提升价值×劳工高频兑现
- M12×M15 劳工×升星(Palworld) — Rank4工作+1直接提升产能
- M18×M19 栖息地×技能岗位(PokemonPokopia) — 吸引→技能→建设→更好吸引=正循环
- M20×M21 产业链×发展树(CitiesSkylines2) — 互为节奏限制与驱动
- M25×加工 路边摊×加工链(HayDay) — 加工越深×自由定价=更高回报
- M28×M29 动态撤离×全损(Marathon) — 全损放大撤离价值

#### 保险丝关系（A让玩家敢用B）
- M01×M05 集章卡×无压力(StardewValley) — 目标防迷茫+无压力不催
- M33×M28 分层库存×动态撤离(Marathon) — 保险库缓冲全损冲击

#### 链式关系（A的产出是B的输入）
- M06×M08 时间同步→好感度(AnimalCrossingNH) — 每日登录→对话+1→照片
- M11×M09 污染→物流(Factorio) — 扩张产线→更多污染→更强攻击
- M24 三消→星星→家装→叙事→三消(Homescapes) — 双轨互为输入

#### 弥补关系（A解决B的副作用）
- M22×M23 模块化×市民生命周期(CitiesSkylines2) — 需求增长×扩容方案

---
保险丝关系（核心目标+意外奖励） | M37 扑克牌BUFF组合系统(SoulAtStake)

## 3) 跨品类桥梁

手工策展的跨品类类比关系，提示 agent 哪些不同品类的机制有共通设计智慧：

| 桥梁 | 机制 A | 机制 B | 共通点 |
|------|--------|--------|--------|
| 自动化替代手动 | M09 传送带物流(Factorio) | M12 帕鲁劳工(Palworld) | 都用委托/自动化解决重复劳动痛点 |
| 多层经济加工 | M02 加工增值(StardewValley) | M20 产业链(CitiesSkylines2) | 都用多层加工链创造经济决策深度 |
| 收集=功能解锁 | M01 集章卡(StardewValley) | M19 技能岗位(PokemonPokopia) | 都用功能驱动让收集有实质回报 |
| 日常节奏控制 | M05 无压力日常(StardewValley) | M06 现实时间(AnimalCrossingNH) | 都用时间节奏替代任务压力驱动留存 |
| 社交经济驱动 | M07 大头菜(AnimalCrossingNH) | M25 路边摊(HayDay) | 都用玩家间信息差/交易驱动社交互动 |
| 模块化复用 | M10 蓝图(Factorio) | M22 模块化建筑(CitiesSkylines2) | 都通过模块化降低重复建设成本 |
| 生物角色化 | M12 帕鲁劳工(Palworld) | M18 栖息地吸引(PokemonPokopia) | 都让收集的生物有实质功能用途 |
| 扩张代价反馈 | M11 污染进化(Factorio) | M29 全损带入带出(Marathon) | 都用"越强=越危险"的正负反馈 |
| 多城/多星协作 | M26 区域多城(SimCity4) | M16 星际物流(DysonSphere) | 都把规模扩展到多节点协作维度 |

---

## 4) 维护规则（Phase 5 自动更新）

### 新增机制卡时

1. **注册表**：在 §1 表格末尾追加 1 行，ID 递增（当前下一个为 M37）
2. **倒排索引**：从新卡的标签信息中提取，追加到对应的索引小节
   - §2.1 痛点：从"玩家痛点"标签提取，每张卡最多 3 个痛点条目
   - §2.2 体验：从"情绪反馈"+"16乐趣标签"提取，每张卡最多 2 个体验条目
   - §2.3 机制模式：从"特色机制"标签提取，归入最匹配的模式类别；如无匹配类别则新建
   - §2.4 约束：从"玩法层级"8 维提取，追加 ID 到对应分组
   - §2.5 协同：从"关联机制卡-同游戏内"的协同类型提取
3. **跨品类桥梁**：如果新卡的"其他游戏"关联指向不同品类，考虑追加桥梁条目
4. **更新元信息**：修改文件顶部的"最后更新"日期、机制卡总数、游戏数、品类数

### 规模控制（200+ 机制卡时）

- 每个痛点/体验/模式类别下最多保留 **Top 15** 条，超出时保留最具代表性的 + "更多：见 [品类]/_summary.md"
- 注册表保持完整（不截断），但路径列可简化
- 约束筛选索引仅列 ID，不加描述，保持紧凑

### 新建索引类别

当某个标签在 3+ 张卡中出现但无现有类别匹配时，新建类别。命名用"场景化动词短语"（如"让玩家在高风险中做取舍"），不用抽象术语。
