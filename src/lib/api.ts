import { getBasePageQuery, getPageMetaDataQuery, getPageSectionQuery } from "./queries"

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
  .then((response) => response.json())
}

function extractPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]
}

function extractPageSection(fetchResponse: any): any {
  return fetchResponse?.data?.pageSectionCollection?.items?.[0]
}

export function extractCollection(section: any) {
  return section?.componentsCollection?.items
}

export function extractPageMetaData(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]?.pageMetaData
}


export async function getPreviewPageBySlug(slug: string | null, locale: string, fieldsQuery: string): Promise<any> {
  const entry = await fetchGraphQL(getBasePageQuery(slug,locale, fieldsQuery), true)
  return extractPage(entry)
}

export async function getPageBySlug(slug: string, locale: string, fieldsQuery: string): Promise<any> {
  const entry = await fetchGraphQL(getBasePageQuery(slug, locale, fieldsQuery))

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractPage(entry)
}

export async function getCollectionBySectionId(sectionId: string | null, locale: string, fieldsQuery: string): Promise<any> {
  const entry = await fetchGraphQL(getPageSectionQuery(sectionId, locale, fieldsQuery))

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractCollection(entry.data.pageSection)
}

export async function getPageMetaDataByPageId(pageId: string | null, locale: string): Promise<any> {
  const entry = await fetchGraphQL(getPageMetaDataQuery(pageId, locale))

  if (entry.errors) {
    entry.errors.forEach((e: any) => console.error(e))
  }

  return extractPageMetaData(entry);
}