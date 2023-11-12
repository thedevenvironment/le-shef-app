import type { ContentfulMetadata } from 'src/types/contentful'

/**
 * Revalidate Cache
 * -
 */
export function revalidateCache(metadata: ContentfulMetadata, pageId: string) {
  const expiredCache = new Date().getTime() - metadata.lastFetchTime > 30 * 60 * 1000
  const invalidPage = metadata.pageId !== pageId

  return expiredCache || invalidPage
}
