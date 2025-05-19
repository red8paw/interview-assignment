import { toru } from '@workspace/toru'
import type { CloudsStats, MainStats, RainStats, Summary, WindStats } from '@/common/stats'
import type { Coord } from '@/common/coord'

export type Sys = {
  pod: string
}
export type Forecast = {
  dt: number
  main: MainStats
  weather: Summary[]
  clouds: CloudsStats
  wind: WindStats
  visibility: number
  pop: number
  rain?: RainStats
  sys: Sys
  dt_txt: string
}
type City = {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}
export type ForecastData = {
  cod: string
  message: number
  cnt: number
  list: Forecast[]
  city: City
}

export const fetchForecast = async (coord: Coord) => {
  const result = await toru<ForecastData>(`/api/weather/forecast?lat=${coord.lat}&lon=${coord.lon}`)

  return result.data
}
