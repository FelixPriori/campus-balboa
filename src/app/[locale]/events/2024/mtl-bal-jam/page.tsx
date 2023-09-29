import { Metadata } from 'next'
import styles from './page.module.css'
import {useLocale, useTranslations} from 'next-intl';
import Button from '@/components/button/button';
import useRouterWithLocale from '@/hooks/useRouterWithLocale'
import Logo from '@/components/logo/logo';
import EventSection from '@/components/eventSection/eventSection';
import Card from '@/components/card/card';
import PillRadio from '@/components/pillRadio/pillRadio';
import TBA from './components/TBA';

type Props = {
  params: { locale: string }
}

export async function generateMetadata({params}: Props) {
  if (params.locale === 'fr') {
    return {
      title: 'MTL BAL JAM 2024',
      description: 'Évenement de balboa à Montréal le 21-22-23 juin 2024',
      openGraph: {
        images: [
          {
            url: '/opengraph-image.png',
            alt: 'Campus Balboa logo'
          }
        ],
        title: 'MTL BAL JAM 2024',
      },
    }
  } else {
    return {
      title: 'MTL BAL JAM 2024',
      description: 'Balboa event happening in Montreal on June 21-22-23 2024',
      openGraph: {
        images: [
          {
            url: '/opengraph-image.png',
            alt: 'Campus Balboa logo'
          }
        ],
        title: 'MTL BAL JAM 2024',
      },
    }
  }
}


export default function Event() {
  // const t = useTranslations('Event');
  // const router = useRouterWithLocale();
  // const locale = useLocale()
  
  return (
    <div className={styles.eventPage}>
      <TBA />
      {/* <EventSection
        imgSrc="/balboa-placeholder-one.webp"
        imgAlt="Balboa dancers on the beach"
        clipDirection='bottom-left'
      >
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.navigation}>
          <Button onClick={() => router.push('/')} look="flat">
            <Logo/>
          </Button>
          <PillRadio 
            options={
              [
                {
                  onClick: () => router.setLang('en'),
                  name: 'EN',
                  active: locale === 'en'
                },
                {
                  onClick: () => router.setLang('fr'),
                  name: 'FR',
                  active: locale === 'fr'
                },
              ]
            }
          />
        </div>
      </EventSection>
      <EventSection
        imgSrc="/balboa-placeholder-two.jpg"
        imgAlt="Balboa dancers on the beach"
        clipDirection='top-right-bottom-right'
        style={{transform: 'translateY(-100px)'}}
      >
        <Card>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
          <Button>{t('registerCta')}</Button>
        </Card>
      </EventSection>
      <EventSection
        imgSrc="/balboa-placeholder-three.jpg"
        imgAlt="Balboa dancers on the beach"
        clipDirection='top-left'
        style={{transform: 'translateY(-200px)'}}
      >
        <Card>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum tenetur sequi at sed labore molestiae aspernatur sit magni dolorum architecto, voluptatum, officia, porro ipsum similique neque itaque fuga et!
          </p>
        </Card>
      </EventSection> */}
    </div>
  )
}