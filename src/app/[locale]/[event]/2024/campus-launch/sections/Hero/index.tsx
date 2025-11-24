import Image from 'next/image'
import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'
import { DictionaryType } from '@/app/dictionaries'

export default function Hero({
	headerSection,
}: {
	headerSection: DictionaryType['Events']['2024']['Launch']['header']
}) {
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
					<p className={styles.date}>{headerSection.date}</p>
					<h1>{headerSection.title}</h1>
					<p className={styles.comingSoon}>{headerSection.comingSoon}</p>
					<CtaButton
						href={headerSection.cta.href}
						ariaLabel={headerSection.cta.ariaLabel}
						text={headerSection.cta.text}
					/>
				</div>
			</div>
		</header>
	)
}
