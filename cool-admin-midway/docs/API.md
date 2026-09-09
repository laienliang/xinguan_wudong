# 乌东文旅平台 API 文档

## 基础信息

- Base URL: `http://localhost:8001`
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

### 登录接口

#### 密码登录
```
POST /app/user/login/password
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
    "refreshToken": "...",
    "expire": 7200
  }
}
```

#### 手机验证码登录
```
POST /app/user/login/phone
Content-Type: application/json

{
  "phone": "13800138000",
  "smsCode": "123456"
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "...",
    "expire": 7200
  }
}
```

#### 小程序登录
```
POST /app/user/login/mini
Content-Type: application/json

{
  "code": "wx_code",
  "encryptedData": "...",
  "iv": "..."
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "...",
    "expire": 7200
  }
}
```

#### 公众号登录
```
POST /app/user/login/mp
Content-Type: application/json

{
  "code": "wx_code"
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "...",
    "expire": 7200
  }
}
```

#### 微信APP登录
```
POST /app/user/login/wxApp
Content-Type: application/json

{
  "code": "wx_code"
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "...",
    "expire": 7200
  }
}
```

#### 获取图片验证码
```
GET /app/user/login/captcha?width=100&height=40&color=blue
Content-Type: application/json

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "captcha_id",
    "imageBase64": "data:image/svg+xml;base64,..."
  }
}
```

#### 发送短信验证码
```
POST /app/user/login/smsCode
Content-Type: application/json

{
  "phone": "13800138000",
  "captchaId": "captcha_id",
  "code": "abcd"
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 刷新 Token
```
POST /app/user/login/refreshToken
Content-Type: application/json

{
  "refreshToken": "..."
}

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "...",
    "expire": 7200
  }
}
```

### 收货地址管理

#### 获取地址列表
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

#### 创建地址
```
POST /app/user/address
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "张三",
  "phone": "13800138000",
  "province": "贵州省",
  "city": "黔东南苗族侗族自治州",
  "district": "雷山县",
  "detail": "乌东村123号",
  "isDefault": 0
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

#### 更新地址
```
PUT /app/user/address/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "张三",
  "phone": "13800138000",
  "province": "贵州省",
  "city": "黔东南苗族侗族自治州",
  "district": "雷山县",
  "detail": "乌东村456号"
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 删除地址
```
DELETE /app/user/address/:id
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 设置默认地址
```
PUT /app/user/address/:id/default
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

### 收藏管理

#### 添加收藏
```
POST /app/user/favorite/
Authorization: Bearer <token>
Content-Type: application/json

{
  "targetId": "1",
  "targetType": 1
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 取消收藏
```
DELETE /app/user/favorite/
Authorization: Bearer <token>
Content-Type: application/json

{
  "targetId": "1",
  "targetType": 1
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 收藏列表
```
GET /app/user/favorite/?targetType=1
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

#### 检查收藏状态
```
GET /app/user/favorite/check?targetId=1&targetType=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "isFavorite": true
  }
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

### 订单详情
```
GET /app/order/:orderNo
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "orderNo": "1725778800000123456",
    "type": 1,
    "status": 1,
    "totalAmount": 299.00,
    "payAmount": 299.00,
    "remark": "备注",
    "createTime": "2026-09-08T10:00:00Z"
  }
}
```

### 取消订单
```
PUT /app/order/:orderNo/cancel
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
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

### 获取已选中商品
```
GET /app/cart/selected
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

### 更新商品数量
```
PUT /app/cart/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 3
}

Response:
{
  "code": 0,
  "message": "success"
}
```

### 切换选中状态
```
PUT /app/cart/:id/toggle
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

### 删除购物车商品
```
DELETE /app/cart
Authorization: Bearer <token>
Content-Type: application/json

{
  "ids": ["1", "2"]
}

Response:
{
  "code": 0,
  "message": "success"
}
```

### 清空购物车
```
DELETE /app/cart/clear
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
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
    "list": [
      {
        "id": "1",
        "title": "系统通知",
        "content": "欢迎使用乌东文旅平台",
        "isRead": 0,
        "createTime": "2026-09-08T10:00:00Z"
      }
    ],
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

### 标记已读
```
PUT /app/message/read
Authorization: Bearer <token>
Content-Type: application/json

{
  "ids": ["1", "2"]
}

Response:
{
  "code": 0,
  "message": "success"
}
```

### 全部标记已读
```
PUT /app/message/read-all
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
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

错误响应:
{
  "code": 3001,
  "message": "仅支持 jpg/png/gif/webp 格式图片"
}

{
  "code": 3002,
  "message": "图片大小不能超过 5MB"
}
```

### 上传视频
```
POST /app/upload/video
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <视频文件>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "url": "/uploads/videos/1725778800000-xyz789.mp4"
  }
}

错误响应:
{
  "code": 3003,
  "message": "仅支持 mp4/mov/avi 格式视频"
}

{
  "code": 3004,
  "message": "视频大小不能超过 50MB"
}
```

更多接口详情请访问 Swagger 文档：http://localhost:8001/swagger-ui/index.html
