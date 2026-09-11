<template>
  <section class="container catalog-page py-10 md:py-14">
    <Breadcrumbs :label="title" />
    <div class="catalog-hero">
      <div class="min-w-0">
        <h1 class="section-title">{{ title }}</h1>
        <p class="section-copy mt-3">{{ description }}</p>
      </div>
      <div class="catalog-search flex items-center gap-2 text-sm">
        <input
          v-model="keyword"
          class="w-full border-b border-[var(--line)] bg-transparent px-1 py-2.5 outline-none focus:border-clay sm:w-52"
          placeholder="搜索关键词"
          @keyup.enter="search"
        /><button
          class="shrink-0 rounded-full bg-clay px-4 py-2.5 text-white transition hover:bg-[var(--clay-dark)]"
          @click="search"
        >
          搜索
        </button>
      </div>
    </div>
    <div class="catalog-toolbar mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
      <span class="text-muted">距离范围</span
      ><button
        v-for="radius in [1, 3, 5, 10]"
        :key="radius"
        class="rounded-full border px-3 py-1.5"
        :class="
          activeRadius === radius
            ? 'border-clay bg-clay text-white'
            : 'border-[var(--line)]'
        "
        @click="changeRadius(radius)"
      >
        {{ radius }}km</button
      ><button
        class="rounded-full border border-[var(--line)] px-3 py-1.5 transition hover:border-clay sm:ml-auto"
        @click="requestLocation"
      >
        {{ position ? "已启用定位" : "开启定位" }}
      </button>
    </div>
    <div class="catalog-toolbar mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
      <span class="text-muted">查看方式</span>
      <button
        class="rounded-full border px-3 py-1.5"
        :class="
          viewMode === 'list'
            ? 'border-clay bg-clay text-white'
            : 'border-[var(--line)]'
        "
        @click="viewMode = 'list'"
      >
        列表
      </button>
      <button
        class="rounded-full border px-3 py-1.5"
        :class="
          viewMode === 'map'
            ? 'border-clay bg-clay text-white'
            : 'border-[var(--line)]'
        "
        @click="viewMode = 'map'"
      >
        地图
      </button>
      <input
        v-model="district"
        class="ml-0 w-40 border-b border-[var(--line)] bg-transparent px-1 py-1.5 outline-none focus:border-clay sm:ml-auto"
        placeholder="按区域筛选"
      />
      <select
        v-model="sortBy"
        class="border-b border-[var(--line)] bg-transparent px-1 py-1.5 outline-none focus:border-clay"
        aria-label="排序方式"
      >
        <option value="recommended">推荐排序</option>
        <option value="distance">距离优先</option>
        <option value="price">价格排序</option>
        <option value="newest">最新发布</option>
      </select>
    </div>
    <div v-if="categories.length" class="catalog-categories mt-5 flex flex-wrap gap-2 text-sm">
      <button
        class="rounded-full border px-3 py-1.5"
        :class="
          activeCategory == null
            ? 'border-clay bg-clay text-white'
            : 'border-[var(--line)]'
        "
        @click="$emit('category', undefined)"
      >
        全部分类
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        class="rounded-full border px-3 py-1.5"
        :class="
          activeCategory === String(category.id)
            ? 'border-clay bg-clay text-white'
            : 'border-[var(--line)]'
        "
        @click="$emit('category', String(category.id))"
      >
        {{ category.name || category.title }}
      </button>
    </div>
    <div class="pattern-rule mt-8" />
    <div v-if="pending" class="py-20 text-center text-muted">
      正在寻找合适的去处…
    </div>
    <EmptyState v-else-if="!filteredItems.length" />
    <template v-else>
      <div
        v-if="viewMode === 'list'"
        class="catalog-grid mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-12"
      >
        <template v-for="item in filteredItems" :key="item.id">
          <ProductCard v-if="card === 'product'" :item="item" />
          <StoryCard v-else-if="card === 'story'" :item="item" />
          <PlaceCard v-else :item="item" :type="card" />
        </template>
      </div>
      <div v-else class="mt-8 grid gap-5 md:grid-cols-2">
        <GeoMap
          v-for="item in filteredItems"
          :key="item.id"
          :title="String(item.name || item.title || '乌东目的地')"
          :address="item.address"
          :latitude="Number(item.latitude)"
          :longitude="Number(item.longitude)"
        />
      </div>
    </template>
  </section>
</template>
<script setup lang="ts">
import ProductCard from "~/components/cards/ProductCard.vue";
import PlaceCard from "~/components/cards/PlaceCard.vue";
import StoryCard from "~/components/cards/StoryCard.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import GeoMap from "~/components/geo/GeoMap.vue";
import type { PlaceRecord } from "~/types/api";
const props = defineProps<{
  title: string;
  description: string;
  items: PlaceRecord[];
  pending: boolean;
  card: "product" | "story" | "restaurant" | "hotel" | "scenic";
  categories?: PlaceRecord[];
  activeCategory?: string;
}>();
const emit = defineEmits<{
  search: [keyword: string];
  category: [value: string | undefined];
}>();
const keyword = ref("");
const route = useRoute();
const activeRadius = computed(() =>
  Math.min(Math.max(Number(route.query.distance || 3), 1), 10),
);
const viewMode = ref<"list" | "map">("list");
const district = ref("");
const sortBy = ref<"recommended" | "distance" | "price" | "newest">(
  "recommended",
);
const { position, requestLocation } = useGeoLocation();
const { between } = useDistance();
function search() {
  emit("search", keyword.value);
}
function changeRadius(radius: number) {
  navigateTo({ query: { ...route.query, distance: radius } });
}
const { title, description, items, pending } = toRefs(props);
const categories = computed(() => props.categories || []);
const activeCategory = computed(() => props.activeCategory);
const filteredItems = computed(() => {
  const origin = position.value;
  const filtered = items.value
    .map((item) => {
      if (!origin || item.latitude == null || item.longitude == null)
        return item;
      return {
        ...item,
        distance: between(origin, {
          latitude: Number(item.latitude),
          longitude: Number(item.longitude),
        }),
      };
    })
    .filter(
      (item) =>
        !district.value ||
        String(item.district || item.address || "").includes(district.value),
    )
    .filter(
      (item) =>
        !origin ||
        item.distance == null ||
        item.distance <= activeRadius.value * 1000,
    );
  return filtered.sort((a, b) => {
    if (sortBy.value === "distance") {
      return (
        Number(a.distance ?? Number.MAX_SAFE_INTEGER) -
        Number(b.distance ?? Number.MAX_SAFE_INTEGER)
      );
    }
    if (sortBy.value === "price") {
      return (
        Number(a.price ?? a.avgPrice ?? Number.MAX_SAFE_INTEGER) -
        Number(b.price ?? b.avgPrice ?? Number.MAX_SAFE_INTEGER)
      );
    }
    if (sortBy.value === "newest") {
      return String(b.createTime || "").localeCompare(
        String(a.createTime || ""),
      );
    }
    return Number(b.score ?? 0) - Number(a.score ?? 0);
  });
});
</script>
