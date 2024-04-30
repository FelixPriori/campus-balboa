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

export const getPageMetaDataQuery = (slug: string | null, locale: string) => `
    query {
        pageCollection(locale: "${locale}", where: {slug: "${slug}"}, limit: 1) {
            items {
                ${PAGE_META_DATA}
            }
        }
    }
`

export const getPageSectionQuery = (id: string | null, locale: string, fieldsQuery: string) => `
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

export const getBasePageQuery = (slug: string | null, locale: string, fieldsQuery: string): string => `
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
                }
                ${fieldsQuery}
            }
        }
    }
`