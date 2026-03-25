import EventCard from '../../_components/EventCard'
import { getSectionEvents } from '@/app/_lib/api'
import { Suspense } from 'react'
import Fallback from './Fallback'
import styles from './styles.module.scss'
import { PageSectionProps } from '@/app/_types/sections'
import Link from 'next/link'
import { EVENT_SEGMENTS } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'
import { getEventHref } from '@/app/_util/navigationUtils'

export default async function Events({ id, title, anchor, helpText, locale, preview }: PageSectionProps) {
  const [eventsCollection, dict] = await Promise.all([
    getSectionEvents(id, locale, preview),
    getDictionary(locale),
  ])
  const events = [...eventsCollection].sort((a, b) => {
    if (!a.startDate || !b.startDate) return 0
    return new Date(a.startDate) < new Date(b.startDate) ? 1 : -1
  })

  return (
    <section id={anchor} className={styles.eventsSection}>
      <div className={styles.content}>
        <h2 className={styles.eventsTitle}>{title}</h2>
        <div className={styles.eventsList}>
          <Suspense fallback={<Fallback />}>
            {events.length > 0 &&
              events.map((e) => (
                <EventCard
                  key={e.sys.id}
                  dark={e.dark}
                  title={e.title}
                  tagline={e.tagline}
                  image={e.image}
                  href={getEventHref(e.slug, locale)}
                  helpText={helpText}
                />
              ))}
          </Suspense>
        </div>
        <Link href={`/${locale}/${EVENT_SEGMENTS[locale]}`} className={styles.allEventsLink}>
          {dict.EventsSection.viewAll}
        </Link>
      </div>
    </section>
  )
}
