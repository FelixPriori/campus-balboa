import { Rubik, Lemon } from 'next/font/google'
import { Locale } from '@/i18n'
import './globals.css'
import { Footer } from '@/app/_sections'
import { getPageFooter } from '@/app/_lib/api'
import { getDictionary } from '@/app/dictionaries'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
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
  const [footer, dict] = await Promise.all([getPageFooter(lang), getDictionary(lang)])

  return (
    <html lang={lang}>
      <body suppressHydrationWarning className={`${lemon.variable} ${rubik.variable}`}>
        {children}
        {footer && <Footer {...footer} locale={lang} />}
      </body>
    </html>
  )
}
