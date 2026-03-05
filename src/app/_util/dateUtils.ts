import { Locale } from '@/i18n'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { frCA, enCA } from 'date-fns/locale'

const FALLBACK_TZ = 'Etc/GMT+5'

const extractOffset = (date: string): string =>
	date.match(/([+-]\d{2}:\d{2})$/)?.[1] ?? FALLBACK_TZ

export const formatDate = (date: string, locale: Locale) => {
	const dateFnLocale = locale === 'fr' ? frCA : enCA
	const [year, month, day] = date.slice(0, 10).split('-').map(Number)
	return format(new Date(year, month - 1, day), 'd LLLL u', { locale: dateFnLocale })
}

export const formatClassTime = (date: string, locale: Locale) => {
	const dateFnLocale = locale === 'fr' ? frCA : enCA
	return formatInTimeZone(new Date(date), extractOffset(date), 'd LLLL u, p', {
		locale: dateFnLocale,
	})
}
