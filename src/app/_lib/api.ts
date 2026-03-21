import {
  getBasePageQuery,
  getEmblaQuery,
  getEventCollectionQuery,
  getEventMetaDataQuery,
  getEventPageQuery,
  getEventSocialMediaQuery,
  getGoogleCalendarQuery,
  getAllEventSlugsQuery,
  getAllEventsQuery,
  getPageFooterQuery,
  getPageMetaDataQuery,
  getPageSectionQuery,
} from './queries'
import { HOME_SLUG, type Locale } from '@/i18n'

export type { EventListItem } from '@/app/_types/events'

async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>,
  preview = false,
): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    },
  ).then((response) => response.json())
}

function extractPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]
}

function extractEvent(fetchResponse: any): any {
  return fetchResponse?.data?.eventCollection?.items?.[0]
}

function extractEventCollection(fetchResponse: any, collectionName: string): any {
  return fetchResponse?.data?.event?.[collectionName]?.items
}

export function extractCollection(section: any) {
  return section?.componentsCollection?.items
}

export function extractPageMetaData(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]?.pageMetaData
}

export function extractSectionTitle(fetchResponse: any, collectionName: string) {
  return fetchResponse?.data?.event?.[`${collectionName}Title`]
}

export function extractEventMetaData(fetchResponse: any): any {
  return fetchResponse?.data?.eventCollection?.items?.[0]?.metadata
}

export async function getPreviewPageBySlug(
  slug: string | null,
  locale: string,
  fieldsQuery: string,
): Promise<any> {
  const entry = await fetchGraphQL(getBasePageQuery(fieldsQuery), { locale, slug }, true)
  return extractPage(entry)
}

export async function getPageBySlug(
  slug: string,
  locale: string,
  fieldsQuery: string,
): Promise<any> {
  const entry = await fetchGraphQL(getBasePageQuery(fieldsQuery), {
    locale,
    slug,
  })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractPage(entry)
}

export async function getEventPageBySlug(slug: string, locale: string) {
  const entry = await fetchGraphQL(getEventPageQuery(), { locale, slug })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractEvent(entry)
}

export async function getCollectionByEventId(
  eventId: string,
  collectionName: string,
  locale: string,
  fieldsQuery: string,
): Promise<any> {
  const entry = await fetchGraphQL(getEventCollectionQuery(collectionName, fieldsQuery), {
    eventId,
    locale,
  })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return {
    sectionTitle: extractSectionTitle(entry, collectionName),
    items: extractEventCollection(entry, `${collectionName}Collection`) ?? [],
  }
}

export async function getCollectionBySectionId(
  sectionId: string | null,
  locale: string,
  fieldsQuery: string,
): Promise<any> {
  const entry = await fetchGraphQL(getPageSectionQuery(fieldsQuery), {
    id: sectionId,
    locale,
  })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractCollection(entry?.data?.pageSection) ?? []
}

export async function getEmbla(locale: string) {
  const entry = await fetchGraphQL(getEmblaQuery(), { locale })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry.data.emblaCollection.items[0]
}

export async function getGoogleCalendar(locale: string) {
  const entry = await fetchGraphQL(getGoogleCalendarQuery(), { locale })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry.data.googleCalendarCollection.items[0]
}

export async function getPageMetaDataByPageSlug(slug: string | null, locale: string): Promise<any> {
  const entry = await fetchGraphQL(getPageMetaDataQuery(), { locale, slug })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractPageMetaData(entry)
}

export async function getEventSocialMedia(eventId: string, locale: string): Promise<any> {
  const entry = await fetchGraphQL(getEventSocialMediaQuery(), {
    eventId,
    locale,
  })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry?.data?.event?.socialMediaCollection?.items
}

export async function getPageFooter(locale: Locale): Promise<any> {
  const entry = await fetchGraphQL(getPageFooterQuery(), {
    locale,
    slug: HOME_SLUG[locale],
  })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry?.data?.pageCollection?.items?.[0]?.footer ?? null
}

export async function getAllEvents(locale: string): Promise<any[]> {
  const entry = await fetchGraphQL(getAllEventsQuery(), { locale })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry?.data?.eventCollection?.items ?? []
}

export async function getAllEventSlugs(): Promise<
  Array<{ slug: string | null; startDate: string }>
> {
  const entry = await fetchGraphQL(getAllEventSlugsQuery())

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return entry?.data?.eventCollection?.items ?? []
}

export async function getEventMetaDataBySlug(slug: string | null, locale: string): Promise<any> {
  const entry = await fetchGraphQL(getEventMetaDataQuery(), { locale, slug })

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractEventMetaData(entry)
}
