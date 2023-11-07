"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'
import LinesCircle from '@/assets/svgs/lines-circle'

const keys = [
    'felix',
    'gab'
] as const

interface DJProps {
    name: string;
    djName: string;
    pronouns: string;
    biography: string;
    image: {
        src: string;
        alt: string;
    }
}

function DJ({name, djName, pronouns, biography, image}: DJProps) {
    return (
        <div className={styles.dj}>
            <div className={styles.linesCircle}>
                <LinesCircle />
            </div>

            <div className={styles.imgWrapper}>
                <Image src={image.src} alt={image.alt} width={150} height={150} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.djName}>{djName}</p>
                <p className={styles.pronouns}>{pronouns}</p>
                <p className={styles.biography}>{biography}</p>
            </div>
        </div>
    )
}

export default function DJs() {
    const t = useTranslations('Events.2024.MtlBalJam.musicPage.djMusic')

    return (
        <section className={styles.djSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                {keys.map((key) => (
                    <DJ 
                        key={key} 
                        name={t(`djs.${key}.name`)} 
                        djName={t(`djs.${key}.djName`)} 
                        pronouns={t(`djs.${key}.pronouns`)} 
                        biography={t(`djs.${key}.biography`)} 
                        image={{
                            src: t(`djs.${key}.image.src`),
                            alt: t(`djs.${key}.image.alt`)
                        }}
                    />
                ))}
            </div>
        </section>
    )
}