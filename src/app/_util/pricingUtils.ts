import { PricingData } from '@/app/_types/events'

export const getDisplayedPricingTiers = (pricingData: PricingData[]): PricingData[] => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const sorted = [...pricingData].sort((a, b) =>
		new Date(a.startTime) < new Date(b.startTime) ? -1 : 1,
	)
	const active = sorted.filter(p => new Date(p.endTime) >= today)
	const lastEnd = sorted[sorted.length - 1]?.endTime.slice(0, 10)
	const lastBatch = sorted.filter(p => p.endTime.slice(0, 10) === lastEnd)

	return active.length > 0 ? active : lastBatch
}
