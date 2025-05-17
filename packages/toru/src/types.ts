export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
type Route = string
export type RequestRoute = `${RequestMethod} ${Route}`

export type RequestHeaders = {
  contentType?: string
  authorization?: string
}

export type RequestOption = Omit<RequestInit, 'headers' | 'body'> & {
  /**
   * Use `key` to tell request to execute this kind of request only once at a time
   */
  key?: string
  headers?: RequestHeaders
  body?: BodyInit | object
}

export type ResponseType<R = unknown> = {
  status: Response['status']
  data: R
}
