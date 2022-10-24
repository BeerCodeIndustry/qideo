import { colors } from '@beercode/common-frontend'
import styled from 'styled-components'

export const ButtonSignUp = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  width: 20%;
  margin-top: 1rem;
`
export const ErrorMessageStyle = styled.span`
  margin: 0.3rem 0 0.3rem 0;
  color: ${colors.RED_500};
  border-bottom: 1px solid ${colors.RED_500};
`
