"use client"
import { useLocale, useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import EventCard from '../../components/EventCard'

export default function Events() {
    const t = useTranslations('Home');
    const locale = useLocale()

    return (
        <section className={styles.eventsSection}>
            <div className={styles.content}>     
                <h2 className={styles.eventsTitle}>{t('eventsSection.title')}</h2>
                <EventCard 
                    title={t('eventsSection.mtlBalJam.title')} 
                    details={t('eventsSection.mtlBalJam.details')} 
                    image={{
                        src: '/mbj-toast-logo-192.png',
                        alt: t('eventsSection.mtlBalJam.logoAlt')
                    }} 
                    link={{
                        href: locale === 'fr' ? 'fr/evenements/2024/mtl-bal-jam' : 'en/events/2024/mtl-bal-jam',
                        text: t('eventsSection.mtlBalJam.linkText')
                    }} 
                />
            </div>
        </section>
    );
}

