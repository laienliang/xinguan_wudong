<template>
  <header
    class="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(244,239,230,.94)] backdrop-blur"
  >
    <div class="container flex h-20 items-center gap-8">
      <NuxtLink to="/" class="shrink-0">
        <span class="block font-display text-2xl tracking-wide">乌东文旅</span>
        <span class="text-[10px] tracking-[.2em] text-clay">苗岭深处的慢游时光</span>
      </NuxtLink>
      <nav
        class="hidden flex-1 items-center gap-6 text-sm lg:flex"
        aria-label="主导航"
      >
        <NuxtLink
          v-for="item in links"
          :key="item.path"
          :to="item.path"
          class="transition-colors hover:text-clay"
          >{{ item.label }}</NuxtLink
        >
      </nav>
      <div class="ml-auto flex items-center gap-3 text-sm">
        <button
          class="hidden items-center gap-1 text-muted hover:text-clay sm:flex"
          @click="locate"
        >
          ⌖ {{ locationLabel }}
        </button>
        <NuxtLink
          to="/search"
          class="rounded-full border border-[var(--line)] px-3 py-2 hover:border-clay"
          >搜索</NuxtLink
        >
        <NuxtLink
          to="/cart"
          class="rounded-full bg-clay px-4 py-2 text-white hover:bg-[var(--clay-dark)]"
          >购物车</NuxtLink
        >
        <NuxtLink
          :to="token ? '/account' : '/login'"
          class="hidden rounded-full border border-[var(--ink)] px-4 py-2 sm:block"
          >{{ token ? "我的乌东" : "登录" }}</NuxtLink
        >
      </div>
    </div>
    <div
      class="container flex gap-4 overflow-x-auto pb-3 text-xs lg:hidden"
      aria-label="移动导航"
    >
      <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        class="whitespace-nowrap"
        >{{ item.label }}</NuxtLink
      >
    </div>
    <p
      v-if="geoStatus === 'denied'"
      class="border-t border-[var(--line)] bg-sand px-4 py-2 text-center text-xs text-muted"
    >
      定位未开启，可在列表页手动选择区域或距离。
    </p>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: "衣 · 非遗", path: "/shop" },
  { label: "食 · 餐饮", path: "/restaurant" },
  { label: "住 · 民宿", path: "/hotel" },
  { label: "行 · 景区", path: "/scenic" },
  { label: "游 · 线路", path: "/route" },
  { label: "娱 · 社区", path: "/community" },
];
const { token } = useAuth();
const { position, city, status: geoStatus, requestLocation } = useGeoLocation();
const locationLabel = computed(() => (position.value ? "已定位" : city.value));
async function locate() {
  await requestLocation();
}
</script>
