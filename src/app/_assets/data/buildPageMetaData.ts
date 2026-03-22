import Favicon from '@/app/favicon.ico'
import { SITE_URL } from '@/i18n'
import type { DictionaryType } from '@/app/dictionaries'

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

interface BuildPageMetaData {
  locale: string
  dictionary: DictionaryType
  path?: string
  title?: string
  description?: string
  image?: {
    url: string
    alt: string
  }
  favicon?: string
  noIndex?: boolean
}

export const buildPageMetaData = ({
  locale,
  dictionary,
  path = '',
  title,
  description,
  image,
  favicon,
  noIndex,
}: BuildPageMetaData) => {
  const canonical = path ? `${SITE_URL}/${locale}/${path}` : `${SITE_URL}/${locale}`
  const fallback = dictionary.FallbackMetaData

  return {
    alternates: {
      canonical,
    },
    title: title ?? fallback.title,
    description: description ?? fallback.description,
    openGraph: {
      images: [
        {
          url: image?.url ?? '/opengraph-image.jpg',
          alt: image?.alt ?? fallback.imageAlt,
        },
      ],
      title: title ?? fallback.title,
      locale,
      description: description ?? fallback.description,
    },
    icons: [{ rel: 'icon', url: favicon ?? Favicon.src }],
    robots: noIndex ? noIndexRobots : null,
  }
}
