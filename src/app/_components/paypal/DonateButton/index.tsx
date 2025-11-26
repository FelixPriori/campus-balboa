import Image from 'next/image'
import styles from './styles.module.scss'
import { DonateButtonType } from '@/app/_types/footer'

export default function DonateButton({
	donateButton,
}: {
	donateButton: DonateButtonType
}) {
	return (
		<a
			className={styles.donateButton}
			href={donateButton.href}
			rel="noreferrer"
			target="_blank"
		>
			<Image
				src="/paypal-monogram-full-color.png"
				width={18}
				height={18}
				alt={donateButton.iconAlt}
			/>
			{donateButton.text}
		</a>
	)
}
