import type { PageResult, PlaceRecord } from "~/types/api";

export function useCart() {
  const { request } = useApi();
  const items = useState<PlaceRecord[]>("cart-items", () => []);
  const total = computed(() =>
    items.value.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
      0,
    ),
  );
  const refresh = async () => {
    const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>(
      "/app/cart/list",
      { method: "POST", body: {} },
    );
    items.value = Array.isArray(data) ? data : data.list || [];
    return items.value;
  };
  const updateQuantity = async (id: string | number, quantity: number) => {
    await request(`/app/cart/${id}/quantity`, {
      method: "PUT",
      body: { quantity: Math.max(1, quantity) },
    });
    await refresh();
  };
  const toggle = async (id: string | number) => {
    await request(`/app/cart/${id}/toggle`, { method: "PUT" });
    await refresh();
  };
  const remove = async (id: string | number) => {
    await request("/app/cart/delete", { method: "POST", body: { ids: [id] } });
    await refresh();
  };
  const clear = async () => {
    await request("/app/cart/clear", { method: "DELETE" });
    items.value = [];
  };
  return { items, total, refresh, updateQuantity, toggle, remove, clear };
}
