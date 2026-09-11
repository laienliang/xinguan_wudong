import type { ApiEnvelope } from "~/types/api";

export function useApi() {
  const config = useRuntimeConfig();
  const auth = useState<string | null>("tourist-token", () => null);

  async function request<T>(
    path: string,
    options: Parameters<typeof $fetch>[1] = {},
  ) {
    const headers = new Headers((options as Record<string, any>).headers || {});
    if (auth.value) headers.set("Authorization", `Bearer ${auth.value}`);

    // 在服务端使用内部网络地址，在客户端使用公共地址
    const baseURL = import.meta.server
      ? (process.env.NITRO_API_BASE || config.public.apiBase)
      : config.public.apiBase;

    const response = await $fetch<ApiEnvelope<T>>(path, {
      ...(options as any),
      baseURL,
      headers,
      ignoreResponseError: true,
    });
    if (response.code === 1001) {
      auth.value = null;
      if (import.meta.client) {
        localStorage.removeItem("wudong-token");
        localStorage.removeItem("wudong-user");
        await navigateTo("/login");
      }
    }
    if (response.code !== 0 && response.code !== 1000) {
      throw new Error(response.message || "请求失败");
    }
    return response.data;
  }

  return { request, token: auth };
}
