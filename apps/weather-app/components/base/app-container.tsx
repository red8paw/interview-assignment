import type { ComponentProps, FC } from 'react'

export const AppContainer: FC<ComponentProps<'div'>> = ({ children, ...rest }) => {
  return (
    <div
      className="min-h-screen w-screen max-w-xl flex flex-col gap-4 m-auto px-8 pt-20 pb-20 md:p-12 border-l border-r border-border"
      {...rest}
    >
      {children}
    </div>
  )
}
