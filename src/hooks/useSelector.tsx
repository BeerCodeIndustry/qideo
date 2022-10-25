import { useSelector as useReduxSelector } from 'react-redux'
import { StateType } from 'src/redux'

export const useSelector = useReduxSelector<StateType>
