"use client"
import { useTranslations } from "next-intl"
import styles from './styles.module.scss'
import CtaButton from "../../components/CtaButton"

const pricing = ['tier1', 'tier2', 'door']

const includes = ['workshops', 'dance']

const atTheDoor = ['full', 'day', 'class', 'extra'];

export default function Prices() {
    const t = useTranslations('Events.2024.Olga.pricesSection')
    const tclosed = useTranslations('Events.2024.Olga')
    return (
        <section className={styles.prices}>
            <div className={styles.content}>
                <h2>{t('sectionTitle')}</h2>
                <div className={styles.card}>
                    <div className={styles.cardSection}>
                        <h3>{t('prices.title')}</h3>
                        <p className={styles.subtitle}>{t('prices.subtitle')}</p>
                        <ul className={styles.list}>
                            {pricing.map(p => (
                                <li key={p} className={styles.priceContainer}>
                                    <p className={`${styles.item}  ${styles[p]}`}>
                                        <span className={styles.itemTitle}>
                                            {t(`prices.${p}.date`)}
                                        </span>
                                        <span className={styles.price}>
                                            {t(`prices.${p}.price`)}
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('includes.title')}</h3>
                        <p className={styles.subtitle}>{t('includes.subtitle')}</p>
                        <ul className={styles.list}>
                            {includes.map(i => (
                                <li key={i} className={`${styles.priceContainer} ${styles.includes}`}>
                                    <p className={styles.item}>
                                        {t(`includes.${i}`)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cardSection}>
                        <h3>{t('atTheDoor.title')}</h3>
                        <p className={styles.subtitle}>{t('atTheDoor.subtitle')}</p>
                        <ul className={styles.list}>
                            {atTheDoor.map(p => (
                                <li key={p} className={styles.priceContainer}>
                                    <p className={`${styles.item}  ${styles[p]}`}>
                                        <span className={styles.itemTitle}>
                                            {t(`atTheDoor.${p}.title`)}
                                        </span>
                                        <span className={styles.price}>
                                            {t(`atTheDoor.${p}.price`)}
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className={styles.cta}>
                    <p>
                        {tclosed('closed')}
                    </p>
                </div>
            </div>
        </section>
    )
}