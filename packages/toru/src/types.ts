export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type RequestHeaders = {
  contentType?: string
  authorization?: string
}

export type RequestOption = Omit<RequestInit, 'headers' | 'body' | 'method'> & {
  /**
   * Use `key` to tell request to execute this kind of request only once at a time
   */
  key?: string
  method?: RequestMethod
  headers?: RequestHeaders
  body?: BodyInit | object
}

export type ResponseType<R = unknown> = {
  status: Response['status']
  data: R
}
