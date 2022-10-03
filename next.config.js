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
        //ADD to ide route params /ide/:param1/:param2
        source: '/ide',
        destination: `/ide`,
      },
    ]
  },
}

module.exports = nextConfig
