import { Suspense } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Locale, EVENT_SEGMENTS, SITE_URL } from '@/i18n'
import { getEventMetaDataBySlug, getEventPageBySlug, getAllEventSlugs } from '@/app/_lib/api'
import { getDictionary } from '@/app/dictionaries'
import { buildEventSchema, buildBreadcrumbSchema, buildPersonSchemas } from './schemas'
import {
  InstructorsSection,
  PricingSection,
  VenuesSection,
  ScheduleSection,
  DJsSection,
  PartnersSection,
} from './_sections'
import SectionSkeleton from './_sections/SectionSkeleton'
import { SectionErrorBoundary } from './_components/SectionErrorBoundary'
import Breadcrumb from '@/app/_components/Breadcrumb'
import styles from './styles.module.scss'
import Hero from './_sections/Hero'
import About from './_sections/About'
import LevelRequirement from './_sections/LevelRequirement'
import Navigation from './Navigation'
import { notFound } from 'next/navigation'
import { isPast } from 'date-fns'

// In draft mode Next.js ignores this and always renders dynamically
export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs()
  const locales = Object.keys(EVENT_SEGMENTS) as Locale[]

  return slugs.flatMap(({ slug }) => {
    if (!slug) return []
    const parts = slug.replace(/^\//, '').split('/')
    if (parts.length < 2) return []
    const [year, slugName] = parts
    return locales.map((locale) => ({
      locale,
      event: EVENT_SEGMENTS[locale],
      year,
      slug: slugName,
    }))
  })
}

type Props = {
  params: Promise<{
    locale: Locale
    event: string
    year: string
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, event, year, slug } = await params
  const { isEnabled: preview } = await draftMode()
  const pageMetaData = await getEventMetaDataBySlug(`/${year}/${slug}`, locale, preview)

  if (!pageMetaData) return {}

  const canonical = `${SITE_URL}/${locale}/${event}/${year}/${slug}`

  const ogImage = {
    url: pageMetaData.openGraphImage?.image?.url ?? '',
    alt: pageMetaData.title ?? '',
    width: 1920,
    height: 1005,
  }

  return {
    title: pageMetaData.title ?? undefined,
    description: pageMetaData.description ?? undefined,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/${EVENT_SEGMENTS.fr}/${year}/${slug}`,
        en: `${SITE_URL}/en/${EVENT_SEGMENTS.en}/${year}/${slug}`,
        'x-default': `${SITE_URL}/en/${EVENT_SEGMENTS.en}/${year}/${slug}`,
      },
    },
    openGraph: {
      url: canonical,
      type: 'website',
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      siteName: 'Campus Balboa',
      title: pageMetaData.title ?? undefined,
      description: pageMetaData.description ?? undefined,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
  }
}

export default async function EventPage({ params }: Props) {
  const { locale, event, year, slug } = await params
  const { isEnabled: preview } = await draftMode()
  const [data, dict] = await Promise.all([
    getEventPageBySlug(`/${year}/${slug}`, locale, preview),
    getDictionary(locale),
  ])

  if (!data) {
    notFound()
  }

  const isClosed = data.endDate ? isPast(new Date(data.endDate)) : false
  const eventId = data.sys.id
  const socialMedia = (data.socialMediaCollection?.items ?? [])
    .filter((i): i is NonNullable<typeof i> => i !== null)
    .map((i) => ({ sys: { id: i.sys.id }, href: i.href ?? '', text: i.text ?? '' }))
  const registrationLink = !isClosed && data.registrationLink?.href
    ? { href: data.registrationLink.href, text: data.registrationLink.text ?? '' }
    : null

  const eventUrl = `${SITE_URL}/${locale}/${event}/${year}/${slug}`
  const eventSchema = buildEventSchema(data, eventUrl, isClosed, registrationLink)
  const breadcrumbSchema = buildBreadcrumbSchema(eventUrl, locale, event, data.title, dict)
  const personSchemas = buildPersonSchemas(data)

  const breadcrumbItems = [
    { label: dict.EventsPage.breadcrumbHome, href: `/${locale}` },
    {
      label: dict.EventsPage.breadcrumbEvents,
      href: `/${locale}/${EVENT_SEGMENTS[locale]}`,
    },
    { label: data.title ?? '' },
  ]

  const sectionBoundaryProps = {
    errorMessage: dict.SectionErrorBoundary.message,
    retryLabel: dict.SectionErrorBoundary.retry,
  } as const

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className={styles.eventPage}>
        <Navigation locale={locale} />
        <Breadcrumb items={breadcrumbItems} ariaLabel={dict.Breadcrumb.ariaLabel} />
        <main id="main-content" tabIndex={-1}>
        <Hero
          imgAlt={data.image?.title ?? ''}
          imgSrc={data.image?.url ?? ''}
          startDate={data.startDate ?? ''}
          endDate={data.endDate ?? ''}
          title={data.title ?? ''}
          closed={data.closedText ?? ''}
          locale={locale}
          isClosed={isClosed}
          socialMedia={socialMedia}
          registrationLink={registrationLink}
          newTabLabel={dict.Navigation.newTab}
        />
        <About
          details={data.details}
          sectionTitle={dict.EventPage.aboutTitle}
          closed={data.closedText ?? ''}
          isClosed={isClosed}
        />
        <LevelRequirement
          levelRequirement={data.levelRequirement}
          sectionTitle={dict.EventPage.levelRequirementTitle}
        />
        <SectionErrorBoundary label={dict.SectionSkeleton.instructors} {...sectionBoundaryProps}>
          <Suspense
            fallback={
              <SectionSkeleton
                label={`${dict.SectionSkeleton.instructors}, ${dict.SectionSkeleton.loading}`}
                minHeight={480}
                animationDelay="0s"
              />
            }
          >
            <InstructorsSection eventId={eventId} locale={locale} preview={preview} />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary label={dict.SectionSkeleton.pricing} {...sectionBoundaryProps}>
          <Suspense
            fallback={
              <SectionSkeleton
                label={`${dict.SectionSkeleton.pricing}, ${dict.SectionSkeleton.loading}`}
                minHeight={280}
                animationDelay="0.15s"
              />
            }
          >
            <PricingSection
              eventId={eventId}
              locale={locale}
              isClosed={isClosed}
              registrationLink={registrationLink}
              preview={preview}
            />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary label={dict.SectionSkeleton.venues} {...sectionBoundaryProps}>
          <Suspense
            fallback={
              <SectionSkeleton
                label={`${dict.SectionSkeleton.venues}, ${dict.SectionSkeleton.loading}`}
                minHeight={220}
                animationDelay="0.3s"
              />
            }
          >
            <VenuesSection eventId={eventId} locale={locale} preview={preview} />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary label={dict.SectionSkeleton.schedule} {...sectionBoundaryProps}>
          <Suspense
            fallback={
              <SectionSkeleton
                label={`${dict.SectionSkeleton.schedule}, ${dict.SectionSkeleton.loading}`}
                minHeight={360}
                animationDelay="0.45s"
              />
            }
          >
            <ScheduleSection eventId={eventId} locale={locale} preview={preview} />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary label={dict.SectionSkeleton.djs} silent>
          <Suspense fallback={null}>
            <DJsSection eventId={eventId} locale={locale} preview={preview} />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary label={dict.SectionSkeleton.partners} silent>
          <Suspense fallback={null}>
            <PartnersSection eventId={eventId} locale={locale} preview={preview} />
          </Suspense>
        </SectionErrorBoundary>
        </main>
      </div>
    </>
  )
}
