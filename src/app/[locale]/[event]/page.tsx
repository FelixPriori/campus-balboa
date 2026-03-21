import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { isPast } from 'date-fns'
import { Locale, EVENT_SEGMENTS, SITE_URL } from '@/i18n'
import { getAllEvents, EventListItem } from '@/app/_lib/api'
import { getDictionary } from '@/app/dictionaries'
import { formatDate } from '@/app/_util/dateUtils'
import Navigation from './Navigation'
import Breadcrumb from '@/app/_components/Breadcrumb'
import styles from './styles.module.scss'

export const revalidate = 3600

export function generateStaticParams() {
  return [
    { locale: 'en', event: 'events' },
    { locale: 'fr', event: 'evenements' },
  ]
}

type Props = {
  params: Promise<{ locale: Locale; event: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale, event } = await params

  if (event !== EVENT_SEGMENTS[locale]) return {}

  const dict = await getDictionary(locale)
  const canonical = `${SITE_URL}/${locale}/${event}`

  return {
    title: dict.EventsPage.metaTitle,
    description: dict.EventsPage.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/${EVENT_SEGMENTS.en}`,
        fr: `${SITE_URL}/fr/${EVENT_SEGMENTS.fr}`,
        'x-default': `${SITE_URL}/en/${EVENT_SEGMENTS.en}`,
      },
    },
    openGraph: {
      url: canonical,
      type: 'website',
      locale: locale === 'en' ? 'en_CA' : 'fr_CA',
      siteName: 'Campus Balboa',
      title: dict.EventsPage.metaTitle,
      description: dict.EventsPage.metaDescription,
    },
  }
}

function parseEventSlug(fullSlug: string | null): { year: string; slug: string } | null {
  if (!fullSlug) return null
  const parts = fullSlug.replace(/^\//, '').split('/')
  if (parts.length < 2) return null
  return { year: parts[0], slug: parts[1] }
}

interface EventCardProps {
  ev: EventListItem
  index: number
  locale: Locale
  eventSegment: string
  past?: boolean
}

function EventCard({ ev, index, locale, eventSegment, past }: EventCardProps) {
  const parsed = parseEventSlug(ev.slug)
  if (!parsed) return null
  const href = `/${locale}/${eventSegment}/${parsed.year}/${parsed.slug}`

  return (
    <li className={`${styles.eventCard} ${past ? styles.eventCardPast : ''}`}>
      <Link href={href} className={styles.cardLink}>
        <div className={styles.imgWrapper}>
          <Image
            src={ev.image.url}
            alt={ev.image.title}
            width={600}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.cardImg}
          />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.dates}>
            {formatDate(ev.startDate, locale)} – {formatDate(ev.endDate, locale)}
          </p>
          <h3 className={styles.cardTitle}>{ev.title}</h3>
        </div>
      </Link>
    </li>
  )
}

export default async function EventsPage({ params }: Props) {
  const { locale, event } = await params

  if (event !== EVENT_SEGMENTS[locale]) {
    redirect(`/${locale}`)
  }

  const [events, dict] = await Promise.all([getAllEvents(locale), getDictionary(locale)])
  const eventSegment = EVENT_SEGMENTS[locale]

  const upcomingEvents = events.filter((ev) => !isPast(new Date(ev.endDate)))
  const pastEvents = events.filter((ev) => isPast(new Date(ev.endDate)))

  return (
    <div className={styles.page}>
      <Navigation locale={locale} />
      <main className={styles.listingPage}>
        <Breadcrumb
          ariaLabel={dict.Breadcrumb.ariaLabel}
          items={[
            { label: dict.EventsPage.breadcrumbHome, href: `/${locale}` },
            { label: dict.EventsPage.breadcrumbEvents },
          ]}
        />
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{dict.EventsPage.pageTitle}</h1>
        </header>

        {upcomingEvents.length > 0 && (
          <section className={styles.section} aria-labelledby="upcoming-heading">
            <h2 id="upcoming-heading" className={styles.sectionHeading}>
              {dict.EventsPage.upcoming}
            </h2>
            <ul className={styles.eventGrid}>
              {upcomingEvents.map((ev, i) => (
                <EventCard
                  key={ev.slug ?? i}
                  ev={ev}
                  index={i}
                  locale={locale}
                  eventSegment={eventSegment}
                />
              ))}
            </ul>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section className={styles.section} aria-labelledby="past-heading">
            <h2 id="past-heading" className={styles.sectionHeading}>
              {dict.EventsPage.pastEvents}
            </h2>
            <ul className={styles.eventGrid}>
              {pastEvents.map((ev, i) => (
                <EventCard
                  key={ev.slug ?? i}
                  ev={ev}
                  index={i}
                  locale={locale}
                  eventSegment={eventSegment}
                  past
                />
              ))}
            </ul>
          </section>
        )}

        {events.length === 0 && <p className={styles.empty}>{dict.EventsPage.empty}</p>}
      </main>
    </div>
  )
}
