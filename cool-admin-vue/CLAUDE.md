# Cool Admin Vue 前端项目指南

## 项目概况

这是一个基于 **Cool Admin Vue 8.x** 框架的管理后台前端项目。

- **框架版本**: Cool Admin Vue 8.x
- **技术栈**: Vue 3 + TypeScript + Vite + Element Plus + Pinia
- **核心包**: @cool-vue/crud, @cool-vue/vite-plugin

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器（默认端口 9000）
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview

# 类型检查
npm run type-check

# 代码格式化
npm run format
```

## 项目架构

### 目录结构

```
├── build/cool/           # 构建产物（eps.json, eps.d.ts）
├── packages/             # 源码包（@cool-vue/crud、@cool-vue/vite-plugin）
├── public/               # 静态资源
├── src/
│   ├── config/          # 配置文件（dev.ts, prod.ts, proxy.ts）
│   ├── cool/            # 核心文件
│   ├── modules/         # 业务模块
│   │   ├── base/       # 基础模块（登录、权限、菜单）
│   │   ├── user/       # 用户模块
│   │   ├── dict/       # 字典模块
│   │   ├── task/       # 任务模块
│   │   ├── space/      # 文件空间模块
│   │   ├── recycle/    # 回收站模块
│   │   ├── helper/     # 辅助模块
│   │   └── demo/       # 示例模块
│   ├── plugins/         # 插件
│   │   ├── crud/       # CRUD 插件
│   │   ├── upload/     # 文件上传
│   │   ├── editor-*/   # 编辑器
│   │   ├── excel/      # Excel 导入导出
│   │   ├── i18n/       # 国际化
│   │   └── ...
│   ├── App.vue
│   └── main.ts
└── vite.config.ts
```

### 模块结构

每个模块遵循统一的目录结构：

```
modules/模块名/
├── components/      # 全局组件
├── directives/      # 全局指令
├── locales/         # 国际化文件
├── router/          # 路由配置
├── store/           # 状态管理
├── utils/           # 工具函数
├── views/           # 页面视图
├── config.ts        # 模块配置（必须）
└── index.ts         # 模块导出
```

## Cool Admin 核心概念

### 1. cl-crud 组件

`cl-crud` 是框架的核心组件，提供了完整的 CRUD（增删改查）功能封装。

**基本用法**：

```vue
<template>
  <cl-crud ref="Crud" :on-refresh="onRefresh">
    <cl-row>
      <!-- 查询表单 -->
      <cl-refresh-btn />
      <cl-add-btn />
      <cl-multi-delete-btn />
    </cl-row>

    <cl-row>
      <!-- 数据表格 -->
      <cl-table ref="Table" />
    </cl-row>

    <cl-row>
      <!-- 分页 -->
      <cl-pagination />
    </cl-row>

    <!-- 新增/编辑表单 -->
    <cl-upsert ref="Upsert" />
  </cl-crud>
</template>

<script lang="ts" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';

const { service } = useCool();

// CRUD 配置
const Crud = useCrud(
  {
    service: service.user.info  // 对应后端的 service
  },
  (app) => {
    app.refresh();
  }
);

// 表格配置
const Table = useTable({
  columns: [
    { type: 'selection' },
    { label: '用户名', prop: 'username' },
    { label: '昵称', prop: 'nickName' },
    { label: '创建时间', prop: 'createTime' },
    { type: 'op', buttons: ['edit', 'delete'] }
  ]
});

// 表单配置
const Upsert = useUpsert({
  items: [
    { label: '用户名', prop: 'username', required: true },
    { label: '昵称', prop: 'nickName', required: true },
    { 
      label: '状态', 
      prop: 'status', 
      component: { name: 'el-switch' } 
    }
  ]
});

// 刷新数据
function onRefresh(params: any, { next, render }: any) {
  next(params).then(render);
}
</script>
```

### 2. Service（服务层）

服务自动从后端 EPS（Entity Proxy Service）生成，通过 `useCool()` 获取：

```typescript
import { useCool } from '/@/cool';

const { service } = useCool();

