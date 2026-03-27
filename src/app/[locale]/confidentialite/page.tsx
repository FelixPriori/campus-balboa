import type { Metadata } from 'next'
import { Locale } from '@/i18n'
import StaticPageRoute, { generateStaticPageMetadata } from '../_staticPage'

export const revalidate = 3600

type Props = { params: Promise<{ locale: Locale }> }

export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return generateStaticPageMetadata(props)
}

export default StaticPageRoute
