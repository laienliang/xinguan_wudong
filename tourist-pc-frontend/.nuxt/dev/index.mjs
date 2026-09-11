import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, appendResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, getMethod, setHeader, getResponseStatusText } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import * as shared_cjs from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/@vue/shared/dist/shared.cjs.js';
import { escapeHtml } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/@vue/shared/dist/shared.cjs.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/errx/dist/index.mjs';
import * as compilerDom_cjs from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js';
import * as runtimeDom_cjs from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/nuxt/node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/unhead/dist/server.mjs';
import * as compilerDom_cjs$1 from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/vue/node_modules/@vue/compiler-dom/dist/compiler-dom.cjs.js';
import * as runtimeDom_cjs$1 from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js';
import * as shared_cjs$1 from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/vue/node_modules/@vue/shared/dist/shared.cjs.js';
import { walkResolver } from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/unhead/dist/utils.mjs';
import * as compilerSsr_cjs from 'file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/node_modules/@vue/compiler-ssr/dist/compiler-ssr.cjs.js';
import * as node_stream from 'node:stream';

const serverAssets = [{"baseName":"server","dir":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "/api",
    "mediaBase": "http://127.0.0.1:8001",
    "siteUrl": "http://localhost:9100",
    "amapKey": ""
  },
  "apiOrigin": "http://127.0.0.1:8001"
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var vue$1 = {exports: {}};

var vue_cjs$1 = {};

const require$$0$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(compilerDom_cjs);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(runtimeDom_cjs);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(shared_cjs);

/**
* vue v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

(function (exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	var compilerDom = require$$0$2;
	var runtimeDom = require$$0$1;
	var shared = require$$1$1;

	function _interopNamespaceDefault(e) {
	  var n = Object.create(null);
	  if (e) {
	    for (var k in e) {
	      n[k] = e[k];
	    }
	  }
	  n.default = e;
	  return Object.freeze(n);
	}

	var runtimeDom__namespace = /*#__PURE__*/_interopNamespaceDefault(runtimeDom);

	const compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
	  if (!shared.isString(template)) {
	    if (template.nodeType) {
	      template = template.innerHTML;
	    } else {
	      runtimeDom.warn(`invalid template option: `, template);
	      return shared.NOOP;
	    }
	  }
	  const key = shared.genCacheKey(template, options);
	  const cached = compileCache[key];
	  if (cached) {
	    return cached;
	  }
	  if (template[0] === "#") {
	    const el = document.querySelector(template);
	    if (!el) {
	      runtimeDom.warn(`Template element not found or is empty: ${template}`);
	    }
	    template = el ? el.innerHTML : ``;
	  }
	  const opts = shared.extend(
	    {
	      hoistStatic: true,
	      onError: onError ,
	      onWarn: (e) => onError(e, true) 
	    },
	    options
	  );
	  if (!opts.isCustomElement && typeof customElements !== "undefined") {
	    opts.isCustomElement = (tag) => !!customElements.get(tag);
	  }
	  const { code } = compilerDom.compile(template, opts);
	  function onError(err, asWarning = false) {
	    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
	    const codeFrame = err.loc && shared.generateCodeFrame(
	      template,
	      err.loc.start.offset,
	      err.loc.end.offset
	    );
	    runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
	  }
	  const render = new Function("Vue", code)(runtimeDom__namespace);
	  render._rc = true;
	  return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);

	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function (k) {
	  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
	}); 
} (vue_cjs$1));

{
  vue$1.exports = vue_cjs$1;
}

var vueExports$1 = vue$1.exports;

const rootDir = "/Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"theme-color","content":"#f4efe6"},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"preconnect","href":"http://localhost:8001"}],"style":[],"script":[],"noscript":[],"htmlAttrs":{"lang":"zh-CN"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => vueExports$1.isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _T7kdKHCowvBfLr2zAv1AkkY15RA9CC_ogAKojFzW_w = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const plugins = [
  _T7kdKHCowvBfLr2zAv1AkkY15RA9CC_ogAKojFzW_w
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _VjiQVF = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var vue = {exports: {}};

var vue_cjs = {};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(compilerDom_cjs$1);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(runtimeDom_cjs$1);

const require$$2$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(shared_cjs$1);

/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

(function (exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	var compilerDom = require$$0;
	var runtimeDom = require$$1;
	var shared = require$$2$1;

	function _interopNamespaceDefault(e) {
	  var n = Object.create(null);
	  if (e) {
	    for (var k in e) {
	      n[k] = e[k];
	    }
	  }
	  n.default = e;
	  return Object.freeze(n);
	}

	var runtimeDom__namespace = /*#__PURE__*/_interopNamespaceDefault(runtimeDom);

	const compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
	  if (!shared.isString(template)) {
	    if (template.nodeType) {
	      template = template.innerHTML;
	    } else {
	      runtimeDom.warn(`invalid template option: `, template);
	      return shared.NOOP;
	    }
	  }
	  const key = shared.genCacheKey(template, options);
	  const cached = compileCache[key];
	  if (cached) {
	    return cached;
	  }
	  if (template[0] === "#") {
	    const el = document.querySelector(template);
	    if (!el) {
	      runtimeDom.warn(`Template element not found or is empty: ${template}`);
	    }
	    template = el ? el.innerHTML : ``;
	  }
	  const opts = shared.extend(
	    {
	      hoistStatic: true,
	      onError: onError ,
	      onWarn: (e) => onError(e, true) 
	    },
	    options
	  );
	  if (!opts.isCustomElement && typeof customElements !== "undefined") {
	    opts.isCustomElement = (tag) => !!customElements.get(tag);
	  }
	  const { code } = compilerDom.compile(template, opts);
	  function onError(err, asWarning = false) {
	    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
	    const codeFrame = err.loc && shared.generateCodeFrame(
	      template,
	      err.loc.start.offset,
	      err.loc.end.offset
	    );
	    runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
	  }
	  const render = new Function("Vue", code)(runtimeDom__namespace);
	  render._rc = true;
	  return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);

	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function (k) {
	  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = runtimeDom[k];
	}); 
} (vue_cjs));

