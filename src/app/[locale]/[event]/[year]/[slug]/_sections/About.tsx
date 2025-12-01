import styles from './styles.module.scss'
import { Markdown } from '@/app/_lib/markdown'

interface AboutProps {
	closed: string
	details: {
		json: any
		links: any
	}
	sectionTitle: string
}

export default function About({ details, closed, sectionTitle }: AboutProps) {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<Markdown content={details} />
					</div>
					<div className={`${styles.cardSection} ${styles.closed}`}>
						<p>{closed}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
