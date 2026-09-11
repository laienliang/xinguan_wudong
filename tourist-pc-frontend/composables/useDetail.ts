import type { PlaceRecord } from '~/types/api';
export function useDetail(key:string, endpoint:string){const route=useRoute();const {request}=useApi();const {data,pending}=useAsyncData<PlaceRecord|null>(`${key}-${route.params.id}`,()=>request<PlaceRecord>(endpoint,{query:{id:route.params.id}}).catch(()=>null));return{item:data,pending};}
