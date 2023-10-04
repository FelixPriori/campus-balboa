"use client"
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/languageSwitcher/languageSwitcher';
import styles from './styles.module.scss';

export default function Hero() {
    const t = useTranslations('Home');

    return (
        <header className={styles.heroWrapper}>
            <div className={styles.content}>
                <div className={styles.languageSwitcher}>
                    <LanguageSwitcher />
                </div>
                <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
                <p className={styles.heroDescription}>
                    {t.rich('hero.description', {
                        important: (chunks) => <span className={styles.important}>{chunks}</span>
                    })}
                </p>
            </div>
        </header>
    );
}
