import type { PageResult, PlaceRecord } from "~/types/api";

export function useCatalog(
  kind: string,
  endpoint: string,
  title: string,
  description: string,
) {
  const route = useRoute();
  const { position } = useGeoLocation();
  const query = computed(() => ({
    page: Number(route.query.page || 1),
    size: 12,
    keyWord: String(route.query.q || ""),
    categoryId: route.query.categoryId
      ? Number(route.query.categoryId)
      : undefined,
    status: 1,
  }));
  const radius = computed(() =>
    Math.min(Math.max(Number(route.query.distance || 3), 1), 10),
  );
  const nearbyEndpoints: Record<string, string> = {
    restaurant: "/app/food/restaurant/nearby",
    hotel: "/app/hotel/house/nearby",
    scenic: "/app/tour/scenic-spot/nearby",
  };
  const { request } = useApi();
  const { data, pending, error, refresh } = useAsyncData<
    PageResult<PlaceRecord> | PlaceRecord[]
  >(
    kind + "-catalog",
    () => {
      const nearby = nearbyEndpoints[kind];
      if (nearby && position.value) {
        return request<PlaceRecord[]>(nearby, {
          method: "GET",
          query: {
            longitude: position.value.longitude,
            latitude: position.value.latitude,
            distance: radius.value,
            limit: query.value.size,
          },
        }).then((items) =>
          items.map((item) => ({
            ...item,
            distance: Number(item.distance || 0) * 1000,
          })),
        );
      }
      return request<PageResult<PlaceRecord> | PlaceRecord[]>(endpoint, {
        method: "POST",
        body: query.value,
      });
    },
    { watch: [query, radius, position] },
  );
  const items = computed(() =>
    Array.isArray(data.value) ? data.value : data.value?.list || [],
  );
  useSeo({ title: `${title}｜乌东文旅`, description });
  return { items, pending, error, refresh, query };
}
