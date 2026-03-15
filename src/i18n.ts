export const locales = ['en', 'fr']

export const i18n = {
	defaultLocale: 'en',
	locales,
} as const

export type Locale = (typeof i18n)['locales'][number]

export type Locales = 'en' | 'fr'

export const SITE_URL = 'https://www.campusbalboa.org'

export const EVENT_SEGMENTS: Record<Locales, string> = {
	fr: 'evenements',
	en: 'events',
}
