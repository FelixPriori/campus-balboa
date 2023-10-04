import {
  Hero, 
  MissionsSection, 
  AboutUsSection, 
  EventsSection, 
  Footer
} from './sections';

export default function Home() {
  return (
    <>
      <Hero />
      <MissionsSection />
      <AboutUsSection />
      <EventsSection />
      <Footer />
    </>
  )
}