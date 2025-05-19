'use client'

import type { FC } from 'react'
import { ThermometerSunIcon, WindIcon, DropletIcon, BinocularsIcon } from 'lucide-react'
import { Stats } from '../base/stats'
import { WindDirectionArrow } from '../base/wind-direction-arrow'
import { useCurrentWeather } from '@/hooks/current-weather'

export const CurrentStats: FC = () => {
  const { data } = useCurrentWeather()
  const { main: mainStats, wind: windStats, visibility } = data ?? {}
  const { humidity = 0, feels_like: realFeel } = mainStats ?? {}
  const { speed, deg } = windStats ?? {}

  return (
    <div className="p-6 mt-10 bg-secondary text-secondary-foreground rounded-lg grid grid-cols-2 grid-rows-2 gap-4">
      <Stats icon={<ThermometerSunIcon />} label="real feel">
        {realFeel ? `${realFeel}°C` : '--'}
      </Stats>
      <Stats icon={<WindIcon />} label="wind">
        <div className="flex gap-1">
          {deg !== undefined && <WindDirectionArrow deg={deg} />}
          <div>{speed ? `${speed} m/s` : '--'}</div>
        </div>
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
