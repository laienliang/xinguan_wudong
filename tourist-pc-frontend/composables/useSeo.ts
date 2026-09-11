import type { PlaceRecord } from '~/types/api';

export function useSeo(input: { title: string; description: string; image?: string; type?: 'article' | 'website'; item?: PlaceRecord }) {
  const config = useRuntimeConfig();
  const url = import.meta.server ? undefined : window.location.href;
  useSeoMeta({
    title: input.title,
    description: input.description,
    keywords: '乌东文旅,贵州旅游,苗寨,黔东南',
    ogTitle: input.title,
    ogDescription: input.description,
    ogImage: input.image,
    ogType: input.type || 'website',
    ogUrl: url,
    twitterCard: 'summary_large_image'
  });
  useHead({ link: [{ rel: 'canonical', href: url || config.public.siteUrl }] });
}

export function jsonLdFor(item: PlaceRecord, type: string) {
  const name = item.name || item.title || '乌东文旅';
  return {
    '@context': 'https://schema.org', '@type': type, name,
    description: item.intro || item.detail || '', image: item.mainImage,
    address: item.address ? { '@type': 'PostalAddress', streetAddress: item.address } : undefined,
    geo: item.latitude && item.longitude ? { '@type': 'GeoCoordinates', latitude: item.latitude, longitude: item.longitude } : undefined,
    aggregateRating: item.score ? { '@type': 'AggregateRating', ratingValue: item.score, bestRating: 5 } : undefined
  };
}
