import type { FC } from 'react'

import {
  ThermometerSunIcon,
  ThermometerIcon,
  WindIcon,
  DropletIcon,
  BinocularsIcon,
} from 'lucide-react'
import { SummaryImg } from './summary-img'
import { InlineStats } from './inline-stats'
import type { Forecast } from '@/services/forecast'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { formatTime } from '@/utils/datetime-format'

type Props = {
  item: Forecast
}
export const ForecastItem: FC<Props> = ({ item }) => {
  const { weather: summary, dt, main, wind, visibility } = item
  const { description, icon } = summary[0]
  const { temp, feels_like: realFeel, humidity } = main
  const date = new Date(dt * 1000)

  return (
    <AccordionItem value={item.dt.toString()}>
      <AccordionTrigger>
        <div className="flex items-center justify-center gap-2 w-full">
          <div className="flex-1 font-semibold text-base">{formatTime(date)}</div>

          <div className="capitalize font-semibold text-base">{description}</div>
          <SummaryImg
            description={description}
            icon={icon}
            size={40}
            className="bg-background rounded-full shrink-0 shadow-md"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="w-full pr-8 flex flex-col gap-2">
          <InlineStats icon={<ThermometerIcon size={20} />} label="Temperature">
            {temp}°C
          </InlineStats>
          <InlineStats icon={<ThermometerSunIcon size={20} />} label="Real feel">
            {realFeel}°C
          </InlineStats>
          <InlineStats icon={<DropletIcon size={20} />} label="Humidity">
            {humidity}%
          </InlineStats>
          <InlineStats icon={<WindIcon size={20} />} label="Wind speed">
            {wind.speed} m/s
          </InlineStats>
          <InlineStats icon={<BinocularsIcon size={20} />} label="Visibility">
            {visibility / 1000} km
          </InlineStats>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
