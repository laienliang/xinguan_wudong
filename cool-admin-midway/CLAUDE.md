# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

乌东文旅平台 - A tourism platform built with Cool Admin (Node.js version), a rapid CRUD development framework based on Midway.js and Koa.js.

**Tech Stack:**
- Backend: Node.js (>=18.x), TypeScript, Midway.js, Koa.js
- Database: MySQL (>=5.7, recommend 8.0), PostgreSQL, or SQLite
- ORM: TypeORM 0.3.20
- Framework: Cool Admin 8.x (@cool-midway/core)

## Development Commands

```bash
# Install dependencies
npm i

# Development (with hot reload)
npm run dev

# Build
npm run build

# Production start
npm run start

# Run tests
npm test
npm test -- test/user/          # Test specific module
npm test -- test/integration/   # Integration tests

# Linting
npm run lint
npm run lint:fix

# PM2 deployment
npm run pm2:start
npm run pm2:stop
```

**Service URL:** http://localhost:8001  
**Swagger API Docs:** http://localhost:8001/swagger-ui/index.html

## Database Configuration

Edit `src/config/config.local.ts`:

```ts
typeorm: {
  dataSource: {
    default: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'cool',
      synchronize: true,  // Auto create tables (DO NOT use in production)
      logging: false,
      charset: 'utf8mb4',
      entities: ['**/modules/*/entity'],
    },
  },
}
```

## Architecture

### Module Structure

All business logic is organized into **modules** under `src/modules/`:

```
src/modules/
├── base/          # Built-in auth & permission system
├── user/          # User module (addresses, favorites)
├── order/         # Order management
├── cart/          # Shopping cart
├── message/       # Message/notification system
├── demo/          # Example module
└── [custom]/      # Your custom modules

Each module contains:
├── controller/    # API endpoints (app/ for frontend, admin/ for backend)
├── service/       # Business logic
├── entity/        # Database entities (TypeORM)
├── dto/          # Parameter validation (optional)
├── middleware/   # Module-specific middleware (optional)
├── config.ts     # Module configuration (required)
├── db.json       # Initial data (optional)
└── menu.json     # Initial menu items (optional)
```

### Cool Admin Framework Pattern

**DO NOT manually write CRUD code.** The framework auto-generates it.

#### Controller Pattern

```ts
import { Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { XxxEntity } from '../../entity/xxx';
import { XxxService } from '../../service/xxx';

@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],  // Auto-generates 6 APIs
  entity: XxxEntity,
  service: XxxService,
  listQueryOp: {
    fieldEq: ['userId', 'status'],           // Exact match filters
    keyWordLikeFields: ['title', 'content'], // Fuzzy search fields
    addOrderBy: {
      createTime: 'DESC',
    },
  },
  pageQueryOp: { /* same as listQueryOp */ },
})
export class AppXxxController extends BaseController {
  @Inject()
  xxxService: XxxService;

  // Only add custom business methods here
  @Get('/custom')
  async customMethod() {
    return this.ok(await this.xxxService.customLogic());
  }
}
```

**Auto-generated routes:**
- `POST /app/xxx/add` - Create
- `POST /app/xxx/delete` - Delete (body: `{ids: ["1", "2"]}`)
- `POST /app/xxx/update` - Update (body: `{id: "1", ...fields}`)
- `GET /app/xxx/info?id=1` - Get single record
- `GET /app/xxx/list` - List with filters
- `GET /app/xxx/page?page=1&size=10` - Paginated list

**Route prefix is auto-generated** from file path:
- `src/modules/demo/controller/app/goods.ts` → `/app/demo/goods/*`
- `src/modules/demo/controller/admin/goods.ts` → `/admin/demo/goods/*`

#### Service Pattern

```ts
import { Provide, Config } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { XxxEntity } from '../entity/xxx';

@Provide()
export class XxxService extends BaseService {
  @InjectEntityModel(XxxEntity)
  xxxEntity: Repository<XxxEntity>;

  @Config('typeorm.dataSource.default.type')
  ormType: string;

  // BaseService provides: add, update, delete, info, list, page
  // Only add custom business logic or override hooks

  async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
    if (type === 'add') {
      // Pre-processing before insert
    }
  }

  async modifyAfter(data: any, type: 'delete' | 'update' | 'add') {
    // Post-processing after insert
  }

  async customLogic() {
    // Custom business methods
  }
}
```

#### Entity Pattern

```ts
import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

@Entity('table_name')
export class XxxEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;

  @Index()
  @Column({ comment: '用户ID' })
  userId: string;

  @Column({ comment: '状态', default: 1 })
  status: number;
}
```

**IMPORTANT:** 
- Always extend `BaseEntity` from `'../../base/entity/base'` (exactly 2 levels up)
- Use camelCase for field names
- NO foreign key decorators (@ManyToOne, @OneToMany, etc.)
- Table will auto-create on first run if `synchronize: true`

### Multi-tenant Support

The project has multi-tenant enabled (`tenant.enable: true`). All entities inherit `tenantId` from `BaseEntity`, which is automatically filtered in queries.

## Key Conventions

1. **Chinese for all user-facing content** - comments, error messages, API responses
2. **Use TypeORM APIs, not raw SQL** - except for complex statistics queries
3. **Never override CRUD methods in Controller** - add, delete, update, info, list, page are auto-handled
4. **File naming:** Use snake_case (e.g., `user_info.ts`), not camelCase
5. **Keep file names concise:** Within a `student/` module, use `info.ts` not `student_info.ts`
6. **Route naming:** Use camelCase without nesting - `/studentDetail` not `/student/detail`
7. **Import BaseEntity:** Always `import { BaseEntity } from '../../base/entity/base';`
8. **No `@Provide()` on Controllers** - only needed on Services

## Common Patterns

### Query with Relations

```ts
@CoolController({
  api: ['page'],
  entity: GoodsEntity,
  pageQueryOp: {
    select: ['a.*', 'b.name as userName'],
    join: [{
      entity: UserEntity,
      alias: 'b',
      condition: 'a.userId = b.id',
      type: 'leftJoin',
    }],
  },
})
```

### Custom Validation Logic

Use `modifyBefore` hook in Service:

```ts
async modifyBefore(data: any, type: 'delete' | 'update' | 'add') {
  if (type === 'add') {
    const exists = await this.xxxEntity.findOne({ where: { userId: data.userId } });
    if (exists) throw new Error('记录已存在');
  }
}
```

### Get Current User

```ts
// In Controller
const userId = this.getUserId('app');  // For app endpoints
const adminId = this.getUserId('admin');  // For admin endpoints

// In Service (via ctx)
const userId = this.baseCtx.user.id;
```

## Testing

Verification scripts are available:
- `./test-endpoints.sh` - Check if all APIs are registered and accessible

## Project-Specific Modules

**Completed base modules:**
- User addresses (CRUD + set default)
- User favorites (add, remove, list, check)
- Orders (unified order center, 5 types: goods, dining, lodging, tickets, routes)
- Shopping cart (add, update quantity, toggle selection, clear)
- Messages (send, broadcast, mark read, unread count)
- File upload (images 5MB, videos 50MB)

**Next steps:** Implement business modules for clothing, food, lodging, travel, and community features.

## Documentation

- API documentation: See `docs/API.md` for all 34+ endpoints
- Framework docs: https://node.cool-admin.com
- Official website: https://cool-js.com
