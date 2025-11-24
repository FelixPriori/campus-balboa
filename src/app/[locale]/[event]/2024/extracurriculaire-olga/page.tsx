import BigOG from '@/app/olga-og.jpg'
import { About, Footer, Hero, Prices, Schedule } from './sections'
import Navigation from './components/Navigation'
import { Locales } from '@/i18n'
import './olgaGlobals.scss'
import { getDictionary } from '@/app/dictionaries'

type Props = {
	params: Promise<{ locale: Locales }>
}

export async function generateMetadata({ params }: Props) {
	const locale = (await params).locale as Locales
	const siteUrl = 'https://www.campusbalboa.org'

	if (locale === 'fr') {
		return {
			title: 'Programme extracurriculaire avec Olga',
			description: 'Évenement de balboa à Montréal le 26-27-28 avril 2024',
			alternates: {
				canonical: `${siteUrl}/fr/evenements/2024/extracurriculaire-olga`,
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
				title: 'Programme extracurriculaire avec Olga',
				locale: 'fr',
				description: 'Évenement de balboa à Montréal le 26-27-28 avril 2024',
			},
		}
	} else {
		return {
			title: 'Extracurricular Program with Olga',
			description: 'Balboa event happening in Montreal on April 26-27-28 2024',
			alternates: {
				canonical: `${siteUrl}/en/events/2024/extracurriculaire-olga`,
			},
			openGraph: {
				images: [
					{
						url: BigOG.src,
						alt: 'Extracurricular program with Olga event banner',
						width: 1920,
						height: 1005,
					},
				],
				title: 'Extracurricular Program with Olga',
				locale: 'en',
				description:
					'Balboa event happening in Montreal on April 26-27-28 2024',
			},
		}
	}
}

export default async function Olga({ params }: Props) {
	const locale = (await params).locale as Locales
	const { Events } = await getDictionary(locale)
	return (
		<div className="olga-page">
			<Navigation locale={locale} />
			<Hero
				headerSection={Events[2024].Olga.header}
				closed={Events[2024].Olga.closed}
			/>
			<Prices
				pricesSection={Events[2024].Olga.pricesSection}
				closed={Events[2024].Olga.closed}
			/>
			<About
				aboutSection={Events[2024].Olga.aboutSection}
				closed={Events[2024].Olga.closed}
			/>
			<Schedule scheduleSection={Events[2024].Olga.scheduleSection} />
			<Footer footerSection={Events[2024].Olga} />
		</div>
	)
}
