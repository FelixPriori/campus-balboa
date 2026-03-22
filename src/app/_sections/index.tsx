import Hero from './Hero'
import FeaturedSection from './Featured'
import CalendarSection from './Calendar'
import EventsSection from './Events'
import MissionsSection from './Missions'
import AboutUsSection from './AboutUs'
import Footer from './Footer'
import { Locale } from '@/i18n'
import { getDictionary } from '../dictionaries'

export default async function sectionsRenderer(section: any, locale: Locale) {
  switch (section.sectionName) {
    case 'featured': {
      const dict = await getDictionary(locale)
      return (
        <FeaturedSection
          key={section.sys.id}
          id={section.sys.id}
          title={section.title}
          anchor={section.anchor}
          locale={locale}
          embla={dict.Embla}
        />
      )
    }
    case 'calendar': {
      const dict = await getDictionary(locale)
      return (
        <CalendarSection
          key={section.sys.id}
          id={section.sys.id}
          title={section.title}
          anchor={section.anchor}
          locale={locale}
          iFrameTitle={dict.Calendar.iFrameTitle}
          calendarEmbedTitle={dict.Calendar.calendarEmbedTitle}
        />
      )
    }
    case 'events':
      return (
        <EventsSection
          key={section.sys.id}
          id={section.sys.id}
          title={section.title}
          anchor={section.anchor}
          helpText={section.helpText}
          locale={locale}
        />
      )
    case 'missions':
      return (
        <MissionsSection
          key={section.sys.id}
          id={section.sys.id}
          title={section.title}
          anchor={section.anchor}
          locale={locale}
        />
      )
    case 'about':
      return (
        <AboutUsSection
          key={section.sys.id}
          id={section.sys.id}
          title={section.title}
          anchor={section.anchor}
          locale={locale}
        />
      )
  }
}

export { Hero, Footer }
