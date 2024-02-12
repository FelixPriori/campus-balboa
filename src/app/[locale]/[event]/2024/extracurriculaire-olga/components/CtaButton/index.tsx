"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import ExternalLink from '@/assets/svgs/external-link'

export default function CtaButton() {
    const t = useTranslations('Events.2024.Olga.header.cta')

    return (
        <a
            className={styles.ctaButton}
            href={t('href')}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t('ariaLabel')}
        >
            {t('text')}
            <ExternalLink />
        </a>
    )
}