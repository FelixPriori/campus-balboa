'use client'
import CampusLogo from '@/assets/svgs/campus-logo'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const frUrl = '/[event]/2024/extracurriculaire-olga'
const enUrl = '/[event]/2024/extracurriculaire-olga'

export default function Navigation() {
	const router = useRouter()
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
							router.push(
								{ pathname: enUrl, params: { event: 'events' } },
								{ locale: 'en' },
							),
						name: 'EN',
						active: locale === 'en',
					},
					{
						onClick: () =>
							router.push(
								{ pathname: frUrl, params: { event: 'events' } },
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
