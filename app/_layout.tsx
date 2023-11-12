import 'expo-dev-client'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import styled, { ThemeProvider } from 'styled-components/native'
import { appTheme, navTheme } from 'src/assets/styles/theme'

/**
 * Root Layout
 * -
 */
export default function RootLayout() {
  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar style="light" />
      <S.AppWrapper testID='wowowowowowwowowowowowoowowowowowo'>
        <NavProvider value={navTheme}>
          <Stack screenOptions={{ headerShown: false }} />
        </NavProvider>
      </S.AppWrapper>
    </ThemeProvider>
  )
}

const S = {
  AppWrapper: styled.SafeAreaView`
    height: 100%;
    width: 100%;
    flex: 1;
    flex-direction: column;
    background-color: purple; //${appTheme.background};
  `
}
