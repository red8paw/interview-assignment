'use client'

import type { FC } from 'react'
import { SummaryImg } from '@/components/base/summary-img'
import { useCurrentWeather } from '@/hooks/current-weather'
import { formatRoundedCelsiusTemp } from '@/utils/unit-format'

export const CurrentSummary: FC = () => {
  const { data } = useCurrentWeather()

  // ? fallback to placeholder data => reduce layout shift
  const { weather: summary, main: mainStats } = data ?? {}
  const { icon = '02d', description = 'have a nice day' } = summary?.[0] ?? {}

  return (
    <div className="flex flex-col items-center justify-between mt-16">
      <div className="text-base sm:text-lg capitalize font-semibold tracking-wide">
        {description}
      </div>
      <SummaryImg icon={icon} description={description} size={208} className="-mt-6 -mb-5" />
      <div className="text-6xl sm:text-7xl font-semibold tracking-wide">
        {formatRoundedCelsiusTemp(mainStats?.temp)}
      </div>
    </div>
  )
}
