import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Can be imported from a shared config
const locales = ['en', 'fr']

export default getRequestConfig(async ({ requestLocale }) => {
	// Validate that the incoming `locale` parameter is valid
	let locale = await requestLocale

	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale
	}

	if (!locales.includes(locale as any)) notFound()

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	}
})
