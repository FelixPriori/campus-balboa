"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';

export default function LandAknowledgement() {
    const t = useTranslations('LandAknowledgement');
    return (
        <div className={styles.landAcknowledgement}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                <p>{t('text', { name: "Campus Balboa" })}</p>
            </div>
        </div>
    );
}
