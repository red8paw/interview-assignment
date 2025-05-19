import { StorageKey } from '@/common/storage-key'
import type { GeoInfo } from '@/services/search-location'

export const DEFAULT_LOCATION: GeoInfo = {
  name: 'Singapore',
  lat: 1.2899175,
  lon: 103.8519072,
  country: 'SG',
}

export const getSelectedLocation = (): GeoInfo => {
  try {
    if (typeof window === 'undefined') return DEFAULT_LOCATION

    const saved = localStorage.getItem(StorageKey.SelectedLocation)
    if (!saved) return DEFAULT_LOCATION

    const parsed = JSON.parse(saved) as GeoInfo
    if (!parsed) return DEFAULT_LOCATION

    const { lat, lon } = parsed
    if (isNaN(Number(lat)) || isNaN(Number(lon))) return DEFAULT_LOCATION

    return parsed
  } catch (error) {
    console.warn('Error parsing location from localStorage:', error)
    return DEFAULT_LOCATION
  }
}

export const setSelectedLocation = (newLocation: GeoInfo): void => {
  if (typeof window === 'undefined')
    throw new Error('setSelectedLocation do NOT support server side')

  localStorage.setItem(StorageKey.SelectedLocation, JSON.stringify(newLocation))
}
