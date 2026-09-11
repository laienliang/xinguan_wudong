export function useDistance() {
  function between(a: { latitude: number; longitude: number }, b: { latitude: number; longitude: number }) {
    const rad = Math.PI / 180;
    const dLat = (b.latitude - a.latitude) * rad;
    const dLng = (b.longitude - a.longitude) * rad;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.latitude * rad) * Math.cos(b.latitude * rad) * Math.sin(dLng / 2) ** 2;
    return 6371000 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  }
  function formatDistance(value: number) { return value < 1000 ? `${Math.round(value)}m` : `${(value / 1000).toFixed(1)}km`; }
  return { between, formatDistance };
}
