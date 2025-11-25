import styles from './styles.module.scss'
import MissionsCard from '../../../_components/MissionCard'
import { PageSectionProps } from '..'
import { MISSION } from './query'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { Suspense } from 'react'
import Fallback from './Fallback'

type Mission = {
	sys: {
		id: string
	}
	title: string
	content: {
		json: any
		links: any
	}
}

export default async function MissionsSection({
	id,
	title,
	anchor,
	locale,
}: PageSectionProps) {
	const missions = await getCollectionBySectionId(id, locale, MISSION)

	return (
		<section id={anchor} className={styles.missionsSection}>
			<div className={styles.content}>
				<h2 className={styles.missionsTitle}>{title}</h2>
				<div className={styles.missionsContainer}>
					<Suspense fallback={<Fallback />}>
						{missions.length &&
							missions.map((mission: Mission) => (
								<MissionsCard
									key={mission.sys.id}
									title={mission.title}
									content={mission.content}
								/>
							))}
					</Suspense>
				</div>
			</div>
		</section>
	)
}
