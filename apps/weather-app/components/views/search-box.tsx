'use client'

import type { FormEventHandler, FC } from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

import { SearchIcon } from 'lucide-react'
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
        {data?.map(l => (
          <LocationItem key={`${l.lat}${l.lon}`} geoInfo={l} onSelect={handleSelectLocation} />
        ))}
      </div>
    </div>
  )
}
