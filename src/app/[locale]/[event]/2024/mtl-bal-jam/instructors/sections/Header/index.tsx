"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import LogoLink from '../../../components/LogoLink';

export default function Header() {
    const t = useTranslations('Events.2024.MtlBalJam.instructorsPage');

    return (
        <header className={styles.headerSection}>
            <LogoLink />
            <div className={styles.text}>
                <h1>{t('title')}</h1>
                <h2>{t('pageTitle')}</h2>
            </div>
        </header>
    )
}