"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'


export default function Music() {
    const t = useTranslations('Events.2024.MtlBalJam.competitionsPage.musicSection')
    return (
        <section className={styles.musicSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <p>{t('description')}</p>
            </div>
        </section>
    )
}