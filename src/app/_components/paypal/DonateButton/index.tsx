import Image from 'next/image'
import styles from './styles.module.scss'
import { DictionaryType } from '@/app/dictionaries'

export default function DonateButton({
	paypalButton,
}: {
	paypalButton: DictionaryType['Components']['paypal']
}) {
	return (
		<a
			className={styles.donateButton}
			href="https://www.paypal.com/donate/?hosted_button_id=SL926PKCWSHV8"
			rel="noreferrer"
			target="_blank"
		>
			<Image
				src="/paypal-monogram-full-color.png"
				width={18}
				height={18}
				alt={paypalButton.logoAlt}
			/>
			{paypalButton.donate}
		</a>
	)
}
