import Favicon from '@/app/mtl-bal-jam-favicon.ico'
import BigOG from '@/app/mtl-bal-jam-og-512.png'
import SmallOG from '@/app/mtl-bal-jam-og-192.png'
import { Band, Footer, Header, Instructors, Navigation, Venue } from './sections';
import Main from '@/layout/main';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params}: Props) {
  if (params.locale === 'fr') {
    return {
      title: 'MTL BAL JAM 2024',
      description: 'Évenement de balboa à Montréal le 21-22-23 juin 2024',
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
          },
          {
            url: SmallOG.src,
            alt: 'MTL BAL JAM 2024 logo',
            width: 192,
            height: 192,
          }
        ],
        title: 'MTL BAL JAM 2024',
        locale: 'fr',
        description: 'Évenement de balboa à Montréal le 21-22-23 juin 2024'
      },
    }
  } else {
    return {
      title: 'MTL BAL JAM 2024',
      description: 'Balboa event happening in Montreal on June 21-22-23 2024',
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
          },
          {
            url: SmallOG.src,
            alt: 'MTL BAL JAM 2024 logo',
            width: 192,
            height: 192,
          }
        ],
        title: 'MTL BAL JAM 2024',
        locale: 'en',
        description: 'Balboa event happening in Montreal on June 21-22-23 2024',
      },
    }
  }
}


export default function Event() {
  return (
    <>
      <Navigation />
      <Main styles={{borderRadius: '0.625rem'}}>
        <Header />
        <Instructors />
        <Venue />
        <Band />
      </Main>
    </>
  )
}