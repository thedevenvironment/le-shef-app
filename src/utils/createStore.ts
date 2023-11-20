import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { Platform } from 'react-native'

/**
 * Create Store
 * -
 */
export function createStore<T>(name: string, callback: (set: any) => T) {
  return create<T>()(
    devtools(
      persist(callback, {
        name,
        ...(Platform.OS !== 'web' ? { storage: createJSONStorage(() => AsyncStorage) } : {})
      })
    )
  )
}
