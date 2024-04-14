"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'


export default function MixAndMatch() {
    const t = useTranslations('Events.2024.MtlBalJam.competitionsPage.slowBalSection')
    return (
        <section className={styles.mixAndMatchSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <p>{t.rich('description', { br: () => <br /> })}</p>
            </div>
        </section>
    )
}