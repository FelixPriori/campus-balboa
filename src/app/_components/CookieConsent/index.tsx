'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import './klaro-overrides.css'
import { buildKlaroConfig } from './klaro-config'
import type { DictionaryType } from '@/app/dictionaries'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

interface CookieConsentProps {
  locale: string
  translations: DictionaryType['CookieConsent']
}

export default function CookieConsent({ locale, translations }: CookieConsentProps) {
  const [analyticsConsent, setAnalyticsConsent] = useState(false)

  useEffect(() => {
    async function init() {
      const Klaro = await import('klaro/dist/klaro-no-css')

      const config = buildKlaroConfig(locale, translations)

      Klaro.setup(config)

      const manager = Klaro.getManager(config)

      setAnalyticsConsent(!!manager.getConsent('googleAnalytics'))

      manager.watch({
        update(_manager: typeof manager, eventType: string) {
          if (eventType === 'saveConsents') {
            setAnalyticsConsent(!!_manager.getConsent('googleAnalytics'))
          }
        },
      })
    }

    init()
  }, [locale, translations])

  return analyticsConsent && GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null
}
