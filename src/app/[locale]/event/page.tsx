'use client';
import { Metadata } from 'next'
import styles from './page.module.css'
import {useLocale, useTranslations} from 'next-intl';
import Button from '@/components/button/button';
import userRouterWithLocale from '@/hooks/useRouterWithLocale'
import Logo from '@/components/logo/logo';
import EventSection from '@/components/eventSection/eventSection';
import Card from '@/components/card/card';
import PillRadio from '@/components/pillRadio/pillRadio';

export const metadata: Metadata = {
  title: 'Balboa Event',
  description: 'Balboa Event hosted by the OBNL',
}


export default function Event() {
  const t = useTranslations('Event');
  const router = userRouterWithLocale();
  const locale = useLocale()
  
  return (
    <div className={styles.eventPage}>
      <EventSection
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
      </EventSection>
    </div>
  )
}