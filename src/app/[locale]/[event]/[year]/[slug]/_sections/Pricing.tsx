import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import PricingCard from '../_components/PricingCard'
import { getDictionary } from '@/app/dictionaries'
import { PricingData } from '@/app/_types/events'
import { getDisplayedPricingTiers } from '@/app/_util/pricingUtils'

interface PricingProps {
	pricingData: PricingData[]
	sectionTitle: string
	locale: Locale
	isClosed: boolean
	registrationLink: { href: string; text: string } | null
}

export default async function Pricing({
	pricingData,
	locale,
	sectionTitle,
	isClosed,
	registrationLink,
}: PricingProps) {
	const { PricingCard: labels } = await getDictionary(locale as 'en' | 'fr')
	const displayed = getDisplayedPricingTiers(pricingData)

	return (
		<section className={styles.pricingSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<ul className={styles.pricingCards}>
					{displayed.map(({ current, next }) => (
						<PricingCard
							key={current.sys.id}
							tier={current.tier}
							startTime={current.startTime}
							endTime={current.endTime}
							amount={current.amount}
							nextTier={next}
							locale={locale}
							isClosed={isClosed}
							registrationLink={registrationLink}
							labels={labels}
						/>
					))}
				</ul>
			</div>
		</section>
	)
}
