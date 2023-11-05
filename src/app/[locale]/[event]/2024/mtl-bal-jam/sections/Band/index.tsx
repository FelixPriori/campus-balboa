"use client"
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import Image from 'next/image'
import IconBox from '../../components/IconBox'

export default function Band() {
    const t = useTranslations('Events.2024.MtlBalJam')

    const keys = [
        'facebook',
        'email',
    ] as const

    return (
        <section className={styles.bandSection}>
            <div className={styles.bandName}>
                <div className={styles.text}>
                    <h2>{t('TBA')}</h2>
                </div>
            </div>
            <IconBox 
                src='/mbj-toaster-black.png' 
                alt={t('iconAlts.toaster')}
                width={50} 
                height={50}
                position='topRight'
            />
            <div className={styles.socialsWrapper}>
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