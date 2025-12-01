import styles from './styles.module.scss'

interface FooterProps {
	copyright: string
}

export default function Footer({ copyright }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<p>{copyright}</p>
		</footer>
	)
}