// 使用方式
await service.user.info.list();           // GET /admin/user/info/list
await service.user.info.page({ page: 1 });  // POST /admin/user/info/page
await service.user.info.add({ name: 'xx' }); // POST /admin/user/info/add
await service.user.info.update({ id: 1 });   // POST /admin/user/info/update
await service.user.info.delete({ ids: [1] }); // POST /admin/user/info/delete
await service.user.info.info({ id: 1 });     // GET /admin/user/info/info
```

**EPS 配置**：
- 配置文件：`build/cool/eps.json`
- 类型定义：`build/cool/eps.d.ts`
- 自动生成：运行后端项目时自动更新

### 3. 路径别名

```typescript
import xxx from '/@/xxx';     // src/
import xxx from '/$/xxx';     // src/modules/
import xxx from '/#/xxx';     // src/plugins/
import xxx from '/~/xxx';     // packages/
```

### 4. 状态管理

使用 Pinia 进行状态管理，每个模块可以定义自己的 store：

```typescript
// modules/模块名/store/index.ts
import { defineStore } from 'pinia';

export const useMyStore = defineStore('my-module', {
  state: () => ({
    data: []
  }),
  actions: {
    async loadData() {
      // ...
    }
  }
});
```

### 5. 模块配置

每个模块必须有 `config.ts` 文件：

```typescript
// modules/模块名/config.ts
import { type ModuleConfig } from '/@/cool';

export default (): ModuleConfig => {
  return {
    order: 1,  // 加载顺序
    components: Object.values(import.meta.glob('./components/**/*.{vue,tsx}')),
    views: [],  // 自定义路由
    pages: [],  // 页面路由（不需要登录）
    install() {
      // 模块安装时执行
    },
    async onLoad() {
      // 模块加载完成后执行
    }
  };
};
```

## 开发规范

### 命名规范

- **文件命名**: 使用 kebab-case，如 `user-info.vue`
- **组件命名**: 使用 PascalCase，如 `UserInfo`
- **变量命名**: 使用 camelCase，如 `userName`

### 代码风格

- 使用 TypeScript 编写所有新代码
- 使用 Composition API（`<script setup>`）
- 优先使用 `const` 而不是 `let`
- 注释使用简体中文

### CRUD 页面开发流程

1. **确保后端 API 已完成**，检查 `build/cool/eps.d.ts` 中的类型定义
2. **创建视图文件**: `modules/模块名/views/页面名.vue`
3. **配置 cl-crud**: 设置 service、table、upsert
4. **添加路由**（如需要）: 在 `modules/模块名/config.ts` 中配置
5. **测试功能**: 增删改查、表单验证、权限控制

### 常见组件

- `cl-crud`: CRUD 容器
- `cl-table`: 数据表格
- `cl-upsert`: 新增/编辑表单
- `cl-refresh-btn`: 刷新按钮
- `cl-add-btn`: 新增按钮
- `cl-multi-delete-btn`: 批量删除按钮
- `cl-pagination`: 分页组件
- `cl-search-key`: 关键字搜索
- `cl-adv-search`: 高级搜索
- `cl-upload`: 文件上传

## 项目特定信息

### 业务模块

- **user**: 用户管理（个人信息、地址、收藏）
- **base**: 基础模块（登录、权限、菜单、用户）
- **dict**: 数据字典
- **task**: 定时任务
- **space**: 文件空间管理
- **recycle**: 数据回收站

### API 代理配置

开发环境 API 代理配置在 `src/config/proxy.ts`：

```typescript
export const proxy = {
  '/dev': {
    target: 'http://127.0.0.1:8001',  // 后端地址
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/dev/, '')
  }
};
```

### 主题配置

项目使用 `cl-theme` 插件进行主题管理，支持多主题切换。

## 调试技巧

1. **查看 EPS 定义**: 检查 `build/cool/eps.d.ts` 确认后端 API
2. **查看网络请求**: 浏览器 DevTools → Network
3. **查看控制台日志**: 开发模式下保留 console，生产模式自动移除
4. **Vue DevTools**: 安装 Vue DevTools 浏览器插件
5. **类型检查**: 运行 `npm run type-check`

## 参考资源

- **Cursor 规则**: `.cursor/rules/` 目录包含各种代码生成规则
  - `crud.mdc`: CRUD 页面生成
  - `form.mdc`: 表单组件
  - `table.mdc`: 表格组件
  - `module.mdc`: 模块创建
- **官方文档**: 查看 Cool Admin 官方文档
- **示例代码**: `src/modules/demo/` 提供了完整示例

## 注意事项

1. **不要直接修改** `build/cool/` 目录下的文件，它们由后端自动生成
2. **不要直接修改** `packages/` 目录下的源码包，除非你知道自己在做什么
3. **EPS 更新**: 当后端 API 变化时，需要重启前端开发服务器以更新 EPS
4. **代理配置**: 确保 `proxy.ts` 中的后端地址正确
5. **权限控制**: 页面和按钮权限由后端菜单配置控制
