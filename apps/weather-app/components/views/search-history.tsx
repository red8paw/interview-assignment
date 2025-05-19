'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { FileChartLineIcon } from 'lucide-react'
import { Subtitle } from '../base/subtitle'
import { Button } from '@/components/ui/button'
import { addHistory, getLocationHistory } from '@/helpers/history-storage'
import { setSelectedLocation } from '@/helpers/location-storage'
import type { GeoInfo } from '@/services/search-location'

export const SearchHistory: FC = () => {
  const router = useRouter()
  const history = getLocationHistory()

  const handleSelectLocation = (location: GeoInfo): void => {
    setSelectedLocation(location)
    addHistory(location)
    router.push('/')
  }

  return (
    <div className="mt-3">
      <Subtitle>your location</Subtitle>
      <div className="mt-4 flex flex-col gap-4">
        {history?.map(gl => (
          <div key={`${gl.lat}${gl.lon}`} className="flex items-center gap-2">
            <p className="text-2xl">{`${gl.name}, ${gl.state ? `${gl.state}, ` : ''} ${gl.country}`}</p>

            <Button
              variant="outline"
              className="ml-auto"
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
