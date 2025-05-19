export const formatRoundedCelsiusTemp = (temp: number | undefined): string =>
  `${temp === undefined ? '--' : Math.round(temp)}°C`

export const formatCelsiusTemp = (temp: number | undefined): string => `${temp ?? '--'}°C`

export const formatHumidity = (humidity: number | undefined): string =>
  `${humidity === undefined ? '--' : Math.round(humidity)}%`

export const formatWindSpeed = (speed: number | undefined): string => `${speed ?? '--'} m/s`

export const formatVisibility = (vInMetre: number | undefined): string =>
  `${vInMetre === undefined ? '--' : vInMetre / 1_000} m/s`
