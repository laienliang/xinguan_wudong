<template>
  <CatalogPage
    title="非遗好物"
    description="把乌东的手艺与故事，带回日常。"
    :items="items"
    :pending="pending"
    card="product"
    :categories="categories"
    :active-category="String(route.query.categoryId || '') || undefined"
    @search="search"
    @category="selectCategory"
  />
</template>
<script setup lang="ts">
import CatalogPage from "~/components/common/CatalogPage.vue";
import type { PlaceRecord } from "~/types/api";
const route = useRoute();
const { request } = useApi();
const { items, pending } = useCatalog(
  "shop",
  "/app/shop/goods/page",
  "非遗好物",
  "把乌东的手艺与故事，带回日常。",
);
const { data: categoriesData } = await useAsyncData("shop-categories", () =>
  request<PlaceRecord[]>("/app/shop/category/list", {
    method: "POST",
    body: { status: 1 },
  }).catch(() => []),
);
const categories = computed(() => categoriesData.value || []);
function search(q: string) {
  navigateTo({ path: "/shop", query: { ...route.query, q } });
}
function selectCategory(categoryId: string | undefined) {
  const query = { ...route.query };
  if (categoryId) query.categoryId = categoryId;
  else delete query.categoryId;
  navigateTo({ path: "/shop", query });
}
</script>
