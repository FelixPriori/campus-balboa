"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import DonateButton from '@/components/paypal/DonateButton';

export default function Footer() {
    const t = useTranslations('Home');

    return (
        <footer className={styles.footerSection}>
            <div className={styles.content}>
                <p className={styles.copy}>{t('footerSection.copy')}</p>
                <div className={styles.donateWrapper}>
                    <DonateButton />
                </div>
            </div>
        </footer>
    );
}

