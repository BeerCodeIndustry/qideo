import { NextRequest, NextResponse } from 'next/server'

import { Locale } from './types/localization'

const PUBLIC_FILE = /\.(.*)$/

export const middleware = (req: NextRequest): NextResponse | undefined => {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  if (req.nextUrl.locale === 'default') {
    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(
      new URL(`/${Locale.EN}${req.nextUrl.pathname}`, req.url),
    )
  }
}
