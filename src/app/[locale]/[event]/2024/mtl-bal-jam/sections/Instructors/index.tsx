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
    const t = useTranslations('Events.2024.MtlBalJam.homePage')
    return (
        <section className={styles.instructorsSection}>
            <div className={styles.halfCircle}>
                <HalfCircle />
            </div>
            <div className={styles.text}>
                <h2>{t('saveTheDate')}</h2>
                <a className={`${styles.googleLink} ${roboto.className}`} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NHB2dmE2NWZpMGVicHQybnFmNzYxbGU3Y3QgY181NWIzOTE2YTcxNWIyYzg1MTBmYzY5MmQ1M2M1NWMzZDc4OWNjNDIzNDA5MzIxZGEyNjJmM2I5MzZmNzQyOGZkQGc&amp;tmsrc=c_55b3916a715b2c8510fc692d53c55c3d789cc423409321da262f3b936f7428fd%40group.calendar.google.com">
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