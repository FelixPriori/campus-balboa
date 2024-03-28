"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

export default function LandAknowledgementSection() {
    const t = useTranslations('LandAknowledgement')
    return (
        <section id="land-acknowledgement" className={styles.landAcknowledgement}>
            <h2>{t('title')}</h2>
            <div className={styles.card}>
                <p>{t('text', { name: "Campus Balboa" })}</p>
            </div>
        </section>
    );
}

