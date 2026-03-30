'use client'

import styles from './styles.module.scss'
import { Markdown, type RichTextContent } from '@/app/_lib/markdown'
import ContentfulImage from '@/app/_lib/contentful-image'
import { trackEvent } from '@/app/_lib/analytics'

export interface FeaturedSlideProps {
  title: string
  details: RichTextContent | null
  type: string
  image: {
    url: string
    title: string
  }
  link: {
    href: string
    text: string
  }
}

export default function FeaturedSlide({ image, title, link, details, type }: FeaturedSlideProps) {
  return (
    <a target="_blank" rel="noreferrer" href={link.href} className={styles.featuredSlide} onClick={() => trackEvent('featured_slide_click', { title })}>
      <p className="sr-only">{link.text}</p>
      <div className={styles.content}>
        <div className={styles.bannerWrapper}>
          <ContentfulImage
            className={styles.banner}
            src={image.url}
            alt={image.title}
            width={1080}
            height={1080}
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className={styles.copy}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{type}</h4>
          <Markdown content={details} disableLinks />
        </div>
      </div>
    </a>
  )
}
