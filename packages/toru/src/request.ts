import { requestController } from './abort-controller'
import { allowedMethods, requestTimeoutInMs } from './configurations'
import { HttpError } from './error'
import type { RequestMethod, RequestOption, RequestRoute, ResponseType } from './types'

const DEFAULT_CONTENT_TYPE = 'application/json'

export const request = async <R = unknown>(
  route: RequestRoute,
  option: RequestOption = {},
): Promise<ResponseType<R>> => {
  const [method, endpoint] = route.split(' ', 2) as [RequestMethod, string]

  // ? `method` validation
  if (!allowedMethods.includes(method)) {
    throw new Error('Request method not allowed')
  }

  const { headers = {}, body, key: requestKey, ...restOpts } = option

  // ? `header` initialization & validation
  const requestHeaders = new Headers({ Accept: 'application/json' })
  const { contentType = DEFAULT_CONTENT_TYPE, authorization } = headers

  // ? `Authorization` setting
  if (authorization) {
    requestHeaders.set('Authorization', authorization)
  }

  // ? `Content-Type` setting
  requestHeaders.set('Content-Type', contentType)

  const requestBody = body ? JSON.stringify(body) : undefined

  // ? Abort controller initialization
  const abortController = new AbortController()
  if (requestKey) {
    requestController[requestKey] = abortController
  }

  // ? Request Init
  const requestInit: RequestInit = {
    ...restOpts,
    method: method.toUpperCase(),
    headers: requestHeaders,
    body: requestBody,
  }

  // ? Request timeout handler
  const timeoutId = setTimeout(() => {
    abortController.abort()
    if (requestKey) {
      requestController[requestKey] = undefined
    }
  }, requestTimeoutInMs)

  // ? Execute
  const response = await fetch(endpoint, requestInit)

  // ? Cleanup
  clearTimeout(timeoutId)
  if (requestKey) {
    requestController[requestKey] = undefined
  }

  // ? Response `header` validation
  const resContentType = response.headers.get('content-type')
  if (!resContentType?.includes('application/json')) {
    throw new TypeError('Response content-type is unhandled - require `application/json`')
  }

  const jsonResponse = (await response.json()) as unknown

  if (response.ok) {
    return {
      status: response.status,
      data: jsonResponse as R,
    }
  }

  throw new HttpError(response, jsonResponse)
}
