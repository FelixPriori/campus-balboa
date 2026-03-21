import { getCollectionByEventId } from '@/app/_lib/api'
import { DJ, EVENT_BLOCK, INSTRUCTOR, PARTNER, PRICE, VENUE } from '@/app/_lib/queries'
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
  const { items, sectionTitle } = await getCollectionByEventId(
    eventId,
    'instructors',
    locale,
    INSTRUCTOR,
  )
  return <Instructors sectionTitle={sectionTitle} instructorsData={items} />
}

export async function PricingSection({
  eventId,
  locale,
  isClosed,
  registrationLink,
}: PricingSectionProps) {
  const { items, sectionTitle } = await getCollectionByEventId(eventId, 'pricing', locale, PRICE)
  return (
    <Pricing
      pricingData={items}
      sectionTitle={sectionTitle}
      locale={locale}
      isClosed={isClosed}
      registrationLink={registrationLink}
    />
  )
}

export async function VenuesSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getCollectionByEventId(eventId, 'venues', locale, VENUE)
  return <Venues venuesData={items} sectionTitle={sectionTitle} />
}

export async function ScheduleSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getCollectionByEventId(
    eventId,
    'schedule',
    locale,
    EVENT_BLOCK,
  )
  return <Schedule scheduleData={items} sectionTitle={sectionTitle} locale={locale} />
}

export async function DJsSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getCollectionByEventId(eventId, 'dJs', locale, DJ)
  if (items.length === 0) return null
  return <DJs dJsData={items} sectionTitle={sectionTitle} />
}

export async function PartnersSection({ eventId, locale }: SectionProps) {
  const { items, sectionTitle } = await getCollectionByEventId(eventId, 'partners', locale, PARTNER)
  if (items.length === 0) return null
  return <Partners partnersData={items} sectionTitle={sectionTitle} />
}
