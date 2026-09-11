<template>
  <section class="container py-12">
    <Breadcrumbs label="收货地址" />
    <h1 class="section-title">收货地址</h1>
    <div v-if="!authorized" class="mt-10"><EmptyState /></div>
    <div v-else-if="pending" class="py-16 text-center text-muted">
      正在加载地址…
    </div>
    <EmptyState v-else-if="!addresses.length" />
    <div v-else class="mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="address in addresses"
        :key="address.id"
        class="border border-[var(--line)] bg-surface p-6"
      >
        <div class="flex items-center justify-between">
          <h2 class="font-display text-xl">{{ address.name }}</h2>
          <span v-if="address.isDefault" class="text-xs text-clay"
            >默认地址</span
          >
        </div>
        <p class="mt-2 text-sm text-muted">{{ address.phone }}</p>
        <p class="mt-4 leading-7">
          {{ address.province }}{{ address.city }}{{ address.district
          }}{{ address.detail }}
        </p>
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
const addresses = ref<PlaceRecord[]>([]);
const pending = ref(false);
const { request } = useApi();
onMounted(async () => {
  if (!authorized.value) return;
  pending.value = true;
  try {
    const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>(
      "/app/user/address/list",
      { method: "POST", body: {} },
    );
    addresses.value = Array.isArray(data) ? data : data.list || [];
  } finally {
    pending.value = false;
  }
});
useSeo({
  title: "收货地址｜乌东文旅",
  description: "管理乌东文旅商品配送地址。",
});
</script>
