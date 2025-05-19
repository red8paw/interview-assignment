'use client'

import type { FC } from 'react'
import { ForecastList } from '../base/forecast-list'
import { useForecast } from '@/hooks/forecast'
import { Subtitle } from '@/components/base/subtitle'

export const Forecast5Day: FC = () => {
  const { data } = useForecast()

  return (
    <div className="mt-4 p-6 bg-secondary text-secondary-foreground rounded-lg">
      <Subtitle>5-days forecast</Subtitle>
      <ForecastList list={data?.list ?? []} />
    </div>
  )
}
