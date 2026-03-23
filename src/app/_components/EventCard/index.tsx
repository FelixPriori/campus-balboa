import styles from './styles.module.scss'
import Link from 'next/link'
import ArrowRight from '@/app/_assets/svgs/arrow-right'
import LinesCircle from '@/app/_assets/svgs/lines-circle'
import { Caveat_Brush } from 'next/font/google'
import ContentfulImage from '@/app/_lib/contentful-image'

const caveatBrush = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-caveat-brush',
})

interface EventCard {
  dark: boolean
  title: string
  tagline: string
  helpText?: string
  href: string
  image: {
    title: string
    url: string
  }
}

export default function EventCard({ image, title, href, tagline, dark, helpText }: EventCard) {
  return (
    <Link
      href={href}
      className={`${styles.cardWrapper} ${dark ? styles.dark : ''} ${
        dark ? caveatBrush.className : ''
      }`}
    >
      <ContentfulImage
        className={styles.image}
        src={image.url}
        alt={image.title}
        width={96}
        height={96}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.paragraph}>{tagline}</p>
      </div>
      <div className={styles.arrow}>{!dark ? <ArrowRight /> : <LinesCircle />}</div>
      <p className={styles.helpText}>{helpText}</p>
    </Link>
  )
}
