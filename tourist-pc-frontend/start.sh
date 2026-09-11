#!/bin/bash

# 游客PC端启动脚本

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo -e "${YELLOW}启动游客PC端 (Nuxt3)...${NC}"

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "首次运行，正在安装依赖..."
    npm install
fi

# 检查端口占用
if lsof -i :9100 > /dev/null 2>&1; then
    echo -e "${RED}错误: 端口 9100 已被占用${NC}"
    echo "请先停止占用该端口的服务"
    exit 1
fi

# 启动开发服务器
echo "启动服务..."
npm run dev
