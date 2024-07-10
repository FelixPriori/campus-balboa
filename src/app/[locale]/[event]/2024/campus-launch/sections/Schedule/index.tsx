'use client'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import CtaButton from '../../components/CtaButton'

export default function Events() {
	const t = useTranslations('Events.2024.Olga.scheduleSection')

	return (
		<section className={styles.scheduleSection}>
			<div className={styles.content}>
				<h2>{t('sectionTitle')}</h2>
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
					text={t('link')}
					href="https://www.canva.com/design/DAGKdV6eKnI/taIMvb9eTFqwKfmy-Pb-tg/view?utm_content=DAGKdV6eKnI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
					ariaLabel={t('ariaLabel')}
				/>
			</div>
		</section>
	)
}
