import type { ImageProps } from 'next/image'
import Image from 'next/image'
import type { FC } from 'react'

const BASE_URL = 'https://openweathermap.org/img/wn'
const ICON_SIZE = '4x'
const ICON_EXT = 'png'

type Props = {
  icon: string
  description: string
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>

export const SummaryImg: FC<Props> = ({ icon, description, ...rest }) => {
  const src = `${BASE_URL}/${icon}@${ICON_SIZE}.${ICON_EXT}`

  return <Image src={src} alt={description} width={200} height={200} {...rest} />
}
