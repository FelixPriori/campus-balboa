"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import useCustomSwitcher from '@/hooks/useCustomSwitcher'
import { checkIsCurrent } from '@/app/util/navigationUtils'
import styles from './styles.module.scss'

type NavigationItemProps = {
    href: string;
    text: string;
    isCurrent: boolean;
}

function NavigationItem({ href, text, isCurrent }: NavigationItemProps) {
    return (
        <li>
            <Link className={`${styles.link} ${isCurrent ? styles.current : ''}`} href={href}>{text}</Link>
        </li>
    )
}

type MobileNavigationProps = {
    pages: string[];
    base: string;
    switcherOptions?: any
}

export default function MobileNavigation({ pages, base, switcherOptions }: MobileNavigationProps) {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations()
    const customOptions = useCustomSwitcher({ ...switcherOptions })
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
                        {pages.map((page) => <NavigationItem key={page} isCurrent={checkIsCurrent(page, switcherOptions.slug)} text={t(`${base}.${page}.text`)} href={t(`${base}.${page}.href`)} />)}
                        <li className={styles.languageSwitcher}>
                            <LanguageSwitcher customOptions={customOptions} customStyling={switcherOptions?.styling} />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}