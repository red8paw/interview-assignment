import type { Metadata } from 'next'
import type { FC } from 'react'
import { Rubik } from 'next/font/google'

import './globals.css'

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Current weather information for any location',
}
type Props = {
  children: React.ReactNode
}

const RootLayout: FC<Props> = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${rubikSans.variable} antialiased font-sans`}>{children}</body>
    </html>
  )
}

export default RootLayout
