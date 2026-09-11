<template>
  <div>
    <HeroBanner />
    <section class="container py-16 md:py-24">
      <div class="flex items-end justify-between gap-5">
        <div>
          <p class="eyebrow">六种方式，遇见乌东</p>
          <h2 class="section-title">从一顿饭开始，慢慢认识这里。</h2>
        </div>
        <NuxtLink to="/search" class="text-sm text-clay">探索全部 →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in modules"
          :key="item.path"
          :to="item.path"
          class="group relative min-h-48 overflow-hidden bg-moss p-7 text-white"
          ><div
            class="absolute inset-0 bg-[url('/hero-wudong.svg')] bg-cover opacity-25 transition duration-500 group-hover:scale-105"
          />
          <div class="relative">
            <span class="text-4xl font-display">{{ item.mark }}</span>
            <h3 class="mt-10 text-xl">{{ item.label }}</h3>
            <p class="mt-2 text-sm text-white/70">{{ item.copy }}</p>
          </div></NuxtLink
        >
      </div>
    </section>
    <section class="bg-[#e9ddca] py-16">
      <div class="container">
        <div class="flex items-end justify-between">
          <div>
          <p class="eyebrow">山谷推荐</p>
            <h2 class="section-title">离你不远的好去处</h2>
          </div>
          <NuxtLink to="/restaurant" class="text-sm text-clay"
            >看更多 →</NuxtLink
          >
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <PlaceCard
            v-for="item in nearby"
            :key="item.id"
            :item="item"
            type="restaurant"
          />
        </div>
      </div>
    </section>
    <section v-if="popularGoods.length" class="container py-16 md:py-24">
      <div class="flex items-end justify-between gap-5">
        <div>
          <p class="eyebrow">苗寨手作</p>
          <h2 class="section-title">带走一件乌东的手艺</h2>
        </div>
        <NuxtLink to="/shop" class="text-sm text-clay">查看好物 →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard v-for="item in popularGoods" :key="item.id" :item="item" />
      </div>
    </section>
    <section
      v-if="stories.length"
      class="border-y border-[var(--line)] bg-surface py-12 md:py-16"
    >
      <div class="container">
        <div class="flex items-end justify-between gap-5">
          <div>
          <p class="eyebrow">旅人故事</p>
            <h2 class="section-title">看见别人眼里的乌东，也写下自己的这一页。</h2>
          </div>
          <NuxtLink to="/community" class="text-sm text-clay"
            >阅读更多 →</NuxtLink
          >
        </div>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <StoryCard v-for="item in stories" :key="item.id" :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import HeroBanner from "~/components/home/HeroBanner.vue";
import PlaceCard from "~/components/cards/PlaceCard.vue";
import ProductCard from "~/components/cards/ProductCard.vue";
import StoryCard from "~/components/cards/StoryCard.vue";
import type { PlaceRecord } from "~/types/api";
type NearbyResult = PlaceRecord[] | { list: PlaceRecord[] };
const modules = [
  {
    mark: "衣",
    label: "非遗好物",
    copy: "银饰、蜡染与手作故事",
    path: "/shop",
  },
  {
    mark: "食",
    label: "地道风味",
    copy: "一桌苗家长桌宴",
    path: "/restaurant",
  },
  { mark: "住", label: "山野住处", copy: "在木屋里听风", path: "/hotel" },
  { mark: "行", label: "景区门票", copy: "把山水装进行囊", path: "/scenic" },
  { mark: "游", label: "旅行线路", copy: "一日或两日的从容", path: "/route" },
  { mark: "娱", label: "社区旅记", copy: "听旅人说起乌东", path: "/community" },
];
const { request } = useApi();
const { position } = useGeoLocation();
const { data, refresh } = await useAsyncData<NearbyResult>(
  "home-nearby",
  () => {
    if (position.value) {
      return request<PlaceRecord[]>("/app/food/restaurant/nearby", {
        method: "GET",
        query: {
          longitude: position.value.longitude,
          latitude: position.value.latitude,
          distance: 3,
          limit: 3,
        },
      }).catch((): PlaceRecord[] => []);
    }
    return request<{ list: PlaceRecord[] }>("/app/food/restaurant/page", {
      method: "POST",
      body: { page: 1, size: 3, status: 1 },
    }).catch((): NearbyResult => []);
  },
);
watch(position, () => refresh(), { deep: true });
const nearby = computed(() =>
  (Array.isArray(data.value) ? data.value : data.value?.list || []).slice(0, 3),
);
const { data: goodsData } = await useAsyncData("home-popular-goods", () =>
  request<{ list: PlaceRecord[] }>("/app/shop/goods/page", {
    method: "POST",
    body: { page: 1, size: 3, status: 1 },
  }).catch(() => ({ list: [] })),
);
const { data: storiesData } = await useAsyncData("home-stories", () =>
  request<{ list: PlaceRecord[] }>("/app/community/post/page", {
    method: "POST",
    body: { page: 1, size: 3, status: 1 },
  }).catch(() => ({ list: [] })),
);
const popularGoods = computed(() => goodsData.value?.list || []);
const stories = computed(() => storiesData.value?.list || []);
useSeo({
  title: "乌东文旅｜在苗寨深处，遇见真实的贵州",
  description:
    "探索乌东村的非遗好物、地道风味、山野民宿、景区门票、旅行线路与旅人故事。",
});
</script>
