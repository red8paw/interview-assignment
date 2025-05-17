'use client'

import type { FC } from 'react'
import { useCurrentWeather } from '@/hooks/current-weather'
import { DEFAULT_COORD } from '@/common/coord'

export const CurrentWeather: FC = () => {
  const { data } = useCurrentWeather(DEFAULT_COORD)

  console.debug('🚀 | data:', data)

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <p className="text-lg">Loading...</p>
    </div>
  )
}
