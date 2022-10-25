import { ModalProps } from '@beercode/common-frontend'

export interface QideoThemeObj {
  text: string
  modal: Pick<ModalProps, 'modalColor' | 'backgroundColor' | 'crossColor'>
}

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
