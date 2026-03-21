import { PricingData } from '@/app/_types/events'

export interface PricingTierWithNext {
  current: PricingData
  next: PricingData | null
}

export const getDisplayedPricingTiers = (pricingData: PricingData[]): PricingTierWithNext[] => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const sorted = [...pricingData].sort((a, b) =>
    new Date(a.startTime) < new Date(b.startTime) ? -1 : 1,
  )
  const active = sorted.filter(
    (p) => new Date(p.startTime) <= today && new Date(p.endTime) >= today,
  )
  const lastEnd = sorted[sorted.length - 1]?.endTime.slice(0, 10)
  const lastBatch = sorted.filter((p) => p.endTime.slice(0, 10) === lastEnd)

  const displayed = active.length > 0 ? active : lastBatch

  return displayed.map((current) => {
    const next =
      sorted.find(
        (p) => p.batch === current.batch && new Date(p.startTime) > new Date(current.endTime),
      ) ?? null
    return { current, next }
  })
}
