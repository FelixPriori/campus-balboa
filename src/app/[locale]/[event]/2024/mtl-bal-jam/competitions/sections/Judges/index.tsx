"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'
import LinesCircle from '@/assets/svgs/lines-circle'

const keys = [
    'yuliasasha'
] as const

interface JudgeProps {
    name: string;
    image: {
        src: string;
        alt: string;
    }
}

function Judge({ name, image }: JudgeProps) {
    return (
        <div className={styles.judge}>
            <div className={styles.linesCircle}>
                <LinesCircle />
            </div>

            <div className={styles.imgWrapper}>
                <Image src={image.src} alt={image.alt} width={150} height={150} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{name}</h3>
            </div>
        </div>
    )
}

export default function Judges() {
    const t = useTranslations('Events.2024.MtlBalJam.competitionsPage.judgesSection')

    return (
        <section className={styles.judgesSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                {keys.map((key) => (
                    <Judge
                        key={key}
                        name={t(`judges.${key}.name`)}
                        image={{
                            src: t(`judges.${key}.image.src`),
                            alt: t(`judges.${key}.image.alt`)
                        }}
                    />
                ))}
            </div>
        </section>
    )
}