import { Footer } from '../components/Footer'
import { LayoutProps } from './Layout.types'
import { Header } from '../components/Header'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
