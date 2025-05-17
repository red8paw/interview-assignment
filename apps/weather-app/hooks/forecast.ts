import useSWR from 'swr'
import { SwrKey } from '@/common/swr-key'
import type { Coord } from '@/common/coord'
import { fetchForecast } from '@/services/forecast'

export const useForecast = (coord: Coord) => {
  const { lat, lon } = coord

  return useSWR([SwrKey.useForecast, lat, lon], () => fetchForecast(coord))
}
