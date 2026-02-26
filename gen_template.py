import xlsxwriter

wb = xlsxwriter.Workbook('/root/.openclaw/workspace/设计参数对比模板.xlsx')
ws = wb.add_worksheet('设计参数对比')

# ── 颜色（对齐参考Excel风格）──
C_TITLE_BG   = '#1F3864'  # 深蓝，标题背景
C_TITLE_FG   = '#FFFFFF'
C_SEC_BG     = '#2E75B6'  # 中蓝，章节标题背景
C_SEC_FG     = '#FFFFFF'
C_LABEL_BG   = '#D6E4F0'  # 浅蓝，标签列背景
C_LABEL_FG   = '#1F3864'
C_HINT_BG    = '#EBF3FB'  # 更浅蓝，提示行
C_HINT_FG    = '#595959'
C_ROW_ODD    = '#FFFFFF'
C_ROW_EVEN   = '#F5FAFF'
C_REASON_ODD = '#FFFDE7'
C_REASON_EVN = '#FFF8E1'
C_BORDER     = '#9DC3E6'
C_GRAY_FG    = '#7F7F7F'
C_TEXT       = '#1F1F1F'

FONT = '微软雅黑'

def border():
    return {'border': 1, 'border_color': C_BORDER}

def base(extra=None):
    d = {'font_name': FONT, 'font_size': 11, 'text_wrap': True,
         'valign': 'vcenter', **border()}
    if extra:
        d.update(extra)
    return wb.add_format(d)

# ── 格式定义 ──
f_title = base({'font_size': 20, 'bold': True, 'font_color': C_TITLE_FG,
                'bg_color': C_TITLE_BG, 'align': 'center', 'valign': 'vcenter',
                'border': 0})

f_desc = base({'font_size': 10, 'font_color': C_TITLE_FG, 'italic': True,
               'bg_color': C_SEC_BG, 'align': 'left', 'indent': 1, 'border': 0})

f_rule = base({'font_size': 10, 'bold': True, 'font_color': C_LABEL_FG,
               'bg_color': C_LABEL_BG, 'align': 'left', 'indent': 1, 'border': 0})

f_tip = base({'font_size': 9, 'font_color': C_HINT_FG, 'italic': True,
              'bg_color': C_HINT_BG, 'align': 'left', 'indent': 1, 'border': 0})

f_col_hdr = base({'font_size': 12, 'bold': True, 'font_color': C_TITLE_FG,
                  'bg_color': C_SEC_BG, 'align': 'center'})

f_col_sub = base({'font_size': 9, 'font_color': C_HINT_FG, 'italic': True,
                  'bg_color': C_HINT_BG, 'align': 'center'})

# 标签列（关键设计）
f_tag_odd  = base({'font_size': 11, 'bold': True, 'font_color': C_LABEL_FG,
                   'bg_color': C_LABEL_BG, 'align': 'center'})
f_tag_even = base({'font_size': 11, 'bold': True, 'font_color': C_LABEL_FG,
                   'bg_color': '#EBF3FB', 'align': 'center'})

# 内容列
f_cell_odd  = base({'font_size': 11, 'font_color': C_TEXT,
                    'bg_color': C_ROW_ODD, 'align': 'left', 'indent': 1})
f_cell_even = base({'font_size': 11, 'font_color': C_TEXT,
                    'bg_color': C_ROW_EVEN, 'align': 'left', 'indent': 1})

# 改动原因列
f_rsn_odd  = base({'font_size': 11, 'font_color': C_TEXT,
                   'bg_color': C_REASON_ODD, 'align': 'left', 'indent': 1})
f_rsn_even = base({'font_size': 11, 'font_color': C_TEXT,
                   'bg_color': C_REASON_EVN, 'align': 'left', 'indent': 1})

# 示例行
f_ex_tag  = base({'font_size': 10, 'font_color': C_GRAY_FG, 'italic': True,
                  'bg_color': '#F2F2F2', 'align': 'center'})
f_ex_cell = base({'font_size': 10, 'font_color': C_GRAY_FG, 'italic': True,
                  'bg_color': '#F2F2F2', 'align': 'left', 'indent': 1})
f_ex_rsn  = base({'font_size': 10, 'font_color': C_GRAY_FG, 'italic': True,
                  'bg_color': '#FFFDE7', 'align': 'left', 'indent': 1})
f_ex_hdr  = base({'font_size': 9, 'bold': True, 'font_color': C_TITLE_FG,
                  'bg_color': '#7F7F7F', 'align': 'center', 'border': 0})

f_footer = base({'font_size': 8, 'font_color': C_GRAY_FG, 'italic': True,
                 'bg_color': C_HINT_BG, 'align': 'center', 'border': 0})

# ── 列宽 ──
# A:关键设计  B:对应系统  C:竞品参数  D:产品参数  E:改动原因
ws.set_column('A:A', 20)
ws.set_column('B:B', 18)
ws.set_column('C:C', 38)
ws.set_column('D:D', 38)
ws.set_column('E:E', 42)

# ── R0 标题 ──
ws.set_row(0, 48)
ws.merge_range('A1:E1', '设计参数对比表', f_title)

