'use client'

import { useParams } from 'next/navigation'
import { getClientDictionary } from '@/app/_lib/clientDictionary'
import type { Locales } from '@/i18n'
import styles from './loading.module.scss'

export default function EventLoading() {
	const locale = (useParams<{ locale: Locales }>()?.locale) ?? 'en'
	const t = getClientDictionary(locale).EventLoading

	return (
		<div
			className={styles.page}
			aria-busy="true"
			aria-label={t.ariaLabel}
		>
			<div className={styles.nav} aria-hidden="true" />
			<div className={styles.hero} aria-hidden="true">
				<div className={styles.pulse} />
			</div>
		</div>
	)
}
