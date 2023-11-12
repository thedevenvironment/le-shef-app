import type { DefaultTheme } from 'styled-components'
import { dimensions, height, width } from 'src/assets/styles/dimensions'

export const appTheme: DefaultTheme = {
  background: '#013C50',
  primary: '#FFFFFF',
  secondary: '#10BFD7',
  highlight: '#F3546F',
  dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
}

export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
