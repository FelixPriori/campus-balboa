import type { CSSProperties } from 'react'
import styles from './SectionSkeleton.module.scss'

interface SectionSkeletonProps {
	label: string
	minHeight: number
	animationDelay?: string
}

export default function SectionSkeleton({
	label,
	minHeight,
	animationDelay = '0s',
}: SectionSkeletonProps) {
	const cssVars = { '--animation-delay': animationDelay } as CSSProperties

	return (
		<section
			aria-label={label}
			aria-busy="true"
			className={styles.section}
		>
			<div className={styles.content}>
				<div className={styles.titleBar} style={cssVars} />
				<div
					className={styles.card}
					style={{ ...cssVars, minHeight }}
				>
					<div className={styles.pulse} />
				</div>
			</div>
		</section>
	)
}
