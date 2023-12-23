import { useTranslations } from "next-intl";
import Image from "next/image";
import { checkIsCurrent } from "@/app/util/navigationUtils";
import NavLink from "../NavLink";
import styles from './styles.module.scss'


export default function NavLinks({ pages, current }: { pages: string[], current: string }) {
    const t = useTranslations('Events.2024.MtlBalJam.navigation')

    return (
        <div className={styles.navLinksWrapper}>
            <div className={styles.toasterWrapper}>
                <Image src='/mbj-toaster-black.png' alt='Toaster' width={50} height={50} />
                <h2 className={styles.title}>{t('title')}</h2>
            </div>
            <ul className={styles.navLinks}>
                {pages.map(page => <NavLink key={page} isCurrent={checkIsCurrent(page, current)} href={t(`${page}.href`)} text={t(`${page}.text`)} />)}
            </ul>
        </div>
    )
}