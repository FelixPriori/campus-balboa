"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'
import { Fragment } from 'react'

const keys = [
    'kindness',
    'safety',
    'grow'
] as const

export default function Values() {
    const t = useTranslations('Events.2024.MtlBalJam.codePage.valuesSection')
    return (
        <section className={styles.valuesSection}>
            <h2>{t('title')}</h2>
            <div className={styles.content}>
                {keys.map((key) => (
                    <Fragment key={key}>
                        <h3 className={styles.djName}>{t(`values.${key}.title`)}</h3>
                        <p>{t.rich(`values.${key}.content`, { br: (chunks) => <br /> })}</p>
                    </Fragment>
                ))}
            </div>
        </section>
    )
}