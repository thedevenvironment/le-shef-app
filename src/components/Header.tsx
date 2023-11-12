import styled from 'styled-components/native'
import { View } from 'react-native-animatable'
import { useContentfulStore } from 'src/stores/contentful'
import { useEffect, useState } from 'react'
import { Platform, Dimensions } from 'react-native'

/**
 * Header
 * -
 */
export default function Header() {
  const [width, setWidth] = useState(Math.min(Dimensions.get('window').width, 1000) - 40)
  const [height, setHeight] = useState(Math.round(width * 0.165625))
  const bannerImageurl = useContentfulStore(s => s.content.bannerImage.url)
  const logoImageUrl = useContentfulStore(s => s.content.logoImage.url)

  useEffect(() => {
    if (Platform.OS === 'web') {
      let timeout: any
      window.addEventListener('resize', () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          const width = Math.min(Dimensions.get('window').width, 1000) - 40
          setWidth(width)
          setHeight(Math.round(width * 0.165625))
        }, 100)
      })
    }
  }, [])

  return (
    <S.Content>
      {/* Banner Image */}
      <S.BannerImageWrapper animation="flipInX" duration={1000}>
        <S.BannerImage source={{ uri: bannerImageurl }} resizeMode="contain" width={width} height={height} />
      </S.BannerImageWrapper>

      {/* Spacer */}
      <S.Spacer height={height} />

      {/* Logo Image */}
      <S.LogoImageWrapper animation="flipInY" duration={1000}>
        <S.LogoImage source={{ uri: logoImageUrl }} resizeMode="contain" height={height} />
      </S.LogoImageWrapper>
    </S.Content>
  )
}

const S = {
  Content: styled.View`
    margin-top: ${p => p.theme.dimensions(20, 'px')};
    margin-bottom: ${p => p.theme.dimensions(20, 'px')};
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  `,
  BannerImageWrapper: styled(View)`
    z-index: 0;
    position: absolute;
    border-color: ${p => p.theme.highlight};
    border-width: 1px;
    border-radius: ${p => p.theme.dimensions(10, 'px')};
    overflow: hidden;
  `,
  BannerImage: styled.Image<{ width: number; height: number }>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
  `,
  Spacer: styled.View<{ height: number }>`
    height: ${p => p.height / 2}px;
  `,
  LogoImageWrapper: styled(View)`
    z-index: 100;
    background-color: ${p => p.theme.background};
    border-width: 1px;
    border-radius: ${p => p.theme.dimensions(1000, 'px')};
    border-color: #000;
    overflow: hidden;
  `,
  LogoImage: styled.Image<{ height: number }>`
    width: ${p => p.height * 1.5}px;
    height: ${p => p.height * 1.5}px;
  `
}
