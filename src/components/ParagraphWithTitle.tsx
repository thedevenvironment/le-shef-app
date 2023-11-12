import styled from 'styled-components/native'
import { Text } from 'react-native-animatable'
import { useContentfulStore } from 'src/stores/contentful'

/**
 * Paragraph With Title
 * -
 */
export default function ParagraphWithTitle() {
  const pageHeader = useContentfulStore(s => s.content.pageHeader)
  const pageContentCollection = useContentfulStore(s => s.content.pageContentCollection)

  return (
    <S.Content>
      <S.Title animation="fadeInLeft" duration={1000} delay={1000}>{`< ${pageHeader} />`}</S.Title>
      {pageContentCollection.items.map((p, i) => (
        <S.Paragraph key={`paragraph-${i}`} animation="fadeInRight" duration={1000} delay={1000}>
          {p.text}
        </S.Paragraph>
      ))}
    </S.Content>
  )
}

const S = {
  Content: styled.View`
    padding-left: ${p => p.theme.dimensions(20, 'px')};
    padding-right: ${p => p.theme.dimensions(20, 'px')};
    align-items: stretch;
    justify-content: center;
  `,
  Title: styled(Text)`
    color: ${p => p.theme.secondary};
    font-family: cocogoose;
    font-weight: 900;
    font-size: 18px;
    margin-bottom: ${p => p.theme.dimensions(20, 'px')};
    text-align: center;
  `,
  Paragraph: styled(Text)`
    color: ${p => p.theme.primary};
    line-height: ${p => p.theme.dimensions(18, 'px')};
    font-family: helvetica;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: ${p => p.theme.dimensions(15, 'px')};
    text-align: left;
  `
}
