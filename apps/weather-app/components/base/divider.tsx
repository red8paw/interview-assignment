import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

export const Divider: FC<ComponentProps<'div'>> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('border-t border-border w-full', className)} {...rest}>
      {children}
    </div>
  )
}
