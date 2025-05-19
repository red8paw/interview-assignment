import { ChevronsDownIcon } from 'lucide-react'
import type { FC } from 'react'

type Props = {
  deg: number
}
export const WindDirectionArrow: FC<Props> = ({ deg }) => {
  return <ChevronsDownIcon className="size-6" style={{ transform: `rotate(${deg}deg)` }} />
}
