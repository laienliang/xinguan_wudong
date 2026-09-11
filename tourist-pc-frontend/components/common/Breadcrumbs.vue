<template><nav aria-label="面包屑" class="mb-8 text-sm text-muted"><NuxtLink to="/">首页</NuxtLink><span class="mx-2">/</span><span>{{ label }}</span></nav></template>
<script setup lang="ts">defineProps<{ label: string }>();</script>
