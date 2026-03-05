import { EntrySys } from 'contentful'
import styles from './styles.module.scss'
import { Markdown } from '@/app/_lib/markdown'
import { Locale } from '@/i18n'
import { formatClassTime, formatDate } from '@/app/_util/dateUtils'
import { getDictionary } from '@/app/dictionaries'

interface EventBlock {
	sys: EntrySys
	title: string
	subtitle: null
	startTime: string
	endTime: string
	blockType: string
	description: {
		json: any
		links: any
	}
}

interface ClassBlockProps extends EventBlock {
	locale: Locale
	blockTypeLabels: Record<string, string>
}

interface ScheduleProps {
	scheduleData: EventBlock[]
	locale: Locale
	sectionTitle: string
}

const ClassBlock = ({
	title,
	description,
	blockType,
	startTime,
	locale,
	blockTypeLabels,
}: ClassBlockProps) => {
	return (
		<li className={styles.classBlock}>
			<div className={styles.start}>
				<p>{formatClassTime(startTime, locale)}</p>
			</div>
			<h4 className={styles.title}>{title}</h4>
			<div className={`${styles.typeWrapper} ${styles[blockType]}`}>
				<p className={styles.type}>{blockTypeLabels[blockType] ?? blockType}</p>
			</div>
			<Markdown content={description} />
		</li>
	)
}

const groupByDay = (blocks: EventBlock[]): Map<string, EventBlock[]> => {
	const groups = new Map<string, EventBlock[]>()
	for (const block of blocks) {
		const day = block.startTime.slice(0, 10)
		if (!groups.has(day)) groups.set(day, [])
		groups.get(day)!.push(block)
	}
	return groups
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
										<ClassBlock key={block.sys.id} locale={locale} blockTypeLabels={dict.blockTypes} {...block} />
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
