
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CardsPlaceCard': typeof import("../components/cards/PlaceCard.vue")['default']
    'CardsProductCard': typeof import("../components/cards/ProductCard.vue")['default']
    'CardsStoryCard': typeof import("../components/cards/StoryCard.vue")['default']
    'CartLine': typeof import("../components/cart/CartLine.vue")['default']
    'CommonBreadcrumbs': typeof import("../components/common/Breadcrumbs.vue")['default']
    'CommonCatalogPage': typeof import("../components/common/CatalogPage.vue")['default']
    'CommonDetailPage': typeof import("../components/common/DetailPage.vue")['default']
    'CommonEmptyState': typeof import("../components/common/EmptyState.vue")['default']
    'GeoMap': typeof import("../components/geo/GeoMap.vue")['default']
    'GeoNearbyRecommendations': typeof import("../components/geo/NearbyRecommendations.vue")['default']
    'HomeHeroBanner': typeof import("../components/home/HeroBanner.vue")['default']
    'LayoutSiteFooter': typeof import("../components/layout/SiteFooter.vue")['default']
    'LayoutSiteHeader': typeof import("../components/layout/SiteHeader.vue")['default']
    'OrderStatus': typeof import("../components/order/OrderStatus.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCardsPlaceCard': LazyComponent<typeof import("../components/cards/PlaceCard.vue")['default']>
    'LazyCardsProductCard': LazyComponent<typeof import("../components/cards/ProductCard.vue")['default']>
    'LazyCardsStoryCard': LazyComponent<typeof import("../components/cards/StoryCard.vue")['default']>
    'LazyCartLine': LazyComponent<typeof import("../components/cart/CartLine.vue")['default']>
    'LazyCommonBreadcrumbs': LazyComponent<typeof import("../components/common/Breadcrumbs.vue")['default']>
    'LazyCommonCatalogPage': LazyComponent<typeof import("../components/common/CatalogPage.vue")['default']>
    'LazyCommonDetailPage': LazyComponent<typeof import("../components/common/DetailPage.vue")['default']>
    'LazyCommonEmptyState': LazyComponent<typeof import("../components/common/EmptyState.vue")['default']>
    'LazyGeoMap': LazyComponent<typeof import("../components/geo/GeoMap.vue")['default']>
    'LazyGeoNearbyRecommendations': LazyComponent<typeof import("../components/geo/NearbyRecommendations.vue")['default']>
    'LazyHomeHeroBanner': LazyComponent<typeof import("../components/home/HeroBanner.vue")['default']>
    'LazyLayoutSiteFooter': LazyComponent<typeof import("../components/layout/SiteFooter.vue")['default']>
    'LazyLayoutSiteHeader': LazyComponent<typeof import("../components/layout/SiteHeader.vue")['default']>
    'LazyOrderStatus': LazyComponent<typeof import("../components/order/OrderStatus.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CardsPlaceCard: typeof import("../components/cards/PlaceCard.vue")['default']
export const CardsProductCard: typeof import("../components/cards/ProductCard.vue")['default']
export const CardsStoryCard: typeof import("../components/cards/StoryCard.vue")['default']
export const CartLine: typeof import("../components/cart/CartLine.vue")['default']
export const CommonBreadcrumbs: typeof import("../components/common/Breadcrumbs.vue")['default']
export const CommonCatalogPage: typeof import("../components/common/CatalogPage.vue")['default']
export const CommonDetailPage: typeof import("../components/common/DetailPage.vue")['default']
export const CommonEmptyState: typeof import("../components/common/EmptyState.vue")['default']
export const GeoMap: typeof import("../components/geo/GeoMap.vue")['default']
export const GeoNearbyRecommendations: typeof import("../components/geo/NearbyRecommendations.vue")['default']
export const HomeHeroBanner: typeof import("../components/home/HeroBanner.vue")['default']
export const LayoutSiteFooter: typeof import("../components/layout/SiteFooter.vue")['default']
export const LayoutSiteHeader: typeof import("../components/layout/SiteHeader.vue")['default']
export const OrderStatus: typeof import("../components/order/OrderStatus.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCardsPlaceCard: LazyComponent<typeof import("../components/cards/PlaceCard.vue")['default']>
export const LazyCardsProductCard: LazyComponent<typeof import("../components/cards/ProductCard.vue")['default']>
export const LazyCardsStoryCard: LazyComponent<typeof import("../components/cards/StoryCard.vue")['default']>
export const LazyCartLine: LazyComponent<typeof import("../components/cart/CartLine.vue")['default']>
export const LazyCommonBreadcrumbs: LazyComponent<typeof import("../components/common/Breadcrumbs.vue")['default']>
export const LazyCommonCatalogPage: LazyComponent<typeof import("../components/common/CatalogPage.vue")['default']>
export const LazyCommonDetailPage: LazyComponent<typeof import("../components/common/DetailPage.vue")['default']>
export const LazyCommonEmptyState: LazyComponent<typeof import("../components/common/EmptyState.vue")['default']>
export const LazyGeoMap: LazyComponent<typeof import("../components/geo/GeoMap.vue")['default']>
export const LazyGeoNearbyRecommendations: LazyComponent<typeof import("../components/geo/NearbyRecommendations.vue")['default']>
export const LazyHomeHeroBanner: LazyComponent<typeof import("../components/home/HeroBanner.vue")['default']>
export const LazyLayoutSiteFooter: LazyComponent<typeof import("../components/layout/SiteFooter.vue")['default']>
export const LazyLayoutSiteHeader: LazyComponent<typeof import("../components/layout/SiteHeader.vue")['default']>
export const LazyOrderStatus: LazyComponent<typeof import("../components/order/OrderStatus.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
