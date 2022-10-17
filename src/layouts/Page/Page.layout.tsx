import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container, Layout } from './Page.styles'
import { PageProps } from './Page.types'

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Container justifyContent='center'>
      <Layout flexDirection='column'>
        <Header />
        {children}
        <Footer />
      </Layout>
    </Container>
  )
}
