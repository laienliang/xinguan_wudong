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

#### 微信开放平台登录
```
POST /app/user/login/wx
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

#### OAuth 登录
```
POST /app/user/login/oauth
Content-Type: application/json

{
  "type": "wechat",
  "code": "oauth_code"
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
GET /app/user/address/list?userId=<userId>
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "userId": "1",
      "name": "张三",
      "phone": "13800138000",
      "province": "贵州省",
      "city": "黔东南苗族侗族自治州",
      "district": "雷山县",
      "detail": "乌东村123号",
      "isDefault": 1,
      "createTime": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 分页查询地址
```
GET /app/user/address/page?userId=<userId>&page=1&size=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 100
    }
  }
}
```

#### 创建地址
```
POST /app/user/address/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "1",
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
  "message": "success"
}
```

#### 更新地址
```
POST /app/user/address/update
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": "1",
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
POST /app/user/address/delete
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

#### 获取地址详情
```
GET /app/user/address/info?id=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "userId": "1",
    "name": "张三",
    "phone": "13800138000",
    "province": "贵州省",
    "city": "黔东南苗族侗族自治州",
    "district": "雷山县",
    "detail": "乌东村123号",
    "isDefault": 1
  }
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
POST /app/user/favorite/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "1",
  "targetId": "100",
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
POST /app/user/favorite/delete
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

#### 收藏列表
```
GET /app/user/favorite/list?userId=<userId>&targetType=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "userId": "1",
      "targetId": "100",
      "targetType": 1,
      "createTime": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 分页查询收藏
```
GET /app/user/favorite/page?userId=<userId>&targetType=1&page=1&size=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 50
    }
  }
}
```

#### 检查是否已收藏
```
GET /app/user/favorite/check?targetId=100&targetType=1
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

#### 创建订单
```
POST /app/order/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "1",
  "type": 1,
  "totalAmount": 100.00,
  "payAmount": 95.00,
  "remark": "请尽快发货"
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 订单列表
```
GET /app/order/list?userId=<userId>&status=1&type=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "orderNo": "1704096000000123456",
      "userId": "1",
      "type": 1,
      "status": 1,
      "totalAmount": 100.00,
      "payAmount": 95.00,
      "createTime": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 分页查询订单
```
GET /app/order/page?userId=<userId>&status=1&page=1&size=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 100
    }
  }
}
```

#### 订单详情（按 ID）
```
GET /app/order/info?id=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "orderNo": "1704096000000123456",
    "userId": "1",
    "type": 1,
    "status": 1,
    "totalAmount": 100.00,
    "payAmount": 95.00,
    "remark": "请尽快发货",
    "createTime": "2024-01-01 12:00:00"
  }
}
```

#### 订单详情（按订单号）
```
GET /app/order/:orderNo/detail
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "orderNo": "1704096000000123456",
    "userId": "1",
    "type": 1,
    "status": 1,
    "totalAmount": 100.00,
    "payAmount": 95.00,
    "createTime": "2024-01-01 12:00:00"
  }
}
```

