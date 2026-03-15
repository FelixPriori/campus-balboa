import { ReactNode } from 'react'
import { SITE_URL } from '@/i18n'

export const metadata = {
	metadataBase: new URL(SITE_URL),
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return children
}
