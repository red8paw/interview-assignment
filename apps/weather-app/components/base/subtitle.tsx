import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

export const Subtitle: FC<ComponentProps<'div'>> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn('uppercase text-sm tracking-wider font-semibold text-slate-500', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
