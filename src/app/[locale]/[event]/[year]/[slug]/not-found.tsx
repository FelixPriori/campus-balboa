'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getClientDictionary } from '@/app/_lib/clientDictionary'
import type { Locale } from '@/i18n'
import styles from './error.module.scss'

export default function EventNotFound() {
  const locale = useParams<{ locale: Locale }>()?.locale ?? 'en'
  const t = getClientDictionary(locale).EventNotFound

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>{t.title}</h1>
      <p className={styles.message}>{t.message}</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.link}>
          {t.returnHome}
        </Link>
      </div>
    </main>
  )
}
