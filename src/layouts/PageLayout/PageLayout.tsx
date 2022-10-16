import { Footer } from '../../components/Footer'
import { LayoutProps } from '../Layout.types'
import { Header } from '../../components/Header'
import { PageLayout } from './PageLayout.styles'

export const Page: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageLayout flexDirection='column'>
      <Header />
      {children}
      <Footer />
    </PageLayout>
  )
}
