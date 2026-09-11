<template>
  <NuxtLink :to="href" class="group block"
    ><div class="aspect-[4/3] overflow-hidden bg-sand">
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div class="pt-3.5">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display text-[1.15rem] leading-7">{{ title }}</h3>
        <span v-if="item.score" class="shrink-0 pt-0.5 text-sm text-clay"
          >★ {{ item.score }}</span
        >
      </div>
      <p class="mt-1.5 line-clamp-1 text-sm leading-6 text-muted">
        {{ item.address || item.intro || "乌东村" }}
      </p>
      <p v-if="item.distance" class="mt-1.5 text-xs leading-5 text-moss">
        {{ distanceLabel }} {{ formatDistance(item.distance) }}
      </p>
    </div></NuxtLink
  >
</template>
<script setup lang="ts">
import type { PlaceRecord } from "~/types/api";
const props = defineProps<{
  item: PlaceRecord;
  type: "restaurant" | "hotel" | "scenic";
  distanceLabel?: string;
}>();
const title = computed(
  () => props.item.name || props.item.title || "乌东目的地",
);
const { imageUrl } = useMedia();
const image = computed(() => imageUrl(props.item.mainImage));
const href = computed(() => `/${props.type}/${props.item.id}`);
const distanceLabel = computed(() => props.distanceLabel || "距你");
const { formatDistance } = useDistance();
</script>
