#!/bin/bash

# 游客PC端停止脚本

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}停止游客PC端...${NC}"

# 查找占用 9100 端口的进程
PIDS=$(lsof -ti :9100 2>/dev/null)

if [ -z "$PIDS" ]; then
    echo -e "${YELLOW}游客PC端未运行${NC}"
    exit 0
fi

# 停止进程
for PID in $PIDS; do
    echo "停止进程 (PID: $PID)..."
    kill $PID 2>/dev/null || true
    sleep 2

    # 如果还在运行，强制停止
    if ps -p $PID > /dev/null 2>&1; then
        kill -9 $PID 2>/dev/null || true
    fi
done

echo -e "${GREEN}✓ 游客PC端已停止${NC}"
