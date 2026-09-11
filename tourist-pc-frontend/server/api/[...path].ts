import {
  getMethod,
  getRequestHeaders,
  getRequestURL,
  readBody,
  setResponseStatus,
} from "h3";

/**
 * 统一代理游客端请求，避免浏览器跨域且让 SSR 使用同一套 API 地址。
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const path = event.context.params?.path || "";
  const url = new URL(`${String(config.apiOrigin).replace(/\/$/, "")}/${path}`);
  url.search = getRequestURL(event).search;
  const method = getMethod(event);
  const incoming = getRequestHeaders(event);
  const headers: Record<string, string> = {};
  if (incoming.authorization) headers.authorization = incoming.authorization;
  if (incoming.language) headers.language = incoming.language;
  if (incoming["content-type"])
    headers["content-type"] = incoming["content-type"];
  const body = ["GET", "HEAD"].includes(method)
    ? undefined
    : await readBody(event);

  try {
    const response = await $fetch.raw(url.toString(), {
      method,
      headers,
      body,
    });
    setResponseStatus(event, response.status);
    return response._data;
  } catch (error: any) {
    setResponseStatus(event, error?.response?.status || 502);
    if (error?.data) {
      return error.data;
    }
    if (error?.response?._data) {
      return error.response._data;
    }
    return {
      code: -1,
      message: "暂时无法连接服务，请稍后重试",
      data: null,
    };
  }
});
