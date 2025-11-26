import Image from 'next/image'
import { Footer } from '@/app/_sections'
import Main from '@/app/_layout/main'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import BackButton from '../_components/BackButton'
import { Locales } from '@/i18n'
import { getDictionary } from '../dictionaries'
import Link from 'next/link'

type Props = {
	params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const locale = (await params).locale as Locales

	if (locale === 'fr') {
		return {
			title: '404 | Page non trouvée',
			description: "Désolé, cette page n'existe pas",
		}
	} else {
		return {
			title: '404 | Page not found',
			description: 'Sorry, this page does not exist',
		}
	}
}

export default async function NotFoundPage({ params }: Props) {
	const locale = (await params).locale as Locales
	const { NotFoundPage } = await getDictionary(locale)

	return (
		<div className="not-found">
			<nav className="app-nav">
				<Link href="/">
					<CampusLogo />
				</Link>
				<LanguageSwitcher locale={locale} />
			</nav>
			<Main>
				<div className="content">
					<Image
						className="not-found-image"
						src="/404.png"
						alt="404"
						width={1116}
						height={972}
					/>
					<h1>{NotFoundPage.title}</h1>
					<BackButton>{NotFoundPage.return}</BackButton>
					<Link href="/">{NotFoundPage.home}</Link>
				</div>
			</Main>
		</div>
	)
}
