import useEmblaCarousel from 'embla-carousel-react'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ArrowLeft from '@/app/_assets/svgs/arrow-left'
import ArrowRight from '@/app/_assets/svgs/arrow-right'
import { DictionaryType } from '@/app/dictionaries'

export default function EmblaContainer({
	slidesNumber,
	embla,
	children,
}: {
	slidesNumber: number
	embla: DictionaryType['Components']['embla']
	children: ReactNode
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) emblaApi.scrollTo(index)
		},
		[emblaApi],
	)

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>{children}</div>
			</div>

			<div className={styles.dotContainer}>
				{Array.from({ length: slidesNumber }, (x, i) => i).map(
					(key: any, i: number) => (
						<button
							className={`${styles.dot} ${inView === i ? styles.selected : ''}`}
							onClick={() => scrollTo(i)}
							key={key}
						>
							<span className="sr-only">
								{embla.changeSlide.replace('{{slideNum}}', String(i + 1))}
							</span>
						</button>
					),
				)}
			</div>

			<button
				className={styles.emblaPrev}
				onClick={scrollPrev}
				aria-label={embla.prevSlide}
			>
				<ArrowLeft />
			</button>
			<button
				className={styles.emblaNext}
				onClick={scrollNext}
				aria-label={embla.nextSlide}
			>
				<ArrowRight />
			</button>
		</div>
	)
}
