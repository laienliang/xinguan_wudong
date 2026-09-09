#!/bin/bash

echo "=========================================="
echo "  白盒测试执行脚本"
echo "=========================================="
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查 Node.js 版本
echo -e "${YELLOW}检查环境...${NC}"
NODE_VERSION=$(node -v)
echo "Node.js 版本: $NODE_VERSION"
echo ""

# 清理之前的覆盖率报告
echo -e "${YELLOW}清理旧的测试报告...${NC}"
rm -rf coverage/
echo "✓ 清理完成"
echo ""

# 运行所有测试
echo -e "${YELLOW}运行所有测试用例...${NC}"
echo "=========================================="
npm test
TEST_EXIT_CODE=$?
echo ""

if [ $TEST_EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✓ 所有测试通过${NC}"
else
    echo -e "${RED}✗ 部分测试失败，退出码: $TEST_EXIT_CODE${NC}"
fi
echo ""

# 生成覆盖率报告
echo -e "${YELLOW}生成覆盖率报告...${NC}"
echo "=========================================="
npm run cov
COV_EXIT_CODE=$?
echo ""

if [ $COV_EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✓ 覆盖率报告生成成功${NC}"
else
    echo -e "${RED}✗ 覆盖率报告生成失败${NC}"
fi
echo ""

# 显示覆盖率摘要
if [ -f "coverage/coverage-summary.json" ]; then
    echo -e "${YELLOW}覆盖率摘要:${NC}"
    echo "=========================================="
    cat coverage/coverage-summary.json | grep -A 10 "total"
    echo ""
fi

# 显示测试报告位置
echo -e "${YELLOW}测试报告位置:${NC}"
echo "  - HTML 报告: coverage/index.html"
echo "  - LCOV 报告: coverage/lcov.info"
echo "  - JSON 摘要: coverage/coverage-summary.json"
echo ""

# 打开 HTML 报告（macOS）
if [ -f "coverage/index.html" ]; then
    echo -e "${YELLOW}打开 HTML 覆盖率报告...${NC}"
    open coverage/index.html 2>/dev/null || echo "请手动打开 coverage/index.html 查看详细报告"
fi

echo ""
echo "=========================================="
echo -e "${GREEN}测试执行完成${NC}"
echo "=========================================="

exit $TEST_EXIT_CODE
