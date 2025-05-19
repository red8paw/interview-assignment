import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

export const Card: FC<ComponentProps<'div'>> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn('p-6 bg-secondary text-secondary-foreground rounded-lg', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
