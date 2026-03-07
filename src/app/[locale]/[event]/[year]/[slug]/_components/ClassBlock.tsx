import styles from './ClassBlock.module.scss'
import { Markdown } from '@/app/_lib/markdown'
import { Locale } from '@/i18n'
import { formatClassTime, formatTimeOnly } from '@/app/_util/dateUtils'
import { EventBlock } from '@/app/_types/events'

export interface ClassBlockProps extends EventBlock {
	locale: Locale
	blockTypeLabels: Record<string, string>
	endsAtLabel: string
}

export function ClassBlock({
	title,
	subtitle,
	description,
	blockType,
	startTime,
	endTime,
	locale,
	blockTypeLabels,
	endsAtLabel,
}: ClassBlockProps) {
	return (
		<li className={styles.classBlock}>
			<div className={styles.start}>
				<p>{formatClassTime(startTime, locale)}</p>
			</div>
			<h4 className={styles.title}>{title}</h4>
			<div className={`${styles.typeWrapper} ${styles[blockType]}`}>
				<p className={styles.type}>{blockTypeLabels[blockType] ?? blockType}</p>
			</div>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			<Markdown content={description} />
			<div className={styles.end}>
				<p>
					{endsAtLabel} {formatTimeOnly(endTime, locale)}
				</p>
			</div>
		</li>
	)
}
