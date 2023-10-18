"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import LinesCircle from '@/assets/svgs/lines-circle'
import HalfCircle from '@/assets/svgs/half-circle'

export default function Instructors() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <section className={styles.instructorsSection}>
            <div className={styles.halfCircle}>
                <HalfCircle />
            </div>
            <div className={styles.text}>
                <h2>{t('saveTheDate')}</h2>
            </div>
            <div className={styles.linesCircle}>
                <LinesCircle />
            </div>
        </section>
    )
}