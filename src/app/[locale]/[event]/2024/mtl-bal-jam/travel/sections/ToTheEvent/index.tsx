"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

const keys = ['casa', "cenne", 'jarry'] as string[]

export default function ToMontreal() {
    const t = useTranslations('Events.2024.MtlBalJam.travelPage.toTheEvent')
    return (
        <section className={styles.toTheEventSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                {
                    keys.map((key) => (
                        <div key={key} className={styles.mode}>
                            <h3 className={styles.modeTitle}>{t(`${key}.title`)}</h3>
                            <p className={styles.modeAddress}>{t(`${key}.address`)}</p>
                            <p className={styles.intersection}>{t(`${key}.intersection`)}</p>
                            <p className={styles.metro}>{t('metroPrefix')}{t(`${key}.metro`)}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}