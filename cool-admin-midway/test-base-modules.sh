#!/bin/bash

# 基础模块功能验证脚本
# 验证重构后的 Task 2-6 模块功能

BASE_URL="http://localhost:8001"
TOKEN=""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 测试计数
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# 打印测试标题
print_test() {
    echo ""
    echo "================================"
    echo "测试: $1"
    echo "================================"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
}

# 打印成功
print_success() {
    echo -e "${GREEN}✅ 通过: $1${NC}"
    PASSED_TESTS=$((PASSED_TESTS + 1))
}

# 打印失败
print_fail() {
    echo -e "${RED}❌ 失败: $1${NC}"
    echo -e "${YELLOW}响应: $2${NC}"
    FAILED_TESTS=$((FAILED_TESTS + 1))
}

# 打印信息
print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# HTTP 请求函数
api_call() {
    local method=$1
    local endpoint=$2
    local data=$3

    if [ -n "$data" ]; then
        curl -s -X $method "${BASE_URL}${endpoint}" \
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer ${TOKEN}" \
            -d "$data"
    else
        curl -s -X $method "${BASE_URL}${endpoint}" \
            -H "Authorization: Bearer ${TOKEN}"
    fi
}

# 检查响应是否成功
check_response() {
    local response=$1
    local code=$(echo "$response" | jq -r '.code // empty')

    if [ "$code" = "0" ]; then
        return 0
    else
        return 1
    fi
}

echo "========================================="
echo "基础模块功能验证"
echo "========================================="
echo ""

# Step 1: 登录获取 Token
print_test "管理员登录"
LOGIN_RESPONSE=$(curl -s -X POST "${BASE_URL}/admin/base/open/login" \
    -H "Content-Type: application/json" \
    -d '{
        "username": "admin",
        "password": "123456",
        "captchaId": "test",
        "verifyCode": "1234"
    }')

TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.data.token // empty')

