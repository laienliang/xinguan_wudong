<template>
  <CatalogPage
    title="景区门票"
    description="把山水装进行囊，去看一场日出或云海。"
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
  "scenic",
  "/app/tour/scenic-spot/page",
  "景区门票",
  "把山水装进行囊，去看一场日出或云海。",
);
function search(q: string) {
  navigateTo({ path: "/scenic", query: { ...route.query, q } });
}
</script>
