<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="个人中心" />
    <div v-if="!authorized" class="max-w-xl">
      <p class="eyebrow">我的乌东</p>
      <h1 class="section-title">登录后，旅程会记得你。</h1>
      <NuxtLink
        to="/login"
        class="mt-8 inline-block rounded-full bg-clay px-5 py-3 text-sm text-white"
        >登录</NuxtLink
      >
    </div>
    <div v-else>
      <div class="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p class="eyebrow">我的乌东</p>
          <h1 class="section-title">
            你好，{{
              auth.user.value?.nickName || auth.user.value?.phone || "旅人"
            }}
          </h1>
        </div>
        <button
          class="text-sm text-muted hover:text-clay"
          @click="
            auth.logout();
            navigateTo('/');
          "
        >
          退出登录
        </button>
      </div>
      <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="card in cards"
          :key="card.to"
          :to="card.to"
          class="border border-[var(--line)] bg-surface p-6 transition hover:-translate-y-1 hover:border-clay"
          ><span class="text-3xl font-display">{{ card.mark }}</span>
          <h2 class="mt-8 text-lg">{{ card.label }}</h2>
          <p class="mt-2 text-sm text-muted">{{ card.copy }}</p></NuxtLink
        >
      </div>
      <div class="mt-12 border-y border-[var(--line)] py-8">
        <p class="eyebrow">商家服务</p>
        <div class="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 class="font-display text-2xl">{{ merchant ? merchant.shopName : '把你的乌东好生意带到线上' }}</h2>
            <p class="mt-2 text-sm text-muted">{{ merchant ? '已开通商家中心，可管理店铺、商品或餐厅及订单。' : '提交资质后由平台审核；审核通过可登录商家后台管理商品或餐厅。' }}</p>
          </div>
          <NuxtLink :to="merchant ? '/account/merchant-center' : '/account/merchant-application'" class="rounded-full bg-clay px-5 py-3 text-sm text-white">{{ merchant ? '进入商家中心' : '申请商家入驻' }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
const auth = useAuth();
const { request } = useApi();
const authorized = computed(() => Boolean(auth.token.value));
const merchant = ref<any>(null);
const cards = [
  { mark: "单", label: "我的订单", copy: "查看预订与购买记录", to: "/orders" },
  {
    mark: "址",
    label: "收货地址",
    copy: "管理商品配送地址",
    to: "/account/addresses",
  },
  {
    mark: "藏",
    label: "我的收藏",
    copy: "保存喜欢的去处",
    to: "/account/favorites",
  },
  { mark: "信", label: "消息中心", copy: "查看旅途通知", to: "/community" },
];
onMounted(async () => {
  if (!authorized.value) return;
  merchant.value = await request('/app/admin/merchant-application/center').catch(() => null);
});
useSeo({
  title: "个人中心｜乌东文旅",
  description: "管理你的乌东文旅账号、订单、地址和收藏。",
});
</script>
