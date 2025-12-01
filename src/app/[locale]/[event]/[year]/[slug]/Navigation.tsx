import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import { Locale } from '@/i18n'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Navigation({ locale }: { locale: Locale }) {
	return (
		<nav className={styles.appNav}>
			<Link href={`/${locale}`}>
				<CampusLogo />
			</Link>
			<LanguageSwitcher locale={locale} />
		</nav>
	)
}
