import { Caveat_Brush, Josefin_Sans } from 'next/font/google';
import Navigation from './components/Navigation';
import './mbj-globals.scss';
import { Footer, Header } from './sections';
import FloatingHelpButton from './components/FloatingHelpButton';

const caveatBrush = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-caveat-brush',
})

const josephinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-josephin-sans',
})

export default function MtlBalJamLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className={`mbj-event ${caveatBrush.variable} ${josephinSans.variable}`}>
      <Navigation />
      <Header />
      {children}
      <Footer />
      <FloatingHelpButton />
    </div>
  )
}
