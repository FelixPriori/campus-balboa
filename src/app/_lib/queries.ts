export const ID = `
    sys {
        id
    }
`

export const IMAGE = `
    url
    title
`

export const LINK = `
    href
    text
`

export const RICH_TEXT = `
    json
    links {
        assets {
            block {
                ${ID}
                url
                description
            }
        }
    }
`

export const SOCIAL_MEDIA = `
    logo {
        ${IMAGE}
    }
    href
    accessibilityDescription
`

export const BUTTON_LINK = `
    ${ID}
    href
    text
`

export const PAGE_SECTION = `
    ${ID}
    title
    anchor
    sectionName
    content {
        ${RICH_TEXT}
    }
    helpText
`

export const PAGE_FIELDS_QUERY = `
    ${ID}
    sectionsCollection(limit: 5) {
        items {
            ...on PageSection {
                ${PAGE_SECTION}
            }
        }
    }
`

export const PAGE_META_DATA = `
    pageMetaData {
        title
        description
        favicon {
            ${IMAGE}
        }
        openGraphImage {
            description
            image {
                title
                ${IMAGE}
            }
        }
    }
`

export const EVENT_META_DATA = `
    metadata {
        title
        description
        favicon {
            ${IMAGE}
        }
        openGraphImage {
            image {
                title
                ${IMAGE}
            }
        }
    }
`

export const INSTRUCTOR = `
    ${ID}
    name
    biography {
        ${RICH_TEXT}
    }
    avatar {
        title
        ${IMAGE}
    }
`

export const DJ = `
    ${ID}
    name
    biography {
        ${RICH_TEXT}
    }
    avatar {
        title
        ${IMAGE}
    }
`

export const VENUE = `
    ${ID}
    name
    venueAddress
    purpose
`

export const PARTNER = `
    ${ID}
    title
    link 
    logo {
        title
        ${IMAGE}
    }
`

export const EVENT_BLOCK = `
    ${ID}
    title
    subtitle
    description {
        ${RICH_TEXT}
    }
    startTime
    endTime
    blockType
`

export const PRICE = `
    ${ID}
    tier
    type
    startTime
    endTime
    amount
    batch
`

export const getPageMetaDataQuery = (slug: string | null, locale: string) => `
    query {
        pageCollection(locale: "${locale}", where: {slug: "${slug}"}, limit: 1) {
            items {
                ${PAGE_META_DATA}
            }
        }
    }
`

export const getEventMetaDataQuery = (slug: string | null, locale: string) => `
    query {
        eventCollection(locale: "${locale}", where: {slug: "${slug}"}, limit: 1) {
            items {
                ${EVENT_META_DATA}
            }
        }
    }
`

export const getEventCollectionQuery = (
	eventId: string,
	collectionName: string,
	locale: string,
	fieldsQuery: string,
) => `
    query {
        event(id: "${eventId}", locale: "${locale}") {
            ${collectionName}Title
            ${collectionName}Collection(limit: 10) {
                items {
                    ${fieldsQuery}
                }
            }
        }
    }
`

export const getPageSectionQuery = (
	id: string | null,
	locale: string,
	fieldsQuery: string,
) => `
    query {
        pageSection(id: "${id}", locale: "${locale}") {
            title
            anchor
            componentsCollection(limit: 10) {
                items {
                    ${fieldsQuery}
                }
            }
        }
    }
`

export const getEmblaQuery = (locale: string) => `
    query {
        emblaCollection(locale: "${locale}", limit: 1) {
            items {
                changeSlide
                nextSlide
                prevSlide
            }
        }
    }
`

export const getGoogleCalendarQuery = (locale: string) => `
    query {
        googleCalendarCollection(locale: "${locale}", limit: 1) {
            items {
                iFrameTitle
            }
        }
    }
`

export const getBasePageQuery = (
	slug: string | null,
	locale: string,
	fieldsQuery: string,
): string => `
    query {
        pageCollection(locale: "${locale}", where: {slug: "${slug}"}, limit: 1) {
            items {
                slug
                hero {
                    title
                    description {
                        ${RICH_TEXT}
                    }
                }
                footer {
                    copyright
                    contact
                    contactLink {
                        ${LINK}
                    }
                    donateButton {
                        ${LINK}
                        iconAlt
                    }
                    socialMediasCollection(limit: 5) {
                        items {
                            ${ID}
                            ${SOCIAL_MEDIA}
                        }
                    }
                    landAcknowledgement{
                        title
                        text
                    }
                }
                ${fieldsQuery}
            }
        }
    }
`

export const getEventPageQuery = (
	slug: string | null,
	locale: string,
): string => `
    query {
        eventCollection(locale: "${locale}", where: {slug: "${slug}"}, limit: 1) {
            items {
                ${ID}
                title
                slug
                details {
                    ${RICH_TEXT}
                }
                image {
                    title
                    ${IMAGE}
                }
                link {
                    ${LINK}
                }
                startDate
                endDate
                closedText
                registrationLink {
                    ${LINK}
                }
                socialMediaCollection(limit: 3) {
                    items {
                        ${BUTTON_LINK}
                    }
                }
                levelRequirement {
                    title
                    description {
                        ${RICH_TEXT}
                    }
                    skills
                }
                copyright
                aboutTitle
                levelRequirementTitle
            }
        }
    }
`

export const getEventSocialMediaQuery = (eventId: string, locale: string) => `
    query {
        event(id: "${eventId}", locale: "${locale}") {
            socialMediaCollection(limit: 3) {
                items {
                    ${BUTTON_LINK}
                }
            }
        }
    }
`

export const getAllEventSlugsQuery = () => `
    query {
        eventCollection(limit: 50) {
            items {
                slug
                startDate
            }
        }
    }
`

export const getEventScheduleQuery = (locale: string) =>
	`
    query {
        eventCollection(locale: "${locale}", limit: 10) {
             items {
                ${ID}
                title
                subtitle
                description {
                    ${RICH_TEXT}
                }
                startTime
                endTime
                blockType
            }
        }
    }
    `
