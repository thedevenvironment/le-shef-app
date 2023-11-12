export interface ContentfulPage {
  pageName: string
  pageId: string
  bannerImage: {
    description: string
    url: string
  }
  logoImage: {
    description: string
    url: string
  }
  pageHeader: string
  pageContentCollection: {
    items: Record<'text', string>[]
  }
  contactHeader: string
  contactEmail: string
  contactImage: {
    description: string
    url: string
  }
}

export interface ContentfulMetadata {
  pageId: string
  lastFetchTime: number
  status: string
}
