"use client"
import { useTranslations } from "next-intl"
import styles from './styles.module.scss'
import IconBox from "../../components/IconBox"

export default function Footer() {
    const t = useTranslations('Events.2024.MtlBalJam')

    return (
        <footer className={styles.footer}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <p>{t('copyright')}</p>
            </div>
            <IconBox 
                src='/mbj-knife-white.png' 
                alt={t('iconAlts.knife')}
                width={50} 
                height={50}
                position='centerLeft'
            />
        </footer>
    )
}