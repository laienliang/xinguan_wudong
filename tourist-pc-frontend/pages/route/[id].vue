<template>
  <DetailPage
    section="旅行线路"
    :item="item"
    :pending="pending"
    schema="TouristTrip"
    action-label="报名出发"
    @action="book"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
const { item, pending } = useDetail("route", "/app/tour/route/info");
function book() {
  navigateTo("/booking/route/" + useRoute().params.id);
}
</script>
