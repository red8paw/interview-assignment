export type Summary = {
  id: number
  main: string
  description: string
  icon: string
}

export type MainStats = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export type WindStats = {
  speed: number
  deg: number
  gust: number
}

export type CloudsStats = {
  all: number
}

export type RainStats = {
  '1h': number
  '3h': number
}
