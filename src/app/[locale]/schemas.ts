import { Locale, SITE_URL } from '@/i18n'

const DESCRIPTION: Record<Locale, string> = {
  en: 'A nonprofit dedicated to fostering balboa dance growth and excellence in and around Montreal.',
  fr: 'Un organisme à but non lucratif entièrement dédié à favoriser la croissance et l\u2019excellence du balboa à Montréal et ses environs.',
}

export function buildOrganizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Campus Balboa',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: 'https://images.ctfassets.net/ix0cnzqgli1c/7kNsIhkIQGln4Mk8A2uS1g/5bb542d9bfdf77b6d0934f2ebb078db9/icon-512x512.png',
      width: 512,
      height: 512,
    },
    description: DESCRIPTION[locale],
    email: 'info@campusbalboa.org',
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      addressCountry: 'CA',
      streetAddress: '7184 Ave 15e',
      postalCode: 'H2A 2T8',
    },
    sameAs: ['https://www.instagram.com/campusbalboa/', 'https://www.facebook.com/campusbalboa'],
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Campus Balboa',
    url: SITE_URL,
  }
}
