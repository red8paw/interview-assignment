import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { CurrentWeather } from '@/components/current-weather'
import { Forecast } from '@/components/forecast'

const HomePage: FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button>Get Started</Button>
      <CurrentWeather />
      <Forecast />
    </div>
  )
}

export default HomePage
