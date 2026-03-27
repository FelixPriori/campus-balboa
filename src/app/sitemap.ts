import type { MetadataRoute } from 'next'
import { getAllEventSlugs } from '@/app/_lib/api'
import { EVENT_SEGMENTS, SITE_URL } from '@/i18n'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await getAllEventSlugs()

  const homepageEntries = ['fr', 'en'].map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  const eventEntries = events.flatMap(({ slug, startDate }) => {
    // slug is stored as '/year/slug-name' e.g. '/2024/extracurriculaire-olga'
    if (!slug) return []
    const [, year, slugName] = slug.split('/')
    if (!year || !slugName) return []

    return ['fr', 'en'].map((locale) => ({
      url: `${SITE_URL}/${locale}/${EVENT_SEGMENTS[locale as keyof typeof EVENT_SEGMENTS]}/${year}/${slugName}`,
      lastModified: new Date(startDate),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  })

  const eventsListingEntries = ['fr', 'en'].map((locale) => ({
    url: `${SITE_URL}/${locale}/${EVENT_SEGMENTS[locale as keyof typeof EVENT_SEGMENTS]}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const staticPageEntries = [
    { url: `${SITE_URL}/en/privacy`, locale: 'en' },
    { url: `${SITE_URL}/fr/confidentialite`, locale: 'fr' },
  ].map(({ url }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...homepageEntries, ...eventsListingEntries, ...staticPageEntries, ...eventEntries]
}
