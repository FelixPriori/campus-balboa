import styles from './styles.module.scss'
import AdministratorCard from '../../_components/AdministratorCard'
import { PageSectionProps } from '..'
import { getCollectionBySectionId } from '@/app/_lib/api'
import { ADMINISTRATOR } from './query'
import { Suspense } from 'react'
import Fallback from './Fallback'

type Administrator = {
	sys: {
		id: string
	}
	avatar: {
		url: string
		title: string
	}
	name: string
	pronouns: string
	title: string
	bio: {
		json: any
		links: any
	}
}

export default async function AboutUsSection({
	id,
	title,
	anchor,
	locale,
}: PageSectionProps) {
	const administrators = await getCollectionBySectionId(
		id,
		locale,
		ADMINISTRATOR,
	)

	return (
		<section id={anchor} className={styles.aboutUsSection}>
			<div className={styles.content}>
				<h2 className={styles.aboutUsTitle}>{title}</h2>
				<div className={styles.administratorsContainer}>
					<Suspense fallback={<Fallback />}>
						{administrators.length &&
							administrators.map((administrator: Administrator) => (
								<AdministratorCard
									key={administrator.sys.id}
									avatar={administrator.avatar}
									name={administrator.name}
									pronouns={administrator.pronouns}
									title={administrator.title}
									bio={administrator.bio}
								/>
							))}
					</Suspense>
				</div>
			</div>
		</section>
	)
}
