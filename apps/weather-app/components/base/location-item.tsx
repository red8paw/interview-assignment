import type { FC } from 'react'
import { MapPinIcon, Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { GeoInfo } from '@/services/search-location'

type Props = {
  onSelect: (geoInfo: GeoInfo) => void
  onDelete?: (geoInfo: GeoInfo) => void
  geoInfo: GeoInfo
}

export const LocationItem: FC<Props> = ({ onSelect, onDelete, geoInfo }) => {
  const { name, state, country } = geoInfo
  const title = `${name}, ${state ? `${state}, ` : ''} ${country}`

  const handleClickSelect = (): void => {
    onSelect(geoInfo)
  }

  const handleClickDelete = (): void => {
    onDelete?.(geoInfo)
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-xl flex-1">{title}</div>

      {onDelete && (
        <Button variant="secondary" size="icon" onClick={handleClickDelete}>
          <Trash2Icon />
        </Button>
      )}

      <Button variant="outline" onClick={handleClickSelect}>
        <MapPinIcon /> View
      </Button>
    </div>
  )
}
