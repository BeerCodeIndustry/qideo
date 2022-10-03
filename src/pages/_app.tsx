import i18n from 'i18next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'

import '../styles/globals.css'
import { i18nConfig } from '../utils/i18n'

i18nConfig().catch(() => {})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    i18n.changeLanguage(router.locale).catch(() => {})
  }, [router.locale])

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