#### 取消订单
```
PUT /app/order/:orderNo/cancel
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 更新订单
```
POST /app/order/update
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": "1",
  "remark": "修改备注"
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 删除订单
```
POST /app/order/delete
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

## 购物车模块

#### 加入购物车
```
POST /app/cart/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "1",
  "goodsId": "100",
  "skuId": "200",
  "quantity": 2,
  "price": 50.00
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 购物车列表
```
GET /app/cart/list?userId=<userId>
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "userId": "1",
      "goodsId": "100",
      "skuId": "200",
      "quantity": 2,
      "price": 50.00,
      "selected": 1,
      "createTime": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 分页查询购物车
```
GET /app/cart/page?userId=<userId>&page=1&size=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 20
    }
  }
}
```

#### 更新购物车（数量）
```
POST /app/cart/update
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": "1",
  "quantity": 3
}

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 更新数量（专用接口）
```
PUT /app/cart/:id/quantity
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

#### 切换选中状态
```
PUT /app/cart/:id/toggle
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 删除购物车项
```
POST /app/cart/delete
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

#### 清空购物车
```
DELETE /app/cart/clear
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 获取已选中商品
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
      "userId": "1",
      "goodsId": "100",
      "skuId": "200",
      "quantity": 2,
      "price": 50.00,
      "selected": 1
    }
  ]
}
```

#### 获取购物车详情
```
GET /app/cart/info?id=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "userId": "1",
    "goodsId": "100",
    "skuId": "200",
    "quantity": 2,
    "price": 50.00,
    "selected": 1
  }
}
```

## 消息模块

#### 消息列表
```
GET /app/message/list?type=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "id": "1",
      "userId": "1",
      "type": 1,
      "title": "系统通知",
      "content": "欢迎使用乌东文旅平台",
      "isRead": 0,
      "createTime": "2024-01-01 12:00:00"
    }
  ]
}
```

#### 分页查询消息
```
GET /app/message/page?type=1&page=1&size=10
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "list": [...],
    "pagination": {
      "page": 1,
      "size": 10,
      "total": 50
    }
  }
}
```

#### 获取消息详情
```
GET /app/message/info?id=1
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "1",
    "userId": "1",
    "type": 1,
    "title": "系统通知",
    "content": "欢迎使用乌东文旅平台",
    "isRead": 0,
    "createTime": "2024-01-01 12:00:00"
  }
}
```

#### 未读消息数
```
GET /app/message/unread-count
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success",
  "data": 5
}
```

#### 标记已读
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

#### 全部标记已读
```
PUT /app/message/read-all
Authorization: Bearer <token>

Response:
{
  "code": 0,
  "message": "success"
}
```

#### 删除消息
```
POST /app/message/delete
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

## 文件上传模块

#### 上传图片
```
POST /app/upload/image
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <image file>
businessType: 1

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "url": "https://example.com/uploads/xxx.jpg",
    "fileSize": 102400,
    "fileType": 1
  }
}
```

#### 上传视频
```
POST /app/upload/video
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <video file>
businessType: 1

Response:
{
  "code": 0,
  "message": "success",
  "data": {
    "url": "https://example.com/uploads/xxx.mp4",
    "fileSize": 10485760,
    "fileType": 2
  }
}
```

### 错误响应示例

#### 文件类型不支持
```
Response:
{
  "code": 3001,
  "message": "不支持的文件类型"
}
```

#### 文件大小超限
```
Response:
{
  "code": 3002,
  "message": "文件大小超过限制"
}
```

#### 上传失败
```
Response:
{
  "code": 3003,
  "message": "文件上传失败"
}
```

## 数据字典

### 订单类型 (type)
- 1: 商品订单
- 2: 餐位订单
- 3: 住宿订单
- 4: 门票订单
- 5: 线路订单

### 订单状态 (status)
- 1: 待支付
- 2: 已支付
- 3: 已取消
- 4: 已完成
- 5: 已退款

### 收藏类型 (targetType)
- 1: 商品
- 2: 餐饮
- 3: 住宿
- 4: 景点
- 5: 线路

### 购物车商品类型 (itemType)
- 1: 商品
- 2: 餐位
- 3: 住宿套餐

### 消息类型 (type)
- 1: 系统通知
- 2: 订单消息
- 3: 活动推送

### 文件类型 (fileType)
- 1: 图片
- 2: 视频
- 3: 文档

### 业务类型 (businessType)
- 1: 商品
- 2: 餐饮
- 3: 住宿
- 4: 游记
- 5: 评论

## 注意事项

1. 所有接口都需要在 Header 中携带 JWT Token（登录接口除外）
2. 分页参数：`page`（页码，从1开始）、`size`（每页数量，默认10）
3. 批量删除使用 `POST /xxx/delete`，body 传 `{ids: ["1", "2"]}`
4. 列表查询使用 `GET /xxx/list`，支持筛选参数
5. 分页查询使用 `GET /xxx/page`，返回 `{list, pagination}`
6. 新增使用 `POST /xxx/add`
7. 更新使用 `POST /xxx/update`，body 必须包含 `id` 字段
8. 详情查询使用 `GET /xxx/info?id=xxx`
