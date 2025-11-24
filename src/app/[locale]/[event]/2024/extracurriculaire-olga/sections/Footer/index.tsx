import { DictionaryType } from '@/app/dictionaries'
import styles from './styles.module.scss'

export default function Footer({
	footerSection,
}: {
	footerSection: DictionaryType['Events']['2024']['Olga']
}) {
	return (
		<footer className={styles.footer}>
			<p>{footerSection.copyright}</p>
		</footer>
	)
}
