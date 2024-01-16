"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import FeatureCard from '../../../components/FeatureCard'

const keys = [
    'reception',
    'maintenance',
    'food',
    'errands',
    'safety',
] as const

function Department({ title, description }: { title: string, description: string }) {
    return (
        <div className={styles.department}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default function Volunteering() {
    const t = useTranslations('Events.2024.MtlBalJam.registrationPage.volunteering')

    return (
        <section className={styles.volunteeringSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                <p>{t('description')}</p>
                {keys.map((key) => <Department key={key} title={t(`departments.${key}.title`)} description={t(`departments.${key}.description`)} />)}
            </div>
        </section>
    )
}