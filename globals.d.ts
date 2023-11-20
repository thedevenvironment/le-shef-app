import 'styled-components'

declare module 'uuid/dist/v4'
declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string
  }
}
