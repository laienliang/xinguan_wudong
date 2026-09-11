import type { PageResult, PlaceRecord } from '~/types/api';

export function useOrders() {
  const { request } = useApi();
  async function list(filters: Record<string, unknown> = {}) {
    const data = await request<PageResult<PlaceRecord> | PlaceRecord[]>('/app/order/page', { method: 'POST', body: { page: 1, size: 20, ...filters } });
    return Array.isArray(data) ? data : data.list || [];
  }
  async function detail(orderNo: string) { return request<PlaceRecord>(`/app/order/${orderNo}/detail`, { method: 'GET' }); }
  async function cancel(orderNo: string) { return request(`/app/order/${orderNo}/cancel`, { method: 'PUT' }); }
  return { list, detail, cancel };
}