{
  vue.exports = vue_cjs;
}

var vueExports = vue.exports;

const VueResolver = (_, value) => {
  return vueExports.isRef(value) ? vueExports.toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

//#region src/runtime.ts
function createRendererContext({ manifest, precomputed, buildAssetsURL, dependencySetsCacheSize }) {
	if (!manifest && !precomputed) throw new Error("Either manifest or precomputed data must be provided");
	const ctx = {
		buildAssetsURL: buildAssetsURL || withLeadingSlash,
		manifest,
		precomputed,
		updateManifest,
		_dependencies: {},
		_dependencySets: /* @__PURE__ */ new Map(),
		_dependencySetsCacheSize: typeof dependencySetsCacheSize === "number" && Number.isFinite(dependencySetsCacheSize) && dependencySetsCacheSize > 0 ? Math.floor(dependencySetsCacheSize) : dependencySetsCacheSize === void 0 ? 1e3 : 0,
		_entrypoints: [],
		_renderedCache: /* @__PURE__ */ new WeakMap()
	};
	function updateManifest(manifest) {
		ctx.manifest = manifest;
		ctx._dependencies = {};
		ctx._dependencySets.clear();
		ctx._renderedCache = /* @__PURE__ */ new WeakMap();
		const entrypoints = [];
		for (const id in manifest) if (manifest[id].isEntry) entrypoints.push(id);
		ctx._entrypoints = entrypoints;
	}
	if (precomputed) {
		ctx._dependencies = precomputed.dependencies;
		ctx._entrypoints = precomputed.entrypoints;
	} else if (manifest) updateManifest(manifest);
	return ctx;
}
function getModuleDependencies(id, rendererContext) {
	if (rendererContext._dependencies[id]) return rendererContext._dependencies[id];
	const dependencies = rendererContext._dependencies[id] = {
		scripts: {},
		styles: {},
		preload: {},
		prefetch: {}
	};
	if (!rendererContext.manifest) return dependencies;
	const meta = rendererContext.manifest[id];
	if (!meta) return dependencies;
	if (meta.file) {
		dependencies.preload[id] = meta;
		if (meta.isEntry || meta.sideEffects) dependencies.scripts[id] = meta;
	}
	for (const css of meta.css || []) dependencies.styles[css] = dependencies.preload[css] = dependencies.prefetch[css] = rendererContext.manifest[css];
	for (const asset of meta.assets || []) dependencies.preload[asset] = dependencies.prefetch[asset] = rendererContext.manifest[asset];
	if (meta.imports) for (const depId of meta.imports) {
		const depDeps = getModuleDependencies(depId, rendererContext);
		Object.assign(dependencies.styles, depDeps.styles);
		Object.assign(dependencies.preload, depDeps.preload);
		Object.assign(dependencies.prefetch, depDeps.prefetch);
	}
	const filteredPreload = {};
	for (const id in dependencies.preload) {
		const dep = dependencies.preload[id];
		if (dep.preload) filteredPreload[id] = dep;
	}
	dependencies.preload = filteredPreload;
	return dependencies;
}
function getAllDependencies(ids, rendererContext) {
	const cacheSize = rendererContext._dependencySetsCacheSize;
	const useCache = cacheSize > 0;
	let cacheKey = "";
	if (useCache) {
		if (ids.size <= 1) for (const id of ids) cacheKey = id;
		else cacheKey = [...ids].sort().join(",");
		const cached = rendererContext._dependencySets.get(cacheKey);
		if (cached !== void 0) {
			if (rendererContext._dependencySets.size >= cacheSize) {
				rendererContext._dependencySets.delete(cacheKey);
				rendererContext._dependencySets.set(cacheKey, cached);
			}
			return cached;
		}
	}
	const allDeps = {
		scripts: {},
		styles: {},
		preload: {},
		prefetch: {}
	};
	for (const id of ids) {
		const deps = getModuleDependencies(id, rendererContext);
		Object.assign(allDeps.scripts, deps.scripts);
		Object.assign(allDeps.styles, deps.styles);
		Object.assign(allDeps.preload, deps.preload);
		Object.assign(allDeps.prefetch, deps.prefetch);
		const dynamicImports = rendererContext.manifest?.[id]?.dynamicImports || rendererContext.precomputed?.modules[id]?.dynamicImports;
		if (dynamicImports) for (const dynamicDepId of dynamicImports) {
			const dynamicDeps = getModuleDependencies(dynamicDepId, rendererContext);
			Object.assign(allDeps.prefetch, dynamicDeps.scripts);
			Object.assign(allDeps.prefetch, dynamicDeps.styles);
			Object.assign(allDeps.prefetch, dynamicDeps.preload);
		}
	}
	const mergedPreload = allDeps.preload;
	const styles = allDeps.styles;
	const filteredPrefetch = {};
	for (const id in allDeps.prefetch) {
		const dep = allDeps.prefetch[id];
		if (dep.prefetch && !(id in mergedPreload) && !(id in styles)) filteredPrefetch[id] = dep;
	}
	allDeps.prefetch = filteredPrefetch;
	const filteredPreload = {};
	for (const id in mergedPreload) if (!(id in styles)) filteredPreload[id] = mergedPreload[id];
	allDeps.preload = filteredPreload;
	if (useCache) {
		rendererContext._dependencySets.set(cacheKey, allDeps);
		if (rendererContext._dependencySets.size > cacheSize) {
			const oldest = rendererContext._dependencySets.keys().next().value;
			if (oldest !== void 0) rendererContext._dependencySets.delete(oldest);
		}
	}
	return allDeps;
}
function getRequestDependencies(ssrContext, rendererContext, options) {
	const excluded = options?.exclude ? new Set(options.exclude) : void 0;
	const hasExcluded = excluded && excluded.size > 0;
	if (!hasExcluded && ssrContext._requestDependencies) return ssrContext._requestDependencies;
	let ids;
	const requestIds = ssrContext.modules || ssrContext._registeredComponents;
	if (hasExcluded) {
		ids = /* @__PURE__ */ new Set();
		for (const id of rendererContext._entrypoints) if (!excluded.has(id)) ids.add(id);
		if (requestIds) {
			for (const id of requestIds) if (!excluded.has(id)) ids.add(id);
		}
	} else {
		ids = new Set(rendererContext._entrypoints);
		if (requestIds) for (const id of requestIds) ids.add(id);
	}
	const deps = getAllDependencies(ids, rendererContext);
	if (!hasExcluded) ssrContext._requestDependencies = deps;
	return deps;
}
function getRenderedOutputs(rendererContext, deps) {
	let entry = rendererContext._renderedCache.get(deps);
	if (!entry) {
		entry = {};
		rendererContext._renderedCache.set(deps, entry);
	}
	return entry;
}
function renderStyles(ssrContext, rendererContext) {
	const deps = getRequestDependencies(ssrContext, rendererContext);
	const rendered = getRenderedOutputs(rendererContext, deps);
	if (rendered.styles !== void 0) return rendered.styles;
	const { styles } = deps;
	let result = "";
	for (const key in styles) {
		const resource = styles[key];
		result += `<link rel="stylesheet" href="${rendererContext.buildAssetsURL(resource.file)}" crossorigin>`;
	}
	rendered.styles = result;
	return result;
}
function renderResourceHints(ssrContext, rendererContext, options) {
	const deps = getRequestDependencies(ssrContext, rendererContext, options);
	const rendered = getRenderedOutputs(rendererContext, deps);
	if (rendered.hints !== void 0) return rendered.hints;
	const { preload, prefetch } = deps;
	let result = "";
	for (const key in preload) {
		const resource = preload[key];
		const href = rendererContext.buildAssetsURL(resource.file);
		const rel = resource.module ? "modulepreload" : "preload";
		const crossorigin = resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module ? " crossorigin" : "";
		if (resource.resourceType && resource.mimeType) result += `<link rel="${rel}" as="${resource.resourceType}" type="${resource.mimeType}"${crossorigin} href="${href}">`;
		else if (resource.resourceType) result += `<link rel="${rel}" as="${resource.resourceType}"${crossorigin} href="${href}">`;
		else result += `<link rel="${rel}"${crossorigin} href="${href}">`;
	}
	for (const key in prefetch) {
		const resource = prefetch[key];
		const href = rendererContext.buildAssetsURL(resource.file);
		const crossorigin = resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module ? " crossorigin" : "";
		if (resource.resourceType && resource.mimeType) result += `<link rel="prefetch" as="${resource.resourceType}" type="${resource.mimeType}"${crossorigin} href="${href}">`;
		else if (resource.resourceType) result += `<link rel="prefetch" as="${resource.resourceType}"${crossorigin} href="${href}">`;
		else result += `<link rel="prefetch"${crossorigin} href="${href}">`;
	}
	rendered.hints = result;
	return result;
}
const NON_ASCII_RE = /[^\0-\u007F]+/g;
function renderResourceHeaders(ssrContext, rendererContext, options) {
	const deps = getRequestDependencies(ssrContext, rendererContext, options);
	const rendered = getRenderedOutputs(rendererContext, deps);
	if (rendered.headerLink !== void 0) return { link: rendered.headerLink };
	const { preload, prefetch } = deps;
	const links = [];
	for (const key in preload) {
		const resource = preload[key];
		let header = `<${rendererContext.buildAssetsURL(resource.file).replace(NON_ASCII_RE, encodeURIComponent)}>; rel="${resource.module ? "modulepreload" : "preload"}"`;
		if (resource.resourceType) header += `; as="${resource.resourceType}"`;
		if (resource.mimeType) header += `; type="${resource.mimeType}"`;
		if (resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module) header += "; crossorigin";
		links.push(header);
	}
	for (const key in prefetch) {
		const resource = prefetch[key];
		let header = `<${rendererContext.buildAssetsURL(resource.file).replace(NON_ASCII_RE, encodeURIComponent)}>; rel="prefetch"`;
		if (resource.resourceType) header += `; as="${resource.resourceType}"`;
		if (resource.mimeType) header += `; type="${resource.mimeType}"`;
		if (resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module) header += "; crossorigin";
		links.push(header);
	}
	rendered.headerLink = links.join(", ");
	return { link: rendered.headerLink };
}
function getPreloadLinks(ssrContext, rendererContext, options) {
	const { preload } = getRequestDependencies(ssrContext, rendererContext, options);
	const result = [];
	for (const key in preload) {
		const resource = preload[key];
		result.push({
			rel: resource.module ? "modulepreload" : "preload",
			as: resource.resourceType,
			type: resource.mimeType ?? null,
			crossorigin: resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module ? "" : null,
			href: rendererContext.buildAssetsURL(resource.file)
		});
	}
	return result;
}
function getPrefetchLinks(ssrContext, rendererContext, options) {
	const { prefetch } = getRequestDependencies(ssrContext, rendererContext, options);
	const result = [];
	for (const key in prefetch) {
		const resource = prefetch[key];
		result.push({
			rel: "prefetch",
			as: resource.resourceType,
			type: resource.mimeType ?? null,
			crossorigin: resource.resourceType === "style" || resource.resourceType === "font" || resource.resourceType === "script" || resource.module ? "" : null,
			href: rendererContext.buildAssetsURL(resource.file)
		});
	}
	return result;
}
function renderScripts(ssrContext, rendererContext) {
	const deps = getRequestDependencies(ssrContext, rendererContext);
	const rendered = getRenderedOutputs(rendererContext, deps);
	if (rendered.scripts !== void 0) return rendered.scripts;
	const { scripts } = deps;
	let result = "";
	for (const key in scripts) {
		const resource = scripts[key];
		if (resource.module) result += `<script type="module" src="${rendererContext.buildAssetsURL(resource.file)}" crossorigin><\/script>`;
		else result += `<script src="${rendererContext.buildAssetsURL(resource.file)}" defer crossorigin><\/script>`;
	}
	rendered.scripts = result;
	return result;
}
function createRenderer(createApp, renderOptions) {
	const rendererContext = createRendererContext(renderOptions);
	return {
		rendererContext,
		async renderToString(ssrContext) {
			ssrContext._registeredComponents = ssrContext._registeredComponents || /* @__PURE__ */ new Set();
			const app = await (await Promise.resolve(createApp).then((r) => "default" in r ? r.default : r))(ssrContext);
			const html = await renderOptions.renderToString(app, ssrContext);
			const wrap = (fn) => () => fn(ssrContext, rendererContext);
			return {
				html,
				renderResourceHeaders: wrap(renderResourceHeaders),
				renderResourceHints: wrap(renderResourceHints),
				renderStyles: wrap(renderStyles),
				renderScripts: wrap(renderScripts)
			};
		}
	};
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

var serverRenderer_cjs = {};

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(compilerSsr_cjs);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

/**
* @vue/server-renderer v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

Object.defineProperty(serverRenderer_cjs, '__esModule', { value: true });

var Vue = require$$0$1;
var shared = require$$1$1;
var compilerSsr = require$$2;

function _interopNamespaceDefault$1(e) {
  var n = Object.create(null);
  if (e) {
    for (var k in e) {
      n[k] = e[k];
    }
  }
  n.default = e;
  return Object.freeze(n);
}

var Vue__namespace = /*#__PURE__*/_interopNamespaceDefault$1(Vue);

const shouldIgnoreProp = /* @__PURE__ */ shared.makeMap(
  `,key,ref,innerHTML,textContent,ref_key,ref_for`
);
function ssrRenderAttrs(props, tag) {
  let ret = "";
  for (let key in props) {
    if (shouldIgnoreProp(key) || shared.isOn(key) || tag === "textarea" && key === "value" || // force as property (not rendered in SSR)
    key.startsWith(".")) {
      continue;
    }
    const value = props[key];
    if (key.startsWith("^")) key = key.slice(1);
    if (key === "class") {
      ret += ` class="${ssrRenderClass(value)}"`;
    } else if (key === "style") {
      ret += ` style="${ssrRenderStyle(value)}"`;
    } else if (key === "className") {
      if (value != null) {
        ret += ` class="${shared.escapeHtml(String(value))}"`;
      }
    } else {
      ret += ssrRenderDynamicAttr(key, value, tag);
    }
  }
  return ret;
}
function ssrRenderDynamicAttr(key, value, tag) {
  if (!shared.isRenderableAttrValue(value)) {
    return ``;
  }
  const attrKey = tag && (tag.indexOf("-") > 0 || shared.isSVGTag(tag)) ? key : shared.propsToAttrMap[key] || key.toLowerCase();
  if (shared.isBooleanAttr(attrKey) || attrKey === "hidden" && (typeof value === "boolean" || typeof value === "number")) {
    return shared.includeBooleanAttr(value) ? ` ${attrKey}` : ``;
  } else if (shared.isSSRSafeAttrName(attrKey)) {
    return value === "" ? ` ${attrKey}` : ` ${attrKey}="${shared.escapeHtml(value)}"`;
  } else {
    console.warn(
      `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${attrKey}`
    );
    return ``;
  }
}
function ssrRenderAttr(key, value) {
  if (!shared.isRenderableAttrValue(value)) {
    return ``;
  }
  return ` ${key}="${shared.escapeHtml(value)}"`;
}
function ssrRenderClass(raw) {
  return shared.escapeHtml(shared.normalizeClass(raw));
}
function ssrRenderStyle(raw) {
  if (!raw) {
    return "";
  }
  if (shared.isString(raw)) {
    return shared.escapeHtml(raw);
  }
  const styles = shared.normalizeStyle(ssrResetCssVars(raw));
  return shared.escapeHtml(shared.stringifyStyle(styles));
}
function ssrResetCssVars(raw) {
  if (!shared.isArray(raw) && shared.isObject(raw)) {
    const res = {};
    for (const key in raw) {
      if (key.startsWith(":--")) {
        res[key.slice(1)] = shared.normalizeCssVarValue(raw[key]);
      } else {
        res[key] = raw[key];
      }
    }
    return res;
  }
  return raw;
}

function ssrRenderComponent(comp, props = null, children = null, parentComponent = null, slotScopeId) {
  return renderComponentVNode(
    Vue.createVNode(comp, props, children),
    parentComponent,
    slotScopeId
  );
}

const { ensureValidVNode } = Vue.ssrUtils;
function ssrRenderSlot(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId) {
  push(`<!--[-->`);
  ssrRenderSlotInner(
    slots,
    slotName,
    slotProps,
    fallbackRenderFn,
    push,
    parentComponent,
    slotScopeId
  );
  push(`<!--]-->`);
}
function ssrRenderSlotInner(slots, slotName, slotProps, fallbackRenderFn, push, parentComponent, slotScopeId, transition) {
  const slotFn = slots[slotName];
  if (slotFn) {
    const slotBuffer = [];
    const bufferedPush = (item) => {
      slotBuffer.push(item);
    };
    const ret = slotFn(
      // keep the slot function's contract in sync with `renderSlot`, which also
      // normalizes nullish props before invoking the slot
      slotProps || {},
      bufferedPush,
      parentComponent,
      slotScopeId ? " " + slotScopeId : ""
    );
    if (shared.isArray(ret)) {
      const validSlotContent = ensureValidVNode(ret);
      if (validSlotContent) {
        renderVNodeChildren(
          push,
          validSlotContent,
          parentComponent,
          slotScopeId
        );
      } else if (fallbackRenderFn) {
        fallbackRenderFn();
      } else if (transition) {
        push(`<!---->`);
      }
    } else {
      let isEmptySlot = true;
      if (transition) {
        isEmptySlot = false;
      } else {
        for (let i = 0; i < slotBuffer.length; i++) {
          if (!isComment(slotBuffer[i])) {
            isEmptySlot = false;
            break;
          }
        }
      }
      if (isEmptySlot) {
        if (fallbackRenderFn) {
          fallbackRenderFn();
        }
      } else {
        let start = 0;
        let end = slotBuffer.length;
        if (transition && slotBuffer[0] === "<!--[-->" && slotBuffer[end - 1] === "<!--]-->") {
          start++;
          end--;
        }
        if (start < end) {
          for (let i = start; i < end; i++) {
            push(slotBuffer[i]);
          }
        } else if (transition) {
          push(`<!---->`);
        }
      }
    }
  } else if (fallbackRenderFn) {
    fallbackRenderFn();
  } else if (transition) {
    push(`<!---->`);
  }
}
const commentTestRE = /^<!--[\s\S]*-->$/;
const commentRE = /<!--[^]*?-->/gm;
function isComment(item) {
  if (typeof item !== "string" || !commentTestRE.test(item)) return false;
  if (item.length <= 8) return true;
  return !item.replace(commentRE, "").trim();
}

function ssrRenderTeleport(parentPush, contentRenderFn, target, disabled, parentComponent) {
  parentPush("<!--teleport start-->");
  const context = parentComponent.appContext.provides[Vue.ssrContextKey];
  const teleportBuffers = context.__teleportBuffers || (context.__teleportBuffers = {});
  const targetBuffer = teleportBuffers[target] || (teleportBuffers[target] = []);
  const bufferIndex = targetBuffer.length;
  let teleportContent;
  if (disabled) {
    contentRenderFn(parentPush);
    teleportContent = `<!--teleport start anchor--><!--teleport anchor-->`;
  } else {
    const { getBuffer, push } = createBuffer();
    push(`<!--teleport start anchor-->`);
    contentRenderFn(push);
    push(`<!--teleport anchor-->`);
    teleportContent = getBuffer();
  }
  targetBuffer.splice(bufferIndex, 0, teleportContent);
  if (shared.isPromise(teleportContent) || shared.isArray(teleportContent) && teleportContent.hasAsync) {
    targetBuffer.hasAsync = true;
  }
  parentPush("<!--teleport end-->");
}

function ssrInterpolate(value) {
  return shared.escapeHtml(shared.toDisplayString(value));
}

function ssrRenderList(source, renderItem) {
  if (shared.isArray(source) || shared.isString(source)) {
    for (let i = 0, l = source.length; i < l; i++) {
      renderItem(source[i], i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source) || source < 0) {
      Vue.warn(
        `The v-for range expects a positive integer value but got ${source}.`
      );
      return;
    }
    for (let i = 0; i < source; i++) {
      renderItem(i + 1, i);
    }
  } else if (shared.isObject(source)) {
    if (source[Symbol.iterator]) {
      let i = 0;
      for (const item of source) {
        renderItem(item, i++);
      }
    } else {
      const keys = Object.keys(source);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        renderItem(source[key], key, i);
      }
    }
  }
}

function ssrRenderSuspense(push, { default: renderContent }) {
  if (renderContent) {
    renderContent();
  } else {
    push(`<!---->`);
  }
}

function ssrGetDirectiveProps(instance, dir, value, arg, modifiers = {}) {
  if (typeof dir !== "function" && dir.getSSRProps) {
    return dir.getSSRProps(
      {
        dir,
        instance: Vue.ssrUtils.getComponentPublicInstance(instance.$),
        value,
        oldValue: void 0,
        arg,
        modifiers
      },
      null
    ) || {};
  }
  return {};
}

const ssrLooseEqual = shared.looseEqual;
function ssrLooseContain(arr, value) {
  return shared.looseIndexOf(arr, value) > -1;
}
function ssrRenderDynamicModel(type, model, value) {
  switch (type) {
    case "radio":
      return shared.looseEqual(model, value) ? " checked" : "";
    case "checkbox":
      return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? " checked" : "";
    default:
      return ssrRenderAttr("value", model);
  }
}
function ssrGetDynamicModelProps(existingProps = {}, model) {
  const { type, value } = existingProps;
  switch (type) {
    case "radio":
      return shared.looseEqual(model, value) ? { checked: true } : null;
    case "checkbox":
      return (shared.isArray(model) ? ssrLooseContain(model, value) : model) ? { checked: true } : null;
    default:
      return { value: model };
  }
}

var helpers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ssrGetDirectiveProps: ssrGetDirectiveProps,
  ssrGetDynamicModelProps: ssrGetDynamicModelProps,
  ssrIncludeBooleanAttr: shared.includeBooleanAttr,
  ssrInterpolate: ssrInterpolate,
  ssrLooseContain: ssrLooseContain,
  ssrLooseEqual: ssrLooseEqual,
  ssrRenderAttr: ssrRenderAttr,
  ssrRenderAttrs: ssrRenderAttrs,
  ssrRenderClass: ssrRenderClass,
  ssrRenderComponent: ssrRenderComponent,
  ssrRenderDynamicAttr: ssrRenderDynamicAttr,
  ssrRenderDynamicModel: ssrRenderDynamicModel,
  ssrRenderList: ssrRenderList,
  ssrRenderSlot: ssrRenderSlot,
  ssrRenderSlotInner: ssrRenderSlotInner,
  ssrRenderStyle: ssrRenderStyle,
  ssrRenderSuspense: ssrRenderSuspense,
  ssrRenderTeleport: ssrRenderTeleport,
  ssrRenderVNode: renderVNode
});

