import useSWR from 'swr'
import { SwrKey } from '@/common/swr-key'
import { fetchForecast } from '@/services/forecast'
import { getSelectedLocation } from '@/helpers/location-storage'

export const useForecast = () => {
  const geoInfo = getSelectedLocation()
  const { lat, lon } = geoInfo

  return useSWR([SwrKey.useForecast, lat, lon], () => fetchForecast({ lat, lon }))
}
