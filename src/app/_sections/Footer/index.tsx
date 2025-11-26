import DonateButton from '@/app/_components/paypal/DonateButton'
import LandAcknowledgement from '../../_components/LandAcknowledgement'
import styles from './styles.module.scss'
import { FooterSection } from '@/app/_types/footer'
import SocialMedia from '@/app/_components/SocialMedia'

export default function Footer({
	contact,
	contactLink,
	copyright,
	socialMediasCollection,
	donateButton,
	landAcknowledgement,
}: FooterSection) {
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
					<DonateButton donateButton={donateButton} />
				</div>
			</div>
		</footer>
	)
}
