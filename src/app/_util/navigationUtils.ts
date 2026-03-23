import { EVENT_SEGMENTS, type Locale } from '@/i18n'

/** Builds the internal path to an event page from its Contentful slug (`/year/slug-name`). */
export const getEventHref = (slug: string | null, locale: Locale): string => {
  const [, year, slugName] = slug?.split('/') ?? []
  return year && slugName
    ? `/${locale}/${EVENT_SEGMENTS[locale]}/${year}/${slugName}`
    : `/${locale}/${EVENT_SEGMENTS[locale]}`
}

