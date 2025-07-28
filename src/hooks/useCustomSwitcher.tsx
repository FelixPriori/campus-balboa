import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

export default function useCustomSwitcher({
	frUrl,
	enUrl,
	slug = '',
}: {
	frUrl?: string
	enUrl?: string
	slug?: string
}) {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [customOptions, setCustomOptions] = useState<any>()

	useEffect(() => {
		if (enUrl && frUrl) {
			setCustomOptions([
				{
					onClick: () =>
						router.replace(
							{ pathname, params: { event: 'events' } },
							{ locale: 'en' },
						),
					name: 'EN',
					active: locale === 'en',
				},
				{
					onClick: () =>
						router.replace(
							{ pathname, params: { event: 'evenements' } },
							{ locale: 'fr' },
						),
					name: 'FR',
					active: locale === 'fr',
				},
			])
		}
	}, [enUrl, frUrl, locale, pathname, router, slug])

	return customOptions
}
