import { Footer } from 'src/components/Footer/Footer'
import { LayoutFunc } from './Layout.types'

export const Layout: React.FC<LayoutFunc> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
