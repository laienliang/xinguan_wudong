export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: { port: 9100 },
  compatibilityDate: "2025-01-15",
  // @ts-expect-error Nuxt 3 运行时支持该 Nitro 配置，当前类型定义未暴露此字段
  nitro: {
    externals: {
      inline: ["vue", "vue-router", "@vue/server-renderer"],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiOrigin: process.env.NUXT_API_ORIGIN || "http://127.0.0.1:8001",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
      mediaBase: process.env.NUXT_PUBLIC_MEDIA_BASE || "http://127.0.0.1:8001",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:9100",
      amapKey: process.env.NUXT_PUBLIC_AMAP_KEY || "",
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "zh-CN" },
      meta: [
        { name: "theme-color", content: "#f4efe6" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "preconnect", href: "http://localhost:8001" }],
    },
  },
  css: ["~/assets/styles/main.css"],
  typescript: { strict: true, typeCheck: true },
});
