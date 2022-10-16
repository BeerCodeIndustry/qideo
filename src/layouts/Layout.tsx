import { Footer } from '../components/Footer'
import { LayoutFunc } from './Layout.types'
import { Header } from '../components/Header'

export const Layout: React.FC<LayoutFunc> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
