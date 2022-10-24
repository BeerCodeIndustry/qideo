import {
  Color,
  ModalSize,
  Opacity,
  Typography,
} from '@beercode/common-frontend'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { addModal } from 'src/redux/reducers/common.reducer'

import { LngSelector } from '../LngSelector'
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Box, Container, HeaderContainer } from './Header.styles'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <Container>
        <Box color={Color.BLACK} typography={Typography.XL_4_BOLD}>
          Qideo
        </Box>
        <Box
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          hasCursor
        >
          {t('page.practicum')}
        </Box>
        <Link href='/ide'>
          <Box
            color={Color.BLACK}
            typography={Typography.XL_2}
            hover={Color.GRAY_500}
            hasCursor
          >
            IDE
          </Box>
        </Link>
      </Container>
      <Container>
        <Box
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          hasCursor
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
        </Box>
        <Box
          color={Color.BLACK}
          typography={Typography.XL_2}
          hover={Color.GRAY_500}
          hasCursor
          onClick={() =>
            dispatch(
              addModal({
                size: ModalSize.MEDIUM,
                modalColor: Color.BLUE_500,
                backgroundColor: [Color.WHITE, Opacity._30_],
                crossColor: Color.WHITE,
                children: <SignUp />,
              }),
            )
          }
        >
          {t('common:signUp')}
        </Box>
        <Box>
          <ThemeSwitcher />
        </Box>
        <Box>
          <LngSelector />
        </Box>
      </Container>
    </HeaderContainer>
  )
}
