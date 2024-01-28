import { useTranslations } from "next-intl";
import { checkIsCurrent } from "@/app/util/navigationUtils";
import NavLink from "../NavLink";
import styles from './styles.module.scss'
import { useState } from "react";
import NavTab from "../NavTab";

export default function NavLinks({ current, pageTabs }: { current: string, pageTabs: any }) {
    const t = useTranslations('Events.2024.MtlBalJam.navigation')
    const [toggledTab, setToggledTab] = useState<string | null>(null)

    return (
        <div className={styles.navLinksWrapper}>
            <div className={styles.toasterWrapper}>
                <h2 className={styles.title}>{t('title')}</h2>
            </div>
            <ul className={styles.navLinks}>
                {Object.keys(pageTabs).map((tab: string) => {
                    const isOpen = tab === toggledTab
                    return (
                        <NavTab
                            key={tab}
                            tab={tab}
                            isOpen={isOpen}
                            setToggledTab={setToggledTab}
                        >
                            {pageTabs[tab].map((page: any) => (
                                <NavLink
                                    key={page}
                                    hidden={!isOpen}
                                    isCurrent={checkIsCurrent(page, current)}
                                    href={t(`${tab}.subtabs.${page}.href`)}
                                    text={t(`${tab}.subtabs.${page}.text`)}
                                />
                            ))}
                        </NavTab>
                    )
                })}
            </ul>
        </div>
    )
}