import Main from '@/app/_layout/main'
import { getHomePage, getPageMetaDataByPageSlug } from '@/app/_lib/api'
import { buildPageMetaData } from '@/app/_assets/data/buildPageMetaData'
import LanguageSwitcher from '@/app/_components/LanguageSwitcher'
import CampusLogo from '@/app/_assets/svgs/campus-logo'
import { Locale, SITE_URL } from '@/i18n'
import { getDictionary } from '@/app/dictionaries'
import sectionsRenderer, { Hero } from '../_sections'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { draftMode } from 'next/headers'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const locale = (await params).locale as Locale
  const { isEnabled: preview } = await draftMode()
  const [metaData, dict] = await Promise.all([
    getPageMetaDataByPageSlug(locale, locale, preview),
    getDictionary(locale),
  ])
  const page = metaData?.items?.[0]?.pageMetaData

  if (page) {
    return {
      title: page.title,
      description: page.description,
      alternates: {
        canonical: `${SITE_URL}/${locale}`,
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
          'x-default': `${SITE_URL}/fr`,
        },
      },
      openGraph: {
        images: [
          {
            url: page.openGraphImage?.image?.url,
            alt: page.openGraphImage?.image?.title,
          },
        ],
        title: page.title,
        url: `${SITE_URL}/${locale}`,
        locale,
        description: page.openGraphImage?.description,
      },
      icons: [{ rel: 'icon', url: page.favicon?.url }],
    }
  }

  return buildPageMetaData({ locale, dictionary: dict })
}

export default async function Home({ params }: Props) {
  const locale = (await params).locale as Locale
  const { isEnabled: preview } = await draftMode()
  const [pageData, dict] = await Promise.all([
    getHomePage(locale, locale, preview),
    getDictionary(locale),
  ])

  if (!pageData?.sectionsCollection) {
    return notFound()
  }

  return (
    <div className="landing">
      <nav className="app-nav" aria-label={dict.Navigation.mainAriaLabel}>
        <Link href={`/${locale}`} aria-label={dict.Navigation.homeAriaLabel}>
          <CampusLogo />
        </Link>
        <a href="#main-content" className="skip-link">
          {dict.Navigation.skipToMain}
        </a>
        <LanguageSwitcher locale={locale} />
      </nav>
      <Hero {...pageData?.hero} />
      <Main>
        {pageData?.sectionsCollection?.items
          .filter((s): s is NonNullable<typeof s> => s !== null)
          .map(async (s) => await sectionsRenderer(s, locale, preview))}
      </Main>
    </div>
  )
}
