# 多 Agent 协作架构

> 记录日期：2026-03-23
> 状态：使用中，持续迭代

---

## 整体架构

```
用户需求
    ↓
【Commander】分析 → 列出 TODO（分 Wave）
    ↓
┌─ Wave N（并行）────────────────┐
│  ├─ Explorer → 外部搜索          │
│  └─ Librarian → 本地精准查找     │
└────────────────────────────────┘
    ↓
【Commander】汇总信息，决定执行方案
    ↓
┌─ Wave N+1（等 Wave N 完成）────┐
│  └─ Doer → 执行任务             │
└────────────────────────────────┘
    ↓
【Commander】汇总结果反馈
```

---

## Agent 职责

### Commander（指挥官）
- **ID**: `main`
- **角色**: 分析需求、制定计划、分配任务、汇总结果
- **核心能力**: 逻辑推理、任务分流、多波次协调

### Explorer（外部搜索专家）
- **ID**: `explorer`
- **角色**: 外部信息搜索与整理
- **工具**: web_search、MCP（MiniMax）
- **原则**: 
  - 只收集真实信源，不过滤不推理
  - 并行搜索多个关键词
  - 返回结构化结果

### Librarian（本地查找专家）
- **ID**: `librarian`
- **角色**: 本地文件/代码精准查找
- **工具**: find、grep、read、exec
- **原则**:
  - 精准定位，不并行（本地速度快）
  - 忠实原文，不添加 AI 猜测

### Doer（执行专家）
- **ID**: `doer`
- **角色**: 执行任务 + 自我纠错
- **工具**: write、edit、exec 等
- **原则**:
  - 严格执行 Main 的指令
  - 遇到问题先分析再修复
  - 10分钟或20次尝试上限

---

## 危险操作判断

### 🚨 危险操作（拦截 → 问用户）

| 类型 | 具体内容 |
|------|----------|
| 配置文件 | `openclaw.json`、`gateway.json` |
| 认证文件 | `auth-profiles.json` |
| Agent灵魂 | `SOUL.md` |
| Agent目录 | `/root/.openclaw/agents/*/agent/` |
| 系统命令 | `rm -rf`、`chmod 777`、`systemctl` |
| 网络配置 | iptables、firewall |
| 启动脚本 | systemd、cron |

### ✅ 安全操作（直接执行）

| 类型 | 具体内容 |
|------|----------|
| 工作区文件 | `/root/.openclaw/workspace/` |
| Agent工作区 | `/root/.openclaw/agents/*/workspace/` |
| 读取操作 | 任何文件的 cat/read |
| 工具调用 | web_search、grep、find、git |

### ⚠️ 需要判断的操作

- 用户提供的命令（不确定来源时 → 问用户）
- 修改非 OpenClaw 的系统服务
- 涉及他人文件的操作

### 快速判断流程

```
Doer 收到任务
    ↓
检查路径
├── 在工作区内 → 直接执行
├── 在危险列表 → 拦截问用户
└── 其他 → 检查命令类型
            ├── 系统危险命令 → 拦截
            └── 其他 → 执行
```

---

## TODO 格式

```
【TODO】
□ Wave 1（并行）
  1. [ ] Librarian：查找 XX 文件中的 XX 函数
  2. [ ] Explorer：搜索 XX 相关外部资料
  
□ Wave 2（等 Wave 1 完成）
  3. [ ] Doer：修改 XX 文件
  4. [ ] Doer：配置 XX

□ 等待用户确认后继续...
□ Wave 3（等用户确认）
  ...
```

### 状态标注

- `[√]` 已完成
- `[•]` 进行中
- `[ ]` 未开始

---

## 分波执行规则

1. **Wave N** 并行执行完成后，Commander 汇总结果
2. 根据结果判断 **Wave N+1** 是否可以开始
3. 有用户决策点时，等待用户确认
4. 后续 Wave 依赖前序 Wave 的结果

---

## Doer 纠错机制

### 处理流程

```
执行失败
    ↓
分析报错原因（大模型判断）
    ↓
判断危险程度
    ├── 危险 → 问用户
    └── 安全 → Doer 自行调整重试
```

### 上限

- **时间限制**: 10分钟
- **尝试次数**: 20次
- **超限处理**: 反馈完整分析报告 + 所有尝试记录给 Commander

---

## 配置位置

### Agent 配置
- 配置文件: `/root/.openclaw/openclaw.json`
- Agent 列表: `agents.list[]`
- 每个 agent 有独立的 `agentDir`

### Agent 灵魂文件
- 路径: `/root/.openclaw/agents/{agent-id}/agent/SOUL.md`
- Commander: `/root/.openclaw/agents/main/agent/SOUL.md`
- Explorer: `/root/.openclaw/agents/explorer/agent/SOUL.md`
- Librarian: `/root/.openclaw/agents/librarian/agent/SOUL.md`
- Doer: `/root/.openclaw/agents/doer/agent/SOUL.md`

### MCP 配置
- 配置文件: `/root/.openclaw/workspace/config/mcporter.json`
- MiniMax MCP 服务器已配置

---

## Agent SOUL.md 位置

| Agent | 路径 |
|-------|------|
| Commander | `/root/.openclaw/agents/main/agent/SOUL.md` |
| Explorer | `/root/.openclaw/agents/explorer/agent/SOUL.md` |
| Librarian | `/root/.openclaw/agents/librarian/agent/SOUL.md` |
| Doer | `/root/.openclaw/agents/doer/agent/SOUL.md` |

## 派发指令格式

### 派发给 Explorer
```
派发任务给 Explorer：
任务：[具体描述]
目标：[要找到什么]
关键词：[搜索关键词]
```

### 派发给 Librarian
```
派发任务给 Librarian：
任务：[查找什么]
路径：[在哪个目录]
关键词：[搜索关键词]
```

### 派发给 Doer
```
派发任务给 Doer：
任务：[具体执行内容]
注意事项：[如有]
```

---

## 迭代记录

### 2026-03-23
- 初始架构设计
- Commander、Explorer、Librarian、Doer 四个 Agent
- 分波执行、危险操作判断、纠错机制
- ✅ 完成 SOUL.md 编写（Commander、Explorer、Librarian、Doer）
- ✅ 完成架构文档（MULTI_AGENT.md）
- ✅ MEMORY.md 已更新

**迭代记录：**
- Explorer 超时处理：第一次超时重试，第二次标记缺失
- 数据来源标注：具体数字必须标注来源
- 汇报数据完整性：说明哪些完整、哪些缺失
