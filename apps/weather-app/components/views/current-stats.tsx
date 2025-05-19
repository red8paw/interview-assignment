'use client'

import type { FC } from 'react'
import { ThermometerSunIcon, WindIcon, DropletIcon, BinocularsIcon } from 'lucide-react'
import { Stats } from '@/components/base/stats'
import { WindDirectionArrow } from '@/components/base/wind-direction-arrow'
import { Card } from '@/components/base/card'
import { useCurrentWeather } from '@/hooks/current-weather'
import {
  formatCelsiusTemp,
  formatHumidity,
  formatVisibility,
  formatWindSpeed,
} from '@/utils/unit-format'

export const CurrentStats: FC = () => {
  const { data } = useCurrentWeather()

  const { main: mainStats, wind: windStats, visibility } = data ?? {}
  const { humidity, feels_like: realFeel } = mainStats ?? {}
  const { speed, deg = 0 } = windStats ?? {}

  return (
    <Card className="mt-12 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4">
      <Stats icon={<ThermometerSunIcon />} label="real feel">
        {formatCelsiusTemp(realFeel)}
      </Stats>

      <Stats icon={<WindIcon />} label="wind">
        <div className="flex gap-1">
          <WindDirectionArrow deg={deg} />
          {formatWindSpeed(speed)}
        </div>
      </Stats>

      <Stats icon={<DropletIcon />} label="humidity">
        {formatHumidity(humidity)}
      </Stats>

      <Stats icon={<BinocularsIcon />} label="visibility">
        {formatVisibility(visibility)}
      </Stats>
    </Card>
  )
}
