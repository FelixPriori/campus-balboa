import { getDJs, getInstructors, getPartners, getPricing, getSchedule, getVenues } from '@/app/_lib/api'
import { Locale } from '@/i18n'
import Instructors from './Instructors'
import Pricing from './Pricing'
import DJs from './DJs'
import Venues from './Venues'
import Schedule from './Schedule'
import Partners from './Partners'

interface SectionProps {
  eventId: string
  locale: Locale
}

interface PricingSectionProps extends SectionProps {
  isClosed: boolean
  registrationLink: { href: string; text: string } | null
}

export async function InstructorsSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getInstructors(eventId, locale)
  return <Instructors sectionTitle={sectionTitle ?? ''} instructorsData={items} />
}

export async function PricingSection({
  eventId,
  locale,
  isClosed,
  registrationLink,
}: PricingSectionProps) {
  const { items, sectionTitle } = await getPricing(eventId, locale)
  return (
    <Pricing
      pricingData={items}
      sectionTitle={sectionTitle ?? ''}
      locale={locale}
      isClosed={isClosed}
      registrationLink={registrationLink}
    />
  )
}

export async function VenuesSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getVenues(eventId, locale)
  return <Venues venuesData={items} sectionTitle={sectionTitle ?? ''} />
}

export async function ScheduleSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getSchedule(eventId, locale)
  return <Schedule scheduleData={items} sectionTitle={sectionTitle ?? ''} locale={locale} />
}

export async function DJsSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getDJs(eventId, locale)
  if (items.length === 0) return null
  return <DJs dJsData={items} sectionTitle={sectionTitle ?? ''} />
}

export async function PartnersSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getPartners(eventId, locale)
  if (items.length === 0) return null
  return <Partners partnersData={items} sectionTitle={sectionTitle ?? ''} />
}
