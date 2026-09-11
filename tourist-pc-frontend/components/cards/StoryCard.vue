<template>
  <NuxtLink :to="`/community/${item.id}`" class="group block"
    ><div class="aspect-[5/4] overflow-hidden bg-sand">
      <img
        :src="image"
        :alt="item.title || '乌东旅记'"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <h3 class="mt-3.5 font-display text-[1.15rem] leading-7">
      {{ item.title || "一封写给乌东的旅信" }}
    </h3>
    <p class="mt-1.5 line-clamp-2 text-sm leading-6 text-muted">
      {{ item.content || "山路、炊烟和一场不期而遇。" }}
    </p></NuxtLink
  >
</template>
<script setup lang="ts">
import type { PlaceRecord } from "~/types/api";
const props = defineProps<{ item: PlaceRecord }>();
const { imageUrl } = useMedia();
const firstImage = computed(() => {
  const images = props.item.images;
  if (Array.isArray(images)) return images[0];
  if (typeof images === "string") {
    try {
      return JSON.parse(images)[0];
    } catch {
      return undefined;
    }
  }
  return undefined;
});
const image = computed(() => imageUrl(firstImage.value));
</script>
