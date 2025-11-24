import styles from './styles.module.scss'
import Image from 'next/image'
import { DictionaryType } from '@/app/dictionaries'

type ClassBlock = {
	title: string
	day: string
	where: string
	description: string
	type: string
	start: string
}

type LocationBlock = {
	title: string
	address: string
	what: string
}

type PartnerBlock = {
	title: string
	img: {
		url: string
		alt: string
	}
	link: string
}

const getDetails = (items: string) =>
	items?.split(',').map(detail => <li key={detail}>{detail}</li>)

const iSoloBalboaLink = `
	<a
		class="inserted-link"
		href="https://isolobalboa.com/"
		rel="noopener noreferrer"
		target="_blank"
	>
		iSoloBalboa
	</a>
`

const fridayLink = `
	<a
		class="inserted-link"
		href="https://www.catscorner.ca/"
		rel="noopener noreferrer"
		target="_blank"
	>
		Cat's Corner
	</a>
`

const LocationBlock = ({ title, address, what }: LocationBlock) => {
	return (
		<li className={styles.locationBlock}>
			<h4>{title}</h4>
			<p className={styles.what}>{what}</p>
			<p>{address}</p>
		</li>
	)
}

const ClassBlock = ({
	title,
	day,
	where,
	description,
	type,
	start,
}: ClassBlock) => {
	const typeClass =
		type === 'Extra' ? 'extra' : type.includes('Swing') ? 'swing' : 'pure'

	return (
		<li className={styles.classBlock}>
			<div className={styles.start}>
				<p>
					{day} : {start}
				</p>
			</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.where}>{where}</p>
			<div className={`${styles.typeWrapper} ${styles[typeClass]}`}>
				<p className={styles.type}>{type}</p>
			</div>
			<p className={styles.description}>{description}</p>
		</li>
	)
}

const PartnersBlock = ({ title, img, link }: PartnerBlock) => {
	return (
		<li className={styles.partnersBlock}>
			<a href={link} target="_blank" rel="noreferrer noopener">
				<div className={styles.titleContainer}>
					<h4>{title}</h4>
				</div>
				<Image src={img.url} alt={img.alt} width={100} height={100} />
			</a>
		</li>
	)
}

const classes = ['1', '2', '3', '4', '5'] as const

const locations = ['cats', 'cenne', 'ernest'] as const

const partners = ['cats', 'aperos'] as const

export default function About({
	aboutSection,
	closed,
}: {
	aboutSection: DictionaryType['Events']['2024']['Olga']['aboutSection']
	closed: DictionaryType['Events']['2024']['Olga']['closed']
}) {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.content}>
				<h2>{aboutSection.sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<h3>{aboutSection.instructors.subsectionTitle}</h3>
						<div className={styles.instructor}>
							<div className={styles.avatar}>
								<Image
									src="/olga-pe-avatar.png"
									width={100}
									height={100}
									alt={aboutSection.instructors.olga.avatarAlt}
								/>
							</div>
							<div className={styles.details}>
								<h4>{aboutSection.instructors.olga.name}</h4>
								{aboutSection.instructors.olga.bio.map(line => (
									<p
										key={line}
										dangerouslySetInnerHTML={{
											__html: line.replace('{{iSoloBalboa}}', iSoloBalboaLink),
										}}
									/>
								))}
							</div>
						</div>
						<div className={styles.instructor}>
							<div className={styles.avatar}>
								<Image
									src="/felix-pe-avatar.png"
									width={100}
									height={100}
									alt={aboutSection.instructors.felix.avatarAlt}
								/>
							</div>
							<div className={styles.details}>
								<h4>{aboutSection.instructors.felix.name}</h4>
								{aboutSection.instructors.felix.bio.map(line => (
									<p
										key={line}
										dangerouslySetInnerHTML={{
											__html: line,
										}}
									/>
								))}
							</div>
						</div>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.whatToExpect.subsectionTitle}</h3>
						{aboutSection.whatToExpect.description.map(line => (
							<p
								key={line}
								dangerouslySetInnerHTML={{
									__html: line,
								}}
							/>
						))}
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.friday.subsectionTitle}</h3>
						<p
							dangerouslySetInnerHTML={{
								__html: aboutSection.friday.description.replace(
									'{{catscorner}}',
									fridayLink,
								),
							}}
						></p>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.level.subsectionTitle}</h3>
						<div className={styles.level}>
							<p>{aboutSection.level.content.details}</p>
							<ul className={styles.levelList}>
								{getDetails(aboutSection.level.content.list)}
							</ul>
						</div>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.classSchedule.title}</h3>
						<ul className={styles.classSchedule}>
							{classes.map(c => (
								<ClassBlock
									key={c}
									title={aboutSection.classSchedule[c].title}
									day={aboutSection.classSchedule[c].day}
									where={aboutSection.classSchedule[c].where}
									description={aboutSection.classSchedule[c].description}
									type={aboutSection.classSchedule[c].type}
									start={aboutSection.classSchedule[c].start}
								/>
							))}
						</ul>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.locations.title}</h3>
						<ul className={styles.locations}>
							{locations.map(l => (
								<LocationBlock
									key={l}
									title={aboutSection.locations[l].title}
									what={aboutSection.locations[l].what}
									address={aboutSection.locations[l].address}
								/>
							))}
						</ul>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.partners.title}</h3>
						<ul className={styles.partners}>
							{partners.map(p => (
								<PartnersBlock
									key={p}
									title={aboutSection.partners[p].title}
									img={{
										url: aboutSection.partners[p].img.url,
										alt: aboutSection.partners[p].img.alt,
									}}
									link={aboutSection.partners[p].link}
								/>
							))}
						</ul>
					</div>
					<div className={`${styles.cardSection} ${styles.closed}`}>
						<p>{closed}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
