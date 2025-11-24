import { DictionaryType } from '@/app/dictionaries'
import styles from './styles.module.scss'

export default function LandAknowledgement({
	landAcknowledgement,
}: {
	landAcknowledgement: DictionaryType['LandAcknowledgement']
}) {
	return (
		<div className={styles.landAcknowledgement}>
			<h2>{landAcknowledgement.title}</h2>
			<div className={styles.content}>
				<p>{landAcknowledgement.text}</p>
			</div>
		</div>
	)
}
