import Favicon from '@/app/favicon.ico'

export const noIndexRobots = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: false,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}


export const fallbackMetaDataFR = {
    title: 'Campus Balboa',
    description: 'Un organisme à but non lucratif entièrement dédié à favoriser la croissance et l’excellence du balboa à Montréal et ses environs.',
    image: {
        url: '/opengraph-image.jpg',
        alt: 'Dessin abstrait de bulles'
    }
}

export const fallbackMetaDataEN = {
    title: 'Campus Balboa',
    description: 'A nonprofit entirely dedicated to fostering balboa growth and excellence in and around Montreal.',
    image: {
        url: '/opengraph-image.jpg',
        alt: 'Abstract bubble drawing'
    }
}

interface BuildPageMetaData {
    locale: string
    path?: string
    title?: string
    description?: string
    image?: {
        url: string
        alt: string
    },
    favicon?: string,
    noIndex?: boolean
}

export const buildPageMetaData = (
    {
        locale,
        path = '', 
        title = '', 
        description = '',
        image,
        favicon,
        noIndex,
    } : BuildPageMetaData
) => {
    const siteUrl = 'https://www.campusbalboa.org'
    const canonical = `${siteUrl}/${locale}/${path}`
    const baseMetaData = locale === 'fr' ? {...fallbackMetaDataFR} : {...fallbackMetaDataEN}

    return {
        alternates: {
            canonical
        },
        title: title ?? baseMetaData.title,
        description: description ?? baseMetaData.description,
        openGraph: {
            images: [
                {
                    url: image?.url ?? baseMetaData.image.url,
                    alt: image?.alt ?? baseMetaData.image.alt
                }
            ],
            title: title ?? baseMetaData.title,
            locale,
            description: description ?? baseMetaData.description,
        },
        icons: [
            {rel: 'icon', url: favicon ?? Favicon.src}
        ],
        robots: noIndex ? noIndexRobots : null
    }
}