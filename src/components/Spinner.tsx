import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { appTheme } from 'src/assets/styles/theme'

/**
 * Spinner
 * -
 */
export default function Spinner() {
  return (
    <S.Spinner testID="spinner">
      <ActivityIndicator testID="activity-indicator" color={appTheme.secondary} size="large" />
    </S.Spinner>
  )
}

const S = {
  Spinner: styled.View`
    background-color: ${appTheme.background};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}
