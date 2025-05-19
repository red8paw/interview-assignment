import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

export const AppContainer: FC<ComponentProps<'div'>> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cn(
        'min-h-screen w-screen max-w-xl',
        'flex flex-col',
        'm-auto px-4 py-8 sm:px-12 sm:pb-20 sm:pt-12',
        'border-l border-r border-border',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
