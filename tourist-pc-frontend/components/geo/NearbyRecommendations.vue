<template>
  <section
    v-if="items.length"
    class="mt-14 border-t border-[var(--line)] pt-10"
  >
    <p class="eyebrow">附近推荐</p>
    <h2 class="mt-2 font-display text-3xl">附近也值得去看看</h2>
    <div class="mt-6 grid gap-6 md:grid-cols-3">
      <PlaceCard
        v-for="nearby in items"
        :key="nearby.id"
        :item="nearby"
        :type="placeType"
        distance-label="距此处"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PlaceCard from "~/components/cards/PlaceCard.vue";
import type { PlaceRecord } from "~/types/api";

const props = defineProps<{ item: PlaceRecord; schema: string }>();
const mapping = {
  Restaurant: { endpoint: "/app/food/restaurant/nearby", type: "restaurant" },
  LodgingBusiness: { endpoint: "/app/hotel/house/nearby", type: "hotel" },
  TouristAttraction: {
    endpoint: "/app/tour/scenic-spot/nearby",
    type: "scenic",
  },
} as const;
const source = computed(() => mapping[props.schema as keyof typeof mapping]);
const placeType = computed(() => source.value?.type || "restaurant");
const { request } = useApi();
const { data } = await useAsyncData(
  () => "nearby-" + props.schema + "-" + props.item.id,
  async () => {
    if (
      !source.value ||
      props.item.latitude == null ||
      props.item.longitude == null
    ) {
      return [] as PlaceRecord[];
    }
    const results = await request<PlaceRecord[]>(source.value.endpoint, {
      method: "GET",
      query: {
        longitude: Number(props.item.longitude),
        latitude: Number(props.item.latitude),
        distance: 10,
        limit: 4,
      },
    }).catch(() => []);
    return results
      .filter((result) => String(result.id) !== String(props.item.id))
      .map((result) => ({
        ...result,
        distance: Number(result.distance || 0) * 1000,
      }))
      .slice(0, 3);
  },
  { watch: [source] },
);
const items = computed(() => data.value || []);
</script>
