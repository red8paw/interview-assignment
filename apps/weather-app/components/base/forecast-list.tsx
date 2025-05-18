import type { FC } from 'react'

import { ForecastItem } from '@/components/base/forecast-item'
import { Accordion } from '@/components/ui/accordion'
import type { Forecast } from '@/services/forecast'

type Props = {
  list: Forecast[]
}
export const ForecastList: FC<Props> = ({ list }) => {
  return (
    <Accordion type="single" collapsible className="w-full mt-1">
      {list.map(item => (
        <ForecastItem key={item.dt} item={item} />
      ))}
    </Accordion>
  )
}
