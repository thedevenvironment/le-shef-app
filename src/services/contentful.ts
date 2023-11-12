import type { ContentfulMetadata, ContentfulPage } from 'src/types/contentful'
import prepareHeaders from 'src/utils/prepareHeaders'

const baseUrl = 'https://graphql.contentful.com/content/v1/spaces/7rfqzlnxhlsh'

/**
 * Get Page Content
 * -
 */
export async function getContentful(path: string, pageId: string, limit: number): Promise<{ content: ContentfulPage; metadata: ContentfulMetadata }> {
  const options = {
    method: 'POST',
    body: JSON.stringify({ query: query(pageId, limit) }),
    headers: prepareHeaders({ Authorization: `Bearer k7b0PiTvNFHp8eWS8sagq1kSR2PEIovUWc2wxD17EDE` })
  }

  try {
    const request = await fetch(`${baseUrl}${path}`, options)

    if (!request.ok) throw new Error('failed to fetch from contentful')

    const { data } = await request.json()

    return {
      content: data.pageCollection.items[0] as ContentfulPage,
      metadata: {
        pageId,
        lastFetchTime: new Date().getTime(),
        status: 'success'
      }
    }
  } catch (err) {
    console.error(err)
    return {
      content: {} as ContentfulPage,
      metadata: {
        pageId: '',
        lastFetchTime: new Date().getTime(),
        status: 'failed'
      }
    }
  }
}

/**
 * GraphQL Query
 * -
 */
function query(pageId: string, limit: number) {
  return `
    {
      pageCollection(where: { pageId: "${pageId}" }, limit: ${limit}) {
        items {
          pageName
          pageId
          bannerImage { description url }
          logoImage { description url }
          pageHeader
          pageContentCollection { items { text } }
          contactHeader
          contactEmail
          contactImage { description url }
        }
      }
    }
  `
}
