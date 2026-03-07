import Image from 'next/image'
import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import { formatDate } from '@/app/_util/dateUtils'
import { ButtonLink } from '@/app/_types/components'
import { SocialMediaLinks } from '../_components/SocialMediaLinks'

interface HeroProps {
	startDate: string
	endDate: string
	title: string
	imgSrc: string
	imgAlt: string
	closed: string
	locale: Locale
	isClosed: boolean
	socialMedia: ButtonLink[]
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
	socialMedia,
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
					<SocialMediaLinks links={socialMedia} />
				</div>
			</div>
		</header>
	)
}
