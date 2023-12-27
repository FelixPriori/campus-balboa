"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Staff() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <section className={styles.descriptionSection}>
            <h2>{t('aboutPage.descriptionSection.title')}</h2>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image src="/mtl-bal-jam-logo-white.png" height={150} width={150} alt={t('iconAlts.mbjLogo')} />
                </div>
                <p>{t.rich('aboutPage.descriptionSection.description', { br: (chunks) => <br /> })}</p>
            </div>
        </section>
    )
}