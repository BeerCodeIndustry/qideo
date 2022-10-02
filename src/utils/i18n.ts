import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import i18n from 'i18next'
import { LOCALIZATION_NAMESPACE, LOCALE } from '../types/localization'

export const i18nConfig = (locale: LOCALE = LOCALE.EN) => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: LOCALE.EN,
      supportedLngs: [...Object.values(LOCALE)],
      ns: [LOCALIZATION_NAMESPACE.QIDEO],
      defaultNS: [...Object.values(LOCALIZATION_NAMESPACE)],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        loadPath: `${process.env.NEXT_PUBLIC_LOCALIZATION_API_URL}/{{lng}}/{{ns}}`,
      },
    })
}
