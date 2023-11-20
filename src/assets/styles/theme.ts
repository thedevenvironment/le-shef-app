import type { DefaultTheme } from 'styled-components'

/**
 * https://coolors.co/edf6fa-caecfb-ff7d4c-012622-003b36
 */
export const appTheme: DefaultTheme = {
  background: '#caecfb',
  foreground: '#edf6fa',
  primary: '#FF7E6B',
  success: '#06BA63',
  warning: '#E9DF00',
  failure: '#FF2353',
  inactive: '#CCC'
}

export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.primary,
    card: appTheme.background,
    notification: appTheme.primary,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
