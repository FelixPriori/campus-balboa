import Image from 'next/image';
import styles from './styles.module.scss'
import Link from 'next/link';
import ArrowRight from '@/assets/svgs/arrow-right';

interface EventCard {
    title: string;
    details: string;
    image: {
        src: string;
        alt: string;
    }
    link: {
        href: string;
        text: string;
    }
}

export default function EventCard({image, title, link, details}: EventCard) {
    return (
        <Link href={link.href} className={styles.cardWrapper}>
            <p className={styles.srOnly}>{link.text}</p>
            <Image
                className={styles.image}
                src={image.src}
                alt={image.alt}
                width={96}
                height={96}
            />
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.paragraph}>{details}</p>
            </div>
            <div className={styles.arrow}>
                <ArrowRight />
            </div>
        </Link>
    )
}