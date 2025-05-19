import { toru } from '@workspace/toru'

export type GeoInfo = {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

export const fetchGeoLocation = async (query: string) => {
  const result = await toru<GeoInfo[]>(`/api/geo?q=${query}`)

  return result.data
}
