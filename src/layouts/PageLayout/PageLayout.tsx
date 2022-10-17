import { Footer } from '../../components/Footer'
import { LayoutProps } from '../Layout.types'
import { Header } from '../../components/Header'
import { PageLayout, Container } from './PageLayout.styles'

export const Page: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container justifyContent='center'>
      <PageLayout flexDirection='column'>
        <Header />
        {children}
        <Footer />
      </PageLayout>
    </Container>
  )
}
