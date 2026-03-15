import {
	getBasePageQuery,
	getEmblaQuery,
	getEventCollectionQuery,
	getEventMetaDataQuery,
	getEventPageQuery,
	getEventSocialMediaQuery,
	getGoogleCalendarQuery,
	getAllEventSlugsQuery,
	getPageMetaDataQuery,
	getPageSectionQuery,
} from './queries'

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
		},
	).then(response => response.json())
}

function extractPage(fetchResponse: any): any {
	return fetchResponse?.data?.pageCollection?.items?.[0]
}

function extractEvent(fetchResponse: any): any {
	return fetchResponse?.data?.eventCollection?.items?.[0]
}

function extractEventCollection(
	fetchResponse: any,
	collectionName: string,
): any {
	return fetchResponse?.data?.event?.[collectionName]?.items
}

export function extractCollection(section: any) {
	return section?.componentsCollection?.items
}

export function extractPageMetaData(fetchResponse: any): any {
	return fetchResponse?.data?.pageCollection?.items?.[0]?.pageMetaData
}

export function extractSectionTitle(
	fetchResponse: any,
	collectionName: string,
) {
	return fetchResponse?.data?.event?.[`${collectionName}Title`]
}

export function extractEventMetaData(fetchResponse: any): any {
	return fetchResponse?.data?.eventCollection?.items?.[0]?.metadata
}

export async function getPreviewPageBySlug(
	slug: string | null,
	locale: string,
	fieldsQuery: string,
): Promise<any> {
	const entry = await fetchGraphQL(
		getBasePageQuery(slug, locale, fieldsQuery),
		true,
	)
	return extractPage(entry)
}

export async function getPageBySlug(
	slug: string,
	locale: string,
	fieldsQuery: string,
): Promise<any> {
	const entry = await fetchGraphQL(getBasePageQuery(slug, locale, fieldsQuery))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return extractPage(entry)
}

export async function getEventPageBySlug(slug: string, locale: string) {
	const entry = await fetchGraphQL(getEventPageQuery(slug, locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return extractEvent(entry)
}

export async function getCollectionByEventId(
	eventId: string,
	collectionName: string,
	locale: string,
	fieldsQuery: string,
): Promise<any> {
	const entry = await fetchGraphQL(
		getEventCollectionQuery(eventId, collectionName, locale, fieldsQuery),
	)

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return {
		sectionTitle: extractSectionTitle(entry, collectionName),
		items: extractEventCollection(entry, `${collectionName}Collection`),
	}
}

export async function getCollectionBySectionId(
	sectionId: string | null,
	locale: string,
	fieldsQuery: string,
): Promise<any> {
	const entry = await fetchGraphQL(
		getPageSectionQuery(sectionId, locale, fieldsQuery),
	)

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return extractCollection(entry.data.pageSection)
}

export async function getEmbla(locale: string) {
	const entry = await fetchGraphQL(getEmblaQuery(locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return entry.data.emblaCollection.items[0]
}

export async function getGoogleCalendar(locale: string) {
	const entry = await fetchGraphQL(getGoogleCalendarQuery(locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return entry.data.googleCalendarCollection.items[0]
}

export async function getPageMetaDataByPageSlug(
	slug: string | null,
	locale: string,
): Promise<any> {
	const entry = await fetchGraphQL(getPageMetaDataQuery(slug, locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return extractPageMetaData(entry)
}

export async function getEventSocialMedia(
	eventId: string,
	locale: string,
): Promise<any> {
	const entry = await fetchGraphQL(getEventSocialMediaQuery(eventId, locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return entry?.data?.event?.socialMediaCollection?.items
}

export async function getAllEventSlugs(): Promise<
	Array<{ slug: string | null; startDate: string }>
> {
	const entry = await fetchGraphQL(getAllEventSlugsQuery())

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return entry?.data?.eventCollection?.items ?? []
}

export async function getEventMetaDataBySlug(
	slug: string | null,
	locale: string,
): Promise<any> {
	const entry = await fetchGraphQL(getEventMetaDataQuery(slug, locale))

	if (entry.errors) {
		entry.errors.forEach((e: any) => console.error(e))
	}

	return extractEventMetaData(entry)
}
