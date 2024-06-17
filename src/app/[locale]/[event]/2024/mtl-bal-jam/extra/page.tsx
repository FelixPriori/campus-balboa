import { unstable_setRequestLocale } from 'next-intl/server'
import Favicon from '@/app/mtl-bal-jam-favicon.ico'
import BigOG from '@/app/mtl-bal-jam-og-512.png'
import Main from '@/layout/main'
import { Bar, Shirt, Tour, Youlia } from './sections'

type Props = {
	params: { locale: string }
}

export async function generateMetadata({ params }: Props) {
	unstable_setRequestLocale(params.locale)
	const siteUrl = 'https://www.campusbalboa.org'

	if (params.locale === 'fr') {
		return {
			title: 'Extra | MTL BAL JAM 2024',
			description:
				"Les extras du MTL BAL JAM, l'évenement de balboa à Montréal le 21-22-23 juin 2024",
			alternates: {
				canonical: `${siteUrl}/fr/evenements/2024/mtl-bal-jam/extra`,
			},
			icons: [{ rel: 'icon', url: Favicon.src }],
			openGraph: {
				images: [
					{
						url: BigOG.src,
						alt: 'MTL BAL JAM 2024 logo',
						width: 512,
						height: 512,
					},
				],
				title: 'Extra | MTL BAL JAM 2024',
				locale: 'fr',
				description:
					"Les extras du MTL BAL JAM, l'évenement de balboa à Montréal le 21-22-23 juin 2024",
			},
		}
	} else {
		return {
			title: 'Extra | MTL BAL JAM 2024',
			description:
				'Extras of the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
			alternates: {
				canonical: `${siteUrl}/en/events/2024/mtl-bal-jam/extra`,
			},
			icons: [{ rel: 'icon', url: Favicon.src }],
			openGraph: {
				images: [
					{
						url: BigOG.src,
						alt: 'MTL BAL JAM 2024 logo',
						width: 512,
						height: 512,
					},
				],
				title: 'Extra | MTL BAL JAM 2024',
				locale: 'en',
				description:
					'Extras of  the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
			},
		}
	}
}

export default function MbjExtra() {
	return (
		<Main styles={{ borderRadius: '0.625rem' }}>
			<Youlia />
			<Tour />
			<Shirt />
			<Bar />
		</Main>
	)
}