if [ -n "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
    print_success "登录成功，获取到 Token"
    print_info "Token: ${TOKEN:0:20}..."
else
    print_fail "登录失败" "$LOGIN_RESPONSE"
    echo ""
    echo "请确保:"
    echo "1. 项目已启动在 http://localhost:8001"
    echo "2. 数据库已初始化"
    echo "3. 默认管理员账号可用 (admin/123456)"
    exit 1
fi

# ========================================
# Task 2: 收货地址模块测试
# ========================================

echo ""
echo "========================================"
echo "Task 2: 收货地址模块"
echo "========================================"

# 测试1: 创建收货地址
print_test "创建收货地址 (POST /admin/user/address/add)"
ADD_ADDRESS_RESPONSE=$(api_call POST "/admin/user/address/add" '{
    "userId": "1",
    "name": "测试用户",
    "phone": "13800138000",
    "province": "贵州省",
    "city": "黔东南苗族侗族自治州",
    "district": "雷山县",
    "detail": "乌东村123号",
    "isDefault": 0
}')

if check_response "$ADD_ADDRESS_RESPONSE"; then
    print_success "创建收货地址成功"
    ADDRESS_ID=$(echo "$ADD_ADDRESS_RESPONSE" | jq -r '.data.id // .data // empty' | head -1)
    print_info "地址ID: $ADDRESS_ID"
else
    print_fail "创建收货地址失败" "$ADD_ADDRESS_RESPONSE"
fi

# 测试2: 获取地址列表
print_test "获取地址列表 (GET /admin/user/address/list)"
LIST_ADDRESS_RESPONSE=$(api_call GET "/admin/user/address/list?userId=1")

if check_response "$LIST_ADDRESS_RESPONSE"; then
    ADDRESS_COUNT=$(echo "$LIST_ADDRESS_RESPONSE" | jq '.data | length')
    print_success "获取地址列表成功，共 $ADDRESS_COUNT 条"
else
    print_fail "获取地址列表失败" "$LIST_ADDRESS_RESPONSE"
fi

# 测试3: 分页查询地址
print_test "分页查询地址 (GET /admin/user/address/page)"
PAGE_ADDRESS_RESPONSE=$(api_call GET "/admin/user/address/page?userId=1&page=1&size=10")

if check_response "$PAGE_ADDRESS_RESPONSE"; then
    PAGE_TOTAL=$(echo "$PAGE_ADDRESS_RESPONSE" | jq -r '.data.pagination.total // 0')
    print_success "分页查询成功，总数: $PAGE_TOTAL"
else
    print_fail "分页查询失败" "$PAGE_ADDRESS_RESPONSE"
fi

# ========================================
# Task 3: 收藏模块测试
# ========================================

echo ""
echo "========================================"
echo "Task 3: 收藏模块"
echo "========================================"

# 测试1: 添加收藏
print_test "添加收藏 (POST /admin/user/favorite/add)"
ADD_FAVORITE_RESPONSE=$(api_call POST "/admin/user/favorite/add" '{
    "userId": "1",
    "targetId": "100",
    "targetType": 1
}')

if check_response "$ADD_FAVORITE_RESPONSE"; then
    print_success "添加收藏成功"
else
    print_fail "添加收藏失败" "$ADD_FAVORITE_RESPONSE"
fi

# 测试2: 获取收藏列表
print_test "获取收藏列表 (GET /admin/user/favorite/list)"
LIST_FAVORITE_RESPONSE=$(api_call GET "/admin/user/favorite/list?userId=1")

if check_response "$LIST_FAVORITE_RESPONSE"; then
    FAVORITE_COUNT=$(echo "$LIST_FAVORITE_RESPONSE" | jq '.data | length')
    print_success "获取收藏列表成功，共 $FAVORITE_COUNT 条"
else
    print_fail "获取收藏列表失败" "$LIST_FAVORITE_RESPONSE"
fi

# 测试3: 分页查询收藏
print_test "分页查询收藏 (GET /admin/user/favorite/page)"
PAGE_FAVORITE_RESPONSE=$(api_call GET "/admin/user/favorite/page?userId=1&page=1&size=10")

if check_response "$PAGE_FAVORITE_RESPONSE"; then
    print_success "分页查询收藏成功"
else
    print_fail "分页查询收藏失败" "$PAGE_FAVORITE_RESPONSE"
fi

# ========================================
# Task 4: 订单模块测试
# ========================================

echo ""
echo "========================================"
echo "Task 4: 订单模块"
echo "========================================"

# 测试1: 创建订单
print_test "创建订单 (POST /admin/order/add)"
ADD_ORDER_RESPONSE=$(api_call POST "/admin/order/add" '{
    "userId": "1",
    "type": 1,
    "totalAmount": 100.00,
    "payAmount": 95.00,
    "remark": "测试订单"
}')

if check_response "$ADD_ORDER_RESPONSE"; then
    print_success "创建订单成功"
    ORDER_ID=$(echo "$ADD_ORDER_RESPONSE" | jq -r '.data.id // .data // empty' | head -1)
    print_info "订单ID: $ORDER_ID"
else
    print_fail "创建订单失败" "$ADD_ORDER_RESPONSE"
fi

# 测试2: 获取订单列表
print_test "获取订单列表 (GET /admin/order/list)"
LIST_ORDER_RESPONSE=$(api_call GET "/admin/order/list?userId=1")

if check_response "$LIST_ORDER_RESPONSE"; then
    ORDER_COUNT=$(echo "$LIST_ORDER_RESPONSE" | jq '.data | length')
    print_success "获取订单列表成功，共 $ORDER_COUNT 条"

    # 提取订单号用于后续测试
    ORDER_NO=$(echo "$LIST_ORDER_RESPONSE" | jq -r '.data[0].orderNo // empty')
    if [ -n "$ORDER_NO" ]; then
        print_info "订单号: $ORDER_NO"
    fi
else
    print_fail "获取订单列表失败" "$LIST_ORDER_RESPONSE"
fi

# 测试3: 分页查询订单
print_test "分页查询订单 (GET /admin/order/page)"
PAGE_ORDER_RESPONSE=$(api_call GET "/admin/order/page?userId=1&page=1&size=10")

if check_response "$PAGE_ORDER_RESPONSE"; then
    print_success "分页查询订单成功"
else
    print_fail "分页查询订单失败" "$PAGE_ORDER_RESPONSE"
fi

# 测试4: 按订单号查询详情
if [ -n "$ORDER_NO" ]; then
    print_test "按订单号查询详情 (GET /admin/order/:orderNo/detail)"
    DETAIL_ORDER_RESPONSE=$(api_call GET "/admin/order/${ORDER_NO}/detail")

    if check_response "$DETAIL_ORDER_RESPONSE"; then
        print_success "按订单号查询详情成功"
    else
        print_fail "按订单号查询详情失败" "$DETAIL_ORDER_RESPONSE"
    fi
fi

# ========================================
# Task 5: 购物车模块测试
# ========================================

echo ""
echo "========================================"
echo "Task 5: 购物车模块"
echo "========================================"

# 测试1: 加入购物车
print_test "加入购物车 (POST /admin/cart/add)"
ADD_CART_RESPONSE=$(api_call POST "/admin/cart/add" '{
    "userId": "1",
    "goodsId": "100",
    "skuId": "200",
    "quantity": 2,
    "price": 50.00
}')

if check_response "$ADD_CART_RESPONSE"; then
    print_success "加入购物车成功"
    CART_ID=$(echo "$ADD_CART_RESPONSE" | jq -r '.data.id // .data // empty' | head -1)
    print_info "购物车ID: $CART_ID"
else
    print_fail "加入购物车失败" "$ADD_CART_RESPONSE"
fi

# 测试2: 获取购物车列表
print_test "获取购物车列表 (GET /admin/cart/list)"
LIST_CART_RESPONSE=$(api_call GET "/admin/cart/list?userId=1")

if check_response "$LIST_CART_RESPONSE"; then
    CART_COUNT=$(echo "$LIST_CART_RESPONSE" | jq '.data | length')
    print_success "获取购物车列表成功，共 $CART_COUNT 条"
else
    print_fail "获取购物车列表失败" "$LIST_CART_RESPONSE"
fi

# 测试3: 分页查询购物车
print_test "分页查询购物车 (GET /admin/cart/page)"
PAGE_CART_RESPONSE=$(api_call GET "/admin/cart/page?userId=1&page=1&size=10")

if check_response "$PAGE_CART_RESPONSE"; then
    print_success "分页查询购物车成功"
else
    print_fail "分页查询购物车失败" "$PAGE_CART_RESPONSE"
fi

# ========================================
# Task 6: 消息模块测试
# ========================================

echo ""
echo "========================================"
echo "Task 6: 消息模块"
echo "========================================"

# 测试1: 发送消息
print_test "发送消息 (POST /admin/message/send)"
SEND_MESSAGE_RESPONSE=$(api_call POST "/admin/message/send" '{
    "userId": "1",
    "type": 1,
    "title": "测试消息",
    "content": "这是一条测试消息"
}')

if check_response "$SEND_MESSAGE_RESPONSE"; then
    print_success "发送消息成功"
else
    print_fail "发送消息失败" "$SEND_MESSAGE_RESPONSE"
fi

# 测试2: 群发消息
print_test "群发消息 (POST /admin/message/send-to-all)"
SENDALL_MESSAGE_RESPONSE=$(api_call POST "/admin/message/send-to-all" '{
    "type": 1,
    "title": "系统通知",
    "content": "欢迎使用乌东文旅平台"
}')

if check_response "$SENDALL_MESSAGE_RESPONSE"; then
    print_success "群发消息成功"
else
    print_fail "群发消息失败" "$SENDALL_MESSAGE_RESPONSE"
fi

# 测试3: 获取消息列表
print_test "获取消息列表 (GET /admin/message/list)"
LIST_MESSAGE_RESPONSE=$(api_call GET "/admin/message/list?userId=1")

if check_response "$LIST_MESSAGE_RESPONSE"; then
    MESSAGE_COUNT=$(echo "$LIST_MESSAGE_RESPONSE" | jq '.data | length')
    print_success "获取消息列表成功，共 $MESSAGE_COUNT 条"
else
    print_fail "获取消息列表失败" "$LIST_MESSAGE_RESPONSE"
fi

# 测试4: 分页查询消息
print_test "分页查询消息 (GET /admin/message/page)"
PAGE_MESSAGE_RESPONSE=$(api_call GET "/admin/message/page?type=1&page=1&size=10")

if check_response "$PAGE_MESSAGE_RESPONSE"; then
    print_success "分页查询消息成功"
else
    print_fail "分页查询消息失败" "$PAGE_MESSAGE_RESPONSE"
fi

# ========================================
# 测试总结
# ========================================

echo ""
echo "========================================="
echo "测试总结"
echo "========================================="
echo ""
echo "总测试数: $TOTAL_TESTS"
echo -e "${GREEN}通过: $PASSED_TESTS${NC}"
echo -e "${RED}失败: $FAILED_TESTS${NC}"
echo ""

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "${GREEN}🎉 所有测试通过！${NC}"
    exit 0
else
    echo -e "${RED}⚠️  有 $FAILED_TESTS 个测试失败${NC}"
    exit 1
fi
