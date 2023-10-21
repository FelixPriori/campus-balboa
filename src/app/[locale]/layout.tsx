import {NextIntlClientProvider} from 'next-intl';
import { Poppins } from 'next/font/google'
import {notFound} from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500','600', '700', '800', '900'],
  style: ['normal', 'italic']
})

export default async function LocaleLayout({children, params: {locale}}: {children: React.ReactElement, params: {locale: string}}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={poppins.className}>
        <ToastContainer />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
