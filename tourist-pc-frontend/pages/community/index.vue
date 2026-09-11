<template>
  <CatalogPage
    title="旅人故事"
    description="看见别人眼里的乌东，也写下自己的这一页。"
    :items="items"
    :pending="pending"
    card="story"
    @search="search"
  />
</template>
<script setup lang="ts">
import CatalogPage from "~/components/common/CatalogPage.vue";
const route = useRoute();
const { items, pending } = useCatalog(
  "community",
  "/app/community/post/page",
  "旅人故事",
  "看见别人眼里的乌东，也写下自己的这一页。",
);
function search(q: string) {
  navigateTo({ path: "/community", query: { ...route.query, q } });
}
</script>
