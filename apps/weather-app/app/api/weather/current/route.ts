import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { HttpError, toru } from '../../../../../../packages/toru/src'
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from '../../config'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  searchParams.set('appid', OPEN_WEATHER_API_KEY)
  searchParams.set('units', 'metric')

  try {
    const { status, data } = await toru(
      `${OPEN_WEATHER_BASE_URL}/data/2.5/weather?${searchParams.toString()}`,
    )

    return NextResponse.json(data, { status })
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(
      {
        error: { message: 'Internal server error' },
      },
      { status: 500 },
    )
  }
}
