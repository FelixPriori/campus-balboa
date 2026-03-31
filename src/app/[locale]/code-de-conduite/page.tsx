import type { Metadata } from 'next'
import { Locale, CODE_OF_CONDUCT_SEGMENTS } from '@/i18n'
import { makeStaticPageMetadata, makeStaticPageRoute } from '../_staticPage'

export const revalidate = 3600

type Props = { params: Promise<{ locale: Locale }> }

const config = { slug: 'code-of-conduct', segments: CODE_OF_CONDUCT_SEGMENTS }

export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return makeStaticPageMetadata(config)(props)
}

export default makeStaticPageRoute(config)
