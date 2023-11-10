import { useTranslations } from "next-intl";
import NavLink from "../NavLink";
import styles from './styles.module.scss'
import Image from "next/image";

const keys = [
    'home',
    'music',
    'venue',
] as const

export default function NavLinks() {
    const t = useTranslations('Events.2024.MtlBalJam.navigation')

    return (
        <div className={styles.navLinksWrapper}>
            <div className={styles.toasterWrapper}>
                <Image src='/mbj-toaster-black.png' alt='Toaster' width={50} height={50}/>
                <h2 className={styles.title}>{t('title')}</h2>
            </div>
            <ul className={styles.navLinks}>
                {keys.map(key => <NavLink key={key} href={t(`${key}.href`)} text={t(`${key}.text`)} />)}
            </ul>
        </div>
    )
}