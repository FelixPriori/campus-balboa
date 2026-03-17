import Image from 'next/image'
import styles from './PersonBlock.module.scss'
import { Markdown } from '@/app/_lib/markdown'

interface PersonBlockProps {
	name: string
	biography: { json: any; links: any }
	avatar: { url: string; title: string }
	pronouns?: string | null
	variant: 'instructor' | 'dj'
	nameAbove?: boolean
}

export function PersonBlock({
	name,
	biography,
	avatar,
	pronouns,
	variant,
	nameAbove = false,
}: PersonBlockProps) {
	return (
		<>
			{nameAbove && <h3>{name}</h3>}
			<div className={styles[variant]}>
				<div className={styles.avatar}>
					<Image
						src={avatar.url}
						width={1080}
						height={1080}
						sizes={variant === 'instructor' ? '200px' : '120px'}
						style={{ objectFit: 'cover' }}
						alt={avatar.title}
					/>
				</div>
				<div className={styles.details}>
					{!nameAbove && <h4>{name}</h4>}
					{pronouns && <p>{pronouns}</p>}
					<Markdown content={biography} />
				</div>
			</div>
		</>
	)
}
