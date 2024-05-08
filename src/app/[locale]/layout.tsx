import { NextIntlClientProvider } from 'next-intl';
import { Rubik, Lemon } from 'next/font/google'
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import { unstable_setRequestLocale } from 'next-intl/server';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={`${lemon.variable} ${rubik.variable}`}>
        <ToastContainer />
        <NextIntlClientProvider
          timeZone="America/Toronto"
          locale={locale}
          messages={messages}
          now={new Date()}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
