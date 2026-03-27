import type { EventPageData } from '@/app/_lib/api'
import type { DictionaryType } from '@/app/dictionaries'
import { SITE_URL } from '@/i18n'

type RegistrationLink = { href: string; text: string }

export function buildEventSchema(
  data: EventPageData,
  eventUrl: string,
  isClosed: boolean,
  registrationLink: RegistrationLink | null,
) {
  const firstVenue = data.venuesCollection?.items?.[0] ?? null

  const pricingItems = (data.pricingCollection?.items ?? []).filter(
    (p): p is NonNullable<typeof p> => p !== null
  )
  const minPrice =
    pricingItems.length > 0
      ? Math.min(...pricingItems.map((p) => p.amount ?? Infinity).filter((n) => n !== Infinity))
      : null
  const earliestValidFrom =
    pricingItems
      .map((p) => p.startTime)
      .filter((t): t is string => typeof t === 'string')
      .sort()[0] ?? null

  const performers = [
    ...(data.instructorsCollection?.items ?? []),
    ...(data.dJsCollection?.items ?? []),
  ]
    .filter((i): i is NonNullable<typeof i> => i !== null && typeof i.name === 'string')
    .map((i) => ({ '@type': 'Person', name: i.name as string }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.title,
    startDate: data.startDate,
    endDate: data.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: { '@type': 'Organization', name: 'Campus Balboa', url: SITE_URL },
    url: eventUrl,
    image: data.image?.url,
    ...(data.metadata?.description ? { description: data.metadata.description } : {}),
    ...(firstVenue
      ? { location: { '@type': 'Place', name: firstVenue.name, address: firstVenue.venueAddress } }
      : {}),
    ...(performers.length > 0 ? { performer: performers } : {}),
    ...(registrationLink
      ? {
          offers: {
            '@type': 'Offer',
            url: registrationLink.href,
            availability: isClosed
              ? 'https://schema.org/SoldOut'
              : 'https://schema.org/InStock',
            priceCurrency: 'CAD',
            ...(minPrice !== null ? { price: minPrice } : {}),
            ...(earliestValidFrom ? { validFrom: earliestValidFrom } : {}),
          },
        }
      : {}),
  }
}

export function buildBreadcrumbSchema(
  eventUrl: string,
  locale: string,
  eventSegment: string,
  title: string | null | undefined,
  dict: DictionaryType,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.EventsPage.breadcrumbHome,
        item: `${SITE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: dict.EventsPage.breadcrumbEvents,
        item: `${SITE_URL}/${locale}/${eventSegment}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: eventUrl,
      },
    ],
  }
}
