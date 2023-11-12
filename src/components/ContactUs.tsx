import styled from 'styled-components/native'
import Fontisto from '@expo/vector-icons/Fontisto'
import { Image, View } from 'react-native-animatable'
import { useContentfulStore } from 'src/stores/contentful'
import { appTheme } from 'src/assets/styles/theme'

/**
 * Contact Us
 * -
 */
export default function ContactUs() {
  const contactImage = useContentfulStore(s => s.content.contactImage.url)
  const contactHeader = useContentfulStore(s => s.content.contactHeader)
  const contactEmail = useContentfulStore(s => s.content.contactEmail)

  return (
    <S.ContactUsWrapper>
      <S.TextWrapper animation="bounceIn" delay={1500}>
        <S.Title>{`< ${contactHeader} />`}</S.Title>
        <S.EmailWrapper>
          <Fontisto name="email" size={24} color={appTheme.highlight} />
          <S.Text>{`${contactEmail}`}</S.Text>
        </S.EmailWrapper>
      </S.TextWrapper>
      <S.ContactImage
        animation="fadeInRight"
        delay={1500}
        source={{ uri: contactImage }}
        resizeMode="contain"
        alt="our offices"
        title="our offices"
      />
    </S.ContactUsWrapper>
  )
}

const S = {
  ContactUsWrapper: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: ${p => p.theme.dimensions(20, 'px')};
    padding-right: ${p => p.theme.dimensions(20, 'px')};
  `,
  ContactImage: styled(Image)<{ title: string }>`
    width: 300px;
    height: 200px;
    margin: auto;
    margin-top: ${p => p.theme.dimensions(20, 'px')};
    margin-bottom: ${p => p.theme.dimensions(20, 'px')};
  `,
  TextWrapper: styled(View)`
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    padding-right: 20px;
  `,
  Title: styled.Text`
    color: ${p => p.theme.secondary};
    font-family: cocogoose;
    font-weight: 900;
    font-size: 18px;
    margin-bottom: ${p => p.theme.dimensions(20, 'px')};
    text-align: center;
  `,
  EmailWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  Text: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 900;
    font-size: 16px;
    text-align: center;
  `
}
