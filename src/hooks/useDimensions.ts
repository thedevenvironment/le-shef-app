import { useEffect, useRef, useState } from 'react'
import { Platform, Dimensions } from 'react-native'

/**
 * Use Dimensions
 * -
 */
export default function useDimensions() {
  const [{ width, height }, setDimesnsions] = useState(Dimensions.get('window'))
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  // On Resize Event
  const resizeHandler = () => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setDimesnsions(Dimensions.get('window')), 100)
  }

  // Trigger on Render
  useEffect(() => {
    if (Platform.OS === 'web') {
      window.addEventListener('resize', resizeHandler)
    }
  }, [])

  // Return
  return { width, height }
}
