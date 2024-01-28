"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'


export default function Band() {
    const t = useTranslations('Events.2024.MtlBalJam.comingSoon')
    return (
        <section className={styles.comingSoon}>
            <h2>{t('title')}</h2>
        </section>
    )
}