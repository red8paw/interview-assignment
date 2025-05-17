export class HttpError extends Error {
  readonly code: number
  readonly message: string
  readonly meta?: unknown

  constructor(response: Response, meta?: unknown) {
    const { status: code, statusText } = response
    const reason = `${code} ${statusText}`.trim()
    const message = reason ? `status code ${reason}` : 'an unknown error'

    super(`Request failed with ${message}: ${response.url}`)

    this.name = 'HTTPError'
    this.code = code
    this.message = message
    this.meta = meta
  }
}
