'use client'

import type { FC } from 'react'
import { ThermometerSunIcon, WindIcon, DropletIcon, BinocularsIcon } from 'lucide-react'
import { Stats } from '../base/stats'
import { useCurrentWeather } from '@/hooks/current-weather'
import { DEFAULT_COORD } from '@/common/coord'

export const SummaryStats: FC = () => {
  const { data } = useCurrentWeather(DEFAULT_COORD)
  const { main: mainStats, wind: windStats, visibility } = data ?? {}
  const { humidity = 0, feels_like: realFeel } = mainStats ?? {}
  const { speed } = windStats ?? {}

  return (
    <div className="p-6 mt-10 bg-secondary text-secondary-foreground rounded-lg grid grid-cols-2 grid-rows-2 gap-4">
      <Stats icon={<ThermometerSunIcon />} label="real feel">
        {realFeel ? `${realFeel}°C` : '--'}
      </Stats>
      <Stats icon={<WindIcon />} label="wind">
        {speed ? `${speed} m/s` : '--'}
      </Stats>
      <Stats icon={<DropletIcon />} label="humidity">
        {humidity ? `${humidity}%` : '--'}
      </Stats>
      <Stats icon={<BinocularsIcon />} label="visibility">
        {visibility ? `${visibility / 1000} km` : '--'}
      </Stats>
    </div>
  )
}
