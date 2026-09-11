<template>
  <section class="container py-12 md:py-16">
    <Breadcrumbs label="预订确认" />
    <div v-if="pending" class="py-20 text-center text-muted">
      正在加载预订信息…
    </div>
    <EmptyState v-else-if="!item || !booking" />
    <form v-else class="max-w-2xl" @submit.prevent="submit">
      <p class="eyebrow">{{ booking.eyebrow }}</p>
      <h1 class="section-title">{{ booking.title }}</h1>
      <article class="mt-10 border border-[var(--line)] bg-surface p-6">
        <h2 class="font-display text-2xl">{{ item.name || item.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-muted">
          {{ item.intro || item.address || "乌东文旅服务" }}
        </p>
        <p v-if="unitPrice" class="mt-5 text-xl text-clay">
          ¥{{ unitPrice }} {{ booking.unitLabel }}
        </p>
      </article>
      <label v-if="options.length" class="mt-8 grid gap-2 text-sm">
        {{ booking.optionLabel }}
        <select
          v-model="optionId"
          class="border border-[var(--line)] bg-paper px-3 py-3 outline-none focus:border-clay"
        >
          <option
            v-for="option in options"
            :key="option.id"
            :value="String(option.id)"
          >
            {{ option.name
            }}<template v-if="option.price"> · ¥{{ option.price }}</template>
          </option>
        </select>
      </label>
      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <label class="grid gap-2 text-sm">
          {{ booking.dateLabel }}
          <input
            v-model="date"
            required
            type="date"
            :min="today"
            class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay"
          />
        </label>
        <label class="grid gap-2 text-sm">
          人数
          <input
            v-model.number="people"
            required
            min="1"
            type="number"
            class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay"
          />
        </label>
      </div>
      <div v-if="route.params.type === 'restaurant'" class="mt-5 grid gap-5 sm:grid-cols-2">
        <label class="grid gap-2 text-sm">联系人<input v-model.trim="contactName" required class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="请输入联系人姓名" /></label>
        <label class="grid gap-2 text-sm">联系电话<input v-model.trim="contactPhone" required inputmode="tel" pattern="1[0-9]{10}" class="border-b border-[var(--line)] bg-transparent py-3 outline-none focus:border-clay" placeholder="请输入11位手机号" /></label>
      </div>
      <label class="mt-5 grid gap-2 text-sm">
        备注
        <textarea
          v-model="remark"
          rows="3"
          class="border border-[var(--line)] bg-transparent p-3 outline-none focus:border-clay"
          :placeholder="booking.remarkPlaceholder"
        />
      </label>
      <p class="mt-6 text-sm text-muted">
        提交后会生成待支付订单，支付能力暂未配置。
      </p>
      <p v-if="error" class="mt-4 text-sm text-clay">{{ error }}</p>
      <button
        class="mt-7 rounded-full bg-clay px-6 py-3 text-sm text-white disabled:opacity-50"
        :disabled="submitting"
      >
        {{ submitting ? "正在创建订单…" : booking.submitLabel }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import type { PlaceRecord } from "~/types/api";

const route = useRoute();
const auth = useAuth();
const { request } = useApi();
const definitions = {
  restaurant: {
    endpoint: "/app/food/restaurant/info",
    type: 2,
    eyebrow: "餐位预订",
    title: "预订餐位",
    dateLabel: "用餐日期",
    submitLabel: "创建餐位订单",
    remarkPlaceholder: "如用餐时段、忌口或特殊需求",
    optionEndpoint: "/app/food/time-slot/list",
    optionField: "restaurantId",
    optionLabel: "用餐时段",
    unitLabel: "/ 人",
  },
  hotel: {
    endpoint: "/app/hotel/house/info",
    type: 3,
    eyebrow: "民宿预订",
    title: "预订民宿",
    dateLabel: "入住日期",
    submitLabel: "创建住宿订单",
    remarkPlaceholder: "如入住天数、房型或特殊需求",
    optionEndpoint: "/app/hotel/room_type/list",
    optionField: "houseId",
    optionLabel: "房型",
    unitLabel: "/ 间",
  },
  scenic: {
    endpoint: "/app/tour/scenic-spot/info",
    type: 4,
    eyebrow: "景区门票",
    title: "预订门票",
    dateLabel: "使用日期",
    submitLabel: "创建门票订单",
    remarkPlaceholder: "如票种或游客信息",
    optionEndpoint: "/app/tour/ticket-type/list",
    optionField: "scenicSpotId",
    optionLabel: "票种",
    unitLabel: "/ 人",
  },
  route: {
    endpoint: "/app/tour/route/info",
    type: 5,
    eyebrow: "旅行线路",
    title: "报名线路",
    dateLabel: "出发日期",
    submitLabel: "创建线路订单",
    remarkPlaceholder: "如同行人或接送需求",
    optionLabel: "",
    unitLabel: "/ 人",
    optionEndpoint: undefined,
    optionField: undefined,
  },
} as const;
const booking = computed(
  () => definitions[route.params.type as keyof typeof definitions],
);
const { data: item, pending } = await useAsyncData<PlaceRecord | null>(
  () => "booking-" + route.params.type + "-" + route.params.id,
  () => {
    if (!booking.value) return Promise.resolve(null);
    return request<PlaceRecord>(booking.value.endpoint, {
      method: "GET",
      query: { id: route.params.id },
    }).catch(() => null);
  },
);
const { data: optionsData } = await useAsyncData(
  () => "booking-options-" + route.params.type + "-" + route.params.id,
  () => {
    if (!booking.value?.optionEndpoint || !booking.value.optionField) {
      return Promise.resolve([] as PlaceRecord[]);
    }
    return request<PlaceRecord[]>(booking.value.optionEndpoint, {
      method: "POST",
      body: { [booking.value.optionField]: route.params.id, status: 1 },
    }).catch(() => []);
  },
);
const options = computed(() => optionsData.value || []);
const optionId = ref("");
watch(
  options,
  (value) => {
    if (!optionId.value && value[0]) optionId.value = String(value[0].id);
  },
  { immediate: true },
);
const today = new Date().toISOString().slice(0, 10);
const date = ref(today);
const people = ref(1);
const remark = ref("");
const contactName = ref(auth.user.value?.nickName || '');
const contactPhone = ref(auth.user.value?.phone || '');
const submitting = ref(false);
const error = ref("");
const selectedOption = computed(() =>
  options.value.find((option) => String(option.id) === optionId.value),
);
const unitPrice = computed(() =>
  Number(
    selectedOption.value?.price ||
      item.value?.price ||
      item.value?.avgPrice ||
      0,
  ),
);

onMounted(() => {
  if (!auth.requireAuth()) return;
});

async function submit() {
  if (!auth.requireAuth() || !booking.value || !item.value) return;
  submitting.value = true;
  error.value = "";
  try {
    if (route.params.type === 'restaurant') {
      await request('/app/food/booking/create', {
        method: 'POST',
        body: {
          restaurantId: route.params.id,
          timeSlotId: Number(optionId.value),
          bookingDate: date.value,
          peopleCount: people.value,
          contactName: contactName.value,
          contactPhone: contactPhone.value,
          remark: remark.value,
        },
      });
      await navigateTo('/orders');
      return;
    }
    const total = unitPrice.value * people.value;
    await request("/app/order/add", {
      method: "POST",
      body: {
        type: booking.value.type,
        totalAmount: total,
        payAmount: total,
        remark: [
          booking.value.title,
          item.value.name || item.value.title,
          "日期：" + date.value,
          "人数：" + people.value,
          selectedOption.value?.name
            ? booking.value.optionLabel + "：" + selectedOption.value.name
            : "",
          remark.value,
        ]
          .filter(Boolean)
          .join("；"),
      },
    });
    await navigateTo("/orders");
  } catch (reason) {
    error.value =
      reason instanceof Error ? reason.message : "创建订单失败，请稍后重试";
  } finally {
    submitting.value = false;
  }
}

useSeo({
  title: "预订确认｜乌东文旅",
  description: "确认乌东文旅的餐饮、住宿、门票与旅行线路预订。",
});
</script>
