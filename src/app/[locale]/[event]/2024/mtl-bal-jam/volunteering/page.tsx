import { unstable_setRequestLocale } from 'next-intl/server';
import Favicon from '@/app/mtl-bal-jam-favicon.ico'
import BigOG from '@/app/mtl-bal-jam-og-512.png'
import Main from '@/layout/main';
import { Volunteering } from './sections';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const siteUrl = 'https://www.campusbalboa.org'

  if (params.locale === 'fr') {
    return {
      title: 'Bénévolat | MTL BAL JAM 2024',
      description: 'Faire du bénévolat au MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024',
      alternates: {
        canonical: `${siteUrl}/fr/evenements/2024/mtl-bal-jam/volunteering`
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
        title: 'Bénévolat | MTL BAL JAM 2024',
        locale: 'fr',
        description: 'Faire du bénévolat au MTL BAL JAM, l\'évenement de balboa à Montréal le 21-22-23 juin 2024'
      },
    }
  } else {
    return {
      title: 'Volunteering | MTL BAL JAM 2024',
      description: 'Volunteer for the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      alternates: {
        canonical: `${siteUrl}/en/events/2024/mtl-bal-jam/volunteering`
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
        title: 'Volunteering | MTL BAL JAM 2024',
        locale: 'en',
        description: 'Volunteer for the MTL BAL JAM, a Balboa event happening in Montreal on June 21-22-23 2024',
      },
    }
  }
}

export default function MbjVolunteering() {
  return (
    <Main styles={{ borderRadius: '0.625rem' }}>
      <Volunteering />
    </Main>
  )
}