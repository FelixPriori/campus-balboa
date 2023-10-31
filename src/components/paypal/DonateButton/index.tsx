"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function DonateButton() {
    const t = useTranslations('Components.paypal')
    return (
        <a 
            className={styles.donateButton} 
            href="https://www.paypal.com/donate/?hosted_button_id=SL926PKCWSHV8"
            rel='noreferrer'
            target='_blank'
        >
            <Image 
                src="/paypal-monogram-full-color.png"
                width={18}
                height={18}
                alt={t('logoAlt')}
            />
            {t('donate')}
        </a>
    )
}