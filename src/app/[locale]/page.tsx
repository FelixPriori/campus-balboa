import Main from '@/layout/main'
import sectionsRenderer, {
  Hero,
  Footer,
} from './sections';
import { getPageBySlug, getPageMetaDataByPageSlug } from '@/lib/api';
import { PAGE_FIELDS_QUERY } from '@/lib/queries';
import { buildPageMetaData } from '@/assets/data/buildPageMetaData';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params: {locale}}: Props) {
  const metaData = await getPageMetaDataByPageSlug(locale, locale);
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

  return buildPageMetaData({locale})
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

export default async function Home({params: {locale}}: {params: {locale: string}}) {
  const pageData = await getPageBySlug(locale, locale, PAGE_FIELDS_QUERY);

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