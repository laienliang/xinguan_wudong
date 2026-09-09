#!/bin/bash

echo "=========================================="
echo "  测试数据库初始化脚本"
echo "=========================================="
echo ""

# 数据库配置
DB_HOST=${TEST_DB_HOST:-"127.0.0.1"}
DB_PORT=${TEST_DB_PORT:-"3306"}
DB_USER=${TEST_DB_USER:-"root"}
DB_PASSWORD=${TEST_DB_PASSWORD:-""}
DB_NAME=${TEST_DB_NAME:-"cool_test"}

echo "数据库配置:"
echo "  Host: $DB_HOST"
echo "  Port: $DB_PORT"
echo "  User: $DB_USER"
echo "  Database: $DB_NAME"
echo ""

# 检查 MySQL 是否安装
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL 命令行工具未安装"
    echo ""
    echo "请手动创建数据库："
    echo "  1. 打开 MySQL 客户端或图形化工具（Navicat、phpMyAdmin等）"
    echo "  2. 执行 SQL："
    echo "     CREATE DATABASE $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    echo ""
    exit 1
fi

# 构建 MySQL 连接命令
if [ -z "$DB_PASSWORD" ]; then
    MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER"
else
    MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASSWORD"
fi

# 检查 MySQL 服务是否运行
echo "检查 MySQL 服务..."
if ! $MYSQL_CMD -e "SELECT 1;" &> /dev/null; then
    echo "❌ 无法连接到 MySQL 服务"
    echo "   请检查："
    echo "   1. MySQL 服务是否正在运行"
    echo "   2. 数据库配置是否正确"
    echo "   3. 用户名和密码是否正确"
    echo ""
    exit 1
fi
echo "✅ MySQL 服务正常"
echo ""

# 检查数据库是否存在
echo "检查数据库 $DB_NAME 是否存在..."
DB_EXISTS=$($MYSQL_CMD -e "SHOW DATABASES LIKE '$DB_NAME';" 2>/dev/null | grep -c "$DB_NAME")

if [ "$DB_EXISTS" -eq 1 ]; then
    echo "⚠️  数据库 $DB_NAME 已存在"
    read -p "是否删除并重新创建? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "删除数据库 $DB_NAME..."
        $MYSQL_CMD -e "DROP DATABASE $DB_NAME;" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "✅ 数据库已删除"
        else
            echo "❌ 删除数据库失败"
            exit 1
        fi
    else
        echo "保留现有数据库"
        echo ""
        echo "✅ 数据库配置完成"
        exit 0
    fi
fi

# 创建数据库
echo "创建数据库 $DB_NAME..."
$MYSQL_CMD -e "CREATE DATABASE $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ 数据库创建成功"
else
    echo "❌ 数据库创建失败"
    exit 1
fi

# 验证数据库
echo ""
echo "验证数据库..."
$MYSQL_CMD -e "USE $DB_NAME; SHOW TABLES;" &> /dev/null
if [ $? -eq 0 ]; then
    echo "✅ 数据库验证成功"
else
    echo "❌ 数据库验证失败"
    exit 1
fi

echo ""
echo "=========================================="
echo "  数据库初始化完成"
echo "=========================================="
echo ""
echo "数据库信息:"
echo "  名称: $DB_NAME"
echo "  字符集: utf8mb4"
echo "  排序规则: utf8mb4_unicode_ci"
echo ""
echo "下一步："
echo "  运行测试: npm test"
echo "  生成覆盖率: npm run cov"
echo ""
