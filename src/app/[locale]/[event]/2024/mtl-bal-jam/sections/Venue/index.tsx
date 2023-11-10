"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Image from 'next/image'
import MailchimpForm from '../../components/MailchimpForm'
import IconBox from '../../components/IconBox'
import Link from 'next/link'

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
                    <Image src="/salmon-arch.png" alt={t('iconAlts.arch')} width={100} height={150} />
                </div>

                <div className={styles.text}>
                    <h2>{t('homePage.venueSection.title')}</h2>
                    <Link href={t('homePage.venueSection.learnMore.href')}>{t('homePage.venueSection.learnMore.text')}</Link>
                </div>

                <IconBox 
                    src='/mbj-loaf-white.png' 
                    alt={t('iconAlts.loaf')}
                    width={50} 
                    height={50}
                    position='topLeft'
                />
            </div>
        </section>
    )
}
