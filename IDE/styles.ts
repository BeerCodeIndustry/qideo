import { Flexbox } from '@beercode/common-frontend'
import styled from 'styled-components'

export const Container = styled(Flexbox)`
  width: 100vw;
  height: 100vh;
  & > div {
    width: 100%;
  }
`
