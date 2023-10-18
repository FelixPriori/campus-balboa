"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Image from 'next/image'
import MailchimpForm from '../../components/MailchimpForm'

export default function Venue() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <section className={styles.venueSection}>
            <div className={styles.subscribeWrapper}>
                <div className={styles.subscribeContent}>
                    <h2>{t('subscribe.title')}</h2>
                    <MailchimpForm />
                </div>
            </div>
            <div className={styles.archWrapper}>
                <div className={styles.arch}>
                    <Image src="/salmon-arch.png" alt={t('archAlt')} width={100} height={150} />
                </div>
            </div>
        </section>
    )
}