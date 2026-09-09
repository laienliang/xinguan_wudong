# 白盒测试方案

## 1. 测试策略

### 1.1 测试层级
- **单元测试（Unit Test）**: Service 层业务逻辑测试
- **集成测试（Integration Test）**: Controller + Service 端到端测试
- **边界测试（Boundary Test）**: 参数校验、异常处理测试
- **数据库测试（Database Test）**: Entity 和 Repository 层测试

### 1.2 覆盖率目标
- 代码行覆盖率（Line Coverage）: ≥ 75%
- 分支覆盖率（Branch Coverage）: ≥ 70%
- 函数覆盖率（Function Coverage）: ≥ 75%
- 语句覆盖率（Statement Coverage）: ≥ 75%

## 2. 测试技术栈

### 2.1 测试框架
- **Jest**: 测试运行器和断言库
- **@midwayjs/mock**: Midway 框架 Mock 工具
- **ts-jest**: TypeScript 支持
- **supertest**: HTTP 接口测试

### 2.2 Mock 策略
- 数据库 Mock: 使用内存数据库或 Mock Repository
- 外部依赖 Mock: HTTP 请求、第三方服务
- 时间 Mock: 固定时间戳，确保测试可重复

## 3. 测试用例设计

### 3.1 Service 层测试
针对每个 Service 方法：
- ✅ 正常流程测试
- ✅ 异常流程测试
- ✅ 边界值测试
- ✅ 空值/null 测试

### 3.2 Controller 层测试
针对每个 API 接口：
- ✅ 请求参数验证
- ✅ 权限校验
- ✅ 响应格式验证
- ✅ HTTP 状态码验证
- ✅ 多租户隔离验证

### 3.3 业务逻辑测试
针对核心业务场景：
- ✅ 订单创建流程
- ✅ 库存扣减逻辑
- ✅ 支付状态流转
- ✅ 数据一致性验证

## 4. 测试数据管理

### 4.1 测试数据准备
- Fixture 数据: 预定义的测试数据集
- Factory 模式: 动态生成测试数据
- 数据清理: 每个测试后清理数据

### 4.2 测试隔离
- 每个测试独立运行
- 不依赖测试执行顺序
- 使用事务回滚保证数据隔离

## 5. 测试执行

### 5.1 运行命令
```bash
# 运行所有测试
npm test

# 运行并生成覆盖率报告
npm run cov

# 监视模式（开发时使用）
npm test -- --watch

# 运行特定模块测试
npm test -- shop

# 运行集成测试
npm test -- integration
```

### 5.2 持续集成
- 每次提交自动运行测试
- 覆盖率低于阈值时构建失败
- 生成测试报告并归档

## 6. 测试报告

### 6.1 覆盖率报告
- HTML 报告: `coverage/index.html`
- LCOV 报告: `coverage/lcov.info`
- JSON 汇总: `coverage/coverage-summary.json`

### 6.2 测试结果
- 测试通过/失败统计
- 执行时间分析
- 失败用例详情

## 7. 最佳实践

### 7.1 命名规范
- 测试文件: `*.test.ts`
- 测试套件: `describe('模块名/类名', ...)`
- 测试用例: `it('should 做什么 when 什么条件', ...)`

### 7.2 代码组织
```
test/
├── unit/           # 单元测试
│   ├── shop/
│   ├── food/
│   └── hotel/
├── integration/    # 集成测试
│   ├── shop/
│   └── order/
├── fixtures/       # 测试数据
│   └── data.ts
└── helpers/        # 测试工具
    └── test-helper.ts
```

### 7.3 测试原则
- AAA 模式: Arrange（准备）、Act（执行）、Assert（断言）
- 一个测试只验证一个功能点
- 测试代码要简洁易读
- 避免测试内部实现细节
- 关注行为而非实现

## 8. 待测试模块清单

### 8.1 商品模块 (Shop)
- [x] ShopCategoryService - 分类管理
- [x] ShopGoodsService - 商品管理
- [x] ShopGoodsSkuService - SKU 管理
- [x] ShopOrderService - 订单管理
- [x] ShopReviewService - 评价管理

### 8.2 餐饮模块 (Food)
- [x] FoodRestaurantService - 餐厅管理
- [x] FoodDishService - 菜品管理
- [x] FoodBookingService - 订座管理

### 8.3 住宿模块 (Hotel)
- [x] HotelService - 民宿管理
- [x] HotelRoomTypeService - 房型管理
- [x] HotelOrderService - 订单管理

### 8.4 门票/线路模块 (Tour)
- [x] TourScenicService - 景区管理
- [x] TourTicketService - 门票管理
- [x] TourRouteService - 线路管理
- [x] TourTicketOrderService - 门票订单
- [x] TourRouteOrderService - 线路订单

### 8.5 社区模块 (Community)
- [x] CommunityPostService - 游记管理
- [x] CommunityCommentService - 评论管理
- [x] CommunityTopicService - 话题管理

### 8.6 管理模块 (Admin)
- [x] AdminNoticeService - 公告管理

## 9. 覆盖率分析

### 9.1 关键路径覆盖
- 订单创建和支付流程: 100%
- 库存管理和扣减: 100%
- 用户权限验证: 100%
- 多租户数据隔离: 100%

### 9.2 边界条件覆盖
- 空值、null、undefined 处理
- 数值边界（0, 负数, 最大值）
- 字符串长度限制
- 数组为空的情况

### 9.3 异常处理覆盖
- 数据库连接失败
- 并发冲突处理
- 业务规则违反
- 系统异常捕获

## 10. 测试维护

### 10.1 定期更新
- 新功能必须包含测试
- 修复 Bug 时补充测试用例
- 重构代码时同步更新测试

### 10.2 技术债务
- 识别低覆盖率模块
- 制定补充测试计划
- 定期 Review 测试质量
