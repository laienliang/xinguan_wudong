<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="商家中心" />
    <div v-if="pending" class="py-20 text-center text-muted">正在读取店铺信息…</div>
    <div v-else-if="!merchant" class="max-w-xl">
      <p class="eyebrow">商家中心</p>
      <h1 class="section-title">你的商家申请尚未通过。</h1>
      <NuxtLink to="/account/merchant-application" class="mt-8 inline-block rounded-full bg-clay px-5 py-3 text-sm text-white">查看申请状态</NuxtLink>
    </div>
    <div v-else class="max-w-3xl">
      <p class="eyebrow">商家中心</p>
      <div class="mt-3 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 class="section-title">{{ merchant.shopName }}</h1>
          <p class="mt-3 text-sm text-muted">{{ moduleText(merchant.moduleType) }} · 商家账号 {{ merchant.username }}</p>
        </div>
        <a :href="merchant.adminUrl" class="rounded-full bg-clay px-5 py-3 text-sm text-white">进入商家后台</a>
      </div>
      <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in capabilities" :key="item.label" class="border border-[var(--line)] bg-surface p-6">
          <span class="text-3xl font-display">{{ item.mark }}</span>
          <h2 class="mt-8 text-lg">{{ item.label }}</h2>
          <p class="mt-2 text-sm text-muted">{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';
const { request } = useApi();
const merchant = ref<any>(null);
const pending = ref(true);
const capabilities = computed(() => merchant.value?.moduleType === 2
  ? [
      { mark: '餐', label: '餐厅与菜品', copy: '维护餐厅信息、菜品和餐位时段' },
      { mark: '订', label: '餐饮订单', copy: '查看并处理游客餐位预订' },
      { mark: '店', label: '店铺运营', copy: '在商家后台维护日常经营内容' },
    ]
  : [
      { mark: '店', label: '店铺管理', copy: '维护店铺基础信息和经营内容' },
      { mark: '货', label: '商品与服务', copy: '发布并维护你的商品或服务' },
      { mark: '单', label: '订单管理', copy: '查看并处理游客订单' },
    ],
);
function moduleText(value: number) { return ({ 1: '衣 · 非遗商品', 2: '食 · 餐饮美食', 3: '住 · 住宿预订', 4: '行 · 线路票务' } as Record<number, string>)[value] || '商家'; }
onMounted(async () => {
  merchant.value = await request('/app/admin/merchant-application/center').catch(() => null);
  pending.value = false;
});
useSeo({ title: '商家中心｜乌东文旅', description: '进入乌东文旅商家后台，管理店铺与订单。' });
</script>
