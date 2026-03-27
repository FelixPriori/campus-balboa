import { timingSafeEqual } from 'crypto'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
import { EVENT_SEGMENTS, isLocale, type Locale } from '@/i18n'
import { getEventSlugById } from '@/app/_lib/api'

function isSafeRedirect(path: string): boolean {
  return path.startsWith('/') && !path.startsWith('//')
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const redirectPath = searchParams.get('redirect')
  const entryId = searchParams.get('id')
  const slug = searchParams.get('slug')
  const rawLocale = searchParams.get('locale')
  // Contentful sends BCP 47 codes like 'en-US' or 'fr-CA' — normalize to the base language tag
  const baseLocale = rawLocale?.split('-')[0] ?? null
  const locale: Locale = isLocale(baseLocale) ? baseLocale : 'fr'

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

  // Entry ID provided by Contentful preview — look up the slug server-side
  if (entryId) {
    const eventSlug = await getEventSlugById(entryId)
    if (eventSlug) {
      const eventSegment = EVENT_SEGMENTS[locale]
      const normalised = eventSlug.startsWith('/') ? eventSlug : `/${eventSlug}`
      redirect(`/${locale}/${eventSegment}${normalised}`)
    }
  }

  // Legacy: slug passed directly in query string
  if (slug) {
    const eventSegment = EVENT_SEGMENTS[locale]
    const normalised = slug.startsWith('/') ? slug : `/${slug}`
    redirect(`/${locale}/${eventSegment}${normalised}`)
  }

  redirect(`/${locale}`)
}
