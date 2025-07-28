'use client'
import CampusLogo from '@/assets/svgs/campus-logo'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const frUrl = '/[event]/2024/campus-launch'
const enUrl = '/[event]/2024/campus-launch'

export default function Navigation() {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()

	return (
		<nav className="app-nav">
			<Link href={`/${locale}`}>
				<CampusLogo />
			</Link>
			<LanguageSwitcher
				customStyling="noOutline"
				customOptions={[
					{
						onClick: () =>
							router.replace(
								{ pathname: enUrl, params: { event: 'events' } },
								{ locale: 'en' },
							),
						name: 'EN',
						active: locale === 'en',
					},
					{
						onClick: () =>
							router.replace(
								{ pathname: frUrl, params: { event: 'evenements' } },
								{ locale: 'fr' },
							),
						name: 'FR',
						active: locale === 'fr',
					},
				]}
			/>
		</nav>
	)
}
