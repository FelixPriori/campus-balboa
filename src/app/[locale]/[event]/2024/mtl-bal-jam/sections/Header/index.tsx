"use client"
import { useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import LogoLink from '../../components/LogoLink'
import { getPageNameFromSlug } from '@/app/util/navigationUtils'
import styles from './styles.module.scss'
import RegisterNow from '../../components/RegisterNow'

export default function Header() {
    const t = useTranslations('Events.2024.MtlBalJam.header')
    const pathname = usePathname();
    const pageName = getPageNameFromSlug(pathname);

    const renderText = useCallback(() => {
        if (pageName) {
            return (
                <>
                    <h1>{t(`pageTitle.${pageName}`)}</h1>
                    <p className={styles.date}>{t('date')}</p>
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
                <p className={styles.eventTitle}>{t('title')}</p>
                {renderText()}
                <RegisterNow />
            </div>
        </header>
    )
}