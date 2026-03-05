import Image from 'next/image'
import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import { formatDate } from '@/app/_util/dateUtils'

interface HeroProps {
	startDate: string
	endDate: string
	title: string
	imgSrc: string
	imgAlt: string
	closed: string
	locale: Locale
	isClosed: boolean
}

export default function Hero({
	startDate,
	endDate,
	title,
	imgSrc,
	imgAlt,
	closed,
	locale,
	isClosed,
}: HeroProps) {
	return (
		<header className={styles.hero}>
			<div className={styles.card}>
				<div className={styles.imgWrapper}>
					<Image
						loading="eager"
						src={imgSrc}
						width={1080}
						height={1080}
						alt={imgAlt}
					/>
				</div>
				<div className={styles.content}>
					<p className={styles.date}>
						{formatDate(startDate, locale)} - {formatDate(endDate, locale)}
					</p>
					<h1>{title}</h1>
					{isClosed && <p>{closed}</p>}
				</div>
			</div>
		</header>
	)
}
