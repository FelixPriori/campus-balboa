'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getClientDictionary } from '@/app/_lib/clientDictionary'
import type { Locale } from '@/i18n'
import styles from './error.module.scss'

interface Props {
	error: Error & { digest?: string }
	reset: () => void
}

export default function EventError({ error, reset }: Props) {
	const locale = (useParams<{ locale: Locale }>()?.locale) ?? 'en'
	const t = getClientDictionary(locale).EventError

	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className={styles.page}>
			<h1 className={styles.heading}>{t.title}</h1>
			<p className={styles.message}>{t.message}</p>
			<div className={styles.actions}>
				<button className={styles.button} onClick={reset}>
					{t.tryAgain}
				</button>
				<Link href="/" className={styles.link}>
					{t.returnHome}
				</Link>
			</div>
		</main>
	)
}
