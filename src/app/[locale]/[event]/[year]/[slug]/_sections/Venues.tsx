import styles from './styles.module.scss'
import { EntrySys } from 'contentful'

interface Venue {
	sys: EntrySys
	name: string
	venueAddress: string
	purpose: string
}

interface VenuesProps {
	venuesData: Venue[]
	sectionTitle: string
}

const VenueBlock = ({ name, venueAddress, purpose }: Venue) => {
	return (
		<li className={styles.locationBlock}>
			<h4>{name}</h4>
			<p className={styles.what}>{purpose}</p>
			<p>{venueAddress}</p>
		</li>
	)
}

export default function Venues({ venuesData, sectionTitle }: VenuesProps) {
	return (
		<section className={styles.venuesSection}>
			<div className={styles.content}>
				<h2>{sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<ul className={styles.locations}>
							{venuesData.map(venue => (
								<VenueBlock key={venue.sys.id} {...venue} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
