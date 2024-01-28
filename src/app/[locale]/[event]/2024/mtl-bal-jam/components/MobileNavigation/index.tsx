"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import useCustomSwitcher from '@/hooks/useCustomSwitcher'
import { checkIsCurrent } from '@/app/util/navigationUtils'
import NavTab from '../NavTab'
import NavLink from '../NavLink'
import styles from './styles.module.scss'

type MobileNavigationProps = {
    switcherOptions?: any;
    pageTabs: any;
    current: string;
}

export default function MobileNavigation({ current, switcherOptions, pageTabs }: MobileNavigationProps) {
    const [toggledTab, setToggledTab] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('Events.2024.MtlBalJam.navigation')
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
                    <h2 className={styles.title}>{t('title')}</h2>

                    <ul className={styles.navTabs}>
                        {Object.keys(pageTabs).map((tab: string) => {
                            const isTabOpen = tab === toggledTab
                            return (
                                <NavTab
                                    key={tab}
                                    tab={tab}
                                    isOpen={true}
                                    setToggledTab={setToggledTab}
                                    isMobile
                                >
                                    {pageTabs[tab].map((page: any) => (
                                        <NavLink
                                            key={page}
                                            hidden={!isTabOpen}
                                            isCurrent={checkIsCurrent(page, current)}
                                            mobileToggle={toggle}
                                            href={t(`${tab}.subtabs.${page}.href`)}
                                            text={t(`${tab}.subtabs.${page}.text`)}
                                        />
                                    ))}
                                </NavTab>
                            )
                        })}
                        <li className={styles.languageSwitcher}>
                            <LanguageSwitcher customOptions={customOptions} customStyling={switcherOptions?.styling} />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}