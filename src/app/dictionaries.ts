import { cache } from 'react'
import { Locale } from '@/i18n'
import 'server-only'

const dictionaries = {
	en: () => import('../dictionaries/en.json').then(module => module.default),
	fr: () => import('../dictionaries/fr.json').then(module => module.default),
}

export const getDictionary = cache(
	async (locale: Locale) => dictionaries[locale](),
)

export type DictionaryType = Awaited<ReturnType<typeof getDictionary>>
