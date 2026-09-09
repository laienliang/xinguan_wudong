#!/bin/bash

echo "=========================================="
echo "  生成测试覆盖率报告"
echo "=========================================="
echo ""

# 清理旧报告
rm -rf coverage/

# 运行测试并生成覆盖率
echo "正在运行测试并收集覆盖率数据..."
npm run cov

# 检查是否成功生成报告
if [ -f "coverage/index.html" ]; then
    echo ""
    echo "✅ 覆盖率报告生成成功！"
    echo ""

    # 显示覆盖率摘要
    if [ -f "coverage/coverage-summary.json" ]; then
        echo "=========================================="
        echo "  覆盖率摘要"
        echo "=========================================="

        # 使用 node 解析 JSON 并格式化输出
        node -e "
        const fs = require('fs');
        const data = JSON.parse(fs.readFileSync('coverage/coverage-summary.json', 'utf8'));
        const total = data.total;

        console.log('');
        console.log('  📊 整体覆盖率统计');
        console.log('  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('  行覆盖率 (Lines):      ' + total.lines.pct.toFixed(2) + '%  (' + total.lines.covered + '/' + total.lines.total + ')');
        console.log('  语句覆盖率 (Statements): ' + total.statements.pct.toFixed(2) + '%  (' + total.statements.covered + '/' + total.statements.total + ')');
        console.log('  函数覆盖率 (Functions):  ' + total.functions.pct.toFixed(2) + '%  (' + total.functions.covered + '/' + total.functions.total + ')');
        console.log('  分支覆盖率 (Branches):   ' + total.branches.pct.toFixed(2) + '%  (' + total.branches.covered + '/' + total.branches.total + ')');
        console.log('');

        // 检查是否达到目标
        if (total.lines.pct >= 75 && total.functions.pct >= 75 && total.branches.pct >= 70) {
            console.log('  ✅ 已达到覆盖率目标！');
        } else {
            console.log('  ⚠️  未达到覆盖率目标 (行/函数 75%, 分支 70%)');
        }
        console.log('');
        "
    fi

    echo "=========================================="
    echo "  报告位置"
    echo "=========================================="
    echo ""
    echo "  HTML 报告: file://$(pwd)/coverage/index.html"
    echo "  LCOV 报告: $(pwd)/coverage/lcov.info"
    echo "  JSON 报告: $(pwd)/coverage/coverage-summary.json"
    echo ""

    # 询问是否打开HTML报告
    read -p "是否打开 HTML 覆盖率报告? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        open coverage/index.html 2>/dev/null || xdg-open coverage/index.html 2>/dev/null || echo "请手动打开 coverage/index.html"
    fi
else
    echo ""
    echo "❌ 覆盖率报告生成失败"
    echo "请检查测试是否正常运行"
    exit 1
fi

echo ""
echo "=========================================="
echo "  完成"
echo "=========================================="
