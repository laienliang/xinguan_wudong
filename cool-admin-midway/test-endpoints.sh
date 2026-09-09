#!/bin/bash

# 基础模块接口可用性验证
# 不需要登录，只验证接口是否正确注册和响应

BASE_URL="http://localhost:8001"

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 测试计数
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

print_header() {
    echo ""
    echo "========================================="
    echo "$1"
    echo "========================================="
}

print_test() {
    echo ""
    echo -e "${BLUE}测试: $1${NC}"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
    PASSED_TESTS=$((PASSED_TESTS + 1))
}

print_fail() {
    echo -e "${RED}❌ $1${NC}"
    FAILED_TESTS=$((FAILED_TESTS + 1))
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# 测试接口是否返回401（需要认证）或其他有效响应
test_endpoint() {
    local method=$1
    local path=$2
    local description=$3

    print_test "$description"

    response=$(curl -s -w "\n%{http_code}" -X $method "${BASE_URL}${path}")
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')

    # 401 表示接口存在但需要认证，200/400 表示接口正常响应
    if [ "$http_code" = "401" ] || [ "$http_code" = "200" ] || [ "$http_code" = "400" ]; then
        print_success "接口可访问 (HTTP $http_code) - $method $path"
        return 0
    else
        print_fail "接口不可访问 (HTTP $http_code) - $method $path"
        print_info "响应: $(echo $body | head -c 100)"
        return 1
    fi
}

print_header "基础模块接口可用性验证"
echo "测试服务器: $BASE_URL"
echo "验证方式: 检查接口是否正确注册和响应"

# 检查服务是否启动
print_test "服务健康检查"
health_response=$(curl -s -w "\n%{http_code}" "$BASE_URL/admin/base/open/eps")
health_code=$(echo "$health_response" | tail -n1)

if [ "$health_code" = "200" ]; then
    print_success "服务正常运行"
else
    print_fail "服务未正常运行 (HTTP $health_code)"
    exit 1
fi

# ========================================
# Task 2: 收货地址模块
# ========================================
print_header "Task 2: 收货地址模块"

test_endpoint "GET" "/app/user/address/list" "获取地址列表"
test_endpoint "GET" "/app/user/address/page" "分页查询地址"
test_endpoint "POST" "/app/user/address/add" "创建地址"
test_endpoint "POST" "/app/user/address/update" "更新地址"
test_endpoint "POST" "/app/user/address/delete" "删除地址"
test_endpoint "GET" "/app/user/address/info" "地址详情"

# Admin 端
test_endpoint "GET" "/admin/user/address/list" "管理端-获取地址列表"
test_endpoint "GET" "/admin/user/address/page" "管理端-分页查询地址"

# ========================================
# Task 3: 收藏模块
# ========================================
print_header "Task 3: 收藏模块"

test_endpoint "POST" "/app/user/favorite/add" "添加收藏"
test_endpoint "POST" "/app/user/favorite/delete" "取消收藏"
test_endpoint "GET" "/app/user/favorite/list" "收藏列表"
test_endpoint "GET" "/app/user/favorite/page" "分页查询收藏"
test_endpoint "GET" "/app/user/favorite/check" "检查是否已收藏"

# ========================================
# Task 4: 订单模块
# ========================================
print_header "Task 4: 订单模块"

test_endpoint "POST" "/app/order/add" "创建订单"
test_endpoint "POST" "/app/order/delete" "删除订单"
test_endpoint "POST" "/app/order/update" "更新订单"
test_endpoint "GET" "/app/order/info" "订单详情"
test_endpoint "GET" "/app/order/list" "订单列表"
test_endpoint "GET" "/app/order/page" "分页查询订单"

# Admin 端
test_endpoint "GET" "/admin/order/list" "管理端-订单列表"
test_endpoint "GET" "/admin/order/page" "管理端-分页查询订单"

# ========================================
# Task 5: 购物车模块
# ========================================
print_header "Task 5: 购物车模块"

test_endpoint "POST" "/app/cart/add" "加入购物车"
test_endpoint "POST" "/app/cart/delete" "删除购物车项"
test_endpoint "POST" "/app/cart/update" "更新购物车"
test_endpoint "GET" "/app/cart/info" "购物车详情"
test_endpoint "GET" "/app/cart/list" "购物车列表"
test_endpoint "GET" "/app/cart/page" "分页查询购物车"
test_endpoint "GET" "/app/cart/selected" "获取已选中商品"

# ========================================
# Task 6: 消息模块
# ========================================
print_header "Task 6: 消息模块"

test_endpoint "POST" "/app/message/add" "创建消息"
test_endpoint "POST" "/app/message/delete" "删除消息"
test_endpoint "POST" "/app/message/update" "更新消息"
test_endpoint "GET" "/app/message/info" "消息详情"
test_endpoint "GET" "/app/message/list" "消息列表"
test_endpoint "GET" "/app/message/page" "分页查询消息"
test_endpoint "GET" "/app/message/unread-count" "未读消息数"

# Admin 端
test_endpoint "POST" "/admin/message/send" "管理端-发送消息"
test_endpoint "POST" "/admin/message/send-to-all" "管理端-群发消息"
test_endpoint "GET" "/admin/message/list" "管理端-消息列表"
test_endpoint "GET" "/admin/message/page" "管理端-分页查询消息"

# ========================================
# 测试总结
# ========================================
print_header "测试总结"

echo ""
echo "总测试数: $TOTAL_TESTS"
echo -e "${GREEN}通过: $PASSED_TESTS${NC}"
echo -e "${RED}失败: $FAILED_TESTS${NC}"
echo ""

pass_rate=$(awk "BEGIN {printf \"%.1f\", ($PASSED_TESTS/$TOTAL_TESTS)*100}")
echo "通过率: ${pass_rate}%"
echo ""

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "${GREEN}🎉 所有接口都已正确注册并可访问！${NC}"
    echo ""
    echo "说明:"
    echo "- HTTP 401: 接口存在，需要认证（正常）"
    echo "- HTTP 200: 接口正常响应"
    echo "- HTTP 400: 接口存在，参数错误（正常）"
    exit 0
else
    echo -e "${YELLOW}⚠️  有 $FAILED_TESTS 个接口不可访问${NC}"
    echo ""
    echo "可能原因:"
    echo "1. 接口路由配置错误"
    echo "2. Controller 未正确注册"
    echo "3. 服务未完全启动"
    exit 1
fi
