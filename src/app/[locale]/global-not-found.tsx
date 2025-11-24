import Image from 'next/image'
import { Footer } from './sections'
import Main from '@/app/_layout/main'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import BackButton from './components/BackButton'
import { Locales, locales } from '@/i18n'
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
	const { NotFoundPage, Components, LandAcknowledgement } = await getDictionary(
		locale,
	)

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
						width={100}
						height={100}
					/>
					<h1>{NotFoundPage.title}</h1>
					<BackButton>{NotFoundPage.return}</BackButton>
					<Link href="/">{NotFoundPage.home}</Link>
				</div>
			</Main>
			<Footer
				contact={NotFoundPage.footer.contact}
				contactLink={{
					href: NotFoundPage.footer.contactLink.href,
					text: NotFoundPage.footer.contactLink.text,
				}}
				copyright={NotFoundPage.footer.copyright}
				socialMediasCollection={{
					items: [
						{
							sys: {
								id: NotFoundPage.footer.socialMedia.facebook.id,
							},
							accessibilityDescription:
								NotFoundPage.footer.socialMedia.facebook
									.accessibilityDescription,
							href: NotFoundPage.footer.socialMedia.facebook.href,
							logo: {
								url: NotFoundPage.footer.socialMedia.facebook.logo.url,
								title: NotFoundPage.footer.socialMedia.facebook.logo.title,
							},
						},
						{
							sys: {
								id: NotFoundPage.footer.socialMedia.instagram.id,
							},
							accessibilityDescription:
								NotFoundPage.footer.socialMedia.instagram
									.accessibilityDescription,
							href: NotFoundPage.footer.socialMedia.instagram.href,
							logo: {
								url: NotFoundPage.footer.socialMedia.instagram.logo.url,
								title: NotFoundPage.footer.socialMedia.instagram.logo.title,
							},
						},
					],
				}}
				paypalButton={Components.paypal}
				landAcknowledgement={LandAcknowledgement}
			/>
		</div>
	)
}
