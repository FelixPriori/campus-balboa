"use client"
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';


export default function LandingHero() {
    const t = useTranslations('Home');

    return (
        <>
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <p className={styles.heroDescription}>
                {t.rich('hero.description', {
                    important: (chunks) => <span className={styles.important}>{chunks}</span>
                })}
            </p>
        </>
    );
}
