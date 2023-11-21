import styles from './styles.module.scss';
import { Markdown } from '@/lib/markdown';
import ContentfulImage from '@/lib/contentful-image';

export interface FeaturedSlideProps {
    title: string;
    details: {
        json: any;
        links: any;
    }
    type: string;
    image: {
        src: string;
        alt: string;
    }
    link: {
        href: string;
        text: string;
    }
}

export default function FeaturedSlide({image, title, link, details, type}: FeaturedSlideProps) {
    return (
        <a target='_blank' rel="noreferrer"  href={link.href} className={styles.featuredSlide}>
            <p className="sr-only">{link.text}</p>
            <div className={styles.content}>
                <div className={styles.bannerWrapper}>
                    <ContentfulImage className={styles.banner} src={image.src} alt={image.alt} width={120} height={120} />
                </div>
                <div className={styles.copy}>
                    <h3 className={styles.title}>{title}</h3>
                    <h4 className={styles.subtitle}>{type}</h4>
                    <Markdown content={details} />
                </div>
            </div>
        </a>
    )
}