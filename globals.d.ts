import 'styled-components'

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string
  }
}
