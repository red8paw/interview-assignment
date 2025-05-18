'use client'

import type { FC } from 'react'
import { ForecastList } from '../base/forecast-list'
import { DEFAULT_COORD } from '@/common/coord'
import { useForecast } from '@/hooks/forecast'

export const Forecast5Day: FC = () => {
  const { data } = useForecast(DEFAULT_COORD)

  return (
    <div className="p-6 bg-secondary text-secondary-foreground rounded-lg">
      <div className="uppercase text-sm tracking-wider font-semibold text-slate-500">
        5-days forecast
      </div>
      <ForecastList list={data?.list ?? []} />
    </div>
  )
}
