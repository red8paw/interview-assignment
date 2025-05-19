import { StorageKey } from '@/common/storage-key'
import type { GeoInfo } from '@/services/search-location'

export const getLocationHistory = (): GeoInfo[] => {
  try {
    if (typeof window === 'undefined') return []

    const saved = localStorage.getItem(StorageKey.LocationHistory)
    if (!saved) return []

    const parsed = JSON.parse(saved) as GeoInfo[]
    if (!parsed) return []

    return parsed
  } catch (error) {
    console.warn('Error parsing search history from localStorage:', error)
    return []
  }
}

export const addHistory = (newLocation: GeoInfo): void => {
  if (typeof window === 'undefined') throw new Error('addHistory do NOT support server side')

  const currentArr = getLocationHistory()
  const dedupArr = currentArr.filter(gl => gl.lat !== newLocation.lat || gl.lon !== newLocation.lon)
  const newArr = [newLocation, ...dedupArr]

  localStorage.setItem(StorageKey.LocationHistory, JSON.stringify(newArr))
}

export const deleteHistory = (location: GeoInfo): void => {
  if (typeof window === 'undefined') throw new Error('deleteHistory do NOT support server side')

  const currentArr = getLocationHistory()
  const dedupArr = currentArr.filter(gl => gl.lat !== location.lat || gl.lon !== location.lon)

  localStorage.setItem(StorageKey.LocationHistory, JSON.stringify(dedupArr))
}
