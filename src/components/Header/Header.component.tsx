import { Color, TextElement, Typography } from '@beercode/common-frontend'
import Link from 'next/link'

import { HeaderContainer, TextBlock } from './Header.styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TextElement color={Color.BLACK} typography={Typography.XL_4_BOLD}>
        Qideo
      </TextElement>
      <TextBlock color={Color.BLACK} typography={Typography.XL_2}>
        Practicum
      </TextBlock>
      <TextBlock color={Color.BLACK} typography={Typography.XL_2}>
        Courses
      </TextBlock>
      <Link href='/ide'>
        <TextBlock color={Color.BLACK} typography={Typography.XL_2}>
          IDE
        </TextBlock>
      </Link>
      <TextBlock color={Color.BLACK} typography={Typography.XL_2}>
        Login
      </TextBlock>
      <TextBlock color={Color.BLACK} typography={Typography.XL_2}>
        Sign Up
      </TextBlock>
    </HeaderContainer>
  )
}
