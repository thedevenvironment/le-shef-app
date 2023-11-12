import styled from 'styled-components/native'
import { View } from 'react-native-animatable'

/**
 * Footer
 * -
 */
export default function Footer() {
  return (
    <S.FooterWrapper animation="bounceIn" delay={2000}>
      <S.Text>{`© ${new Date().getFullYear()} The Dev Environment, Inc.`}</S.Text>
    </S.FooterWrapper>
  )
}

const S = {
  FooterWrapper: styled(View)`
    background-color: #333;
    padding-top: ${p => p.theme.dimensions(10, 'px')};
    padding-bottom: ${p => p.theme.dimensions(10, 'px')};
    padding-left: ${p => p.theme.dimensions(20, 'px')};
    padding-right: ${p => p.theme.dimensions(20, 'px')};
    margin: ${p => p.theme.dimensions(20, 'px')};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #555;
    border-radius: ${p => p.theme.dimensions(10, 'px')};
  `,
  Text: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 500;
    font-size: 10px;
    text-align: center;
  `
}
