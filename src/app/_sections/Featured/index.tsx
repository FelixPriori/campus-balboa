import { getCollectionBySectionId } from '@/app/_lib/api'
import { PageSectionProps } from '..'
import { FEATURED_SLIDE } from './query'
import EmblaContainer from '../../_components/EmblaContainer'
import FeaturedSlides from '../../_components/FeaturedSlides'
import { DictionaryType } from '@/app/dictionaries'
import { Suspense } from 'react'
import styles from './styles.module.scss'
import Fallback from './Fallback'

interface FeaturedProps extends PageSectionProps {
	embla: DictionaryType['Components']['embla']
}

export default async function Featured({
	id,
	title,
	anchor,
	locale,
	embla,
}: FeaturedProps) {
	const featuredContent = await getCollectionBySectionId(
		id,
		locale,
		FEATURED_SLIDE,
	)

	return (
		<section id={anchor} className={styles.featuredSection}>
			<div className={styles.content}>
				<h2 className={styles.featuredTitle}>{title}</h2>
				<Suspense fallback={<Fallback />}>
					<EmblaContainer embla={embla} slidesNumber={featuredContent.length}>
						<FeaturedSlides featuredContent={featuredContent} />
					</EmblaContainer>
				</Suspense>
			</div>
		</section>
	)
}
