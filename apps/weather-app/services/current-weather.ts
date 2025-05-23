import { toru } from '@workspace/toru'
import type { Coord } from '@/common/coord'
import type { CloudsStats, MainStats, Summary, WindStats } from '@/common/stats'

type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
export type CurrentWeatherData = {
  coord: Coord
  weather: [Summary]
  base: string
  main: MainStats
  visibility: number
  wind: WindStats
  clouds: CloudsStats
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export const fetchCurrentWeather = async (coord: Coord) => {
  const result = await toru<CurrentWeatherData>(
    `/api/weather/current?lat=${coord.lat}&lon=${coord.lon}`,
  )

  return result.data
}
