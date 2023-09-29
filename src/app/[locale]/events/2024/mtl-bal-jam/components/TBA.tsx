"use client"
import { useTranslations } from "next-intl";
import styles from './TBA.module.scss'

export default function TBA() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <div className={styles.tba}>
            <h1>{t('title')}</h1>
            <h2>{t('TBA')}</h2>
            <h2>{t('saveTheDate')}</h2>
            <h3>{t('date')}</h3>
        </div>
    )
}