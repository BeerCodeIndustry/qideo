import { theme } from '@beercode/common-frontend'
import styled from 'styled-components'

export const SandpackContainer = styled.div`
  width: 100%;
  .sp-layout {
    border: none;
  }

  .sp-stack {
    height: 100vh !important;
  }

  .sp-preview-actions > a {
    display: none;
  }

  .cm-lineNumbers > div {
    ${theme.typographies.SM}
  }
`
