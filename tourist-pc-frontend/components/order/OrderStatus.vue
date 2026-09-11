<template>
  <span class="text-sm" :class="statusMeta.color">{{ statusMeta.label }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ status?: number }>();
const statuses: Record<number, { label: string; color: string }> = {
  1: { label: "待支付", color: "text-clay" },
  2: { label: "已支付", color: "text-moss" },
  3: { label: "已取消", color: "text-muted" },
  4: { label: "已完成", color: "text-moss" },
  5: { label: "已退款", color: "text-muted" },
};
const statusMeta = computed(
  () =>
    statuses[Number(props.status)] || { label: "处理中", color: "text-muted" },
);
</script>
