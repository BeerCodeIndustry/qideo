import { Modal } from '@beercode/common-frontend'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from 'src/redux'
import { closeModal } from 'src/redux/reducers/common.reducer'

import { QideoProviderProps } from './QideoProvider.types'

export const QideoProvider: React.FC<QideoProviderProps> = ({ children }) => {
  const modal = useSelector((state: StateType) => state.common.modal)
  const dispatch = useDispatch()

  return (
    <>
      {modal && <Modal onClose={() => dispatch(closeModal())} {...modal} />}
      {children}
    </>
  )
}
