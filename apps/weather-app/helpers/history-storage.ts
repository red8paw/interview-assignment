import { DEFAULT_LOCATION } from './location-storage'
import { StorageKey } from '@/common/storage-key'
import type { GeoInfo } from '@/services/search-location'

export const getLocationHistory = (): GeoInfo[] => {
  try {
    if (typeof window === 'undefined') return [DEFAULT_LOCATION]

    const saved = localStorage.getItem(StorageKey.LocationHistory)
    if (!saved) return [DEFAULT_LOCATION]

    const parsed = JSON.parse(saved) as GeoInfo[]
    if (!parsed) return [DEFAULT_LOCATION]

    return parsed
  } catch (error) {
    console.warn('Error parsing search history from localStorage:', error)
    return [DEFAULT_LOCATION]
  }
}

export const addHistory = (newLocation: GeoInfo): void => {
  if (typeof window === 'undefined') throw new Error('addHistory do NOT support server side')

  const currentArr = getLocationHistory()
  const dedupArr = currentArr.filter(gl => gl.lat !== newLocation.lat || gl.lon !== newLocation.lon)
  const newArr = [newLocation, ...dedupArr]

  localStorage.setItem(StorageKey.LocationHistory, JSON.stringify(newArr))
}
