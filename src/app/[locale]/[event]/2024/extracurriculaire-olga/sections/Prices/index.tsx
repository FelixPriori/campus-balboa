"use client"
import { useTranslations } from "next-intl"
import styles from './styles.module.scss'

const pricing = ['tier1', 'tier2', 'door']

const includes = ['workshops', 'dance']

export default function Prices() {
    const t = useTranslations('Events.2024.Olga.pricesSection')
    return (
        <section className={styles.prices}>
            <div className={styles.content}>
                <h2>{t('sectionTitle')}</h2>
                <div className={styles.card}>
                    <div className={`${styles.cardSection} ${styles.opens}`}>
                        <h3>{t('date.title')}</h3>
                        <p className={styles.date}>{t('date.date')}</p>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('prices.title')}</h3>
                        <ul className={styles.list}>
                            {pricing.map(p => (
                                <li key={p} className={`${styles.item} ${styles.priceContainer}`}>
                                    <span>
                                        {t(`prices.${p}.date`)}
                                    </span>
                                    <span className={styles.price}>
                                        {t(`prices.${p}.price`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('includes.title')}</h3>
                        <ul className={styles.list}>
                            {includes.map(i => (
                                <li key={i} className={`${styles.item} ${styles.includes}`}>
                                    {t(`includes.${i}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}