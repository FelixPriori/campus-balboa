import Hero from './Hero'
import FeaturedSection from './Featured'
import CalendarSection from './Calendar'
import EventsSection from './Events'
import MissionsSection from './Missions'
import AboutUsSection from './AboutUs'
import Footer from './Footer'
import { Locale } from '@/i18n'
import { DictionaryType, getDictionary } from '@/app/dictionaries'

export interface PageSectionProps {
	title: string
	anchor: string
	id: string
	helpText?: string
	locale: Locale
	content?: {
		json: any
		links: any
	}
}

export default function sectionsRenderer(
	section: any,
	locale: Locale,
	dictionary: DictionaryType,
) {
	switch (section.sectionName) {
		case 'featured':
			return (
				<FeaturedSection
					key={section.sys.id}
					id={section.sys.id}
					title={section.title}
					anchor={section.anchor}
					locale={locale}
					embla={dictionary.Components.embla}
				/>
			)
		case 'calendar':
			return (
				<CalendarSection
					key={section.sys.id}
					id={section.sys.id}
					title={section.title}
					anchor={section.anchor}
					locale={locale}
					gcal={dictionary.Components.gcal}
				/>
			)
		case 'events':
			return (
				<EventsSection
					key={section.sys.id}
					id={section.sys.id}
					title={section.title}
					anchor={section.anchor}
					helpText={section.helpText}
					locale={locale}
				/>
			)
		case 'missions':
			return (
				<MissionsSection
					key={section.sys.id}
					id={section.sys.id}
					title={section.title}
					anchor={section.anchor}
					locale={locale}
				/>
			)
		case 'about':
			return (
				<AboutUsSection
					key={section.sys.id}
					id={section.sys.id}
					title={section.title}
					anchor={section.anchor}
					locale={locale}
				/>
			)
	}
}

export { Hero, Footer }
