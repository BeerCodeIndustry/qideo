import { useRouter } from 'next/router'

import { Locale } from '../types/localization'

export interface UseLocaleReturnType {
  changeLocale: (locale: Locale) => Promise<void>
}

export const useLocale = (): UseLocaleReturnType => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLocale = async (locale: Locale): Promise<void> => {
    await router.push({ pathname, query }, asPath, { locale })
  }

  return { changeLocale }
}
