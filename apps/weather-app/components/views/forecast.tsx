'use client'

import type { FC } from 'react'
import { ForecastList } from '../base/forecast-list'
import { useForecast } from '@/hooks/forecast'

export const Forecast5Day: FC = () => {
  const { data } = useForecast()

  return (
    <div className="mt-4 p-6 bg-secondary text-secondary-foreground rounded-lg">
      <div className="uppercase text-sm tracking-wider font-semibold text-slate-500">
        5-days forecast
      </div>
      <ForecastList list={data?.list ?? []} />
    </div>
  )
}
