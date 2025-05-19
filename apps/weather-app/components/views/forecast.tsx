'use client'

import type { FC } from 'react'
import { ForecastList } from '../base/forecast-list'
import { useForecast } from '@/hooks/forecast'
import { Subtitle } from '@/components/base/subtitle'
import { Card } from '@/components/base/card'

export const Forecast5Day: FC = () => {
  const { data } = useForecast()

  return (
    <Card className="mt-4">
      <Subtitle>5-days forecast</Subtitle>
      <ForecastList list={data?.list ?? []} />
    </Card>
  )
}
