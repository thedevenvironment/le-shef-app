import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { useContentfulStore } from 'src/stores/contentful'
import { revalidateCache } from 'src/utils/cache'

/**
 * Use Preload Page
 * -
 */
export default function usePreloadPage(pageId: string) {
  const metadata = useContentfulStore(s => s.metadata)
  const fetchContent = useContentfulStore(s => s.fetchContent)

  useEffect(() => {
    if (revalidateCache(metadata, pageId)) fetchContent(pageId)
  }, [])

  const [fontsLoaded] = useFonts({
    helvetica: require('src/assets/fonts/helvetica.otf'),
    cocogoose: require('src/assets/fonts/cocogoose.ttf')
  })

  return fontsLoaded && metadata.status === 'success' && metadata.pageId === pageId
}
