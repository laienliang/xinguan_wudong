<template>
  <DetailPage
    section="景区门票"
    :item="item"
    :pending="pending"
    schema="TouristAttraction"
    action-label="选择门票"
    @action="book"
  />
</template>
<script setup lang="ts">
import DetailPage from "~/components/common/DetailPage.vue";
const { item, pending } = useDetail("scenic", "/app/tour/scenic-spot/info");
function book() {
  navigateTo("/booking/scenic/" + useRoute().params.id);
}
</script>
