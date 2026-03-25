import { getDJs, getInstructors, getPartners, getPricing, getSchedule, getVenues } from '@/app/_lib/api'
import { Locale } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'
import Instructors from './Instructors'
import Pricing from './Pricing'
import DJs from './DJs'
import Venues from './Venues'
import Schedule from './Schedule'
import Partners from './Partners'

interface SectionProps {
  eventId: string
  locale: Locale
  preview?: boolean
}

interface PricingSectionProps extends SectionProps {
  isClosed: boolean
  registrationLink: { href: string; text: string } | null
}

export async function InstructorsSection({ eventId, locale, preview }: SectionProps) {
  const [items, dict] = await Promise.all([getInstructors(eventId, locale, preview), getDictionary(locale)])
  return <Instructors sectionTitle={dict.EventPage.instructorsTitle} instructorsData={items} />
}

export async function PricingSection({
  eventId,
  locale,
  isClosed,
  registrationLink,
  preview,
}: PricingSectionProps) {
  const [items, dict] = await Promise.all([getPricing(eventId, locale, preview), getDictionary(locale)])
  return (
    <Pricing
      pricingData={items}
      sectionTitle={dict.EventPage.pricingTitle}
      locale={locale}
      isClosed={isClosed}
      registrationLink={registrationLink}
    />
  )
}

export async function VenuesSection({ eventId, locale, preview }: SectionProps) {
  const [items, dict] = await Promise.all([getVenues(eventId, locale, preview), getDictionary(locale)])
  return <Venues venuesData={items} sectionTitle={dict.EventPage.venuesTitle} />
}

export async function ScheduleSection({ eventId, locale, preview }: SectionProps) {
  const [items, dict] = await Promise.all([getSchedule(eventId, locale, preview), getDictionary(locale)])
  return <Schedule scheduleData={items} sectionTitle={dict.EventPage.scheduleTitle} locale={locale} />
}

export async function DJsSection({ eventId, locale, preview }: SectionProps) {
  const [items, dict] = await Promise.all([getDJs(eventId, locale, preview), getDictionary(locale)])
  if (items.length === 0) return null
  return <DJs dJsData={items} sectionTitle={dict.EventPage.dJsTitle} />
}

export async function PartnersSection({ eventId, locale, preview }: SectionProps) {
  const [items, dict] = await Promise.all([getPartners(eventId, locale, preview), getDictionary(locale)])
  if (items.length === 0) return null
  return <Partners partnersData={items} sectionTitle={dict.EventPage.partnersTitle} />
}
