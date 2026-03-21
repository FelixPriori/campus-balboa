import EventCard from '../../_components/EventCard'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { EVENT } from './query'
import type { CampusEvent } from '@/app/_types/event'
import { Suspense } from 'react'
import Fallback from './Fallback'
import styles from './styles.module.scss'
import { PageSectionProps } from '@/app/_types/sections'
import Link from 'next/link'
import { EVENT_SEGMENTS } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'

export default async function Events({ id, title, anchor, helpText, locale }: PageSectionProps) {
  const [eventsCollection, dict] = await Promise.all([
    getCollectionBySectionId(id, locale, EVENT),
    getDictionary(locale),
  ])
  const events = eventsCollection.sort((a: CampusEvent, b: CampusEvent) => {
    if (new Date(a.startDate) < new Date(b.startDate)) {
      return 1
    } else {
      return -1
    }
  })

  return (
    <section id={anchor} className={styles.eventsSection}>
      <div className={styles.content}>
        <h2 className={styles.eventsTitle}>{title}</h2>
        <div className={styles.eventsList}>
          <Suspense fallback={<Fallback />}>
            {events.length > 0 &&
              events.map((e: any) => (
                <EventCard
                  key={e.sys.id}
                  dark={e.dark}
                  title={e.title}
                  tagline={e.tagline}
                  image={e.image}
                  link={e.link}
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
