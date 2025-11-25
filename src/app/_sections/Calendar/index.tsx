'use client'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import useMapSize from '@/app/_hooks/useMapSize'
import { InfinitySpin } from 'react-loader-spinner'
import useResponsive from '@/app/_hooks/useResponsive'
import { PageSectionProps } from '..'
import { DictionaryType } from '@/app/dictionaries'

const buildMapUrl = (locale: string, isMobile: boolean) =>
	`https://calendar.google.com/calendar/embed?hl=${locale}&showCalendars=0&showPrint=0${
		isMobile ? '&showTabs=0' : ''
	}&mode=${isMobile ? 'AGENDA' : 'MONTH'}&title=${
		locale === 'fr'
			? 'Balboa%20%C3%A0%20Montr%C3%A9al'
			: 'Balboa%20in%20Montreal'
	}&src=Y181NWIzOTE2YTcxNWIyYzg1MTBmYzY5MmQ1M2M1NWMzZDc4OWNjNDIzNDA5MzIxZGEyNjJmM2I5MzZmNzQyOGZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23264653`

interface CalendarProps extends PageSectionProps {
	gcal: DictionaryType['Components']['gcal']
}

export default function Calendar({
	title,
	anchor,
	locale,
	gcal,
}: CalendarProps) {
	const mapSize = useMapSize()
	const { isMobile, isDesktop, isLaptop, isTablet, isLargeDesktop } =
		useResponsive()
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
				{isLoading ? (
					<InfinitySpin width="200" color="var(--color-primary)" />
				) : (
					<iframe
						title={gcal.iframeTitle}
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
