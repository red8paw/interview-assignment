import type { FC, ReactNode } from 'react'

type Props = {
  icon: ReactNode
  label: ReactNode
  children: ReactNode
}
export const InlineStats: FC<Props> = ({ icon, label, children }) => {
  return (
    <div className="flex items-center text-base">
      {icon}
      <div className="ml-2 font-normal">{label}</div>
      <div className="flex-1 font-semibold text-right">{children}</div>
    </div>
  )
}
