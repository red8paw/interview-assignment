import type { FC } from 'react'
import { CurrentSummary } from '@/components/views/summary'
import { Forecast5Day } from '@/components/views/forecast'
import { CurrentStats } from '@/components/views/current-stats'
import { AppContainer } from '@/components/base/app-container'
import { CurrentLocationHeader } from '@/components/views/current-location-header'

const HomePage: FC = () => {
  return (
    <AppContainer>
      <CurrentLocationHeader />
      <CurrentSummary />
      <CurrentStats />
      <Forecast5Day />
    </AppContainer>
  )
}

export default HomePage
