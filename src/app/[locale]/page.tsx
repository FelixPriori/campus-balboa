import Main from '@/layout/main'
import {
  Hero, 
  MissionsSection, 
  AboutUsSection, 
  EventsSection,
  FeaturedSection,
  Footer,
  Calendar
} from './sections';

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <FeaturedSection />
        <Calendar />
        <EventsSection />
        <MissionsSection />
        <AboutUsSection />
        <Footer />
      </Main>
    </>
  )
}