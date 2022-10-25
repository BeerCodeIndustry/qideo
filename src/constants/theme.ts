import { colors, opacities } from '@beercode/common-frontend'

import { QideoThemeObj, ThemeType } from '../types/theme'

export const themes: Record<ThemeType, QideoThemeObj> = {
  dark: {
    text: colors.BLUE_900,
    modal: {
      modalColor: colors.BLUE_500,
      backgroundColor: [colors.WHITE, opacities._30_],
      crossColor: colors.WHITE,
    },
  },
  light: {
    text: colors.BLUE_900,
    modal: {
      modalColor: colors.BLUE_500,
      backgroundColor: [colors.WHITE, opacities._30_],
      crossColor: colors.WHITE,
    },
  },
}
