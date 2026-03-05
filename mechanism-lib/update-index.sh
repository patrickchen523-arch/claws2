#!/bin/bash

# 机制库索引自动更新脚本
# 路径: /root/.openclaw/workspace/mechanism-lib/update-index.sh

INDEX_FILE="/root/.openclaw/workspace/mechanism-lib/INDEX.md"
MECHANISMS_DIR="/root/.openclaw/agents/jizhi/workspace/mechanisms"
GAMES_DIR="/root/.openclaw/agents/jizhi/workspace/games"

# 获取当前日期
UPDATE_DATE=$(date "+%Y-%m-%d")

# 开始生成索引
cat > "$INDEX_FILE" << HEADER
# 机制库索引

> 最后更新：$UPDATE_DATE

---

## 游戏索引

HEADER

# 统计游戏和机制数量
echo "| 游戏 | 类型 | 机制数 |" >> "$INDEX_FILE"
echo "|------|------|--------|" >> "$INDEX_FILE"

for game_dir in "$GAMES_DIR"/*.md; do
  if [ -f "$game_dir" ]; then
    game_name=$(basename "$game_dir" .md)
    game_file="$game_dir"
    
    # 查找对应的机制目录
    mechanism_count=0
    for mech_dir in "$MECHANISMS_DIR"/*/; do
      if [ -d "$mech_dir" ]; then
        mech_name=$(basename "$mech_dir")
        # 简单匹配
        if [[ "$mech_name" == *"$game_name"* ]] || [[ "$game_name" == *"$mech_name"* ]]; then
          mechanism_count=$(ls -1 "$mech_dir"/*.md 2>/dev/null | wc -l)
        fi
      fi
    done
    
    echo "| $game_name | - | $mechanism_count |" >> "$INDEX_FILE"
  fi
done

echo "" >> "$INDEX_FILE"
echo "---" >> "$INDEX_FILE"
echo "" >> "$INDEX_FILE"
echo "## 机制索引" >> "$INDEX_FILE"
echo "" >> "$INDEX_FILE"

# 按游戏列出机制
for mech_dir in "$MECHANISMS_DIR"/*/; do
  if [ -d "$mech_dir" ]; then
    mech_name=$(basename "$mech_dir")
    echo "### $mech_name" >> "$INDEX_FILE"
    for mech_file in "$mech_dir"*.md; do
      if [ -f "$mech_file" ]; then
        mech_title=$(basename "$mech_file" .md)
        echo "- $mech_title" >> "$INDEX_FILE"
      fi
    done
    echo "" >> "$INDEX_FILE"
  fi
done

echo "*本索引每天自动更新*" >> "$INDEX_FILE"

echo "索引已更新: $INDEX_FILE"
