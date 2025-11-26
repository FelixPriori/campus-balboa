import Main from '@/app/_layout/main'
import { getPageBySlug, getPageMetaDataByPageSlug } from '@/app/_lib/api'
import { PAGE_FIELDS_QUERY } from '@/app/_lib/queries'
import { buildPageMetaData } from '@/app/_assets/data/buildPageMetaData'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import { Locales } from '@/i18n'
import sectionsRenderer, { Hero, Footer } from '../_sections'
import { notFound } from 'next/navigation'

type Props = {
	params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const locale = (await params).locale as Locales
	const metaData = await getPageMetaDataByPageSlug(locale, locale)
	const siteUrl = 'https://www.campusbalboa.org'

	if (metaData) {
		return {
			title: metaData.title,
			description: metaData.description,
			alternates: {
				canonical: `${siteUrl}/${locale}`,
			},
			openGraph: {
				images: [
					{
						url: metaData.openGraphImage.image.url,
						alt: metaData.openGraphImage.image.alt,
					},
				],
				title: metaData.title,
				url: `${siteUrl}/${locale}`,
				locale,
				description: metaData.openGraphImage.description,
			},
			icons: [{ rel: 'icon', url: metaData.favicon.url }],
		}
	}

	return buildPageMetaData({ locale })
}

export default async function Home({ params }: Props) {
	const locale = (await params).locale as Locales
	const pageData = await getPageBySlug(locale, locale, PAGE_FIELDS_QUERY)

	if (!pageData?.sectionsCollection) {
		return notFound()
	}

	return (
		<div className="landing">
			<nav className="app-nav">
				<CampusLogo />
				<LanguageSwitcher locale={locale} />
			</nav>
			<Hero {...pageData?.hero} />
			<Main>
				{pageData?.sectionsCollection?.items.map(
					async (s: any) => await sectionsRenderer(s, locale),
				)}
			</Main>
			<Footer {...pageData?.footer} />
		</div>
	)
}
