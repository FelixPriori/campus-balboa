import Hero from './Hero'
import FeaturedSection from './Featured'
import CalendarSection from './Calendar'
import EventsSection from './Events'
import MissionsSection from './Missions'
import AboutUsSection from './AboutUs'
import MembershipSection from './Membership'
import Footer from './Footer'
import { Locale } from '@/i18n'
import { getDictionary } from '../dictionaries'
import type { HomePageSection } from '@/app/_lib/api'

export default async function sectionsRenderer(section: HomePageSection, locale: Locale, preview = false) {
  const id = section.sys.id
  const title = section.title ?? ''
  const anchor = section.anchor ?? ''

  switch (section.sectionName) {
    case 'featured': {
      const dict = await getDictionary(locale)
      return (
        <FeaturedSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          locale={locale}
          embla={dict.Embla}
          preview={preview}
        />
      )
    }
    case 'calendar': {
      const dict = await getDictionary(locale)
      return (
        <CalendarSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          locale={locale}
          iFrameTitle={dict.Calendar.iFrameTitle}
          calendarEmbedTitle={dict.Calendar.calendarEmbedTitle}
          preview={preview}
        />
      )
    }
    case 'events':
      return (
        <EventsSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          helpText={section.helpText ?? undefined}
          locale={locale}
          preview={preview}
        />
      )
    case 'missions':
      return (
        <MissionsSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          locale={locale}
          preview={preview}
        />
      )
    case 'about':
      return (
        <AboutUsSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          locale={locale}
          preview={preview}
        />
      )
    case 'membership':
      return (
        <MembershipSection
          key={id}
          id={id}
          title={title}
          anchor={anchor}
          content={section.content ?? null}
          helpText={section.helpText ?? undefined}
          locale={locale}
          preview={preview}
        />
      )
  }
}

export { Hero, Footer }
