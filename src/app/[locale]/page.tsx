import {
  Hero, 
  MissionsSection, 
  AboutUsSection, 
  EventsSection,
  FeaturedSection,
  Footer
} from './sections';

export default function Home() {
  return (
    <>
      <Hero />
      <MissionsSection />
      <AboutUsSection />
      <EventsSection />
      <FeaturedSection />
      <Footer />
    </>
  )
}