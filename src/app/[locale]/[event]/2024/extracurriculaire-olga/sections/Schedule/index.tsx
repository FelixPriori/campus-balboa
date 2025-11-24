import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'
import { DictionaryType } from '@/app/dictionaries'

export default function Events({
	scheduleSection,
}: {
	scheduleSection: DictionaryType['Events']['2024']['Olga']['scheduleSection']
}) {
	return (
		<section className={styles.scheduleSection}>
			<div className={styles.content}>
				<h2>{scheduleSection.sectionTitle}</h2>
				<div className={styles.iframeWrapper}>
					<iframe
						className={styles.iframe}
						loading="lazy"
						src="https://www.canva.com/design/DAF92KTugII/xY9DXhAKjEyxznAExURpmw/view?embed"
						allowFullScreen
						allow="fullscreen"
					></iframe>
				</div>
				<CtaButton
					text={scheduleSection.link}
					href="https://www.canva.com/design/DAF92KTugII/xY9DXhAKjEyxznAExURpmw/view?utm_content=DAF92KTugII&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
					ariaLabel={scheduleSection.ariaLabel}
				/>
			</div>
		</section>
	)
}
