<template>
  <CatalogPage
    title="旅行线路"
    description="一日游、两日游，留一点时间给偶遇。"
    :items="items"
    :pending="pending"
    card="scenic"
    @search="search"
  />
</template>
<script setup lang="ts">
import CatalogPage from "~/components/common/CatalogPage.vue";
const route = useRoute();
const { items, pending } = useCatalog(
  "route",
  "/app/tour/route/page",
  "旅行线路",
  "一日游、两日游，留一点时间给偶遇。",
);
function search(q: string) {
  navigateTo({ path: "/route", query: { ...route.query, q } });
}
</script>
