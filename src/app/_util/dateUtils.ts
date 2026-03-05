import { Locale } from '@/i18n'
import { format } from 'date-fns-tz'
import { frCA, enCA } from 'date-fns/locale'

export const formatDate = (date: string, locale: Locale) => {
	const dateFnLocale = locale === 'fr' ? frCA : enCA
	return format(new Date(date), 'd LLLL u', {
		locale: dateFnLocale,
		timeZone: 'America/New_York',
	})
}

export const formatClassTime = (date: string, locale: Locale) => {
	const dateFnLocale = locale === 'fr' ? frCA : enCA
	return format(new Date(date), 'd LLLL u, p', {
		locale: dateFnLocale,
		timeZone: 'America/New_York',
	})
}
