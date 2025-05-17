'use client'

import type { FC } from 'react'
import { DEFAULT_COORD } from '@/common/coord'
import { useForecast } from '@/hooks/forecast'

export const Forecast: FC = () => {
  const { data } = useForecast(DEFAULT_COORD)

  console.debug('🚀 | data:', data)

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Forecast</h2>
      <p className="text-lg">Loading...</p>
    </div>
  )
}
