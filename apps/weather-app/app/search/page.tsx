'use client'

import { useRef, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { AppContainer } from '@/components/base/app-container'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSearchLocation } from '@/hooks/search-location'
import type { GeoInfo } from '@/services/search-location'
import { setSelectedLocation } from '@/helpers/location-storage'

const SearchPage: FC = () => {
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
    <AppContainer>
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold truncate">Search</h1>
        <p className="text-lg text-secondary-foreground truncate">
          Search your location to get the latest weather updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input ref={inputRef} autoFocus type="text" placeholder="Search by city name, code" />
        <Button type="submit" size="lg">
          Search
        </Button>
      </form>

      <div className="uppercase text-sm tracking-wider font-semibold text-slate-500">
        Search Result
      </div>

      <div>
        {data?.map(gl => (
          <div key={`${gl.lat}${gl.lon}`} className="flex items-center gap-2 font-semibold">
            <p>{`${gl.name}, ${gl.state ? `${gl.state}, ` : ''} ${gl.country}`}</p>

            <Button
              variant="outline"
              size="sm"
              className="ml-auto"
              onClick={() => {
                handleSelectLocation(gl)
              }}
            >
              Select
            </Button>
          </div>
        ))}
      </div>
    </AppContainer>
  )
}

export default SearchPage
