import styles from './PricingCard.module.scss'
import { formatDate } from '@/app/_util/dateUtils'
import { formatPrice } from '@/app/_util/currencyUtils'
import { Locale } from '@/i18n'

interface PricingCardProps {
	tier: string
	startTime: string
	endTime: string
	amount: number
	locale: Locale
	isClosed: boolean
	registrationLink: { href: string; text: string } | null
	labels: { registrationOpensSoon: string; registrationClosed: string }
}

export default function PricingCard({
	tier,
	startTime,
	endTime,
	amount,
	locale,
	isClosed,
	registrationLink,
	labels,
}: PricingCardProps) {
	return (
		<li className={styles.pricingCard}>
			<div className={styles.cardHeader}>
				<h3>{tier}</h3>
			</div>
			<div className={styles.cardBody}>
				<p className={styles.price}>{formatPrice(amount, locale)}</p>
				<p className={styles.dates}>
					{formatDate(startTime, locale)} – {formatDate(endTime, locale)}
				</p>
				{isClosed ? (
					<p className={styles.ctaLabel}>{labels.registrationClosed}</p>
				) : registrationLink ? (
					<a
						href={registrationLink.href}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.ctaButton}
					>
						{registrationLink.text}
					</a>
				) : (
					<p className={styles.ctaLabel}>{labels.registrationOpensSoon}</p>
				)}
			</div>
		</li>
	)
}
