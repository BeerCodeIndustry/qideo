import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import NextI18nextConfig from '../../next-i18next.config'
import { QideoProvider } from '../components/QideoProvider'
import { store } from '../redux'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <QideoProvider>
        <Component {...pageProps} />
      </QideoProvider>
    </Provider>
  )
}

export default appWithTranslation(App, NextI18nextConfig)
