import DonateButton from '@/app/_components/paypal/DonateButton'
import LandAcknowledgement from '../../../_components/LandAcknowledgement'
import SocialMedia, { ISocialMedia } from '../../../_components/SocialMedia'
import styles from './styles.module.scss'
import { DictionaryType } from '@/app/dictionaries'

type FooterProps = {
	contact: string
	contactLink: {
		href: string
		text: string
	}
	copyright: string
	socialMediasCollection: {
		items: ISocialMedia[]
	}
	paypalButton: DictionaryType['Components']['paypal']
	landAcknowledgement: DictionaryType['LandAcknowledgement']
}

export default function Footer({
	contact,
	contactLink,
	copyright,
	socialMediasCollection,
	paypalButton,
	landAcknowledgement,
}: FooterProps) {
	return (
		<footer className={styles.footerSection}>
			<div className={styles.content}>
				<LandAcknowledgement landAcknowledgement={landAcknowledgement} />
				<div className={styles.contact}>
					<p className={styles.copy}>
						<span>{contact}</span>
						<a href={contactLink.href}>{contactLink.text}</a>
					</p>
					<p className={styles.copy}>{copyright}</p>
				</div>
				<div className={styles.links}>
					{socialMediasCollection?.items?.map(sm => (
						<SocialMedia key={sm.sys.id} {...sm} />
					))}
					<DonateButton paypalButton={paypalButton} />
				</div>
			</div>
		</footer>
	)
}
