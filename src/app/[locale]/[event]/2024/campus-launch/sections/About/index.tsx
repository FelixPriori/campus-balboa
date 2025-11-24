import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'
import Image from 'next/image'
import { DictionaryType } from '@/app/dictionaries'

type ClassBlock = {
	title: string
	day: string
	where: string
	description: string
	type: string
	start: string
	color: string
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
	color,
}: ClassBlock) => {
	return (
		<li className={`${styles.classBlock} ${styles[color]}`}>
			<div className={`${styles.start} ${styles[color]}`}>
				<p>
					{day} : {start}
				</p>
			</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.where}>{where}</p>
			<div className={`${styles.typeWrapper} ${styles[color]}`}>
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

const classes = ['0', '1', '2', '3', '4', '5', '6', '7', '8'] as const

const locations = ['cats', 'kawalees'] as const

const partners = ['cats', 'the'] as const

export default function About({
	aboutSection,
}: {
	aboutSection: DictionaryType['Events']['2024']['Launch']['aboutSection']
}) {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.content}>
				<h2>{aboutSection.sectionTitle}</h2>
				<div className={styles.card}>
					<div className={styles.cardSection}>
						<h3>{aboutSection.instructors.subsectionTitle}</h3>
						<div className={styles.instructors}>
							<div className={styles.instructor}>
								<div className={styles.avatar}>
									<figure>
										<Image
											src="/annabel-avatar.png"
											width={100}
											height={100}
											alt={aboutSection.instructors.annabel.avatarAlt}
										/>

										<figcaption>Credit: Noah Nethero</figcaption>
									</figure>
								</div>
								<div className={styles.details}>
									<h4>{aboutSection.instructors.annabel.name}</h4>
									<p>{aboutSection.instructors.annabel.bio}</p>
								</div>
							</div>
							<div className={styles.instructor}>
								<div className={styles.avatar}>
									<figure>
										<Image
											src="/dan-avatar.png"
											width={100}
											height={100}
											alt={aboutSection.DJs.dan.avatarAlt}
										/>
										<figcaption>Credit: Braden Nesin</figcaption>
									</figure>
								</div>
								<div className={styles.details}>
									<h4>{aboutSection.instructors.dan.name}</h4>
									<p>{aboutSection.instructors.dan.bio}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.cardSection}>
						<h3>{aboutSection.DJs.subsectionTitle}</h3>
						<div className={styles.instructors}>
							<div className={styles.instructor}>
								<div className={styles.avatar}>
									<Image
										src="/michael-avatar.png"
										width={100}
										height={100}
										alt={aboutSection.DJs.michael.avatarAlt}
									/>
								</div>
								<div className={styles.details}>
									<h4>{aboutSection.DJs.michael.name}</h4>
									<p>{aboutSection.DJs.michael.bio}</p>
								</div>
							</div>
							<div className={styles.instructor}>
								<div className={styles.avatar}>
									<figure>
										<Image
											src="/dan-avatar.png"
											width={100}
											height={100}
											alt={aboutSection.DJs.dan.avatarAlt}
										/>
										<figcaption>Credit: Braden Nesin</figcaption>
									</figure>
								</div>
								<div className={styles.details}>
									<h4>{aboutSection.DJs.dan.name}</h4>
									<p>{aboutSection.DJs.dan.bio}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.cardSection} ${styles.grid}`}>
						<div className={styles.gridItem}>
							<h3>{aboutSection.whatToExpect.subsectionTitle}</h3>
							<div className={styles.gridItemContent}>
								<p>{aboutSection.whatToExpect.description}</p>
							</div>
						</div>
						<div className={styles.gridItem}>
							<h3>{aboutSection.level.subsectionTitle}</h3>
							<div className={styles.gridItemContent}>
								<div className={styles.level}>
									<p>{aboutSection.level.content.details}</p>
									<ul className={styles.levelList}>
										{getDetails(aboutSection.level.content.list)}
									</ul>
								</div>
							</div>
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
									color={aboutSection.classSchedule[c].color}
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
						<CtaButton
							href={aboutSection.cta.href}
							ariaLabel={aboutSection.cta.ariaLabel}
							text={aboutSection.cta.text}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
