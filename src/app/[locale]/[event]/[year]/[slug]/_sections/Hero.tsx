import Image from 'next/image'
import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import { formatDate } from '@/app/_util/dateUtils'
import { ButtonLink, Link } from '@/app/_types/components'
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
	registrationLink: Link | null
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
	registrationLink,
}: HeroProps) {
	return (
		<header className={styles.hero}>
			<div className={styles.card}>
				<div className={styles.imgWrapper}>
					<Image
						priority
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
					<div className={styles.links}>
						{!isClosed && registrationLink && (
							<a
								href={registrationLink.href}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.registrationLink}
							>
								{registrationLink.text}
							</a>
						)}
						<SocialMediaLinks links={socialMedia} />
					</div>
				</div>
			</div>
		</header>
	)
}
