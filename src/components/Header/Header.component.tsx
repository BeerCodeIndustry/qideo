import { Color, TextElement, Typography } from '@beercode/common-frontend'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { LngSelector } from '../LngSelector'

import { HeaderContainer } from './Header.styles'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <TextElement color={Color.BLACK} typography={Typography.XL_4_BOLD}>
        Qideo
      </TextElement>
      <TextElement
        color={Color.BLACK}
        typography={Typography.XL_2}
        hover={Color.GRAY_500}
        cursor
      >
        {t('page.practicum')}
      </TextElement>
      <TextElement
        color={Color.BLACK}
        typography={Typography.XL_2}
        hover={Color.GRAY_500}
        cursor
      >
        {t('page.courses')}
      </TextElement>
      <Link href='/ide'>
        <TextElement
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          cursor
        >
          IDE
        </TextElement>
      </Link>
      <TextElement
        color={Color.BLACK}
        typography={Typography.XL_2}
        hover={Color.GRAY_500}
        cursor
      >
        {t('common:login')}
      </TextElement>
      <TextElement
        color={Color.BLACK}
        typography={Typography.XL_2}
        hover={Color.GRAY_500}
        cursor
      >
        {t('common:signUp')}
      </TextElement>
      <LngSelector />
    </HeaderContainer>
  )
}
