import { NextIntlClientProvider } from 'next-intl';
import { Rubik, Lemon } from 'next/font/google'
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import CampusLogo from '@/assets/svgs/campus-logo';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-rubik',
  display: 'swap'
})

const lemon = Lemon({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-lemon',
  display: 'swap'
})

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactElement, params: { locale: string } }) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={`${lemon.variable} ${rubik.variable}`}>
        <ToastContainer />
        <NextIntlClientProvider timeZone="America/Toronto" locale={locale} messages={messages}>
          <nav className="app-nav">
            <CampusLogo />
            <LanguageSwitcher customStyling='noOutline' />
          </nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
