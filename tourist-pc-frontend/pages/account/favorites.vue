<template>
  <section class="container py-12">
    <Breadcrumbs label="我的收藏" />
    <h1 class="section-title">我的收藏</h1>
    <div v-if="!authorized" class="mt-10"><EmptyState /></div>
    <div v-else-if="pending" class="py-16 text-center text-muted">
      正在加载收藏…
    </div>
    <EmptyState v-else-if="!favorites.length" />
    <div v-else class="mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="favorite in favorites"
        :key="favorite.id"
        class="border border-[var(--line)] bg-surface p-6"
      >
        <p class="text-xs text-clay">{{ favorite.targetType || "收藏" }}</p>
        <h2 class="mt-3 font-display text-xl">
          {{ favorite.title || favorite.name || "已收藏内容" }}
        </h2>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import type { PageResult, PlaceRecord } from "~/types/api";
const auth = useAuth();
const authorized = computed(() => Boolean(auth.token.value));
const favorites = ref<PlaceRecord[]>([]);
const pending = ref(false);
const { request } = useApi();
onMounted(async () => {
  if (!authorized.value) return;
  pending.value = true;
  try {
    const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>(
      "/app/user/favorite/list",
      { method: "POST", body: {} },
    );
    favorites.value = Array.isArray(data) ? data : data.list || [];
  } finally {
    pending.value = false;
  }
});
useSeo({
  title: "我的收藏｜乌东文旅",
  description: "查看你收藏的乌东商品、餐厅、民宿和故事。",
});
</script>
