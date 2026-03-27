import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Locale, SITE_URL, PRIVACY_SEGMENTS } from '@/i18n'
import { getStaticPageBySlug } from '@/app/_lib/api'
import { getDictionary } from '@/app/dictionaries'
import { Markdown } from '@/app/_lib/markdown'
import Breadcrumb from '@/app/_components/Breadcrumb'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import styles from './_staticPage.module.scss'

// The Contentful entry identifier shared across all locales.
// The URL slug (privacy / confidentialite) is determined by the route filename.
const STATIC_PAGE_SLUG = 'privacy-policy'

type Props = { params: Promise<{ locale: Locale }> }

export async function generateStaticPageMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const { isEnabled: preview } = await draftMode()
  const page = await getStaticPageBySlug(STATIC_PAGE_SLUG, locale, preview)
  const m = page?.pageMetaData
  if (!m) return {}

  return {
    title: m.title ?? undefined,
    description: m.description ?? undefined,
    alternates: {
      canonical: `${SITE_URL}/${locale}/${PRIVACY_SEGMENTS[locale]}`,
      languages: {
        en: `${SITE_URL}/en/${PRIVACY_SEGMENTS.en}`,
        fr: `${SITE_URL}/fr/${PRIVACY_SEGMENTS.fr}`,
        'x-default': `${SITE_URL}/en/${PRIVACY_SEGMENTS.en}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Campus Balboa',
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      url: `${SITE_URL}/${locale}/${PRIVACY_SEGMENTS[locale]}`,
      title: m.title ?? undefined,
      description: m.description ?? undefined,
      images: m.openGraphImage?.image?.url
        ? [{ url: m.openGraphImage.image.url, alt: m.openGraphImage?.description ?? '' }]
        : [],
    },
    icons: m.favicon?.url ? [{ rel: 'icon', url: m.favicon.url }] : [],
  }
}

export default async function StaticPageRoute({ params }: Props) {
  const { locale } = await params
  const { isEnabled: preview } = await draftMode()
  const [page, dict] = await Promise.all([
    getStaticPageBySlug(STATIC_PAGE_SLUG, locale, preview),
    getDictionary(locale),
  ])

  if (!page) return notFound()

  const breadcrumbItems = [
    { label: dict.Common.home, href: `/${locale}` },
    { label: page.title ?? '' },
  ]

  return (
    <div className={styles.page}>
      <nav className="app-nav" aria-label={dict.Navigation.mainAriaLabel}>
        <Link href={`/${locale}`} aria-label={dict.Navigation.homeAriaLabel}>
          <CampusLogo />
        </Link>
        <a href="#main-content" className="skip-link">
          {dict.Navigation.skipToMain}
        </a>
        <LanguageSwitcher locale={locale} />
      </nav>
      <Breadcrumb items={breadcrumbItems} ariaLabel={dict.Breadcrumb.ariaLabel} />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className={styles.title}>{page.title}</h1>
            <Markdown content={page.body} />
          </article>
        </div>
      </main>
    </div>
  )
}
