import styles from './styles.module.scss'
import { InstructorData } from '@/app/_types/events'
import { PersonBlock } from '../_components/PersonBlock'

interface InstructorsProps {
	instructorsData: InstructorData[]
	sectionTitle: string
}

export default function Instructors({
	instructorsData,
	sectionTitle,
}: InstructorsProps) {
	return (
		<section className={styles.instructorsSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						{instructorsData.map(instructor => (
							<PersonBlock
								key={instructor.sys.id}
								{...instructor}
								variant="instructor"
								nameAbove
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
