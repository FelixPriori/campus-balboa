'use client'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { PageSectionProps } from '..'
import { FEATURED_SLIDE } from './query'
import { InfinitySpin } from 'react-loader-spinner'
import EmblaContainer from '../../components/EmblaContainer'
import FeaturedSlides from '../../components/FeaturedSlides'
import { DictionaryType } from '@/app/dictionaries'

interface FeaturedProps extends PageSectionProps {
	embla: DictionaryType['Components']['embla']
}

export default function Featured({
	id,
	title,
	anchor,
	locale,
	embla,
}: FeaturedProps) {
	const [featuredContent, setFeaturedContent] = useState([])

	useEffect(() => {
		const getFeaturedCollection = async () => {
			const featuredCollection = await getCollectionBySectionId(
				id,
				locale,
				FEATURED_SLIDE,
			)
			setFeaturedContent(featuredCollection)
		}

		getFeaturedCollection()
	}, [id, locale])

	return (
		<section id={anchor} className={styles.featuredSection}>
			<div className={styles.content}>
				<h2 className={styles.featuredTitle}>{title}</h2>

				{featuredContent.length ? (
					<EmblaContainer embla={embla} slidesNumber={featuredContent.length}>
						<FeaturedSlides featuredContent={featuredContent} />
					</EmblaContainer>
				) : (
					<InfinitySpin width="200" color="var(--color-primary)" />
				)}
			</div>
		</section>
	)
}
