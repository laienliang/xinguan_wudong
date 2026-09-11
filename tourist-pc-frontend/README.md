# 乌东文旅游客 PC 端

基于 Nuxt 3 的独立游客端，默认通过 `/api` 对接同级目录的 `cool-admin-midway` 服务。

## 启动

```bash
npm install
npm run dev
```

访问 `http://localhost:9100`。后端需运行在 `http://localhost:8001`。

本地联调可按以下顺序启动：

```bash
brew services start mysql@8.0
cd ../cool-admin-midway && npm run dev
cd ../tourist-pc-frontend && npm run dev
```

生产构建预览：

```bash
npm run build
node .output/server/index.mjs
```

默认监听 `http://localhost:3000`。

## 环境变量

复制 `.env.example` 为 `.env` 后按需配置：

- `NUXT_PUBLIC_API_BASE`：API 地址，开发环境建议 `/api`
- `NUXT_API_ORIGIN`：Nuxt 服务端代理的后端地址，开发环境为 `http://127.0.0.1:8001`
- `NUXT_PUBLIC_SITE_URL`：站点公开地址，用于 canonical 与 sitemap
- `NUXT_PUBLIC_AMAP_KEY`：高德地图密钥；未配置时页面保留地址、坐标和地图导航链接

## 校验

```bash
npm test
npm run typecheck
npm run build
```

截至 2026 年 9 月 10 日，本地 MySQL 联调已验证公开浏览、附近查询、密码登录、重复加购、商品结算、餐位预订和订单取消。首页 Lighthouse 结果：性能 94、SEO 100、FCP 2.4 秒、LCP 2.4 秒、CLS 0。

本地测试游客：手机号 `13800138000`，密码 `123456`。仅用于本地开发库。

## 路由

首页、商品、餐饮、住宿、景区、线路、社区、搜索、登录、购物车、订单和个人中心均采用 Nuxt 路由。公开浏览页使用 SSR；登录态和定位仅在浏览器客户端处理。
