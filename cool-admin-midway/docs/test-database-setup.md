# 测试数据库配置说明

## 数据库准备

### 1. 创建测试数据库

测试需要使用独立的数据库 `cool_test`，以避免影响开发数据库。

**使用 MySQL 命令行创建:**
```sql
CREATE DATABASE cool_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**或使用图形化工具（如 Navicat、phpMyAdmin）:**
- 数据库名: `cool_test`
- 字符集: `utf8mb4`
- 排序规则: `utf8mb4_unicode_ci`

### 2. 配置数据库连接

测试配置文件已更新为 `src/config/config.unittest.ts`，支持环境变量配置。

**默认配置:**
- Host: 127.0.0.1
- Port: 3306
- Username: root
- Password: (空)
- Database: cool_test

**自定义配置（可选）:**

创建 `.env.test` 文件（参考 `.env.test.example`）:
```bash
TEST_DB_HOST=127.0.0.1
TEST_DB_PORT=3306
TEST_DB_USER=root
TEST_DB_PASSWORD=your_password
TEST_DB_NAME=cool_test
```

### 3. 自动建表

测试环境配置了 `synchronize: true`，会在测试运行时自动创建所有表结构，无需手动导入 SQL。

### 4. 数据隔离

- 测试使用独立数据库 `cool_test`
- 不会影响开发数据库 `cool`
- 每次测试可以使用干净的数据环境

## 运行测试

### 前提条件

1. ✅ MySQL 服务正在运行
2. ✅ 数据库 `cool_test` 已创建
3. ✅ 数据库用户有权限访问 `cool_test`

### 执行测试

```bash
# 运行所有测试
npm test

# 生成覆盖率报告
npm run cov

# 运行特定模块测试
npm test -- shop
```

### 预期结果

如果配置正确，测试应该能够：
1. 连接到 `cool_test` 数据库
2. 自动创建所有表结构
3. 执行测试用例
4. 生成覆盖率报告

## 故障排查

### 错误：Cannot connect to database

**原因**: 数据库连接失败

**解决**:
1. 检查 MySQL 服务是否运行
2. 检查数据库配置是否正确
3. 检查用户权限

### 错误：Database does not exist

**原因**: 数据库 `cool_test` 不存在

**解决**:
```sql
CREATE DATABASE cool_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 错误：Access denied for user

**原因**: 数据库用户权限不足

**解决**:
```sql
GRANT ALL PRIVILEGES ON cool_test.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
```

## 测试数据管理

### 测试数据准备

测试框架提供了工厂方法来生成测试数据：
- `TestDataFactory.createGoods()` - 生成商品数据
- `TestDataFactory.createOrder()` - 生成订单数据
- `MockDataGenerator.randomString()` - 生成随机字符串

### 测试数据清理

测试框架会在每个测试套件结束后自动清理：
- `afterEach()` - 清理单个测试的数据
- `afterAll()` - 清理整个套件的数据

## 配置说明

### config.unittest.ts 配置项

| 配置项 | 值 | 说明 |
|--------|-----|------|
| synchronize | true | 自动建表 |
| dropSchema | false | 不删除表结构 |
| logging | false | 关闭 SQL 日志 |
| cache | false | 关闭查询缓存 |
| tenant.enable | false | 禁用多租户（简化测试）|
| initDB | false | 不自动导入数据 |
| initMenu | false | 不自动导入菜单 |

### 环境变量优先级

1. 环境变量 (最高优先级)
2. .env.test 文件
3. 配置文件默认值

## 下一步

配置完成后，运行测试：
```bash
npm test
```

查看详细的测试执行指南：
```bash
cat TEST_GUIDE.md
```
