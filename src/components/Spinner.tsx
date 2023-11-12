import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { appTheme } from 'src/assets/styles/theme'
import useDimensions from 'src/hooks/useDimensions'

/**
 * Spinner
 * -
 */
export default function Spinner() {
  const { width, height } = useDimensions()

  return (
    <S.SpinnerWrapper testID="spinner-wrapper" width={width} height={height}>
      <ActivityIndicator testID="activity-indicator" color={appTheme.secondary} size="large" />
    </S.SpinnerWrapper>
  )
}

const S = {
  SpinnerWrapper: styled.View<{ width: number; height: number }>`
    position: absolute;
    height: ${p => p.height}px;
    width: ${p => p.width}px;
    align-items: center;
    justify-content: center;
  `
}
