import Link from 'next/link'
import styles from './styles.module.scss'

interface BreadcrumbItem {
	label: string
	href?: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
	ariaLabel?: string
}

export default function Breadcrumb({ items, ariaLabel = 'Breadcrumb' }: BreadcrumbProps) {
	return (
		<nav aria-label={ariaLabel} className={styles.breadcrumb}>
			<ol className={styles.list}>
				{items.map((item, i) => (
					<li key={item.href ?? item.label} className={styles.item}>
						{item.href ? (
							<Link href={item.href}>{item.label}</Link>
						) : (
							<span aria-current="page">{item.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
