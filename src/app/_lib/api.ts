import { GraphQLClient } from 'graphql-request'
import { HOME_SLUG, type Locale } from '@/i18n'
import {
  GetAdministratorsSectionDocument,
  GetAllEventSlugsDocument,
  GetAllEventsDocument,
  GetDJsDocument,
  GetEventMetaDataDocument,
  GetEventPageDocument,
  GetEventSlugDocument,
  GetEventsSectionDocument,
  GetFeaturedSlidesSectionDocument,
  GetHomePageDocument,
  GetInstructorsDocument,
  GetMissionsSectionDocument,
  GetPageFooterDocument,
  GetPageMetaDataDocument,
  GetPartnersDocument,
  GetPricingDocument,
  GetScheduleDocument,
  GetStaticPageDocument,
  GetVenuesDocument,
} from '@/app/_types/generated/graphql'
import type { GetAllEventsQuery, GetHomePageQuery, GetStaticPageQuery } from '@/app/_types/generated/graphql'
import type { InstructorData, DJ, PricingData, Venue, Partner, EventBlock } from '@/app/_types/events'
import type { Mission } from '@/app/_types/missions'
import type { Administrator } from '@/app/_types/administrator'
import type { FooterSection } from '@/app/_types/footer'
import type { RichTextContent } from '@/app/_lib/markdown'

// ─── Client ───────────────────────────────────────────────────────────────────

