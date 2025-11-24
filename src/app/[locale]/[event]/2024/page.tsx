import { Locales } from '@/i18n'
import { redirect } from 'next/navigation'

type Props = {
	params: Promise<{ locale: Locales }>
}
export default async function EventsPage({ params }: Props) {
	const locale = (await params).locale as Locales
	redirect(`/${locale}`)
}
