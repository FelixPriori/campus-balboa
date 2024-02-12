"use client"
import { useTranslations } from "next-intl"
import Image from 'next/image'
import styles from './styles.module.scss'
import CtaButton from "../../components/CtaButton"

export default function Hero() {
    const t = useTranslations('Events.2024.Olga.header')
    return (
        <header className={styles.hero}>
            <div className={styles.imgWrapper}>
                <Image src="/olga.jpg" width={200} height={200} alt="Olga" />
            </div>
            <div className={styles.content}>
                <p className={styles.date}>{t('date')}</p>
                <h1>{t('title')}</h1>
                <p className={styles.comingSoon}>{t('comingSoon')}</p>
                <CtaButton />
            </div>
        </header>
    )
}