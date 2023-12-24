"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import FeatureCard from '../../../components/FeatureCard'

const keys = [
    'bree',
    'cara',
    'felix',
    'gab',
    'katya',
    'kim',
    'melanie',
    'sara',
    'sihem',
    'sophie',
    'tania',
    'zack'
] as const

export default function StaffSection() {
    const t = useTranslations('Events.2024.MtlBalJam.aboutPage.staffSection')

    return (
        <section className={styles.staffSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                {keys.map((key) => (
                    <FeatureCard
                        key={key}
                        name={t(`staff.${key}.name`)}
                        image={{
                            src: t(`staff.${key}.image.src`),
                            alt: t(`staff.${key}.image.alt`)
                        }}
                    >
                        <p className={styles.pronouns}>{t(`staff.${key}.pronouns`)}</p>
                    </FeatureCard>
                ))}
            </div>
        </section>
    )
}