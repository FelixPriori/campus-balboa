"use client"
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

export default function ToBeAnnouncedSection() {
    const t = useTranslations('Home');
    return (
        <section className={styles.toBeAnnouncedSection}>
            <div className={styles.content}>
                <h2 className={styles.title}>{t('toBeAnnouncedSection.title')}</h2>
            </div>
        </section>
    );
}

