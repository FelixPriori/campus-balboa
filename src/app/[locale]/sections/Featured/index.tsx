"use client"
import styles from './styles.module.scss'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { getCollectionBySectionId } from '@/lib/api'
import { PageSectionProps } from '..'
import { FEATURED_SLIDE } from './query'
import { InfinitySpin } from 'react-loader-spinner'
import EmblaContainer from '../../components/EmblaContainer'
import FeaturedSlides from '../../components/FeaturedSlides'

export default function Featured({id, title, anchor}: PageSectionProps) {
    const locale = useLocale()
    const [featuredContent, setFeaturedContent] = useState([])

    useEffect(() => {
        const getFeaturedCollection = async () => {
            const featuredCollection = await getCollectionBySectionId(id, locale, FEATURED_SLIDE);
            setFeaturedContent(featuredCollection)
        }

        getFeaturedCollection()
    }, [id, locale])

    return (
        <section id={anchor} className={styles.featuredSection}>
            <div className={styles.content}>
                <h2 className={styles.featuredTitle}>{title}</h2>

                {featuredContent.length 
                ?   <EmblaContainer slidesNumber={featuredContent.length}>
                        <FeaturedSlides featuredContent={featuredContent} />
                    </EmblaContainer> 
                :   <InfinitySpin width="200" color="var(--color-primary)" />}
            </div>
        </section>
    )
}