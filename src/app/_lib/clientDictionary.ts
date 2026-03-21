import type { Locale } from '@/i18n'
import en from '@/dictionaries/en.json'
import fr from '@/dictionaries/fr.json'

// Both locale files are statically imported so they are bundled into every
// client chunk that imports this module. This is intentional: the dictionaries
// are small and this avoids the need for async loading in error/loading/not-found
// boundaries where dynamic imports are not practical.
const dictionaries = { en, fr }

export function getClientDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en
}
