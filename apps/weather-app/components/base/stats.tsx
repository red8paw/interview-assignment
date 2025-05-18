import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  label: ReactNode
  icon: ReactNode
}

export const Stats: FC<Props> = ({ children, icon, label }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <div className="size-6">{icon}</div>
        <div className="uppercase text-sm tracking-wider">{label}</div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="size-6"></div>
        <div className="font-semibold">{children}</div>
      </div>
    </div>
  )
}
