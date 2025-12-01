import styles from './styles.module.scss'
import Image from 'next/image'
import { EntrySys } from 'contentful'
import { Markdown } from '@/app/_lib/markdown'

interface DJ {
	sys: EntrySys
	name: string
	biography: {
		json: any
		links: any
	}
	avatar: {
		url: string
		title: string
	}
	pronouns: string
}

interface DJsProps {
	dJsData: DJ[]
	sectionTitle: string
}

export default function DJs({ dJsData, sectionTitle }: DJsProps) {
	return (
		<section className={styles.dJsSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<div className={styles.instructors}>
							{dJsData.map(dj => (
								<div key={dj.sys.id} className={styles.instructor}>
									<div className={styles.avatar}>
										<Image
											src={dj.avatar.url}
											width={1080}
											height={1080}
											alt={dj.avatar.title}
										/>
									</div>
									<div className={styles.details}>
										<h4>{dj.name}</h4>
										<Markdown content={dj.biography} />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
