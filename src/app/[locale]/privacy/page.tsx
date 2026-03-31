import type { Metadata } from 'next'
import { Locale, PRIVACY_SEGMENTS } from '@/i18n'
import { makeStaticPageMetadata, makeStaticPageRoute } from '../_staticPage'

export const revalidate = 3600

type Props = { params: Promise<{ locale: Locale }> }

const config = { slug: 'privacy-policy', segments: PRIVACY_SEGMENTS }

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return makeStaticPageMetadata(config)(props)
}

export default makeStaticPageRoute(config)
