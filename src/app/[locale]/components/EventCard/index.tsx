import styles from './styles.module.scss'
import Link from 'next/link';
import ArrowRight from '@/assets/svgs/arrow-right';
import LinesCircle from '@/assets/svgs/lines-circle';
import { Caveat_Brush } from 'next/font/google';
import ContentfulImage from '@/lib/contentful-image';


const caveatBrush = Caveat_Brush({ 
    subsets: ['latin'], 
    weight: ['400'],
    style: ['normal'],
    variable: '--font-caveat-brush',
})

interface EventCard {
    dark: boolean;
    title: string;
    tagline: string;
    image: {
        title: string;
        url: string;
    }
    link: {
        href: string;
        text: string;
    }
}

export default function EventCard({image, title, link, tagline, dark}: EventCard) {
    return (
        <Link href={link.href} className={`${styles.cardWrapper} ${dark ? styles.dark : ''} ${dark ? caveatBrush.className : ''}`}>
            <p className="sr-only">{link.text}</p>
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
            <div className={styles.arrow}>
                {!dark ? <ArrowRight /> : <LinesCircle />}
            </div>
        </Link>
    )
}