import { Modal } from '@beercode/common-frontend'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from 'reducers/common.reducer'
import { themes } from 'src/constants/theme'
import { StateType } from 'src/redux'
import { ThemeProvider } from 'styled-components'

import { ThemeType } from '../../types/theme'
import { QideoProviderProps } from './QideoProvider.types'

export const QideoProvider: React.FC<QideoProviderProps> = ({ children }) => {
  const modal = useSelector((state: StateType) => state.common.modal)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={themes[ThemeType.DARK]}>
      {modal && <Modal onClose={() => dispatch(closeModal())} {...modal} />}
      {children}
    </ThemeProvider>
  )
}
