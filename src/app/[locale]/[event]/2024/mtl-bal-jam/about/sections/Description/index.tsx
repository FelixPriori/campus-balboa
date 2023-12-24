"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

export default function Staff() {
    const t = useTranslations('Events.2024.MtlBalJam.aboutPage.descriptionSection')
    return (
        <section className={styles.descriptionSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <p>{t.rich('description', { br: (chunks) => <br /> })}</p>
            </div>
        </section>
    )
}