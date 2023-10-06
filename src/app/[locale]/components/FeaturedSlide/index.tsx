import Image from 'next/image';
import styles from './styles.module.scss';

export interface IFeaturedSlide {
    title: string;
    details: string;
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

export default function FeaturedSlide({image, title, link, details, type}: IFeaturedSlide) {
    return (
        <a target='_blank' rel="noreferrer"  href={link.href} className={styles.featuredSlide}>
            <p className={styles.srOnly}>{link.text}</p>
            <div className={styles.content}>
                <div className={styles.bannerWrapper}>
                    <Image className={styles.banner} src={image.src} alt={image.alt} width={120} height={120} />
                </div>
                <div className={styles.copy}>
                    <h3 className={styles.title}>{title}</h3>
                    <h4 className={styles.subtitle}>{type}</h4>
                    <p className={styles.details}>{details}</p>
                </div>
            </div>
        </a>
    )
}