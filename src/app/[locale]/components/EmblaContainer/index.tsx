import useEmblaCarousel from "embla-carousel-react"
import { useTranslations } from "next-intl"
import { ReactNode, useCallback, useEffect, useState } from "react"
import styles from './styles.module.scss'
import ArrowLeft from "@/assets/svgs/arrow-left"
import ArrowRight from "@/assets/svgs/arrow-right"

export default function EmblaContainer({slidesNumber, children}: {slidesNumber: number, children: ReactNode}) {
    const t = useTranslations('Components.embla')

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
    const [inView, setInView] = useState(0)

    const onSlidesInView = useCallback((api: any) => {
        setInView(api.slidesInView()[0])
    }, [])
    

    useEffect(() => {
        if (emblaApi) emblaApi.on('slidesInView', onSlidesInView)
    }, [emblaApi, onSlidesInView])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    return (
        <div className={styles.embla} >
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {children}
                </div>
            </div>

            <div className={styles.dotContainer}>
                {Array.from({ length: slidesNumber}, (x, i) => i).map((key: any, i: number) =>
                    <button 
                        className={`${styles.dot} ${inView === i ? styles.selected : ''}`}
                        onClick={() => scrollTo(i)}
                        key={key}
                    >
                        <span className="sr-only">{t(`changeSlide`, {slideNum: i + 1})}</span>
                    </button>
                )}
            </div>

            <button className={styles.emblaPrev} onClick={scrollPrev} aria-label={t('prevSlide')}>
                <ArrowLeft />
            </button>
            <button className={styles.emblaNext} onClick={scrollNext} aria-label={t('nextSlide')}>
                <ArrowRight />
            </button>
        </div>
    )
}