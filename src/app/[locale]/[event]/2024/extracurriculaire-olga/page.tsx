import { unstable_setRequestLocale } from 'next-intl/server';
import BigOG from '@/app/olga-og.jpg'
import { About, Footer, Hero, Prices, Schedule } from './sections'
import Navigation from './components/Navigation'
import './olgaGlobals.scss'


type Props = {
    params: { locale: string }
}

export async function generateMetadata({ params }: Props) {
    unstable_setRequestLocale(params.locale);
    const siteUrl = 'https://www.campusbalboa.org'

    if (params.locale === 'fr') {
        return {
            title: 'Programme extracurriculaire avec Olga',
            description: 'Évenement de balboa à Montréal le 26-27-28 avril 2024',
            alternates: {
                canonical: `${siteUrl}/fr/evenements/2024/extracurriculaire-olga`
            },
            openGraph: {
                images: [
                    {
                        url: BigOG.src,
                        alt: 'Bannière du programme extracurriculaire avec Olga',
                        width: 1920,
                        height: 1005,
                    }
                ],
                title: 'Programme extracurriculaire avec Olga',
                locale: 'fr',
                description: 'Évenement de balboa à Montréal le 26-27-28 avril 2024'
            },
        }
    } else {
        return {
            title: 'Extracurricular Program with Olga',
            description: 'Balboa event happening in Montreal on April 26-27-28 2024',
            alternates: {
                canonical: `${siteUrl}/en/events/2024/extracurriculaire-olga`
            },
            openGraph: {
                images: [
                    {
                        url: BigOG.src,
                        alt: 'Extracurricular program with Olga event banner',
                        width: 1920,
                        height: 1005,
                    }
                ],
                title: 'Extracurricular Program with Olga',
                locale: 'en',
                description: 'Balboa event happening in Montreal on April 26-27-28 2024',
            },
        }
    }
}

export default function Olga() {
    return (
        <div className='olga-page'>
            <Navigation />
            <Hero />
            <Prices />
            <About />
            <Schedule />
            <Footer />
        </div>
    )
}