const compileCache = /* @__PURE__ */ Object.create(null);
function ssrCompile(template, instance) {
  const Component = instance.type;
  const { isCustomElement, compilerOptions } = instance.appContext.config;
  const { delimiters, compilerOptions: componentCompilerOptions } = Component;
  const finalCompilerOptions = shared.extend(
    shared.extend(
      {
        isCustomElement,
        delimiters
      },
      compilerOptions
    ),
    componentCompilerOptions
  );
  finalCompilerOptions.isCustomElement = finalCompilerOptions.isCustomElement || shared.NO;
  finalCompilerOptions.isNativeTag = finalCompilerOptions.isNativeTag || shared.NO;
  const cacheKey = JSON.stringify(
    {
      template,
      compilerOptions: finalCompilerOptions
    },
    (key, value) => {
      return shared.isFunction(value) ? value.toString() : value;
    }
  );
  const cached = compileCache[cacheKey];
  if (cached) {
    return cached;
  }
  finalCompilerOptions.onError = (err) => {
    {
      const message = `[@vue/server-renderer] Template compilation error: ${err.message}`;
      const codeFrame = err.loc && shared.generateCodeFrame(
        template,
        err.loc.start.offset,
        err.loc.end.offset
      );
      Vue.warn(codeFrame ? `${message}
${codeFrame}` : message);
    }
  };
  const { code } = compilerSsr.compile(template, finalCompilerOptions);
  const requireMap = {
    vue: Vue__namespace,
    "vue/server-renderer": helpers
  };
  const fakeRequire = (id) => requireMap[id];
  return compileCache[cacheKey] = Function("require", code)(fakeRequire);
}

