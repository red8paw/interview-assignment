'use client'

import { useRef, type FC } from 'react'
import { useRouter } from 'next/navigation'

import { SearchIcon, FileChartLineIcon } from 'lucide-react'
import { Subtitle } from '../base/subtitle'
import { Button } from '@/components/ui/button'
import { useSearchLocation } from '@/hooks/search-location'
import type { GeoInfo } from '@/services/search-location'
import { setSelectedLocation } from '@/helpers/location-storage'
import { Input } from '@/components/ui/input'

export const SearchBox: FC = () => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const { data, trigger, isMutating } = useSearchLocation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isMutating) return

    const inputValue = inputRef?.current?.value
    if (!inputValue) return

    void trigger(inputValue)
  }

  const handleSelectLocation = (location: GeoInfo) => {
    setSelectedLocation(location)
    router.push('/')
  }

  return (
    <div className="flex flex-col mt-10">
      <Subtitle>search new location</Subtitle>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <Input
          ref={inputRef}
          autoFocus
          type="text"
          placeholder="Search by city name, code"
          className="h-11"
        />
        <Button type="submit" size="iconlg">
          <SearchIcon className="size-6" />
        </Button>
      </form>

      <div className="mt-4 flex flex-col gap-2">
        {data?.map(gl => (
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
