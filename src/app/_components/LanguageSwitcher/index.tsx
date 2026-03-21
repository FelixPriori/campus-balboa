'use client'
import PillRadio, { OptionProps } from '../PillRadio'
import { Locale, EVENT_SEGMENTS } from '@/i18n'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
	customStyling?: string
	customOptions?: OptionProps[]
	locale: Locale
}

const eventSegmentValues = Object.values(EVENT_SEGMENTS)

const getSwitchLocaleHref = (locale: Locale, pathname?: string) => {
	if (!pathname) return '/'
	const segments = pathname.split('/')
	segments[1] = locale
	if (segments[2] && eventSegmentValues.includes(segments[2])) {
		segments[2] = EVENT_SEGMENTS[locale]
	}
	return segments.join('/')
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
	const pathname = usePathname()
	return (
		<PillRadio
			options={[
				{
					href: getSwitchLocaleHref('en', pathname),
					name: 'EN',
					active: locale === 'en',
				},
				{
					href: getSwitchLocaleHref('fr', pathname),
					name: 'FR',
					active: locale === 'fr',
				},
			]}
		/>
	)
}
