'use client'

import useSWR from 'swr'
import { SwrKey } from '@/common/swr-key'
import { fetchCurrentWeather } from '@/services/current-weather'
import { getSelectedLocation } from '@/helpers/location-storage'

export const useCurrentWeather = () => {
  // ? using swr => do NOT need to handle hydration
  const geoInfo = getSelectedLocation()
  const { lat, lon } = geoInfo

  return useSWR([SwrKey.useCurrentWeather, lat, lon], () => fetchCurrentWeather({ lat, lon }))
}
