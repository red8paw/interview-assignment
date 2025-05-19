import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

export const AppContainer: FC<ComponentProps<'div'>> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cn(
        'min-h-screen w-screen max-w-xl',
        'flex flex-col',
        'm-auto px-4 py-8 md:px-12 md:py-24',
        'border-l border-r border-border',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
