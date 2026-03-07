import styles from './styles.module.scss'
import { Locale } from '@/i18n'
import { formatDate } from '@/app/_util/dateUtils'
import { getDictionary } from '@/app/dictionaries'
import { EventBlock } from '@/app/_types/events'
import { groupByDay } from '@/app/_util/scheduleUtils'
import { ClassBlock } from '../_components/ClassBlock'

interface ScheduleProps {
	scheduleData: EventBlock[]
	locale: Locale
	sectionTitle: string
}

export default async function Schedule({
	scheduleData,
	locale,
	sectionTitle,
}: ScheduleProps) {
	const { Schedule: dict } = await getDictionary(locale as 'en' | 'fr')
	const days = groupByDay(scheduleData)
	return (
		<section className={styles.scheduleSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						{[...days.entries()].map(([day, blocks]) => (
							<div key={day} className={styles.dayGroup}>
								<h3>{formatDate(day, locale)}</h3>
								<ul className={styles.classSchedule}>
									{blocks.map(block => (
										<ClassBlock
											key={block.sys.id}
											locale={locale}
											blockTypeLabels={dict.blockTypes}
											endsAtLabel={dict.endsAt}
											{...block}
										/>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
