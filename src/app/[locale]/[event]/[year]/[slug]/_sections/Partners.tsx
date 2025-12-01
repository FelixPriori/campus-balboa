import { EntrySys } from 'contentful'
import styles from './styles.module.scss'
import Image from 'next/image'

interface Partner {
	sys: EntrySys
	title: string
	link: string
	logo: {
		url: string
		title: string
	}
}

interface PartnersProps {
	partnersData: Partner[]
	sectionTitle: string
}

const PartnersBlock = ({ title, logo, link }: Partner) => {
	return (
		<li className={styles.partnersBlock}>
			<a href={link} target="_blank" rel="noreferrer noopener">
				<div className={styles.titleContainer}>
					<h4>{title}</h4>
				</div>
				<Image src={logo.url} alt={logo.title} width={1080} height={1080} />
			</a>
		</li>
	)
}

export default function Partners({
	partnersData,
	sectionTitle,
}: PartnersProps) {
	return (
		<section className={styles.partnersSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<ul className={styles.partners}>
							{partnersData.map(partner => (
								<PartnersBlock key={partner.sys.id} {...partner} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
