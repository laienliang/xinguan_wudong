import { d as defineEventHandler, u as useRuntimeConfig, g as getRequestURL, a as getMethod, b as getRequestHeaders, r as readBody, s as setResponseStatus } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const ____path_ = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const config = useRuntimeConfig(event);
  const path = ((_a = event.context.params) == null ? void 0 : _a.path) || "";
  const url = new URL(`${String(config.apiOrigin).replace(/\/$/, "")}/${path}`);
  url.search = getRequestURL(event).search;
  const method = getMethod(event);
  const incoming = getRequestHeaders(event);
  const headers = {};
  if (incoming.authorization) headers.authorization = incoming.authorization;
  if (incoming.language) headers.language = incoming.language;
  if (incoming["content-type"])
    headers["content-type"] = incoming["content-type"];
  const body = ["GET", "HEAD"].includes(method) ? void 0 : await readBody(event);
  try {
    const response = await $fetch.raw(url.toString(), {
      method,
      headers,
      body
    });
    setResponseStatus(event, response.status);
    return response._data;
  } catch (error) {
    setResponseStatus(event, ((_b = error == null ? void 0 : error.response) == null ? void 0 : _b.status) || 502);
    if (error == null ? void 0 : error.data) {
      return error.data;
    }
    if ((_c = error == null ? void 0 : error.response) == null ? void 0 : _c._data) {
      return error.response._data;
    }
    return {
      code: -1,
      message: "\u6682\u65F6\u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
      data: null
    };
  }
});

export { ____path_ as default };
//# sourceMappingURL=_...path_.mjs.map
