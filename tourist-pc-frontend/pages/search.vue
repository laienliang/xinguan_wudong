<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="全站搜索" />
    <p class="eyebrow">探索乌东</p>
    <h1 class="section-title">想去哪里，想找什么？</h1>
    <form class="mt-10 flex max-w-2xl gap-3" @submit.prevent="search">
      <input
        v-model="keyword"
        class="min-w-0 flex-1 border-b-2 border-[var(--ink)] bg-transparent px-2 py-4 text-lg outline-none focus:border-clay"
        placeholder="搜索商品、餐厅、民宿、景区、线路或故事"
      /><button class="rounded-full bg-clay px-7 text-sm text-white">
        搜索
      </button>
    </form>
    <div v-if="searched" class="mt-14">
      <p class="text-sm text-muted">“{{ keyword }}” 的搜索结果</p>
      <div v-if="pending" class="py-16 text-center text-muted">正在检索…</div>
      <EmptyState v-else-if="!results.length" />
      <div v-else class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in results"
          :key="`${item.kind}-${item.id}`"
          :to="item.href"
          class="border border-[var(--line)] bg-surface p-5 transition hover:border-clay"
          ><p class="text-xs text-clay">{{ item.kind }}</p>
          <h2 class="mt-3 font-display text-2xl">
            {{ item.name || item.title }}
          </h2>
          <p class="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {{ item.intro || item.subtitle || item.content || item.address }}
          </p></NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import type { PageResult, PlaceRecord } from "~/types/api";
const keyword = ref("");
const searched = ref(false);
const pending = ref(false);
const results = ref<(PlaceRecord & { kind: string; href: string })[]>([]);
const { request } = useApi();
const sources = [
  ["商品", "/app/shop/goods/page", "/shop/"],
  ["餐饮", "/app/food/restaurant/page", "/restaurant/"],
  ["住宿", "/app/hotel/house/page", "/hotel/"],
  ["景区", "/app/tour/scenic-spot/page", "/scenic/"],
  ["线路", "/app/tour/route/page", "/route/"],
  ["旅记", "/app/community/post/page", "/community/"],
] as const;
async function search() {
  searched.value = true;
  pending.value = true;
  try {
    const group = await Promise.all(
      sources.map(async ([kind, path, prefix]) => {
        try {
          const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>(
            path,
            {
              method: "POST",
              body: { page: 1, size: 6, keyWord: keyword.value, status: 1 },
            },
          );
          const list = Array.isArray(data) ? data : data.list || [];
          return list.map((item) => ({
            ...item,
            kind,
            href: `${prefix}${item.id}`,
          }));
        } catch {
          return [] as (PlaceRecord & { kind: string; href: string })[];
        }
      }),
    );
    results.value = group.flat();
  } finally {
    pending.value = false;
  }
}
useSeo({
  title: "搜索｜乌东文旅",
  description: "搜索乌东文旅的商品、餐厅、民宿、景区、线路和旅人故事。",
});
</script>
