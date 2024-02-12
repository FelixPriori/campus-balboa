"use client"
import { useTranslations } from "next-intl"
import styles from './styles.module.scss'

export default function Footer() {
    const t = useTranslations('Events.2024.Olga')
    return (
        <footer className={styles.footer}>
            <p>{t('copyright')}</p>
        </footer>
    )
}