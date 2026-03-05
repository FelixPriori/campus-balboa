import { EntrySys } from 'contentful'
import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import PricingCard from '../_components/PricingCard'
import { getDictionary } from '@/app/dictionaries'

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
	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const sorted = [...pricingData].sort((a, b) =>
		new Date(a.startTime) < new Date(b.startTime) ? -1 : 1,
	)
	const active = sorted.filter(p => new Date(p.endTime) >= today)
	const lastBatch = (() => {
		const lastEnd = sorted[sorted.length - 1]?.endTime.slice(0, 10)
		return sorted.filter(p => p.endTime.slice(0, 10) === lastEnd)
	})()
	const displayed = active.length > 0 ? active : lastBatch

	return (
		<section className={styles.pricingSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<ul className={styles.pricingCards}>
					{displayed.map(pricing => (
						<PricingCard
							key={pricing.sys.id}
							tier={pricing.tier}
							startTime={pricing.startTime}
							endTime={pricing.endTime}
							amount={pricing.amount}
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
