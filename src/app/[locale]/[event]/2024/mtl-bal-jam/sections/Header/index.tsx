"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Header() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <header className={styles.headerSection}>
            <div className={styles.logoWrapper}>
                <Image src="/mtl-bal-jam-logo-black.png" alt={t('logoAlt')} width={100} height={100} />
            </div>
            <div className={styles.text}>
                <h1>{t('title')}</h1>
                <h2>{t('date')}</h2>
            </div>
        </header>
    )
}