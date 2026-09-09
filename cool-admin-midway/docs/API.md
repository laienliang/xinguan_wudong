# 乌东文旅平台 API 文档

## 基础信息

- Base URL: `http://localhost:7001`
- 认证方式: Bearer Token (JWT)
- 统一响应格式: `{ code: number, message: string, data: any }`

## 错误码

| 范围 | 说明 |
|------|------|
| 0 | 成功 |
| 1000-1999 | 用户相关错误 |
| 2000-2999 | 订单相关错误 |
| 3000-3999 | 上传相关错误 |
| 4000-4999 | 支付相关错误 |

## 用户模块

### 登录
```
POST /app/user/login
Content-Type: application/json

{
  "phone": "13800138000",
  "password": "123456"
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "userInfo": {
      "id": "1",
      "nickName": "张三",
      "avatarUrl": "..."
    }
  }
}
```

### 收货地址列表
```
GET /app/user/address
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "张三",
      "phone": "13800138000",
      "province": "贵州省",
      "city": "黔东南苗族侗族自治州",
      "district": "雷山县",
      "detail": "乌东村123号",
      "isDefault": 1
    }
  ]
}
```

### 收藏列表
```
GET /app/user/favorite?targetType=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "targetId": "1",
      "targetType": 1,
      "createTime": "2026-09-08T10:00:00Z"
    }
  ]
}
```

## 订单模块

### 创建订单
```
POST /app/order
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": 1,
  "totalAmount": 299.00,
  "payAmount": 299.00,
  "remark": "备注"
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "orderNo": "1725778800000123456",
    "status": 1
  }
}
```

### 订单列表
```
GET /app/order?page=1&pageSize=10&status=1&type=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "total": 10
  }
}
```

## 购物车模块

### 加入购物车
```
POST /app/cart
Authorization: Bearer <token>
Content-Type: application/json

{
  "goodsId": "1",
  "goodsType": 1,
  "skuId": "1",
  "quantity": 2
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1"
  }
}
```

### 购物车列表
```
GET /app/cart
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "goodsId": "1",
      "goodsType": 1,
      "quantity": 2,
      "selected": 1
    }
  ]
}
```

## 消息模块

### 消息列表
```
GET /app/message?page=1&pageSize=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "total": 5,
    "unreadCount": 2
  }
}
```

### 未读消息数
```
GET /app/message/unread-count
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": 2
}
```

## 文件上传

### 上传图片
```
POST /app/upload/image
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <图片文件>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "url": "/uploads/images/1725778800000-abc123.jpg"
  }
}
```

更多接口详情请访问 Swagger 文档：http://localhost:7001/swagger-ui/index.html
