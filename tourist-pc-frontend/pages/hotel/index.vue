<template>
  <CatalogPage
    title="山野住处"
    description="住进木屋、梯田和清晨的鸟鸣里。"
    :items="items"
    :pending="pending"
    card="hotel"
    @search="search"
  />
</template>
<script setup lang="ts">
import CatalogPage from "~/components/common/CatalogPage.vue";
const route = useRoute();
const { items, pending } = useCatalog(
  "hotel",
  "/app/hotel/house/page",
  "山野住处",
  "住进木屋、梯田和清晨的鸟鸣里。",
);
function search(q: string) {
  navigateTo({ path: "/hotel", query: { ...route.query, q } });
}
</script>
