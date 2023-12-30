"use client"
import { useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import LogoLink from '../../components/LogoLink'
import SaveToGoogleCalendar from '../../components/SaveToGoogleCalendar'
import { getPageNameFromSlug } from '@/app/util/navigationUtils'
import styles from './styles.module.scss'

export default function Header() {
    const t = useTranslations('Events.2024.MtlBalJam.header')
    const pathname = usePathname();
    const pageName = getPageNameFromSlug(pathname);

    const renderText = useCallback(() => {
        if (pageName) {
            return (
                <>
                    <h2>{t(`pageTitle.${pageName}`)}</h2>
                    <h3>{t('date')}</h3>
                </>
            )
        }
        return (
            <h2>{t('date')}</h2>
        )
    }, [pageName, t])

    return (
        <header className={styles.headerSection}>
            <LogoLink />
            <div className={styles.text}>
                <div className={styles.registration}>
                    <p>
                        {t('registration.text')} {t('registration.date')}
                    </p>
                </div>
                <h1>{t('title')}</h1>
                {renderText()}
                <SaveToGoogleCalendar />
            </div>
        </header>
    )
}