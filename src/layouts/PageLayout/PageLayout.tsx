import { Footer } from '../../components/Footer'
import { LayoutProps } from '../Layout.types'
import { Header } from '../../components/Header'

export const Page: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
