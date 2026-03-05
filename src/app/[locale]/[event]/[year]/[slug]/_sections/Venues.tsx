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
			<a
			className={styles.link}
			href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${venueAddress}`)}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{venueAddress}
		</a>
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
