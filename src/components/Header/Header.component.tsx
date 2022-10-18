import {
  Color,
  ModalSize,
  Opacity,
  TextElement,
  Typography,
} from '@beercode/common-frontend'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { addModal } from 'src/redux/reducers/common.reducer'
import { LngSelector } from '../LngSelector'
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { HeaderContainer } from './Header.styles'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

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
        onClick={() =>
          dispatch(
            addModal({
              size: ModalSize.MEDIUM,
              modalColor: Color.BLUE_500,
              backgroundColor: [Color.WHITE, Opacity._30_],
              crossColor: Color.WHITE,
              children: <Login />,
            }),
          )
        }
      >
        {t('common:login')}
      </TextElement>
      <TextElement
        color={Color.BLACK}
        typography={Typography.XL_2}
        hover={Color.GRAY_500}
        cursor
        onClick={() =>
          dispatch(
            addModal({
              size: ModalSize.MEDIUM,
              modalColor: Color.ORANGE_300,
              backgroundColor: [Color.WHITE, Opacity._30_],
              crossColor: Color.WHITE,
              children: <SignUp />,
            }),
          )
        }
      >
        {t('common:signUp')}
      </TextElement>
      <LngSelector />
    </HeaderContainer>
  )
}