const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT_ID}`

function getClient(preview = false) {
  const token = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN

  if (!token) {
    throw new Error(
      preview
        ? 'CONTENTFUL_PREVIEW_ACCESS_TOKEN is not set. Add the Content Preview API token from the Contentful dashboard.'
        : 'CONTENTFUL_ACCESS_TOKEN is not set.'
    )
  }

  return new GraphQLClient(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    fetch: (url, init) =>
      fetch(url, {
        ...init,
        next: preview ? { revalidate: 0 } : { revalidate: 3600 },
      }),
  })
}

// ─── Type helpers ─────────────────────────────────────────────────────────────

const nonNull = <T>(arr: (T | null | undefined)[]): T[] =>
  arr.filter((i): i is T => i != null)

/** Narrows a discriminated union item by __typename, safe for use in .filter() */
function byTypename<T extends { __typename?: string } | null, TName extends string>(name: TName) {
  return (item: T): item is Extract<NonNullable<T>, { __typename?: TName }> =>
    item?.__typename === name
}

// ─── Mapped data types ────────────────────────────────────────────────────────

export interface FeaturedSlideData {
  sys: { id: string }
  title: string
  type: string
  details: RichTextContent | null
  image: {
    url: string
    title: string
  }
  link: {
    href: string
    text: string
  }
}

export interface SectionEventData {
  sys: { id: string }
  title: string
  dark: boolean
  tagline: string
  startDate: string
  slug: string | null
  image: {
    url: string
    title: string
  }
}

// ─── Page metadata ────────────────────────────────────────────────────────────

export async function getPageMetaDataByPageSlug(slug: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetPageMetaDataDocument, { locale, slug })
  return data.pageCollection
}

// ─── Home page ────────────────────────────────────────────────────────────────

export async function getHomePage(slug: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetHomePageDocument, { locale, slug })
  return data.pageCollection?.items?.[0] ?? null
}

// ─── Event page ───────────────────────────────────────────────────────────────

export async function getEventSlugById(eventId: string) {
  const data = await getClient(true).request(GetEventSlugDocument, { eventId })
  return data.event?.slug ?? null
}

export async function getEventPageBySlug(slug: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetEventPageDocument, { locale, slug })
  return data.eventCollection?.items?.[0] ?? null
}

export async function getEventMetaDataBySlug(slug: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetEventMetaDataDocument, { locale, slug })
  return data.eventCollection?.items?.[0]?.metadata ?? null
}

// ─── Static pages ─────────────────────────────────────────────────────────────

export type StaticPageData = NonNullable<
  NonNullable<GetStaticPageQuery['staticPageCollection']>['items'][number]
>

export async function getStaticPageBySlug(
  slug: string,
  locale: string,
  preview = false,
): Promise<StaticPageData | null> {
  const data = await getClient(preview).request(GetStaticPageDocument, { slug, locale, preview })
  return data.staticPageCollection?.items?.[0] ?? null
}

// ─── Event listing ────────────────────────────────────────────────────────────

export async function getAllEvents(locale: string, preview = false) {
  const data = await getClient(preview).request(GetAllEventsDocument, { locale })
  return nonNull(data.eventCollection?.items ?? []).map((item) => ({
    title: item.title ?? '',
    slug: item.slug ?? null,
    startDate: item.startDate ?? '',
    endDate: item.endDate ?? '',
    image: {
      url: item.image?.url ?? '',
      title: item.image?.title ?? '',
    },
  }))
}

// Intentionally omits preview — only used by generateStaticParams at build time
export async function getAllEventSlugs() {
  const data = await getClient().request(GetAllEventSlugsDocument, {})
  return nonNull(data.eventCollection?.items ?? [])
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export async function getPageFooter(locale: Locale, preview = false): Promise<FooterSection | null> {
  const data = await getClient(preview).request(GetPageFooterDocument, {
    locale,
    slug: HOME_SLUG[locale],
  })
  const footer = data.pageCollection?.items?.[0]?.footer
  if (!footer) return null
  return {
    contact: footer.contact ?? '',
    contactLink: footer.contactLink?.href
      ? { href: footer.contactLink.href, text: footer.contactLink.text ?? '' }
      : null,
    copyright: footer.copyright ?? '',
    socialMediasCollection: {
      items: nonNull(footer.socialMediasCollection?.items ?? []).map((sm) => ({
        sys: { id: sm.sys.id },
        href: sm.href ?? '',
        accessibilityDescription: sm.accessibilityDescription ?? '',
        logo: {
          url: sm.logo?.url ?? '',
          title: sm.logo?.title ?? '',
        },
      })),
    },
    donateButton: footer.donateButton?.href
      ? {
          href: footer.donateButton.href,
          text: footer.donateButton.text ?? '',
        }
      : null,
    landAcknowledgement: footer.landAcknowledgement?.title
      ? {
          title: footer.landAcknowledgement.title,
          text: footer.landAcknowledgement.text ?? '',
        }
      : null,
  }
}

// ─── Event sections (by eventId) ─────────────────────────────────────────────

export async function getInstructors(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetInstructorsDocument, { eventId, locale })
  return nonNull(data.event?.instructorsCollection?.items ?? []).map((item): InstructorData => ({
    sys: { id: item.sys.id },
    name: item.name ?? '',
    avatar: item.avatar?.url ? { url: item.avatar.url, title: item.avatar.title ?? '' } : null,
    biography: item.biography ?? null,
  }))
}

export async function getPricing(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetPricingDocument, { eventId, locale })
  return nonNull(data.event?.pricingCollection?.items ?? []).map((item): PricingData => ({
    sys: { id: item.sys.id },
    tier: item.tier ?? '',
    type: item.type ?? '',
    startTime: item.startTime ?? '',
    endTime: item.endTime ?? '',
    amount: item.amount ?? 0,
    batch: item.batch ?? 0,
  }))
}

export async function getVenues(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetVenuesDocument, { eventId, locale })
  return nonNull(data.event?.venuesCollection?.items ?? []).map((item): Venue => ({
    sys: { id: item.sys.id },
    name: item.name ?? '',
    venueAddress: item.venueAddress ?? '',
    purpose: item.purpose ?? '',
  }))
}

export async function getSchedule(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetScheduleDocument, { eventId, locale })
  return nonNull(data.event?.scheduleCollection?.items ?? []).map((item): EventBlock => ({
    sys: { id: item.sys.id },
    title: item.title ?? '',
    subtitle: item.subtitle ?? null,
    startTime: item.startTime ?? '',
    endTime: item.endTime ?? '',
    blockType: item.blockType ?? '',
    description: item.description ?? null,
  }))
}

export async function getDJs(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetDJsDocument, { eventId, locale })
  return nonNull(data.event?.dJsCollection?.items ?? []).map((item): DJ => ({
    sys: { id: item.sys.id },
    name: item.name ?? '',
    pronouns: item.pronouns ?? null,
    avatar: item.avatar?.url ? { url: item.avatar.url, title: item.avatar.title ?? '' } : null,
    biography: item.biography ?? null,
  }))
}

export async function getPartners(eventId: string, locale: string, preview = false) {
  const data = await getClient(preview).request(GetPartnersDocument, { eventId, locale })
  return nonNull(data.event?.partnersCollection?.items ?? []).map((item): Partner => ({
    sys: { id: item.sys.id },
    title: item.title ?? '',
    link: item.link ?? '',
    logo: {
      url: item.logo?.url ?? '',
      title: item.logo?.title ?? '',
    },
  }))
}

// ─── Home page sections (by sectionId) ───────────────────────────────────────

export async function getMissions(sectionId: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetMissionsSectionDocument, {
    id: sectionId ?? '',
    locale,
  })
  return nonNull(data.pageSection?.componentsCollection?.items ?? [])
    .filter(byTypename('Mission'))
    .map((item): Mission => ({
      sys: { id: item.sys.id },
      title: item.title ?? '',
      content: item.content ?? null,
    }))
}

export async function getFeaturedSlides(sectionId: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetFeaturedSlidesSectionDocument, {
    id: sectionId ?? '',
    locale,
  })
  return nonNull(data.pageSection?.componentsCollection?.items ?? [])
    .filter(byTypename('FeaturedSlide'))
    .map((item): FeaturedSlideData => ({
      sys: { id: item.sys.id },
      title: item.title ?? '',
      type: item.type ?? '',
      details: item.details ?? null,
      image: {
        url: item.image?.url ?? '',
        title: item.image?.title ?? '',
      },
      link: {
        href: item.link?.href ?? '',
        text: item.link?.text ?? '',
      },
    }))
}

export async function getSectionEvents(sectionId: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetEventsSectionDocument, {
    id: sectionId ?? '',
    locale,
  })
  return nonNull(data.pageSection?.componentsCollection?.items ?? [])
    .filter(byTypename('Event'))
    .map((item): SectionEventData => ({
      sys: { id: item.sys.id },
      title: item.title ?? '',
      dark: item.dark ?? false,
      tagline: item.tagline ?? '',
      startDate: item.startDate ?? '',
      slug: item.slug ?? null,
      image: {
        url: item.image?.url ?? '',
        title: item.image?.title ?? '',
      },
    }))
}

export async function getAdministrators(sectionId: string | null, locale: string, preview = false) {
  const data = await getClient(preview).request(GetAdministratorsSectionDocument, {
    id: sectionId ?? '',
    locale,
  })
  return nonNull(data.pageSection?.componentsCollection?.items ?? [])
    .filter(byTypename('Instructor'))
    .map((item): Administrator => ({
      sys: { id: item.sys.id },
      name: item.name ?? '',
      pronouns: item.pronouns ?? null,
      title: item.title ?? '',
      avatar: item.avatar?.url ? { url: item.avatar.url, title: item.avatar.title ?? '' } : null,
      bio: item.biography ?? null,
    }))
}

// ─── Derived types for consumers ─────────────────────────────────────────────

export type EventPageData = NonNullable<Awaited<ReturnType<typeof getEventPageBySlug>>>
export type FooterData = NonNullable<Awaited<ReturnType<typeof getPageFooter>>>

export type HomePageSection = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetHomePageQuery['pageCollection']>['items'][number]
    >['sectionsCollection']
  >['items'][number]
>

// ─── Re-exported types for consumers ─────────────────────────────────────────

export type { GetAllEventsQuery }
export type { InstructorData, DJ, PricingData, Venue, Partner, EventBlock, EventListItem } from '@/app/_types/events'
export type { Mission } from '@/app/_types/missions'
export type { Administrator } from '@/app/_types/administrator'
