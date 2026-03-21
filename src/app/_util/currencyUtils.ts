import { Locale } from '@/i18n'

export const formatPrice = (amount: number, locale: Locale) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CAD',
  }).format(amount)
}
