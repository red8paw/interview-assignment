'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/utils/datetime-format'
import { useCurrentLocation } from '@/hooks/current-location'

export const CurrentLocationHeader: FC = () => {
  const currentLocation = useCurrentLocation()
  const { name } = currentLocation ?? {}
  const date = new Date()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold truncate">{name}</h1>

        <Link href="/search">
          <Button size="icon" variant="ghost">
            <SearchIcon className="size-6" />
          </Button>
        </Link>
      </div>
      <p className="text-lg text-secondary-foreground truncate">{formatDate(date)}</p>
    </div>
  )
}
