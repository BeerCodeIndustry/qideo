import { colors } from '@beercode/common-frontend'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  border-bottom: 1px solid ${colors.GRAY_400};
  width: 100%;
  height: 5rem;
`
