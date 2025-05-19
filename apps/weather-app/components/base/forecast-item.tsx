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
import { WindDirectionArrow } from './wind-direction-arrow'
import type { Forecast } from '@/services/forecast'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { formatTime } from '@/utils/datetime-format'
import {
  formatCelsiusTemp,
  formatHumidity,
  formatVisibility,
  formatWindSpeed,
} from '@/utils/unit-format'

type Props = {
  item: Forecast
}
export const ForecastItem: FC<Props> = ({ item }) => {
  const { weather: summary, dt, main, wind, visibility } = item
  const { description, icon } = summary[0]
  const { temp, feels_like: realFeel, humidity } = main
  const { speed, deg } = wind
  const date = new Date(dt * 1000)

  return (
    <AccordionItem value={item.dt.toString()}>
      <AccordionTrigger>
        <div className="flex items-center justify-center gap-2 w-full">
          <div className="flex-1 font-semibold text-base">{formatTime(date)}</div>

          <div className="capitalize font-normal text-base truncate">{description}</div>
          <SummaryImg
            description={description}
            icon={icon}
            size={40}
            className="size-10 bg-background rounded-full shrink-0 shadow-md"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="w-full pr-8 flex flex-col gap-2">
          <InlineStats icon={<ThermometerIcon size={20} />} label="Temperature">
            {formatCelsiusTemp(temp)}
          </InlineStats>
          <InlineStats icon={<ThermometerSunIcon size={20} />} label="Real feel">
            {formatCelsiusTemp(realFeel)}
          </InlineStats>
          <InlineStats icon={<DropletIcon size={20} />} label="Humidity">
            {formatHumidity(humidity)}
          </InlineStats>
          <InlineStats icon={<WindIcon size={20} />} label="Wind speed">
            <div className="flex gap-1">
              <WindDirectionArrow deg={deg} />
              {formatWindSpeed(speed)}
            </div>
          </InlineStats>
          <InlineStats icon={<BinocularsIcon size={20} />} label="Visibility">
            {formatVisibility(visibility)}
          </InlineStats>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
