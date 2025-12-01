import { Markdown } from '@/app/_lib/markdown'
import styles from './styles.module.scss'

interface LevelRequirementProps {
	levelRequirement: {
		title: string
		skills: string[]
		description: {
			json: any
			links: any
		}
	}
	sectionTitle: string
}

export default function LevelRequirement({
	levelRequirement,
	sectionTitle,
}: LevelRequirementProps) {
	return (
		<section className={styles.levelSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<div className={styles.level}>
							<Markdown content={levelRequirement.description} />
							<ul className={styles.levelList}>
								{levelRequirement.skills.map(skill => (
									<ol key={skill}>{skill}</ol>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
