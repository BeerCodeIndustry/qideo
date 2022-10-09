import { Color, Flexbox, getColor } from '@beercode/common-frontend'
import styled from 'styled-components'

export const Container = styled(Flexbox)`
  width: 16rem;
`

export const NodeContainer = styled(Flexbox)`
  margin-left: 0.5rem;
`

export const FolderContainer = styled(Flexbox)`
  position: relative;
`

export const Row = styled(Flexbox)`
  &:hover {
    cursor: pointer;
    background: ${getColor(Color.GRAY_600)};
  }
`
