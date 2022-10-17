import i18n from 'i18next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import { QideoProvider } from '../components/QideoProvider'
import { store } from '../redux'
import { i18nConfig } from '../utils/i18n'

i18nConfig().catch(() => {})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    i18n.changeLanguage(router.locale).catch(() => {})
  }, [router.locale])

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <QideoProvider>
          <Component {...pageProps} />
        </QideoProvider>
      </I18nextProvider>
    </Provider>
  )
}

export default MyApp
