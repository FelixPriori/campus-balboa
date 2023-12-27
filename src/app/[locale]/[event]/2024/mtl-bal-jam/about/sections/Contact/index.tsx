"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Socials from '../../../components/Socials'
import ContactForm from '../../../components/ContactForm'

export default function ContactSection() {
    const t = useTranslations('Events.2024.MtlBalJam.aboutPage.contactSection')

    return (
        <section className={styles.contactSection}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.content}>
                <ContactForm />
            </div>
            <Socials position='topRight' />
            <div className={styles.separator}></div>
        </section>
    )
}