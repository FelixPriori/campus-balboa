import styles from './styles.module.scss'
import Image from 'next/image'
import { EntrySys } from 'contentful'
import { Fragment } from 'react/jsx-runtime'
import { Markdown } from '@/app/_lib/markdown'

interface InstructorData {
	sys: EntrySys
	name: string
	avatar: {
		url: string
		title: string
	}
	biography: {
		json: any
		links: any
	}
}

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
							<Fragment key={instructor.sys.id}>
								<h3>{instructor.name}</h3>
								<div className={styles.instructor}>
									<div className={styles.avatar}>
										<Image
											src={instructor.avatar.url}
											width={1080}
											height={1080}
											alt={instructor.avatar.title}
										/>
									</div>
									<div className={styles.details}>
										<Markdown content={instructor.biography} />
									</div>
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
