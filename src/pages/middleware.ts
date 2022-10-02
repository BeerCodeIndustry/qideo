import { NextRequest, NextResponse } from 'next/server'
import { LOCALE } from '../types/localization'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  if (req.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(`/${LOCALE.EN}${req.nextUrl.pathname}`, req.url),
    )
  }
}
