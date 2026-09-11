<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="购物车" />
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="eyebrow">我的选择</p>
        <h1 class="section-title">把喜欢的带回家</h1>
      </div>
      <button
        v-if="items.length"
        class="text-sm text-muted hover:text-clay"
        @click="clear"
      >
        清空购物车
      </button>
    </div>
    <div
      v-if="!authorized"
      class="mt-12 border border-dashed border-[var(--line)] py-16 text-center"
    >
      <p class="font-display text-2xl">登录后查看购物车</p>
      <NuxtLink
        to="/login"
        class="mt-5 inline-block rounded-full bg-clay px-5 py-3 text-sm text-white"
        >去登录</NuxtLink
      >
    </div>
    <div v-else-if="!items.length" class="mt-12"><EmptyState /></div>
    <div v-else class="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
      <div>
        <CartLine
          v-for="item in items"
          :key="item.id"
          :item="item"
          @quantity="(value) => updateQuantity(item.id, value)"
          @remove="remove(item.id)"
        />
      </div>
      <aside class="h-fit border border-[var(--line)] bg-surface p-6">
        <p class="text-sm text-muted">商品合计</p>
        <p class="mt-2 font-display text-3xl text-clay">
          ¥{{ total.toFixed(2) }}
        </p>
        <label class="mt-6 grid gap-2 text-sm">
          收货地址
          <select
            v-model="addressId"
            class="border border-[var(--line)] bg-paper px-3 py-2"
          >
            <option value="">请选择收货地址</option>
            <option
              v-for="address in addresses"
              :key="address.id"
              :value="String(address.id)"
            >
              {{ address.name }} · {{ address.phone }} · {{ address.city
              }}{{ address.district }}{{ address.detail }}
            </option>
          </select>
        </label>
        <p v-if="error" class="mt-3 text-sm text-clay">{{ error }}</p>
        <button
          class="mt-6 w-full rounded-full bg-clay px-5 py-3 text-sm text-white disabled:opacity-50"
          :disabled="checkingOut || !addressId"
          @click="checkout"
        >
          {{ checkingOut ? "正在创建订单…" : "确认订单" }}
        </button>
      </aside>
    </div>
  </section>
</template>
<script setup lang="ts">
import CartLine from "~/components/cart/CartLine.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import type { PageResult, PlaceRecord } from "~/types/api";
const auth = useAuth();
const authorized = computed(() => Boolean(auth.token.value));
const { items, total, refresh, updateQuantity, remove, clear } = useCart();
const { request } = useApi();
const addresses = ref<PlaceRecord[]>([]);
const addressId = ref("");
const checkingOut = ref(false);
const error = ref("");
onMounted(async () => {
  if (!authorized.value) return;
  await refresh().catch(() => {});
  const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>(
    "/app/user/address/list",
    {
      method: "POST",
      body: {},
    },
  ).catch(() => []);
  addresses.value = Array.isArray(data) ? data : data.list || [];
  addressId.value = String(
    addresses.value.find((item) => Number(item.isDefault) === 1)?.id || "",
  );
});
async function checkout() {
  if (!auth.requireAuth()) return;
  if (!addressId.value) return;
  checkingOut.value = true;
  error.value = "";
  try {
    const order = await request<{ orderNo: string }>(
      "/app/shop/order/checkout",
      {
        method: "POST",
        body: { addressId: addressId.value },
      },
    );
    items.value = [];
    await navigateTo(`/orders/${order.orderNo}`);
  } catch (reason) {
    error.value =
      reason instanceof Error ? reason.message : "创建订单失败，请稍后重试";
  } finally {
    checkingOut.value = false;
  }
}
useSeo({
  title: "购物车｜乌东文旅",
  description: "查看和管理你挑选的乌东非遗好物。",
});
</script>
