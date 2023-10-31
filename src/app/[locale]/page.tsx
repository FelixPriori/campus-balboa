import Main from '@/layout/main'
import sectionsRenderer, {
  Hero,
  Footer,
} from './sections';
import { getPageBySlug, getPageMetaDataByPageId } from '@/lib/api';
import { ACCUEIL_FIELDS_QUERY } from '@/lib/queries';
import { fallbackMetaData } from '@/assets/data/fallbackMetaData';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params: {locale}}: Props) {
  const metaData = await getPageMetaDataByPageId(locale, locale);

  const siteUrl = 'https://www.campusbalboa.org'

  if (metaData) {
    return {
      title: metaData.title,
      description: metaData.description,
      alternates: {
        canonical: `${siteUrl}/${locale}`
      },
      openGraph: {
        images: [
          {
            url: metaData.openGraphImage.image.url,
            alt: metaData.openGraphImage.image.alt
          }
        ],
        title: metaData.title,
        locale,
        description: metaData.openGraphImage.description,
      },
      icons: [
        {rel: 'icon', url: metaData.favicon.url}
      ],
    }
  }

  return fallbackMetaData
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

export default async function Home({params: {locale}}: {params: {locale: string}}) {
  const pageData = await getPageBySlug(locale, locale, ACCUEIL_FIELDS_QUERY);

  if (!pageData?.sectionsCollection) {
    return <></>
  }

  return (
    <>
      <Hero {...pageData?.hero} />
      <Main>
        {pageData?.sectionsCollection?.items.map((s: any) => sectionsRenderer(s))}
      </Main>
      <Footer {...pageData?.footer} />
    </>
  )
}