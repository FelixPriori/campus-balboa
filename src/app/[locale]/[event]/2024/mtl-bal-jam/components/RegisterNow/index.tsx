"use client"
import { Roboto } from 'next/font/google'
import styles from './styles.module.scss'
import Image from "next/image"
import { useTranslations } from 'next-intl'

export default function RegisterNow() {
    const t = useTranslations('Events.2024.MtlBalJam.header')
    return (
        <a className={styles.registerNow} target="_blank" href="https://mtl-bal-jam-2024.dancecamps.org/booking.php">
            {t('registerNow')}
        </a>
    )
}