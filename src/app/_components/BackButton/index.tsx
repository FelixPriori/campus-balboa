'use client'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

export default function BackButton({ children }: { children: ReactNode }) {
	const router = useRouter()
	return (
		<button
			className={styles.backButton}
			type="button"
			onClick={() => router.back()}
		>
			{children}
		</button>
	)
}
