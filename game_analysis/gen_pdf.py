from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

# Register Chinese font
pdfmetrics.registerFont(TTFont('WenQuanYi', '/usr/share/fonts/truetype/wqy/wqy-microhei.ttc'))

# Create PDF
doc = SimpleDocTemplate("/root/.openclaw/workspace/game_analysis/1_valorant_analysis_v2.pdf", pagesize=A4)
styles = getSampleStyleSheet()
title_style = ParagraphStyle('Title', parent=styles['Title'], fontName='WenQuanYi', fontSize=18)
heading_style = ParagraphStyle('Heading', parent=styles['Heading1'], fontName='WenQuanYi', fontSize=14)
body_style = ParagraphStyle('Body', parent=styles['BodyText'], fontName='WenQuanYi', fontSize=10)

content = []

# Title
content.append(Paragraph("《无畏契约》(Valorant) 游戏标准化拆解分析", title_style))
content.append(Spacer(1, 0.3*inch))

# Section 1
content.append(Paragraph("一、游戏基础信息", heading_style))
content.append(Paragraph("《无畏契约》是由拳头游戏（Riot Games）开发、腾讯代理运营的一款5V5英雄战术射击游戏。拳头游戏是全球知名游戏公司，代表作《英雄联盟》系列，《无畏契约》于2020年6月2日在海外发布，中国国服于2023年7月12日正式上线。", body_style))
content.append(Paragraph("据公开新闻显示，国服上线前预约人数突破1500万，腾讯承诺未来三年投入超10亿元推动生态发展。摩根大通预测《无畏契约》手游年收入可达50-60亿元人民币。截至2024年，该游戏已成为腾讯长青游戏之一，季均日活跃用户创新高。", body_style))
content.append(Spacer(1, 0.2*inch))

# Section 2
content.append(Paragraph("二、X-Statement公式", heading_style))
content.append(Paragraph("【5V5英雄战术射击】+【爆破模式核心规则】+【技能+枪法双轨并行】", body_style))
content.append(Spacer(1, 0.2*inch))

# Section 3
content.append(Paragraph("三、玩法原型分析", heading_style))
content.append(Paragraph("玩法原型：《无畏契约》是基于CS:GO的竞技体验：CS:GO的核心理念是纯粹枪法的博弈，玩家在固定经济约束下，通过精准射击和战术配合取胜，强调一枪头的高爆头伤害和回合制经济循环。", body_style))
content.append(Paragraph("本游戏在此基础上改出的独特体验：引入英雄技能系统、降低射击门槛、TTK（击杀时间）适中。", body_style))
content.append(Spacer(1, 0.2*inch))

# Section 4
content.append(Paragraph("四、核心支柱拆解", heading_style))
content.append(Paragraph("支柱1：【枪法为核】-> 枪械手感优化（前2发精准、点射机制、急停）、经济系统约束（初始$800、胜利$3000）", body_style))
content.append(Paragraph("支柱2：【英雄技能】-> 普通技能消耗经济、大招消耗能量点、技能与枪法平衡", body_style))
content.append(Paragraph("支柱3：【竞技公平】-> 反外挂系统Vanguard、MMR匹配系统、128tick服务器", body_style))
content.append(Paragraph("支柱4：【内容运营】-> 皮肤系统、Battle Pass、赛事生态（VCT全球冠军赛）", body_style))
content.append(Spacer(1, 0.2*inch))

# Section 5
content.append(Paragraph("五、核心体验拆解", heading_style))
content.append(Paragraph("以秒为单位：3D第一人称视角，玩家扮演战术英雄，在5v5爆破模式中通过精准射击和技能配合取得胜利，享受枪法与策略并重的竞技快感。", body_style))
content.append(Paragraph("以分钟为单位：手枪局（0分钟）-> 经济积累期（1-4回合）-> 全面对抗期（5-12回合）-> 攻守互换（13回合后）", body_style))
content.append(Spacer(1, 0.2*inch))

# Section 6
content.append(Paragraph("六、总结", heading_style))
content.append(Paragraph("核心成功要素：1.继承+创新（CS:GO竞技基础+LOL英雄技能）2.门槛优化 3.生态完善 4.腾讯本地化", body_style))

doc.build(content)
print("PDF created successfully")
