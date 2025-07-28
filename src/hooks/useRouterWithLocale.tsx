import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'

export default function useRouterWithLocale() {
	const router = useRouter()
	const locale = useLocale()
	const pathname = usePathname()

	const switchLang = () =>
		router.push(
			{
				pathname,
				params: { event: locale === 'fr' ? 'evenements' : 'events' },
			},
			{ locale: locale === 'fr' ? 'en' : 'fr' },
		)

	const setLang = (locale: 'en' | 'fr') =>
		router.push(
			{
				pathname,
				params: { event: locale === 'fr' ? 'evenements' : 'events' },
			},
			{ locale },
		)

	return {
		switchLang,
		setLang,
		...router,
	}
}
