# OpenClaw Skills 功能介绍

## 📦 游戏分析 & 机制研究

### game-analyse-2-0
游戏机制全流程分析。从玩法拓扑 → 机制扫描 → 创新评价 → 机制推理，产出完整四份报告并自动入库。触发词："分析XX游戏" / "拆解XX"。

### game-report-generator
根据游戏基础信息生成游戏评测报告，支持 Markdown/HTML 格式输出。

### game-system-designer
生成策划案、GDD、SDD、系统设计文档、功能模块设计、属性设计等游戏设计文档。

### game-entry-formatter
将游戏拆解分析结果格式化为机制库可入库的条目，生成机制卡（Mechanism Card）。

### mechanism-search
从机制库搜索符合条件的机制。当用户想查找某种类型/标签的机制时使用。

### mechanism-scoring
对机制进行评分，评估其创新程度和价值。

### steamdb-scraper
爬取 SteamDB 网站数据，获取 Steam 游戏排行、玩家数据等信息。

### rawg-api
通过 RAWG API 获取游戏数据库信息。

---

## 🧠 AI 能力 & 分析

### capability-evolver-pro
分析 OpenClaw 运行时日志，检测错误模式，计算系统健康分，生成改进建议。每天凌晨自动跑健康检查。

### self-improving-agent
从对话中学习用户的纠正和偏好，持续改进。适合长期使用同一个 AI 助手场景。

### insight-summarizer
将长文本 AI 输出转化为可操作的核心观点，输出两层：① TG 友好的简洁概要 ② 详细推理过程供追问。触发词："太长不看" / "总结一下"。

### nox-grill-me
苏格拉底式追问器。用连环追问帮你压力测试方案，走完每个决策分支直到没有盲区。触发词："grill me" / "脑暴"。

### investigate
深度研究工具，适合需要系统性地探索某个主题、收集多方信息的场景。

### trend-watcher
趋势追踪，监控某个领域的新动态。

---

## 🎨 设计 & 内容

### ui-ux-pro-max
UI/UX 设计智能助手，提供界面设计建议和实施指导。适合需要构建精美界面的项目。

### premium-pptx
生成排版精美、视觉震撼的 PowerPoint 演示文稿。

### pptx
创建幻灯片、PPT 演示文稿。

### document-release
文档发布流程管理。

---

## 💻 开发 & 工程

### github
通过 `gh` CLI 与 GitHub 交互，管理 Issues、PRs、CI 流水线、代码审查。

### gitclaw
将 OpenClaw workspace 自动备份到 GitHub 仓库，通过 cron 保持同步。

### clawhub
搜索、安装、更新和发布 Agent Skills，从 clawhub.com 获取新技能。

### codex
使用 Codex（OpenAI 的编码 Agent）在后台处理编码任务。

### setup-deploy
部署相关的环境配置和设置。

### setup-browser-cookies
配置浏览器 Cookie，用于需要登录态的爬虫或自动化场景。

---

## 🔍 信息获取

### tavily-skill
AI 优化的 Web 搜索，返回结构化结果。适合需要实时网络搜索和研究的场景。

### exa-web-search-free
通过 Exa MCP 提供免费 AI 搜索，支持新闻/信息搜索和 GitHub/StackOverflow 代码搜索。

### web-fetch-markdown
将网页转换为 Markdown 格式，便于阅读、分析和提取内容。

### head-url-finder
获取游戏封面图 URL。根据游戏平台自动获取官方封面图，用于游戏拆解入库。

### browse
控制浏览器执行自动化操作（导航、填表、截图等）。

---

## 🛡️ 安全 & 质量

### guard
安全审计工具，检查代码或配置中的潜在安全风险。

### qa
质量保证相关功能，测试和验证。

### qa-only
独立 QA 模块。

### review
代码/文档审查工具。

---

## ⚙️ 工具 & 效率

### office-hours
模拟办公时间，支持定时任务和定时提醒。

### retro
每周工程回顾。分析提交历史、工作模式和代码质量指标，带个人贡献追踪。

### long-task-monitor
长任务进度主动汇报。当任务涉及超过 3 步工具调用时，每执行 2 个工具调用主动汇报进度。

### freeze / unfreeze
冻结/解冻某些功能，用于控制 AI 的行为边界。

### careful
谨慎模式，AI 会更加保守，减少幻觉和错误。

### canary
金丝雀测试工具，用于实验性功能验证。

### test
测试相关工具。

### scripts
常用脚本集合。

---

## 📊 商业 & 协作

### plan-ceo-review / plan-design-review / plan-eng-review
不同层面的计划审查工具：CEO（商业策略）、设计、工程。

### design-consultation
设计咨询服务。

### design-review
设计评审工具。

### cso
战略规划相关。

### land-and-deploy
产品上线部署流程管理。

### ship
产品发布流程管理。

### benchmark
性能基准测试工具。

### autoplan
自动规划工具，辅助决策和任务分解。

### gstack-upgrade
gstack 相关升级工具。

### supabase
Supabase 数据库集成。

---

## 🔧 平台 & 集成

### claw-arena
Claw Arena 相关功能。

### openclaw-skills
OpenClaw 官方 Skills 集合。

### docs
OpenClaw 文档访问。

### bin
可执行脚本集合。
