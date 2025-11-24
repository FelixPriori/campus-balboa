import Image from 'next/image'
import styles from './styles.module.scss'
import { DictionaryType } from '@/app/dictionaries'

export default function Hero({
	headerSection,
	closed,
}: {
	headerSection: DictionaryType['Events']['2024']['Olga']['header']
	closed: DictionaryType['Events']['2024']['Olga']['closed']
}) {
	return (
		<header className={styles.hero}>
			<div className={styles.card}>
				<div className={styles.imgWrapper}>
					<Image src="/olga.jpg" width={200} height={200} alt="Olga" />
				</div>
				<div className={styles.content}>
					<p className={styles.date}>{headerSection.date}</p>
					<h1>{headerSection.title}</h1>
					<p className={styles.comingSoon}>{headerSection.comingSoon}</p>
					<p>{closed}</p>
				</div>
			</div>
		</header>
	)
}
