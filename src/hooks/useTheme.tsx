import { useTheme as useStyledTheme } from 'styled-components'
import { QideoThemeObj } from 'types/theme'

interface UseThemeType {
  theme: QideoThemeObj
}

export const useTheme = (): UseThemeType => {
  const theme = useStyledTheme() as QideoThemeObj

  return { theme }
}
