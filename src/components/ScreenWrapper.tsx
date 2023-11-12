import { Stack } from 'expo-router'
import styled from 'styled-components/native'
import Spinner from 'src/components/Spinner'
import usePreloadPage from 'src/hooks/usePreloadPage'

interface Props {
  children: React.ReactNode
  pageId: string
  title: string
}

/**
 * Screen Wrapper
 * -
 */
export default function ScreenWrapper({ children, pageId, title }: Props) {
  const loaded = usePreloadPage(pageId)

  return (
    <S.ScreenWrapper>
      <S.ContentWrapper>
        <Stack.Screen options={{ title }} />
        {loaded ? children : <Spinner />}
      </S.ContentWrapper>
    </S.ScreenWrapper>
  )
}

const S = {
  ScreenWrapper: styled.ScrollView`
    flex: 1;
  `,
  ContentWrapper: styled.View`
    width: 100%;
    max-width: 1000px;
    margin: auto;
  `
}
