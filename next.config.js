/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['default', 'en', 'ru'],
    defaultLocale: 'default',
  },
}

module.exports = nextConfig
