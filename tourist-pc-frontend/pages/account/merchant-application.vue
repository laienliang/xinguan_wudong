<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="商家入驻" />
    <div v-if="!authorized" class="max-w-xl">
      <h1 class="section-title">先登录，再提交商家入驻申请。</h1>
      <NuxtLink to="/login" class="mt-8 inline-block rounded-full bg-clay px-5 py-3 text-sm text-white">去登录</NuxtLink>
    </div>
    <div v-else class="mx-auto max-w-2xl">
      <p class="eyebrow">商家入驻</p>
      <h1 class="section-title">申请商家入驻</h1>
      <p class="mt-3 text-sm leading-6 text-muted">提交身份证、营业执照和店铺资料。平台审核通过后将生成商家后台账号。</p>
      <div v-if="loading" class="mt-10 text-sm text-muted">正在读取申请状态…</div>
      <div v-else-if="applications.length" class="mt-8 grid gap-3">
        <article v-for="item in applications" :key="item.id" class="border border-[var(--line)] bg-surface p-5">
          <div class="flex flex-wrap items-center justify-between gap-3"><h2 class="font-display text-xl">{{ item.shopName }}</h2><span class="text-sm" :class="statusClass(item.status)">{{ statusText(item.status) }}</span></div>
          <p class="mt-2 text-sm text-muted">{{ moduleText(item.moduleType) }} · 提交于 {{ item.createTime }}</p>
          <p v-if="item.rejectReason" class="mt-3 text-sm text-clay">驳回原因：{{ item.rejectReason }}</p>
        </article>
      </div>
      <form class="mt-10 grid gap-6 border-t border-[var(--line)] pt-8" @submit.prevent="submit">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="grid gap-2 text-sm sm:col-span-2">店铺名称<input v-model.trim="form.shopName" required maxlength="100" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="例如：乌东苗味长桌宴" /></label>
          <label class="grid gap-2 text-sm">经营类型<select v-model.number="form.moduleType" required class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay"><option :value="1">衣 · 非遗商品</option><option :value="2">食 · 餐饮美食</option><option :value="3">住 · 住宿预订</option><option :value="4">行 · 线路票务</option></select></label>
          <label class="grid gap-2 text-sm">联系人<input v-model.trim="form.contactName" required maxlength="50" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="姓名" /></label>
          <label class="grid gap-2 text-sm">联系电话<input v-model.trim="form.contactPhone" required pattern="1[0-9]{10}" inputmode="tel" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="11位手机号" /></label>
          <label class="grid gap-2 text-sm">身份证号<input v-model.trim="form.idCard" required minlength="18" maxlength="18" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="18位身份证号" /></label>
          <label class="grid gap-2 text-sm">身份证正面图片地址<input v-model.trim="form.idCardFront" required type="url" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="https://…" /></label>
          <label class="grid gap-2 text-sm">身份证反面图片地址<input v-model.trim="form.idCardBack" required type="url" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="https://…" /></label>
          <label class="grid gap-2 text-sm sm:col-span-2">营业执照图片地址<input v-model.trim="form.businessLicense" required type="url" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="https://…" /></label>
        </div>
        <p v-if="error" class="text-sm text-clay">{{ error }}</p>
        <p v-if="success" class="text-sm text-emerald-700">{{ success }}</p>
        <button class="w-fit rounded-full bg-clay px-5 py-3 text-sm text-white disabled:opacity-50" :disabled="pending">{{ pending ? '提交中…' : '提交入驻申请' }}</button>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';
const auth = useAuth();
const { request } = useApi();
const authorized = computed(() => Boolean(auth.token.value));
const applications = ref<any[]>([]);
const loading = ref(false);
const pending = ref(false);
const error = ref('');
const success = ref('');
const form = reactive({ shopName: '', moduleType: 2, idCard: '', idCardFront: '', idCardBack: '', businessLicense: '', contactName: '', contactPhone: '' });
function moduleText(value: number) { return ({ 1: '衣 · 非遗商品', 2: '食 · 餐饮美食', 3: '住 · 住宿预订', 4: '行 · 线路票务' } as Record<number, string>)[value] || '未知类型'; }
function statusText(value: number) { return ({ 1: '待审核', 2: '审核通过', 3: '审核驳回' } as Record<number, string>)[value] || '未知状态'; }
function statusClass(value: number) { return value === 2 ? 'text-emerald-700' : value === 3 ? 'text-clay' : 'text-amber-700'; }
async function load() { if (!authorized.value) return; loading.value = true; try { applications.value = await request<any[]>('/app/admin/merchant-application/mine'); } catch (e) { error.value = e instanceof Error ? e.message : '申请状态读取失败'; } finally { loading.value = false; } }
async function submit() { pending.value = true; error.value = ''; success.value = ''; try { await request('/app/admin/merchant-application/submit', { method: 'POST', body: form }); success.value = '申请已提交，平台审核通过后会为你开通商家后台账号。'; await load(); } catch (e) { error.value = e instanceof Error ? e.message : '提交失败，请稍后重试'; } finally { pending.value = false; } }
onMounted(load);
useSeo({ title: '商家入驻｜乌东文旅', description: '提交乌东文旅商家入驻申请。' });
</script>
