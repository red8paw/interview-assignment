import type { FC } from 'react'
import { CurrentSummary } from '@/components/views/summary'
import { Forecast5Day } from '@/components/views/forecast'
import { CurrentStats } from '@/components/views/current-stats'
import { AppContainer } from '@/components/base/app-container'

const HomePage: FC = () => {
  return (
    <AppContainer>
      <CurrentSummary />
      <CurrentStats />
      <Forecast5Day />
    </AppContainer>
  )
}

export default HomePage