# ── R1 副标题 ──
ws.set_row(1, 20)
ws.merge_range('A2:E2',
    '针对玩法原型的深度拆解，一对一比较哪些设计照搬、哪些设计有调整，并论证调整的目的性与预期体验差异',
    f_desc)

# ── R2 判断标准 ──
ws.set_row(2, 20)
ws.merge_range('A3:E3',
    '【关键设计判断标准】  ① 移除后核心玩法是否不成立或乐趣大减  ② 产品有改动且直接指向核心差异化体验',
    f_rule)

# ── R3 填写提示 ──
ws.set_row(3, 18)
ws.merge_range('A4:E4',
    '填写提示：每行对应一个关键设计点；"改动原因"需说明改动目的及预期体验差异；若未改动请填写"保留，原因：……"',
    f_tip)

# ── R4 列头 ──
ws.set_row(4, 36)
headers = ['关键设计', '对应系统', '竞品对应参数\n（旧酒）', '产品对应参数\n（新瓶）', '改动原因\n（若改动）']
for col, h in enumerate(headers):
    ws.write(4, col, h, f_col_hdr)

# ── R5 列说明 ──
ws.set_row(5, 28)
hints = ['核心玩法 / 核心支柱\n/ 差异化体验',
         '对应的具体系统名称',
         '竞品的具体设计参数\n数值 / 规则 / 机制',
         '本产品的具体设计参数\n数值 / 规则 / 机制',
         '为什么这样改？目标体验是什么？']
for col, h in enumerate(hints):
    ws.write(5, col, h, f_col_sub)

# ── 数据行 ──
ROW_START = 6
ROW_COUNT = 10

for i in range(ROW_COUNT):
    r = ROW_START + i
    ws.set_row(r, 72)
    odd = (i % 2 == 0)
    ws.write(r, 0, '', f_tag_odd  if odd else f_tag_even)
    ws.write(r, 1, '', f_cell_odd if odd else f_cell_even)
    ws.write(r, 2, '', f_cell_odd if odd else f_cell_even)
    ws.write(r, 3, '', f_cell_odd if odd else f_cell_even)
    ws.write(r, 4, '', f_rsn_odd  if odd else f_rsn_even)

# ── 示例区 ──
EX_HDR = ROW_START + ROW_COUNT
ws.set_row(EX_HDR, 18)
ws.merge_range(EX_HDR, 0, EX_HDR, 4,
    '▼ 填写示例（云顶之弈 vs Dota自走棋）— 参考后可删除此区域', f_ex_hdr)

examples = [
    ('核心玩法\n排兵布阵', '棋盘布局',
     '8×8 正方形格子',
     '7×8 错位六边形格子',
     '六边形格子使邻接距离恒定，消除对角线移动突兀感；包围/集火更直观'),
    ('核心玩法', '装备合成',
     '15种散件 × 3层合成树\n强力功能性装备通过合成获取',
     '8种基础装备，最多2层合成树，36种装备\n强力装备包装为无需合成的"神器"',
     '降低上手门槛，减少合成记忆负担；借助LOL散件认知区分物理/法术装'),
    ('核心支柱\n胡牌爽感', '纹章系统',
     '棋子种族固定，胡牌路线固定',
     '金铲铲/金锅锅合成纹章（转职）/冠冕（人口）',
     '引入"癞子"概念，纹章可配给任意棋子，提升胡牌概率与路线多样性'),
    ('核心玩法\n运营策略', '海克斯（随机三选一）',
     '无此机制',
     '3次阶段性选择（2-1, 3-2, 4-2）\n3选1永久全局增益，约80/130/60种分级海克斯',
     '增加运营策略丰富度与版本耐玩性；引入"比较优势"，A海克斯+A阵容发挥最大效果'),
    ('差异化体验\n落后补偿', '选秀机制',
     '无补偿机制\n血量低仅意味着容错低',
     '每5回合9选8轮抽\n按血量从低到高顺序选择，落后方优先挑选',
     '解决旧酒"滚雪球"体验差的问题；血量低转化为资源优先权，增加运营多样性'),
]

for i, (tag, sys_, old, new, reason) in enumerate(examples):
    r = EX_HDR + 1 + i
    ws.set_row(r, 60)
    ws.write(r, 0, tag,    f_ex_tag)
    ws.write(r, 1, sys_,   f_ex_cell)
    ws.write(r, 2, old,    f_ex_cell)
    ws.write(r, 3, new,    f_ex_cell)
    ws.write(r, 4, reason, f_ex_rsn)

# ── 页脚 ──
FOOTER = EX_HDR + 1 + len(examples)
ws.set_row(FOOTER, 16)
ws.merge_range(FOOTER, 0, FOOTER, 4,
    '本模板用于玩法原型设计参数对比分析 · 请将竞品名称与产品名称替换为实际项目名称后使用',
    f_footer)

# ── 冻结前6行 ──
ws.freeze_panes(6, 0)

# ── 打印设置 ──
ws.set_landscape()
ws.fit_to_pages(1, 0)
ws.set_margins(left=0.5, right=0.5, top=0.5, bottom=0.5)
ws.set_paper(9)  # A4

wb.close()
print('Done')
