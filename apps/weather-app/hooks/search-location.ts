import useSWRMutation from 'swr/mutation'
import { SwrKey } from '@/common/swr-key'
import type { GeoInfo } from '@/services/search-location'
import { fetchGeoLocation } from '@/services/search-location'

export const useSearchLocation = () =>
  useSWRMutation<GeoInfo[], unknown, string, string>(SwrKey.useSearchLocation, (_key, { arg }) => {
    return fetchGeoLocation(arg)
  })
