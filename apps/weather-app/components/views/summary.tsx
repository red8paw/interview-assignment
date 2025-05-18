'use client'

import type { FC } from 'react'
import { SummaryImg } from '@/components/base/summary-img'
import { useCurrentWeather } from '@/hooks/current-weather'
import { DEFAULT_COORD } from '@/common/coord'
import { formatDate } from '@/utils/datetime-format'

export const CurrentSummary: FC = () => {
  const { data } = useCurrentWeather(DEFAULT_COORD)
  const { name = '--', dt, weather: summary, main: mainStats } = data ?? {}
  const { icon = '', description = '' } = summary?.[0] ?? {}
  const { temp = 0 } = mainStats ?? {}
  const currentDate = dt ? new Date(dt * 1_000) : new Date()

  return (
    <div className="flex flex-col items-stretch justify-center">
      <h1 className="text-3xl font-semibold truncate">{name}</h1>
      <p className="text-lg text-secondary-foreground truncate">{formatDate(currentDate)}</p>

      <div className="flex flex-col items-center justify-between mt-20">
        <div className="text-sm sm:text-base capitalize font-semibold tracking-wide">
          {description}
        </div>
        <SummaryImg icon={icon} description={description} size={200} className="-mt-6 -mb-5" />
        <div className="text-5xl sm:text-6xl font-semibold tracking-wide">{temp}°C</div>
      </div>
    </div>
  )
}
