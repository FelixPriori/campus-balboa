import { getCollectionByEventId } from '@/app/_lib/api'
import {
	DJ,
	EVENT_BLOCK,
	INSTRUCTOR,
	PARTNER,
	PRICE,
	VENUE,
} from '@/app/_lib/queries'
import { Locale } from '@/i18n'
import Instructors from './Instructors'
import Pricing from './Pricing'
import DJs from './DJs'
import Venues from './Venues'
import Schedule from './Schedule'
import Partners from './Partners'

interface EventContext {
	isClosed: boolean
	registrationLink: { href: string; text: string } | null
}

export default async function sectionsRenderer(
	sectionName: string,
	eventId: string,
	locale: Locale,
	eventContext?: EventContext,
) {
	switch (sectionName) {
		case 'instructors': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'instructors',
				locale,
				INSTRUCTOR,
			)
			return <Instructors sectionTitle={sectionTitle} instructorsData={items} />
		}
		case 'pricing': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'pricing',
				locale,
				PRICE,
			)
			return (
				<Pricing
					pricingData={items}
					sectionTitle={sectionTitle}
					locale={locale}
					isClosed={eventContext?.isClosed ?? false}
					registrationLink={eventContext?.registrationLink ?? null}
				/>
			)
		}
		case 'venues': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'venues',
				locale,
				VENUE,
			)
			return <Venues venuesData={items} sectionTitle={sectionTitle} />
		}
		case 'schedule': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'schedule',
				locale,
				EVENT_BLOCK,
			)
			return (
				<Schedule
					scheduleData={items}
					sectionTitle={sectionTitle}
					locale={locale}
				/>
			)
		}
		case 'dJs': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'dJs',
				locale,
				DJ,
			)
			if (items.length === 0) {
				return <></>
			}
			return <DJs dJsData={items} sectionTitle={sectionTitle} />
		}
		case 'partners': {
			const { items, sectionTitle } = await getCollectionByEventId(
				eventId,
				'partners',
				locale,
				PARTNER,
			)
			if (items.length === 0) {
				return <></>
			}
			return <Partners partnersData={items} sectionTitle={sectionTitle} />
		}
	}
}
