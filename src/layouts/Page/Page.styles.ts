import { Flexbox, breakpoints } from '@beercode/common-frontend'
import styled from 'styled-components'

export const Container = styled(Flexbox)``

export const Layout = styled(Flexbox)`
  max-width: ${breakpoints.XLARGE};
  width: 100%;
  padding: 0 2rem;
`
