<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="订单详情" />
    <div v-if="pending" class="py-20 text-center text-muted">正在加载订单…</div>
    <EmptyState v-else-if="!order" />
    <article
      v-else
      class="max-w-3xl border border-[var(--line)] bg-surface p-7 md:p-10"
    >
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="text-sm text-muted">订单号</p>
          <h1 class="mt-1 font-display text-2xl">
            {{ order.orderNo || order.id }}
          </h1>
        </div>
        <OrderStatus :status="Number(order.status)" />
      </div>
      <div
        class="mt-10 grid gap-5 border-t border-[var(--line)] pt-7 sm:grid-cols-2"
      >
        <div>
          <p class="text-sm text-muted">订单金额</p>
          <p class="mt-2 text-2xl text-clay">
            ¥{{ order.payAmount || order.totalAmount || 0 }}
          </p>
        </div>
        <div>
          <p class="text-sm text-muted">创建时间</p>
          <p class="mt-2">{{ order.createTime || "—" }}</p>
        </div>
      </div>
    </article>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import OrderStatus from "~/components/order/OrderStatus.vue";
const route = useRoute();
const { detail } = useOrders();
const { data: order, pending } = await useAsyncData(
  `order-${route.params.id}`,
  () => detail(String(route.params.id)).catch(() => null),
);
useSeo({ title: "订单详情｜乌东文旅", description: "查看乌东文旅订单详情。" });
</script>
