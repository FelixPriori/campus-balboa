import { Locales } from '@/i18n'
import {
	getEventMetaDataBySlug,
	getEventPageBySlug,
	getEventSocialMedia,
} from '@/app/_lib/api'
import sectionsRenderer from '../../[year]/[slug]/_sections'
import styles from './styles.module.scss'
import Hero from './_sections/Hero'
import About from './_sections/About'
import LevelRequirement from './_sections/LevelRequirement'
import Footer from './_sections/Footer'
import Navigation from './Navigation'
import { notFound } from 'next/navigation'
import { isPast } from 'date-fns'

type Props = {
	params: Promise<{
		locale: Locales
		event: string
		year: string
		slug: string
	}>
}

export async function generateMetadata({ params }: Props) {
	const { locale, event, year, slug } = await params
	const pageMetaData = await getEventMetaDataBySlug(`/${year}/${slug}`, locale)
	const canonical = `https://www.campusbalboa.org/${locale}/${event}/${year}/${slug}`

	return {
		title: pageMetaData.title,
		description: pageMetaData.description,
		alternates: {
			canonical,
		},
		locale,
		openGraph: {
			title: pageMetaData.title,
			description: pageMetaData.description,
			images: [
				{
					url: pageMetaData.openGraphImage.image.url,
					alt: pageMetaData.title,
					width: 1920,
					height: 1005,
				},
			],
		},
	}
}

export default async function Olga({ params }: Props) {
	const { locale, year, slug } = await params
	const data = await getEventPageBySlug(`/${year}/${slug}`, locale)
	if (!data) {
		notFound()
	}
	const socialMedia = await getEventSocialMedia(data.sys.id, locale)
	const sections = [
		'instructors',
		'pricing',
		'dJs',
		'venues',
		'schedule',
		'partners',
	] as const
	const isClosed = isPast(data.endDate)
	return (
		<div className={styles.eventPage}>
			<Navigation locale={locale} />
			<Hero
				imgAlt={data.image.title}
				imgSrc={data.image.url}
				startDate={data.startDate}
				endDate={data.endDate}
				title={data.title}
				closed={data.closedText}
				locale={locale}
				isClosed={isClosed}
				socialMedia={socialMedia}
				registrationLink={data.registrationLink ?? null}
			/>
			<About
				details={data.details}
				sectionTitle={data.aboutTitle}
				closed={data.closedText}
				isClosed={isClosed}
			/>
			<LevelRequirement
				levelRequirement={data.levelRequirement}
				sectionTitle={data.levelRequirementTitle}
			/>
			{sections.map(section =>
				sectionsRenderer(section, data.sys.id, locale, {
					isClosed,
					registrationLink: data.registrationLink ?? null,
				}),
			)}
			<Footer copyright={data.copyright} />
		</div>
	)
}
