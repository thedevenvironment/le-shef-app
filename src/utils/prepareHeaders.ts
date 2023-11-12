/**
 * Prepare Headers
 * -
 */
export default function prepareHeaders(extraHeaders: Record<string, string>) {
  const headers = new Headers()

  // Default Headers
  headers.set('Accept', 'application/json; charset=UTF-8')
  headers.set('Content-type', 'application/json; charset=UTF-8')

  // Custom Headers
  Object.entries(extraHeaders).forEach(([key, value]) => headers.set(key, value))

  return headers
}
