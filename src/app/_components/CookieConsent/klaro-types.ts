export interface KlaroManager {
  getConsent(name: string): boolean
  watch(watcher: { update: (manager: KlaroManager, eventType: string) => void }): void
}

export interface KlaroService {
  /** Unique name — used as the key for consent storage and translations */
  name: string
  title?: string
  purposes: string[]
  /** Cookie patterns to delete on decline: [regex, path, domain] */
  cookies?: Array<[RegExp | string, string, string]>
  default?: boolean
  required?: boolean
  optOut?: boolean
  onlyOnce?: boolean
  callback?: (consent: boolean, service: KlaroService) => void
}

interface KlaroPurposeTranslations {
  [purpose: string]: string
}

interface KlaroNoticeTranslations {
  description?: string
  learnMore?: string
}

interface KlaroLocaleTranslations {
  privacyPolicyUrl?: string
  consentNotice?: KlaroNoticeTranslations
  purposes?: KlaroPurposeTranslations
  acceptAll?: string
  declineAll?: string
  close?: string
  save?: string
  [serviceName: string]: unknown
}

export interface KlaroConfig {
  version?: number
  elementID?: string
  storageMethod?: 'cookie' | 'localStorage'
  storageName?: string
  cookieExpiresAfterDays?: number
  cookieDomain?: string
  cookiePath?: string
  lang?: string
  default?: boolean
  mustConsent?: boolean
  acceptAll?: boolean
  hideDeclineAll?: boolean
  hideLearnMore?: boolean
  noticeAsModal?: boolean
  disablePoweredBy?: boolean
  translations?: Record<string, KlaroLocaleTranslations>
  services: KlaroService[]
  callback?: (consent: boolean, service: KlaroService) => void
}
