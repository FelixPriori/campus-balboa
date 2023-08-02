import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client'

export default function useRouterWithLocale() {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()

  const switchLang = () => router.push(pathname, {locale: locale === 'fr' ? 'en' : 'fr'})

  return {
    switchLang,
    ...router
  }
}