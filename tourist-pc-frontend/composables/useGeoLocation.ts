export function useGeoLocation() {
  const cacheKey = "wudong-geo-position";
  const cityCacheKey = "wudong-geo-city";
  const cacheDuration = 10 * 60 * 1000;
  const position = useState<{ latitude: number; longitude: number } | null>(
    "geo-position",
    () => null,
  );
  const status = useState<
    "idle" | "loading" | "granted" | "denied" | "unsupported"
  >("geo-status", () => "idle");
  const city = useState("geo-city", () => "黔东南");

  function restoreCache() {
    if (!import.meta.client || position.value) return;
    try {
      const raw = localStorage.getItem(cacheKey);
      if (!raw) return;
      const cached = JSON.parse(raw) as {
        latitude: number;
        longitude: number;
        timestamp: number;
      };
      if (
        Date.now() - cached.timestamp <= cacheDuration &&
        Number.isFinite(cached.latitude) &&
        Number.isFinite(cached.longitude)
      ) {
        position.value = {
          latitude: cached.latitude,
          longitude: cached.longitude,
        };
        status.value = "granted";
      } else {
        localStorage.removeItem(cacheKey);
      }
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  async function requestIpLocation() {
    if (!import.meta.client) return city.value;
    const config = useRuntimeConfig();
    if (!config.public.amapKey) return city.value;
    try {
      const result = await $fetch<{
        status?: string;
        city?: string | string[];
      }>("https://restapi.amap.com/v3/ip", {
        query: { key: config.public.amapKey },
      });
      const value = Array.isArray(result.city) ? result.city[0] : result.city;
      if (result.status === "1" && value) {
        city.value = value;
        localStorage.setItem(cityCacheKey, value);
      }
    } catch {
      city.value = localStorage.getItem(cityCacheKey) || city.value;
    }
    return city.value;
  }

  async function requestLocation() {
    if (!import.meta.client || !navigator.geolocation) {
      status.value = "unsupported";
      await requestIpLocation();
      return null;
    }
    status.value = "loading";
    return new Promise<typeof position.value>((resolve) =>
      navigator.geolocation.getCurrentPosition(
        (result) => {
          position.value = {
            latitude: result.coords.latitude,
            longitude: result.coords.longitude,
          };
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ ...position.value, timestamp: Date.now() }),
          );
          status.value = "granted";
          resolve(position.value);
        },
        async () => {
          status.value = "denied";
          await requestIpLocation();
          resolve(null);
        },
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 },
      ),
    );
  }
  if (import.meta.client) {
    onMounted(restoreCache);
  }
  return { position, city, status, requestLocation, requestIpLocation };
}
