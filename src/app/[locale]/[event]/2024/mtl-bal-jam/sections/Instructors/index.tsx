"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import LinesCircle from '@/assets/svgs/lines-circle'
import HalfCircle from '@/assets/svgs/half-circle'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: ['700'],
    style: ['normal'],
  })
  

export default function Instructors() {
    const t = useTranslations('Events.2024.MtlBalJam')
    return (
        <section className={styles.instructorsSection}>
            <div className={styles.halfCircle}>
                <HalfCircle />
            </div>
            <div className={styles.text}>
                <h2>{t('saveTheDate')}</h2>
                <a className={`${styles.googleLink} ${roboto.className}`} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M2JjYzJhODlhMmk0MDVuM2c4MHFjZTdrMG0gaW5mb0BjYW1wdXNiYWxib2Eub3Jn&amp;tmsrc=info%40campusbalboa.org">
                    <Image src="/google-calendar.png" width={32} height={32} alt="google calendar logo" />
                    {t('googleCal')}
                </a>
            </div>
            <div className={styles.linesCircle}>
                <LinesCircle />
            </div>
        </section>
    )
}