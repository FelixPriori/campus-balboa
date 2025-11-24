import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'
import { DictionaryType } from '@/app/dictionaries'

export default function Events({
	scheduleSection,
}: {
	scheduleSection: DictionaryType['Events']['2024']['Launch']['scheduleSection']
}) {
	return (
		<section className={styles.scheduleSection}>
			<div className={styles.content}>
				<h2>{scheduleSection.sectionTitle}</h2>
				<div className={styles.iframeWrapper}>
					<iframe
						className={styles.iframe}
						loading="lazy"
						src="https://www.canva.com/design/DAGKdV6eKnI/taIMvb9eTFqwKfmy-Pb-tg/view?embed"
						allowFullScreen
						allow="fullscreen"
					></iframe>
				</div>
				<CtaButton
					text={scheduleSection.link}
					href="https://www.canva.com/design/DAGKdV6eKnI/taIMvb9eTFqwKfmy-Pb-tg/view?utm_content=DAGKdV6eKnI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
					ariaLabel={scheduleSection.ariaLabel}
				/>
			</div>
		</section>
	)
}
