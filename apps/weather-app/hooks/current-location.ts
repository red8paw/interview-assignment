'use client'

import { useEffect, useState } from 'react'
import { getSelectedLocation } from '@/helpers/location-storage'
import type { GeoInfo } from '@/services/search-location'

export const useCurrentLocation = (): GeoInfo | undefined => {
  const [hydrated, setHydrated] = useState(false)
  const currentLocation = getSelectedLocation()

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated ? currentLocation : undefined
}
