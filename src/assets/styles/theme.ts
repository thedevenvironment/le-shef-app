import type { DefaultTheme } from 'styled-components'

export const appTheme: DefaultTheme = {
  background: '#CAECFB',
  primary: '#EDF6FA',
  highlight: '#FF7D4C',
}

export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.highlight,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
