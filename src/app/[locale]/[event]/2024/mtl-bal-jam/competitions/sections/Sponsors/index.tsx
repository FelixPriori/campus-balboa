"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'
import LinesCircle from '@/assets/svgs/lines-circle'

const keys = [
    'toronto',
    'balMoment',
    'ebf'
] as const

interface SponsorProps {
    name: string;
    image: {
        src: string;
        alt: string;
    }
    link: string;
}

function Sponsor({ name, image, link }: SponsorProps) {
    return (
        <a target='_blank' rel='noreferrer' href={link} className={styles.sponsor}>
            <div className={styles.linesCircle}>
                <LinesCircle />
            </div>

            <div className={styles.imgWrapper}>
                <Image src={image.src} alt={image.alt} width={150} height={150} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
            </div>
        </a>
    )
}

export default function Sponsors() {
    const t = useTranslations('Events.2024.MtlBalJam.competitionsPage.sponsorsSection')

    return (
        <section className={styles.sponsorsSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                {keys.map((key) => (
                    <Sponsor
                        key={key}
                        name={t(`sponsors.${key}.name`)}
                        link={t(`sponsors.${key}.link`)}
                        image={{ alt: t(`sponsors.${key}.image.alt`), src: t(`sponsors.${key}.image.src`) }}
                    />
                ))}
            </div>
            <div className={styles.notes}>
                <p>{t('notes.text')} <a href={t('notes.link.link')}>{t('notes.link.text')}</a></p>
            </div>
        </section>
    )
}