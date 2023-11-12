import ScreenWrapper from 'src/components/ScreenWrapper'
import ParagraphWithTitle from 'src/components/ParagraphWithTitle'
import Header from 'src/components/Header'
import ContactUs from 'src/components/ContactUs'
import Footer from 'src/components/Footer'

/**
 * Index Screen
 * -
 */
export default function IndexScreen() {
  return (
    <ScreenWrapper pageId="home" title="Home Screen">
      <Header />
      <ParagraphWithTitle />
      <ContactUs />
      <Footer />
    </ScreenWrapper>
  )
}
