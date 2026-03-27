'use client'
import PillRadio, { OptionProps } from '../PillRadio'
import { Locale, EVENT_SEGMENTS, STATIC_PAGE_SEGMENTS } from '@/i18n'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  customStyling?: string
  customOptions?: OptionProps[]
  locale: Locale
}

const eventSegmentValues = Object.values(EVENT_SEGMENTS)
const staticSegmentValues = new Set(STATIC_PAGE_SEGMENTS.flatMap((m) => Object.values(m)))

const getSwitchLocaleHref = (locale: Locale, pathname?: string) => {
  if (!pathname) return '/'
  const segments = pathname.split('/')
  segments[1] = locale
  if (segments[2] && eventSegmentValues.includes(segments[2])) {
    segments[2] = EVENT_SEGMENTS[locale]
  } else if (segments[2] && staticSegmentValues.has(segments[2])) {
    const match = STATIC_PAGE_SEGMENTS.find((m) => Object.values(m).includes(segments[2]))
    if (match) segments[2] = match[locale]
  }
  return segments.join('/')
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  return (
    <PillRadio
      options={[
        {
          href: getSwitchLocaleHref('en', pathname),
          name: 'EN',
          active: locale === 'en',
        },
        {
          href: getSwitchLocaleHref('fr', pathname),
          name: 'FR',
          active: locale === 'fr',
        },
      ]}
    />
  )
}
