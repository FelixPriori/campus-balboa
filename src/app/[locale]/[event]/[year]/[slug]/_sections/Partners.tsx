import styles from './styles.module.scss'
import { Partner } from '@/app/_types/events'
import { PartnersBlock } from '../_components/PartnersBlock'

interface PartnersProps {
	partnersData: Partner[]
	sectionTitle: string
}

export default function Partners({
	partnersData,
	sectionTitle,
}: PartnersProps) {
	return (
		<section className={styles.partnersSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<ul className={styles.partners}>
							{partnersData.map(partner => (
								<PartnersBlock key={partner.sys.id} {...partner} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
