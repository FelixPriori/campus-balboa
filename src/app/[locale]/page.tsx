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
      <Hero />
      <FeaturedSection />
      <Calendar />
      <EventsSection />
      <MissionsSection />
      <AboutUsSection />
      <Footer />
    </>
  )
}