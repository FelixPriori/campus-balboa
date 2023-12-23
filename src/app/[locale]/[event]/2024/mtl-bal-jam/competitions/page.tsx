import Favicon from '@/app/mtl-bal-jam-favicon.ico'
import BigOG from '@/app/mtl-bal-jam-og-512.png'
import Main from '@/layout/main';
import { Header, Judges, Sponsors, Footer, MixAndMatch, Music } from './sections';
import Navigation from '../components/Navigation';
import MobileNavigation from '@/app/[locale]/components/MobileNavigation';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props) {
  const siteUrl = 'https://www.campusbalboa.org'

  if (params.locale === 'fr') {
    return {
      title: 'Compétitions | MTL BAL JAM 2024',
      description: 'Compétitions du MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024',
      alternates: {
        canonical: `${siteUrl}/fr/evenements/2024/mtl-bal-jam/competitions`
      },
      icons: [
        { rel: 'icon', url: Favicon.src }
      ],
      openGraph: {
        images: [
          {
            url: BigOG.src,
            alt: 'MTL BAL JAM 2024 logo',
            width: 512,
            height: 512,
          }
        ],
        title: 'Compétitions | MTL BAL JAM 2024',
        locale: 'fr',
        description: 'Compétitions du MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024'
      },
    }
  } else {
    return {
      title: 'Competitions | MTL BAL JAM 2024',
      description: 'Competitions of MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      alternates: {
        canonical: `${siteUrl}/en/events/2024/mtl-bal-jam/competitions`
      },
      icons: [
        { rel: 'icon', url: Favicon.src }
      ],
      openGraph: {
        images: [
          {
            url: BigOG.src,
            alt: 'MTL BAL JAM 2024 logo',
            width: 512,
            height: 512,
          }
        ],
        title: 'Competitions | MTL BAL JAM 2024',
        locale: 'en',
        description: 'Competitions of MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      },
    }
  }
}

const base = 'Events.2024.MtlBalJam.navigation'

export default function MbjCompetitions() {
  return (
    <>
      <Navigation slug="/competitions" />
      <MobileNavigation
        pages={['home', 'music', 'venue', 'instructors', 'activities', 'competitions']}
        base={base}
        switcherOptions={{
          frUrl: '/evenements/2024/mtl-bal-jam',
          enUrl: '/events/2024/mtl-bal-jam',
          slug: '/competitions',
          styling: 'mbjStyling'
        }}
      />
      <Main styles={{ borderRadius: '0.625rem' }}>
        <Header />
        <MixAndMatch />
        <Music />
        <Judges />
        <Sponsors />
      </Main>
      <Footer />
    </>
  )
}