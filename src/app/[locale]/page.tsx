import Main from '@/app/_layout/main'
import { getPageBySlug, getPageMetaDataByPageSlug } from '@/app/_lib/api'
import { PAGE_FIELDS_QUERY } from '@/app/_lib/queries'
import { buildPageMetaData } from '@/app/_assets/data/buildPageMetaData'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import { Locale, SITE_URL } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'
import sectionsRenderer, { Hero } from '../_sections'
import { notFound } from 'next/navigation'

type Props = {
	params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const locale = (await params).locale as Locale
	const metaData = await getPageMetaDataByPageSlug(locale, locale)

	if (metaData) {
		return {
			title: metaData.title,
			description: metaData.description,
			alternates: {
				canonical: `${SITE_URL}/${locale}`,
				languages: {
					fr: `${SITE_URL}/fr`,
					en: `${SITE_URL}/en`,
					'x-default': `${SITE_URL}/fr`,
				},
			},
			openGraph: {
				images: [
					{
						url: metaData.openGraphImage.image.url,
						alt: metaData.openGraphImage.image.alt,
					},
				],
				title: metaData.title,
				url: `${SITE_URL}/${locale}`,
				locale,
				description: metaData.openGraphImage.description,
			},
			icons: [{ rel: 'icon', url: metaData.favicon.url }],
		}
	}

	return buildPageMetaData({ locale })
}

export default async function Home({ params }: Props) {
	const locale = (await params).locale as Locale
	const [pageData, dict] = await Promise.all([
		getPageBySlug(locale, locale, PAGE_FIELDS_QUERY),
		getDictionary(locale),
	])

	if (!pageData?.sectionsCollection) {
		return notFound()
	}

	return (
		<div className="landing">
			<nav className="app-nav" aria-label={dict.Navigation.mainAriaLabel}>
				<CampusLogo />
				<LanguageSwitcher locale={locale} />
			</nav>
			<Hero {...pageData?.hero} />
			<Main>
				{pageData?.sectionsCollection?.items.map(
					async (s: any) => await sectionsRenderer(s, locale),
				)}
			</Main>
			</div>
	)
}
