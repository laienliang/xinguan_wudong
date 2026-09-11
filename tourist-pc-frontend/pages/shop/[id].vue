<template>
  <DetailPage
    section="非遗好物"
    :item="item"
    :pending="pending"
    schema="Product"
    action-label="加入购物车"
    @action="add"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
const { item, pending } = useDetail("shop", "/app/shop/goods/info");
async function add(v: any) {
  if (!useAuth().requireAuth()) return;
  await useApi().request("/app/cart/add", {
    method: "POST",
    body: { goodsId: v.id, goodsType: 1, quantity: 1 },
  });
}
</script>
