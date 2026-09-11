export interface ApiEnvelope<T> {
  code: number;
  message?: string;
  data: T;
}

export interface PageResult<T> {
  list: T[];
  pagination?: { page: number; size: number; total: number };
}

export interface PlaceRecord {
  id: number | string;
  name?: string;
  title?: string;
  mainImage?: string;
  images?: string[];
  address?: string;
  intro?: string;
  detail?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  price?: number;
  score?: number;
  status?: number;
  [key: string]: unknown;
}
