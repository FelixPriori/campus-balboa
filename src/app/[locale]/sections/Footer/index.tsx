"use client"
import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import DonateButton from '@/components/paypal/DonateButton';

export default function Footer() {
    const t = useTranslations('Home');

    return (
        <footer className={styles.footerSection}>
            <div className={styles.content}>
                <div>
                    <p className={styles.copy}>
                        <span>{t('footerSection.contact')}</span><a href="mailto:info@campusbalboa.org">info@campusbalboa.org</a>
                    </p>
                    <p className={styles.copy}>{t('footerSection.copy')}</p>
                </div>
                <div className={styles.donateWrapper}>
                    <DonateButton />
                </div>
            </div>
        </footer>
    );
}

