"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'


export default function Tour() {
    const t = useTranslations('Events.2024.MtlBalJam.extrasPage.tour')
    return (
        <section className={styles.bandSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image src="/mbj-guided-tour.png" width={250} height={250} alt={t('imageAlt')} />
                </div>
                <div className={styles.text}>
                    <p>{t('price')}</p>
                    <p>{t('when')}</p>
                    <p>{t('length')}</p>
                    <p>{t('description')}</p>
                </div>
            </div>
        </section>
    )
}