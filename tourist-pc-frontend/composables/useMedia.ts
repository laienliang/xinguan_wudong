export function useMedia() {
  const config = useRuntimeConfig();

  function imageUrl(value?: string) {
    if (!value) return "/hero-wudong.svg";
    if (/^https?:\/\//i.test(value)) return value;
    if (value.startsWith("/upload/wudong/")) {
      return `/images/wudong/${value.split("/").pop()}`;
    }
    return value.startsWith("/upload/") || value.startsWith("/uploads/")
      ? `${config.public.mediaBase}${value}`
      : value;
  }

  return { imageUrl };
}
