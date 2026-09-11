<template>
  <CatalogPage
    title="地道风味"
    description="从苗家长桌宴，到山野里的一碗热汤。"
    :items="items"
    :pending="pending"
    card="restaurant"
    @search="search"
  />
</template>
<script setup lang="ts">
import CatalogPage from "~/components/common/CatalogPage.vue";
const route = useRoute();
const { items, pending } = useCatalog(
  "restaurant",
  "/app/food/restaurant/page",
  "地道风味",
  "从苗家长桌宴，到山野里的一碗热汤。",
);
function search(q: string) {
  navigateTo({ path: "/restaurant", query: { ...route.query, q } });
}
</script>
