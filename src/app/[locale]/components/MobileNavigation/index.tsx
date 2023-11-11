"use client"
import { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import useCustomSwitcher from '@/hooks/useCustomSwitcher'

type NavigationItemProps = {
    href: string;
    text: string;
}

function NavigationItem({href, text}: NavigationItemProps) {
    return (
        <li>
            <Link className={styles.link} href={href}>{text}</Link>
        </li>
    )
}

type MobileNavigationProps = {
    pages: string[];
    base: string;
    switcherOptions?: any
}

export default function MobileNavigation({pages, base, switcherOptions}: MobileNavigationProps) {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations()
    const customOptions = useCustomSwitcher({...switcherOptions})

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <div className={`${styles.buttonContainer} ${isOpen ? styles.active : ''}`} onClick={toggle}>
                <span className={styles.top}></span>
                <span className={styles.middle}></span>
                <span className={styles.bottom}></span>
            </div>
            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
                <nav className={styles.overlayMenu}>
                    <ul>
                        {pages.map((page) => <NavigationItem key={page} text={t(`${base}.${page}.text`)} href={t(`${base}.${page}.href`)} />)}
                        <li className={styles.languageSwitcher}><LanguageSwitcher customOptions={customOptions} customStyling={switcherOptions?.styling} /></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}