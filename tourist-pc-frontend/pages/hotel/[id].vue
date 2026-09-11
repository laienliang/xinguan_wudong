<template>
  <DetailPage
    section="山野住处"
    :item="item"
    :pending="pending"
    schema="LodgingBusiness"
    action-label="预订民宿"
    @action="book"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
const { item, pending } = useDetail("hotel", "/app/hotel/house/info");
function book() {
  navigateTo("/booking/hotel/" + useRoute().params.id);
}
</script>
