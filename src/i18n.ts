export const locales = ['en', 'fr'] as const

export const i18n = {
  defaultLocale: 'en',
  locales,
} as const

export type Locale = (typeof i18n)['locales'][number]

export const SITE_URL = 'https://www.campusbalboa.org'

/** Slug of the home page entry in Contentful — used to fetch page-level data */
export const HOME_SLUG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
}

export const EVENT_SEGMENTS: Record<Locale, string> = {
  fr: 'evenements',
  en: 'events',
}

/** Locale-specific URL segments for static pages (e.g. privacy policy). */
export const STATIC_PAGE_SEGMENTS: Array<Record<Locale, string>> = [
  { en: 'privacy', fr: 'confidentialite' },
]

/** Named segment lookup for the privacy policy page. */
export const PRIVACY_SEGMENTS: Record<Locale, string> = STATIC_PAGE_SEGMENTS[0]

export function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale)
}
