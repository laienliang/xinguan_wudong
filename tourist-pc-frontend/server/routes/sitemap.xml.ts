export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const base = String(config.public.siteUrl).replace(/\/$/, '');
  const paths = ['', 'shop', 'restaurant', 'hotel', 'scenic', 'route', 'community', 'search'];
  const urls = paths
    .map((path) => `<url><loc>${base}/${path}</loc><changefreq>daily</changefreq></url>`)
    .join('');
  setHeader(event, 'content-type', 'application/xml; charset=utf-8');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});
