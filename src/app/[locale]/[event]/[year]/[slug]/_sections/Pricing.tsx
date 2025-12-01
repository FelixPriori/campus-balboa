import { EntrySys } from 'contentful'
import styles from './styles.module.scss'
import { Fragment } from 'react/jsx-runtime'
import { formatDate } from '@/app/_util/dateUtils'
import { Locale } from '@/i18n'
import { formatPrice } from '@/app/_util/currencyUtils'

interface PricingData {
	sys: EntrySys
	tier: string
	type: string
	startTime: string
	endTime: string
	amount: number
}

interface PricingProps {
	pricingData: PricingData[]
	sectionTitle: string
	locale: Locale
}

export default function Pricing({
	pricingData,
	locale,
	sectionTitle,
}: PricingProps) {
	return (
		<section className={styles.pricingSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<ul className={styles.list}>
							{pricingData
								.sort((a, b) => {
									if (new Date(a.startTime) < new Date(b.startTime)) return -1
									else return 1
								})
								.map(pricing => (
									<li key={pricing.sys.id} className={styles.priceContainer}>
										<h3 className={styles.tier}>{pricing.tier}</h3>
										<p className={`${styles.item} ${styles[pricing.type]}`}>
											<span className={styles.itemTitle}>
												{formatDate(pricing.startTime, locale)} -
												{formatDate(pricing.endTime, locale)}
											</span>
											<span className={styles.price}>
												{formatPrice(pricing.amount, locale)}
											</span>
										</p>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
