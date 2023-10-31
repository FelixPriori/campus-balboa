"use client"
import { useLocale, useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import useMapSize from '@/hooks/useMapSize'
import { InfinitySpin } from 'react-loader-spinner'
import useResponsive from '@/hooks/useResponsive'
import { PageSectionProps } from '..'

const buildMapUrl = (locale: string, isMobile: boolean) => `https://calendar.google.com/calendar/embed?hl=${locale}&showCalendars=0&showPrint=0${isMobile ? '&showTabs=0' : ''}&mode=${isMobile ? 'AGENDA' : 'MONTH'}&title=${locale === 'fr' ? 'Balboa%20%C3%A0%20Montr%C3%A9al' : 'Balboa%20in%20Montreal'}&src=Y181NWIzOTE2YTcxNWIyYzg1MTBmYzY5MmQ1M2M1NWMzZDc4OWNjNDIzNDA5MzIxZGEyNjJmM2I5MzZmNzQyOGZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23264653`

export default function Calendar({title, anchor}: PageSectionProps) {
    const t = useTranslations('Components.gcal');
    const locale = useLocale()
    const mapSize = useMapSize()
    const {isMobile, isDesktop, isLaptop, isTablet, isLargeDesktop} = useResponsive()
    const [mapUrl, setMapUrl] = useState(buildMapUrl(locale, isMobile))
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setMapUrl(buildMapUrl(locale, isMobile))
    }, [isMobile, locale, isDesktop, isLaptop, isTablet, isLargeDesktop])

    useEffect(() => {
        if (mapSize) {
            setIsLoading(false)
        }
    }, [mapSize])

    return (
        <section id={anchor} className={styles.calendarSection}>
            <div className={styles.text}>
                <h2>{title}</h2>
            </div>
            <div className={styles.calendarWrapper}>
                {isLoading ? <InfinitySpin width="200" color="var(--color-primary)" /> : <iframe title={t('iframeTitle')} src={mapUrl} style={{border: 0}} width={mapSize?.width ?? 0} height={mapSize?.height ?? 0} frameBorder="0" scrolling="no"></iframe>}  
            </div>
        </section>
    )
}