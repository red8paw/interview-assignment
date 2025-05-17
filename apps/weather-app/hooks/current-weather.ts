import useSWR from 'swr'
import { SwrKey } from '@/common/swr-key'
import type { Coord } from '@/common/coord'
import { fetchCurrentWeather } from '@/services/current-weather'

export const useCurrentWeather = (coord: Coord) => {
  const { lat, lon } = coord

  return useSWR([SwrKey.useCurrentWeather, lat, lon], () => fetchCurrentWeather(coord))
}
