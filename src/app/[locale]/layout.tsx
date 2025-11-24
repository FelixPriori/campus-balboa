import { Rubik, Lemon } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { Locales } from '@/i18n'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { ReactNode } from 'react'

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

export default async function LocaleLayout({
	children,
	params,
}: LayoutProps<'/[locale]'>) {
	const lang = (await params).locale as Locales

	return (
		<html lang={lang}>
			<body
				suppressHydrationWarning
				className={`${lemon.variable} ${rubik.variable}`}
			>
				<ToastContainer />
				{children}
			</body>
		</html>
	)
}
