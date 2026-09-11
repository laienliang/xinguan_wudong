<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="我的订单" />
    <p class="eyebrow">我的行程</p>
    <h1 class="section-title">订单记录</h1>
    <div v-if="!authorized" class="mt-12">
      <EmptyState />
      <div class="text-center">
        <NuxtLink
          to="/login"
          class="inline-block rounded-full bg-clay px-5 py-3 text-sm text-white"
          >登录查看订单</NuxtLink
        >
      </div>
    </div>
    <div v-else-if="pending" class="py-20 text-center text-muted">
      正在加载订单…
    </div>
    <div v-else-if="!orders.length" class="mt-12"><EmptyState /></div>
    <div v-else class="mt-10 grid gap-4">
      <article
        v-for="order in orders"
        :key="order.id"
        class="border border-[var(--line)] bg-surface p-5"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-sm text-muted">
            订单号 {{ order.orderNo || order.id }}
          </p>
          <OrderStatus :status="Number(order.status)" />
        </div>
        <div class="mt-5 flex items-end justify-between">
          <p class="font-display text-2xl">
            {{ order.type === 1 ? "商品订单" : "文旅预订" }}
          </p>
          <p class="text-lg text-clay">
            ¥{{ order.payAmount || order.totalAmount || 0 }}
          </p>
        </div>
        <div class="mt-5 flex justify-end gap-3 text-sm">
          <NuxtLink
            :to="`/orders/${order.orderNo || order.id}`"
            class="rounded-full border border-[var(--ink)] px-4 py-2"
            >查看详情</NuxtLink
          ><button
            v-if="Number(order.status) === 1"
            class="rounded-full bg-clay px-4 py-2 text-white"
            @click="cancelOrder(String(order.orderNo || order.id))"
          >
            取消订单
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import OrderStatus from "~/components/order/OrderStatus.vue";
import type { PlaceRecord } from "~/types/api";
const auth = useAuth();
const authorized = computed(() => Boolean(auth.token.value));
const orders = ref<PlaceRecord[]>([]);
const pending = ref(false);
const { list, cancel } = useOrders();
onMounted(async () => {
  if (!authorized.value) return;
  pending.value = true;
  try {
    orders.value = await list();
  } finally {
    pending.value = false;
  }
});
async function cancelOrder(id: string) {
  await cancel(id);
  orders.value = orders.value.map((o) =>
    String(o.orderNo || o.id) === id ? { ...o, status: 3 } : o,
  );
}
useSeo({
  title: "我的订单｜乌东文旅",
  description: "查看乌东文旅的商品、餐饮、住宿和出行订单。",
});
</script>
