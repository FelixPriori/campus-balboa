import { EntrySys } from 'contentful'
import styles from './styles.module.scss'
import { Markdown } from '@/app/_lib/markdown'
import { Locale } from '@/i18n'
import { formatClassTime } from '@/app/_util/dateUtils'

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
}: ClassBlockProps) => {
	return (
		<li className={styles.classBlock}>
			<div className={styles.start}>
				<p>{formatClassTime(startTime, locale)}</p>
			</div>
			<h4 className={styles.title}>{title}</h4>
			<div className={`${styles.typeWrapper} ${styles[blockType]}`}>
				<p className={styles.type}>{blockType}</p>
			</div>
			<Markdown content={description} />
		</li>
	)
}

export default function Schedule({
	scheduleData,
	locale,
	sectionTitle,
}: ScheduleProps) {
	return (
		<section className={styles.scheduleSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<ul className={styles.classSchedule}>
							{scheduleData.map(block => (
								<ClassBlock key={block.sys.id} locale={locale} {...block} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
