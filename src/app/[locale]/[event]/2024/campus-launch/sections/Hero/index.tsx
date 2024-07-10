'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'

export default function Hero() {
	const t = useTranslations('Events.2024.Launch.header')
	// const tclosed = useTranslations('Events.2024.Launch')
	return (
		<header className={styles.hero}>
			<div className={styles.card}>
				<div className={styles.imgWrapper}>
					<Image
						src="/launch-party.png"
						width={200}
						height={200}
						alt="Launch party img"
					/>
				</div>
				<div className={styles.content}>
					<p className={styles.date}>{t('date')}</p>
					<h1>
						{t.rich('title', { bold: chunk => <strong>{chunk}</strong> })}
					</h1>
					<p className={styles.comingSoon}>{t('comingSoon')}</p>
					{/* <p>{tclosed('closed')}</p> */}
				</div>
			</div>
		</header>
	)
}
