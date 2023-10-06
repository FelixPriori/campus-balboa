"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import FeaturedSlide from '../../components/FeaturedSlide'
import { useCallback } from 'react'
import ArrowLeft from '@/assets/svgs/arrow-left'
import ArrowRight from '@/assets/svgs/arrow-right'

export default function Featured() {
    const t = useTranslations('Home')
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

    const keys = [
        'aperos',
        'the',
        'lapin',
    ] as const

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return (
        <section className={styles.featuredSection}>
            <div className={styles.content}>
                <h2 className={styles.featuredTitle}>{t('featuredSection.title')}</h2>

                <div className={styles.embla} >
                    <div className={styles.emblaViewport} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {keys.map(key => 
                                <FeaturedSlide
                                    key={key}
                                    title={t(`featuredSection.featured.${key}.title`)}
                                    type={t(`featuredSection.featured.${key}.type`)}
                                    details={t(`featuredSection.featured.${key}.details`)}
                                    image={{
                                        src: t(`featuredSection.featured.${key}.image.src`),
                                        alt: t(`featuredSection.featured.${key}.image.alt`)
                                    }}
                                    link={{
                                        href: t(`featuredSection.featured.${key}.link.href`),
                                        text: t(`featuredSection.featured.${key}.link.text`)
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <button className={styles.emblaPrev} onClick={scrollPrev}>
                        <ArrowLeft />
                    </button>
                    <button className={styles.emblaNext} onClick={scrollNext}>
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}