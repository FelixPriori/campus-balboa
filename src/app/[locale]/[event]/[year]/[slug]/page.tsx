import { Suspense } from 'react'
import { Locales, EVENT_SEGMENTS, SITE_URL } from '@/i18n'
import { getEventMetaDataBySlug, getEventPageBySlug } from '@/app/_lib/api'
import { getDictionary } from '@/app/dictionaries'
import {
	InstructorsSection,
	PricingSection,
	VenuesSection,
	ScheduleSection,
	DJsSection,
	PartnersSection,
} from './_sections'
import SectionSkeleton from './_sections/SectionSkeleton'
import { SectionErrorBoundary } from './_components/SectionErrorBoundary'
import styles from './styles.module.scss'
import Hero from './_sections/Hero'
import About from './_sections/About'
import LevelRequirement from './_sections/LevelRequirement'
import Footer from './_sections/Footer'
import Navigation from './Navigation'
import { notFound } from 'next/navigation'
import { isPast } from 'date-fns'

export const revalidate = 3600

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

	if (!pageMetaData) return {}

	const canonical = `${SITE_URL}/${locale}/${event}/${year}/${slug}`

	return {
		title: pageMetaData.title,
		description: pageMetaData.description,
		alternates: {
			canonical,
			languages: {
				fr: `${SITE_URL}/fr/${EVENT_SEGMENTS.fr}/${year}/${slug}`,
				en: `${SITE_URL}/en/${EVENT_SEGMENTS.en}/${year}/${slug}`,
			},
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
	const [data, dict] = await Promise.all([
		getEventPageBySlug(`/${year}/${slug}`, locale),
		getDictionary(locale),
	])

	if (!data) {
		notFound()
	}

	const isClosed = isPast(data.endDate)
	const eventId = data.sys.id
	const socialMedia = data.socialMediaCollection?.items ?? []
	const registrationLink = data.registrationLink ?? null

	const sectionBoundaryProps = {
		errorMessage: dict.SectionErrorBoundary.message,
		retryLabel: dict.SectionErrorBoundary.retry,
	} as const

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
				registrationLink={registrationLink}
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
			<SectionErrorBoundary label={dict.SectionSkeleton.instructors} {...sectionBoundaryProps}>
				<Suspense
					fallback={
						<SectionSkeleton
							label={`${dict.SectionSkeleton.instructors}, ${dict.SectionSkeleton.loading}`}
							minHeight={480}
							animationDelay="0s"
						/>
					}
				>
					<InstructorsSection eventId={eventId} locale={locale} />
				</Suspense>
			</SectionErrorBoundary>
			<SectionErrorBoundary label={dict.SectionSkeleton.pricing} {...sectionBoundaryProps}>
				<Suspense
					fallback={
						<SectionSkeleton
							label={`${dict.SectionSkeleton.pricing}, ${dict.SectionSkeleton.loading}`}
							minHeight={280}
							animationDelay="0.15s"
						/>
					}
				>
					<PricingSection
						eventId={eventId}
						locale={locale}
						isClosed={isClosed}
						registrationLink={registrationLink}
					/>
				</Suspense>
			</SectionErrorBoundary>
			<SectionErrorBoundary label={dict.SectionSkeleton.venues} {...sectionBoundaryProps}>
				<Suspense
					fallback={
						<SectionSkeleton
							label={`${dict.SectionSkeleton.venues}, ${dict.SectionSkeleton.loading}`}
							minHeight={220}
							animationDelay="0.3s"
						/>
					}
				>
					<VenuesSection eventId={eventId} locale={locale} />
				</Suspense>
			</SectionErrorBoundary>
			<SectionErrorBoundary label={dict.SectionSkeleton.schedule} {...sectionBoundaryProps}>
				<Suspense
					fallback={
						<SectionSkeleton
							label={`${dict.SectionSkeleton.schedule}, ${dict.SectionSkeleton.loading}`}
							minHeight={360}
							animationDelay="0.45s"
						/>
					}
				>
					<ScheduleSection eventId={eventId} locale={locale} />
				</Suspense>
			</SectionErrorBoundary>
			<SectionErrorBoundary label="DJs" silent>
				<Suspense fallback={null}>
					<DJsSection eventId={eventId} locale={locale} />
				</Suspense>
			</SectionErrorBoundary>
			<SectionErrorBoundary label="Partners" silent>
				<Suspense fallback={null}>
					<PartnersSection eventId={eventId} locale={locale} />
				</Suspense>
			</SectionErrorBoundary>
			<Footer copyright={data.copyright} />
		</div>
	)
}