const {
  createComponentInstance,
  setCurrentRenderingInstance,
  setupComponent,
  renderComponentRoot,
  normalizeVNode,
  pushWarningContext,
  popWarningContext
} = Vue.ssrUtils;
function createBuffer() {
  let appendable = false;
  const buffer = [];
  return {
    getBuffer() {
      return buffer;
    },
    push(item) {
      const isStringItem = shared.isString(item);
      if (appendable && isStringItem) {
        buffer[buffer.length - 1] += item;
        return;
      }
      buffer.push(item);
      appendable = isStringItem;
      if (shared.isPromise(item) || shared.isArray(item) && item.hasAsync) {
        buffer.hasAsync = true;
      }
    }
  };
}
function renderComponentVNode(vnode, parentComponent = null, slotScopeId) {
  const instance = vnode.component = createComponentInstance(
    vnode,
    parentComponent,
    null
  );
  pushWarningContext(vnode);
  const res = setupComponent(
    instance,
    true
    /* isSSR */
  );
  popWarningContext();
  const hasAsyncSetup = shared.isPromise(res);
  let prefetches = instance.sp;
  if (hasAsyncSetup || prefetches) {
    const p = Promise.resolve(res).then(() => {
      if (hasAsyncSetup) prefetches = instance.sp;
      if (prefetches) {
        return Promise.all(
          prefetches.map((prefetch) => prefetch.call(instance.proxy))
        );
      }
    }).catch(shared.NOOP);
    return p.then(() => renderComponentSubTree(instance, slotScopeId));
  } else {
    try {
      return renderComponentSubTree(instance, slotScopeId);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
function renderComponentSubTree(instance, slotScopeId) {
  pushWarningContext(instance.vnode);
  const comp = instance.type;
  const { getBuffer, push } = createBuffer();
  if (shared.isFunction(comp)) {
    let root = renderComponentRoot(instance);
    if (!comp.props) {
      for (const key in instance.attrs) {
        if (key.startsWith(`data-v-`)) {
          (root.props || (root.props = {}))[key] = ``;
        }
      }
    }
    renderVNode(push, instance.subTree = root, instance, slotScopeId);
  } else {
    if ((!instance.render || instance.render === shared.NOOP) && !instance.ssrRender && !comp.ssrRender && shared.isString(comp.template)) {
      comp.ssrRender = ssrCompile(comp.template, instance);
    }
    const ssrRender = instance.ssrRender || comp.ssrRender;
    if (ssrRender) {
      let attrs = instance.inheritAttrs !== false ? instance.attrs : void 0;
      let hasCloned = false;
      let cur = instance;
      while (true) {
        const scopeId = cur.vnode.scopeId;
        if (scopeId) {
          if (!hasCloned) {
            attrs = { ...attrs };
            hasCloned = true;
          }
          attrs[scopeId] = "";
        }
        const parent = cur.parent;
        if (parent && parent.subTree && parent.subTree === cur.vnode) {
          cur = parent;
        } else {
          break;
        }
      }
      if (slotScopeId) {
        if (!hasCloned) attrs = { ...attrs };
        const slotScopeIdList = slotScopeId.trim().split(" ");
        for (let i = 0; i < slotScopeIdList.length; i++) {
          attrs[slotScopeIdList[i]] = "";
        }
      }
      const prev = setCurrentRenderingInstance(instance);
      try {
        ssrRender(
          instance.proxy,
          push,
          instance,
          attrs,
          // compiler-optimized bindings
          instance.props,
          instance.setupState,
          instance.data,
          instance.ctx
        );
      } catch (err) {
        Vue.handleError(err, instance, 1);
      } finally {
        setCurrentRenderingInstance(prev);
      }
    } else if (instance.render && instance.render !== shared.NOOP) {
      renderVNode(
        push,
        instance.subTree = renderComponentRoot(instance),
        instance,
        slotScopeId
      );
    } else {
      const componentName = comp.name || comp.__file || `<Anonymous>`;
      Vue.warn(`Component ${componentName} is missing template or render function.`);
      push(`<!---->`);
    }
  }
  popWarningContext();
  return getBuffer();
}
function renderVNode(push, vnode, parentComponent, slotScopeId) {
  const { type, shapeFlag, children, dirs, props } = vnode;
  if (dirs) {
    vnode.props = applySSRDirectives(vnode, props, dirs);
  }
  switch (type) {
    case Vue.Text:
      push(shared.escapeHtml(children));
      break;
    case Vue.Comment:
      push(
        children ? `<!--${shared.escapeHtmlComment(children)}-->` : `<!---->`
      );
      break;
    case Vue.Static:
      push(children);
      break;
    case Vue.Fragment:
      if (vnode.slotScopeIds) {
        slotScopeId = (slotScopeId ? slotScopeId + " " : "") + vnode.slotScopeIds.join(" ");
      }
      push(`<!--[-->`);
      renderVNodeChildren(
        push,
        children,
        parentComponent,
        slotScopeId
      );
      push(`<!--]-->`);
      break;
    default:
      if (shapeFlag & 1) {
        renderElementVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 6) {
        push(renderComponentVNode(vnode, parentComponent, slotScopeId));
      } else if (shapeFlag & 64) {
        renderTeleportVNode(push, vnode, parentComponent, slotScopeId);
      } else if (shapeFlag & 128) {
        renderVNode(push, vnode.ssContent, parentComponent, slotScopeId);
      } else {
        Vue.warn(
          "[@vue/server-renderer] Invalid VNode type:",
          type,
          `(${typeof type})`
        );
      }
  }
}
function renderVNodeChildren(push, children, parentComponent, slotScopeId) {
  for (let i = 0; i < children.length; i++) {
    renderVNode(push, normalizeVNode(children[i]), parentComponent, slotScopeId);
  }
}
function renderElementVNode(push, vnode, parentComponent, slotScopeId) {
  const tag = vnode.type;
  let { props, children, shapeFlag, scopeId } = vnode;
  let openTag = `<${tag}`;
  if (props) {
    openTag += ssrRenderAttrs(props, tag);
  }
  const renderedScopeIds = [];
  const appendScopeId = (id) => {
    if (id && (!props || !shared.hasOwn(props, id)) && !renderedScopeIds.includes(id)) {
      openTag += ` ${id}`;
      renderedScopeIds.push(id);
    }
  };
  if (scopeId) {
    appendScopeId(scopeId);
  }
  let curParent = parentComponent;
  let curVnode = vnode;
  while (curParent && curVnode === curParent.subTree) {
    curVnode = curParent.vnode;
    if (curVnode.scopeId) {
      appendScopeId(curVnode.scopeId);
    }
    curParent = curParent.parent;
  }
  if (slotScopeId) {
    const slotScopeIdList = slotScopeId.trim().split(" ");
    for (let i = 0; i < slotScopeIdList.length; i++) {
      appendScopeId(slotScopeIdList[i]);
    }
  }
  push(openTag + `>`);
  if (!shared.isVoidTag(tag)) {
    let hasChildrenOverride = false;
    if (props) {
      if (props.innerHTML) {
        hasChildrenOverride = true;
        push(props.innerHTML);
      } else if (props.textContent) {
        hasChildrenOverride = true;
        push(shared.escapeHtml(props.textContent));
      } else if (tag === "textarea" && props.value) {
        hasChildrenOverride = true;
        push(shared.escapeHtml(props.value));
      }
    }
    if (!hasChildrenOverride) {
      if (shapeFlag & 8) {
        push(shared.escapeHtml(children));
      } else if (shapeFlag & 16) {
        renderVNodeChildren(
          push,
          children,
          parentComponent,
          slotScopeId
        );
      }
    }
    push(`</${tag}>`);
  }
}
function applySSRDirectives(vnode, rawProps, dirs) {
  const toMerge = [];
  for (let i = 0; i < dirs.length; i++) {
    const binding = dirs[i];
    const {
      dir: { getSSRProps }
    } = binding;
    if (getSSRProps) {
      const props = getSSRProps(binding, vnode);
      if (props) toMerge.push(props);
    }
  }
  return Vue.mergeProps(rawProps || {}, ...toMerge);
}
function renderTeleportVNode(push, vnode, parentComponent, slotScopeId) {
  const target = vnode.props && vnode.props.to;
  const disabled = vnode.props && vnode.props.disabled;
  if (!target) {
    if (!disabled) {
      Vue.warn(`[@vue/server-renderer] Teleport is missing target prop.`);
    }
    return [];
  }
  if (!shared.isString(target)) {
    Vue.warn(
      `[@vue/server-renderer] Teleport target must be a query selector string.`
    );
    return [];
  }
  ssrRenderTeleport(
    push,
    (push2) => {
      renderVNodeChildren(
        push2,
        vnode.children,
        parentComponent,
        slotScopeId
      );
    },
    target,
    disabled || disabled === "",
    parentComponent
  );
}

const { isVNode: isVNode$1 } = Vue.ssrUtils;
function nestedUnrollBuffer(buffer, parentRet, startIndex) {
  if (!buffer.hasAsync) {
    return parentRet + unrollBufferSync$1(buffer);
  }
  let ret = parentRet;
  for (let i = startIndex; i < buffer.length; i += 1) {
    const item = buffer[i];
    if (shared.isString(item)) {
      ret += item;
      continue;
    }
    if (shared.isPromise(item)) {
      return item.then((nestedItem) => {
        buffer[i] = nestedItem;
        return nestedUnrollBuffer(buffer, ret, i);
      });
    }
    const result = nestedUnrollBuffer(item, ret, 0);
    if (shared.isPromise(result)) {
      return result.then((nestedItem) => {
        buffer[i] = nestedItem;
        return nestedUnrollBuffer(buffer, "", i);
      });
    }
    ret = result;
  }
  return ret;
}
function unrollBuffer$1(buffer) {
  return nestedUnrollBuffer(buffer, "", 0);
}
function unrollBufferSync$1(buffer) {
  let ret = "";
  for (let i = 0; i < buffer.length; i++) {
    let item = buffer[i];
    if (shared.isString(item)) {
      ret += item;
    } else {
      ret += unrollBufferSync$1(item);
    }
  }
  return ret;
}
async function renderToString(input, context = {}) {
  if (isVNode$1(input)) {
    return renderToString(Vue.createApp({ render: () => input }), context);
  }
  const vnode = Vue.createVNode(input._component, input._props);
  vnode.appContext = input._context;
  input.provide(Vue.ssrContextKey, context);
  const buffer = await renderComponentVNode(vnode);
  const result = await unrollBuffer$1(buffer);
  await resolveTeleports(context);
  if (context.__watcherHandles) {
    for (const unwatch of context.__watcherHandles) {
      unwatch();
    }
  }
  return result;
}
async function resolveTeleports(context) {
  if (context.__teleportBuffers) {
    context.teleports = context.teleports || {};
    for (const key in context.__teleportBuffers) {
      context.teleports[key] = await unrollBuffer$1(
        context.__teleportBuffers[key]
      );
    }
  }
}

const { isVNode } = Vue.ssrUtils;
async function unrollBuffer(buffer, stream) {
  if (buffer.hasAsync) {
    for (let i = 0; i < buffer.length; i++) {
      let item = buffer[i];
      if (shared.isPromise(item)) {
        item = await item;
      }
      if (shared.isString(item)) {
        stream.push(item);
      } else {
        await unrollBuffer(item, stream);
      }
    }
  } else {
    unrollBufferSync(buffer, stream);
  }
}
function unrollBufferSync(buffer, stream) {
  for (let i = 0; i < buffer.length; i++) {
    let item = buffer[i];
    if (shared.isString(item)) {
      stream.push(item);
    } else {
      unrollBufferSync(item, stream);
    }
  }
}
function renderToSimpleStream(input, context, stream) {
  if (isVNode(input)) {
    return renderToSimpleStream(
      Vue.createApp({ render: () => input }),
      context,
      stream
    );
  }
  const vnode = Vue.createVNode(input._component, input._props);
  vnode.appContext = input._context;
  input.provide(Vue.ssrContextKey, context);
  Promise.resolve(renderComponentVNode(vnode)).then((buffer) => unrollBuffer(buffer, stream)).then(() => resolveTeleports(context)).then(() => {
    if (context.__watcherHandles) {
      for (const unwatch of context.__watcherHandles) {
        unwatch();
      }
    }
  }).then(() => stream.push(null)).catch((error) => {
    stream.destroy(error);
  });
  return stream;
}
function renderToStream(input, context = {}) {
  console.warn(
    `[@vue/server-renderer] renderToStream is deprecated - use renderToNodeStream instead.`
  );
  return renderToNodeStream(input, context);
}
function renderToNodeStream(input, context = {}) {
  const stream = new (require$$3).Readable({ read() {
  } }) ;
  if (!stream) {
    throw new Error(
      `ESM build of renderToStream() does not support renderToNodeStream(). Use pipeToNodeWritable() with an existing Node.js Writable stream instance instead.`
    );
  }
  return renderToSimpleStream(input, context, stream);
}
function pipeToNodeWritable(input, context = {}, writable) {
  renderToSimpleStream(input, context, {
    push(content) {
      if (content != null) {
        writable.write(content);
      } else {
        writable.end();
      }
    },
    destroy(err) {
      writable.destroy(err);
    }
  });
}
function renderToWebStream(input, context = {}) {
  if (typeof ReadableStream !== "function") {
    throw new Error(
      `ReadableStream constructor is not available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead.`
    );
  }
  const encoder = new TextEncoder();
  let cancelled = false;
  return new ReadableStream({
    start(controller) {
      renderToSimpleStream(input, context, {
        push(content) {
          if (cancelled) return;
          if (content != null) {
            controller.enqueue(encoder.encode(content));
          } else {
            controller.close();
          }
        },
        destroy(err) {
          controller.error(err);
        }
      });
    },
    cancel() {
      cancelled = true;
    }
  });
}
function pipeToWebWritable(input, context = {}, writable) {
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  let hasReady = false;
  try {
    hasReady = shared.isPromise(writer.ready);
  } catch (e) {
  }
  renderToSimpleStream(input, context, {
    async push(content) {
      if (hasReady) {
        await writer.ready;
      }
      if (content != null) {
        return writer.write(encoder.encode(content));
      } else {
        return writer.close();
      }
    },
    destroy(err) {
      console.log(err);
      writer.close();
    }
  });
}

Vue.initDirectivesForSSR();

serverRenderer_cjs.ssrIncludeBooleanAttr = shared.includeBooleanAttr;
serverRenderer_cjs.pipeToNodeWritable = pipeToNodeWritable;
serverRenderer_cjs.pipeToWebWritable = pipeToWebWritable;
serverRenderer_cjs.renderToNodeStream = renderToNodeStream;
serverRenderer_cjs.renderToSimpleStream = renderToSimpleStream;
serverRenderer_cjs.renderToStream = renderToStream;
var renderToString_1 = serverRenderer_cjs.renderToString = renderToString;
serverRenderer_cjs.renderToWebStream = renderToWebStream;
serverRenderer_cjs.ssrGetDirectiveProps = ssrGetDirectiveProps;
serverRenderer_cjs.ssrGetDynamicModelProps = ssrGetDynamicModelProps;
serverRenderer_cjs.ssrInterpolate = ssrInterpolate;
serverRenderer_cjs.ssrLooseContain = ssrLooseContain;
serverRenderer_cjs.ssrLooseEqual = ssrLooseEqual;
serverRenderer_cjs.ssrRenderAttr = ssrRenderAttr;
serverRenderer_cjs.ssrRenderAttrs = ssrRenderAttrs;
serverRenderer_cjs.ssrRenderClass = ssrRenderClass;
serverRenderer_cjs.ssrRenderComponent = ssrRenderComponent;
serverRenderer_cjs.ssrRenderDynamicAttr = ssrRenderDynamicAttr;
serverRenderer_cjs.ssrRenderDynamicModel = ssrRenderDynamicModel;
serverRenderer_cjs.ssrRenderList = ssrRenderList;
serverRenderer_cjs.ssrRenderSlot = ssrRenderSlot;
serverRenderer_cjs.ssrRenderSlotInner = ssrRenderSlotInner;
serverRenderer_cjs.ssrRenderStyle = ssrRenderStyle;
serverRenderer_cjs.ssrRenderSuspense = ssrRenderSuspense;
serverRenderer_cjs.ssrRenderTeleport = ssrRenderTeleport;
serverRenderer_cjs.ssrRenderVNode = renderVNode;

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file:///Users/lianglaiyang_1/workspace/xinguan_wudong/code/tourist-pc-frontend/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString(input, context) {
    const html = await renderToString_1(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const _lazy_xR17BN = () => Promise.resolve().then(function () { return ____path_$1; });
const _lazy_ifcX4t = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_grX32c = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _VjiQVF, lazy: false, middleware: true, method: undefined },
  { route: '/api/**:path', handler: _lazy_xR17BN, lazy: true, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _lazy_ifcX4t, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_grX32c, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_grX32c, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 pointer-events-none right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

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

const ____path_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ____path_
});

const sitemap_xml = defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const base = String(config.public.siteUrl).replace(/\/$/, "");
  const paths = ["", "shop", "restaurant", "hotel", "scenic", "route", "community", "search"];
  const urls = paths.map((path) => `<url><loc>${base}/${path}</loc><changefreq>daily</changefreq></url>`).join("");
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitemap_xml
});

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    if (typeof ssrError.data === "string") {
      try {
        ssrError.data = destr(ssrError.data);
      } catch {
      }
    }
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});
//# sourceMappingURL=index.mjs.map
