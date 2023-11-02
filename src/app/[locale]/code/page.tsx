import Main from '@/layout/main'
import { getPageBySlug, getPageMetaDataByPageSlug } from '@/lib/api';
import { PAGE_FIELDS_QUERY } from '@/lib/queries';
import { buildPageMetaData, noIndexRobots } from '@/assets/data/buildPageMetaData';
import { Footer, Hero } from '../sections';
import sectionsRenderer from './sections';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params: {locale}}: Props) {
  const path = `${locale === 'fr' ? 'code-de-conduite' : 'code-of-conduct'}`
  const slug = `${locale}/${path}`
  const metaData = await getPageMetaDataByPageSlug(slug, locale);
  
  if (metaData) {
    const siteUrl = 'https://www.campusbalboa.org'
    const canonical = `${siteUrl}/${slug}`
    return {
      title: metaData.title,
      description: metaData.description,
      alternates: {
        canonical
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
        description: metaData.description,
      },
      icons: [
        {rel: 'icon', url: metaData.favicon.url}
      ],
      robots: noIndexRobots
    }
  }

  const options = locale === 'fr' 
      ? 
          {
              title: "Campus Balboa | Code de conduite",
              description: "Code de conduite du Campus Balboa",
          } 
      :
          {
              title: "Campus Balboa | Code of Conduct",
              description: "Campus Balboa Code of Conduct",
          }

  return buildPageMetaData({
      locale,
      path,
      noIndex: true,
      ...options
  })
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

export default async function CodeOfConduct({params: {locale}}: {params: {locale: string}}) {
  const path = `${locale === 'fr' ? 'code-de-conduite' : 'code-of-conduct'}`
  const slug = `${locale}/${path}`
  const pageData = await getPageBySlug(slug, locale, PAGE_FIELDS_QUERY);

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