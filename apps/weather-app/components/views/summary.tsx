'use client'

import type { FC } from 'react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SummaryImg } from '@/components/base/summary-img'
import { useCurrentWeather } from '@/hooks/current-weather'
import { formatDate } from '@/utils/datetime-format'

export const CurrentSummary: FC = () => {
  const { data } = useCurrentWeather()
  const { name = '--', dt, weather: summary, main: mainStats } = data ?? {}
  const { icon, description = '' } = summary?.[0] ?? {}
  const { temp = 0 } = mainStats ?? {}
  const currentDate = dt ? new Date(dt * 1_000) : new Date()

  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold truncate">{name}</h1>

        <Link href="/search">
          <Button size="icon" variant="ghost">
            <SearchIcon className="size-6" />
          </Button>
        </Link>
      </div>
      <p className="text-lg text-secondary-foreground truncate">{formatDate(currentDate)}</p>

      <div className="flex flex-col items-center justify-between mt-16">
        <div className="text-sm sm:text-base capitalize font-semibold tracking-wide">
          {description}
        </div>
        {icon ? (
          <SummaryImg icon={icon} description={description} size={208} className="-mt-6 -mb-5" />
        ) : (
          <div className="size-52 bg-secondary rounded-full animate-pulse" />
        )}

        <div className="text-5xl sm:text-6xl font-semibold tracking-wide">{temp}°C</div>
      </div>
    </div>
  )
}
