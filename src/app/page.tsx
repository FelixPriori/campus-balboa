import { redirect } from '@/i18n/routing'
import { getLocale } from 'next-intl/server'

// Redirect the user to the default locale when the app root is requested
export default async function RootPage() {
	const locale = await getLocale()
	redirect({ href: '/', locale })
}
