'use client'
import styles from './styles.module.scss'
import { useMemo } from 'react'
import useMapSize from '@/app/_hooks/useMapSize'
import { InfinitySpin } from 'react-loader-spinner'
import useResponsive from '@/app/_hooks/useResponsive'
import { GoogleCalendarText } from '@/app/_types/components'
import { PageSectionProps } from '@/app/_types/sections'
import { buildGoogleCalendarUrl } from './utils'

interface CalendarProps extends PageSectionProps {
  gcal: GoogleCalendarText | null
  calendarEmbedTitle: string
}

export default function Calendar({
  title,
  anchor,
  locale,
  gcal,
  calendarEmbedTitle,
}: CalendarProps) {
  const mapSize = useMapSize()
  const { isMobile } = useResponsive()
  const mapUrl = useMemo(
    () => buildGoogleCalendarUrl({ title: calendarEmbedTitle, locale, isMobile }),
    [calendarEmbedTitle, locale, isMobile],
  )
  const isLoading = !mapSize

  return (
    <section id={anchor} className={styles.calendarSection}>
      <div className={styles.text}>
        <h2>{title}</h2>
      </div>
      <div className={styles.calendarWrapper}>
        {isLoading ? (
          <InfinitySpin width="200" color="var(--color-primary)" />
        ) : (
          <iframe
            title={gcal?.iFrameTitle ?? ''}
            src={mapUrl}
            style={{ border: 0, width: '100%', height: '100%' }}
            width={mapSize?.width ?? 0}
            height={mapSize?.height ?? 0}
          ></iframe>
        )}
      </div>
    </section>
  )
}
