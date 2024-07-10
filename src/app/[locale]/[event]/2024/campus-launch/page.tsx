import { unstable_setRequestLocale } from 'next-intl/server'
import BigOG from '@/app/launch-party-banner.png'
import { About, Footer, Hero, Prices, Schedule } from './sections'
import Navigation from './components/Navigation'
import './launchGlobals.scss'

type Props = {
	params: { locale: string }
}

export async function generateMetadata({ params }: Props) {
	unstable_setRequestLocale(params.locale)
	const siteUrl = 'https://www.campusbalboa.org'

	if (params.locale === 'fr') {
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
						alt: 'Bannière du programme extracurriculaire avec Olga',
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

export default function Launch() {
	return (
		<div className="launch-page">
			<Navigation />
			<Hero />
			<Prices />
			<About />
			<Schedule />
			<Footer />
		</div>
	)
}
