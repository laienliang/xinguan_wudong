<template>
  <section class="container flex min-h-[620px] items-center justify-center py-16">
    <div class="w-full max-w-md border border-[var(--line)] bg-surface p-8 md:p-12">
      <p class="eyebrow">欢迎来到乌东</p>
      <h1 class="mt-3 font-display text-4xl">登录乌东</h1>
      <p class="mt-3 text-sm leading-6 text-muted">登录后可以管理订单、收藏、地址和商家申请。</p>
      <form class="mt-8 grid gap-5" @submit.prevent="submit">
        <label class="grid gap-2 text-sm">手机号<input v-model="phone" required inputmode="tel" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="请输入手机号" /></label>
        <label class="grid gap-2 text-sm">密码<input v-model="password" required type="password" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="请输入密码" /></label>
        <p v-if="error" class="text-sm text-clay">{{ error }}</p>
        <button class="rounded-full bg-clay px-5 py-3 text-sm text-white disabled:opacity-50" :disabled="pending">{{ pending ? '登录中…' : '登录' }}</button>
      </form>
      <p class="mt-6 text-sm text-muted">还没有账号？<NuxtLink to="/register" class="text-clay hover:underline">立即注册</NuxtLink></p>
    </div>
  </section>
</template>
<script setup lang="ts">
const phone = ref('');
const password = ref('');
const pending = ref(false);
const error = ref('');
const auth = useAuth();
useSeo({ title: '登录｜乌东文旅', description: '登录乌东文旅，管理你的订单与收藏。' });
async function submit() {
  pending.value = true;
  error.value = '';
  try {
    await auth.login(phone.value, password.value);
    await navigateTo('/account');
  } catch (e) {
    error.value = e instanceof Error ? e.message : '登录失败，请稍后重试';
  } finally {
    pending.value = false;
  }
}
</script>
