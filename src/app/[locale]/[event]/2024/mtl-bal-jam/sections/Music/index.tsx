"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Image from 'next/image'
import IconBox from '../../components/IconBox'
import Link from 'next/link'

export default function MusicSection() {
    const t = useTranslations('Events.2024.MtlBalJam')

    const keys = [
        'facebook',
        'instagram',
        'email',
    ] as const

    return (
        <section className={styles.bandSection}>
            <div className={styles.bandName}>
                <div className={styles.bandImageWrapper}>
                    <Image src="/legacy-band.png" alt="Legacy Band logo" height={100} width={100} />
                </div>
                <div className={styles.text}>
                    <h2>{t('homePage.musicSection.title')}</h2>
                    <h3>{t('homePage.musicSection.bandName')}</h3>
                    <p>{t('homePage.musicSection.description')}</p>
                    <Link href={t('homePage.musicSection.learnMore.href')}>{t('homePage.musicSection.learnMore.text')}</Link>
                </div>
            </div>

            <div className={styles.socialsWrapper}>
                <IconBox 
                    src='/mbj-toaster-black.png' 
                    alt={t('iconAlts.toaster')}
                    width={50} 
                    height={50}
                    position='topRight'
                />
                <ul className={styles.socials}>
                    {keys.map(key => 
                        <li key={key}>
                            <a href={t(`socials.${key}.href`)} target='_blank' rel="noreferrer">
                                <span className={styles.srOnly}>{t(`socials.${key}.alt`)}</span>
                                <Image src={t(`socials.${key}.logo`)} alt={t(`socials.${key}.alt`)} width={50} height={50} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}