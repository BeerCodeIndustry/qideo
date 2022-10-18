import { Modal } from '@beercode/common-frontend'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from 'reducers/common.reducer'
import { StateType } from 'src/redux'
import { ThemeProvider } from 'styled-components'

import { QideoProviderProps } from './QideoProvider.types'

export const QideoProvider: React.FC<QideoProviderProps> = ({ children }) => {
  const modal = useSelector((state: StateType) => state.common.modal)
  const theme = useSelector((state: StateType) => state.common.theme)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={theme}>
      {modal && <Modal onClose={() => dispatch(closeModal())} {...modal} />}
      {children}
    </ThemeProvider>
  )
}
