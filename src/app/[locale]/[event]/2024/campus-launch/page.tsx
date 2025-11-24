import BigOG from '@/app/launch-party-banner.png'
import { About, Footer, Hero, Prices, Schedule } from './sections'
import Navigation from './components/Navigation'
import { Locales } from '@/i18n'
import './launchGlobals.scss'
import { getDictionary } from '@/app/dictionaries'

type Props = {
	params: Promise<{ locale: Locales }>
}

export async function generateMetadata({ params }: Props) {
	const locale = (await params).locale as Locales
	const siteUrl = 'https://www.campusbalboa.org'

	if (locale === 'fr') {
		return {
			title: 'Lancement de Campus Balboa',
			description: 'Lancement de Campus Balboa le 17 août 2024',
			alternates: {
				canonical: `${siteUrl}/fr/evenements/2024/campus-launch`,
			},
			openGraph: {
				images: [
					{
						url: BigOG.src,
						alt: 'Bannière du lancemenet de Campus Balboa',
						width: 1920,
						height: 1005,
					},
				],
				title: 'Lancement de Campus Balboa',
				locale: 'fr',
				description: 'Lancement de Campus Balboa le 17 août 2024',
			},
		}
	} else {
		return {
			title: 'Campus Balboa Launch Party',
			description: 'Campus Balboa Launch Party happening on August 17th, 2024',
			alternates: {
				canonical: `${siteUrl}/en/events/2024/campus-launch`,
			},
			openGraph: {
				images: [
					{
						url: BigOG.src,
						alt: 'Campus Balboa Launch Party',
						width: 1920,
						height: 1005,
					},
				],
				title: 'Campus Balboa Launch Party',
				locale: 'en',
				description:
					'Campus Balboa Launch Party happening on August 17th, 2024',
			},
		}
	}
}

export default async function Launch({ params }: Props) {
	const locale = (await params).locale as Locales
	const { Events } = await getDictionary(locale)

	return (
		<div className="launch-page">
			<Navigation locale={locale} />
			<Hero headerSection={Events[2024].Launch.header} />
			<Prices pricesSection={Events[2024].Launch.pricesSection} />
			<About aboutSection={Events[2024].Launch.aboutSection} />
			<Schedule scheduleSection={Events[2024].Launch.scheduleSection} />
			<Footer footerSection={Events[2024].Launch} />
		</div>
	)
}
