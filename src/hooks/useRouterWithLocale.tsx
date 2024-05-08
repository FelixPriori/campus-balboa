import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../navigation'

export default function useRouterWithLocale() {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()

  const switchLang = () => router.push(pathname, { locale: locale === 'fr' ? 'en' : 'fr' })

  const setLang = (locale: 'en' | 'fr') => router.push(pathname, { locale })

  return {
    switchLang,
    setLang,
    ...router
  }
}