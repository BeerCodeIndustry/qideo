import {
  ContainerFooter,
  SocialButtons,
  AllRightsFooter,
  ContainerSections,
  ContainerSection,
  LinksSections,
  Container,
  FooterLogoSection,
} from './Footer.styles'

export const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerSection>
          <FooterLogoSection>
            <a>Logo</a>
            <AllRightsFooter>
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </AllRightsFooter>
          </FooterLogoSection>
          <div>
            <p>Sections</p>
            <ContainerSections>
              <LinksSections>
                <a>Home</a>
                <a>Home</a>
                <a>Home</a>
              </LinksSections>
              <LinksSections>
                <a>Home</a>
                <a>Home</a>
                <a>Home</a>
              </LinksSections>
              <LinksSections>
                <a>Home</a>
                <a>Home</a>
                <a>Home</a>
              </LinksSections>
            </ContainerSections>
          </div>
        </ContainerSection>
        <ContainerFooter>
          <AllRightsFooter>All Rights Reservd Inkyy.com 2022</AllRightsFooter>
          <div>
            <SocialButtons>Dribble</SocialButtons>
            <SocialButtons>Facebook</SocialButtons>
            <SocialButtons>Linkedin</SocialButtons>
          </div>
        </ContainerFooter>
      </Container>
    </>
  )
}
