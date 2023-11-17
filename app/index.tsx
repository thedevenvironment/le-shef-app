import styled from 'styled-components/native'

/**
 * Index Screen
 * -
 */
export default function IndexScreen() {
  return <S.Logo source={require('src/assets/images/app-icon.png')} />
}

const S = {
  Logo: styled.Image`
    margin: auto;
    height: 200px;
    width: 200px;
  `
}
