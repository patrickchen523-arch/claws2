#!/usr/bin/env python3
"""游戏分析报告生成器"""

import os
import json
from datetime import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SKILL_DIR = os.path.dirname(SCRIPT_DIR)
TEMPLATE_PATH = os.path.join(SKILL_DIR, 'templates', 'report.html')

def load_template():
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        return f.read()

def generate_report(data, output_path=None):
    template = load_template()
    
    # 基础信息
    game_name = data.get('game_name', '游戏名称')
    analyst = data.get('analyst', '游戏分析师 Agent')
    analysis_date = data.get('analysis_date', datetime.now().strftime('%Y年%m月%d日'))
    disclaimer = data.get('disclaimer', '本报告基于公开资料整理')
    
    template = template.replace('{game_name}', game_name)
    template = template.replace('{analyst}', analyst)
    template = template.replace('{analysis_date}', analysis_date)
    template = template.replace('{disclaimer}', disclaimer)
    
    # X-Statement
    template = template.replace('{x_statement}', data.get('x_statement', '待填写'))
    
    # 玩法原型
    old_wine = data.get('old_wine', {})
    template = template.replace('{old_wine_title}', old_wine.get('title', '待填写'))
    template = template.replace('{old_wine_desc}', old_wine.get('description', '待填写'))
    template = template.replace('{new_wine_desc}', data.get('new_wine_desc', '待填写'))
    
    # 游戏支柱
    pillars = data.get('pillars', [])
    pillars_html = ''
    for i, p in enumerate(pillars, 1):
        title = p.get('title', '待填写')
        method = p.get('method', '')
        pillars_html += f'''<div class="pillar">
            <div class="pillar-title">{i}. {title}</div>
            <div class="pillar-method">{method}</div>
        </div>'''
    template = template.replace('{pillars_section}', pillars_html or '<p>待填写</p>')
    
    # 核心体验
    template = template.replace('{experience_per_second}', data.get('experience_per_second', '待填写'))
    template = template.replace('{experience_per_hour}', data.get('experience_per_hour', '待填写'))
    
    # 游戏循环
    game_loop = data.get('game_loop', [])
    if game_loop:
        loop_html = ' <span class="arrow">→</span> '.join([f'{step}' for step in game_loop])
        template = template.replace('{game_loop}', loop_html)
    else:
        template = template.replace('{game_loop}', '待填写')
    
    # 图片嵌入
    template = template.replace('{pillars_image}', data.get('pillars_image', ''))
    template = template.replace('{loop_image}', data.get('loop_image', ''))
    
    if output_path:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(template)
        print(f'✅ HTML报告已生成: {output_path}')
    return template

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--json', '-j')
    parser.add_argument('--output', '-o')
    args = parser.parse_args()
    
    if args.json:
        with open(args.json, 'r', encoding='utf-8') as f:
            data = json.load(f)
        generate_report(data, args.output)
    else:
        print("用法: python generate_report.py --json data.json --output report.html")
