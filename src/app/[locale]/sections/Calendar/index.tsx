"use client"
import { useLocale } from 'next-intl'
import styles from './styles.module.scss'
import useResponsive from '@/hooks/useResponsive'
import { useEffect, useState } from 'react'

export default function Calendar() {
    const locale = useLocale()
    const [mapSize, setMapSize] = useState({width: 800, height: 600})
    const {isMobile, isTablet, isLaptop, isDesktop} = useResponsive()
    const [mapUrl, setMapUrl] = useState('')

    useEffect(() => {
        if (isMobile) {
            setMapSize({width: 320, height: 400})
        } else if (isTablet) {
            setMapSize({width: 500, height: 400})
        } else if (isLaptop) {
            setMapSize({width: 600, height: 500})
        } else if (isDesktop) {
            setMapSize({width: 800, height: 600})
        }
    }, [isMobile, isLaptop, isDesktop, isTablet])

    useEffect(() => {
        setMapUrl(`https://calendar.google.com/calendar/embed?hl=${locale}&showCalendars=0&showPrint=0${isMobile ? '&showTabs=0' : ''}&mode=${isMobile ? 'AGENDA' : 'MONTH'}&title=${locale === 'fr' ? 'Balboa%20%C3%A0%20Montr%C3%A9al' : 'Balboa%20in%20Montreal'}&src=Y181NWIzOTE2YTcxNWIyYzg1MTBmYzY5MmQ1M2M1NWMzZDc4OWNjNDIzNDA5MzIxZGEyNjJmM2I5MzZmNzQyOGZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23264653`)
    }, [isMobile, locale])

    return (
        <section className={styles.calendarSection}>
            <div className={styles.calendarWrapper}>
                <iframe src={mapUrl} style={{border: 0}} width={mapSize.width} height={mapSize.height} frameBorder="0" scrolling="no"></iframe>
            </div>
        </section>
    )
}