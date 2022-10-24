const LanguageDetector = require('i18next-browser-languagedetector')
const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend = require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

module.exports = {
  backend: {
    backendOptions: [
      { expirationTime: 60 * 60 * 1000 }, // 1 hour
      {
        loadPath: `${process.env.NEXT_PUBLIC_LOCALIZATION_API_URL}/{{lng}}/{{ns}}`,
      },
    ],
    backends:
      typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend] : [],
  },
  i18n: {
    locales: ['default', 'en', 'ru'],
    defaultLocale: 'default',
  },
  serializeConfig: false,
  ns: ['qideo', 'common'],
  defaultNS: ['qideo', 'common'],
  use: typeof window !== 'undefined' ? [ChainedBackend, LanguageDetector] : [],
}
