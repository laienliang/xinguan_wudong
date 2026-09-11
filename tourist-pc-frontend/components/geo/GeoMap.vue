<template>
  <section class="overflow-hidden border border-[var(--line)] bg-sand">
    <div v-if="showMap" ref="mapElement" class="aspect-[16/7] min-h-56" />
    <div
      v-else
      class="flex aspect-[16/7] items-center justify-center bg-[url('/hero-wudong.svg')] bg-cover p-6 text-center"
    >
      <div class="bg-paper/90 p-5">
        <p class="font-display text-xl">{{ title }}</p>
        <p class="mt-2 text-sm text-muted">{{ address || "乌东村" }}</p>
        <p v-if="mapFailed" class="mt-2 text-xs text-muted">
          地图加载失败，已切换为地址模式
        </p>
        <a
          v-if="hasCoordinates"
          class="mt-4 inline-block text-sm text-clay"
          :href="navigationUrl"
          target="_blank"
          rel="noopener"
          >打开地图导航 →</a
        >
        <p v-else class="mt-3 text-xs text-muted">暂未配置地点坐标</p>
      </div>
    </div>
    <div
      v-if="showMap"
      class="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] bg-paper px-4 py-3"
    >
      <div>
        <p class="font-display text-lg">{{ title }}</p>
        <p class="mt-1 text-xs text-muted">{{ address || "乌东村" }}</p>
      </div>
      <a
        class="text-sm text-clay"
        :href="navigationUrl"
        target="_blank"
        rel="noopener"
        >打开地图导航 →</a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
type AMapInstance = { destroy?: () => void };
type AMapConstructor = {
  Map: new (
    element: HTMLElement,
    options: Record<string, unknown>,
  ) => AMapInstance;
  Marker: new (options: Record<string, unknown>) => unknown;
};

declare global {
  interface Window {
    AMap?: AMapConstructor;
  }
}

const props = defineProps<{
  title: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}>();
const config = useRuntimeConfig();
const mapElement = ref<HTMLElement | null>(null);
const mapFailed = ref(false);
const mapInstance = shallowRef<AMapInstance | null>(null);
const hasCoordinates = computed(
  () =>
    Number.isFinite(props.latitude) &&
    Number.isFinite(props.longitude) &&
    Boolean(props.latitude) &&
    Boolean(props.longitude),
);
const showMap = computed(
  () =>
    hasCoordinates.value && Boolean(config.public.amapKey) && !mapFailed.value,
);
const navigationUrl = computed(
  () =>
    `https://uri.amap.com/marker?position=${props.longitude},${props.latitude}&name=${encodeURIComponent(props.title)}`,
);

let amapLoader: Promise<void> | null = null;

function loadAmap(key: string) {
  if (window.AMap) return Promise.resolve();
  if (amapLoader) return amapLoader;
  amapLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(key)}`;
    script.async = true;
    script.onload = () =>
      window.AMap ? resolve() : reject(new Error("高德地图脚本不可用"));
    script.onerror = () => reject(new Error("高德地图脚本加载失败"));
    document.head.appendChild(script);
  });
  return amapLoader;
}

onMounted(async () => {
  if (!showMap.value || !mapElement.value) return;
  try {
    await loadAmap(config.public.amapKey);
    const AMap = window.AMap;
    if (!AMap || !mapElement.value) throw new Error("高德地图未初始化");
    const position: [number, number] = [
      Number(props.longitude),
      Number(props.latitude),
    ];
    const map = new AMap.Map(mapElement.value, {
      center: position,
      zoom: 14,
      resizeEnable: true,
    });
    new AMap.Marker({ map, position, title: props.title });
    mapInstance.value = map;
  } catch {
    mapFailed.value = true;
  }
});

onBeforeUnmount(() => mapInstance.value?.destroy?.());
</script>
