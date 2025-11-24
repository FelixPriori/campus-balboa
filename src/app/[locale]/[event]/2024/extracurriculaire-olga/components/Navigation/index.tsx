'use client'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import { Locale } from '@/i18n'
import Link from 'next/link'

export default function Navigation({ locale }: { locale: Locale }) {
	return (
		<nav className="app-nav">
			<Link href={`/${locale}`}>
				<CampusLogo />
			</Link>
			<LanguageSwitcher locale={locale} />
		</nav>
	)
}
