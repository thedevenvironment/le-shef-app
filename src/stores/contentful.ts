import type { ContentfulMetadata, ContentfulPage } from 'src/types/contentful'
import { getContentful } from 'src/services/contentful'
import { createStore } from 'src/utils/createStore'

/**
 * Use Content Store
 * -
 */
export const useContentfulStore = createStore('store', set => ({
  // Content
  content: {} as ContentfulPage,

  // Metadata
  metadata: { pageId: '', lastFetchTime: 0, status: 'loading' } as ContentfulMetadata,

  // Fetch Content
  fetchContent: async (pageId: string) => {
    const response = await getContentful('/', pageId, 1)
    set(() => response)
  }
}))
