import type { FC } from 'react'
import { CurrentSummary } from '@/components/views/summary'
import { Forecast5Day } from '@/components/views/forecast'
import { CurrentStats } from '@/components/views/current-stats'

const HomePage: FC = () => {
  return (
    <div className="min-h-screen w-screen max-w-xl flex flex-col gap-4 m-auto px-8 pt-20 pb-20 md:p-12 border-l border-r border-border">
      <CurrentSummary />
      <CurrentStats />
      <Forecast5Day />
    </div>
  )
}

export default HomePage
