'use client'

import { type FC } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { AppContainer } from '@/components/base/app-container'
import { SearchBox } from '@/components/views/search-box'
import { SearchHistory } from '@/components/views/search-history'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/base/divider'

const SearchPage: FC = () => {
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }

  return (
    <AppContainer>
      <div>
        <Button size="icon" onClick={handleClickBack} variant="ghost">
          <ArrowLeftIcon className="size-6" />
        </Button>

        <h1 className="text-3xl font-semibold truncate">Location</h1>
      </div>

      <SearchBox />
      <Divider className="mt-10" />
      <SearchHistory />
    </AppContainer>
  )
}

export default SearchPage
