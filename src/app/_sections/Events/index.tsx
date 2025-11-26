import EventCard from '../../_components/EventCard'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { EVENT } from './query'
import type { CampusEvent } from '@/app/_types/event'
import { Suspense } from 'react'
import Fallback from './Fallback'
import styles from './styles.module.scss'
import { PageSectionProps } from '@/app/_types/sections'

export default async function Events({
	id,
	title,
	anchor,
	helpText,
	locale,
}: PageSectionProps) {
	const eventsCollection = await getCollectionBySectionId(id, locale, EVENT)
	const events = eventsCollection.sort((a: CampusEvent, b: CampusEvent) => {
		if (new Date(a.startDate) < new Date(b.startDate)) {
			return 1
		} else {
			return -1
		}
	})

	return (
		<section id={anchor} className={styles.eventsSection}>
			<div className={styles.content}>
				<h2 className={styles.eventsTitle}>{title}</h2>
				<div className={styles.eventsList}>
					<Suspense fallback={<Fallback />}>
						{events.length &&
							events.map((e: any) => (
								<EventCard
									key={e.sys.id}
									dark={e.dark}
									title={e.title}
									tagline={e.tagline}
									image={e.image}
									link={e.link}
									helpText={helpText}
								/>
							))}
					</Suspense>
				</div>
			</div>
		</section>
	)
}
