/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['default', 'en', 'ru'],
    defaultLocale: 'default',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/ide/:path*',
        destination: `/ide`,
      },
    ]
  },
}

module.exports = nextConfig
