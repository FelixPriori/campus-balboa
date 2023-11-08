import Favicon from '@/app/mtl-bal-jam-favicon.ico'
import BigOG from '@/app/mtl-bal-jam-og-512.png'
import Main from '@/layout/main';
import { Header, Band, DJs, Footer } from './sections';
import Navigation from '../components/Navigation';
import MobileNavigation from '@/app/[locale]/components/MobileNavigation';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params}: Props) {
  const siteUrl = 'https://www.campusbalboa.org'

  if (params.locale === 'fr') {
    return {
      title: 'Musique | MTL BAL JAM 2024',
      description: 'Musique pour MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024',
      alternates: {
        canonical: `${siteUrl}/fr/evenements/2024/mtl-bal-jam/music`
      },
      icons: [
        {rel: 'icon', url: Favicon.src}
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
        title: 'Musique | MTL BAL JAM 2024',
        locale: 'fr',
        description: 'Musique pour MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024'
      },
    }
  } else {
    return {
      title: 'Music | MTL BAL JAM 2024',
      description: 'Music for the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      alternates: {
        canonical: `${siteUrl}/en/events/2024/mtl-bal-jam/music`
      },
      icons: [
        {rel: 'icon', url: Favicon.src}
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
        title: 'Music | MTL BAL JAM 2024',
        locale: 'en',
        description: 'Music for the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      },
    }
  }
}

const base = 'Events.2024.MtlBalJam.navigation'

export default function MbjMusic() {
  return (
    <>
      <Navigation slug="/music" />
      <MobileNavigation 
        pages={['home','music']} 
        base={base} 
        switcherOptions={{
          frUrl: '/evenements/2024/mtl-bal-jam', 
          enUrl: '/events/2024/mtl-bal-jam',
          slug: '/music',
          styling: 'mbjStyling'
        }}
      />
      <Main styles={{borderRadius: '0.625rem'}}>
        <Header />
        <Band />
        <DJs />
      </Main>
      <Footer />
    </>
  )
}