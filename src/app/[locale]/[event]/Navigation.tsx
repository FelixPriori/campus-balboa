import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import { getDictionary } from '@/app/dictionaries'
import { Locale } from '@/i18n'
import Link from 'next/link'
import styles from './Navigation.module.scss'

export default async function Navigation({ locale }: { locale: Locale }) {
	const dict = await getDictionary(locale)

	return (
		<nav className={styles.appNav}>
			<Link href={`/${locale}`} aria-label={dict.Navigation.homeAriaLabel}>
				<CampusLogo />
			</Link>
			<LanguageSwitcher locale={locale} />
		</nav>
	)
}
