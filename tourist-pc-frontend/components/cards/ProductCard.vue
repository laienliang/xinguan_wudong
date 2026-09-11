<template>
  <NuxtLink :to="`/shop/${item.id}`" class="group block"
    ><div class="aspect-[4/3] overflow-hidden bg-sand">
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div class="pt-3.5">
      <h3 class="font-display text-[1.15rem] leading-7">{{ title }}</h3>
      <p class="mt-1.5 text-sm leading-6 text-muted">
        {{ item.subtitle || "乌东手作 · 传统工艺" }}
      </p>
      <p class="mt-2 text-lg leading-6 text-clay">¥{{ item.price ?? "--" }}</p>
    </div></NuxtLink
  >
</template>
<script setup lang="ts">
import type { PlaceRecord } from "~/types/api";
const props = defineProps<{ item: PlaceRecord }>();
const title = computed(() => props.item.title || props.item.name || "乌东好物");
const { imageUrl } = useMedia();
const image = computed(() => imageUrl(props.item.mainImage));
</script>
