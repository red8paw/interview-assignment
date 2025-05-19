'use client'

import { useState, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { Subtitle } from '../base/subtitle'
import { addHistory, deleteHistory, getLocationHistory } from '@/helpers/history-storage'
import { setSelectedLocation } from '@/helpers/location-storage'
import type { GeoInfo } from '@/services/search-location'
import { LocationItem } from '@/components/base/location-item'

export const SearchHistory: FC = () => {
  const router = useRouter()
  const [, setCount] = useState(0)

  const history = getLocationHistory()

  const forceReRender = (): void => {
    setCount(c => c + 1)
  }

  const handleSelectLocation = (location: GeoInfo): void => {
    setSelectedLocation(location)
    addHistory(location)
    router.push('/')
  }

  const handleDeleteLocation = (location: GeoInfo): void => {
    deleteHistory(location)
    forceReRender()
  }

  return (
    <div className="mt-3">
      <Subtitle>your location</Subtitle>
      <div className="mt-4 flex flex-col gap-4">
        {history?.map(l => (
          <LocationItem
            key={`${l.lat}${l.lon}`}
            geoInfo={l}
            onSelect={handleSelectLocation}
            onDelete={handleDeleteLocation}
          />
        ))}
      </div>
    </div>
  )
}
