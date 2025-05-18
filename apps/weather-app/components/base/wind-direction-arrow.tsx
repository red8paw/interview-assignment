import { ChevronsDownIcon } from 'lucide-react'
import type { FC } from 'react'

type Props = {
  deg: number
}
export const WindDirectionArrow: FC<Props> = ({ deg }) => {
  return <ChevronsDownIcon size={24} style={{ transform: `rotate(${deg}deg)` }} />
}
