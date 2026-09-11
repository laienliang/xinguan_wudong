#!/bin/bash

# 管理后台状态查看脚本

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}管理后台状态${NC}"
echo "===================="

# 检查端口占用
if lsof -i :9000 > /dev/null 2>&1; then
    PROC=$(lsof -i :9000 | tail -1 | awk '{print $1}')
    PID=$(lsof -i :9000 | tail -1 | awk '{print $2}')
    echo -e "状态: ${GREEN}运行中${NC}"
    echo "进程: $PROC (PID: $PID)"
    echo "端口: 9000"
    echo "URL:  http://localhost:9000"

    # 健康检查
    if curl -s http://localhost:9000 > /dev/null 2>&1; then
        echo -e "健康: ${GREEN}正常${NC}"
    else
        echo -e "健康: ${RED}无响应${NC}"
    fi
else
    echo -e "状态: ${RED}未运行${NC}"
fi
