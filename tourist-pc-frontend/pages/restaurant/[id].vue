<template>
  <DetailPage
    section="地道风味"
    :item="item"
    :pending="pending"
    schema="Restaurant"
    action-label="预订餐位"
    @action="book"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
const { item, pending } = useDetail("restaurant", "/app/food/restaurant/info");
function book() {
  navigateTo("/booking/restaurant/" + useRoute().params.id);
}
</script>
