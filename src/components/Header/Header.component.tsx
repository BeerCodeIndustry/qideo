import {
  Color,
  Flexbox,
  ModalSize,
  TextElement,
  Typography,
} from '@beercode/common-frontend'
import { useTheme } from 'hooks/useTheme'
import { useTranslation } from 'hooks/useTranslation'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addModal } from 'reducers/common.reducer'

import { LngSelector } from '../LngSelector'
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { HeaderContainer } from './Header.styles'

export const Header: React.FC = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <Flexbox alignItems='center' gap={3}>
        <TextElement color={Color.BLACK} typography={Typography.XL_4_BOLD}>
          Qideo
        </TextElement>
        <TextElement
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          hasCursor
        >
          {t('page.practicum')}
        </TextElement>
        <Link href='/ide'>
          <TextElement
            color={Color.BLACK}
            typography={Typography.XL_2}
            hover={Color.GRAY_500}
            hasCursor
          >
            IDE
          </TextElement>
        </Link>
      </Flexbox>
      <Flexbox alignItems='center' gap={3}>
        <TextElement
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          hasCursor
          onClick={() =>
            dispatch(
              addModal({
                ...theme.modal,
                size: ModalSize.MEDIUM,
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
          hasCursor
          onClick={() =>
            dispatch(
              addModal({
                ...theme.modal,
                size: ModalSize.MEDIUM,
                children: <SignUp />,
              }),
            )
          }
        >
          {t('common:signUp')}
        </TextElement>
        <TextElement>
          <ThemeSwitcher />
        </TextElement>
        <TextElement>
          <LngSelector />
        </TextElement>
      </Flexbox>
    </HeaderContainer>
  )
}
