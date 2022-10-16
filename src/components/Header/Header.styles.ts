import { TextElement, colors } from '@beercode/common-frontend'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 5rem;
  user-select: none;
`

export const TextBlock = styled(TextElement)`
  cursor: pointer;
  :hover {
    color: ${colors.GRAY_500};
  }
`
