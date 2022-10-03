import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { Locale, LocalizationNamespace } from '../types/localization'

export const i18nConfig = async (locale: Locale = Locale.EN): Promise<void> => {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: Locale.EN,
      supportedLngs: [...Object.values(Locale)],
      ns: [LocalizationNamespace.QIDEO],
      defaultNS: [...Object.values(LocalizationNamespace)],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        loadPath: `${process.env.NEXT_PUBLIC_LOCALIZATION_API_URL}/{{lng}}/{{ns}}`,
      },
    })
}
