import type { FC } from 'react'

import { ForecastItem } from '@/components/base/forecast-item'
import { Accordion } from '@/components/ui/accordion'
import type { Forecast } from '@/services/forecast'
import { formatDate } from '@/utils/datetime-format'

type Props = {
  list: Forecast[]
}
export const ForecastList: FC<Props> = ({ list }) => {
  const groups = groupByDate(list)

  return (
    <div className="flex flex-col gap-2">
      {groups.map(group => (
        <div key={group[0].dt}>
          <div className="text-sm tracking-wider font-semibold text-slate-500 mt-4">
            {formatDate(new Date(group[0].dt * 1_000))}
          </div>

          <Accordion type="single" collapsible className="w-full">
            {group.map(item => (
              <ForecastItem key={item.dt} item={item} />
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}

const groupByDate = (list: Forecast[]): Forecast[][] => {
  return list.reduce<Forecast[][]>((grouped, item, currentIndex, arr) => {
    const date = new Date(item.dt * 1000)
    const dateOfMonth = date.getDate()

    const lastItem = arr[currentIndex - 1]
    const lastDateOfMonth = lastItem ? new Date(lastItem.dt * 1000).getDate() : undefined

    if (dateOfMonth !== lastDateOfMonth) {
      grouped.push([item])
      return grouped
    }

    grouped[grouped.length - 1].push(item)
    return grouped
  }, [])
}
