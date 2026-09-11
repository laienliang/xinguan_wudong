<template>
  <article class="flex gap-4 border-b border-[var(--line)] py-5">
    <div class="h-24 w-24 shrink-0 overflow-hidden bg-sand">
      <img
        :src="imageUrl(item.mainImage as string)"
        :alt="String(item.title || item.name || '购物车商品')"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="min-w-0 flex-1">
      <h2 class="truncate font-display text-xl">
        {{ item.title || item.name || "乌东好物" }}
      </h2>
      <p class="mt-1 text-sm text-muted">¥{{ item.price || 0 }}</p>
      <div class="mt-3 flex items-center gap-3 text-sm">
        <button
          class="h-7 w-7 border border-[var(--line)]"
          @click="
            $emit('quantity', Math.max(1, Number(item.quantity || 1) - 1))
          "
        >
          −</button
        ><span>{{ item.quantity || 1 }}</span
        ><button
          class="h-7 w-7 border border-[var(--line)]"
          @click="$emit('quantity', Number(item.quantity || 1) + 1)"
        >
          ＋</button
        ><button
          class="ml-auto text-muted hover:text-clay"
          @click="$emit('remove')"
        >
          移除
        </button>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import type { PlaceRecord } from "~/types/api";
defineProps<{ item: PlaceRecord }>();
defineEmits<{ quantity: [value: number]; remove: [] }>();
const { imageUrl } = useMedia();
</script>
