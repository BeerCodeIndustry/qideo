import { Flexbox } from '@beercode/common-frontend'
import { useDispatch } from 'react-redux'
import { toggleTheme } from 'src/redux/reducers/common.reducer'

import { Button, Input, Label } from './ThemeSwitcher.styles'

export const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Flexbox>
      <Input
        className='react-switch-checkbox'
        id='react-switch-new'
        type='checkbox'
        onChange={() => dispatch(toggleTheme())}
      />
      <Label className='react-switch-label' htmlFor='react-switch-new'>
        <Button className='react-switch-button' />
      </Label>
    </Flexbox>
  )
}
