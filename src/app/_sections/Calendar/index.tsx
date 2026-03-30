'use client'
import styles from './styles.module.scss'
import { useEffect, useMemo, useState } from 'react'
import useMapSize from '@/app/_hooks/useMapSize'
import { PageSectionProps } from '@/app/_types/sections'
import { buildGoogleCalendarUrl } from './utils'

interface CalendarProps extends PageSectionProps {
  iFrameTitle: string
  calendarEmbedTitle: string
}

export default function Calendar({
  title,
  anchor,
  locale,
  iFrameTitle,
  calendarEmbedTitle,
}: CalendarProps) {
  const mapSize = useMapSize()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 576px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const mapUrl = useMemo(
    () => buildGoogleCalendarUrl({ title: calendarEmbedTitle, locale, isMobile }),
    [calendarEmbedTitle, locale, isMobile],
  )

  return (
    <section id={anchor} className={styles.calendarSection}>
      <div className={styles.text}>
        <h2>{title}</h2>
      </div>
      <div className={styles.calendarWrapper}>
        {!mapSize ? (
          <div role="status" aria-label={iFrameTitle} className={styles.spinner} />
        ) : (
          <iframe
            title={iFrameTitle}
            src={mapUrl}
            style={{ border: 0, width: '100%', height: '100%' }}
            width={mapSize.width}
            height={mapSize.height}
          />
        )}
      </div>
    </section>
  )
}
