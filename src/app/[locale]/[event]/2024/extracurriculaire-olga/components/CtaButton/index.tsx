"use client"
import styles from './styles.module.scss'
import ExternalLink from '@/assets/svgs/external-link'

type CtaBtton = {
    href: string,
    ariaLabel: string,
    text: string,
}

export default function CtaButton({ href, ariaLabel, text }: CtaBtton) {
    return (
        <a
            className={styles.ctaButton}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={ariaLabel}
        >
            {text}
            <ExternalLink />
        </a>
    )
}