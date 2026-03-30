import type { KlaroConfig } from './klaro-types'
import type { DictionaryType } from '@/app/dictionaries'

export function buildKlaroConfig(locale: string, t: DictionaryType['CookieConsent']): KlaroConfig {
  return {
    version: 1,
    storageMethod: 'localStorage',
    storageName: 'klaro',
    cookieExpiresAfterDays: 365,
    lang: locale,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    translations: {
      [locale]: {
        privacyPolicyUrl: t.privacyPolicyUrl,
        consentNotice: {
          description: t.description,
        },
        purposes: {
          analytics: t.analyticsTitle,
        },
        googleAnalytics: {
          description: t.googleAnalyticsDescription,
        },
      },
    },
    services: [
      {
        name: 'googleAnalytics',
        title: 'Google Analytics',
        purposes: ['analytics'],
        cookies: [
          [/^_ga/, '/', '.campusbalboa.org'],
          [/^_gid/, '/', '.campusbalboa.org'],
          [/^_gat/, '/', '.campusbalboa.org'],
        ],
      },
    ],
  }
}
