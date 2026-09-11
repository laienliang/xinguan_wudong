<template>
  <section class="container py-12">
    <Breadcrumbs :label="section" />
    <EmptyState v-if="!item" />
    <div v-else-if="pending" class="py-24 text-center text-muted">
      正在加载详情…
    </div>
    <template v-else
      ><div class="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <img
          :src="imageUrl(item.mainImage as string)"
          :alt="title"
          class="aspect-[4/3] h-full w-full bg-sand object-cover"
        />
        <div class="flex flex-col justify-center">
          <p class="eyebrow">{{ section }}</p>
          <h1 class="mt-3 font-display text-4xl leading-tight md:text-6xl">
            {{ title }}
          </h1>
          <p class="mt-5 leading-8 text-muted">
            {{
              item.intro ||
              item.subtitle ||
              item.content ||
              "关于乌东的一段等待你亲自抵达的故事。"
            }}
          </p>
          <p v-if="item.price" class="mt-6 text-2xl text-clay">
            ¥{{ item.price }}
          </p>
          <p v-if="item.score" class="mt-3 text-sm text-clay">
            ★ {{ item.score }} 分
          </p>
          <button
            class="mt-8 w-fit rounded-full bg-clay px-6 py-3 text-sm text-white"
            @click="$emit('action', item)"
          >
            {{ actionLabel }}
          </button>
          <p v-if="actionNotice" class="mt-3 text-sm text-moss">
            {{ actionNotice }}
          </p>
        </div>
      </div>
      <div class="mt-14 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <article>
          <h2 class="font-display text-3xl">关于这里</h2>
          <div
            class="mt-5 whitespace-pre-line leading-8 text-muted"
            v-html="safeDetail"
          />
        </article>
        <div>
          <GeoMap
            :title="title"
            :address="item.address as string"
            :latitude="Number(item.latitude)"
            :longitude="Number(item.longitude)"
          />
        </div>
      </div>
      <NearbyRecommendations :item="item" :schema="schema" />
    </template>
  </section>
</template>
<script setup lang="ts">
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import EmptyState from "~/components/common/EmptyState.vue";
import GeoMap from "~/components/geo/GeoMap.vue";
import NearbyRecommendations from "~/components/geo/NearbyRecommendations.vue";
import type { PlaceRecord } from "~/types/api";
const { imageUrl } = useMedia();
const props = defineProps<{
  section: string;
  item: PlaceRecord | null | undefined;
  pending: boolean;
  schema: string;
  actionLabel: string;
  actionNotice?: string;
}>();
defineEmits<{ action: [item: PlaceRecord] }>();
const title = computed(
  () => props.item?.name || props.item?.title || props.section,
);
const safeDetail = computed(() =>
  String(
    props.item?.detail || props.item?.intro || props.item?.content || "",
  ).replace(/<script[\s\S]*?<\/script>/gi, ""),
);
const jsonLd = computed(() =>
  props.item ? jsonLdFor(props.item, props.schema) : {},
);
useHead(() => ({
  script: props.item
    ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd.value) }]
    : [],
}));
useSeo({
  title: `${title.value}｜乌东文旅`,
  description: String(props.item?.intro || props.item?.detail || props.section),
  image: props.item?.mainImage,
});
</script>
