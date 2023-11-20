import 'expo-dev-client'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import styled, { ThemeProvider } from 'styled-components/native'
import { appTheme, navTheme } from 'src/assets/styles/theme'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

/**
 * Root Layout
 * -
 */
export default function RootLayout() {
  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar style="light" />
      <S.AppWrapper>
        <NavProvider value={navTheme}>
          <Stack
            screenOptions={{
              headerTitle: () => <S.Logo source={require('src/assets/images/logo.png')} resizeMode="contain" alt="logo" />,
              headerShadowVisible: false
            }}
          />
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
    background-color: ${appTheme.background};
  `,
  Logo: styled.Image`
    margin: 0px 10px;
    height: 30px;
    width: 60px;
  `
}
