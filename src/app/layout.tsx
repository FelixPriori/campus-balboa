import { ReactNode } from 'react'

export const metadata = {
	metadataBase: new URL('https://campusbalboa.org'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return children
}
