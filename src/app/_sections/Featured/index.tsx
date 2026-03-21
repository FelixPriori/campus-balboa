import { getCollectionBySectionId } from '@/app/_lib/api'
import { FEATURED_SLIDE } from './query'
import EmblaContainer from '../../_components/EmblaContainer'
import FeaturedSlides from '../../_components/FeaturedSlides'
import { Suspense } from 'react'
import styles from './styles.module.scss'
import Fallback from './Fallback'
import { EmblaText } from '@/app/_types/components'
import { PageSectionProps } from '@/app/_types/sections'

interface FeaturedProps extends PageSectionProps {
  embla: EmblaText
}

export default async function Featured({ id, title, anchor, locale, embla }: FeaturedProps) {
  const featuredContent = await getCollectionBySectionId(id, locale, FEATURED_SLIDE)

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
