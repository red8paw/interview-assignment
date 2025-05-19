'use client'

import { useState, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { FileChartLineIcon, Trash2Icon } from 'lucide-react'
import { Subtitle } from '../base/subtitle'
import { Button } from '@/components/ui/button'
import { addHistory, deleteHistory, getLocationHistory } from '@/helpers/history-storage'
import { setSelectedLocation } from '@/helpers/location-storage'
import type { GeoInfo } from '@/services/search-location'

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
        {history?.map(gl => (
          <div key={`${gl.lat}${gl.lon}`} className="flex items-center gap-2">
            <p className="text-2xl flex-1">{`${gl.name}, ${gl.state ? `${gl.state}, ` : ''} ${gl.country}`}</p>

            <Button
              variant="secondary"
              size="icon"
              onClick={() => {
                handleDeleteLocation(gl)
              }}
            >
              <Trash2Icon />
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                handleSelectLocation(gl)
              }}
            >
              <FileChartLineIcon /> View
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
