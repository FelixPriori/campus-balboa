import { timingSafeEqual } from 'crypto'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
import { EVENT_SEGMENTS, isLocale, type Locale } from '@/i18n'

function isSafeRedirect(path: string): boolean {
  return path.startsWith('/') && !path.startsWith('//')
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const redirectPath = searchParams.get('redirect')
  const slug = searchParams.get('slug')
  const rawLocale = searchParams.get('locale')
  const locale: Locale | null = isLocale(rawLocale) ? rawLocale : null

  if (!process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Preview secret not configured', { status: 500 })
  }

  const incoming = Buffer.from(secret ?? '')
  const expected = Buffer.from(process.env.CONTENTFUL_PREVIEW_SECRET)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return new Response('Invalid token', { status: 401 })
  }

  ;(await draftMode()).enable()

  // Full redirect path provided directly (e.g. from home page preview)
  if (redirectPath) {
    if (!isSafeRedirect(redirectPath)) {
      return new Response('Invalid redirect', { status: 400 })
    }
    redirect(redirectPath)
  }

  // Slug + locale provided: build the event page path
  // Contentful event slugs have the form /YEAR/slug-name
  if (slug && locale) {
    const eventSegment = EVENT_SEGMENTS[locale]
    // slug may be "/2026/campus-balboa" or "2026/campus-balboa"
    const normalised = slug.startsWith('/') ? slug : `/${slug}`
    redirect(`/${locale}/${eventSegment}${normalised}`)
  }

  redirect(`/${locale ?? 'fr'}`)
}
