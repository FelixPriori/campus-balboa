import Image from 'next/image'
import styles from './PartnersBlock.module.scss'
import { Partner } from '@/app/_types/events'

export function PartnersBlock({ title, logo, link }: Partner) {
	return (
		<li className={styles.partnersBlock}>
			<a href={link} target="_blank" rel="noreferrer noopener">
				<div className={styles.titleContainer}>
					<h4>{title}</h4>
				</div>
				<Image src={logo.url} alt={logo.title} width={1080} height={1080} />
			</a>
		</li>
	)
}
