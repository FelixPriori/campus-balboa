import styles from './styles.module.scss'
import { DictionaryType } from '@/app/dictionaries'

const pricing = ['tier1', 'tier2', 'door'] as const

const includes = ['workshops', 'dance'] as const

const atTheDoor = ['full', 'day', 'class', 'extra'] as const

export default function Prices({
	pricesSection,
	closed,
}: {
	pricesSection: DictionaryType['Events']['2024']['Olga']['pricesSection']
	closed: DictionaryType['Events']['2024']['Olga']['closed']
}) {
	return (
		<section className={styles.prices}>
			<div className={styles.content}>
				<h2>{pricesSection.sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<h3>{pricesSection.prices.title}</h3>
						<p className={styles.subtitle}>{pricesSection.prices.subtitle}</p>
						<ul className={styles.list}>
							{pricing.map(p => (
								<li key={p} className={styles.priceContainer}>
									<p className={`${styles.item} ${styles[p]}`}>
										<span className={styles.itemTitle}>
											{pricesSection.prices[p].date}
										</span>
										<span className={styles.price}>
											{pricesSection.prices[p].price}
										</span>
									</p>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.cardSection}>
						<h3>{pricesSection.includes.title}</h3>
						<p className={styles.subtitle}>{pricesSection.includes.subtitle}</p>
						<ul className={styles.list}>
							{includes.map(i => (
								<li
									key={i}
									className={`${styles.priceContainer} ${styles.includes}`}
								>
									<p className={styles.item}>{pricesSection.includes[i]}</p>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.cardSection}>
						<h3>{pricesSection.atTheDoor.title}</h3>
						<p className={styles.subtitle}>
							{pricesSection.atTheDoor.subtitle}
						</p>
						<ul className={styles.list}>
							{atTheDoor.map(p => (
								<li key={p} className={styles.priceContainer}>
									<p className={`${styles.item}  ${styles[p]}`}>
										<span className={styles.itemTitle}>
											{pricesSection.atTheDoor[p].title}
										</span>
										<span className={styles.price}>
											{pricesSection.atTheDoor[p].price}
										</span>
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.cta}>
					<p>{closed}</p>
				</div>
			</div>
		</section>
	)
}
