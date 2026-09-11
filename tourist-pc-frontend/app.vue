<script setup lang="ts">
import SiteHeader from "~/components/layout/SiteHeader.vue";
import SiteFooter from "~/components/layout/SiteFooter.vue";
</script>

<template>
  <div class="min-h-screen bg-paper">
    <SiteHeader />
    <main><NuxtPage /></main>
    <SiteFooter />
  </div>
</template>
