import { Rubik, Lemon } from 'next/font/google'
import { draftMode } from 'next/headers'
import { Locale } from '@/i18n'
import './globals.css'
import { Footer } from '@/app/_sections'
import { getPageFooter } from '@/app/_lib/api'
import DraftModeBanner from '@/app/_components/DraftModeBanner/DraftModeBanner'
import WebVitalsReporter from '@/app/_components/WebVitalsReporter'
import CookieConsent from '@/app/_components/CookieConsent'
import { getDictionary } from '@/app/dictionaries'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-rubik',
  display: 'swap',
})

const lemon = Lemon({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-lemon',
  display: 'swap',
})

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const lang = (await params).locale as Locale
  const { isEnabled: preview } = await draftMode()
  const [footer, dict] = await Promise.all([
    getPageFooter(lang, preview),
    getDictionary(lang),
  ])

  return (
    <html lang={lang}>
      <body suppressHydrationWarning className={`${lemon.variable} ${rubik.variable}`}>
        <WebVitalsReporter />
        <CookieConsent locale={lang} translations={dict.CookieConsent} />
        <DraftModeBanner locale={lang} isPreview={preview} />
        {children}
        {footer && <Footer {...footer} locale={lang} />}
      </body>
    </html>
  )
}
