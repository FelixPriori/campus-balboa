"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LogoLink() {
    const [href, setHref] = useState<string | null>(null)
    const t = useTranslations('Events.2024.MtlBalJam');
    const locale = useLocale()


    useEffect(() => {
        switch(locale) {
            case 'fr':
                setHref('/fr/evenements/2024/mtl-bal-jam')
                break;
            case 'en':
                setHref('/en/evenements/2024/mtl-bal-jam')
                break;
        }
    }, [locale])

    return href && (
        <Link className={styles.logoWrapper} href={href}>
            <Image src="/mtl-bal-jam-logo-black.png" alt={t('logoAlt')} width={100} height={100} />
        </Link>
    )
}