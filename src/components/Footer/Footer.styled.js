import styled from 'styled-components'
import { colors } from '@beercode/common-frontend'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ContainerSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: ${colors.GRAY_500};
`
export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`
export const SocialButtons = styled.a`
  padding-right: 1rem;
  &:last-child {
    padding: 0;
  }
`
export const AllRightsFooter = styled.p`
  padding: 2rem;
  margin: 0;
  width: 18rem;
`
export const ContainerSections = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LinksSections = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  &:last-child {
    margin: 0;
  }
`
export const FooterLogoSection = styled.div`
  display: flex;
  flex-direction: column;
`
