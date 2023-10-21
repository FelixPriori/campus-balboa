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

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params}: Props) {
  if (params.locale === 'fr') {
    return {
      title: 'Campus Balboa',
      description: 'Un organisme à but non lucratif entièrement dédié à favoriser la croissance et l’excellence du balboa à Montréal et ses environs.',
      openGraph: {
        images: [
          {
            url: '/opengraph-image.jpg',
            alt: 'Dessin abstrait de bulles'
          }
        ],
        title: 'Campus Balboa',
        locale: 'fr',
        description: 'Un organisme à but non lucratif entièrement dédié à favoriser la croissance et l’excellence du balboa à Montréal et ses environs.',
      },
    }
  } else {
    return {
      title: 'Campus Balboa',
      description: 'A nonprofit entirely dedicated to fostering balboa growth and excellence in and around Montreal.',
        openGraph: {
        images: [
          {
            url: '/opengraph-image.jpg',
            alt: 'Drawing of abstract bubbles'
          }
        ],
        title: 'Campus Balboa',
        locale: 'en',
        description: 'A nonprofit entirely dedicated to fostering balboa growth and excellence in and around Montreal.',
      },
    }
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <FeaturedSection />
        <Calendar />
        <EventsSection />
        <MissionsSection />
        <AboutUsSection />
      </Main>
      <Footer />
    </>
  )
}