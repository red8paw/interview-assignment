'use client'

import type { FormEventHandler, FC } from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

import { SearchIcon, LoaderCircleIcon } from 'lucide-react'
import { Subtitle } from '../base/subtitle'
import { LocationItem } from '../base/location-item'
import { Button } from '@/components/ui/button'
import { useSearchLocation } from '@/hooks/search-location'
import type { GeoInfo } from '@/services/search-location'
import { setSelectedLocation } from '@/helpers/location-storage'
import { Input } from '@/components/ui/input'
import { addHistory } from '@/helpers/history-storage'

export const SearchBox: FC = () => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const { data, trigger, isMutating } = useSearchLocation()

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    if (isMutating) return

    const inputValue = inputRef?.current?.value
    if (!inputValue) return

    void trigger(inputValue)
  }

  const handleSelectLocation = (location: GeoInfo): void => {
    setSelectedLocation(location)
    addHistory(location)
    router.push('/')
  }

  return (
    <div className="flex flex-col mt-10">
      <Subtitle>search new location</Subtitle>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
        <Input
          ref={inputRef}
          autoFocus
          type="text"
          placeholder="Search by city name, code"
          className="h-11"
        />
        <Button type="submit" size="iconlg" disabled={isMutating}>
          {isMutating ? (
            <LoaderCircleIcon className="size-6 animate-spin" />
          ) : (
            <SearchIcon className="size-6" />
          )}
        </Button>
      </form>

      <div className="mt-4 flex flex-col gap-2">
        {data === undefined && (
          <div className="mt-4 text-sm text-center text-slate-500">
            Get the latest weather updates for your location.
          </div>
        )}

        {data !== undefined && data.length === 0 && (
          <div className="mt-4 text-sm text-center text-slate-500">
            Oops! We couldn’t find your location.
          </div>
        )}

        {data?.map(l => (
          <LocationItem key={`${l.lat}${l.lon}`} geoInfo={l} onSelect={handleSelectLocation} />
        ))}
      </div>
    </div>
  )
}
