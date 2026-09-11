<template>
  <section class="container flex min-h-[620px] items-center justify-center py-16">
    <div class="w-full max-w-md border border-[var(--line)] bg-surface p-8 md:p-12">
      <p class="eyebrow">加入乌东</p>
      <h1 class="mt-3 font-display text-4xl">注册游客账号</h1>
      <p class="mt-3 text-sm leading-6 text-muted">用手机号创建账号，开始规划你的乌东之旅。</p>
      <form class="mt-8 grid gap-5" @submit.prevent="submit">
        <label class="grid gap-2 text-sm">昵称<input v-model.trim="form.nickName" required maxlength="30" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="例如：阿梨的周末旅行" /></label>
        <label class="grid gap-2 text-sm">手机号<input v-model.trim="form.phone" required inputmode="tel" pattern="1[0-9]{10}" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="请输入11位手机号" /></label>
        <label class="grid gap-2 text-sm">密码<input v-model="form.password" required minlength="6" type="password" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="至少6位" /></label>
        <p v-if="error" class="text-sm text-clay">{{ error }}</p>
        <button class="rounded-full bg-clay px-5 py-3 text-sm text-white disabled:opacity-50" :disabled="pending">{{ pending ? '注册中…' : '注册并登录' }}</button>
      </form>
      <p class="mt-6 text-sm text-muted">已有账号？<NuxtLink to="/login" class="text-clay hover:underline">去登录</NuxtLink></p>
    </div>
  </section>
</template>
<script setup lang="ts">
const form = reactive({ nickName: '', phone: '', password: '' });
const pending = ref(false);
const error = ref('');
const auth = useAuth();
useSeo({ title: '注册｜乌东文旅', description: '注册乌东文旅游客账号。' });
async function submit() {
  pending.value = true;
  error.value = '';
  try {
    await auth.register(form.phone, form.password, form.nickName);
    await navigateTo('/account');
  } catch (e) {
    error.value = e instanceof Error ? e.message : '注册失败，请稍后重试';
  } finally {
    pending.value = false;
  }
}
</script>
