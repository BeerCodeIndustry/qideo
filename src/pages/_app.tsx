import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import { useRouter } from 'next/router'
import { i18nConfig } from '../utils/i18n'
import type { AppProps } from 'next/app'
import i18n from 'i18next'
import { useEffect } from 'react'

i18nConfig()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    i18n.changeLanguage(router?.locale)
  }, [router?.locale])

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
