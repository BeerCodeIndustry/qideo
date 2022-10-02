import { useRouter } from 'next/router'

import { LOCALE } from '../types/localization'

export const useLocale = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLocale = (locale: LOCALE) => {
    console.log('changeLocale')
    router.push({ pathname, query }, asPath, { locale })
  }

  return { changeLocale }
}
