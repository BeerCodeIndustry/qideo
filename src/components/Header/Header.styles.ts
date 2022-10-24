import { TextElement, colors } from '@beercode/common-frontend'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  user-select: none;
  border-bottom: 1px solid ${colors.GRAY_400};
  width: 100%;
  height: 5rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  :nth-child(1) {
    justify-content: start;
  }
  :nth-child(2) {
    justify-content: end;
  }
`

export const Box = styled(TextElement)`
  margin-right: 3rem;
  :last-child {
    margin-right: 0rem;
  }
`
