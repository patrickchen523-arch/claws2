# mechanism-scoring

对机制库中的机制卡进行质量评分和分级。

## 使用场景

- 需要对机制库中的机制卡进行质量评估
- 需要给新机制卡打分并自动分级
- 需要批量重新评分

## 评分标准

### 一、一句话通俗解释 (3分)

| 得分 | 特征 |
|------|------|
| 3分 | 通俗易懂（无专业术语） + 有类比（"就像"/"相当于"/"比如"） |
| 2分 | 有类比但含少量术语 |
| 1.5分 | 通俗但无类比 |
| 0.5分 | 有术语但无类比 |
| 0分 | 缺失或太短(<10字) |

### 二、机制描述详细度 (4分)

| 评分项 | 得分标准 |
|--------|----------|
| 子项分类 | ≥4个得2分，≥2个得1分 |
| 具体参数 | ≥3个得1.5分，≥1个得0.5分 |
| 描述字数 | >400字得1分 |

### 三、设计意图 (3分)

| 得分 | 特征 |
|------|------|
| 3分 | 同时包含"解决痛点"和"体验目标"，且描述详细 |
| 1.5分 | 只有"解决痛点" 或 只有"体验目标" |
| 0分 | 都缺失 |

### 四、关联参考 (2分)

| 得分 | 特征 |
|------|------|
| 2分 | ≥3个游戏参考 |
| 1分 | 2个游戏参考 |
| 0.5分 | 1个游戏参考 |

### 五、附加分 (1分)

- 有玩家评价/舆情引用：+0.5分
- 有超越满分项的额外详细说明（额外参数、案例、变体等）：+0.5分

---

## 分级阈值

按 20%/70%/10% 比例末位淘汰：

- **[Excellent]**：前20%
- **[Qualify]**：中间70%
- **[not_comfirmed]**：后10%

---

## 输出格式

文件名前缀格式：`[Excellent]机制名.md`、`[Qualify]机制名.md`、`[not_comfirmed]机制名.md`

---

## 评分脚本

```python
import os
import re

def evaluate_mechanism(content):
    """评估机制卡质量，返回分数"""
    score = 0
    
    # 一、一句话通俗解释 (3分)
    one_match = re.search(r'一句话解释[：:]\s*([^#\n]+)', content)
    if one_match:
        sentence = one_match.group(1).strip()
        analogy_words = ['就像', '相当于', '比如', '如同', '好像', '类似', '等于']
        has_analogy = any(w in sentence for w in analogy_words)
        jargon = len(re.findall(r'\b[A-Z]{2,}\b', sentence))
        
        if len(sentence) < 10:
            score += 0
        elif has_analogy and jargon == 0:
            score += 3
        elif has_analogy:
            score += 2
        elif jargon == 0:
            score += 1.5
        else:
            score += 0.5
    
    # 二、机制描述详细度 (4分)
    desc_match = re.search(r'## 机制拆解\n(.*?)(?=##|$)', content, re.DOTALL)
    if desc_match:
        desc = desc_match.group(1)
        
        # 子项分类
        items = re.findall(r'^\d+[\.、\)]|^\[|\(\d+\)|第一|第二|第三|①|②|③', desc, re.MULTILINE)
        if len(items) >= 4:
            score += 2
        elif len(items) >= 2:
            score += 1
        
        # 具体参数
        params = re.findall(r'\d+[%\个级点分秒]', desc)
        if len(params) >= 3:
            score += 1.5
        elif len(params) >= 1:
            score += 0.5
        
        # 字数
        if len(desc) > 400:
            score += 1
    
    # 三、设计意图 (3分)
    has_pain = '解决痛点' in content or '痛点' in content
    has_exp = '体验目标' in content or '体验' in content
    if has_pain and has_exp:
        score += 3
    elif has_pain or has_exp:
        score += 1.5
    
    # 四、关联参考 (2分)
    ref_match = re.search(r'相似机制[：:]?\s*([^#\n]+)', content)
    if ref_match:
        refs = ref_match.group(1).strip()
        games = re.findall(r'[《"][^《"]+[》"]|[A-Z][a-z]+', refs)
        if len(games) >= 3:
            score += 2
        elif len(games) >= 2:
            score += 1
        elif len(games) >= 1:
            score += 0.5
    
    # 五、附加分 (1分)
    if re.search(r'玩家|评价|舆情|反馈|社区|Reddit', content):
        score += 0.5
    extra_detail = len(re.findall(r'例子|案例|变体|公式|参数|详见|参考', content))
    if extra_detail >= 3:
        score += 0.5
    
    return round(score * 10) / 10


def grade_mechanism(score, excellent_thresh=5.0, qualify_thresh=3.5):
    """根据分数确定等级"""
    if score >= excellent_thresh:
        return 'Excellent'
    elif score >= qualify_thresh:
        return 'Qualify'
    else:
        return 'not_comfirmed'


def process_mechanism_file(file_path):
    """处理单个机制文件：评分并重命名"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 评分
    score = evaluate_mechanism(content)
    
    # 确定等级
    grade = grade_mechanism(score)
    
    # 获取当前文件名
    filename = os.path.basename(file_path)
    
    # 移除现有前缀
    clean_name = re.sub(r'^\[(Excellent|Qualify|not_comfirmed|\d+\.?\d*)\]', '', filename)
    
    # 添加新前缀
    new_filename = f"[{grade}]{clean_name}"
    new_path = os.path.join(os.path.dirname(file_path), new_filename)
    
    # 重命名
    if file_path != new_path:
        os.rename(file_path, new_path)
    
    return score, grade, new_filename


def batch_process_mechanisms(base_dir):
    """批量处理机制库"""
    scores = []
    
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.endswith('.md') and '游戏卡' not in f:
                file_path = os.path.join(root, f)
                try:
                    score, grade, new_name = process_mechanism_file(file_path)
                    scores.append((new_name, score, grade))
                    print(f"  {score}分 → [{grade}] {new_name}")
                except Exception as e:
                    print(f"  错误: {f} - {e}")
    
    return scores
```

---

## 使用方法

### 1. 批量评分（首次设置阈值）

运行评分脚本后，会自动根据分数分布计算阈值：
- 前20% → [Excellent]
- 中间70% → [Qualify]
- 后10% → [not_comfirmed]

### 2. 固定阈值评分（新机制入库时）

使用固定阈值（适合新机制）：
```python
score = evaluate_mechanism(content)
grade = grade_mechanism(score, excellent_thresh=5.0, qualify_thresh=3.5)
```

### 3. 手动评分

对照上方评分标准逐项打分，汇总后根据阈值判断等级。

---

## 示例

### 输入
- 文件：`[新]某某机制.md`

### 评分过程
1. 读取文件内容
2. 按5个维度逐项打分
3. 汇总得分（如：5.5分）
4. 判断等级（≥5.0 → Excellent）
5. 重命名为：`[Excellent]某某机制.md`

### 输出
- 文件前缀变为对应的等级标签
