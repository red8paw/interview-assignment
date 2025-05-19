'use client'

import { useEffect, useState } from 'react'
import type { GeoInfo } from '@/services/search-location'
import { getLocationHistory } from '@/helpers/history-storage'

export const useSearchHistory = (): GeoInfo[] => {
  const [hydrated, setHydrated] = useState(false)
  const history = getLocationHistory()

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated ? history : []
}
