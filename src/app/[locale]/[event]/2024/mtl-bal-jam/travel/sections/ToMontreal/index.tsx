"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

const keys = ['plane', "train", 'bus'] as string[]

export default function ToMontreal() {
    const t = useTranslations('Events.2024.MtlBalJam.travelPage.toMontreal')
    return (
        <section className={styles.toMontrealSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                {
                    keys.map((key) => (
                        <div key={key} className={styles.mode}>
                            <h3 className={styles.modeTitle}>{t(`${key}.title`)}</h3>
                            <p className={styles.modePlace}>{t(`${key}.place`)}</p>
                            <p className={styles.modeAddress}>{t(`${key}.address`)}</p>
                            {
                                key === 'plane' && (
                                    <p>
                                        {
                                            t.rich(`${key}.details`, {
                                                br: () => <br />
                                            })
                                        }
                                    </p>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}