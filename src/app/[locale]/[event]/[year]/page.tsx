import { Locale } from '@/i18n'
import { redirect } from 'next/navigation'

type Props = {
	params: Promise<{ locale: Locale }>
}
export default async function EventsPage({ params }: Props) {
	const locale = (await params).locale as Locale
	redirect(`/${locale}`)
}
