import { useRouter } from 'next/router'

import { Locale } from '../types/localization'

export interface UseLocaleReturnType {
  changeLocale: (locale: Locale) => void
}

export const useLocale = (): UseLocaleReturnType => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLocale = (locale: Locale): void => {
    router.push({ pathname, query }, asPath, { locale }).catch(() => {})
  }

  return { changeLocale }
}
