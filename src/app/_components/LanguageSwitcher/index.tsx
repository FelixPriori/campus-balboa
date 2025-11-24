'use client'
import PillRadio, { OptionProps } from '../PillRadio'
import { Locale, Locales } from '@/i18n'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
	customStyling?: string
	customOptions?: OptionProps[]
	locale: Locale
}

const getSwitchLocaleHref = (locale: Locales, pathname?: string) => {
	if (!pathname) return '/'
	const segments = pathname.split('/')
	segments[1] = locale
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
